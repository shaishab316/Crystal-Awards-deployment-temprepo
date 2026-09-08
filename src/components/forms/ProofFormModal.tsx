"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

const STORAGE_KEY = "sch-proof-dismissed";

export function ProofFormModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem(STORAGE_KEY);
    if (dismissed) return;
    const timer = setTimeout(() => setOpen(true), 12000);
    return () => clearTimeout(timer);
  }, []);

  const close = () => {
    setOpen(false);
    sessionStorage.setItem(STORAGE_KEY, "1");
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-end justify-center bg-obsidian/70 p-4 backdrop-blur-sm sm:items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 40 }}
            transition={{ duration: 0.4 }}
            className="prismatic relative w-full max-w-lg bg-obsidian-warm p-8 shadow-2xl"
            role="dialog"
            aria-labelledby="proof-title"
          >
            <button
              type="button"
              onClick={close}
              className="absolute right-4 top-4 text-white/40 transition-colors hover:text-gold"
              aria-label="Close"
            >
              ✕
            </button>

            {submitted ? (
              <div className="py-8 text-center">
                <p className="text-3xl text-gold">✦</p>
                <h3 className="mt-4 font-display text-3xl text-white">
                  Proof Request Received
                </h3>
                <p className="mt-3 text-sm text-white/50">
                  Our studio team will email your complimentary digital design
                  proof within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={close}
                  className="mt-8 bg-gold px-6 py-3 text-[11px] uppercase tracking-[0.28em] text-obsidian"
                >
                  Continue Exploring
                </button>
              </div>
            ) : (
              <>
                <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
                  Complimentary
                </p>
                <h3
                  id="proof-title"
                  className="mt-2 font-display text-3xl font-light text-white"
                >
                  See Your Logo in Flawless Crystal
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/50">
                  Upload your logo and text. We&apos;ll email a premium digital
                  design proof within 24 hours. No obligation. No minimums.
                </p>

                <form onSubmit={onSubmit} className="mt-8 space-y-5">
                  <input
                    required
                    name="name"
                    placeholder="Full Name"
                    className="blueprint-input"
                  />
                  <input
                    required
                    name="company"
                    placeholder="Company / Organization"
                    className="blueprint-input"
                  />
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="Email Address"
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
                    className="w-full bg-gold py-3.5 text-[11px] uppercase tracking-[0.3em] text-obsidian transition-colors hover:bg-gold-light"
                  >
                    Request My Free Proof
                  </button>
                  <p className="text-center text-[11px] text-white/35">
                    Your brand assets are secure. Direct-from-factory privacy
                    guaranteed.
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
