import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { PA_HIC_NUMBER } from "@/lib/site";
import { towns } from "@/lib/towns";

export const metadata: Metadata = {
  title: { absolute: "FAQ | ReadyNest — Aging-in-Place Home Safety Questions, Bucks County, PA" },
  description:
    "Answers to common questions about ReadyNest home safety modifications: scheduling, who installs, drilling into tile, insurance, working with OTs and PTs, service area, and payment.",
  alternates: { canonical: "https://readynestpa.com/faq" },
  openGraph: {
    title: "Frequently Asked Questions | ReadyNest",
    description:
      "Scheduling, installation, insurance, service area, and more — answers about aging-in-place home safety modifications in Bucks County, PA.",
    url: "https://readynestpa.com/faq",
  },
};

const townList = `${towns.map((t) => t.name).join(", ")}, and Ottsville`;

const faqs = [
  {
    q: "How fast can you come out?",
    a: "We respond within 24 hours — usually the same day — and can typically schedule your free assessment the same week. If a parent is coming home from the hospital or rehab, tell us the discharge date and we'll prioritize it.",
  },
  {
    q: "Do I need to be home?",
    a: "Someone needs to let us in, but it doesn't have to be you. Many adult children live out of the area, so your parent can be home for the visit while you join by phone. Either way, the written report is emailed to the family contact you choose.",
  },
  {
    q: "Can you drill into tile or fiberglass?",
    a: "Yes. We drill tile with the right bits to avoid cracking, and for fiberglass or acrylic tub surrounds we use anchoring systems rated for those surfaces. We check what's behind the wall before anything goes up, so every grab bar is solidly mounted.",
  },
  {
    q: "Will it look institutional?",
    a: "No. We use quality brand-name hardware in finishes like brushed nickel, chrome, and matte black that match the rest of your home. Designer finishes (e.g., Brizo or Kohler) are available and quoted at the estimate.",
  },
  {
    q: "Who does the installation?",
    a: "Every job is assessed and signed off by Slav. Installation is done by Slav or his trained, insured team, and larger remodeling projects like walk-in shower conversions are completed by our vetted local trade partners. Slav personally does the final walkthrough with you on every job.",
  },
  {
    q: "Are you insured?",
    a: `Yes. ReadyNest is fully insured and registered as a Pennsylvania Home Improvement Contractor (PA HIC #${PA_HIC_NUMBER}). Slav is also a Certified Aging-in-Place Specialist (CAPS) through the National Association of Home Builders.`,
  },
  {
    q: "Do you work with my parent's OT or PT?",
    a: "Gladly. If your parent's occupational or physical therapist has made recommendations, share them with us and we'll install to match — grab bar placement, heights, and which side of the stairs needs a rail. We can also send our written report to the therapist.",
  },
  {
    q: "Do you serve my town?",
    a: `We serve Bucks County, including ${townList}. Not sure if you're in our area? Call or text 267-717-9119.`,
  },
  {
    q: "What if my parent resists?",
    a: "That's very common. A free assessment is low-pressure — it's a conversation, not a sales pitch. Slav focuses on what your parent wants (staying in their own home, staying independent) and recommends only what genuinely reduces risk. Your parent decides what gets done, and there's no obligation.",
  },
  {
    // TODO: Add accepted payment methods (check, card, etc.) and deposit terms once confirmed.
    q: "How do I pay?",
    a: "You'll get a written, itemized, fixed quote before any work begins, with payment terms spelled out. Many families pay privately; long-term care insurance, the VA HISA grant, Pennsylvania programs, and HSA/FSA funds may also help.",
  },
];

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Questions &amp; Answers
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Frequently Asked Questions
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Straight answers to what families ask us most.
          </p>
        </div>
      </section>

      {/* ── Q&A ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {faqs.map((faq, i) => (
            <AnimatedSection key={faq.q} delay={Math.min(i * 0.04, 0.2)}>
              <div className="bg-beige rounded-2xl p-7 border border-soft-gray">
                <h2 className="font-serif text-xl text-charcoal mb-3">{faq.q}</h2>
                <p className="text-gray-600 text-sm leading-relaxed">{faq.a}</p>
                {faq.q === "How do I pay?" && (
                  <Link
                    href="/who-pays"
                    className="mt-3 inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
                  >
                    Who pays for home safety modifications? <ArrowRight size={14} />
                  </Link>
                )}
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent-dark py-20" aria-labelledby="faq-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="faq-cta" className="font-serif text-4xl md:text-5xl text-white mb-4">
              Still Have Questions?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Call or text Slav, or book a free in-home assessment.
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
