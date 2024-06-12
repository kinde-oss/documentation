import fs from "fs/promises";
import path from "path";
import {redirects as urlMappings} from "../src/data/redirects.js";

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

async function replaceUrlsInMdxFiles(mdxFiles, mappings) {
  for (let filePath of mdxFiles) {
    let content = await fs.readFile(filePath, "utf8");

    for (const [oldURL, newURL] of Object.entries(mappings)) {
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
    }

    await fs.writeFile(filePath, content, "utf8");
  }
}

async function main() {
  const docsDirPath = path.join(
    path.dirname(new URL(import.meta.url).pathname),
    "../src/content/docs"
  );
  const mdxFiles = await findMdxFiles(docsDirPath);

  await replaceUrlsInMdxFiles(mdxFiles, urlMappings);
  console.log("All URLs have been replaced.");
}

main().catch(console.error);
