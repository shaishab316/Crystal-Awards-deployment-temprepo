"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { SiteContent } from "@/lib/types";

type Props = {
  about: SiteContent["about"];
  quote: SiteContent["quote"];
};

export function AboutContent({ about, quote }: Props) {
  const [active, setActive] = useState(0);

  return (
    <div className="ghost-lines pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <header className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            {about.eyebrow}
          </p>
          <h1 className="mt-4 font-display text-5xl font-light text-white sm:text-6xl lg:text-7xl">
            {about.title}
          </h1>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm text-white/50">
            Kosta Boda Crystal Factory · Est. 1742
          </p>
        </header>

        <div className="mt-20 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative aspect-[4/5] overflow-hidden border border-gold/15"
          >
            <Image
              src="/images/products/awards-3.jpeg"
              alt="Crystal awards crafted by Peter Johansson"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <div>
            <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
              The Founder
            </p>
            <h2 className="mt-3 font-display text-4xl font-light text-white sm:text-5xl">
              Peter
              <br />
              <span className="text-gold">Johansson</span>
            </h2>
            <div className="mt-5 h-px w-12 bg-gold" />

            <blockquote className="mt-8 font-display text-xl italic text-white/80 sm:text-2xl">
              “{quote.text}”
            </blockquote>

            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p) => (
                <p
                  key={p.slice(0, 40)}
                  className="text-sm leading-relaxed text-white/50"
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-28">
          <p className="text-center text-[11px] uppercase tracking-[0.35em] text-gold">
            Three Pillars
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {about.pillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="prismatic p-8"
              >
                <span className="text-gold/50">0{i + 1}</span>
                <h3 className="mt-3 font-display text-2xl text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
                  {pillar.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-28">
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Timeline
          </p>
          <h2 className="mt-3 font-display text-4xl font-light text-white">
            A Lineage of Craft
          </h2>
          <div className="mt-10 flex flex-wrap gap-2">
            {about.timeline.map((item, i) => (
              <button
                key={item.year}
                type="button"
                onClick={() => setActive(i)}
                className={`border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                  active === i
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-gold/20 text-white/40 hover:border-gold/40"
                }`}
              >
                {item.year}
              </button>
            ))}
          </div>
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="prismatic mt-8 p-8"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
              {about.timeline[active].year}
            </p>
            <h3 className="mt-2 font-display text-3xl text-white">
              {about.timeline[active].title}
            </h3>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/50">
              {about.timeline[active].body}
            </p>
          </motion.div>
        </div>

        <div className="relative mt-28 overflow-hidden border border-gold/15">
          <div className="absolute inset-0">
            <Image
              src="/images/collection/lion-head.png"
              alt="Crystal craftsmanship"
              fill
              className="object-cover opacity-30"
              sizes="100vw"
            />
          </div>
          <div className="relative bg-obsidian/70 px-8 py-20 text-center sm:px-16">
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl">
              We Do Not Believe
              <br />
              <span className="text-gold">in Mass Production</span>
            </h2>
            <Link
              href="/process"
              className="mt-10 inline-block bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
            >
              Our Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
