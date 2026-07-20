import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const millnames = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/millnames",
  }),

  schema: z.object({
    // =========================================================================
    // Identity
    // =========================================================================

    id: z.string(),
    type: z.enum([
      "person",
      "organization",
      "place",
      "product",
      "event",
      "animal",
    ]),
    slug: z.string(),

    // =========================================================================
    // Core Information
    // =========================================================================

    name: z.string(),
    description: z.string(),

    image: z.string().optional(),

    last_reviewed: z.date(),

    // =========================================================================
    // Classification
    // =========================================================================

    tags: z.array(z.string()).default([]),

    // =========================================================================
    // External Links
    // =========================================================================

    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),

    // =========================================================================
    // Relationships
    // =========================================================================

    relationships: z
      .array(
        z.object({
          predicate: z.string(),
          target: z.string(),
        })
      )
      .default([]),

    // =========================================================================
    // Sources
    // =========================================================================

    sources: z.array(z.string().url()).default([]),
  }),
});

const companies = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/companies",
  }),

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
  millnames,
  companies,
};