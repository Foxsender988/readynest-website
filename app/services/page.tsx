import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  DoorOpen,
  ArrowUpDown,
  Lightbulb,
  ArrowRight,
  Phone,
  Home,
  Calendar,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import type { ServiceOption } from "@/lib/contact";

export const metadata: Metadata = {
  title: { absolute: "Home Safety Services | ReadyNest — Aging-in-Place Modifications, Bucks County, PA" },
  description:
    "Bathroom, entry, stair, and whole-home safety packages, walk-in shower conversions, and individual installs from ReadyNest in Bucks County, PA. Free in-home assessment. Call 267-717-9119.",
  alternates: { canonical: "https://readynestpa.com/services" },
  openGraph: {
    title: "Home Safety Services | ReadyNest — Bucks County, PA",
    description:
      "Safety packages from $995, Whole-Home aging-in-place from $3,950, walk-in shower conversions, and individual installs. Assessed and signed off by Slav; installed by Slav or his trained team in Bucks County, PA.",
    url: "https://readynestpa.com/services",
  },
};

// ─── Data (sourced from ReadyNest_Pricing_Sourcing_Reference.pdf) ─────────────

type Package = {
  id?: string;
  name: string;
  service: ServiceOption;
  price: string;
  badge: string | null;
  badgeStyle: string;
  includesLabel: string;
  note: string | null;
  includes: string[];
  addOns?: { item: string; price: string }[];
  icon: React.ReactNode;
};

const packages: Package[] = [
  {
    id: "bathroom-safety",
    name: "Bathroom Safety Package",
    service: "Bathroom Safety",
    price: "$995",
    badge: "Most Popular",
    badgeStyle: "bg-gold text-white",
    includesLabel: "WHAT'S INCLUDED",
    note: "Most-purchased package. Most-referred-to by physical therapists, OTs, and hospital discharge planners.",
    includes: [
      "Up to 3 ADA-rated stainless grab bars (Moen Home Care or Delta), placed where your assessment shows the risk — typically shower back wall, shower entry, and toilet",
      "Non-slip mat or applied tread in tub/shower",
      "Plug-in motion-sensor nightlight",
      "Written home safety walkthrough report (prioritized list for the rest of the home)",
    ],
    addOns: [
      { item: "Additional grab bar (4th+)", price: "$150 each" },
      { item: "Fold-down shower bench", price: "$395 installed" },
      { item: "Comfort-height toilet install (customer supplied)", price: "$275" },
      { item: "Handheld shower with slide bar", price: "$225" },
      { item: "Designer finish upgrade (e.g., Brizo, Kohler)", price: "Quoted" },
    ],
    icon: <ShieldCheck size={26} strokeWidth={1.4} />,
  },
  {
    name: "Bathroom Safety Premium",
    service: "Bathroom Safety",
    price: "$2,695",
    badge: "Premium",
    badgeStyle: "bg-accent-dark text-white",
    includesLabel: "EVERYTHING IN STANDARD, PLUS",
    note: "Anti-scald / pressure-balance valve available — quoted after assessment.",
    includes: [
      "ADA-rated comfort-height toilet supplied AND installed (KOHLER Cimarron or equivalent)",
      "Fold-down shower bench",
      "Hardwired motion-sensor vanity light",
      "Handheld shower with slide bar",
    ],
    icon: <ShieldCheck size={26} strokeWidth={1.4} />,
  },
  {
    id: "entry-exit",
    name: "Entry & Exit Safety Package",
    service: "Stairs, Entry & Lighting",
    price: "$1,295",
    badge: null,
    badgeStyle: "",
    includesLabel: "WHAT'S INCLUDED",
    note: null,
    includes: [
      "Threshold ramp at primary entrance (rubber or aluminum, up to 4″ rise)",
      "Lever handles on 2 exterior doors (brushed nickel or matte black)",
      "Motion-sensor exterior light at entryway",
      "Improved interior entry lighting (replace existing fixture if needed)",
      "Optional: door peephole at seated height",
    ],
    icon: <DoorOpen size={26} strokeWidth={1.4} />,
  },
  {
    id: "stairs-hallways",
    name: "Stair & Hallway Safety Package",
    service: "Stairs, Entry & Lighting",
    price: "$1,195",
    badge: null,
    badgeStyle: "",
    includesLabel: "WHAT'S INCLUDED",
    note: "Second-side rail: +$450.",
    includes: [
      "Sturdy handrail installed on one flight (one side)",
      "Non-slip stair treads on one flight",
      "Motion-sensor lighting at top + bottom of stairs",
      "3 hallway plug-in nightlights",
      "Glow-in-dark step edge markers",
    ],
    icon: <ArrowUpDown size={26} strokeWidth={1.4} />,
  },
  {
    name: "Whole-Home Aging-in-Place Package",
    service: "Free Home Safety Assessment",
    price: "From $3,950",
    badge: "Best Value",
    badgeStyle: "bg-gold text-white",
    includesLabel: "WHAT'S INCLUDED",
    note: "The package adult children buying for parents land on most often. Less than one month of assisted living.",
    includes: [
      "90-minute whole-home safety assessment with written report",
      "Bathroom Safety Package (Standard tier)",
      "Entry & Exit Safety Package",
      "Stair & Hallway Safety Package",
      "Smart doorbell + phone app setup (Ring tier supplied)",
      "Up to 4 lever door handles replaced",
      "30-day follow-up check-in visit",
    ],
    icon: <Home size={26} strokeWidth={1.4} />,
  },
  {
    name: "Whole-Home Premium",
    service: "Free Home Safety Assessment",
    price: "From $6,950",
    badge: "Premium",
    badgeStyle: "bg-accent-dark text-white",
    includesLabel: "QUOTED AFTER ASSESSMENT — TYPICALLY INCLUDES",
    note: "Quoted after in-home assessment.",
    includes: [
      "Everything in standard Whole-Home package",
      "Premium Bathroom upgrade (toilet supplied, anti-scald, etc.)",
      "Smart home safety bundle: 2 cameras, smart lock, 2 leak sensors, smoke/CO smart alerts",
      "Quarterly safety check visits for first year — INCLUDED",
      "Custom modifications based on assessment findings",
    ],
    icon: <Home size={26} strokeWidth={1.4} />,
  },
];

