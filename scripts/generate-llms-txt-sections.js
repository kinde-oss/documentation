import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { globSync } from 'glob';

// Function to get relative path from src/content/docs
function getRelativePath(filePath) {
  const docsIndex = filePath.indexOf('/src/content/docs/');
  return filePath.substring(docsIndex + '/src/content/docs/'.length);
}

// Function to format keywords and topics as strings
function formatArray(arr) {
  if (!arr || arr.length === 0) return '';
  return Array.isArray(arr) ? arr.join(', ') : arr;
}

// Function to extract keywords and topics from frontmatter (handles nested metadata)
function extractKeywordsAndTopics(frontmatter) {
  let keywords = '';
  let topics = '';

  // Check for direct keywords and topics
  if (frontmatter.keywords) {
    keywords = formatArray(frontmatter.keywords);
  }
  if (frontmatter.topics) {
    topics = formatArray(frontmatter.topics);
  }

  // Check for nested metadata structure
  if (frontmatter.metadata) {
    if (frontmatter.metadata.keywords && !keywords) {
      keywords = formatArray(frontmatter.metadata.keywords);
    }
    if (frontmatter.metadata.topics && !topics) {
      topics = formatArray(frontmatter.metadata.topics);
    }
  }

  return { keywords, topics };
}

// Function to clean content by removing all line breaks (like minified JS)
function cleanContent(content) {
  // Remove all line breaks and extra spaces, making it like minified JavaScript
  return content
    .replace(/\n/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

// Function to create title with folder path
function createTitleWithPath(filePath, title) {
  const pathParts = filePath.split('/');
  const section = pathParts[0];
  const subsection = pathParts.length > 1 ? pathParts[1] : '';

  let titleWithPath = section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ');

  if (subsection) {
    titleWithPath += ' - ' + subsection.charAt(0).toUpperCase() + subsection.slice(1).replace(/-/g, ' ');
  }

  titleWithPath += ' - ' + (title || 'Untitled');

  return titleWithPath;
}

// Function to extract documentation for a specific section
function extractSectionDocs(sectionName) {
  const docsDirectory = path.join(process.cwd(), './src/content/docs');
  const sectionPattern = `${sectionName}/**/*.mdx`;
  const mdxFiles = globSync(sectionPattern, { cwd: docsDirectory, absolute: true });

  const results = [];

  for (const filePath of mdxFiles) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter, content } = matter(fileContent);

      const relativePath = getRelativePath(filePath);
      const fileName = path.basename(filePath, '.mdx');

      const { keywords, topics } = extractKeywordsAndTopics(frontmatter);

      results.push({
        path: relativePath,
        fileName: fileName,
        title: frontmatter.title || '',
        description: frontmatter.description || '',
        keywords: keywords,
        topics: topics,
        content: cleanContent(content)
      });
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }

  return results.sort((a, b) => a.path.localeCompare(b.path));
}

