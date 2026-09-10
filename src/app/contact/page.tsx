import type { Metadata } from "next";
import {
  awardRepository,
  contentRepository,
} from "@/lib/repositories";
import { ContactForm } from "@/components/forms/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Commission a custom Swedish crystal award or request a complimentary digital design proof. Direct from Peter Johansson's studio.",
};

export default function ContactPage() {
  const site = contentRepository.getSite();
  const categories = awardRepository.getCategories();

  return (
    <div className="ghost-lines pt-28">
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-12 lg:pb-32">
        <header className="mb-16 max-w-3xl">
          <p className="text-[11px] uppercase tracking-[0.4em] text-gold">
            The Commissioning Desk
          </p>
          <h1 className="mt-4 font-display text-5xl font-light uppercase tracking-wider text-white sm:text-6xl">
            Contact
          </h1>
          <div className="mt-6 h-px w-16 bg-gold" />
        </header>

        <ContactForm
          email={site.brand.email}
          phone={site.brand.phone}
          categories={categories}
          proof={site.proofForm}
        />
      </div>
    </div>
  );
}
