"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import type { Collection, FeaturedAward } from "@/lib/types";

type Props = {
  awards: FeaturedAward[];
  collections: Collection[];
};

export function PremierAwardsSection({ awards, collections }: Props) {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            The Archive of Excellence
          </p>
          <h2 className="mt-4 font-display text-4xl font-light text-white sm:text-5xl lg:text-6xl">
            Premier Awards Collection
          </h2>
          <div className="mx-auto mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm text-white/50">
            Custom Swedish Crystal Trophies & Recognition Awards
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {awards.map((award, i) => (
            <motion.article
              key={award.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="refraction-card group"
            >
              <div className="relative aspect-[3/4] overflow-hidden border border-gold/15 bg-obsidian-warm">
                <Image
                  src={award.image}
                  alt={award.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-80" />
                <div className="absolute inset-x-0 bottom-0 p-4">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-gold/80">
                    {award.category}
                  </p>
                  <h3 className="mt-1 font-display text-xl text-white">
                    {award.name}
                  </h3>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="mt-24">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
                Collections
              </p>
              <h3 className="mt-2 font-display text-3xl font-light text-white sm:text-4xl">
                Browse the Archive
              </h3>
            </div>
            <Link
              href="/collections"
              className="dashed-cta hidden text-[11px] uppercase tracking-[0.28em] text-gold sm:inline-block"
            >
              Browse All Collections →
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {collections.map((collection, i) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.05 }}
              >
                <Link
                  href={`/collections/${collection.slug}`}
                  className="collection-card prismatic block p-5"
                >
                  <span className="text-[11px] tracking-[0.2em] text-gold/70">
                    {collection.number}.
                  </span>
                  <p className="mt-2 font-display text-xl text-white">
                    {collection.name}
                  </p>
                  <p className="mt-1 text-xs text-white/40">Collection</p>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              href="/collections"
              className="dashed-cta text-[11px] uppercase tracking-[0.28em] text-gold"
            >
              Browse All Collections →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
