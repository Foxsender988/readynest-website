import type { Metadata } from "next";
import Link from "next/link";
import { Trash2, ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Trash Valet for Seniors | ReadyNest — Weekly Bin Service, Doylestown, PA" },
  description:
    "ReadyNest Trash Valet rolls trash and recycling bins to the curb and back every week for seniors in Doylestown, Buckingham, and Plumsteadville, PA. From $35/week. Call 267-717-9119.",
  alternates: { canonical: "https://readynestpa.com/trash-valet" },
  openGraph: {
    title: "Trash Valet for Seniors | ReadyNest",
    description:
      "Weekly curb-and-back trash and recycling service. No heavy lifting, no icy driveways — just taken care of. From $35/week.",
    url: "https://readynestpa.com/trash-valet",
  },
};

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

export default function TrashValetPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Trash Valet",
            description:
              "Weekly trash and recycling bin service — bins moved to the curb and returned same day, year-round. From $35/week.",
            provider: { "@type": "LocalBusiness", name: "ReadyNest" },
            areaServed: "Bucks County, PA",
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Trash Valet Subscription
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            We Handle the Bins. Every Week.
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            No heavy lifting, no icy driveways — just taken care of.
          </p>
        </div>
      </section>

      {/* ── Details + pricing ── */}
      <section
        className="bg-white py-20 md:py-24 border-b border-soft-gray"
        aria-labelledby="trash-valet-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-center gap-3 mb-2">
              <Trash2 size={20} className="text-gold shrink-0" />
              <p className="text-gold text-sm font-semibold tracking-wider uppercase">
                How It Works
              </p>
            </div>
            <h2
              id="trash-valet-heading"
              className="font-serif text-4xl text-charcoal mb-3"
            >
              Curb and Back, Every Pickup Day
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

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href={`/contact?service=${encodeURIComponent("Trash Valet Service")}`}
                className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-[#a07d46] transition-colors"
              >
                Start Trash Valet <ArrowRight size={16} />
              </Link>
              <a
                href="tel:+12677179119"
                className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/25 text-charcoal font-semibold px-6 py-3.5 rounded-xl hover:border-gold hover:text-gold transition-colors"
                aria-label="Call or text ReadyNest at 267-717-9119"
              >
                <Phone size={16} />
                Call or text 267-717-9119
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
