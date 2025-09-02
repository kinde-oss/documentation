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

// Function to extract frontmatter from MDX files
export function extractFrontmatter() {
  const docsDirectory = path.join(process.cwd(), './src/content/docs');
  const mdxFiles = globSync('**/*.mdx', { cwd: docsDirectory, absolute: true });
  
  const results = [];
  
  for (const filePath of mdxFiles) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data: frontmatter } = matter(fileContent);
      
      const relativePath = getRelativePath(filePath);
      const fileName = path.basename(filePath, '.mdx');
      
      const { keywords, topics } = extractKeywordsAndTopics(frontmatter);
      
      results.push({
        path: relativePath,
        fileName: fileName,
        title: frontmatter.title || '',
        description: frontmatter.description || '',
        keywords: keywords,
        topics: topics
      });
    } catch (error) {
      console.error(`Error processing ${filePath}:`, error.message);
    }
  }
  
  return results.sort((a, b) => a.path.localeCompare(b.path));
}

// Run the extraction if this script is executed directly
if (import.meta.url === `file://${process.argv[1]}`) {
  const results = extractFrontmatter();
  
  // Create the abridged documentation content
  let abridgedContent = '# Kinde Documentation - Abridged\n\n';
  abridgedContent += 'This is an abridged version of the Kinde documentation containing titles, descriptions, keywords, and topics from all documentation files.\n\n';
  
  let currentSection = '';
  
  for (const result of results) {
    const section = result.path.split('/')[0];
    
    // Add section header if it's a new section
    if (section !== currentSection) {
      currentSection = section;
      abridgedContent += `\n## ${section.charAt(0).toUpperCase() + section.slice(1).replace(/-/g, ' ')}\n\n`;
    }
    
    // Add file content
    abridgedContent += `### ${result.title || result.fileName}\n\n`;
    
    // Build content without extra labels and with minimal line breaks
    let content = '';
    
    if (result.description) {
      content += result.description;
    }
    
    if (result.keywords) {
      if (content) content += '\n';
      content += result.keywords;
    }
    
    if (result.topics) {
      if (content) content += '\n';
      content += result.topics;
    }
    
    if (content) {
      abridgedContent += content + '\n\n';
    }
  }
  
  // Write to file
  fs.writeFileSync('public/llms-abridged.txt', abridgedContent);
  console.log('Abridged documentation created: public/llms-abridged.txt');
  console.log(`Processed ${results.length} files`);
}
