const fs = require("fs");
const path = require("path");
const cheerio = require("cheerio");
const crypto = require("crypto");

const distFolderPath = "./dist";
const cspFilePath = "./csp-policy.txt"; // Define your CSP file path

let uniqueHashes = new Set(); // Set to store unique hashes

function calculateHash(content) {
  return "sha256-" + crypto.createHash("sha256").update(content, "utf8").digest("base64");
}

function processFiles(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    if (fs.lstatSync(fullPath).isDirectory()) {
      processFiles(fullPath); // Recursively process subdirectories
    } else if (path.extname(file) === ".html") {
      const htmlContent = fs.readFileSync(fullPath, "utf8");
      const $ = cheerio.load(htmlContent);

      $("script").each((i, elem) => {
        const scriptContent = $(elem).html();
        if (scriptContent) {
          const hash = calculateHash(scriptContent);
          $(elem).attr("hash", hash); // Add hash to script tag
          uniqueHashes.add(hash); // Add hash to the set
        }
      });

      // Write updated HTML file
      const updatedHtmlContent = $.html();
      fs.writeFileSync(fullPath, updatedHtmlContent, "utf8");
    }
  });
}

function updateCspFile() {
  // Construct the CSP directive with all unique hashes
  const scriptSrcDirective = `script-src 'self' ${[...uniqueHashes].join(" ")};`;

  // Write the directive to the CSP file
  fs.writeFileSync(cspFilePath, scriptSrcDirective, "utf8");
}

processFiles(distFolderPath);
updateCspFile(); // Update the CSP file after processing all files
