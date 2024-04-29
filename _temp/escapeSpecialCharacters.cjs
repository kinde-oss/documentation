const fs = require("fs");
const path = require("path");

const baseDirectoryPath = path.join(__dirname, "../src/content/docs");

function escapeCharactersOutsideCodeAndFrontmatter(fileContent) {
  // Pattern to match code blocks and frontmatter
  const codeBlockPattern = /(```[\s\S]*?```|`[\s\S]*?`)/g;
  const frontMatterPattern = /^---[\s\S]+?---/;

  let result = "";
  let contentToProcess = fileContent;

  // Check and skip frontmatter
  const frontMatterMatch = frontMatterPattern.exec(fileContent);
  if (frontMatterMatch) {
    // Include frontmatter as is
    result += frontMatterMatch[0];
    contentToProcess = fileContent.slice(frontMatterMatch[0].length);
  }

  let match;
  let lastIndex = 0;

  while ((match = codeBlockPattern.exec(contentToProcess)) !== null) {
    // Text before code block
    let textOutsideCode = contentToProcess.slice(lastIndex, match.index);
    result += textOutsideCode.replace(/<(?!img)/g, "\\<").replace(/{/g, "\\{");

    // Code block (untouched)
    result += match[0];

    lastIndex = match.index + match[0].length;
  }

  // Remaining text after the last code block
  result += contentToProcess
    .slice(lastIndex)
    .replace(/<(?!img)/g, "\\<")
    .replace(/{/g, "\\{");

  return result;
}

function processFile(filePath) {
  const fileDirectory = path.dirname(filePath);

  // Skip files directly under the base directory
  if (fileDirectory === baseDirectoryPath) {
    return;
  }

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    const modifiedData = escapeCharactersOutsideCodeAndFrontmatter(data);
    fs.writeFile(filePath, modifiedData, "utf8", (err) => {
      if (err) console.error(err);
    });
  });
}

function readDirectory(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }

    files.forEach((file) => {
      let fullPath = path.join(dir, file);
      fs.stat(fullPath, (err, stat) => {
        if (err) {
          console.error(err);
          return;
        }

        if (stat.isDirectory()) {
          readDirectory(fullPath);
        } else if (path.extname(file) === ".mdx") {
          processFile(fullPath);
        }
      });
    });
  });
}

readDirectory(baseDirectoryPath);
