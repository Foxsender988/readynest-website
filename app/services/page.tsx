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
  CheckCircle,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import type { ServiceOption } from "@/lib/contact";
import { GRAB_BAR_MOUNTING } from "@/lib/site";
import {
  PACKAGES_TAGLINE,
  SHOW_SHOWER_CONVERSION,
  individualServiceGroups,
  minimumVisit,
  packageList,
  packages,
  pricingNotIncluded,
  pricingTerms,
  servicesJsonLd,
  showerConversionList,
  type PackageKey,
} from "@/lib/pricing";

const metaDescription = `${packages.bathroom.name} ${packages.bathroom.display}, ${packages.entryExit.name} ${packages.entryExit.display}, Whole-Home ${packages.wholeHome.display.toLowerCase()}, walk-in showers, and individual installs in Bucks County, PA. Free 10-minute walkthrough. Call 267-717-9119.`;

export const metadata: Metadata = {
  title: { absolute: "Home Safety Services | ReadyNest: Aging-in-Place Modifications, Bucks County, PA" },
  description: metaDescription,
  alternates: { canonical: "https://readynestpa.com/services" },
  openGraph: {
    title: "Home Safety Services | ReadyNest, Bucks County, PA",
    description: `${packages.bathroom.name} ${packages.bathroom.display}, Whole-Home ${packages.wholeHome.display.toLowerCase()}, walk-in shower conversions, and individual installs. Assessed and signed off by Slav, CAPS; installed by Slav or his trained team in Bucks County, PA.`,
    url: "https://readynestpa.com/services",
  },
};

const packageIcons: Record<PackageKey, React.ReactNode> = {
  bathroom: <ShieldCheck size={26} strokeWidth={1.4} />,
  bathroomPremium: <ShieldCheck size={26} strokeWidth={1.4} />,
  entryExit: <DoorOpen size={26} strokeWidth={1.4} />,
  stairHallway: <ArrowUpDown size={26} strokeWidth={1.4} />,
  wholeHome: <Home size={26} strokeWidth={1.4} />,
  wholeHomePremium: <Home size={26} strokeWidth={1.4} />,
};

const badgeStyles = {
  gold: "bg-gold text-white",
  dark: "bg-accent-dark text-white",
};

