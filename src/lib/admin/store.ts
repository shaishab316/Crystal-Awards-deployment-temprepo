import "server-only";
import { promises as fs } from "fs";
import path from "path";
import { collectionsData, featuredAwardsData } from "@/data/site-data";
import type { Collection, FeaturedAward } from "@/lib/types";

export type ManagedContent = {
  collections: Collection[];
  featuredAwards: FeaturedAward[];
  updatedAt: string;
};

const dataDir = path.join(process.cwd(), "data");
const dataFile = path.join(dataDir, "managed-content.json");

const initialContent = (): ManagedContent => ({
  collections: structuredClone(collectionsData),
  featuredAwards: structuredClone(featuredAwardsData),
  updatedAt: new Date().toISOString(),
});

async function ensureStore() {
  await fs.mkdir(dataDir, { recursive: true });
  try {
    await fs.access(dataFile);
  } catch {
    await fs.writeFile(dataFile, JSON.stringify(initialContent(), null, 2), "utf8");
  }
}

export async function getManagedContent(): Promise<ManagedContent> {
  await ensureStore();
  try {
    return JSON.parse(await fs.readFile(dataFile, "utf8")) as ManagedContent;
  } catch {
    return initialContent();
  }
}

export async function saveManagedContent(content: ManagedContent) {
  await ensureStore();
  const next = { ...content, updatedAt: new Date().toISOString() };
  const temp = `${dataFile}.tmp`;
  await fs.writeFile(temp, JSON.stringify(next, null, 2), "utf8");
  await fs.rename(temp, dataFile);
  return next;
}

export async function getCollectionBySlug(slug: string) {
  const content = await getManagedContent();
  return content.collections.find((collection) => collection.slug === slug);
}
