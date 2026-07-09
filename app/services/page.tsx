import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  DoorOpen,
  ArrowUpDown,
  Trash2,
  ArrowRight,
  Phone,
  Home,
  Calendar,
  Tag,
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Home Safety Services | ReadyNest — Aging-in-Place Modifications, Bucks County, PA" },
  description:
    "Safety packages, subscriptions, and Trash Valet from ReadyNest in Bucks County, PA. Free in-home assessment included with every inquiry. Call 267-717-9119.",
  alternates: { canonical: "https://readynestpa.com/services" },
  openGraph: {
    title: "Home Safety Services | ReadyNest — Bucks County, PA",
    description:
      "Bathroom safety packages from $675, Whole-Home aging-in-place from $2,950, Safety Watch subscriptions, and weekly Trash Valet. Personally installed by Slav in Bucks County, PA.",
    url: "https://readynestpa.com/services",
  },
};

// ─── Data (sourced from ReadyNest_Pricing_Sourcing_Reference.pdf) ─────────────

const packages = [
  {
    name: "Bathroom Safety Package",
    slug: "Bathroom Safety Package — $895",
    price: "$895",
    badge: "Most Popular",
    badgeStyle: "bg-gold text-white",
    includesLabel: "WHAT'S INCLUDED",
    note: "Most-purchased package. Most-referred-to by physical therapists, OTs, and hospital discharge planners.",
    includes: [
      "2 ADA-rated stainless grab bars (Moen Home Care or Delta) — shower + toilet area",
      "Non-slip mat or applied tread in tub/shower",
      "Folding shower bench OR transfer seat (your choice)",
      "Comfort-height toilet install (customer supplies)",
      "Plug-in motion-sensor nightlight",
      "30-minute walkthrough of remaining bathroom hazards with written list",
    ],
    icon: <ShieldCheck size={26} strokeWidth={1.4} />,
  },
  {
    name: "Bathroom Safety Premium",
    slug: "Bathroom Safety Premium — $1,650",
    price: "$1,650",
    badge: "Premium",
    badgeStyle: "bg-accent-dark text-white",
    includesLabel: "EVERYTHING IN STANDARD, PLUS",
    note: null,
    includes: [
      "All 6 items from Bathroom Safety Package above, plus:",
      "ADA-rated comfort-height toilet supplied AND installed (KOHLER Cimarron or equivalent)",
      "3rd grab bar (typically near sink/vanity)",
      "Curbless or low-threshold mat upgrade",
      "Hardwired motion-sensor vanity light",
      "Anti-scald valve install (if compatible plumbing)",
    ],
    icon: <ShieldCheck size={26} strokeWidth={1.4} />,
  },
  {
    name: "Entry & Exit Safety Package",
    slug: "Entry & Exit Safety Package — $675",
    price: "$675",
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
    name: "Stair & Hallway Safety Package",
    slug: "Stair & Hallway Safety Package — $795",
    price: "$795",
    badge: null,
    badgeStyle: "",
    includesLabel: "WHAT'S INCLUDED",
    note: null,
    includes: [
      "Sturdy handrail install on one flight (both sides if no existing rail)",
      "Non-slip stair treads on one flight",
      "Motion-sensor lighting at top + bottom of stairs",
      "3 hallway plug-in nightlights",
      "Glow-in-dark step edge markers",
    ],
    icon: <ArrowUpDown size={26} strokeWidth={1.4} />,
  },
  {
    name: "Whole-Home Aging-in-Place Package",
    slug: "Whole-Home Aging-in-Place Package",
    price: "From $2,950",
    badge: "Best Value",
    badgeStyle: "bg-gold text-white",
    includesLabel: "WHAT'S INCLUDED",
    note: "The package adult children buying for parents land on most often. Less than one month of assisted living.",
    includes: [
      "90-minute whole-home safety assessment with written report",
      "Bathroom Safety Package (Standard tier)",
      "Entry & Exit Safety Package",
      "Stair & Hallway Safety Package",
      "Smart doorbell + phone app setup",
      "Up to 4 lever door handles replaced",
      "30-day follow-up check-in visit",
    ],
    icon: <Home size={26} strokeWidth={1.4} />,
  },
  {
    name: "Whole-Home Premium",
    slug: "Whole-Home Premium",
    price: "$4,950–$7,500",
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

const trashValetTiers = [
  {
    name: "Standard",
    price: "$35/wk",
    monthly: "$140/mo",
    description:
      "Up to 2 cans (trash + recycling) rolled to curb evening before, returned same-day after pickup. Bucks County collection schedule. Weekly text confirmation.",
  },
  {
    name: "Premium",
    price: "$55/wk",
    monthly: "$220/mo",
    description:
      "Standard service + monthly bin rinse-out + photo confirmation texted weekly (peace of mind for adult children) + bin labels.",
  },
  {
    name: "Snowbird / Vacation",
    price: "$25/wk",
    monthly: null,
    description:
      "Same as Standard, billed only during weeks you’re away. 1-week minimum, 12-week max. Useful for Florida-bound seniors November through April.",
  },
];

const bundles = [
  {
    combo: "Bathroom Safety Package + Safety Watch Quarterly",
    discount: "10% off package + locked-in subscription rate for 12 months",
  },
  {
    combo: "Whole-Home Audit + Trash Valet + Safety Watch Monthly",
    discount: "15% off audit + first month of trash valet free",
  },
  {
    combo: "Any Tier 2 package + Trash Valet sign-up",
    discount: "First 4 weeks of trash valet free",
  },
];

// ⚠️ SHOWER CONVERSION — PRICES NOT VERIFIED AGAINST REAL SUB QUOTE
// Built bottom-up from cost components; not confirmed with an actual plumbing/tile partner.
// Before enabling: get one real quote from the sub Slav would use on a typical job and
// confirm $6,500 / $11,500 starting prices hold. Also confirm "Most Chosen" badge reflects
// actual booking mix. Flip SHOW_SHOWER_CONVERSION to true only after Slav signs off.
const SHOW_SHOWER_CONVERSION = false;

const showerConversionTiers = [
  {
    name: "Accessible Conversion",
    price: "Starting at $6,500",
    badge: null,
    note: "Most straightforward layouts land in this range. Homes needing plumbing relocation, custom tile, or significant demo typically run higher — confirmed at your free in-home assessment.",
    includes: [
      "Tub removal & haul-away",
      "Low-threshold or curbless acrylic shower pan and wall surround",
      "ADA grab bars + fold-down shower bench",
      "New shower valve/fixture",
      "Anti-scald valve (where plumbing allows)",
    ],
    notIncluded:
      "Custom tile, permits (if required by township), plumbing line relocation beyond minor adjustment — quoted separately if needed.",
  },
  {
    // ⚠️ Confirm "Most Chosen" badge with Slav — verify this is actually the more common
    // booking before publishing. If Accessible is equally common, remove the badge entirely.
    name: "Custom Tile / Curbless Conversion",
    price: "Starting at $11,500",
    badge: "Most Chosen",
    note: "Covers most conversions involving tile, a curbless entry, or a full custom layout. Final price depends on shower size, tile selection, and plumbing scope — confirmed at your free in-home assessment.",
    includes: [
      "Everything in Accessible Conversion, plus:",
      "Custom tile walls and floor",
      "Linear drain",
      "Waterproofing membrane",
      "Frameless glass option",
    ],
    notIncluded: null,
  },
];

// Quick Wins — individual service pricing
// ⚠️ DOORBELL: Smart Doorbell is priced at $185 below. Margin is ~24% vs ReadyNest's 50%+
// target ($140 avg materials cost). If this is intentionally a loss-leader/relationship item,
// leave as-is. Otherwise bump to $225–$245. Flag to Slav — business-strategy call, not a
// copy fix.
const quickWinsItems = [
  { service: "Single Grab Bar Install", price: "$195" },
  { service: "Two Grab Bars (same visit)", price: "$325" },
  {
    service: "Smart Doorbell Install + App Setup",
    // ⚠️ See margin note above. Intentional loss-leader or should be $225–$245?
    price: "$185",
  },
];

const everythingIncluded = [
  "All labor and time on-site",
  "Travel to your home (within service area)",
  "Standard mounting hardware (screws, anchors, brackets)",
  "Cleanup and haul-away of packaging",
  "30-day workmanship guarantee on installation",
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
                "ADA-rated grab bars, non-slip treatment, shower bench, nightlight, and safety walkthrough. $895.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "895", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Entry & Exit Safety Package",
              description:
                "Threshold ramp, lever door handles, motion-sensor exterior light, and entry lighting. $675.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "675", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Stair & Hallway Safety Package",
              description:
                "Handrail installation, non-slip stair treads, motion-sensor lighting, and nightlights. $795.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "795", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Whole-Home Aging-in-Place Package",
              description:
                "Comprehensive whole-home assessment plus Bathroom, Entry, and Stair packages with smart doorbell and door lever upgrades. From $2,950.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
              areaServed: "Bucks County, PA",
              offers: { "@type": "Offer", price: "2950", priceCurrency: "USD" },
            },
            {
              "@context": "https://schema.org",
              "@type": "Service",
              name: "Trash Valet",
              description:
                "Weekly trash and recycling bin service — bins moved to the curb and returned same day, year-round. From $35/week.",
              provider: { "@type": "LocalBusiness", name: "ReadyNest" },
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
            Bundled safety packages are the most efficient way to protect a home
            — everything installed in one visit, labor and materials included.
            Every job personally done by Slav.
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
                <div className="bg-white rounded-2xl border border-soft-gray p-7 flex flex-col h-full relative shadow-sm hover:shadow-md transition-shadow">
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

                  {/* Italic note */}
                  {pkg.note && (
                    <p className="text-gray-400 text-xs italic mb-5 leading-relaxed">
                      {pkg.note}
                    </p>
                  )}

                  {/* CTA */}
                  <Link
                    href={`/contact?service=${encodeURIComponent(pkg.slug)}`}
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

      {/* ── 3. Subscriptions ── */}
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

      {/* ── 4. Trash Valet ── */}
      <section
        id="trash-valet"
        className="bg-white py-20 md:py-24 border-b border-soft-gray"
        aria-labelledby="trash-valet-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Trash2 size={20} className="text-gold shrink-0" />
              <p className="text-gold text-sm font-semibold tracking-wider uppercase">
                Trash Valet Subscription
              </p>
            </div>
            <h2
              id="trash-valet-heading"
              className="font-serif text-4xl text-charcoal mb-3"
            >
              We Handle the Bins. Every Week.
            </h2>
            <p className="text-gray-500 text-base mb-3 max-w-2xl leading-relaxed">
              Every week, ReadyNest rolls trash and recycling cans from the side or
              back of the house to the curb the evening before pickup, then returns
              them after collection. Confirmation text sent each week. No contracts.
            </p>
            <p className="text-gray-400 text-sm mb-10 max-w-2xl">
              <strong className="text-charcoal font-semibold">Service area:</strong>{" "}
              Doylestown 18901/18902, New Britain, Buckingham 18912, Plumsteadville
              18949 &mdash; other zip codes added once route density supports it.
            </p>

            <div className="overflow-x-auto rounded-2xl border border-soft-gray mb-6">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white text-left">
                    <th className="px-5 py-3.5 font-semibold">Tier</th>
                    <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                      Weekly
                    </th>
                    <th className="px-5 py-3.5 font-semibold text-right whitespace-nowrap">
                      Monthly equiv.
                    </th>
                    <th className="px-5 py-3.5 font-semibold hidden sm:table-cell">
                      What&apos;s Included
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {trashValetTiers.map((tier, i) => (
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
                      <td className="px-5 py-4 text-gray-500 text-right whitespace-nowrap">
                        {tier.monthly ?? "—"}
                      </td>
                      <td className="px-5 py-4 text-gray-500 hidden sm:table-cell leading-relaxed">
                        {tier.description}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <Link
              href={`/contact?service=${encodeURIComponent("Trash Valet Service")}`}
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Start Trash Valet <ArrowRight size={16} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

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
                        <span className="font-semibold text-gray-500">Not included:</span>{" "}
                        {tier.notIncluded}
                      </p>
                    )}
                    <Link
                      href={`/contact?service=${encodeURIComponent("Walk-In Shower Conversion")}`}
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

      {/* ── 5b. Need something specific? (Quick Wins) ── */}
      <section
        className="bg-beige py-16 md:py-20 border-b border-soft-gray"
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
                  {quickWinsItems.map((item, i) => (
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
                href={`/contact?service=${encodeURIComponent("Quick Wins / Individual Service")}`}
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
                  For Whole-Home and Premium packages, any non-standard materials are
                  itemized at our actual cost (no markup). You see the receipt.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── 7. Bundle Discounts ── */}
      <section
        className="bg-beige py-16 md:py-20 border-b border-soft-gray"
        aria-labelledby="bundles-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Tag size={18} className="text-gold shrink-0" />
              <p className="text-gold text-sm font-semibold tracking-wider uppercase">
                Bundle Discounts
              </p>
            </div>
            <h2
              id="bundles-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-8"
            >
              Save When You Bundle
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.06}>
            <div className="overflow-x-auto rounded-2xl border border-soft-gray">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white text-left">
                    <th className="px-5 py-3.5 font-semibold">Bundle</th>
                    <th className="px-5 py-3.5 font-semibold">Discount</th>
                  </tr>
                </thead>
                <tbody>
                  {bundles.map((bundle, i) => (
                    <tr
                      key={bundle.combo}
                      className={`border-t border-soft-gray ${i % 2 === 0 ? "bg-white" : "bg-beige/50"}`}
                    >
                      <td className="px-5 py-4 text-charcoal font-medium leading-relaxed">
                        {bundle.combo}
                      </td>
                      <td className="px-5 py-4 text-gold font-semibold leading-relaxed">
                        {bundle.discount}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-gray-500 text-sm text-center">
              Ask Slav about bundle pricing when you book your free assessment.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 8. Bottom CTA ── */}
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
