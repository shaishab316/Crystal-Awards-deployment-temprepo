"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import type { ProcessStep } from "@/lib/types";

type Props = {
  steps: ProcessStep[];
};

export function ProcessContent({ steps }: Props) {
  const [active, setActive] = useState(0);
  const step = steps[active];

  return (
    <div className="ghost-lines pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <header className="max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            The Mastery Narrative
          </p>
          <h1 className="mt-4 font-display text-5xl font-light uppercase tracking-wider text-white sm:text-6xl lg:text-7xl">
            Our Process
          </h1>
          <div className="mt-6 h-px w-16 bg-gold" />
          <p className="mt-6 text-sm leading-relaxed text-white/50 sm:text-base">
            From concept to completion — six stages of uncompromising craft
            honed over 30 years of manufacturing experience.
          </p>
        </header>

        <div className="mt-14 flex gap-2 overflow-x-auto pb-2">
          {steps.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => setActive(i)}
              className={`shrink-0 border-b-2 px-4 py-3 text-[11px] uppercase tracking-[0.2em] transition-colors ${
                active === i
                  ? "border-gold bg-gold/10 text-gold"
                  : "border-transparent text-white/40 hover:text-white/70"
              }`}
            >
              <span className="mr-2 text-gold/60">{s.icon}</span>
              {s.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="prismatic mt-10 grid gap-10 p-8 lg:grid-cols-[1fr_1.4fr] lg:p-12"
          >
            <div>
              <p className="font-display text-7xl font-light text-gold/20">
                {step.number}
              </p>
              <p className="mt-2 text-[11px] uppercase tracking-[0.35em] text-gold">
                {step.label}
              </p>
            </div>
            <div>
              <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
                {step.headline}
              </h2>
              <p className="mt-5 text-base leading-relaxed text-white/60">
                {step.body}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-white/40">
                {step.detail}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-8 flex justify-between">
          <button
            type="button"
            disabled={active === 0}
            onClick={() => setActive((v) => Math.max(0, v - 1))}
            className="text-[11px] uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-gold disabled:opacity-30"
          >
            ← Previous Stage
          </button>
          <button
            type="button"
            disabled={active === steps.length - 1}
            onClick={() => setActive((v) => Math.min(steps.length - 1, v + 1))}
            className="text-[11px] uppercase tracking-[0.25em] text-white/40 transition-colors hover:text-gold disabled:opacity-30"
          >
            Next Stage →
          </button>
        </div>

        <div className="mt-24 text-center">
          <h2 className="font-display text-3xl text-white sm:text-4xl">
            Ready to begin?
          </h2>
          <Link
            href="/contact"
            className="mt-8 inline-block bg-gold px-8 py-3.5 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
          >
            Start the Conversation
          </Link>
        </div>
      </div>
    </div>
  );
}
