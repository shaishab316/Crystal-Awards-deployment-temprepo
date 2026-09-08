import type { Metadata } from "next";
import Link from "next/link";
import { collectionRepository } from "@/lib/repositories";
import { CollectionsGrid } from "@/components/collections/CollectionsGrid";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Collections",
  description:
    "Browse the archive of Swedish crystal awards — animals, executive pieces, sports trophies, nautical, musical, and bespoke custom cuts.",
};

export default async function CollectionsPage() {
  const collections = await collectionRepository.getAllManaged();

  return (
    <div className="ghost-lines pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <header className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            The Archive of Excellence
          </p>
          <h1 className="mt-4 font-display text-5xl font-light uppercase tracking-wider text-white sm:text-6xl lg:text-7xl">
            Collections
          </h1>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-white/50 sm:text-base">
            Free engraving & personalization on every piece. From lions and
            whales to president&apos;s club trophies — factory-direct, no
            minimum orders.
          </p>
        </header>

        <div className="mt-16">
          <CollectionsGrid collections={collections} />
        </div>

        <div className="prismatic mt-24 px-8 py-14 text-center">
          <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
            Don&apos;t See What You Need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-white/50">
            If you can imagine it, we can create it in crystal — including
            custom animal motifs, corporate sculptures, and full tournament
            programs.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
          >
            Commission a Custom Design
          </Link>
        </div>
      </div>
    </div>
  );
}
