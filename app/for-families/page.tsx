import type { Metadata } from "next";
import Link from "next/link";
import {
  ClipboardList,
  ArrowRight,
  Phone,
  CheckCircle,
  Heart,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "For Families | ReadyNest — Home Safety for Aging Parents, Bucks County, PA" },
  description:
    "ReadyNest helps adult children in Bucks County make a parent's home safer. Free assessment, written report within 24 hours, and affordable aging-in-place modifications — no pressure, no upsell.",
  alternates: { canonical: "https://readynestpa.com/for-families" },
  openGraph: {
    title: "For Families | ReadyNest — Home Safety for Aging Parents",
    description:
      "We help adult children identify and fix fall hazards in a parent's home. Free assessment, written report, and modifications that fit your budget.",
    url: "https://readynestpa.com/for-families",
  },
};

const assessmentSteps = [
  {
    number: "1",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    text: "Slav walks every room and identifies fall risks, mobility challenges, and lighting gaps.",
  },
  {
    number: "2",
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    text: "He notes the specific modifications that would address each risk.",
  },
  {
    number: "3",
    icon: <ClipboardList size={22} strokeWidth={1.5} />,
    text: "You receive a written report — clear language, no jargon — with prioritized recommendations.",
  },
  {
    number: "4",
    icon: <Heart size={22} strokeWidth={1.5} />,
    text: "You choose what to address first. There's no pressure to do everything at once.",
  },
];

const situations = [
  {
    title: "Parent recently discharged from hospital or rehab",
    description:
      "We assess the home before they return so modifications are in place on day one.",
  },
  {
    title: "Dad lives alone and refuses to move",
    description:
      "We make his home genuinely safer so he can stay independent — and you can worry less.",
  },
  {
    title: "Mom fell once — we want to prevent the next one",
    description:
      "We identify the exact conditions that contributed and address them directly.",
  },
  {
    title: "We live 2 hours away and can't be there to check",
    description:
      "Slav sends a full written report to you so you stay informed without needing to be present.",
  },
  {
    title: "Parent has early-stage Parkinson's, arthritis, or mobility challenges",
    description:
      "We recommend modifications matched to their specific condition and current needs.",
  },
  {
    title: "We're planning a family visit and want the home assessed before we leave",
    description:
      "Schedule an assessment during your visit and leave knowing the home is safer.",
  },
];

const pricingItems = [
  {
    label: "Entry packages",
    range: "From $675",
    description:
      "Entry & Exit or Stair & Hallway safety — installed in a single visit, labor and materials included.",
  },
  {
    label: "Bathroom Safety Package",
    range: "$895",
    description:
      "Most-referred package. Grab bars, non-slip treatment, shower bench, nightlight, and safety walkthrough.",
  },
  {
    label: "Whole-home safety",
    range: "From $2,950",
    description:
      "Comprehensive aging-in-place modifications across every area of the home.",
  },
];

