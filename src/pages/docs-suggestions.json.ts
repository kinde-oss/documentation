import type {APIRoute} from "astro";

export const GET: APIRoute = () => {
  const docs = import.meta.glob("../content/docs/**/**/*.mdx", {eager: true}) as any;

  return new Response(
    JSON.stringify(
      Object.keys(docs).map((url) => ({
        url: "https://docs.kinde.com" + url.split("/content/docs")[1].split(".")[0] + "/",
        title: docs[url].frontmatter.title,
        app_context: docs[url].frontmatter.app_context
      })),
      null,
      2
    )
  );
};
