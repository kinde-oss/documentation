const fs = require("fs").promises;
const path = require("path");
const matter = require("gray-matter");

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

async function extractUrlsFromMdxFiles(mdxFiles) {
  const urls = [];

  for (let filePath of mdxFiles) {
    const content = await fs.readFile(filePath, "utf8");
    const { data } = matter(content);

    if (data.oldURL && data.newURL) {
      urls.push({ oldURL: data.oldURL, newURL: data.newURL });
    }
  }

  return urls;
}

async function main() {
  const docsDirPath = path.join(__dirname, "../src/content/docs");
  const mdxFiles = await findMdxFiles(docsDirPath);
  const urls = await extractUrlsFromMdxFiles(mdxFiles);

  // Save to a JSON file
  await fs.writeFile("./_temp/urls.json", JSON.stringify(urls, null, 2), "utf8");
  console.log("URLs have been saved to urls.json");
}


main().catch(console.error);
