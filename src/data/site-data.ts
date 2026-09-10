import type {
  Collection,
  FeaturedAward,
  ProcessStep,
  SiteContent,
} from '@/lib/types';

export const siteContentData: SiteContent = {
  brand: {
    name: 'Swedish Crystal Heritage',
    shortName: 'Swedish Crystal',
    tagline: 'Crafted for Champions Worldwide',
    established: '1742',
    email: 'companycrystalawards@gmail.com',
    phone: '813-948-6441',
  },
  hero: {
    eyebrow: 'Swedish Crystal Heritage · Est. 1742',
    titleLine1: 'Crafted for',
    titleAccent: 'Champions',
    titleItalic: '& The Quality Minded',
    body: 'Premium custom crystal awards for prestigious championships, corporate recognition, and special events — worldwide. Direct from our studio. No minimums. No middlemen.',
    primaryCta: { label: 'Explore Collections', href: '/collections' },
    secondaryCta: { label: 'Commission an Award', href: '/contact' },
  },
  quote: {
    text: 'If you can imagine it, we can create it in crystal.',
    attribution: 'Peter Johansson, Founder',
    credential: 'Trained at Kosta Boda Crystal Factory · Est. 1742',
  },
  about: {
    eyebrow: 'Our Story',
    title: 'Master Artisan. Factory Direct.',
    founderName: 'Peter Johansson',
    paragraphs: [
      "Beginning his journey at the age of 15 at Sweden's legendary Kosta Boda factory (founded in 1742), Peter Johansson mastered every fundamental tier of the discipline — building high-temperature furnaces from the ground up, developing proprietary crystal mixtures engineered for flawless optical clarity, and hand-cutting complex pieces now proudly displayed with the Royal Family of Sweden.",
      'For the past 30 years, Johansson has operated his own state-of-the-art production facility, personally training every artisan to replicate these historic European standards. By bypassing traditional distributor networks, the studio offers heritage craftsmanship and logistical flexibility to the corporate recognition and tournament awards market — from a single bespoke masterpiece to full-scale event programs.',
      '"An award should never be treated like a mass-produced commodity," says Peter Johansson. "Every curve, polished edge, and engraved detail must reflect the exact significance of the milestone it celebrates."',
    ],
    pillars: [
      {
        title: 'Engineering & Innovation',
        body: 'Proprietary crystal mixtures and furnaces built for optical clarity that mass producers cannot match.',
      },
      {
        title: 'Artisanship & Machining',
        body: 'Hand-cutting, precision engraving, and finishing inspected to royal-caliber standards.',
      },
      {
        title: 'Mastery & Mentorship',
        body: 'Every craftsman is trained personally by Peter — heritage passed hand to hand, not outsourced.',
      },
    ],
    timeline: [
      {
        year: '1742',
        title: 'Kosta Boda Founded',
        body: "Sweden's legendary crystal factory establishes the lineage of European optical craft.",
      },
      {
        year: 'Age 15',
        title: 'The Apprenticeship',
        body: 'Peter begins at Kosta Boda, mastering furnaces, mixtures, and hand-cutting from the ground up.',
      },
      {
        year: 'Royal Works',
        title: 'Pieces for the Crown',
        body: 'Complex crystal creations enter collections displayed with the Royal Family of Sweden.',
      },
      {
        year: '30+ Years',
        title: 'Own Studio Facility',
        body: 'A state-of-the-art factory where every artisan is trained to historic European standards.',
      },
      {
        year: '2026',
        title: 'Direct-to-Market Launch',
        body: 'Global buyers collaborate directly with the factory floor — no middlemen, no minimums.',
      },
    ],
  },
  proofForm: {
    title: 'See Your Logo in Flawless Crystal',
    subtitle:
      "Planning an upcoming event or executive recognition? Upload your logo and text below. Master artisan Peter Johansson's studio team will email you a complimentary, premium digital design proof within 24 hours. No obligation. No minimums.",
    submitLabel: 'Request My Free Proof',
    trustBadge:
      'Your brand assets are secure. Direct-from-factory privacy guaranteed.',
  },
  seoKeywords: [
    'Corporate Recognition Awards',
    'Personalized Crystal Awards',
    'Customized Crystal Awards',
    'Service Awards',
    'Sports Trophies',
    'Hospital Health Awards',
    'Heart Awards',
    'Globe Awards',
    'Casino Gaming Awards',
    'Star Awards',
    'Sailing Awards',
    'Diamond Awards',
    'Lighthouse Awards',
    'Paperweights',
    'Book & Bookends',
    'Real Estate Awards',
    'Musical Awards',
    'Aerial Air Awards',
    'Lion Crystal Awards',
    'Tiger Crystal Awards',
    'Owl Crystal Awards',
    'Whale Crystal Awards',
    'Wolf Crystal Awards',
  ],
};

