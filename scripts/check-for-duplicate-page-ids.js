import fs from "fs";
import path from "path";
import {globSync} from "glob";
import matter from "gray-matter";

// Directory to search for MDX files
const docsDirectory = path.join(process.cwd(), "./src/content/docs");

// Function to get relative path from '/src'
function getRelativePath(filePath) {
  const srcIndex = filePath.indexOf("/src");
  return filePath.substring(srcIndex);
}

// Function to check for duplicate page_ids
export function checkForDuplicatePageIds() {
  const logs = [];

  // Use glob to find all MDX files
  const files = globSync(`${docsDirectory}/**/*.mdx`);

  const pageIds = new Map();
  let duplicatesFound = false;

  files.forEach((file) => {
    const content = fs.readFileSync(file, "utf8");
    const {data: frontmatter} = matter(content);

    if (frontmatter.page_id) {
      if (pageIds.has(frontmatter.page_id)) {
        logs.push(`Duplicate page_id found: ${frontmatter.page_id}`);
        logs.push(`- ${getRelativePath(file)}`);
        logs.push(`- ${getRelativePath(pageIds.get(frontmatter.page_id))}`);
        duplicatesFound = true;
      } else {
        pageIds.set(frontmatter.page_id, file);
      }
    } else {
      logs.push(`No page_id found in: ${getRelativePath(file)}`);
    }
  });

  if (duplicatesFound) {
    logs.push("Page ID check complete with duplicates.");
  } else {
    logs.push("No duplicates found.");
  }

  console.log(logs.join("\n"));

  if (duplicatesFound) {
    process.exit(1);
  }
}

checkForDuplicatePageIds();
