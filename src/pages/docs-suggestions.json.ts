import type {APIRoute} from "astro";

export const GET: APIRoute = () => {
  const docs = import.meta.glob("../content/docs/**/**/*.mdx", {eager: true}) as any;

  return new Response(
    JSON.stringify(
      Object.keys(docs).map((url) => ({
        url: "https://docs.kinde.com" + url.split("/content/docs")[1].split(".")[0] + "/",
        ...docs[url].frontmatter
      })),
      null,
      2
    )
  );
};