export const featuredAwardsData: FeaturedAward[] = [
  {
    id: 'centessa',
    name: 'Centessa Award',
    image: '/images/collection/president-award.png',
    category: 'Executive',
  },
  {
    id: 'beyond',
    name: 'Beyond Transaction',
    image: '/images/collection/global.png',
    category: 'Corporate',
  },
  {
    id: 'presidents',
    name: "President's Club",
    image: '/images/products/awards-1.jpeg',
    category: 'Recognition',
  },
  {
    id: 'ceo',
    name: 'CEO Leadership',
    image: '/images/products/awards-2.jpeg',
    category: 'Executive',
  },
  {
    id: 'values',
    name: 'Values Award',
    image: '/images/collection/heart.png',
    category: 'Culture',
  },
];

export const collectionsData: Collection[] = [
  {
    id: '3d-crystal',
    slug: '3d-crystal',
    number: '01',
    name: '3D Crystal',
    tagline: 'Dimensional artistry in optical crystal',
    description:
      'Intricate subsurface and sculptural designs that catch light from every angle — from landmarks to custom corporate motifs.',
    coverImage: '/images/collection/overview.png',
    images: [
      '/images/collection/overview.png',
      '/images/collection/building.png',
      '/images/collection/building-details.png',
      '/images/collection/church.png',
      '/images/collection/cubes.png',
    ],
    keywords: ['3d Awards', 'Art Crystal Design'],
    featured: true,
  },
  {
    id: 'animal',
    slug: 'animal',
    number: '02',
    name: 'Animal',
    tagline: 'Lions, tigers, owls, whales, wolves & more',
    description:
      'Among our most requested commissions. Majestic animal motifs — lions, tigers, owls, whales, wolves, and many others — rendered in flawless crystal.',
    coverImage: '/images/collection/lion-head.png',
    images: [
      '/images/collection/lion-head.png',
      '/images/collection/cougar.png',
    ],
    keywords: [
      'All Animal Names',
      'Lion Crystal Awards',
      'Tiger Crystal Awards',
      'Owl Crystal Awards',
      'Whale Crystal Awards',
      'Wolf Crystal Awards',
    ],
    featured: true,
  },
  {
    id: 'auto-truck-aero',
    slug: 'auto-truck-aero',
    number: '03',
    name: 'Auto · Truck · Aero',
    tagline: 'Transportation excellence, crystallized',
    description:
      'Trucks, sports cars, tractors, and aviation-inspired pieces for fleet, logistics, and aerospace recognition programs.',
    coverImage: '/images/collection/truck.png',
    images: [
      '/images/collection/truck.png',
      '/images/collection/sports-car.png',
      '/images/collection/tractor.png',
      '/images/collection/flight.png',
      '/images/collection/cargo-ship.png',
    ],
    keywords: ['Arial/Air', 'Real Estate'],
    featured: true,
  },
  {
    id: 'casino',
    slug: 'casino',
    number: '04',
    name: 'Casino',
    tagline: 'Gaming floor prestige awards',
    description:
      'High-impact crystal for casino and gaming recognition — stars, diamonds, and custom branded sculptures.',
    coverImage: '/images/products/a87ac9a35_3DCollectionPresidentAward.avif',
    images: [
      '/images/products/a87ac9a35_3DCollectionPresidentAward.avif',
      '/images/products/awards-4.jpeg',
    ],
    keywords: ['Casino Gaming Awards', 'Star Awards', 'Diamond Awards'],
  },
  {
    id: 'custom-cut',
    slug: 'custom-cut',
    number: '05',
    name: 'Custom Cut',
    tagline: 'Bespoke silhouettes, zero minimums',
    description:
      'One masterpiece or an entire gala program. Custom-cut crystal with complimentary digital proofs and laser engraving.',
    coverImage: '/images/products/guitar.png',
    images: [
      '/images/products/guitar.png',
      '/images/products/rush-general-collection-thank-you-2027.avif',
    ],
    keywords: ['Customized Crystal Awards', 'Personalized Logo Trophies'],
    featured: true,
  },
  {
    id: 'global',
    slug: 'global',
    number: '06',
    name: 'Global',
    tagline: 'World-class recognition motifs',
    description:
      'Globe and international excellence awards for global teams, partnerships, and milestone celebrations.',
    coverImage: '/images/collection/global.png',
    images: ['/images/collection/global.png'],
    keywords: ['Globe Awards', 'Corporate Recognition Awards'],
  },
  {
    id: 'heart',
    slug: 'heart',
    number: '07',
    name: 'Heart & Health',
    tagline: 'Hospital, healthcare & gratitude',
    description:
      'Heart crystal awards for healthcare heroes, hospital recognition, and mission-driven organizations.',
    coverImage: '/images/collection/heart.png',
    images: ['/images/collection/heart.png'],
    keywords: ['Heart Awards', 'Hospital/Health'],
  },
  {
    id: 'lighthouse',
    slug: 'lighthouse',
    number: '08',
    name: 'Lighthouse',
    tagline: 'Guidance, leadership, legacy',
    description:
      'Lighthouse sculptures symbolizing vision and steadfast leadership — ideal for executive and service awards.',
    coverImage: '/images/collection/lighthouse.png',
    images: ['/images/collection/lighthouse.png'],
    keywords: ['Lighthouse Awards', 'Service Awards'],
  },
  {
    id: 'nautical',
    slug: 'nautical',
    number: '09',
    name: 'Nautical · Ocean',
    tagline: 'Sailing, whales & maritime glory',
    description:
      'Ocean and sailing awards including whale and maritime motifs for yacht clubs, ports, and championships.',
    coverImage: '/images/collection/cargo-ship.png',
    images: ['/images/collection/cargo-ship.png'],
    keywords: ['Sailing Awards', 'Whale Crystal Awards'],
  },
  {
    id: 'office',
    slug: 'office',
    number: '10',
    name: 'Office',
    tagline: 'Bookends, paperweights & desk prestige',
    description:
      'Everyday excellence on the executive desk — crystal bookends, paperweights, and engraved presentation pieces.',
    coverImage: '/images/collection/cubes.png',
    images: ['/images/collection/cubes.png'],
    keywords: ['Paperweights', 'Book & Bookends', 'Gift Box Design'],
  },
  {
    id: 'fruit',
    slug: 'fruit',
    number: '11',
    name: 'Fruit & Ornament',
    tagline: 'Pineapple hospitality & gift crystal',
    description:
      'Symbolic fruit and ornament designs — including the classic pineapple of hospitality — for gifts and seasonal recognition.',
    coverImage: '/images/collection/pineapple.png',
    images: ['/images/collection/pineapple.png'],
    keywords: ['Ornament Gift'],
  },
  {
    id: 'president',
    slug: 'president',
    number: '12',
    name: 'President & Executive',
    tagline: 'The pinnacle of corporate recognition',
    description:
      "President's Club, CEO leadership, and executive milestone trophies crafted for the corporate elite.",
    coverImage: '/images/collection/president-award.png',
    images: [
      '/images/collection/president-award.png',
      '/images/products/awards-1.jpeg',
    ],
    keywords: [
      'Corporate Recognition Awards',
      'Employee Appreciation Awards',
      'Retirement Awards',
    ],
    featured: true,
  },
  {
    id: 'sports',
    slug: 'sports',
    number: '13',
    name: 'Sports',
    tagline: 'Championship crystal for champions',
    description:
      'Tournament and championship awards for golf, volleyball, and elite sporting events — worldwide shipping with rapid US delivery.',
    coverImage: '/images/products/awards-2.jpeg',
    images: [
      '/images/products/awards-2.jpeg',
      '/images/products/awards-4.jpeg',
    ],
    keywords: ['Sports Trophies', 'Achievement Awards'],
  },
  {
    id: 'stars-hearts',
    slug: 'stars-hearts',
    number: '14',
    name: 'Stars · Hearts',
    tagline: 'Iconic shapes, lasting impression',
    description:
      'Classic star and heart forms elevated through optical clarity, custom engraving, and luxury presentation.',
    coverImage: '/images/collection/heart.png',
    images: ['/images/collection/heart.png'],
    keywords: ['Star Awards', 'Heart Awards', 'Diamond Awards'],
  },
  {
    id: 'musical',
    slug: 'musical',
    number: '15',
    name: 'Musical',
    tagline: 'Instruments & performance honors',
    description:
      'Guitar cut-outs and musical motifs for performance awards, entertainment industry recognition, and creative excellence.',
    coverImage: '/images/products/guitar.png',
    images: ['/images/products/guitar.png'],
    keywords: ['Musical'],
  },
  {
    id: 'real-estate',
    slug: 'real-estate',
    number: '16',
    name: 'Real Estate',
    tagline: 'Architecture & property milestones',
    description:
      'Building, landmark, and property-themed crystal for brokerage awards, closings, and development milestones.',
    coverImage: '/images/collection/building.png',
    images: [
      '/images/collection/building.png',
      '/images/collection/building-details.png',
      '/images/collection/church.png',
    ],
    keywords: ['Real Estate'],
  },
  {
    id: 'rush-order',
    slug: 'rush-order',
    number: '17',
    name: 'Rush Order',
    tagline:
      'In-stock designs in Tampa — fast delivery with full-color photographic logos.',
    description:
      'Many designs are stocked for rapid delivery. Local photographic stencil method supports full-color logos; factory engraving overseas is available when timing allows.',
    coverImage: '/images/collection/building.png',
    images: [
      '/images/collection/building.png',
      '/images/collection/building-details.png',
      '/images/collection/church.png',
    ],
    keywords: [
      'Rush Order',
      'Quick Delivery',
      'Full Color Logo',
      'Photographic Stencil',
    ],
  },
];

