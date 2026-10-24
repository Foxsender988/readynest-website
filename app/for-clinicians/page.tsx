import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Mail, CheckCircle, CalendarCheck } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { PA_HIC_NUMBER } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "For OTs, PTs & Discharge Planners | ReadyNest — Home Modifications, Bucks County, PA" },
  description:
    "Refer a patient for grab bars, rails, ramps, raised toilets, or a tub-to-shower conversion. Flat pricing, installed to clinical standards, and scheduled around discharge. Serving Bucks County, PA.",
  alternates: { canonical: "https://readynestpa.com/for-clinicians" },
  openGraph: {
    title: "For OTs, PTs & Discharge Planners | ReadyNest",
    description:
      "A simple referral process for home safety modifications in Bucks County, PA — flat pricing, installed to clinical standards, done before discharge.",
    url: "https://readynestpa.com/for-clinicians",
  },
};

const pricing = [
  { item: "Single grab bar installed", price: "$225" },
  { item: "Two grab bars (same visit)", price: "$375" },
  { item: "Stair rails, threshold ramps, raised toilets", price: "Flat quote" },
  { item: "Tub-to-shower conversion", price: "From $7,500" },
];

const standards = [
  "Anchored into studs or added blocking — never drywall anchors alone",
  "Hardware rated for 250+ lb loads",
  "ADA-informed mounting heights and placement",
  `PA-registered home improvement contractor (PA HIC #${PA_HIC_NUMBER}), fully insured`,
  "Every job inspected by the owner before sign-off",
];

const steps = [
  {
    title: "Send the referral",
    body: "Text or email the patient's name, phone number, and discharge date.",
  },
  {
    title: "Same-day family call",
    body: "We call the family the same day to understand the home and what the patient needs.",
  },
  {
    title: "Confirmation text",
    body: "You get a confirmation text with the scheduled visit, so you know it's handled.",
  },
];

export default function ForCliniciansPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            For OTs, PTs &amp; Discharge Planners
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-5 leading-tight">
            Home Modifications, Done Right — and Done Before Discharge
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            A simple referral process, flat pricing, and installations built to the standards
            you&apos;d want in your own patient&apos;s home.
          </p>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section className="bg-white py-20 md:py-24" aria-labelledby="clinician-pricing-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="clinician-pricing-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-3 text-center"
            >
              Flat, Simple Pricing
            </h2>
            <p className="text-gray-500 text-center mb-10 leading-relaxed">
              Labor, travel, hardware, and cleanup included. No hourly surprises for the family.
            </p>
            <div className="overflow-x-auto rounded-2xl border border-soft-gray">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-charcoal text-white text-left">
                    <th className="px-5 py-3.5 font-semibold">Service</th>
                    <th className="px-5 py-3.5 font-semibold text-right">Price</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing.map((row, i) => (
                    <tr
                      key={row.item}
                      className={`border-t border-soft-gray ${i % 2 === 0 ? "bg-white" : "bg-beige/50"}`}
                    >
                      <td className="px-5 py-4 text-charcoal">{row.item}</td>
                      <td className="px-5 py-4 text-gold font-semibold text-right whitespace-nowrap">
                        {row.price}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Installed to Clinical Standards ── */}
      <section className="bg-soft-gray py-20 md:py-24" aria-labelledby="standards-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="standards-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-8 text-center"
            >
              Installed to Clinical Standards
            </h2>
            <ul className="space-y-4">
              {standards.map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-600">
                  <CheckCircle size={20} className="text-gold shrink-0 mt-0.5" strokeWidth={1.8} />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Done Before Discharge ── */}
      <section className="bg-white py-16 md:py-20" aria-labelledby="discharge-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="bg-gold/10 border border-gold/25 rounded-2xl px-6 py-7 flex items-start gap-4">
              <CalendarCheck size={28} className="text-gold shrink-0 mt-1" strokeWidth={1.5} />
              <div>
                <h2 id="discharge-heading" className="font-serif text-2xl text-charcoal mb-2">
                  Done Before Discharge
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  Give us the discharge date with the referral and we&apos;ll schedule the work
                  around it, so the home is ready when your patient comes back.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Referral process ── */}
      <section className="bg-beige py-20 md:py-24" aria-labelledby="referral-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="referral-heading"
              className="font-serif text-3xl md:text-4xl text-charcoal mb-12 text-center"
            >
              How to Refer
            </h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {steps.map((step, i) => (
              <AnimatedSection key={step.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 h-full">
                  <div className="w-10 h-10 rounded-full bg-gold text-white flex items-center justify-center font-semibold mb-4">
                    {i + 1}
                  </div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-accent-dark py-20" aria-labelledby="clinician-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 id="clinician-cta" className="font-serif text-4xl md:text-5xl text-white mb-4">
              Send a Referral
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              Patient name, phone number, and discharge date is all we need to get started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+12677179119"
                className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
                aria-label="Call or text ReadyNest at 267-717-9119"
              >
                <Phone size={16} />
                Call or text 267-717-9119
              </a>
              <a
                href="mailto:info@readynestpa.com"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
              >
                <Mail size={16} />
                info@readynestpa.com
              </a>
            </div>
            <p className="mt-8">
              <Link
                href="/services"
                className="text-gold text-sm font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                See full service pricing <ArrowRight size={14} />
              </Link>
            </p>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
