import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { ENTITY_TYPES } from "./lib/entityTypes";

const millnames = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/millnames",
  }),

  schema: z.object({
    //
    // Identity
    //
    millname: z.string(),

    type: z.enum(ENTITY_TYPES),

    slug: z.string(),

    //
    // Core Information
    //
    name: z.string(),

    description: z.string(),

    image: z.string().optional(),

    last_reviewed: z.date(),

    published: z.boolean().default(true),

    //
    // Classification
    //
    tags: z.array(z.string()).default([]),

    //
    // External Links
    //
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),

    //
    // Relationships
    //
    relationships: z
      .array(
        z.object({
          predicate: z.string(),
          target: z.string(),
        })
      )
      .default([]),

    //
    // Sources
    //
    sources: z.array(z.string().url()).default([]),
  }),
});

export const collections = {
  millnames,
};