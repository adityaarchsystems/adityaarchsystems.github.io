import { defineCollection, z } from 'astro:content';

const briefs = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    timestamp: z.string().datetime(),
    readTime: z.string(),
  }),
});

export const collections = { briefs };
