import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { ENTITY_TYPES } from "./lib/entityTypes";

const millnames = defineCollection({
  loader: glob({
    pattern: "**/*.md",
    base: "./src/content/millnames",
  }),
  schema: z.object({
    millname: z.string(),
    type: z.enum(ENTITY_TYPES),
    slug: z.string(),
    domains: z.array(z.string()).default([]),
    name: z.string(),
    description: z.string(),
    image: z.string().optional(),
    last_reviewed: z.coerce.date(),
    published: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          url: z.string().url(),
        })
      )
      .default([]),
    relationships: z
      .array(
        z.object({
          type: z.string(),
          target: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = {
  millnames,
};