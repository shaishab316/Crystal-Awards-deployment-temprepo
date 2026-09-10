import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { ProofFormModal } from "@/components/forms/ProofFormModal";
import { contentRepository } from "@/lib/repositories";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const site = contentRepository.getSite();

export const metadata: Metadata = {
  title: {
    default: `${site.brand.name} — ${site.brand.tagline}`,
    template: `%s · ${site.brand.name}`,
  },
  description:
    "Premium custom crystal awards for championships, corporate recognition, and special events. Factory-direct from master artisan Peter Johansson. No minimum orders.",
  keywords: contentRepository.getSeoKeywords(),
  authors: [{ name: "Peter Johansson" }],
  openGraph: {
    title: `${site.brand.name} — ${site.brand.tagline}`,
    description:
      "Royal-caliber crystal awards, direct from studio. Custom engraving, no minimums, worldwide shipping.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${outfit.variable}`}>
      <body className="min-h-screen bg-obsidian text-foreground antialiased">
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ProofFormModal />
      </body>
    </html>
  );
}
