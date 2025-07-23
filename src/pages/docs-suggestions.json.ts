import type {APIRoute} from "astro";

export const GET: APIRoute = () => {
  const docs = import.meta.glob("../content/docs/**/**/*.mdx", {eager: true}) as any;

  return new Response(
    JSON.stringify(
      Object.keys(docs).map((url) => {
        const frontmatter = docs[url].frontmatter;
        const metadata = frontmatter.metadata || {};
        
        return {
          page_id: frontmatter.page_id,
          title: frontmatter.title,
          description: frontmatter.description,
          url: "https://docs.kinde.com" + url.split("/content/docs")[1].split(".")[0] + "/",
          app_context: frontmatter.app_context,
          // Enhanced metadata for search indexing
          topics: metadata.topics || [],
          keywords: metadata.keywords || [],
          audience: metadata.audience || [],
          complexity: metadata.complexity,
          sdk: metadata.sdk || [],
          languages: metadata.languages || [],
          updated: metadata.updated,
          featured: metadata.featured,
          deprecated: metadata.deprecated,
          ai_summary: metadata['ai-summary'],
          // SEO-friendly content snippets
          content_preview: frontmatter.description || metadata['ai-summary'] || '',
          search_terms: [
            ...(metadata.keywords || []),
            ...(metadata.topics || []),
            ...(metadata.audience || []),
            frontmatter.title,
            metadata.complexity
          ].filter(Boolean).join(' ')
        };
      }),
      null,
      2
    )
  );
};
