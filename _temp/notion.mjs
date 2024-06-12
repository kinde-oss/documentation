import { Client } from "@notionhq/client";
import dotenv from "dotenv";
import fs from "fs";
import { NotionToMarkdown } from "notion-to-md";
import path from "path";
import {SECTIONS, PARENT_TOPICS} from "../src/data/structure.mjs"
import { oldTopicsData } from "../src/data/oldTopicsData.mjs";
import slugify from "./slugify.mjs";


dotenv.config();

const FILTER = {
  and: [
    {
      property: "Status",
      status: {
        does_not_equal: "Draft"
      }
    },
    {
      property: "NEW_ORDER",
      number: {
        is_not_empty: true
      }
    },
    {
      timestamp: "last_edited_time",
      last_edited_time: {
        past_month: {}
      }
    }
  ]
};


function updateRedirectsFile(key, value) {
  let fileContent = "export const redirects = {};";
  if (fs.existsSync("src/data/redirects.js")) {
    fileContent = fs.readFileSync("src/data/redirects.js", "utf8");
  }

  // Extract the object part from the file content
  let redirectsString = fileContent.replace("export const redirects = ", "").slice(0, -1);

  // Parse the string to an object
  let redirects;
  try {
    redirects = JSON.parse(redirectsString);
  } catch (error) {
    console.error("Error parsing the redirects object:", error);
    redirects = {};
  }

  // Add the key-value pair
  redirects[key] = value;

  // Convert the object back to a string and add the export statement
  const updatedContent = `export const redirects = ${JSON.stringify(redirects, null, 2)};`;

  // Write the updated content back to the file
  fs.writeFileSync("src/data/redirects.js", updatedContent);
}





const notion = new Client({
  auth: process.env.NOTION_TOKEN,
  notionVersion: "2022-06-28",
});

const removeNotionCurlyQuotes = (string) =>
  string
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\\/g, "");

const n2m = new NotionToMarkdown({ notionClient: notion });

// Update img
n2m.setCustomTransformer("embed", async (block) => {
  const { embed } = block;

  if (!embed?.url) return "";

  return `
<img
  src="${embed?.url}"
  alt="${embed?.caption[0]?.plain_text ?? ""}"
  width="672px"
  height="auto"
  fetchpriority="low"
  loading="lazy"
  decoding="async"
/>`         
});

n2m.setCustomTransformer("video", async (block) => {


  if (block.video.external.url.includes('youtu.be')) {
    // Define the URL
    const url = block.video.external.url;

    // Define the regular expression to match the value after youtu.be/ and before any query strings
    const regex = /youtu\.be\/([^?]+)/;

    // Use the regex to find the match
    const match = url.match(regex);

    // Extract the matched value if it exists
    const videoId = match ? match[1] : null;

    return `
<YoutubeVideo videoId={"${videoId}"} />`
} 

  return 
});



// For the code blocks, Notion returns 'c#', but we need 'csharp' to comply with Astro/Prism css classes, so we modify 'c#' -> 'csharp'. Notion currently does not have 'jsx' as a language choice, so we make all 'javascript' -> 'jsx'.
n2m.setCustomTransformer("code", async (block) => {
  const { code } = block;

  if (code?.language === "c#") {
    return `\`\`\`csharp
${code?.rich_text[0]?.text?.content}
\`\`\``;
  }

  if (code?.language === "javascript") {
    return `\`\`\`jsx
${code?.rich_text[0]?.text?.content}
\`\`\``;
  }
});

const getAllDocArticles = async () => {
  let allArticles = [];

  console.log("\n ⚙️ Getting articles from Notion…");

  try {
    let data = await notion.databases.query({
      database_id: process.env.NOTION_DOCS_DB,
      filter: FILTER,
      sorts: [
        {
          timestamp: "last_edited_time",
          direction: "descending",
        },
      ],
    });

    allArticles = [...data.results];

    while (data.has_more) {
      data = await notion.databases.query({
        database_id: process.env.NOTION_DOCS_DB,
        filter: FILTER,
        sorts: [
          {
            timestamp: "last_edited_time",
            direction: "descending",
          },
        ],
        start_cursor: data.next_cursor,
      });

      allArticles = [...allArticles, ...data.results];
    }

    console.log("all articles", allArticles?.length)

    for (const post of allArticles) {
      getDocArticleMetadata(post);
    }
  } catch (e) {
    console.log(e);
    return;
  }
};

