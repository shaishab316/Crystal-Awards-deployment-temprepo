"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import type { SiteContent } from "@/lib/types";

type Props = {
  email: string;
  categories: readonly string[];
  proof: SiteContent["proofForm"];
};

const scales = [
  "Single Piece",
  "Small Event",
  "Corporate",
  "Tournament",
  "Global Championship",
];

export function ContactForm({ email, categories, proof }: Props) {
  const [scale, setScale] = useState(2);
  const [category, setCategory] = useState(categories[1]);
  const [submitted, setSubmitted] = useState(false);
  const [mode, setMode] = useState<"commission" | "proof">("commission");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="prismatic px-8 py-16 text-center">
        <p className="text-4xl text-gold">✦</p>
        <h2 className="mt-4 font-display text-4xl text-white">
          {mode === "proof" ? "Proof Request Received" : "Commission Received"}
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-white/50">
          Peter Johansson&apos;s studio will personally review your request and
          respond within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <div className="relative aspect-[4/5] overflow-hidden border border-gold/15">
          <Image
            src="/images/collection/president-award.png"
            alt="Custom crystal commission"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="prismatic mt-6 p-6">
          <p className="text-[11px] uppercase tracking-[0.3em] text-gold">
            What to Expect
          </p>
          <ul className="mt-4 space-y-3 text-sm text-white/50">
            <li>— Complimentary digital design proof within 24 hours</li>
            <li>— No minimum order requirements</li>
            <li>— Direct collaboration with the factory floor</li>
            <li>— Luxury gift boxing & worldwide shipping</li>
          </ul>
          <p className="mt-6 font-display text-lg italic text-white/70">
            “An award should never be treated like a mass-produced commodity.”
          </p>
        </div>
      </div>

      <div>
        <div className="mb-8 flex gap-2">
          <button
            type="button"
            onClick={() => setMode("commission")}
            className={`px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
              mode === "commission"
                ? "bg-gold text-obsidian"
                : "border border-gold/30 text-gold"
            }`}
          >
            Commission
          </button>
          <button
            type="button"
            onClick={() => setMode("proof")}
            className={`px-4 py-2 text-[11px] uppercase tracking-[0.22em] ${
              mode === "proof"
                ? "bg-gold text-obsidian"
                : "border border-gold/30 text-gold"
            }`}
          >
            Free Digital Proof
          </button>
        </div>

        {mode === "commission" ? (
          <>
            <h2 className="font-display text-4xl font-light text-white sm:text-5xl">
              Begin Your
              <br />
              <span className="text-gold">Commission</span>
            </h2>
            <form onSubmit={onSubmit} className="mt-10 space-y-8">
              <div>
                <label className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Project Scale — {scales[scale]}
                </label>
                <input
                  type="range"
                  min={0}
                  max={4}
                  value={scale}
                  onChange={(e) => setScale(Number(e.target.value))}
                  className="mt-3 w-full accent-gold"
                />
                <div className="mt-2 flex justify-between text-[9px] uppercase tracking-[0.15em] text-white/30">
                  {scales.map((s) => (
                    <span key={s}>{s.split(" ")[0]}</span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                  Award Category
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {categories.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setCategory(c)}
                      className={`border px-3 py-1.5 text-[10px] uppercase tracking-[0.15em] transition-colors ${
                        category === c
                          ? "border-gold bg-gold/15 text-gold"
                          : "border-gold/20 text-white/40 hover:border-gold/40"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <input
                required
                name="name"
                placeholder="Your Name *"
                className="blueprint-input"
              />
              <input
                name="organization"
                placeholder="Organization"
                className="blueprint-input"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email *"
                className="blueprint-input"
              />
              <input
                name="phone"
                placeholder="Phone"
                className="blueprint-input"
              />
              <textarea
                required
                name="message"
                rows={4}
                placeholder="Describe Your Vision *"
                className="blueprint-input resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
              >
                Submit Commission Request
              </button>
              <p className="text-center text-[11px] text-white/35">
                Personal review · Response within 24 hours · Or email{" "}
                <a href={`mailto:${email}`} className="text-gold">
                  {email}
                </a>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 className="font-display text-3xl font-light text-white sm:text-4xl">
              {proof.title}
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              {proof.subtitle}
            </p>
            <form onSubmit={onSubmit} className="mt-10 space-y-6">
              <input
                required
                name="name"
                placeholder="Full Name"
                className="blueprint-input"
              />
              <input
                required
                name="company"
                placeholder="Company / Organization Name"
                className="blueprint-input"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address (For Proof Delivery)"
                className="blueprint-input"
              />
              <label className="block">
                <span className="mb-2 block text-[10px] uppercase tracking-[0.25em] text-white/35">
                  Upload Logo
                </span>
                <input
                  type="file"
                  name="logo"
                  accept="image/*,.pdf,.ai,.eps"
                  className="w-full text-xs text-white/50 file:mr-4 file:border file:border-gold/40 file:bg-transparent file:px-3 file:py-2 file:text-[10px] file:uppercase file:tracking-[0.2em] file:text-gold"
                />
              </label>
              <textarea
                name="notes"
                rows={3}
                placeholder="Custom Text / Notes (Optional)"
                className="blueprint-input resize-none"
              />
              <button
                type="submit"
                className="w-full bg-gold py-4 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
              >
                {proof.submitLabel}
              </button>
              <p className="text-center text-[11px] text-white/35">
                {proof.trustBadge}
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
