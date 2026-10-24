import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Who Pays for Home Safety Modifications? | ReadyNest — Bucks County, PA" },
  description:
    "Private pay, long-term care insurance, the VA HISA grant, Pennsylvania programs, HSA/FSA, and tax deductions — a plain-language guide to paying for grab bars, railings, and other home safety modifications.",
  alternates: { canonical: "https://readynestpa.com/who-pays" },
  openGraph: {
    title: "Who Pays for Home Safety Modifications? | ReadyNest",
    description:
      "A plain-language guide to paying for aging-in-place home modifications in Bucks County, PA.",
    url: "https://readynestpa.com/who-pays",
  },
};

const sections = [
  {
    id: "private-pay",
    title: "Private pay",
    body: [
      "Most families pay out of pocket — and most projects cost less than people expect. Our Bathroom Safety Package is $995, the Stair & Hallway package is $1,195, and the Entry & Exit package is $1,295. A Whole-Home Aging-in-Place Package starts at $3,950 — less than one month of assisted living.",
      "Every quote is written, itemized, and fixed before work begins, so you know exactly what you're paying for.",
    ],
    link: { href: "/services", label: "See package pricing" },
  },
  {
    id: "long-term-care-insurance",
    title: "Long-term care insurance",
    body: [
      "Many long-term care insurance policies reimburse home modifications that help someone stay safely at home. Coverage varies by policy, so call the insurer and ask whether \"home modifications\" are a covered benefit and what they need to see.",
      "We provide what insurers typically ask for: a written assessment of the home, an itemized estimate, an itemized final invoice, and before-and-after photos.",
    ],
  },
  {
    id: "veterans",
    title: "Veterans: VA HISA grant",
    body: [
      "The VA's Home Improvements and Structural Alterations (HISA) grant helps eligible veterans pay for medically necessary changes to their home — things like grab bars, railings, accessible showers, and entry ramps. The benefit amount depends on whether the need is service-connected, and the veteran's VA provider must prescribe the modification.",
      "Approval is required before work begins, so start the conversation with the VA early. We're happy to provide the written estimate the application needs.",
    ],
    link: {
      href: "https://www.prosthetics.va.gov/psas/HISA2.asp",
      label: "Learn about HISA on va.gov",
      external: true,
    },
  },
  {
    id: "pennsylvania-programs",
    title: "Pennsylvania programs",
    body: [
      "Pennsylvania's Community HealthChoices (CHC) waiver can cover home adaptations for people who qualify for Medicaid long-term services and supports. The Bucks County Area Agency on Aging also runs programs and can point older residents toward help with home safety.",
      "Eligibility rules are specific. Ask us — we can tell you if you may qualify and who to call next.",
    ],
  },
  {
    id: "hsa-fsa",
    title: "HSA / FSA",
    body: [
      "Grab bars, railings, and similar safety modifications may qualify as eligible expenses for a Health Savings Account or Flexible Spending Account — usually with a letter of medical necessity from a doctor. Check with your plan before you pay.",
    ],
  },
  {
    id: "tax",
    title: "Taxes",
    body: [
      "Home modifications made for medical reasons may be deductible as medical expenses in some situations. The rules depend on your overall medical costs and whether the change adds value to the home. Ask your tax preparer, and keep our itemized invoice with your records.",
    ],
  },
];

export default function WhoPaysPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Paying for Home Safety
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-5 leading-tight">
            Who Pays for Home Safety Modifications?
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Most families pay privately, but there are other options worth checking. Here&apos;s
            a plain-language overview.
          </p>
        </div>
      </section>

      {/* ── Sections ── */}
      <section className="bg-white py-20 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {sections.map((section, i) => (
            <AnimatedSection key={section.id} delay={i * 0.04}>
              <div id={section.id} className="border-l-4 border-gold pl-6 scroll-mt-28">
                <h2 className="font-serif text-3xl text-charcoal mb-4">{section.title}</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  {section.body.map((para) => (
                    <p key={para}>{para}</p>
                  ))}
                </div>
                {section.link &&
                  (section.link.external ? (
                    <a
                      href={section.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
                    >
                      {section.link.label} <ArrowRight size={14} />
                    </a>
                  ) : (
                    <Link
                      href={section.link.href}
                      className="mt-4 inline-flex items-center gap-1.5 text-gold text-sm font-semibold hover:underline"
                    >
                      {section.link.label} <ArrowRight size={14} />
                    </Link>
                  ))}
              </div>
            </AnimatedSection>
          ))}

          <p className="text-gray-400 text-xs leading-relaxed">
            This page is general information, not legal, tax, or financial advice. Program rules
            change — confirm details with the program, your insurer, or a qualified professional.
          </p>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent-dark py-20" aria-labelledby="who-pays-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="who-pays-cta" className="font-serif text-4xl md:text-5xl text-white mb-4">
              Start With a Free Assessment
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Slav will walk through the home, give you a written plan with clear prices, and
              help you figure out which payment options might apply.
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
