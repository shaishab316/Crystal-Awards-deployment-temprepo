import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { collectionRepository } from "@/lib/repositories";

export const dynamic = "force-dynamic";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const collection = await collectionRepository.getBySlugManaged(slug);
  if (!collection) return { title: "Collection" };
  return {
    title: collection.name,
    description: collection.description,
    keywords: collection.keywords,
  };
}

export default async function CollectionDetailPage({ params }: Props) {
  const { slug } = await params;
  const collection = await collectionRepository.getBySlugManaged(slug);
  if (!collection) notFound();

  return (
    <div className="ghost-lines pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <Link
          href="/collections"
          className="text-[11px] uppercase tracking-[0.28em] text-white/40 transition-colors hover:text-gold"
        >
          ← All Collections
        </Link>

        <header className="mt-8 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Collection {collection.number}
          </p>
          <h1 className="mt-3 font-display text-5xl font-light text-white sm:text-6xl">
            {collection.name}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-lg text-white/60">{collection.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-white/45">
            {collection.description}
          </p>
          {collection.keywords.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {collection.keywords.map((keyword) => (
                <span
                  key={keyword}
                  className="border border-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-white/40"
                >
                  {keyword}
                </span>
              ))}
            </div>
          )}
        </header>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {collection.images.map((src, i) => (
            <div
              key={src}
              className={`refraction-card relative overflow-hidden border border-gold/15 bg-obsidian-warm ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 aspect-[16/10]" : "aspect-[4/5]"
              }`}
            >
              <Image
                src={src}
                alt={`${collection.name} crystal award ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-md text-sm text-white/45">
            Complimentary digital proofs. Custom engraving. No minimum orders.
            Worldwide shipping with rapid US delivery.
          </p>
          <Link
            href="/contact"
            className="bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
          >
            Commission This Style
          </Link>
        </div>
      </div>
    </div>
  );
}
