import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    category: z.enum(['rent', 'buy-or-rent', 'custom-home', 'used-home', 'moving', 'housing-trouble']),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date().optional(),
    checkedAt: z.coerce.date().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    draft: z.boolean().default(true),
    affiliateDisclosure: z.boolean().optional(),
    affiliateDisclosureText: z.string().optional(),
    nextSlug: z.string().optional(),
    cta: z.object({
      service: z.string(),
      benefit: z.string(),
      note: z.string().optional(),
      url: z.string().url(),
      label: z.string(),
    }).optional(),
  }),
});

export const collections = { posts };

