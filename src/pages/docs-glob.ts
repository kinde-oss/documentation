import type {APIRoute} from "astro";

export const GET: APIRoute = ({params, request}) => {
  const docs = import.meta.glob("../content/docs/**/**/*.mdx", {eager: true});

  return new Response(
    JSON.stringify(
      Object.keys(docs).map((path) => ({
        url: path.split("/content/docs")[1].split(".")[0] + "/",
        title: docs[path].frontmatter.title,
        app_context: docs[path].frontmatter.app_context
      })),
      null,
      2
    )
  );
};
