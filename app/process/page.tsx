import type { Metadata } from "next";
import Link from "next/link";
import {
  Phone,
  ClipboardList,
  Home,
  FileText,
  Wrench,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Our Process | ReadyNest PA — How Home Safety Modifications Work" },
  description:
    "A clear 5-step process for aging-in-place home safety modifications in Bucks County, PA. Free phone call, in-home assessment, written quote, professional installation, and 30-day follow-up.",
  alternates: { canonical: "https://readynestpa.com/process" },
  openGraph: {
    title: "Our Process | ReadyNest PA — How Home Safety Modifications Work",
    description:
      "No surprises. No pressure. A clear 5-step process designed around you and your family. Free home safety assessment in Bucks County, PA.",
    url: "https://readynestpa.com/process",
  },
};

const steps = [
  {
    number: "1",
    icon: <Phone size={28} strokeWidth={1.5} />,
    title: "Free Phone Call",
    body: "Tell me what you're dealing with — a recent fall, a concern about stairs, or just a general 'I want to make sure mom's home is safe.' We'll talk through the situation and decide if an in-home visit makes sense. There's no charge for this call and no commitment required.",
  },
  {
    number: "2",
    icon: <Home size={28} strokeWidth={1.5} />,
    title: "In-Home Safety Assessment",
    body: "I come to your home and walk through every room — bathroom, hallways, stairs, entries, and common areas. I'm looking for fall risks, mobility challenges, and lighting gaps. This takes about 60–90 minutes. It's free, thorough, and there's no obligation to book anything.",
  },
  {
    number: "3",
    icon: <FileText size={28} strokeWidth={1.5} />,
    title: "Written Quote & Recommendations",
    body: "Within 24 hours, you receive a written report with two things: what I found, and what I recommend. Each recommendation includes a clear price so you can decide what to prioritize. Most families start with the highest-risk items and add more over time.",
  },
  {
    number: "4",
    icon: <Wrench size={28} strokeWidth={1.5} />,
    title: "Professional Installation",
    body: "I install everything myself. No subcontractors, no strangers in your home. Most jobs are completed in a single visit. Everything is installed to code and rated for proper weight loads. I clean up completely before I leave.",
  },
  {
    number: "5",
    icon: <CheckCircle size={28} strokeWidth={1.5} />,
    title: "30-Day Check-In",
    body: "A month after installation, I follow up — by phone or text — to confirm everything is working as expected and that your family member feels confident using the modifications. If anything needs adjustment, I come back at no charge.",
  },
];

export default function ProcessPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            How It Works
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Here&apos;s Exactly What Happens
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            No surprises. No pressure. A clear 5-step process designed around you and your family.
          </p>
        </div>
      </section>

      {/* ── 5-STEP PROCESS ───────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="process-steps-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only" id="process-steps-heading">
            The 5-step ReadyNest process
          </div>

          <div className="space-y-12">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.08}>
                <div className="flex gap-8 items-start">
                  {/* Number + icon column */}
                  <div className="shrink-0 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-beige border-2 border-gold/30 flex items-center justify-center">
                      <span className="font-serif text-3xl text-gold leading-none">
                        {step.number}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="w-px h-12 bg-gold/20 mt-3" aria-hidden="true" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="pt-3 pb-2 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-gold">{step.icon}</span>
                      <h2 className="font-serif text-2xl md:text-3xl text-charcoal">
                        {step.title}
                      </h2>
                    </div>
                    <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                      {step.body}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* Timeline note */}
          <AnimatedSection delay={0.45}>
            <div className="mt-14 bg-beige rounded-2xl px-8 py-6 border border-soft-gray text-center">
              <p className="text-charcoal font-semibold text-lg">
                Most families go from first call to completed installation within one week.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── SAFETY CHECKLIST ─────────────────────────────────── */}
      <section className="bg-beige py-20 md:py-24 border-y border-soft-gray" aria-labelledby="checklist-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
              Not Ready to Call Yet?
            </p>
            <h2
              id="checklist-heading"
              className="font-serif text-4xl md:text-5xl text-charcoal mb-5"
            >
              Start With Our Free Home Safety Checklist
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-2xl mx-auto">
              Before you book anything, download the free ReadyNest Home Safety Checklist — 40
              items that walk you through every room and flag the most common fall risks. Takes
              about 10 minutes. No email required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/safety-checklist"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-7 py-3.5 rounded-xl hover:bg-gold hover:text-white transition-colors"
              >
                <ClipboardList size={18} />
                Get the Free Checklist →
              </Link>
            </div>
            <p className="mt-6 text-gray-500 text-sm">
              Or call Slav directly at{" "}
              <a
                href="tel:+12677179119"
                className="text-gold font-semibold hover:underline"
                aria-label="Call Slav at 267-717-9119"
              >
                267-717-9119
              </a>{" "}
              — no menus, no hold music.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="bg-accent-dark py-20" aria-labelledby="process-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="process-cta-heading"
              className="font-serif text-4xl md:text-5xl text-white mb-8"
            >
              Ready to Start?
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
              >
                Book Free Assessment
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+12677179119"
                className="inline-flex items-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
                aria-label="Call ReadyNest PA at 267-717-9119"
              >
                <Phone size={18} />
                267-717-9119
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
