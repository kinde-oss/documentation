const fs = require("fs");
const path = require("path");

const baseDirectoryPath = path.join(__dirname, "../src/content/docs");

function escapeCharactersOutsideCodeAndFrontmatter(fileContent) {
  // Pattern to match code blocks, frontmatter, and YoutubeVideo components
  const codeBlockPattern = /(```[\s\S]*?```|`[\s\S]*?`)/g;
  const frontMatterPattern = /^---[\s\S]+?---/;
  const youtubeVideoPattern = /<YoutubeVideo\s[^>]*\/>/g;

  let result = "";
  let contentToProcess = fileContent;

  // Check and skip frontmatter
  const frontMatterMatch = frontMatterPattern.exec(fileContent);
  if (frontMatterMatch) {
    // Include frontmatter as is
    result += frontMatterMatch[0];
    contentToProcess = fileContent.slice(frontMatterMatch[0].length);
  }

  let lastIndex = 0;

  const combinedPattern = new RegExp(
    `(${codeBlockPattern.source})|(${youtubeVideoPattern.source})`,
    "g"
  );

  let match;

  while ((match = combinedPattern.exec(contentToProcess)) !== null) {
    // Text before code block or YoutubeVideo component
    let textOutsideSpecialSections = contentToProcess.slice(lastIndex, match.index);
    result += textOutsideSpecialSections.replace(/<(?!img)/g, "\\<").replace(/{/g, "\\{");

    // Special section (untouched)
    result += match[0];

    lastIndex = match.index + match[0].length;
  }

  // Remaining text after the last special section
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
