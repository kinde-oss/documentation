// Generates the LLM-facing text files into dist/ after `astro build`:
//   dist/llms.txt                  index, from scripts/llms.template.txt + an auto-built section list
//   dist/llms-abridged.txt         frontmatter only (title, summary, keywords, topics) for every page
//   dist/llms-full.txt             every page, full content
//   dist/_llms-txt/<section>.txt   one file per top-level folder in src/content/docs
//
// Output goes to dist/ (not public/) because Astro has already copied public/ by the time postbuild runs.
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';
import { globSync } from 'glob';

const DOCS_DIR = path.join(process.cwd(), 'src/content/docs');
const OUT_DIR = path.join(process.cwd(), 'dist');
const TEMPLATE_PATH = fileURLToPath(new URL('./llms.template.txt', import.meta.url));
const SITE_URL = 'https://docs.kinde.com';
const SECTION_LINKS_PLACEHOLDER = '{{SECTION_LINKS}}';

// Curated label, description and stable page_id per top-level docs folder.
// A new folder is picked up automatically; add it here to give it a nicer label and description.
const SECTIONS = {
  'authenticate': { label: 'Authentication', description: 'complete documentation for authentication features', pageId: '9b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e' },
  'billing': { label: 'Billing', description: 'complete documentation for billing and subscription management', pageId: '0c1d2e3f-4a5b-6c7d-8e9f-0a1b2c3d4e5f' },
  'build': { label: 'Build', description: 'complete documentation for building applications on Kinde', pageId: '1d2e3f4a-5b6c-7d8e-9f0a-1b2c3d4e5f6a' },
  'contribute': { label: 'Contribute', description: 'guidelines for contributing to the Kinde documentation', pageId: '2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b' },
  'design': { label: 'Design', description: 'complete documentation for branding, page design and content customization', pageId: '3f4a5b6c-7d8e-9f0a-1b2c-3d4e5f6a7b8c' },
  'developer-tools': { label: 'Developer Tools', description: 'complete documentation for developer tools and APIs', pageId: '4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d' },
  'get-started': { label: 'Get Started', description: 'complete documentation for getting started with Kinde', pageId: '5b6c7d8e-9f0a-1b2c-3d4e-5f6a7b8c9d0e' },
  'integrate': { label: 'Integrations', description: 'complete documentation for third-party integrations', pageId: '6c7d8e9f-0a1b-2c3d-4e5f-6a7b8c9d0e1f' },
  'machine-to-machine-applications': { label: 'Machine-to-Machine', description: 'complete documentation for M2M applications', pageId: '7d8e9f0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a' },
  'manage-users': { label: 'Manage Users', description: 'complete documentation for user management', pageId: '8e9f0a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b' },
  'manage-your-account': { label: 'Manage Your Account', description: 'complete documentation for account management', pageId: '9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c' },
  'manage-your-apis': { label: 'Manage Your APIs', description: 'complete documentation for API management', pageId: '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d' },
  'mcp-servers': { label: 'MCP Servers', description: 'complete documentation for Kinde MCP servers and managing Kinde with AI agents', pageId: '82c23edc-bba0-4099-8e9a-2a60c9f226b2' },
  'properties': { label: 'Properties', description: 'complete documentation for custom properties', pageId: '1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e' },
  'releases': { label: 'Releases', description: 'complete documentation for feature flags and release management', pageId: '2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f' },
  'testing': { label: 'Testing', description: 'complete documentation for end-to-end testing of apps that use Kinde', pageId: '3ab7ab91-6dd6-4ae5-9262-845610d8ae83' },
  'trust-center': { label: 'Trust Center', description: 'complete documentation for security, privacy, compliance and agreements', pageId: '3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a' },
  'workflows': { label: 'Workflows', description: 'complete documentation for workflow automation', pageId: '4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b' },
  'workforce-identity': { label: 'Workforce Identity', description: 'complete documentation for using Kinde as a SAML identity provider', pageId: '03a725f4-4412-4ac5-9c1f-effebb5101e9' },
};

// "manage-your-apis" -> "Manage your apis"
function formatFolderName(name) {
  return name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' ');
}

function formatList(value) {
  if (!value || value.length === 0) return '';
  return Array.isArray(value) ? value.join(', ') : String(value);
}