// Function to generate frontmatter for section files
function generateSectionFrontmatter(sectionName) {
  const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  const sectionTitle = sectionName.charAt(0).toUpperCase() + sectionName.slice(1).replace(/-/g, ' ');
  
  // Consistent UUIDs for each section
  const sectionUUIDs = {
    'authenticate': '9b0c1d2e-3f4a-5b6c-7d8e-9f0a1b2c3d4e',
    'billing': '0c1d2e3f-4a5b-6c7d-8e9f-0a1b2c3d4e5f',
    'build': '1d2e3f4a-5b6c-7d8e-9f0a-1b2c3d4e5f6a',
    'contribute': '2e3f4a5b-6c7d-8e9f-0a1b-2c3d4e5f6a7b',
    'design': '3f4a5b6c-7d8e-9f0a-1b2c-3d4e5f6a7b8c',
    'developer-tools': '4a5b6c7d-8e9f-0a1b-2c3d-4e5f6a7b8c9d',
    'get-started': '5b6c7d8e-9f0a-1b2c-3d4e-5f6a7b8c9d0e',
    'integrate': '6c7d8e9f-0a1b-2c3d-4e5f-6a7b8c9d0e1f',
    'machine-to-machine-applications': '7d8e9f0a-1b2c-3d4e-5f6a-7b8c9d0e1f2a',
    'manage-users': '8e9f0a1b-2c3d-4e5f-6a7b-8c9d0e1f2a3b',
    'manage-your-account': '9f0a1b2c-3d4e-5f6a-7b8c-9d0e1f2a3b4c',
    'manage-your-apis': '0a1b2c3d-4e5f-6a7b-8c9d-0e1f2a3b4c5d',
    'properties': '1b2c3d4e-5f6a-7b8c-9d0e-1f2a3b4c5d6e',
    'releases': '2c3d4e5f-6a7b-8c9d-0e1f-2a3b4c5d6e7f',
    'trust-center': '3d4e5f6a-7b8c-9d0e-1f2a-3b4c5d6e7f8a',
    'workflows': '4e5f6a7b-8c9d-0e1f-2a3b-4c5d6e7f8a9b'
  };
  
  const pageId = sectionUUIDs[sectionName] || `llms-${sectionName}-fallback`;
  
  return `---
page_id: ${pageId}
title: Kinde Documentation - ${sectionTitle}
description: "Complete documentation for Kinde's ${sectionTitle.toLowerCase()} section containing titles, descriptions, keywords, topics, and full content from all documentation files in this section for LLM training"
sidebar:
  order: 1
topics:
  - llm
  - documentation
  - training
  - ${sectionName}
sdk: []
languages:
  - markdown
  - text
audience: developers
complexity: beginner
keywords:
  - llm training
  - documentation
  - ${sectionName}
  - section
  - frontmatter
  - metadata
  - kinde
updated: ${currentDate}
featured: false
deprecated: false
ai_summary: "Complete documentation for Kinde's ${sectionTitle.toLowerCase()} section containing titles, descriptions, keywords, topics, and full content from all documentation files in this section for LLM training"
---

`;
}

// Function to generate section documentation file
function generateSectionFile(sectionName) {
  const results = extractSectionDocs(sectionName);
  
  if (results.length === 0) {
    console.log(`No files found for section: ${sectionName}`);
    return;
  }

  // Create the section documentation content with frontmatter
  const sectionTitle = sectionName.charAt(0).toUpperCase() + sectionName.slice(1).replace(/-/g, ' ');
  let sectionContent = generateSectionFrontmatter(sectionName);
  sectionContent += `# Kinde Documentation - ${sectionTitle}\n\n`;
  sectionContent += `This is the complete documentation for Kinde's ${sectionTitle.toLowerCase()} section containing titles, descriptions, keywords, topics, and full content from all documentation files in this section.\n\n`;

  for (const result of results) {
    // Add page title as level 1 heading with folder path
    const titleWithPath = createTitleWithPath(result.path, result.title);
    sectionContent += `# ${titleWithPath}\n\n`;

    // Add description as blockquote
    if (result.description) {
      sectionContent += `> ${result.description}\n\n`;
    }

    // Add keywords and topics if available
    if (result.keywords || result.topics) {
      let metadata = '';
      if (result.keywords) {
        metadata += result.keywords;
      }
      if (result.topics) {
        if (metadata) metadata += '\n';
        metadata += result.topics;
      }
      if (metadata) {
        sectionContent += metadata + '\n\n';
      }
    }

    // Add the full content
    if (result.content) {
      sectionContent += result.content + '\n\n';
    }
  }

  // Write to build output (dist/) so files are included in the deployed site.
  const outputDir = path.join('dist', '_llms-txt');
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, `${sectionName}.txt`);
  fs.writeFileSync(outputPath, sectionContent);
  console.log(`Section documentation created: ${outputPath}`);
  console.log(`Processed ${results.length} files for ${sectionName}`);
}

// Get all top-level directories
function getTopLevelSections() {
  const docsDirectory = path.join(process.cwd(), './src/content/docs');
  const items = fs.readdirSync(docsDirectory, { withFileTypes: true });
  
  return items
    .filter(item => item.isDirectory())
    .map(item => item.name);
}

// Run the extraction if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const sections = getTopLevelSections();
  
  console.log('Generating section documentation files...');
  console.log(`Found ${sections.length} sections: ${sections.join(', ')}\n`);
  
  for (const section of sections) {
    generateSectionFile(section);
  }
  
  console.log('\nAll section documentation files have been generated in dist/_llms-txt/');
}
