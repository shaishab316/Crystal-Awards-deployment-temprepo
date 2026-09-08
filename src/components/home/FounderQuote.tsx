"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { SiteContent } from "@/lib/types";

type Props = {
  quote: SiteContent["quote"];
};

export function FounderQuote({ quote }: Props) {
  return (
    <section className="px-6 py-24 lg:px-12 lg:py-32">
      <motion.blockquote
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.8 }}
        className="prismatic mx-auto max-w-4xl px-8 py-14 text-center sm:px-16"
      >
        <span className="font-display text-6xl leading-none text-gold/40">
          “
        </span>
        <p className="mt-2 font-display text-2xl font-light italic leading-snug text-white sm:text-3xl lg:text-4xl">
          {quote.text}
        </p>
        <footer className="mt-8">
          <p className="text-sm tracking-[0.15em] text-gold">
            — {quote.attribution}
          </p>
          <p className="mt-2 text-xs text-white/40">{quote.credential}</p>
        </footer>
      </motion.blockquote>

      <div className="mx-auto mt-16 flex max-w-4xl flex-col items-center justify-between gap-6 border-t border-gold/10 pt-10 sm:flex-row">
        <Link
          href="/process"
          className="text-xs uppercase tracking-[0.28em] text-white/50 transition-colors hover:text-gold"
        >
          Explore Our Design Process
        </Link>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/40">
          <span className="swedish-flag" aria-hidden />
          Discover how we craft unique awards
        </div>
        <Link
          href="/about"
          className="text-xs uppercase tracking-[0.28em] text-white/50 transition-colors hover:text-gold"
        >
          About Our Company
        </Link>
      </div>
    </section>
  );
}
