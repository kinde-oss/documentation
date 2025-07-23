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
        // Enhanced metadata for SEO - made more flexible to match existing content
        metadata: z.object({
          topics: z.array(z.string()).optional(),
          sdk: z.array(z.string()).optional(),
          languages: z.array(z.string()).optional(),
          audience: z.array(z.string()).optional(),
          complexity: z.enum(['beginner', 'intermediate', 'advanced']).optional(),
          keywords: z.array(z.string()).optional(),
          updated: z.union([z.string(), z.date()]).optional(), // Allow both string and date
          featured: z.boolean().optional(),
          deprecated: z.boolean().optional(),
          'ai-summary': z.string().optional()
        }).optional()
      })
    })
  }),
  i18n: defineCollection({loader: i18nLoader(), schema: i18nSchema()})
};