// Subscriptions (Safety Watch, Home Care Plan) are paused — data and markup are kept
// below but not rendered while this is false.
const SHOW_SUBSCRIPTIONS = false;

const safetyWatchTiers = [
  {
    name: "Quarterly Check",
    price: "$59/mo",
    description:
      "One 45-min visit per quarter. Smoke/CO test, GFCI test, grab bar tightness, smoke alarm batteries, water heater check, walkthrough of any new hazards. Written email report to family contact.",
  },
  {
    name: "Monthly Check",
    price: "$129/mo",
    description:
      "Monthly 45-min visit + 10% off any one-time service while subscribed.",
  },
  {
    // ⚠️ MARGIN REVIEW: Premium Care's effective hourly rate runs below ReadyNest's blended
    // target once rolled-forward labor hours + priority callback are counted. Intentional as a
    // retention/relationship product? Confirm with Slav before raising price.
    name: "Premium Care",
    price: "$249/mo",
    description:
      "Bi-weekly visit + 1 hour included handyman labor each month (rolls forward 1 month if unused) + priority same-day callback for emergencies.",
  },
];

const homeCareTiers = [
  {
    name: "Basic",
    price: "$45/mo",
    description:
      "Annual safety inspection + 15% discount on all services + same-week scheduling priority.",
  },
  {
    // ⚠️ MARGIN REVIEW: Home Care Plan Plus effective hourly rate is below blended target
    // once rolled-forward labor hours are counted. May be intentional as a relationship product.
    // Confirm with Slav before raising price.
    name: "Plus",
    price: "$95/mo",
    description:
      "Annual safety inspection + 1 hour of handyman labor included monthly (rolls 1 month) + 20% discount on packages.",
  },
];