const createMarkdownFiles = async (post) => {

  console.log(post.sectionSlug)

   if (post.sectionSlug === "*******MISSING SECTION*******") {
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
    console.log(post.newURL)
    console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
   }

  if (post.sectionSlug !== "*******MISSING SECTION*******") {
try {
  const articleDirectory = `./src/content/docs/${post.sectionSlug}/${post.topicSlug}`;

  if (!fs.existsSync(articleDirectory)) {
    fs.mkdirSync(articleDirectory, { recursive: true });
  }

  const mdblocks = await n2m.pageToMarkdown(post.id, 100);
  const mdString = n2m.toMarkdownString(mdblocks);
  const appContext = post.appContext ?? null;
  const socialSharingImageURL = post.socialSharingImageURL ?? null;
  const description = post.description ?? null;
  const relatedArticles = post.relatedArticles ?? null;
  const hideFromSidebar = post.hideFromSidebar < 0 ? true : false;

  let frontmatter = `---\npage_id: ${post.id}\ntitle: ${post.title}\nsidebar:\n    order: ${
    post.order
  }${hideFromSidebar ? `\n    hidden: true` : ""}\noldURL: ${
    post.oldURL
  }\nnewURL: ${post.newURL.replace("index/", "")}`;

  if (description) {
    frontmatter = `${frontmatter}\ndescription: ${post.description}`;
  }

  if (relatedArticles?.length > 0) {
    frontmatter = `${frontmatter}\nrelatedArticles: [${post.relatedArticles}]`;
  }

  if (appContext) {
    frontmatter = `${frontmatter}\napp_context: ${post.appContext}`;
  }

  if (socialSharingImageURL) {
    const tagContent = `
      - tag: meta
        attrs:
          property: "og:image"
          content: ${post.socialSharingImageURL}
          
    `;
    frontmatter = `${frontmatter}\nhead: ${tagContent}`;
  }

  frontmatter = `${frontmatter}\n---`;

  const markdownContent = `${frontmatter}\n${mdString.parent}`;
  const filePath = path.join(articleDirectory, `${post?.articleSlug}.mdx`);

  console.log(
    `\x1b[40m${post.sectionSlug} > ${post.topicSlug}\x1b[0m > \x1b[92m${post.title}\x1b[0m > \x1b[35m Updated ${post.last_edited_time}\x1b[0m\n`
  );

  return fs.writeFileSync(filePath, markdownContent);
} catch (e) {
  console.log(e);
  return;
}
  }
    
};

// Get page metadata and return only what's necessary
const getDocArticleMetadata = async (post) => {

  
  const cleanedPost = {
    id: post.id,
    status: post.properties.Status.status.name,
    title:
      post.properties.NEW_TITLE?.rich_text[0]?.plain_text ??
      post.properties.Name.title[0].plain_text,
    description: post.properties.Description.rich_text[0]?.plain_text ?? null,
    order: post.properties.NEW_ORDER.number ?? post.properties.Order.number,
    notionURL: post.url,
    sectionSlug: SECTIONS.hasOwnProperty(post.properties.NEW_SECTION.select.name)
      ? SECTIONS[post.properties.NEW_SECTION.select.name]
      : "*******MISSING SECTION*******",
    topicSlug: PARENT_TOPICS.hasOwnProperty(post.properties.NEW_PARENT_TOPIC.select.name)
      ? PARENT_TOPICS[post.properties.NEW_PARENT_TOPIC.select.name]
      : slugify(post.properties.NEW_PARENT_TOPIC.select.name),
    articleSlug:
      post.properties.NEW_SLUG?.rich_text[0]?.plain_text ??
      post.properties.Slug.rich_text[0]?.plain_text,
    appContext: post.properties["App context"].rich_text[0]?.plain_text
      ? removeNotionCurlyQuotes(post.properties["App context"].rich_text[0]?.plain_text)
      : null,
    socialSharingImageURL: post.properties["Social sharing image URL"].url ?? null,
    hideFromSidebar: post.properties.NEW_ORDER.number ?? post.properties.Order.number,
    last_edited_time: new Date(post.last_edited_time).toLocaleString("en-AU", {
      second: "2-digit",
      minute: "2-digit",
      hour: "2-digit",
      hour12: false,
      month: "short",
      day: "2-digit",
      year: "numeric",
    }),
    relatedArticles: post.properties["Related articles"].relation.map((article) => article.id) ?? null,
    oldURL: `https://kinde.com/docs/${
      oldTopicsData.find((topic) => topic.label === post.properties.Topic.select.name)?.baseUrl
    }/${
      post.properties.Slug.rich_text[0]?.plain_text === "index"
        ? ""
        : post.properties.Slug.rich_text[0]?.plain_text + "/"
    }`,
    newURL: `/${
      SECTIONS.hasOwnProperty(post.properties.NEW_SECTION.select.name)
        ? SECTIONS[post.properties.NEW_SECTION.select.name]
        : "*******MISSING SECTION*******"
    }/${
      PARENT_TOPICS.hasOwnProperty(post.properties.NEW_PARENT_TOPIC.select.name)
        ? PARENT_TOPICS[post.properties.NEW_PARENT_TOPIC.select.name]
        : slugify(post.properties.NEW_PARENT_TOPIC.select.name)
    }/${
      post.properties.NEW_SLUG?.rich_text[0]?.plain_text ??
      post.properties.Slug.rich_text[0]?.plain_text
    }/`,
  };

  
  updateRedirectsFile(cleanedPost.oldURL, cleanedPost.newURL.replace("index/", ""));

  return cleanedPost.status === "Done" ? await createMarkdownFiles(cleanedPost) : true;
};


getAllDocArticles()

