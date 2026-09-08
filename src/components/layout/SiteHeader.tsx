"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/collections", label: "Collections" },
  { href: "/about", label: "About" },
  { href: "/process", label: "Process" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 transition-all duration-500",
        scrolled || open ? "glass-nav" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6 lg:px-12">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-lg tracking-[0.18em] text-white transition-colors group-hover:text-gold sm:text-xl">
            SWEDISH CRYSTAL
          </span>
          <span className="text-[10px] uppercase tracking-[0.35em] text-gold">
            Heritage · Est. 1742
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {links.map((link) => {
            const active =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-xs uppercase tracking-[0.28em] transition-colors duration-300",
                  active ? "text-gold" : "text-white/70 hover:text-gold",
                )}
              >
                {link.label}
                <span
                  className={cn(
                    "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                    active ? "w-full" : "w-0 group-hover:w-full",
                  )}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/contact"
            className="hidden border border-gold px-5 py-2 text-[11px] uppercase tracking-[0.28em] text-gold transition-colors duration-300 hover:bg-gold hover:text-obsidian sm:inline-block"
          >
            Commission
          </Link>
          <button
            type="button"
            aria-label="Toggle menu"
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={cn(
                "h-px w-6 bg-gold transition-transform duration-300",
                open && "translate-y-[3.5px] rotate-45",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-gold transition-opacity duration-300",
                open && "opacity-0",
              )}
            />
            <span
              className={cn(
                "h-px w-6 bg-gold transition-transform duration-300",
                open && "-translate-y-[3.5px] -rotate-45",
              )}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-nav border-t border-gold/10 px-6 py-8 lg:hidden">
          <nav className="flex flex-col gap-6">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm uppercase tracking-[0.3em] text-white/80"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="border border-gold px-5 py-3 text-center text-[11px] uppercase tracking-[0.28em] text-gold"
            >
              Commission an Award
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
