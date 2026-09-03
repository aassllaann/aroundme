import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const works = defineCollection({
  loader: glob({ base: './src/content/works', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    order: z.number().int().positive(),
    year: z.string(),
    type: z.string(),
    categories: z.array(z.string()).min(1),
    summary: z.string(),
    featured: z.boolean().default(false),
    preview: z.discriminatedUnion('type', [
      z.object({ type: z.literal('image'), src: z.string(), alt: z.string() }),
      z.object({ type: z.literal('video'), src: z.string(), poster: z.string(), alt: z.string() }),
    ]),
  }),
});

export const collections = { works };
