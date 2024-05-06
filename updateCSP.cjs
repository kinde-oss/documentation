const fs = require("fs");
const cheerio = require("cheerio");
const crypto = require("crypto");
const yaml = require("js-yaml");
const path = require("path");

// Directory and file paths
const distPath = path.join(__dirname, "dist");
const yamlPath = path.join(__dirname, "customHttp.yml");

// Set to store unique hashes
const scriptSrcHashes = new Set();

const predefinedScriptSrcItems = ["'self'", "plausible.io", "*.kinde.com"];

function hashScriptContent(content) {
  return crypto.createHash("sha256").update(content, "utf-8").digest("base64");
}

function processHtmlFile(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const $ = cheerio.load(content);
  $("script").each((i, elem) => {
    if (elem.children.length > 0 && elem.attribs.src === undefined) {
      // Inline script
      const scriptContent = $(elem).html();
      const hash = hashScriptContent(scriptContent);
      scriptSrcHashes.add(`'sha256-${hash}'`);
    }
  });
}

function scanDirectory(directory) {
  fs.readdirSync(directory).forEach((file) => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      scanDirectory(fullPath);
    } else if (path.extname(fullPath) === ".html") {
      processHtmlFile(fullPath);
    }
  });
}

function loadYamlConfig(filePath) {
  try {
    const fileContents = fs.readFileSync(filePath, "utf8");
    return yaml.load(fileContents);
  } catch (e) {
    console.error("Failed to read YAML file:", e);
    return null;
  }
}

function saveYamlConfig(filePath, config) {
  try {
    const yamlStr = yaml.dump(config);
    fs.writeFileSync(filePath, yamlStr, "utf8");
    console.log("YAML configuration has been updated.");
  } catch (e) {
    console.error("Failed to write YAML file:", e);
  }
}

function updateCSP(config) {
  const headers = config.customHeaders.find((header) => header.pattern === "**").headers;
  const cspHeader = headers.find((header) => header.key === "Content-Security-Policy");
  const scriptSrcMatch = /script-src\s[^;]*/;
  const currentScriptSrc = cspHeader.value.match(scriptSrcMatch)[0];

  // Parse existing hashes and ensure no duplicates with new ones
  const existingHashes = new Set(
    currentScriptSrc.split(" ").filter((part) => part.startsWith("'sha256-"))
  );
  scriptSrcHashes.forEach((hash) => existingHashes.add(hash));

  // Add predefined items to the set of hashes
  predefinedScriptSrcItems.forEach((item) => existingHashes.add(item));

  // Convert Set back to string and update the CSP value
  cspHeader.value = cspHeader.value.replace(
    scriptSrcMatch,
    `script-src ${Array.from(existingHashes).join(" ")}`
  );
}



// Main execution
scanDirectory(distPath); // Fill scriptSrcHashes with hashes
const config = loadYamlConfig(yamlPath); // Load YAML config
if (config) {
  updateCSP(config); // Update the CSP with new hashes
  saveYamlConfig(yamlPath, config); // Save the updated config back to file
}