export default function ForFamiliesPage() {
  return (
    <>
      {/* ── 1. Hero ── */}
      <section className="bg-beige py-20 md:py-28 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-5">
              For Adult Children &amp; Families
            </p>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-6">
              Your parent&apos;s home should feel safe to both of you.
            </h1>
            <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
              ReadyNest works with adult children across Bucks County to
              identify and fix the hazards most likely to cause a fall — before
              something happens. No pressure, no upsell, just an honest
              assessment and a clear plan.
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
                className="inline-flex items-center justify-center gap-2 border-2 border-charcoal/30 text-charcoal font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
              >
                <Phone size={17} />
                Call 267-717-9119
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 2. Empathy ── */}
      <section
        className="bg-soft-gray py-16 md:py-24"
        aria-labelledby="empathy-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
              You&apos;re Not Alone
            </p>
            <h2
              id="empathy-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-6"
            >
              Most families call us after a close call — not after a fall.
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              You noticed your mom gripping the wall on her way to the bathroom.
              Your dad mentioned the stairs feel &ldquo;a little wobbly.&rdquo;
              Maybe there was a fall already, and you&apos;re trying to prevent
              the next one. Whatever brought you here, you&apos;re in the right
              place.
            </p>
            <hr className="border-charcoal/15 mb-8" />
            <p className="text-gray-600 text-lg leading-relaxed">
              ReadyNest was built specifically for this moment — to give
              families a trusted local professional to call, a clear process to
              follow, and an affordable way to make home genuinely safer.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 3. Assessment Process ── */}
      <section
        className="bg-white py-16 md:py-24"
        aria-labelledby="assessment-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="assessment-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4"
            >
              What Happens During a Safety Assessment
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-2xl mx-auto leading-relaxed">
              A straightforward visit with a clear deliverable at the end.
            </p>
          </AnimatedSection>

          <div className="space-y-6 mb-10">
            {assessmentSteps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="flex items-start gap-5 bg-beige rounded-2xl px-6 py-5">
                  <div className="shrink-0 w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-semibold text-base">
                    {step.number}
                  </div>
                  <p className="text-gray-600 text-base leading-relaxed pt-1.5">
                    {step.text}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.35}>
            <div className="bg-gold/10 border border-gold/25 rounded-2xl px-6 py-5">
              <p className="text-charcoal text-sm leading-relaxed">
                <span className="font-semibold">The written report goes to you</span>{" "}
                — the family contact — so you can review it, share it with
                siblings, or discuss it with your parent&apos;s doctor.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 4. Common Situations ── */}
      <section
        className="bg-beige py-16 md:py-24"
        aria-labelledby="situations-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="situations-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4"
            >
              Situations We Help With Every Week
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto leading-relaxed">
              Every family&apos;s situation is a little different. Here are the
              ones we hear about most often.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {situations.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.07}>
                <div className="bg-white rounded-2xl p-6 h-full border border-soft-gray hover:border-gold/40 transition-colors">
                  <h3 className="font-semibold text-charcoal text-base mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Communication ── */}
      <section
        className="bg-white py-16 md:py-24"
        aria-labelledby="communication-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="communication-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-6"
            >
              We Report Back to You
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              After every assessment and every installation, Slav sends a
              written summary to the designated family contact — what was found,
              what was installed, and what&apos;s still recommended. You stay in
              the loop even when you can&apos;t be there.
            </p>
            <ul className="space-y-4">
              {[
                "Written assessment report, emailed within 24 hours",
                "Before/after notes on every modification",
                "Direct line to Slav for follow-up questions",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle
                    size={20}
                    className="text-gold shrink-0 mt-0.5"
                    strokeWidth={1.8}
                  />
                  <span className="text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 6. Pricing ── */}
      <section
        className="bg-soft-gray py-16 md:py-24"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="pricing-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal text-center mb-4"
            >
              What Does It Cost?
            </h2>
            <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto leading-relaxed">
              Most aging-in-place modifications cost far less than families
              expect.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-5 mb-8">
            {pricingItems.map((item, i) => (
              <AnimatedSection key={item.label} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-soft-gray text-center h-full">
                  <p className="text-charcoal font-semibold text-base mb-2">
                    {item.label}
                  </p>
                  <p className="text-gold font-serif text-2xl mb-3">
                    {item.range}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.3}>
            <p className="text-center text-gray-500 text-sm mb-3">
              Every assessment is free. No obligation to book anything.
            </p>
            <p className="text-center">
              <Link
                href="/services"
                className="text-gold font-semibold text-sm hover:underline inline-flex items-center gap-1"
              >
                View full pricing on our Services page <ArrowRight size={14} />
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── 7. Bottom CTA ── */}
      <section
        className="bg-accent-dark py-20 md:py-28"
        aria-labelledby="bottom-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="bottom-cta-heading"
              className="font-serif text-3xl md:text-4xl text-white mb-5 leading-tight"
            >
              Ready to Get a Professional Set of Eyes on the Home?
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Book a free assessment — Slav will visit, identify the risks, and
              give you a written report within 24 hours.
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
                className="inline-flex items-center justify-center gap-2 border-2 border-white/25 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
              >
                <Phone size={17} />
                Call 267-717-9119
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
