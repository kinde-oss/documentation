import type {APIRoute} from "astro";

export const GET: APIRoute = () => {
  const allDocs = import.meta.glob("../content/docs/**/**/*.mdx", {eager: true}) as any;

  const docsWithAppContext = Object.keys(allDocs)
    .filter((path: string) => allDocs[path]?.frontmatter.app_context)
    .map((path: string) => ({
      url: "https://docs.kinde.com" + path.split("/content/docs")[1].split(".")[0] + "/",
      title: allDocs[path]?.frontmatter.title,
      app_context: allDocs[path]?.frontmatter.app_context
    }));

  return new Response(JSON.stringify(docsWithAppContext));
};
