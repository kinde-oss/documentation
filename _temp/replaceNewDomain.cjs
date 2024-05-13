const {Glob} = require("glob");
const fs = require("fs");
const path = require("path");

const basePath = path.join(__dirname, "../src/content/docs");
const baseDomain = "https://docs.kinde.com";

// Function to replace links in file content
function replaceLinks(content) {
  // Updated regex to optionally capture a trailing slash
  const markdownLinkRegex = new RegExp(`\\[([^\\]]+)\\]\\(${baseDomain}(\\/[^\\)]*)?\\)`, "g");
  return content.replace(markdownLinkRegex, (match, linkText, path) => {
    console.log(`Replacing link: ${match}`);
    // Correctly handle both no path and a trailing slash as root "/"
    const newPath = path && path !== "/" ? path : "/";
    return `[${linkText}](${newPath})`;
  });
}

// Function to process each file
function processFile(filePath) {
  fs.readFile(filePath, "utf8", (err, content) => {
    if (err) {
      console.error(`Error reading file ${filePath}: ${err}`);
      return;
    }

    console.log(`Processing file: ${filePath}`);
    const newContent = replaceLinks(content);

    fs.writeFile(filePath, newContent, "utf8", (err) => {
      if (err) {
        console.error(`Error writing to file ${filePath}: ${err}`);
      } else {
        console.log(`File successfully processed and saved: ${filePath}`);
      }
    });
  });
}

// Find all .mdx files and process them
const docs = new Glob(`${basePath}/**/*.mdx`, {});

for (const file of docs) {
  processFile(file);
}
