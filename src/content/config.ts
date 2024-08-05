import {defineCollection, z} from "astro:content";
import {docsSchema, i18nSchema} from "@astrojs/starlight/schema";

export const collections = {
  docs: defineCollection({
    schema: docsSchema({
      extend: z.object({
        page_id: z.string().uuid().optional(),
        relatedArticles: z.string().array().optional().nullable(),
        app_context: z.array(z.any()).optional(),
        social_sharing_image_url: z.string().optional()
      })
    })
  }),
  i18n: defineCollection({type: "data", schema: i18nSchema()})
};
