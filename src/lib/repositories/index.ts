import {
  collectionsData,
  featuredAwardsData,
  navLinksData,
  processStepsData,
  siteContentData,
  awardCategories,
} from "@/data/site-data";
import { getManagedContent } from "@/lib/admin/store";
import type { Collection, FeaturedAward, NavLink, ProcessStep, SiteContent } from "@/lib/types";

export class CollectionRepository {
  getAll(): Collection[] { return collectionsData; }
  getFeatured(): Collection[] { return collectionsData.filter((c) => c.featured); }
  getBySlug(slug: string): Collection | undefined { return collectionsData.find((c) => c.slug === slug); }
  getSlugs(): string[] { return collectionsData.map((c) => c.slug); }
  async getAllManaged(): Promise<Collection[]> { return (await getManagedContent()).collections; }
  async getBySlugManaged(slug: string): Promise<Collection | undefined> { return (await getManagedContent()).collections.find((c) => c.slug === slug); }
}

export class AwardRepository {
  getFeatured(): FeaturedAward[] { return featuredAwardsData; }
  getTickerNames(): string[] { return featuredAwardsData.map((a) => a.name); }
  getCategories(): readonly string[] { return awardCategories; }
  async getFeaturedManaged(): Promise<FeaturedAward[]> { return (await getManagedContent()).featuredAwards; }
}

export class ContentRepository {
  getSite(): SiteContent { return siteContentData; }
  getNavLinks(): NavLink[] { return [...navLinksData]; }
  getProcessSteps(): ProcessStep[] { return processStepsData; }
  getSeoKeywords(): string[] { return siteContentData.seoKeywords; }
}

export const collectionRepository = new CollectionRepository();
export const awardRepository = new AwardRepository();
export const contentRepository = new ContentRepository();
