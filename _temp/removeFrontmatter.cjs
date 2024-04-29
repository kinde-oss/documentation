const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

const directoryPath = path.join(__dirname, "../src", "content", "docs");

// Function to process .mdx files
const processFiles = (filePath) => {
  const content = fs.readFileSync(filePath, "utf8");
  const parsedContent = matter(content);

  // Check if oldURL or newURL exists in the data
  if ("oldURL" in parsedContent.data || "newURL" in parsedContent.data) {
    // Remove oldURL and newURL from the data
    delete parsedContent.data.oldURL;
    delete parsedContent.data.newURL;

    // Stringify the content back together
    const newContent = matter.stringify(parsedContent.content, parsedContent.data);
    fs.writeFileSync(filePath, newContent, "utf8");
    console.log(`Removed unnecessary frontmatter from: ${filePath}`);
  }
};

// Recursive function to read through all files in a directory
const readThroughDirectory = (dirPath) => {
  fs.readdirSync(dirPath).forEach((file) => {
    const absolutePath = path.join(dirPath, file);
    if (fs.statSync(absolutePath).isDirectory()) {
      // If the file is a directory, recursively read through it
      readThroughDirectory(absolutePath);
    } else if (path.extname(file) === ".mdx") {
      // If the file is a .mdx file, process it
      processFiles(absolutePath);
    }
  });
};

// Start the process
readThroughDirectory(directoryPath);
