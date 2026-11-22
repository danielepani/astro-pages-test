import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const optionalString = z.string().nullable().optional();

const posts = defineCollection({
  loader: glob({ base: './src/content/posts', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    category: z.enum(['Guide', 'Design', 'Tech', 'Note']).default('Note'),
    tags: z.array(z.string()).nullable().optional().default([]),
    cover: optionalString,
    featured: z.boolean().nullable().optional().default(false),
    draft: z.boolean().nullable().optional().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    year: z.coerce.number().nullable().optional().default(2026),
    status: z.enum(['Attivo', 'In corso', 'Archiviato']).default('Attivo'),
    link: optionalString,
    cover: optionalString,
    highlights: z.array(z.string()).nullable().optional().default([]),
  }),
});

const pages = defineCollection({
  loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
  schema: z.object({
    title: z.string(),
    subtitle: optionalString,
  }),
});

export const collections = { posts, projects, pages };
