import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  DoorOpen,
  ArrowUpDown,
  Trash2,
  ArrowRight,
  Phone,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Home Safety Services | ReadyNest PA — Aging-in-Place Modifications, Bucks County, PA" },
  description:
    "Grab bars, stair handrails, threshold ramps, door lever conversions, and weekly Trash Valet. ReadyNest PA provides aging-in-place home safety modifications for seniors in Bucks County, PA.",
  alternates: { canonical: "https://readynestpa.com/services" },
  openGraph: {
    title: "Home Safety Services | ReadyNest PA — Bucks County, PA",
    description:
      "Full range of aging-in-place safety modifications — grab bars, ramps, handrails, and Trash Valet weekly service. Proudly serving Bucks County, PA.",
    url: "https://readynestpa.com/services",
  },
};

// ─── Data ────────────────────────────────────────────────────────────────────

const alaCarteItems = [
  {
    service: "Grab bar, single location",
    price: "$125",
    notes: "Includes hardware, anchored to stud",
  },
  {
    service: "Grab bars, two locations",
    price: "$209",
    notes: "Most popular — shower + toilet area",
  },
  {
    service: "Toilet safety rail",
    price: "$139",
    notes: "Tool-free install, 300 lb rated",
  },
  {
    service: "Non-slip bath/shower treatment",
    price: "$89",
    notes: "Applied surface treatment, invisible",
  },
  {
    service: "Threshold ramp, portable (up to 2\")",
    price: "$149",
    notes: "No drilling, removable",
  },
  {
    service: "Threshold ramp, built-up (up to 4\")",
    price: "$259",
    notes: "Permanent, painted to match",
  },
  {
    service: "Stair handrail, one side (per flight)",
    price: "$225",
    notes: "Code-compliant, wood or metal",
  },
  {
    service: "Stair handrails, both sides (per flight)",
    price: "$379",
    notes: "Recommended for balance support",
  },
  {
    service: "Door lever conversion (per door)",
    price: "$89",
    notes: "Replaces round knobs",
  },
  {
    service: "Motion night lights, set of 3",
    price: "$79",
    notes: "Plug-in, auto-sensing",
  },
];