const smartHomeItems = [
  {
    title: "Motion lighting",
    body: "Battery motion lights for closets, hallways, and stairs, plus exterior motion light swaps at the entry. Lights come on before your parent reaches for a switch.",
  },
  {
    title: "Motion wall switches",
    body: "Motion-sensor wall switches replace the existing switch, so bathroom and hallway lights turn on automatically at night.",
  },
  {
    title: "Smart doorbell",
    body: "Video doorbell installed and set up on your parent's phone (and yours), so they can see who's at the door without rushing to answer it.",
  },
  {
    title: "Leak & smoke alerts",
    body: "Water leak sensors near the water heater, washer, and toilets, and smart smoke/CO alerts that notify family by phone. Quoted at your walkthrough.",
  },
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
      {/* ── Schema.org JSON-LD (generated from lib/pricing.ts) ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd()) }}
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
            Safety packages are the most efficient way to protect a home: everything
            installed in one visit, labor and materials included. Every job assessed
            and signed off by Slav, CAPS (Certified Aging-in-Place Specialist).
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
                Safety Packages
              </p>
              <h2
                id="packages-heading"
                className="font-serif text-4xl md:text-5xl text-charcoal mb-4"
              >
                Packages
              </h2>
              <p className="text-charcoal text-lg font-semibold max-w-2xl leading-relaxed mb-2">
                {PACKAGES_TAGLINE}
              </p>
              <p className="text-gray-500 text-base max-w-2xl leading-relaxed">
                All labor, travel, hardware, and cleanup included. Most packages
                completed in a single visit.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6">
            {packageList.map((pkg, i) => (
              <AnimatedSection key={pkg.key} delay={i * 0.07}>
                <div
                  id={pkg.anchor}
                  className="bg-white rounded-2xl border border-soft-gray p-7 flex flex-col h-full relative shadow-sm hover:shadow-md transition-shadow scroll-mt-28"
                >
                  {/* Badge */}
                  {pkg.badge && pkg.badgeTone && (
                    <span
                      className={`absolute top-5 right-5 text-xs font-semibold px-2.5 py-1 rounded-full ${badgeStyles[pkg.badgeTone]}`}
                    >
                      {pkg.badge}
                    </span>
                  )}

                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-4 pr-20">
                    <div className="shrink-0 w-11 h-11 rounded-xl bg-beige text-gold flex items-center justify-center">
                      {packageIcons[pkg.key]}
                    </div>
                    <h3 className="font-serif text-xl text-charcoal leading-snug">
                      {pkg.name}
                    </h3>
                  </div>

                  {/* Price */}
                  <p className="text-3xl font-bold text-gold mb-5">{pkg.display}</p>

                  {/* Includes label */}
                  <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                    {pkg.includesLabel}
                  </p>

                  {/* Bullet list */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {pkg.contents.map((item) => (
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
                            key={addOn.name}
                            className="flex items-start justify-between gap-3 text-gray-600 text-xs leading-relaxed"
                          >
                            <span>{addOn.name}</span>
                            <span className="text-gold font-semibold whitespace-nowrap">{addOn.display}</span>
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

      {/* ── 3. Walk-In Shower Conversions (feature-flagged: SHOW_SHOWER_CONVERSION) ── */}
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
                vetted local trade partners, from your first visit to the final walkthrough.
              </p>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {showerConversionList.map((tier, i) => (
                <AnimatedSection key={tier.name} delay={i * 0.08}>
                  <div className="bg-white rounded-2xl border border-soft-gray p-7 flex flex-col h-full relative shadow-sm hover:shadow-md transition-shadow">
                    <h3 className="font-serif text-xl text-charcoal mb-3">{tier.name}</h3>
                    <p className="text-3xl font-bold text-gold mb-4">{tier.display}</p>
                    <p className="text-gray-500 text-sm italic leading-relaxed mb-5">{tier.note}</p>
                    <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-3">
                      INCLUDES
                    </p>
                    <ul className="space-y-2.5 mb-5 flex-1">
                      {tier.contents.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-gray-600 text-sm leading-relaxed">
                          <Checkmark />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-400 text-xs leading-relaxed border-t border-soft-gray pt-4">
                      <span className="font-semibold text-gray-500">{tier.footnoteLabel}</span>{" "}
                      {tier.footnote}
                    </p>
                    <Link
                      href={`/contact?service=${encodeURIComponent("Walk-In Shower Conversion" satisfies ServiceOption)}`}
                      className="mt-6 w-full flex items-center justify-center gap-2 bg-gold text-white font-semibold px-5 py-3 rounded-xl hover:bg-[#a07d46] transition-colors text-sm"
                    >
                      Request a Walkthrough <ArrowRight size={15} />
                    </Link>
                  </div>
                </AnimatedSection>
              ))}
            </div>

            <AnimatedSection delay={0.18}>
              <p className="text-gray-400 text-sm text-center max-w-2xl mx-auto leading-relaxed">
                Every project includes a free walkthrough, a written flat quote before work
                begins, and final walkthrough sign-off by Slav, whether the installation is
                completed by Slav or one of our vetted trade partners.
              </p>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ── 4. Smart Home Safety ── */}
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
              family a heads-up when something&apos;s wrong. Priced individually (see the{" "}
              <a href="#individual-services" className="text-gold font-semibold hover:underline">
                individual services table
              </a>{" "}
              below) or included in the Whole-Home packages.
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

      {/* ── 5. Individual services ── */}
      <section
        id="individual-services"
        className="bg-beige py-16 md:py-20 border-b border-soft-gray scroll-mt-20"
        aria-labelledby="individual-services-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="individual-services-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-4 text-center"
            >
              Individual Services
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 text-center">
              Need something specific? We handle individual jobs too.{" "}
              {minimumVisit.display} minimum visit for any job.
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
                {individualServiceGroups.map((group) => (
                  <tbody key={group.title}>
                    <tr className="border-t border-soft-gray bg-soft-gray">
                      <th
                        colSpan={2}
                        scope="colgroup"
                        className="px-5 py-2.5 text-left text-charcoal text-xs font-semibold tracking-wider uppercase"
                      >
                        {group.title}
                      </th>
                    </tr>
                    {group.items.map((item) => (
                      <tr key={item.name} className="border-t border-soft-gray bg-white">
                        <td className="px-5 py-4 text-charcoal">{item.name}</td>
                        <td className="px-5 py-4 text-gold font-semibold text-right whitespace-nowrap">
                          {item.display}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ))}
              </table>
            </div>
            <p className="text-gray-500 text-sm text-center mb-8">
              Call or text{" "}
              <a
                href="tel:+12677179119"
                className="text-gold font-semibold hover:underline"
                aria-label="Call or text ReadyNest at 267-717-9119"
              >
                267-717-9119
              </a>{" "}
              for a quick quote, usually within the same business day.
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
                Book Free Walkthrough
                <ArrowRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. How pricing works ── */}
      <section
        id="how-pricing-works"
        className="bg-white py-20 md:py-24 border-b border-soft-gray scroll-mt-20"
        aria-labelledby="pricing-policy-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="pricing-policy-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-10 text-center"
            >
              How Pricing Works
            </h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Terms */}
            <AnimatedSection delay={0.05}>
              <div className="bg-beige rounded-2xl p-7 border border-soft-gray h-full">
                <p className="text-gold text-xs font-semibold tracking-wider uppercase mb-4">
                  Our Terms
                </p>
                <ul className="space-y-3">
                  {pricingTerms.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed">
                      <CheckCircle size={17} className="text-gold shrink-0 mt-0.5" strokeWidth={2} />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-xs text-gray-400 leading-relaxed">{GRAB_BAR_MOUNTING}</p>
              </div>
            </AnimatedSection>

            {/* Not Included */}
            <AnimatedSection delay={0.1}>
              <div className="bg-white rounded-2xl p-7 border border-soft-gray h-full">
                <p className="text-gray-400 text-xs font-semibold tracking-wider uppercase mb-4">
                  Not Included
                </p>
                <ul className="space-y-3">
                  {pricingNotIncluded.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-gray-500 text-sm leading-relaxed">
                      <span className="shrink-0 mt-0.5 text-gray-300 font-bold text-base leading-none">&times;</span>
                      {item}
                    </li>
                  ))}
                </ul>
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
              Every home is different. Book a free 10-minute walkthrough and Slav will
              look at what worries you, recommend what makes sense, and give you a written
              flat quote. No pressure, no obligation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
              >
                Book Free Walkthrough <ArrowRight size={18} />
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
