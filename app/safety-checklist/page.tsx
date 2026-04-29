import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Bath, ArrowUpDown, DoorOpen, Bed, ClipboardList } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import LeadMagnetForm from "@/components/LeadMagnetForm";

export const metadata: Metadata = {
  title: { absolute: "Free Home Safety Checklist | ReadyNest — 40-Item Fall Prevention Guide" },
  description:
    "Download the free ReadyNest home safety checklist — 40 items covering every room to identify fall risks before they become emergencies. Serving Bucks County, PA.",
  alternates: { canonical: "https://readynestpa.com/safety-checklist" },
  openGraph: {
    title: "Free Home Safety Checklist | ReadyNest",
    description:
      "40 items. Every room. 10 minutes. Identify the fall risks in your home before they become emergencies. Free from ReadyNest.",
    url: "https://readynestpa.com/safety-checklist",
  },
};

const checklistSections = [
  {
    icon: <Bath size={24} strokeWidth={1.5} />,
    title: "Bathroom",
    items: [
      "Grab bars at tub, shower, and toilet",
      "Non-slip surfaces and bath mats",
      "Adequate lighting at mirror and shower",
      "Door clearance for mobility aids",
    ],
  },
  {
    icon: <ArrowUpDown size={24} strokeWidth={1.5} />,
    title: "Stairs & Hallways",
    items: [
      "Secure railings on both sides of stairs",
      "Lighting at top and bottom of stairs",
      "Contrast strips on stair edges",
      "Clear path free of clutter",
    ],
  },
  {
    icon: <DoorOpen size={24} strokeWidth={1.5} />,
    title: "Entry & Exit",
    items: [
      "Threshold ramps at step entries",
      "Adequate exterior lighting",
      "Lever-style door hardware",
      "Non-slip surface at all entry doors",
    ],
  },
  {
    icon: <Bed size={24} strokeWidth={1.5} />,
    title: "Bedroom & Living Areas",
    items: [
      "Bed height appropriate for easy transfer",
      "Rugs secured or removed",
      "Electrical cords managed and out of walkways",
      "Clear path from bedroom to bathroom",
    ],
  },
];

export default function SafetyChecklistPage() {
  return (
    <>
      {/* ── HERO WITH EMBEDDED FORM ───────────────────────────── */}
      <section className="bg-accent-dark py-20 md:py-28" aria-labelledby="checklist-hero-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-5">
                <span className="w-8 h-px bg-gold" />
                Free Download
              </p>
              <h1
                id="checklist-hero-heading"
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-white leading-tight mb-5"
              >
                The ReadyNest Home Safety Checklist
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed">
                40 items. Every room. 10 minutes. Identify the fall risks in your home before
                they become emergencies.
              </p>
            </div>

            {/* Form card */}
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h2 className="font-serif text-2xl text-charcoal mb-2">
                  Get the Free Checklist
                </h2>
                <p className="text-gray-500 text-sm mb-6 leading-relaxed">
                  Enter your email and we&apos;ll send it right to your inbox.
                </p>
                <LeadMagnetForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT'S INSIDE ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="checklist-contents-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                What&apos;s Inside
              </p>
              <h2
                id="checklist-contents-heading"
                className="font-serif text-4xl md:text-5xl text-charcoal"
              >
                What the Checklist Covers
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {checklistSections.map((section, i) => (
              <AnimatedSection key={section.title} delay={i * 0.09}>
                <div className="bg-beige rounded-2xl p-7 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                      {section.icon}
                    </div>
                    <h3 className="font-serif text-xl text-charcoal">{section.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-gold mt-0.5 shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROFESSIONAL NOTE + CTA ──────────────────────────── */}
      <section
        className="bg-beige border-y border-soft-gray py-20 md:py-24"
        aria-labelledby="checklist-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <ClipboardList size={40} className="text-gold mx-auto mb-5" strokeWidth={1.5} />
            <h2 id="checklist-cta-heading" className="font-serif text-3xl text-charcoal mb-5">
              Ready for a Professional Set of Eyes?
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-5">
              This checklist is a starting point. Many of the hazards it identifies require
              professional installation to fix safely — which is exactly what ReadyNest does.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              Book a free assessment and Slav will walk through your home and give you a
              professional report — free of charge.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Book Free Assessment <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