function formatDate(value) {
  if (value instanceof Date) return value.toISOString().split('T')[0];
  return value || '';
}

// Stable UUID-shaped id derived from a name, for sections not listed in SECTIONS.
function deterministicUuid(name) {
  const hex = crypto.createHash('sha1').update(`kinde-llms-txt:${name}`).digest('hex');
  return `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20, 32)}`;
}

// Keep the Markdown structure (headings, lists, code blocks) so the text stays readable for LLMs.
// Drops MDX component imports (code blocks are kept verbatim) and collapses runs of blank lines.
function cleanContent(content) {
  const out = [];
  let fence = null;

  for (const line of content.replace(/\r\n?/g, '\n').split('\n')) {
    const fenceMatch = line.match(/^\s*(`{3,}|~{3,})/);

    if (fence) {
      out.push(line);
      const marker = fenceMatch?.[1];
      if (marker && marker[0] === fence[0] && marker.length >= fence.length && line.trim() === marker) {
        fence = null;
      }
      continue;
    }

    if (fenceMatch) {
      fence = fenceMatch[1];
      out.push(line);
      continue;
    }

    if (/^import\s.+\sfrom\s+['"][^'"]+['"];?\s*$/.test(line)) continue;

    out.push(line.trimEnd());
  }

  return out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
}

function loadDocs() {
  const files = globSync('**/*.mdx', { cwd: DOCS_DIR, posix: true });
  const docs = [];

  for (const relativePath of files) {
    try {
      const { data: fm, content } = matter(fs.readFileSync(path.join(DOCS_DIR, relativePath), 'utf8'));
      const parts = relativePath.split('/');

      docs.push({
        path: relativePath,
        section: parts[0],
        subsection: parts.length > 2 ? parts[1] : '',
        fileName: path.basename(relativePath, '.mdx'),
        title: fm.title || '',
        description: fm.description || '',
        aiSummary: fm.ai_summary || '',
        updated: formatDate(fm.updated),
        keywords: formatList(fm.keywords) || formatList(fm.metadata?.keywords),
        topics: formatList(fm.topics) || formatList(fm.metadata?.topics),
        content: cleanContent(content),
      });
    } catch (error) {
      console.error(`Error processing ${relativePath}:`, error.message);
      process.exitCode = 1;
    }
  }

  return docs.sort((a, b) => a.path.localeCompare(b.path));
}

function getSections(docs) {
  const names = [...new Set(docs.filter((doc) => doc.path.includes('/')).map((doc) => doc.section))].sort();

  return names.map((name) => {
    const curated = SECTIONS[name];
    if (curated) return { name, ...curated };

    const index = docs.find((doc) => doc.path === `${name}/index.mdx`);
    const label = formatFolderName(name);
    console.warn(`Section "${name}" has no curated entry in SECTIONS (scripts/generate-llms-txt.js); using defaults.`);
    return {
      name,
      label,
      description: index?.description || `complete documentation for ${label.toLowerCase()}`,
      pageId: deterministicUuid(name),
    };
  });
}

// Frontmatter plus an optional "# heading" and intro paragraph, shared by every generated file.
// Values are JSON-quoted, which is valid YAML and safe for quotes or colons in descriptions.
function renderHeader({ pageId, title, description, topic, extraKeywords, intro }) {
  const keywords = ['llm training', 'documentation', ...extraKeywords, 'frontmatter', 'metadata', 'kinde'];

  let out = `---
page_id: ${pageId}
title: ${JSON.stringify(title)}
description: ${JSON.stringify(description)}
sidebar:
  order: 1
topics:
  - llm
  - documentation
  - training
  - ${topic}
sdk: []
languages:
  - markdown
  - text
audience: developers
complexity: beginner
keywords:
${keywords.map((keyword) => `  - ${keyword}`).join('\n')}
updated: ${formatDate(new Date())}
featured: false
deprecated: false
ai_summary: ${JSON.stringify(description)}
---

`;
  if (intro) out += `# ${title}\n\n${intro}\n\n`;
  return out;
}

function renderFullPage(doc) {
  let titleWithPath = formatFolderName(doc.section);
  if (doc.subsection) titleWithPath += ` - ${formatFolderName(doc.subsection)}`;
  titleWithPath += ` - ${doc.title || 'Untitled'}`;

  let out = `# ${titleWithPath}\n\n`;
  if (doc.description) out += `> ${doc.description}\n\n`;
  if (doc.updated) out += `Last updated: ${doc.updated}\n\n`;
  const metadata = [doc.keywords, doc.topics].filter(Boolean).join('\n');
  if (metadata) out += `${metadata}\n\n`;
  if (doc.content) out += `${doc.content}\n\n`;
  return out;
}

function renderAbridged(docs, sectionLabels) {
  let out = renderHeader({
    pageId: '7f8a9b2c-4d5e-6f7a-8b9c-0d1e2f3a4b5c',
    title: 'Kinde Documentation - Abridged',
    description: 'Abridged version of Kinde documentation containing titles, descriptions, keywords, and topics from all documentation files for LLM training',
    topic: 'abridged',
    extraKeywords: ['abridged'],
    intro: 'This is an abridged version of the Kinde documentation containing titles, descriptions, keywords, and topics from all documentation files.',
  });

  let currentSection = '';
  for (const doc of docs) {
    if (doc.section !== currentSection) {
      currentSection = doc.section;
      out += `\n## ${sectionLabels.get(doc.section) ?? formatFolderName(doc.section)}\n\n`;
    }

    out += `### ${doc.title || doc.fileName}\n\n`;
    const blocks = [
      doc.updated && `Last updated: ${doc.updated}`,
      [doc.aiSummary || doc.description, doc.keywords, doc.topics].filter(Boolean).join('\n'),
    ].filter(Boolean);
    if (blocks.length) out += `${blocks.join('\n\n')}\n\n`;
  }
  return out;
}

function renderFull(docs) {
  return renderHeader({
    pageId: '8a9b0c1d-2e3f-4a5b-6c7d-8e9f0a1b2c3d',
    title: 'Kinde Documentation - Complete',
    description: 'Complete documentation for Kinde containing titles, descriptions, keywords, topics, and full content from all documentation files for LLM training',
    topic: 'complete',
    extraKeywords: ['complete', 'full content'],
    intro: 'This is the complete documentation for Kinde containing titles, descriptions, keywords, topics, and full content from all documentation files.',
  }) + docs.map(renderFullPage).join('');
}

function renderSection(section, docs) {
  const scope = `Kinde's ${section.label} section containing titles, descriptions, keywords, topics, and full content from all documentation files in this section`;
  return renderHeader({
    pageId: section.pageId,
    title: `Kinde Documentation - ${section.label}`,
    description: `Complete documentation for ${scope} for LLM training`,
    topic: section.name,
    extraKeywords: [section.name, 'section'],
    intro: `This is the complete documentation for ${scope}.`,
  }) + docs.map(renderFullPage).join('');
}

function renderIndex(sections) {
  const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');
  if (!template.includes(SECTION_LINKS_PLACEHOLDER)) {
    throw new Error(`${TEMPLATE_PATH} must contain ${SECTION_LINKS_PLACEHOLDER}`);
  }

  const links = sections
    .map((s) => `- [${s.label}](${SITE_URL}/_llms-txt/${s.name}.txt): ${s.description}`)
    .join('\n');

  return renderHeader({
    pageId: '5f6a7b8c-9d0e-1f2a-3b4c-5d6e7f8a9b0c',
    title: 'Kinde Documentation - LLM Training Files',
    description: 'Index of LLM training files for Kinde documentation including abridged, complete, and section-specific documentation files',
    topic: 'index',
    extraKeywords: ['index'],
  }) + template.replace(SECTION_LINKS_PLACEHOLDER, links);
}

function write(relativePath, content) {
  const outPath = path.join(OUT_DIR, relativePath);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, content);
  console.log(`Created ${path.relative(process.cwd(), outPath)}`);
}

const docs = loadDocs();
const sections = getSections(docs);

write('llms-abridged.txt', renderAbridged(docs, new Map(sections.map((s) => [s.name, s.label]))));
write('llms-full.txt', renderFull(docs));
for (const section of sections) {
  write(`_llms-txt/${section.name}.txt`, renderSection(section, docs.filter((doc) => doc.section === section.name)));
}
write('llms.txt', renderIndex(sections));

console.log(`Processed ${docs.length} pages across ${sections.length} sections`);
