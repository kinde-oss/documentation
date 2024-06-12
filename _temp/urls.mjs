import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import {redirects} from "../src/data/redirects.js"

async function findMdxFiles(dirPath) {
  let files = await fs.readdir(dirPath, {withFileTypes: true});
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

async function updateMdxFiles(mdxFiles, urls) {
  for (let filePath of mdxFiles) {
    let content = await fs.readFile(filePath, "utf8");
    let {data, content: mdxContent} = matter(content);

    for (let url of urls) {
      if (data.oldURL === url.oldURL) {
        data.newURL = url.newURL;
        break;
      }
    }

    const updatedContent = matter.stringify(mdxContent, data);
    await fs.writeFile(filePath, updatedContent, "utf8");
  }
}

async function main() {
  const docsDirPath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "../src/content/docs"
  );
  const mdxFiles = await findMdxFiles(docsDirPath);

  await updateMdxFiles(mdxFiles, redirects);

  console.log("MDX files have been updated.");
}

main().catch(console.error);
