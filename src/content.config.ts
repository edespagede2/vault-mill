import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const executives = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/executives",
  }),

  schema: z.object({
    // =========================================================================
    // Identity
    // =========================================================================

    id: z.string(),
    slug: z.string(),

    // =========================================================================
    // Public Information
    // =========================================================================

    name: z.string(),
    title: z.string(),
    company: z.string(),
    location: z.string(),

    published: z.boolean().default(true),
    featured: z.boolean().default(false),

    // =========================================================================
    // Editorial Metadata
    // =========================================================================

    profile_created: z.string(),
    last_reviewed: z.string(),
    next_review: z.string(),

    profile_version: z.number().default(1),
    review_status: z.string(),
    review_frequency_months: z.number(),

    editor: z.string(),
    confidence: z.string(),

    // =========================================================================
    // Research Metadata
    // =========================================================================

    canonical_sources: z.object({
      linkedin: z.string().optional(),
      company: z.string().optional(),
    }),

    sources_checked: z.array(z.string()).default([]),

    research_notes: z.string().default(""),

    // =========================================================================
    // SEO
    // =========================================================================

    meta_title: z.string(),
    meta_description: z.string(),

    // =========================================================================
    // Classification
    // =========================================================================

    industries: z.array(z.string()).default([]),
    expertise: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),

    // =========================================================================
    // Future Relationships
    // =========================================================================

    company_id: z.string().default(""),
    education_ids: z.array(z.string()).default([]),
    board_ids: z.array(z.string()).default([]),
    related_executives: z.array(z.string()).default([]),
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
  executives,
  companies,
};