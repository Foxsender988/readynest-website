import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Heart, Shield, Zap } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: "About ReadyNest | Local Home Prep Services in Doylestown, PA",
  description:
    "ReadyNest is a locally-owned home prep company founded in Doylestown, PA, serving Bucks County homeowners and realtors. Learn our story, values, and service area.",
  alternates: { canonical: "https://readynestpa.com/about" },
  openGraph: {
    title: "About ReadyNest | Local Home Prep in Doylestown, PA",
    description:
      "Founded in Doylestown, PA by Slav. ReadyNest handles all your home prep so you don't have to juggle contractors. Serving all of Bucks County.",
    url: "https://readynestpa.com/about",
  },
};

const values = [
  {
    icon: <Zap size={24} strokeWidth={1.5} />,
    title: "Simplicity",
    body: "One call covers everything. No juggling contractors, no multiple invoices, no coordination headaches.",
  },
  {
    icon: <Shield size={24} strokeWidth={1.5} />,
    title: "Transparency",
    body: "Clear pricing, honest timelines, and no surprises at the end. What you see in the quote is what you pay.",
  },
  {
    icon: <Heart size={24} strokeWidth={1.5} />,
    title: "Quality",
    body: "Vetted crews, thorough walkthroughs, and a standard we stand behind — every time, every home.",
  },
];

const serviceAreas = [
  "Doylestown",
  "Warrington",
  "New Hope",
  "Newtown",
  "Chalfont",
  "Warminster",
  "Lansdale",
  "Perkasie",
  "Quakertown",
  "Solebury",
  "Plumstead",
  "Buckingham",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">Our Story</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            About ReadyNest
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            A local Bucks County team built to make home prep simple, honest, and stress-free — for homeowners and realtors alike.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Story Text */}
            <AnimatedSection>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-6 gold-underline pb-3">
                  Why We Built ReadyNest
                </h2>
                <div className="space-y-5 text-gray-600 text-base leading-relaxed">
                  <p>
                    ReadyNest was founded by Slav in Doylestown, PA with one mission: make home prep simple. After seeing homeowners and realtors struggle to coordinate painters, cleaners, handymen, and haulers — all while juggling a sale or move — ReadyNest was built to be the single point of contact that handles it all.
                  </p>
                  <p>
                    The problem was never a shortage of good tradespeople. It was the coordination. The scheduling conflicts, the missed callbacks, the &ldquo;you need to hire a separate guy for that.&rdquo; We believed there had to be a better way — and we built it.
                  </p>
                  <p>
                    We&apos;re not a franchise. We&apos;re not a faceless app. We&apos;re a local Bucks County team that knows this market, works with trusted local crews, and treats every home like it&apos;s our own. When you call ReadyNest, you get a real person who knows your home, your timeline, and your goals.
                  </p>
                  <p>
                    Today, ReadyNest serves homeowners, realtors, landlords, and property managers throughout Doylestown and surrounding Bucks County communities. We&apos;re proud of the trust our neighbors have placed in us — and we earn it every day.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            {/* Visual accent block */}
            <AnimatedSection delay={0.15}>
              <div className="relative">
                {/* Decorative SVG illustration */}
                <div className="bg-beige rounded-3xl p-10 text-center">
                  <svg viewBox="0 0 240 240" className="w-48 h-48 mx-auto mb-6" aria-hidden="true" fill="none">
                    {/* Simplified house + person */}
                    <circle cx="120" cy="120" r="110" fill="white" opacity="0.7" />
                    {/* House */}
                    <rect x="72" y="128" width="96" height="72" rx="4" fill="#4A4A4A" />
                    <polygon points="62,132 120,76 178,132" fill="#B8975A" />
                    <rect x="98" y="160" width="24" height="40" rx="2" fill="#B8975A" opacity="0.85" />
                    <rect x="83" y="144" width="22" height="20" rx="2" fill="white" opacity="0.8" />
                    <rect x="135" y="144" width="22" height="20" rx="2" fill="white" opacity="0.8" />
                    {/* Person silhouette */}
                    <circle cx="186" cy="108" r="14" fill="#B8975A" opacity="0.7" />
                    <path d="M174 152 Q186 130 198 152" fill="#B8975A" opacity="0.7" />
                    {/* Checkmark badge */}
                    <circle cx="58" cy="100" r="16" fill="#B8975A" />
                    <path d="M51 100 L56 106 L66 92" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <p className="font-serif text-2xl text-charcoal mb-2">Founded in Doylestown, PA</p>
                  <p className="text-gray-500 text-sm">Serving all of Bucks County</p>
                </div>

                {/* Stat cards */}
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="bg-accent-dark rounded-2xl p-5 text-center">
                    <p className="font-serif text-3xl text-gold mb-1">48hrs</p>
                    <p className="text-gray-400 text-xs">Walk-through scheduled</p>
                  </div>
                  <div className="bg-accent-dark rounded-2xl p-5 text-center">
                    <p className="font-serif text-3xl text-gold mb-1">3–5</p>
                    <p className="text-gray-400 text-xs">Days to market-ready</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-beige py-20 md:py-24 border-y border-soft-gray" aria-labelledby="values-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <h2 id="values-heading" className="font-serif text-4xl text-charcoal mb-4">
                What We Stand For
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Three principles that guide every job, every crew, every home.
              </p>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center card-hover h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/10 text-gold mb-5">
                    {value.icon}
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="py-20 md:py-24" aria-labelledby="area-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <MapPin size={24} className="text-gold" />
                  <h2 id="area-heading" className="font-serif text-3xl md:text-4xl text-charcoal">
                    Proudly Serving Bucks County
                  </h2>
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">
                  We&apos;re based in Doylestown and serve communities throughout Bucks County. If you&apos;re nearby and need home prep services, we&apos;re available. Not sure if we cover your area? Just call — we&apos;ll let you know.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-lg hover:bg-[#a07d46] transition-colors"
                >
                  Check Your Area <ArrowRight size={16} />
                </Link>
              </div>
              <div>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceAreas.map((area) => (
                    <div
                      key={area}
                      className="flex items-center gap-2 bg-beige rounded-xl px-4 py-3 text-sm font-medium text-charcoal"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                      {area}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark py-20" aria-labelledby="about-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="about-cta" className="font-serif text-4xl text-white mb-4">
            Let&apos;s Get Your Home Ready
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Reach out today and we&apos;ll schedule a free walk-through — no pressure, just a plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Contact ReadyNest <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+12677179119"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
            >
              Call 267-717-9119
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
