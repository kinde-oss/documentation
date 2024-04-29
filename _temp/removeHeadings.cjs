const fs = require("fs");
const path = require("path");

const baseDir = path.join(__dirname, "../src", "content", "docs");

// Function to remove the first heading from a markdown file
const removeHeading = (filePath) => {
  const data = fs.readFileSync(filePath, "utf8");
  const lines = data.split("\n");
  const filteredLines = lines.filter((line) => !line.startsWith("# "));
  fs.writeFileSync(filePath, filteredLines.join("\n"), "utf8");
};

// Function to process all markdown files in a directory recursively
const processDirectory = (dirPath) => {
  fs.readdirSync(dirPath).forEach((file) => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);

    if (stat.isFile() && path.extname(file) === ".mdx") {
      removeHeading(filePath);
    } else if (stat.isDirectory()) {
      processDirectory(filePath);
    }
  });
};

// Start processing from the base directory
processDirectory(baseDir);

console.log("Headings removed from markdown files in " + baseDir);
