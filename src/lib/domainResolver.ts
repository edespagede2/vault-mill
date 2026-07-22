import { getCollection, type CollectionEntry } from "astro:content";

type MillnameEntry = CollectionEntry<"millnames">;

function normalizeHost(host: string): string {
  return host
    .toLowerCase()
    .replace(/:\d+$/, "") // Remove port number
    .replace(/^www\./, ""); // Remove leading www.
}

export async function resolveDomain(host: string): Promise<MillnameEntry | null> {
  const normalized = normalizeHost(host);

  // VaultMill home page
  if (normalized === "vaultmill.com") {
    return null;
  }

  const millnames = await getCollection("millnames");

  return (
    millnames.find((entry) =>
      (entry.data.domains ?? []).some(
        (domain) => normalizeHost(domain) === normalized
      )
    ) ?? null
  );
}