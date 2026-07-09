import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Phone, Users } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "About Slav | ReadyNest — Aging-in-Place Specialist, Bucks County, PA" },
  description:
    "Meet Slav, the owner of ReadyNest. Licensed and insured aging-in-place specialist personally installing every safety modification in Bucks County, PA.",
  alternates: { canonical: "https://readynestpa.com/about" },
  openGraph: {
    title: "About Slav | ReadyNest — Aging-in-Place Specialist, Bucks County",
    description:
      "One point of accountability. Slav personally assesses and signs off on every job in Bucks County, PA. Licensed and insured.",
    url: "https://readynestpa.com/about",
  },
};

const differentiators = [
  {
    title: "One person does everything",
    body: "Slav installs every modification himself. You're not getting a rotating crew of strangers — you get the same face at assessment and installation.",
  },
  {
    title: "Written reports every time",
    body: "After every assessment, you receive a written summary of findings and recommendations. After every installation, a record of what was done. Everything in writing.",
  },
  {
    title: "No pressure, no upsell",
    body: "The assessment is free. The recommendations are honest. Slav won't suggest a modification you don't need — only what will genuinely reduce risk.",
  },
  {
    title: "Fair, transparent pricing",
    body: "Every quote is itemized and fixed. No hourly surprises. No 'we found more work than expected.' What you see is what you pay.",
  },
];

const serviceAreas = [
  "Doylestown",
  "New Hope",
  "Newtown",
  "Buckingham",
  "Plumsteadville",
  "Warrington",
  "Chalfont",
  "Yardley",
  "Richboro",
  "Southampton",
  "Langhorne",
  "Ottsville",
];

export default function AboutPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            The Person Behind ReadyNest
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">About Slav</h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            One point of accountability. Slav personally assesses every home and signs off on every completed job — no exceptions.
          </p>
        </div>
      </section>

      {/* ── STORY SECTION ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="story-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Headshot placeholder */}
            <AnimatedSection className="flex justify-center md:justify-start">
              {/* TODO: Replace with Slav's headshot photo */}
              <div className="relative">
                <div
                  className="w-64 h-64 md:w-72 md:h-72 rounded-full bg-beige border-4 border-gold/20 flex items-center justify-center"
                  aria-label="Photo of Slav — coming soon"
                >
                  <div className="text-center text-gray-400">
                    <Users
                      size={52}
                      strokeWidth={1}
                      className="mx-auto mb-2 text-gold/40"
                    />
                    <p className="text-xs">Photo coming soon</p>
                  </div>
                </div>
                {/* Gold ring decoration */}
                <div
                  className="absolute -inset-3 rounded-full border-2 border-gold/15 pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </AnimatedSection>

            {/* Story text */}
            <AnimatedSection delay={0.12}>
              <div className="space-y-6 text-gray-600 text-base leading-relaxed pt-4">
                <p>
                  I grew up in Ukraine. When older relatives needed help making their home safer
                  — a grab bar, a stair rail, a ramp at the door — family handled it. There was
                  no business to call. There was no service.
                </p>
                <p>
                  When I came to the United States, I worked in sales for ADT, ran fire safety
                  projects with Oliver Fire Protection, and spent years in handyman and electrical
                  work. I learned how to do this kind of work the right way. But I also saw
                  something: in Bucks County, the help exists, but it&apos;s hard to find. Big
                  remodelers won&apos;t take a $200 job. Handymen are unreliable. The seniors and
                  their families are the ones who lose — left to figure it out alone.
                </p>
                <p>
                  I started ReadyNest to be the person I wish more older people had — local,
                  dependable, fairly priced, and serious about the work. I personally assess
                  every home and I&apos;m on-site for the final walkthrough on every project —
                  no exceptions. For larger jobs, I work with a small, vetted team of local
                  trade partners I&apos;ve used for years, so you still get one accountable
                  person and consistent quality, just with the capacity to take on bigger
                  projects without long wait times. I&apos;m licensed and insured in
                  Pennsylvania. I treat every home like it belongs to someone I care about.
                  Because it does.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── WHAT MAKES US DIFFERENT ──────────────────────────── */}
      <section
        className="bg-beige py-20 md:py-24 border-y border-soft-gray"
        aria-labelledby="different-heading"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2
                id="different-heading"
                className="font-serif text-4xl md:text-5xl text-charcoal"
              >
                What Makes ReadyNest Different
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-6">
            {differentiators.map((item, i) => (
              <AnimatedSection key={item.title} delay={i * 0.09}>
                <div className="bg-white rounded-2xl p-8 border-l-4 border-gold h-full">
                  <h3 className="font-serif text-xl text-charcoal mb-3">{item.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{item.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICE AREA ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24" aria-labelledby="area-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-10">
              <h2
                id="area-heading"
                className="font-serif text-4xl text-charcoal mb-4"
              >
                Serving Bucks County, PA
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {serviceAreas.map((city) => (
                <span
                  key={city}
                  className="inline-flex items-center gap-2 bg-beige rounded-full px-5 py-2 text-sm font-medium text-charcoal border border-soft-gray"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                  {city}
                </span>
              ))}
            </div>
            <p className="text-center text-gray-500 text-sm">
              Not sure if we cover your area? Call{" "}
              <a
                href="tel:+12677179119"
                className="text-gold font-semibold hover:underline"
                aria-label="Call ReadyNest at 267-717-9119"
              >
                267-717-9119
              </a>
              .
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="bg-accent-dark py-20" aria-labelledby="about-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2
              id="about-cta-heading"
              className="font-serif text-4xl md:text-5xl text-white mb-8"
            >
              Want to Work with Slav?
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
                aria-label="Call ReadyNest at 267-717-9119"
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
