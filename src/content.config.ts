import { defineCollection, z } from "astro:content";

const executives = defineCollection({
  schema: z.object({
    id: z.string(),
    slug: z.string(),
    name: z.string(),
    title: z.string(),
    company_id: z.string(),
    headquarters: z.string().optional(),
    industry: z.string().optional(),
    education: z.array(z.string()).default([]),
    previous_roles: z.array(z.string()).default([]),
    board_memberships: z.array(z.string()).default([]),
    image: z.string().optional(),
    sources: z.array(z.string()).default([]),
    published: z.boolean().default(true),
  }),
});

const companies = defineCollection({
  schema: z.object({
    id: z.string(),

    slug: z.string(),

    name: z.string(),

    legal_name: z.string(),

    ticker: z.string().optional(),

    exchange: z.string().optional(),

    industry: z.string().optional(),

    headquarters: z.string().optional(),

    website: z.string().optional(),

    founded: z.number().optional(),

    published: z.boolean().default(true),
  }),
});

export const collections = {
  executives,
  companies,
};