import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import * as cheerio from "cheerio";
import chalk from "chalk";

// Helper to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distFolder = path.join(__dirname, "../dist");
const astroConfigPath = path.join(__dirname, "../astro.config.mjs");

// Function to extract redirect destinations from astro.config.mjs
function getRedirectDestinations() {
  try {
    const configContent = fs.readFileSync(astroConfigPath, "utf-8");
    
    // Extract the redirects object using regex
    const redirectsMatch = configContent.match(/redirects:\s*{([^}]+)}/s);
    if (!redirectsMatch) {
      console.log(chalk.yellow("No redirects found in astro.config.mjs"));
      return [];
    }
    
    const redirectsSection = redirectsMatch[1];
    
    // Extract all destination URLs (the values after the colons)
    const destinationMatches = redirectsSection.match(/:\s*"([^"]+)"/g);
    if (!destinationMatches) {
      console.log(chalk.yellow("No redirect destinations found in astro.config.mjs"));
      return [];
    }
    
    // Clean up the matches to get just the URLs
    const destinations = destinationMatches.map(match => {
      // Remove the ': "' prefix and '"' suffix
      return match.replace(/:\s*"/, '').replace(/"$/, '');
    });
    
    console.log(chalk.blue(`Found ${destinations.length} redirect destinations`));
    return destinations;
    
  } catch (error) {
    console.error(chalk.red(`Error reading astro.config.mjs: ${error.message}`));
    return [];
  }
}

// Function to check if a URL is a redirect destination
function isRedirectDestination(url, redirectDestinations) {
  return redirectDestinations.includes(url);
}

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

// Function to extract internal links from an HTML file, allowing `{}` characters
function extractInternalLinks(html) {
  const $ = cheerio.load(html);
  const links = new Set();
  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    // Allow URLs with `{}` and special characters by checking if href contains allowed prefix
    if (
      href &&
      (href.startsWith("/") || href.startsWith("./") || href.startsWith("../")) &&
      /^[\w\-./{}#]+$/.test(href) // Allow `{}`, `#`, `/`, etc. in URLs
    ) {
      links.add(href);
    }
  });
  return links;
}

// Function to check if an anchor exists within an HTML file
function anchorExists(html, anchor) {
  // Skip `#tag/...` style fragments as they may not correspond to actual HTML anchors
  if (anchor.startsWith("#tag/")) {
    return true;
  }

  const $ = cheerio.load(html);
  try {
    // Escaping `{`, `}`, and `/` in the anchor for jQuery selector compatibility
    const escapedAnchor = anchor.replace(/{/g, "\\{").replace(/}/g, "\\}").replace(/\//g, "\\/");
    return $(escapedAnchor).length > 0;
  } catch (error) {
    console.error(chalk.red(`Error parsing anchor: ${anchor} in file`));
    return false;
  }
}

// Function to validate links
function validateLinks(htmlFiles, redirectDestinations) {
  let invalidLinks = [];

  htmlFiles.forEach((file) => {
    const html = fs.readFileSync(file, "utf-8");
    const links = extractInternalLinks(html);

    links.forEach((link) => {
      // Split by the first occurrence of `#` to allow fragments with slashes
      const [pathWithoutHash, ...hashParts] = link.split("#");
      const hash = hashParts.length ? hashParts.join("#") : null;
      
      // Check if this is a redirect destination - if so, skip validation
      if (isRedirectDestination(pathWithoutHash, redirectDestinations)) {
        console.log(chalk.yellow(`Skipping redirect destination: ${pathWithoutHash}`));
        return;
      }
      
      const resolvedPath = path.join(distFolder, pathWithoutHash);
      const normalizedPath = path.normalize(resolvedPath);
      const ext = path.extname(normalizedPath);

      if (ext === "") {
        // Type 1: Directory-based links
        const indexPath = path.join(normalizedPath, "index.html");
        if (!fs.existsSync(indexPath)) {
          invalidLinks.push({
            link,
            location: file.replace(distFolder, "").replace("/index.html", ".mdx"),
          });
        } else if (hash && !anchorExists(fs.readFileSync(indexPath, "utf-8"), "#" + hash)) {
          invalidLinks.push({
            link,
            location: file.replace(distFolder, "").replace("/index.html", ".mdx"),
          });
        }
      } else {
        // Type 3: Direct file links (e.g., PDFs)
        if (!fs.existsSync(normalizedPath)) {
          invalidLinks.push({
            link,
            location: file.replace(distFolder, "").replace("/index.html", ".mdx"),
          });
        }
      }
    });
  });

  return invalidLinks;
}

// Main function
function main() {
  // Get redirect destinations from astro.config.mjs
  const redirectDestinations = getRedirectDestinations();
  
  const htmlFiles = readHtmlFiles(distFolder);
  const allLinks = new Set();

  htmlFiles.forEach((file) => {
    const html = fs.readFileSync(file, "utf-8");
    const links = extractInternalLinks(html);
    links.forEach((link) => allLinks.add(link));
  });

  const invalidLinks = validateLinks(htmlFiles, redirectDestinations);

  if (invalidLinks.length > 0) {
    console.log(chalk.red("Invalid Links:"));
    invalidLinks.forEach(({ link, location }) => {
      console.log(chalk.red(`Link: ${link}, Found In: ${location}`));
    });
    process.exit(1);
  } else {
    console.log(chalk.green("All internal links are valid."));
  }
}

main();