// ⚠️ SHOWER CONVERSION — PRICES CONFIRMED AS STARTING POINT, NOT FINAL
// Slav has approved $7,500 / $12,500 as launch starting prices. Revisit both numbers — and
// the "Most Chosen" badge placement below — after the first few real bookings show actual mix.
const SHOW_SHOWER_CONVERSION = true;

const showerConversionTiers = [
  {
    name: "Accessible Conversion",
    price: "Starting at $7,500",
    badge: null,
    note: "Most straightforward layouts land in this range. Homes needing plumbing relocation, custom tile, or significant demo typically run higher — confirmed at your free in-home assessment.",
    includes: [
      "Tub removal & haul-away",
      "Low-threshold or curbless acrylic shower pan and wall surround",
      "ADA grab bars + fold-down shower bench",
      "New shower valve/fixture",
      "Anti-scald valve (where plumbing allows)",
    ],
    notIncludedLabel: "Not included:",
    notIncluded:
      "Custom tile, permits (if required by township), plumbing line relocation beyond minor adjustment — quoted separately if needed.",
  },
  {
    // ⚠️ "Most Chosen" badge is a placeholder pending real booking data — Slav's best estimate
    // that tile/curbless jobs are more common, not yet confirmed by actual bookings. Revisit
    // after the first few jobs and move/remove the badge if the mix says otherwise.
    name: "Custom Tile / Curbless Conversion",
    price: "Starting at $12,500",
    badge: "Most Chosen",
    note: "Covers most conversions involving tile, a curbless entry, or a full custom layout. Final price depends on shower size, tile selection, and plumbing scope — confirmed at your free in-home assessment.",
    includes: [
      "Everything in Accessible Conversion, plus:",
      "Custom tile walls and floor",
      "Linear drain",
      "Waterproofing membrane",
    ],
    notIncludedLabel: "Optional:",
    notIncluded: "Frameless glass quoted as an option.",
  },
];

// Individual services — à la carte pricing
const individualServices = [
  { service: "Single Grab Bar Install", price: "$225" },
  { service: "Two Grab Bars (same visit)", price: "$375" },
  { service: "Three Grab Bars (same visit)", price: "$525" },
  { service: "Handrail, one flight, one side", price: "$595 (second side same visit $450)" },
  { service: "Non-slip stair treads, one flight", price: "$195" },
  { service: "Threshold ramp (up to 4″)", price: "$345" },
  { service: "Interior lever door handle swap", price: "$95 each" },
  { service: "Exterior lever/lockset", price: "$165 each" },
  { service: "Motion-sensor ceiling light (battery)", price: "$95 each installed" },
  { service: "Motion-sensor wall switch (Lutron Maestro)", price: "$165 single-pole / $265 3-way" },
  { service: "Exterior motion light swap", price: "$225" },
  { service: "Smart Doorbell Install + App Setup (customer supplied)", price: "$165" },
  { service: "Smart Doorbell supplied + installed", price: "$295" },
  { service: "Smart lock supplied + installed", price: "$395" },
  { service: "New bathroom GFCI outlet (fished circuit)", price: "from $595" },
  {
    service: "Home Safety Assessment with written report (standalone, credited toward any package)",
    price: "$149",
  },
];

const smartHomeItems = [
  {
    title: "Motion lighting",
    body: "Battery motion lights for closets, hallways, and stairs, plus exterior motion light swaps at the entry — lights come on before your parent reaches for a switch.",
  },
  {
    title: "Lutron motion switches",
    body: "Lutron Maestro motion-sensor wall switches replace the existing switch, so bathroom and hallway lights turn on automatically at night.",
  },
  {
    title: "Smart doorbell",
    body: "Video doorbell installed and set up on your parent's phone (and yours), so they can see who's at the door without rushing to answer it.",
  },
  {
    title: "Leak & smoke alerts",
    body: "Water leak sensors near the water heater, washer, and toilets, and smart smoke/CO alerts that notify family by phone. Quoted at your assessment.",
  },
];