const packages = [
  {
    name: "Bathroom Essentials",
    slug: "Bathroom Essentials Package",
    price: "$349",
    tagline: "Our most-requested package.",
    badge: "Most Popular",
    badgeStyle: "bg-gold text-white",
    includes: [
      "2 grab bars (shower + toilet area)",
      "Toilet safety rail",
      "Non-slip bath treatment",
    ],
    icon: <ShieldCheck size={28} strokeWidth={1.4} />,
  },
  {
    name: "Entry & Stairs",
    slug: "Entry & Stairs Package",
    price: "$449",
    tagline: "For safe arrivals and departures.",
    badge: null,
    badgeStyle: "",
    includes: [
      "Double handrail (one flight)",
      "Threshold ramp",
      "Exterior motion light",
    ],
    icon: <DoorOpen size={28} strokeWidth={1.4} />,
  },
  {
    name: "Full Home Safety",
    slug: "Full Home Safety Package",
    price: "$949",
    tagline: "Comprehensive whole-home coverage.",
    badge: "Best Value",
    badgeStyle: "bg-accent-dark text-white",
    includes: [
      "Everything in Bathroom Essentials",
      "Everything in Entry & Stairs",
      "2 door lever conversions",
    ],
    icon: <ArrowUpDown size={28} strokeWidth={1.4} />,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* ── Schema.org JSON-LD ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Bathroom Safety",
              description:
                "Grab bars, toilet safety rails, and non-slip treatments to reduce fall risk in the bathroom.",
              provider: {
                "@type": "LocalBusiness",
                name: "ReadyNest PA",
              },
              areaServed: "Bucks County, PA",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Entry & Exit Safety",
              description:
                "Threshold ramps and motion lighting for safe entry and exit from the home.",
              provider: {
                "@type": "LocalBusiness",
                name: "ReadyNest PA",
              },
              areaServed: "Bucks County, PA",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Stairs & Hallways",
              description:
                "Code-compliant stair handrail installation on one or both sides to support balance and stability.",
              provider: {
                "@type": "LocalBusiness",
                name: "ReadyNest PA",
              },
              areaServed: "Bucks County, PA",
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Trash Valet",
              description:
                "Weekly trash and recycling bin service — bins moved to the curb and returned same day, year-round.",
              provider: {
                "@type": "LocalBusiness",
                name: "ReadyNest PA",
              },
              areaServed: "Bucks County, PA",
            },
          ]),
        }}
      />

      {/* ── 1. Hero ── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            What We Offer
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Home Safety Services
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            A full range of aging-in-place modifications — from bathroom grab
            bars and non-slip treatments to entry ramps, stair handrails, and
            weekly Trash Valet. Everything you need to stay safe and independent
            at home.
          </p>
        </div>
      </section>

      {/* ── 2. Quick Wins — A La Carte ── */}
      <AnimatedSection>
        <section className="py-16 md:py-20 border-b border-soft-gray">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Quick Wins · A La Carte
            </p>
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Individual Modifications
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl">
              Individual modifications, priced by item. Parts and labor
              included. No hidden fees.
            </p>

            {/* TODO: Verify all prices against Pricing & Sourcing Reference */}
            <div className="overflow-x-auto rounded-2xl border border-soft-gray">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white text-left">
                    <th className="px-5 py-3.5 font-semibold">Service</th>
                    <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                      Price
                    </th>
                    <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {alaCarteItems.map((item, i) => (
                    <tr
                      key={item.service}
                      className={`border-t border-soft-gray ${
                        i % 2 === 0 ? "bg-white" : "bg-beige"
                      }`}
                    >
                      <td className="px-5 py-3.5 text-charcoal font-medium">
                        {item.service}
                      </td>
                      <td className="px-5 py-3.5 text-gold font-semibold text-right whitespace-nowrap">
                        {item.price}
                      </td>
                      <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell">
                        {item.notes}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="mt-6 text-center">
              <Link
                href={`/contact?service=${encodeURIComponent("A La Carte")}`}
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#a07d46] transition-colors text-sm"
              >
                Book Free Assessment <ArrowRight size={15} />
              </Link>
            </p>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 3. Safety Packages ── */}
      <AnimatedSection delay={0.05}>
        <section className="py-16 md:py-20 bg-beige border-b border-soft-gray">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Safety Packages · Best Value
            </p>
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Bundled for More Savings
            </h2>
            <p className="text-gray-500 text-base mb-12 max-w-2xl">
              Our most popular combinations, priced below buying each item
              individually.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="bg-white rounded-2xl border border-soft-gray p-6 flex flex-col relative"
                >
                  {pkg.badge && (
                    <span
                      className={`absolute top-4 right-4 text-xs font-semibold px-2.5 py-1 rounded-full ${pkg.badgeStyle}`}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-beige text-gold mb-4">
                    {pkg.icon}
                  </div>

                  <h3 className="font-serif text-2xl text-charcoal mb-1">
                    {pkg.name}
                  </h3>
                  <p className="text-3xl font-bold text-gold mb-1">
                    {pkg.price}
                  </p>
                  <p className="text-gray-500 text-sm mb-5">{pkg.tagline}</p>

                  <ul className="space-y-2 mb-8 flex-1">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-gray-600 text-sm"
                      >
                        <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                          <svg
                            width="10"
                            height="8"
                            viewBox="0 0 10 8"
                            fill="none"
                            aria-hidden="true"
                          >
                            <path
                              d="M1 4L3.5 6.5L9 1"
                              stroke="#B8975A"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={`/contact?service=${encodeURIComponent(pkg.slug)}`}
                    className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#a07d46] transition-colors text-sm w-full"
                  >
                    Request This Package
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 4. Subscriptions Table ── */}
      <AnimatedSection delay={0.05}>
        <section
          id="subscriptions"
          className="py-16 md:py-20 border-b border-soft-gray"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
              Ongoing Services · Monthly &amp; Annual
            </p>
            <h2 className="font-serif text-4xl text-charcoal mb-4">
              Ongoing Peace of Mind
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl">
              Ongoing peace of mind, billed monthly or annually.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-soft-gray">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white text-left">
                    <th className="px-5 py-3.5 font-semibold">Service</th>
                    <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                      Monthly
                    </th>
                    <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                      Annual
                    </th>
                    <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">
                      Notes
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-t border-soft-gray">
                    <td className="px-5 py-3.5 text-charcoal font-medium">
                      Trash Valet
                    </td>
                    <td className="px-5 py-3.5 text-gold font-semibold text-right whitespace-nowrap">
                      $49/mo
                    </td>
                    <td className="px-5 py-3.5 text-gold font-semibold text-right whitespace-nowrap">
                      $529/yr
                    </td>
                    <td className="px-5 py-3.5 text-gray-500 hidden sm:table-cell">
                      Save $59 vs monthly
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 5. Trash Valet Detail ── */}
      <AnimatedSection delay={0.05}>
        <section
          id="trash-valet"
          className="py-16 md:py-20 bg-beige border-b border-soft-gray"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Text column */}
              <div>
                <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                  Trash Valet · Weekly Service
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-charcoal mb-5">
                  We Handle the Bins. Every Week.
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-7">
                  For seniors who shouldn&apos;t be hauling heavy bins down icy
                  driveways or navigating uneven paths, ReadyNest&apos;s Trash
                  Valet service handles it all — trash and recycling to the curb
                  and back, every week, year-round.
                </p>
                <Link
                  href="/contact?service=Trash+Valet"
                  className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#a07d46] transition-colors"
                >
                  Start Trash Valet <ArrowRight size={16} />
                </Link>
              </div>

              {/* Bullets column */}
              <div className="bg-white rounded-2xl border border-soft-gray p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-beige text-gold flex items-center justify-center shrink-0">
                    <Trash2 size={22} strokeWidth={1.5} />
                  </div>
                  <p className="font-semibold text-charcoal">
                    What&apos;s Included
                  </p>
                </div>
                <ul className="space-y-3">
                  {[
                    "Weekly trash bins to curb before pickup",
                    "Bins returned same day",
                    "Recycling included",
                    "No contracts, cancel anytime",
                    "Works with any municipal pickup schedule",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-gray-600 text-sm"
                    >
                      <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                        <svg
                          width="10"
                          height="8"
                          viewBox="0 0 10 8"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M1 4L3.5 6.5L9 1"
                            stroke="#B8975A"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* ── 7. Bottom CTA ── */}
      <section className="bg-accent-dark py-20" aria-labelledby="services-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            id="services-cta"
            className="font-serif text-4xl md:text-5xl text-white mb-4"
          >
            Not Sure What You Need?
          </h2>
          <p className="text-gray-400 text-lg mb-10">
            Every home is different. Book a free in-home safety assessment and
            Slav will walk through your space, identify the risks, and recommend
            exactly what makes sense — no pressure, no obligation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Book Free Assessment <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+12677179119"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
            >
              <Phone size={16} />
              Call 267-717-9119
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
