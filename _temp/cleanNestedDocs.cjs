const fs = require("fs");
const path = require("path");

const directory = "src/content/docs";

fs.readdirSync(directory).forEach((item) => {
  const itemPath = path.join(directory, item);
  if (fs.lstatSync(itemPath).isDirectory()) {
    // Delete directory recursively
    fs.rmSync(itemPath, { recursive: true });
  }
});