const everythingIncluded = [
  "All labor and time on-site",
  "Travel to your home (within service area)",
  "Standard mounting hardware (screws, anchors, brackets)",
  "Cleanup and haul-away of packaging",
  "1-year workmanship guarantee on installation",
];

const notIncluded = [
  "Permits (rare for these services, but customer’s responsibility if needed)",
  "Drywall repair beyond minor patching at the install point",
  "Plumbing rough-in changes, electrical panel work, or structural carpentry",
  "Removal of old fixtures requiring demolition (ask for a quote)",
  "Travel surcharge for jobs outside core service area (call to confirm)",
];

// ─── Reusable checkmark ───────────────────────────────────────────────────────

function Checkmark() {
  return (
    <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
      <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
        <path
          d="M1 4L3.5 6.5L9 1"
          stroke="#B8975A"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

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
              name: "Bathroom Safety Package",
              description:
                "Up to 3 ADA-rated grab bars, non-slip treatment, motion-sensor nightlight, and a written home safety walkthrough report. $995.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "995", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Entry & Exit Safety Package",
              description:
                "Threshold ramp, lever door handles, motion-sensor exterior light, and entry lighting. $1,295.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "1295", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Stair & Hallway Safety Package",
              description:
                "Handrail installation, non-slip stair treads, motion-sensor lighting, and nightlights. $1,195.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "1195", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Whole-Home Aging-in-Place Package",
              description:
                "Comprehensive whole-home assessment plus Bathroom, Entry, and Stair packages with smart doorbell and door lever upgrades. From $3,950.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "3950", priceCurrency: "USD" },
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
            Bundled safety packages are the most efficient way to protect a home
            — everything installed in one visit, labor and materials included.
            Every job assessed and signed off by Slav.
          </p>
        </div>
      </section>

      {/* ── 2. Safety Packages ── */}
      <section
        className="bg-white py-20 md:py-28 border-b border-soft-gray"
        aria-labelledby="packages-heading"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="mb-12">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
                Bundled Safety Packages
              </p>
              <h2
                id="packages-heading"
                className="font-serif text-4xl md:text-5xl text-charcoal mb-4"
              >
                Bundled Installations
              </h2>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                All labor, travel, hardware, and cleanup included. Most packages
                completed in a single visit.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {packages.map((pkg, i) => (
              <AnimatedSection key={pkg.name} delay={i * 0.07}>
                <div
                  id={pkg.id}
                  className="bg-white rounded-2xl border border-soft-gray p-7 flex flex-col h-full relative shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
                >
                  {/* Badge */}
                  {pkg.badge && (
                    <span
                      className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${pkg.badgeStyle}`}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4 pr-20">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-beige text-gold flex items-center justify-center">
                      {pkg.icon}
                    </div>
                    <h3 className="font-serif text-xl text-charcoal leading-snug">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-bold text-gold mb-5">{pkg.price}</p>

                  {/* Includes label */}
                  <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                    {pkg.includesLabel}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed"
                      >
                        <Checkmark />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Popular add-ons */}
                  {pkg.addOns && (
                    <div className="mb-6 rounded-xl bg-beige px-4 py-4">
                      <p className="text-charcoal text-xs font-semibold tracking-wider uppercase mb-2.5">
                        Popular add-ons
                      </p>
                      <ul className="space-y-1.5">
                        {pkg.addOns.map((addOn) => (
                          <li
                            key={addOn.item}
                            className="flex items-start justify-between gap-3 text-gray-600 text-xs leading-relaxed"
                          >
                            <span>{addOn.item}</span>
                            <span className="text-gold font-semibold whitespace-nowrap">{addOn.price}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Italic note */}
                  {pkg.note && (
                    <p className="text-gray-400 text-xs italic mb-5 leading-relaxed">
                      {pkg.note}
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href={`/contact?service=${encodeURIComponent(pkg.service)}`}
                    className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#a07d46] transition-colors text-sm w-full mt-auto"
                  >
                    Request This Package
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. Subscriptions (feature-flagged — SHOW_SUBSCRIPTIONS) ── */}
      {SHOW_SUBSCRIPTIONS && (
      <section
        id="subscriptions"
        className="bg-beige py-20 md:py-24 border-b border-soft-gray"
        aria-labelledby="subscriptions-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Calendar size={20} className="text-gold shrink-0" />
              <p className="text-gold text-sm font-semibold tracking-wider uppercase">
                Subscriptions &mdash; Recurring Care
              </p>
            </div>
            <h2
              id="subscriptions-heading"
              className="font-serif text-4xl text-charcoal mb-3"
            >
              Ongoing Peace of Mind
            </h2>
            <p className="text-gray-500 text-base mb-12 max-w-2xl leading-relaxed">
              Month-to-month. Cancel anytime. Written report goes to the designated
              family contact after every visit.
            </p>
          </AnimatedSection>

          {/* Safety Watch */}
          <AnimatedSection delay={0.08}>
            <div className="mb-10">
              <h3 className="font-serif text-2xl text-charcoal mb-1">
                ReadyNest Safety Watch
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-2xl">
                Quarterly or monthly home safety check-ins. The written report goes
                to the designated family contact &mdash; usually an adult child living
                far away.
              </p>
              <div className="overflow-x-auto rounded-2xl border border-soft-gray">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-charcoal text-white text-left">
                      <th className="px-5 py-3.5 font-semibold">Tier</th>
                      <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                        Price
                      </th>
                      <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">
                        What&apos;s Included
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {safetyWatchTiers.map((tier, i) => (
                      <tr
                        key={tier.name}
                        className={`border-t border-soft-gray ${i % 2 === 0 ? "bg-white" : "bg-beige/50"}`}
                      >
                        <td className="px-5 py-4 text-charcoal font-semibold whitespace-nowrap">
                          {tier.name}
                        </td>
                        <td className="px-5 py-4 text-gold font-bold text-right whitespace-nowrap">
                          {tier.price}
                        </td>
                        <td className="px-5 py-4 text-gray-500 hidden sm:table-cell leading-relaxed">
                          {tier.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-right">
                <Link
                  href={`/contact?service=${encodeURIComponent("Safety Watch Subscription")}`}
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
                >
                  Ask about Safety Watch <ArrowRight size={13} />
                </Link>
              </p>
            </div>
          </AnimatedSection>

          {/* Home Care Plan */}
          <AnimatedSection delay={0.12}>
            <div>
              <h3 className="font-serif text-2xl text-charcoal mb-1">
                ReadyNest Home Care Plan
              </h3>
              <p className="text-gray-500 text-sm mb-6 leading-relaxed max-w-2xl">
                For seniors who can mostly handle their home but want a
                &ldquo;house guy on retainer.&rdquo;
              </p>
              <div className="overflow-x-auto rounded-2xl border border-soft-gray">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-charcoal text-white text-left">
                      <th className="px-5 py-3.5 font-semibold">Tier</th>
                      <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                        Price
                      </th>
                      <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">
                        What&apos;s Included
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {homeCareTiers.map((tier, i) => (
                      <tr
                        key={tier.name}
                        className={`border-t border-soft-gray ${i % 2 === 0 ? "bg-white" : "bg-beige/50"}`}
                      >
                        <td className="px-5 py-4 text-charcoal font-semibold whitespace-nowrap">
                          {tier.name}
                        </td>
                        <td className="px-5 py-4 text-gold font-bold text-right whitespace-nowrap">
                          {tier.price}
                        </td>
                        <td className="px-5 py-4 text-gray-500 hidden sm:table-cell leading-relaxed">
                          {tier.description}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-right">
                <Link
                  href={`/contact?service=${encodeURIComponent("Home Care Plan Subscription")}`}
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
                >
                  Ask about the Home Care Plan <ArrowRight size={13} />
                </Link>
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
      )}

      {/* ── 5a. Walk-In Shower Conversions (feature-flagged — SHOW_SHOWER_CONVERSION) ── */}
      {SHOW_SHOWER_CONVERSION && (
        <section
          className="bg-soft-gray py-20 md:py-28 border-b border-soft-gray"
          aria-labelledby="shower-conversion-heading"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-2">
                Remodeling Services
              </p>
              <h2
                id="shower-conversion-heading"
                className="font-serif text-4xl md:text-5xl text-charcoal mb-4"
              >
                Walk-In Shower Conversions
              </h2>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed mb-10">
                Full tub-to-shower conversions, project-managed by Slav and completed by our
                vetted local trade partners — from your first assessment to the final walkthrough.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {showerConversionTiers.map((tier, i) => (
                <AnimatedSection key={tier.name} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-soft-gray p-7 flex flex-col h-full relative shadow-sm hover:shadow-md transition-shadow">
                    {tier.badge && (
                      <span className="absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full bg-gold text-white">
                        {tier.badge}
                      </span>
                    )}
                    <h3 className="font-serif text-xl text-charcoal mb-3 pr-24">{tier.name}</h3>
                    <p className="text-3xl font-bold text-gold mb-4">{tier.price}</p>
                    <p className="text-gray-500 text-sm italic leading-relaxed mb-5">{tier.note}</p>
                    <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                      INCLUDES
                    </p>
                    <ul className="space-y-2.5 mb-5 flex-1">
                      {tier.includes.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                          <Checkmark />
                          {item}
                        </li>
                      ))}
                    </ul>
                    {tier.notIncluded && (
                      <p className="text-gray-400 text-xs leading-relaxed border-t border-soft-gray pt-4">
                        <span className="font-semibold text-gray-500">{tier.notIncludedLabel}</span>{" "}
                        {tier.notIncluded}
                      </p>
                    )}
                    <Link
                      href={`/contact?service=${encodeURIComponent("Walk-In Shower Conversion" satisfies ServiceOption)}`}
                      className="mt-6 w-full flex items-center justify-center gap-2 bg-gold text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#a07d46] transition-colors text-sm"
                    >
                      Request Assessment <ArrowRight size={15} />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.18}>
              <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto leading-relaxed">
                Every project includes a free in-home assessment, a written scope-based estimate
                before work begins, and final walkthrough sign-off by Slav — whether the
                installation is completed by Slav or one of our vetted trade partners.
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── 5b. Smart Home Safety ── */}
      <section
        id="smart-home"
        className="bg-white py-20 md:py-24 border-b border-soft-gray scroll-mt-20"
        aria-labelledby="smart-home-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Lightbulb size={20} className="text-gold shrink-0" />
              <p className="text-gold text-sm font-semibold tracking-wider uppercase">
                Smart Home Safety
              </p>
            </div>
            <h2
              id="smart-home-heading"
              className="font-serif text-4xl text-charcoal mb-3"
            >
              Lights That Turn On. Alerts That Reach You.
            </h2>
            <p className="text-gray-500 text-base mb-10 max-w-2xl leading-relaxed">
              Simple, reliable technology that prevents nighttime falls and gives
              family a heads-up when something&apos;s wrong. Priced individually
              &mdash; see the{" "}
              <a href="#individual-services" className="text-gold font-semibold hover:underline">
                individual services table
              </a>{" "}
              below &mdash; or included in the Whole-Home packages.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {smartHomeItems.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="bg-beige rounded-2xl p-7 border border-soft-gray h-full">
                  <h3 className="font-serif text-xl text-charcoal mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5c. Need something specific? (Individual services) ── */}
      <section
        id="individual-services"
        className="bg-beige py-16 md:py-20 border-b border-soft-gray scroll-mt-20"
        aria-labelledby="quick-wins-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="quick-wins-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-4 text-center"
            >
              Need something specific?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              We handle individual jobs too &mdash; grab bars, lever handles, threshold ramps,
              motion lights, stair treads, smart doorbells, and more.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <div className="overflow-x-auto rounded-2xl border border-soft-gray mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white text-left">
                    <th className="px-5 py-3.5 font-semibold">Service</th>
                    <th className="px-5 py-3.5 font-semibold text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {individualServices.map((item, i) => (
                    <tr
                      key={item.service}
                      className={`border-t border-soft-gray ${i % 2 === 0 ? "bg-white" : "bg-beige/50"}`}
                    >
                      <td className="px-5 py-4 text-charcoal">{item.service}</td>
                      <td className="px-5 py-4 text-gold font-semibold text-right">{item.price}</td>
                    </tr>
                  ))}
                  <tr className="border-t border-soft-gray bg-white">
                    <td className="px-5 py-4 text-charcoal">Other items</td>
                    <td className="px-5 py-4 text-gray-400 text-right text-xs">Call for quote</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-gray-500 text-sm text-center mb-8">
              Call{" "}
              <a
                href="tel:+12677179119"
                className="text-gold font-semibold hover:underline"
                aria-label="Call Slav at 267-717-9119"
              >
                267-717-9119
              </a>{" "}
              for a quick quote &mdash; usually within the same business day.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="tel:+12677179119"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
                aria-label="Call ReadyNest at 267-717-9119"
              >
                <Phone size={18} />
                Call for a Quote
              </a>
              <Link
                href={`/contact?service=${encodeURIComponent("Something else / not sure yet" satisfies ServiceOption)}`}
                className="inline-flex items-center gap-2 border-2 border-charcoal/25 text-charcoal font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
              >
                Book Free Assessment
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. What's included in every price ── */}
      <section
        className="bg-white py-20 md:py-24 border-b border-soft-gray"
        aria-labelledby="pricing-policy-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="pricing-policy-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-3 text-center"
            >
              What&apos;s Included in Every Price
            </h2>
            <p className="text-gray-500 text-center mb-10 max-w-2xl mx-auto leading-relaxed">
              No hidden fees. No hourly surprises. Standard fixtures are included
              in all listed prices. When you want a specific premium brand, finish,
              or upgrade, the price is adjusted at the time of quote.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Included */}
            <AnimatedSection delay={0.05}>
              <div className="bg-beige rounded-2xl p-7 border border-soft-gray h-full">
                <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
                  Always Included
                </p>
                <ul className="space-y-3">
                  {everythingIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <CheckCircle size={17} className="text-gold shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-gray-400 leading-relaxed">
                  ReadyNest only installs ADA-rated, US-brand-name safety hardware
                  (Moen, Bobrick, Delta, KOHLER) and uses commercial-grade anchors.
                </p>
              </div>
            </AnimatedSection>

            {/* Not Included */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-7 border border-soft-gray h-full">
                <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-4">
                  Not Included
                </p>
                <ul className="space-y-3">
                  {notIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                      <span className="shrink-0 mt-0.5 text-gray-300 font-bold text-base leading-none">&times;</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-gray-400 leading-relaxed">
                  Premium brands and finishes (e.g., designer grab bars) are quoted at
                  the time of estimate.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 7. Bottom CTA ── */}
      <section className="bg-accent-dark py-20" aria-labelledby="services-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="services-cta"
              className="font-serif text-4xl md:text-5xl text-white mb-4"
            >
              Not Sure What You Need?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Every home is different. Book a free in-home assessment and Slav will
              walk through every room, identify the risks, and recommend exactly what
              makes sense &mdash; no pressure, no obligation.
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
                aria-label="Call ReadyNest at 267-717-9119"
              >
                <Phone size={16} />
                Call 267-717-9119
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
