import {defineCollection, z} from "astro:content";
import { docsLoader, i18nLoader } from "@astrojs/starlight/loaders";
import {docsSchema, i18nSchema} from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: z.object({
        page_id: z.string().uuid(),
        relatedArticles: z.string().array().optional().nullable(),
        app_context: z.array(z.any()).optional(),
        social_sharing_image_url: z.string().optional(),
        ai_summary: z.string().optional(),
        keywords: z.array(z.string()).optional().nullable(),
        description: z.string().optional(),
        sdk: z.union([z.string(), z.array(z.string())]).optional().nullable(),
        languages: z.union([z.string(), z.array(z.string())]).optional().nullable(),
        audience: z.union([z.string(), z.array(z.string())]).optional(),
        complexity: z.string().optional()
      })
    })
  }),
  i18n: defineCollection({loader: i18nLoader(), schema: i18nSchema()})
};
