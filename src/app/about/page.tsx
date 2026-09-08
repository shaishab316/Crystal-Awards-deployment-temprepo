import type { Metadata } from "next";
import { contentRepository } from "@/lib/repositories";
import { AboutContent } from "@/components/about/AboutContent";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet master artisan Peter Johansson — trained at Kosta Boda since age 15, creating royal-caliber crystal awards for the global corporate elite.",
};

export default function AboutPage() {
  const site = contentRepository.getSite();
  return <AboutContent about={site.about} quote={site.quote} />;
}
