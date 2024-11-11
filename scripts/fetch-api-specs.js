import {writeFile, mkdir} from "fs/promises";
import path from "path";
import "dotenv/config";

const fetchAndSaveSpec = async (url, fileName) => {
  try {
    const specsDir = path.resolve("public", "specs");

    // Ensure the 'public/specs' directory exists
    await mkdir(specsDir, {recursive: true});

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Failed to fetch '${url}': ${response.status} ${response.statusText}`);
    }

    const data = await response.text();

    // Define the path within the 'public/specs' folder
    const filePath = path.join(specsDir, fileName);
    await writeFile(filePath, data);
    console.log(`Saved spec to ${filePath}`);
  } catch (error) {
    console.error(`Error fetching ${url}:`, error.message);
    throw error;
  }
};

const main = async () => {
  try {
    await Promise.all([
      fetchAndSaveSpec(
        process.env.PUBLIC_KINDE_MANAGEMENT_API_SPEC_URL,
        "kinde-management-api-spec.yaml"
      ),
      fetchAndSaveSpec(
        process.env.PUBLIC_KINDE_FRONTEND_API_SPEC_URL,
        "kinde-frontend-api-spec.yaml"
      )
    ]);
    console.log("API specs downloaded successfully.");
  } catch (error) {
    console.error("Error during API spec fetching or build process:", error.message);
    process.exit(1);
  }
};

main();
