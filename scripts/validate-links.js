import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";
import cheerio from "cheerio";
import chalk from "chalk";

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distFolder = path.join(__dirname, "../dist");

// Function to read all HTML files from a directory
function readHtmlFiles(dir) {
  let htmlFiles = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      htmlFiles = htmlFiles.concat(readHtmlFiles(fullPath));
    } else if (path.extname(fullPath) === ".html") {
      htmlFiles.push(fullPath);
    }
  });
  return htmlFiles;
}

// Function to extract internal links from an HTML file
function extractInternalLinks(html) {
  const $ = cheerio.load(html);
  const links = new Set();
  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    if (href.startsWith("/") || href.startsWith("./") || href.startsWith("../")) {
      links.add(href);
    }
  });
  return links;
}

// Function to check if an anchor exists within an HTML file
function anchorExists(html, anchor) {
  const $ = cheerio.load(html);
  return $(anchor).length > 0;
}

// Function to validate links
function validateLinks(htmlFiles) {
  let invalidLinks = [];

  htmlFiles.forEach((file) => {
    const html = fs.readFileSync(file, "utf-8");
    const links = extractInternalLinks(html);

    links.forEach((link) => {
      // For links with hash (Type 2)
      const [pathWithoutHash, hash] = link.split("#");
      const resolvedPath = path.join(distFolder, pathWithoutHash);
      const ext = path.extname(resolvedPath);

      if (ext === "") {
        // Type 1: Directory-based links
        const indexPath = path.join(resolvedPath, "index.html");
        if (!fs.existsSync(indexPath)) {
          invalidLinks.push({
            link,
            location: file.replace(distFolder, "").replace("/index.html", ".mdx")
          });
        } else if (hash && !anchorExists(fs.readFileSync(indexPath, "utf-8"), "#" + hash)) {
          invalidLinks.push({
            link,
            location: file.replace(distFolder, "").replace("/index.html", ".mdx")
          });
        }
      } else {
        // Type 3: Direct file links (e.g., PDFs)
        if (!fs.existsSync(resolvedPath)) {
          invalidLinks.push({
            link,
            location: file.replace(distFolder, "").replace("/index.html", ".mdx")
          });
        }
      }
    });
  });

  return invalidLinks;
}

// Main function
function main() {
  const htmlFiles = readHtmlFiles(distFolder);
  const allLinks = new Set();

  htmlFiles.forEach((file) => {
    const html = fs.readFileSync(file, "utf-8");
    const links = extractInternalLinks(html);
    links.forEach((link) => allLinks.add(link));
  });

  const invalidLinks = validateLinks(htmlFiles);

  if (invalidLinks.length > 0) {
    console.log(chalk.red("Invalid Links:"));
    invalidLinks.forEach(({link, location}) => {
      console.log(chalk.red(`Link: ${link}, Found In: ${location}`));
    });
    process.exit(1);
  } else {
    console.log(chalk.green("All internal links are valid."));
  }
}

main();
