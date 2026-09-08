"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/types";

type Props = {
  collections: Collection[];
};

export function CollectionsGrid({ collections }: Props) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {collections.map((collection, i) => (
        <motion.article
          key={collection.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: (i % 3) * 0.07 }}
        >
          <Link
            href={`/collections/${collection.slug}`}
            className="collection-card group block overflow-hidden border border-gold/15 bg-obsidian-warm"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={collection.coverImage}
                alt={collection.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 33vw"
              />
              <span className="absolute right-3 top-3 border border-gold/40 bg-obsidian/70 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-gold backdrop-blur-sm">
                {collection.images.length} Photos
              </span>
            </div>
            <div className="p-5">
              <span className="text-[11px] tracking-[0.2em] text-gold/70">
                {collection.number}.
              </span>
              <h2 className="mt-1 font-display text-2xl text-white">
                {collection.name}
              </h2>
              <p className="mt-2 text-sm text-white/45">{collection.tagline}</p>
              <span className="mt-4 inline-block text-xs text-gold transition-transform group-hover:translate-x-1">
                View Collection →
              </span>
            </div>
          </Link>
        </motion.article>
      ))}
    </div>
  );
}