export const processStepsData: ProcessStep[] = [
  {
    id: 'consultation',
    number: '01',
    icon: '◇',
    label: 'Consultation',
    headline: 'Understanding Your Vision',
    body: 'We align with your event theme, brand standards, and the significance of the milestone you are celebrating.',
    detail:
      'Share your logo, quantities, timeline, and inspiration. Whether a single CEO presentation piece or a global championship program, we begin with clarity.',
  },
  {
    id: 'design',
    number: '02',
    icon: '◈',
    label: 'Custom Design',
    headline: 'Concept Becomes Blueprint',
    body: 'We showcase the natural clarity of premium crystal with complimentary digital design proofs — typically within 24 hours.',
    detail:
      'See your logo and custom text on the proposed piece before production. Revise freely until the composition feels exact.',
  },
  {
    id: 'production',
    number: '03',
    icon: '◉',
    label: 'Precision Production',
    headline: 'The Secret Mixture',
    body: 'Cast in our factory using proprietary formulas engineered for flawless optical clarity.',
    detail:
      'Decades of furnace craftsmanship and secret crystal mixtures deliver brilliance that commodity glass cannot replicate.',
  },
  {
    id: 'engraving',
    number: '04',
    icon: '◆',
    label: 'Expert Engraving',
    headline: 'Every Mark a Statement',
    body: 'Crisp, flawless laser-etching of logos and text — personally inspected before leaving our facility.',
    detail:
      'No minimum order requirements. One masterpiece receives the same devotion as an entire tournament set.',
  },
  {
    id: 'inspection',
    number: '05',
    icon: '✦',
    label: 'Quality Inspection',
    headline: 'The Final Standard',
    body: "Hand-verified to meet Peter Johansson's exacting standards — every curve, polished edge, and engraved detail.",
    detail:
      'Absolute quality control over proprietary crystal because we own the factory floor.',
  },
  {
    id: 'presentation',
    number: '06',
    icon: '✧',
    label: 'Presentation',
    headline: 'Delivered to the World',
    body: 'Secured in a luxury gift box and shipped worldwide, with a primary focus on rapid delivery across the United States.',
    detail:
      'Expedited worldwide shipping available. Your champions receive something extraordinary — not a middleman markup.',
  },
];

export const navLinksData = [
  { href: '/', label: 'Home' },
  { href: '/collections', label: 'Collections' },
  { href: '/about', label: 'About' },
  { href: '/process', label: 'Process' },
  { href: '/contact', label: 'Contact' },
] as const;

export const awardCategories = [
  'Golf Tournament',
  'Corporate Recognition',
  'Sports Championship',
  'Executive Award',
  'Special Event',
  'Custom Sculpture',
  'Animal Motif',
  'Other',
] as const;
