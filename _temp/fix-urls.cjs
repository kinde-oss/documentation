const fs = require("fs").promises;
const path = require("path");

async function findMdxFiles(dirPath) {
  let files = await fs.readdir(dirPath, { withFileTypes: true });
  let mdxFiles = [];

  for (let file of files) {
    if (file.isDirectory()) {
      const nestedFiles = await findMdxFiles(path.join(dirPath, file.name));
      mdxFiles = mdxFiles.concat(nestedFiles);
    } else if (file.name.endsWith(".mdx")) {
      mdxFiles.push(path.join(dirPath, file.name));
    }
  }

  return mdxFiles;
}

async function readUrlMappings() {
  const data = await fs.readFile("./_temp/urls.json", "utf8");
  return JSON.parse(data);
}

async function replaceUrlsInMdxFiles(mdxFiles, mappings) {
  for (let filePath of mdxFiles) {
    let content = await fs.readFile(filePath, "utf8");

    // mappings.forEach(({ oldURL, newURL }) => {
    //   // Replace only exact matches, considering Markdown link syntax
    //   content = content.split("](" + oldURL + ")").join("](" + newURL + ")"); // For Markdown links
    //   content = content.split(" " + oldURL + " ").join(" " + newURL + " "); // For spaced URLs



    //   if (content.endsWith(oldURL))
    //     content = content.substring(0, content.length - oldURL.length) + newURL; // For URLs at the end
    // });

    mappings.forEach(({oldURL, newURL}) => {
      // Replace only exact matches, considering Markdown link syntax
      content = content.replace(new RegExp(`\\]\\(${oldURL}\\)`, "g"), `](${newURL})`); // For Markdown links
      content = content.replace(new RegExp(` ${oldURL} `, "g"), ` ${newURL} `); // For spaced URLs

      // Handling URL fragments at the end of links
      content = content.replace(
        new RegExp(`\\]\\(${oldURL}#([^\\s\\)]+)\\)`, "g"),
        `](${newURL}#$1)`
      ); // For Markdown links with fragments

      // For URLs at the end of the string, with and without fragments
      if (content.endsWith(oldURL)) {
        content = content.substring(0, content.length - oldURL.length) + newURL;
      } else {
        const fragmentRegex = new RegExp(`${oldURL}#([^\\s]+)$`);
        if (fragmentRegex.test(content)) {
          content = content.replace(fragmentRegex, `${newURL}#$1`);
        }
      }
    });

    await fs.writeFile(filePath, content, "utf8");
  }
}

async function main() {
  const docsDirPath = path.join(__dirname, "../src/content/docs");
  const mdxFiles = await findMdxFiles(docsDirPath);
  const urlMappings = await readUrlMappings();

  await replaceUrlsInMdxFiles(mdxFiles, urlMappings);
  console.log("All URLs have been replaced.");
}

main().catch(console.error);
