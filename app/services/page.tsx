import type { Metadata } from "next";
import Link from "next/link";
import {
  Paintbrush,
  Sparkles,
  Trash2,
  Wrench,
  Wind,
  PackageCheck,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: "Home Prep Services | ReadyNest — Painting, Cleaning, Repairs | Bucks County, PA",
  description:
    "Full home prep services in Bucks County, PA: painting touch-ups, deep cleaning, junk removal, minor repairs, exterior cleaning & move-out prep. Get a free quote today.",
  alternates: { canonical: "https://readynestpa.com/services" },
  openGraph: {
    title: "Home Prep Services | ReadyNest — Bucks County, PA",
    description:
      "Painting, cleaning, junk removal, repairs & more. One team handles everything your home needs in Bucks County, PA.",
    url: "https://readynestpa.com/services",
  },
};

const services = [
  {
    icon: <Paintbrush size={36} strokeWidth={1.4} />,
    name: "Painting Touch-Ups",
    slug: "painting-touch-ups",
    description:
      "First impressions matter. Our painting team handles everything from scuff coverage to full accent wall refreshes, ensuring every room looks clean, bright, and move-in ready. We use color-matched precision so repairs are invisible and finishes are consistent throughout your home.",
    includes: [
      "Scuff, mark, and ding coverage on interior walls",
      "Accent wall refreshes and full-room repaints",
      "Trim and baseboard touch-ups",
      "Ceiling spot repairs and painting",
      "Color-matched precision work on any paint color",
    ],
  },
  {
    icon: <Sparkles size={36} strokeWidth={1.4} />,
    name: "Deep Cleaning",
    slug: "deep-cleaning",
    description:
      "A truly clean home sells faster and makes a lasting impression at every showing. Our deep cleaning service goes far beyond a standard clean — we tackle every surface, appliance, and corner so your home sparkles from top to bottom. Ideal for pre-listing, move-in, and move-out scenarios.",
    includes: [
      "Kitchen deep clean: appliances, cabinets, counters, and range hood",
      "Bathroom sanitization: tile, grout, fixtures, and vanities",
      "Floor cleaning: hardwood, tile, laminate, and carpet",
      "Interior window and sill cleaning",
      "Baseboard, vent, and light fixture dusting",
    ],
  },
  {
    icon: <Trash2 size={36} strokeWidth={1.4} />,
    name: "Junk Removal",
    slug: "junk-removal",
    description:
      "Clutter kills deals and complicates moves. ReadyNest handles the full haul-away so you don't have to rent a truck, sort donations, or make multiple dump runs. From single-item pickups to complete estate cleanouts in Bucks County, we take care of it all.",
    includes: [
      "Garage and basement full cleanouts",
      "Old furniture, appliances, and electronics removal",
      "Construction and renovation debris hauling",
      "Estate cleanout support and coordination",
      "Donation drop-off coordination for eligible items",
    ],
  },
  {
    icon: <Wrench size={36} strokeWidth={1.4} />,
    name: "Minor Repairs",
    slug: "minor-repairs",
    description:
      "Small defects create big red flags for buyers and inspectors. Our handyman team addresses the common issues that every home accumulates over time — patching, caulking, hardware, and more — so your home passes inspections and wows buyers at first glance.",
    includes: [
      "Drywall patching, skim coating, and finishing",
      "Door and cabinet hardware replacement",
      "Light fixture and outlet cover swaps",
      "Caulking around tubs, windows, and trim",
      "Weatherstripping, door sweeps, and door alignment",
    ],
  },
  {
    icon: <Wind size={36} strokeWidth={1.4} />,
    name: "Exterior Cleaning",
    slug: "exterior-cleaning",
    description:
      "Curb appeal is the first thing buyers see — and the first thing they photograph. Our exterior cleaning service transforms the outside of your property with professional-grade power washing and cleaning to restore siding, driveways, decks, and more throughout Bucks County.",
    includes: [
      "House siding and soffit power washing",
      "Driveway and walkway deep cleaning",
      "Deck and patio surface restoration",
      "Gutter exterior cleaning and brightening",
      "Fence washing and restoration",
    ],
  },
  {
    icon: <PackageCheck size={36} strokeWidth={1.4} />,
    name: "Move-Out Prep",
    slug: "move-out-prep",
    description:
      "Our most comprehensive service — everything your property needs before the next chapter begins. Whether you're a landlord turning over a rental, a homeowner vacating before a sale, or an executor handling an estate, we handle the full scope and deliver a walkthrough-ready result.",
    includes: [
      "Full property sweep: clean, patch, and paint",
      "Carpet cleaning coordination or removal assessment",
      "Wall patching from mounted TVs, artwork, and shelving",
      "Complete appliance cleaning inside and out",
      "Final walkthrough-ready handoff with quality check",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">What We Offer</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Our Services
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            One team handles it all — from painting to hauling, we get your home ready for the market or move-in. Proudly serving homeowners and realtors across Bucks County, PA.
          </p>
        </div>
      </section>

      {/* Services Detail Sections */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {services.map((service, i) => (
          <AnimatedSection key={service.slug} delay={0.05}>
            <article
              id={service.slug}
              className={`grid md:grid-cols-5 gap-10 items-start ${i % 2 !== 0 ? "md:direction-rtl" : ""}`}
            >
              {/* Icon + Title Column */}
              <div className="md:col-span-2">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-beige text-gold mb-5">
                  {service.icon}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-4 gold-underline pb-3">
                  {service.name}
                </h2>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-5 py-2.5 rounded-lg text-sm hover:bg-[#a07d46] transition-colors"
                >
                  Get a Quote <ArrowRight size={15} />
                </Link>
              </div>

              {/* Description + Bullets Column */}
              <div className="md:col-span-3">
                <p className="text-gray-600 text-base leading-relaxed mb-6">{service.description}</p>
                <div className="bg-beige rounded-2xl p-6">
                  <p className="text-charcoal font-semibold text-sm mb-4 uppercase tracking-wide">What&apos;s Included</p>
                  <ul className="space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-gray-600 text-sm">
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                            <path d="M1 4L3.5 6.5L9 1" stroke="#B8975A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>

            {/* Divider */}
            {i < services.length - 1 && (
              <div className="border-t border-soft-gray mt-16" aria-hidden="true" />
            )}
          </AnimatedSection>
        ))}
      </div>

      {/* CTA Banner */}
      <section className="bg-charcoal py-20" aria-labelledby="services-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta" className="font-serif text-4xl text-white mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Schedule a free walk-through and we&apos;ll assess exactly what your home needs — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Book a Free Walk-Through <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+12677179119"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
            >
              Call 267-717-9119
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
