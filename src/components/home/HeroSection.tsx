"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import type { SiteContent } from "@/lib/types";

type Props = {
  content: SiteContent["hero"];
  established: string;
};

export function HeroSection({ content, established }: Props) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const watermarkOpacity = useTransform(scrollYProgress, [0, 0.5], [0.06, 0]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden ghost-lines"
    >
      <Image
        src="/images/products/rush-general-collection-thank-you-2027.avif"
        alt="Swedish crystal awards catching light"
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-obsidian-warm/50 via-obsidian-warm/25 to-obsidian-warm" />
      <div className="absolute inset-0 bg-gradient-to-r from-obsidian-warm/60 via-transparent to-obsidian-warm/30" />

      <motion.span
        style={{ opacity: watermarkOpacity }}
        className="watermark-1742 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[28vw] font-light"
        aria-hidden
      >
        {established}
      </motion.span>

      <motion.div
        style={{ y: contentY }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center lg:px-12"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-[11px] uppercase tracking-[0.5em] text-gold"
        >
          {content.eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25 }}
          className="mt-6 font-display text-5xl font-light leading-[1.05] text-white sm:text-7xl lg:text-9xl"
        >
          {content.titleLine1}
          <br />
          <span className="text-gold">{content.titleAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 font-display text-2xl italic text-white/80 sm:text-3xl lg:text-4xl"
        >
          {content.titleItalic}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base"
        >
          {content.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <Link
            href={content.primaryCta.href}
            className="bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors duration-300 hover:bg-gold-light"
          >
            {content.primaryCta.label}
          </Link>
          <Link
            href={content.secondaryCta.href}
            className="dashed-cta text-[11px] uppercase tracking-[0.3em] text-gold"
          >
            {content.secondaryCta.label} →
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.4em] text-white/40">
          Scroll
        </span>
        <span className="animate-bounce text-gold">▾</span>
      </motion.div>
    </section>
  );
}
