"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { ProcessStep } from "@/lib/types";

type Props = {
  steps: ProcessStep[];
};

export function ProcessStrip({ steps }: Props) {
  const preview = steps.slice(0, 5);

  return (
    <section className="border-y border-gold/10 bg-obsidian-warm/40 px-6 py-20 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-2">
          {preview.map((step, i) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex items-center gap-4 lg:gap-2"
            >
              <div className="flex min-w-[120px] flex-col items-center gap-2 px-2 text-center">
                <span className="text-2xl text-gold">{step.icon}</span>
                <span className="text-[11px] uppercase tracking-[0.25em] text-white/70">
                  {step.label}
                </span>
              </div>
              {i < preview.length - 1 && (
                <span className="hidden text-gold/40 lg:inline">→</span>
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/process"
            className="dashed-cta text-[11px] uppercase tracking-[0.28em] text-gold"
          >
            Explore Our Design Process →
          </Link>
        </div>
      </div>
    </section>
  );
}
