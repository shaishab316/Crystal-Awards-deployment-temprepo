/* eslint-disable @next/next/no-img-element */
import { getCollectionBySlug } from '@/lib/admin/store';
import Link from 'next/link';

export async function RushOrdersSection() {
  // Fetch collection dynamically on the server
  const collection = await getCollectionBySlug('rush-order');
  const collectionImages = collection?.images || [];

  // Map fetched images with layout styles, falling back if not enough images exist
  const layoutClasses = [
    'col-span-2 aspect-[16/9]', // Main large top image
    'col-span-1 aspect-[4/5]', // Grid item 1
    'col-span-1 aspect-[4/5]', // Grid item 2
  ];

  const images = layoutClasses.map((className, index) => ({
    src:
      collectionImages[index] ||
      'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&q=80&w=800',
    alt: collection?.name
      ? `${collection.name} image ${index + 1}`
      : `Award image ${index + 1}`,
    className,
  }));

  return (
    <section className="bg-[#121110] text-[#E5D7BD] px-6 py-30 md:px-12 lg:px-20 font-sans">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column - Content */}
        <div className="lg:col-span-6">
          {/* Top Tag */}
          <div className="inline-flex items-center gap-2 border border-[#C5A880]/40 px-3 py-1.5 mb-8 text-xs tracking-[0.2em] uppercase text-[#C5A880]">
            <span>⚡</span>
            <span>Rush Orders</span>
          </div>

          {/* Main Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl xl:text-5xl tracking-tight leading-[1.15] mb-6">
            <span className="text-[#F5EFE6]">Need Awards Quickly?</span>
            <br />
            <span className="text-[#C5A880]">Look Here Under Rush Orders</span>
          </h1>

          {/* Divider Line */}
          <div className="w-12 h-[1px] bg-[#C5A880]/50 mb-6"></div>

          {/* Subtitle Paragraph */}
          <p className="text-[#A39B8B] text-sm sm:text-base leading-relaxed mb-10">
            These designs are stocked for fast delivery when timing is critical.
            Browse Rush Orders below for what we can ship quickly — custom
            factory pieces from other collections may need more time.
          </p>

          {/* Content Box */}
          <div className="border border-[#C5A880]/30 bg-[#161412] p-6 sm:p-8 mb-8">
            <h3 className="text-xs tracking-[0.2em] uppercase text-[#C5A880] mb-4 font-semibold">
              Photographic Stencil Method
            </h3>

            <p className="text-[#A39B8B] text-xs sm:text-sm leading-relaxed mb-4">
              For smaller, rush, and more economical orders we apply your logo
              and text using our photographic stencil format — including{' '}
              <strong className="text-[#F5EFE6] font-medium">
                full-color logos
              </strong>
              . The stencil is designed for our black crystal bases and blends
              cleanly with the presentation.
            </p>

            <p className="text-[#A39B8B] text-xs sm:text-sm leading-relaxed mb-6">
              Factory engraving overseas is still available when the timeline
              allows. Local rush fulfillment uses the photographic method so you
              are not waiting on international production.
            </p>

            <a
              target="_blank"
              href="/docs/stencil-method.pdf"
              className="inline-block text-[11px] uppercase tracking-[0.2em] text-[#C5A880] border-b border-dotted border-[#C5A880]/60 pb-0.5 hover:border-solid hover:text-[#E5D7BD] transition-colors"
            >
              View Stencil Method Details →
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <Link
              href="/collections/rush-order"
              className="bg-[#C5A880] text-[#121110] font-medium text-xs tracking-[0.15em] uppercase px-7 py-3.5 hover:bg-[#D4BE9A] transition-colors"
            >
              Browse Rush Orders
            </Link>

            <Link
              href="/contact"
              className="text-xs uppercase tracking-[0.15em] text-[#C5A880] border-b border-dotted border-[#C5A880]/60 pb-0.5 hover:border-solid hover:text-[#E5D7BD] transition-colors"
            >
              Request Rush Quote →
            </Link>
          </div>
        </div>

        {/* Right Column - Dynamic Image Grid */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-4 sm:gap-5">
          {images.map((img, index) => (
            <div
              key={index}
              className={`border border-[#C5A880]/20 bg-[#161412] p-2.5 sm:p-3 overflow-hidden ${img.className}`}
            >
              <div className="w-full h-full overflow-hidden bg-black/40">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover object-center grayscale brightness-90 hover:grayscale-0 hover:scale-105 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
