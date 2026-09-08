export type Collection = {
  id: string;
  slug: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  coverImage: string;
  images: string[];
  keywords: string[];
  featured?: boolean;
};

export type FeaturedAward = {
  id: string;
  name: string;
  image: string;
  category: string;
};

export type ProcessStep = {
  id: string;
  number: string;
  icon: string;
  label: string;
  headline: string;
  body: string;
  detail: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type SiteContent = {
  brand: {
    name: string;
    shortName: string;
    tagline: string;
    established: string;
    email: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleAccent: string;
    titleItalic: string;
    body: string;
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
  };
  quote: {
    text: string;
    attribution: string;
    credential: string;
  };
  about: {
    eyebrow: string;
    title: string;
    founderName: string;
    paragraphs: string[];
    pillars: { title: string; body: string }[];
    timeline: { year: string; title: string; body: string }[];
  };
  proofForm: {
    title: string;
    subtitle: string;
    submitLabel: string;
    trustBadge: string;
  };
  seoKeywords: string[];
};

export type AwardCategory =
  | "Golf Tournament"
  | "Corporate Recognition"
  | "Sports Championship"
  | "Executive Award"
  | "Special Event"
  | "Custom Sculpture"
  | "Animal Motif"
  | "Other";
