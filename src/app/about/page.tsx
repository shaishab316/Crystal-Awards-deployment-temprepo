import type { Metadata } from "next";
import { contentRepository } from "@/lib/repositories";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet master artisan Peter Johansson — over 30 years of crystal craftsmanship, creating royal-caliber crystal awards for the global corporate elite.",
};

export default function AboutPage() {
  const site = contentRepository.getSite();
  return <AboutContent about={site.about} quote={site.quote} />;
}
