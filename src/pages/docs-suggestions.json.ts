import type {APIRoute} from "astro";

export const GET: APIRoute = () => {
  const docs = import.meta.glob("../content/docs/**/**/*.mdx", {eager: true}) as any;

  return new Response(
    JSON.stringify(
      Object.keys(docs).map((url) => ({
        page_id: docs[url].frontmatter.page_id,
        title: docs[url].frontmatter.title,
        url: "https://docs.kinde.com" + url.split("/content/docs")[1].split(".")[0] + "/",
        app_context: docs[url].frontmatter.app_context
      })),
      null,
      2
    )
  );
};
