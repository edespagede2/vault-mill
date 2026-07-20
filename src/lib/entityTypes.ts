export const ENTITY_TYPES = [
  "executive",
  "organization",
  "company",
  "board",
  "investor",
  "place",
  "product",
  "event",
  "animal",
  "other",
] as const;

export type EntityType = (typeof ENTITY_TYPES)[number];