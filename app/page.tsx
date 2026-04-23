import type { Metadata } from "next";
import Link from "next/link";
import {
  Paintbrush,
  Sparkles,
  Trash2,
  Wrench,
  Wind,
  PackageCheck,
  Phone,
  CheckCircle,
  Clock,
  MapPin,
  Star,
  ArrowRight,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroIllustration from "@/components/sections/HeroIllustration";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: "ReadyNest — Home Prep Made Simple | Bucks County, PA",
  description:
    "ReadyNest offers professional home prep services in Bucks County, PA — painting, deep cleaning, junk removal & repairs. Get your home market-ready in days. Call 267-717-9119.",
  alternates: { canonical: "https://readynestpa.com/" },
  openGraph: {
    title: "ReadyNest — Home Prep Made Simple | Bucks County, PA",
    description:
      "Professional home preparation services in Bucks County, PA. Painting, cleaning, junk removal & repairs. Your home, market-ready in days.",
    url: "https://readynestpa.com/",
  },
};

const services = [
  {
    icon: <Paintbrush size={28} strokeWidth={1.5} />,
    name: "Painting Touch-Ups",
    description: "Interior wall repairs and fresh coats to brighten every room",
  },
  {
    icon: <Sparkles size={28} strokeWidth={1.5} />,
    name: "Deep Cleaning",
    description: "Top-to-bottom cleaning that makes your home sparkle for showings or move-in",
  },
  {
    icon: <Trash2 size={28} strokeWidth={1.5} />,
    name: "Junk Removal",
    description: "Garage cleanouts, furniture removal, and haul-away so you don't lift a finger",
  },
  {
    icon: <Wrench size={28} strokeWidth={1.5} />,
    name: "Minor Repairs",
    description: "Drywall patches, fixture replacements, squeaky doors, and handyman tasks",
  },
  {
    icon: <Wind size={28} strokeWidth={1.5} />,
    name: "Exterior Cleaning",
    description: "Power washing driveways, siding, decks, and patios for instant curb appeal",
  },
  {
    icon: <PackageCheck size={28} strokeWidth={1.5} />,
    name: "Move-Out Prep",
    description: "Full turnover service: clean, patch, paint, and prep for the next chapter",
  },
];

const trustPoints = [
  {
    icon: <Star size={22} strokeWidth={1.5} />,
    title: "One Point of Contact",
    body: "No juggling multiple contractors. One call, one team, one invoice.",
  },
  {
    icon: <CheckCircle size={22} strokeWidth={1.5} />,
    title: "Transparent Pricing",
    body: "Upfront quotes with no hidden fees. Know exactly what you're paying.",
  },
  {
    icon: <Clock size={22} strokeWidth={1.5} />,
    title: "Fast Turnaround",
    body: "Most homes are market-ready within 3–5 business days.",
  },
  {
    icon: <MapPin size={22} strokeWidth={1.5} />,
    title: "Bucks County Local",
    body: "Based in Doylestown. We know the market and we're always nearby.",
  },
];

const steps = [
  {
    number: "1",
    title: "Book a Walk-Through",
    body: "Call or fill out our form. We'll schedule a free walk-through within 48 hours.",
  },
  {
    number: "2",
    title: "Get Your Custom Plan",
    body: "We assess your home and deliver a clear, all-inclusive quote — no surprises.",
  },
  {
    number: "3",
    title: "We Handle Everything",
    body: "Our vetted crews get to work. You get updates and a move-ready home.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative hero-pattern overflow-hidden py-20 md:py-28 lg:py-36">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="relative z-10">
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-6">
                Your Home.{" "}
                <span className="text-gold">Ready.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                ReadyNest handles the full prep — painting, cleaning, repairs, and junk removal — so your home is move-in or market-ready without the stress.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors text-base"
                >
                  Get a Free Quote
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+12677179119"
                  className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors text-base"
                  aria-label="Call ReadyNest at 267-717-9119"
                >
                  <Phone size={18} />
                  Call 267-717-9119
                </a>
              </div>
            </div>

            {/* Hero Illustration */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ──────────────────────────────────── */}
      <section className="bg-soft-gray py-20 md:py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">What We Do</p>
              <h2 id="services-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Everything Your Home Needs
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From painting touch-ups to full property turnovers — one team, one call, zero stress.
                Serving homeowners and realtors throughout Bucks County, PA.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.name} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-7 card-hover h-full flex flex-col">
                  <div className="text-gold mb-4">{service.icon}</div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                  <Link
                    href="/services"
                    className="mt-5 inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-2.5 transition-all"
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-7 py-3.5 rounded-xl hover:bg-gold hover:text-white transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="how-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">The Process</p>
              <h2 id="how-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Simple as 1-2-3
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                Getting your home ready for the market — or for move-in — has never been easier.
              </p>
            </div>
          </AnimatedSection>

          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-px bg-gradient-to-r from-transparent via-soft-gray to-transparent" aria-hidden="true" />

            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className="relative text-center px-6">
                  {/* Step number */}
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-beige border-2 border-gold/30 mb-6">
                    <span className="font-serif text-4xl text-gold leading-none">{step.number}</span>
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal mb-3">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
            >
              See the full process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── TRUST SECTION ──────────────────────────────────────── */}
      <section className="bg-beige py-20 md:py-28" aria-labelledby="trust-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">Why ReadyNest</p>
              <h2 id="trust-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Why Homeowners &amp; Realtors Choose ReadyNest
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                We built ReadyNest because home prep shouldn&apos;t be complicated. One team, one call, one result — a home you&apos;re proud of.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {trustPoints.map((point, i) => (
              <AnimatedSection key={point.title} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-8 border-l-4 border-gold card-hover h-full">
                  <div className="text-gold mb-4">{point.icon}</div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{point.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{point.body}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA / CONTACT SECTION ──────────────────────────────── */}
      <section className="bg-accent-dark py-20 md:py-28" id="contact" aria-labelledby="cta-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">Get Started</p>
              <h2 id="cta-heading" className="font-serif text-4xl md:text-5xl text-white mb-4">
                Ready to Get Your Nest Ready?
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Whether you&apos;re selling, buying, or turning over a property — we make it easy.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <ContactForm dark />

              <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-2">
                <p className="text-gray-400 text-sm">Or reach us directly:</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="tel:+12677179119"
                    className="flex items-center gap-2 text-gold font-semibold hover:text-white transition-colors"
                    aria-label="Call ReadyNest"
                  >
                    <Phone size={16} />
                    267-717-9119
                  </a>
                  <span className="hidden sm:block text-white/20">|</span>
                  <a
                    href="mailto:info@readynestpa.com"
                    className="text-gold font-semibold hover:text-white transition-colors"
                    aria-label="Email ReadyNest"
                  >
                    info@readynestpa.com
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
