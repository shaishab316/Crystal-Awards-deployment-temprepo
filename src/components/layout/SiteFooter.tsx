import Link from 'next/link';
import { contentRepository } from '@/lib/repositories';
import { BsFillTelephoneFill } from 'react-icons/bs';

export function SiteFooter() {
  const site = contentRepository.getSite();
  const links = contentRepository.getNavLinks();

  return (
    <footer className="border-t border-gold/15 bg-obsidian-warm">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 lg:grid-cols-3 lg:px-12">
        <div>
          <p className="font-display text-2xl tracking-[0.12em] text-white">
            {site.brand.name}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
            Every great achievement deserves to be remembered with an award of
            exceptional beauty.
          </p>
          <a
            href={`tel:${site.brand.phone}`}
            className="mt-5 text-sm text-white/60 transition-colors hover:text-gold flex items-center gap-2"
          >
            <BsFillTelephoneFill />
            {site.brand.phone}
          </a>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Navigate
          </p>
          <ul className="mt-5 space-y-3">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className="text-sm text-white/60 transition-colors hover:text-gold"
              >
                Commission an Award
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.35em] text-gold">
            Contact
          </p>
          <a
            href={`mailto:${site.brand.email}`}
            className="mt-5 block text-sm text-white/60 transition-colors hover:text-gold"
          >
            {site.brand.email}
          </a>

          <Link
            href="/contact"
            className="dashed-cta mt-8 inline-block text-xs uppercase tracking-[0.28em] text-gold"
          >
            Begin Your Commission →
          </Link>
        </div>
      </div>

      <div className="border-t border-gold/10 px-6 py-6 text-center text-[11px] tracking-[0.2em] text-white/30 lg:px-12">
        © {new Date().getFullYear()} {site.brand.name}. All rights reserved.
      </div>
    </footer>
  );
}
