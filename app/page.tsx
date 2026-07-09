import type { Metadata } from "next";
import Link from "next/link";
import {
  ShieldCheck,
  DoorOpen,
  ArrowUpDown,
  Trash2,
  Phone,
  ArrowRight,
  BadgeCheck,
  MapPin,
  ClipboardList,
  User,
  Heart,
  Users,
} from "lucide-react";
import ContactForm from "@/components/ContactForm";
import HeroIllustration from "@/components/sections/HeroIllustration";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Aging-in-Place Home Safety Modifications | ReadyNest — Bucks County, PA" },
  description:
    "ReadyNest installs aging-in-place home safety modifications in Bucks County, PA — grab bars, ramps, stair railings, smart home safety. Free home assessment. Call 267-717-9119.",
  alternates: { canonical: "https://readynestpa.com/" },
  openGraph: {
    title: "Aging-in-Place Home Safety | ReadyNest — Bucks County, PA",
    description:
      "Home safety modifications for seniors — grab bars, ramps, stair railings & smart home safety. Personally installed by Slav in Bucks County, PA. Free assessment.",
    url: "https://readynestpa.com/",
  },
};

const services = [
  {
    icon: <ShieldCheck size={28} strokeWidth={1.5} />,
    name: "Bathroom Safety",
    description:
      "Grab bars, walk-in shower conversions, raised toilet seats, and non-slip surfaces — the bathroom is where most falls happen.",
    href: "/services#bathroom-safety",
  },
  {
    icon: <DoorOpen size={28} strokeWidth={1.5} />,
    name: "Entry & Exit Safety",
    description:
      "Threshold ramps, handrails, keyless entry, and exterior lighting so getting in and out of home is confident and safe.",
    href: "/services#entry-exit",
  },
  {
    icon: <ArrowUpDown size={28} strokeWidth={1.5} />,
    name: "Stairs & Hallways",
    description:
      "Double-sided stair railings, improved hallway lighting, contrast strips, and clear path modifications throughout the home.",
    href: "/services#stairs-hallways",
  },
  {
    icon: <Trash2 size={28} strokeWidth={1.5} />,
    name: "Trash Valet",
    description:
      "Weekly curb-and-back trash and recycling service. No heavy lifting, no icy driveways — just taken care of.",
    href: "/services#trash-valet",
  },
];

const trustPoints = [
  {
    icon: <User size={20} strokeWidth={1.5} />,
    title: "One Point of Accountability",
    body: "Slav personally assesses your home and signs off on every job, whether he's the one installing it or one of our vetted local trade partners. One number, one person responsible, start to finish.",
  },
  {
    icon: <BadgeCheck size={20} strokeWidth={1.5} />,
    title: "Fully Insured",
    body: "Licensed and insured in Pennsylvania. Your home and your family are protected from the first visit through final install.",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    title: "Serving Doylestown, New Hope, Newtown + 9 more",
    body: "We're local to Bucks County — always nearby, never sending a crew from hours away.",
  },
  {
    icon: <ClipboardList size={20} strokeWidth={1.5} />,
    title: "Free Home Safety Assessment",
    body: "No pressure, no cost. Slav walks through your home, identifies risks, and gives you a clear plan and honest quote.",
  },
];

const steps = [
  {
    number: "1",
    title: "Free Safety Walk-Through",
    body: "Slav comes to your home, assesses every room for fall risks and mobility challenges, and answers all your questions — at no charge.",
  },
  {
    number: "2",
    title: "Personalized Safety Plan",
    body: "You receive a clear, prioritized list of recommended modifications with upfront pricing. No surprises, no pressure.",
  },
  {
    number: "3",
    title: "Expert Installation",
    body: "Slav installs everything to code with clean, professional results. Most jobs are completed in a single visit.",
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
              <p className="inline-flex items-center gap-2 text-gold text-sm font-semibold tracking-wider uppercase mb-5">
                <span className="w-8 h-px bg-gold" />
                Aging-in-Place Specialists · Bucks County, PA
              </p>
              <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-charcoal leading-[1.05] mb-6">
                Stay Safe.{" "}
                <br className="hidden sm:block" />
                Stay Home.{" "}
                <br className="hidden sm:block" />
                <span className="text-gold">Stay Independent.</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 max-w-xl">
                ReadyNest helps Bucks County families make their parents&apos; homes safer — without the cost or upheaval of a full remodel. One local owner, fair pricing, same-week service.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors text-base"
                >
                  Book Free Assessment
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="tel:+12677179119"
                  className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors text-base"
                  aria-label="Call ReadyNest at 267-717-9119"
                >
                  <Phone size={18} />
                  267-717-9119
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative flex items-center justify-center lg:justify-end">
              <HeroIllustration />
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ────────────────────────────────────────── */}
      <section className="bg-white border-y border-soft-gray py-10" aria-label="Why choose ReadyNest">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point) => (
              <div key={point.title} className="flex flex-col items-start gap-3">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-beige text-gold">
                  {point.icon}
                </div>
                <div>
                  <p className="font-semibold text-charcoal text-sm leading-snug mb-1">
                    {point.title}
                  </p>
                  <p className="text-gray-500 text-xs leading-relaxed">{point.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EMPATHY / WHY IT MATTERS ─────────────────────────── */}
      <section className="bg-soft-gray py-20 md:py-28" aria-labelledby="why-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <AnimatedSection>
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                Why It Matters
              </p>
              <h2 id="why-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                The good news:{" "}
                <span className="text-gold">most home falls are preventable.</span>
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Falls are the leading cause of injury in older adults — but the vast majority happen because of hazards a professional can identify and fix in a single visit. A grab bar in the shower. A railing on both sides of the stairs. Better lighting in a hallway.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                ReadyNest works with older adults and their families throughout Bucks County to address these risks before they become emergencies. Small changes. Real peace of mind.
              </p>
              <Link
                href="/for-families"
                className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
              >
                Information for families <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

            {/* Stat cards */}
            <AnimatedSection delay={0.15}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    stat: "1 in 4",
                    label: "adults 65+ fall each year",
                    followUp: "Most are preventable with targeted home modifications.",
                    source: "Source: CDC",
                  },
                  {
                    stat: "80%",
                    label: "of seniors want to stay in their own home",
                    followUp: "ReadyNest makes that possible — safely and affordably.",
                    source: "Source: AARP",
                  },
                  {
                    stat: "#1",
                    label: "cause of injury death in older adults is falls",
                    followUp: "Grab bars, railings, and better lighting change the odds.",
                    source: "Source: CDC",
                  },
                  {
                    stat: "$50B+",
                    label: "in annual fall-related medical costs",
                    followUp: "Targeted modifications often cost well under $1,000.",
                    source: "Source: CDC",
                  },
                ].map((item) => (
                  <div
                    key={item.stat}
                    className="bg-white rounded-2xl p-6 flex flex-col justify-between min-h-[170px]"
                  >
                    <div>
                      <span className="font-serif text-4xl text-gold leading-none">{item.stat}</span>
                      <p className="text-charcoal text-sm leading-snug mt-2">{item.label}</p>
                      <p className="text-gray-500 text-xs leading-relaxed mt-2">{item.followUp}</p>
                    </div>
                    <p className="text-gray-400 text-xs mt-3">{item.source}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                Our Services
              </p>
              <h2 id="services-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Every Room. Every Risk. Covered.
              </h2>
              <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                From the bathroom floor to the front door, ReadyNest addresses every fall risk and mobility challenge — one trusted installer, start to finish.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.name} delay={i * 0.08}>
                <div className="bg-beige rounded-2xl p-7 card-hover h-full flex flex-col">
                  <div className="text-gold mb-4">{service.icon}</div>
                  <h3 className="font-serif text-xl text-charcoal mb-2">{service.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">{service.description}</p>
                  <Link
                    href={service.href}
                    className="mt-5 inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-2.5 transition-all"
                  >
                    Learn more <ArrowRight size={15} />
                  </Link>
                </div>
              </AnimatedSection>
            ))}

            {/* CTA card */}
            <AnimatedSection delay={services.length * 0.08}>
              <div className="bg-gold rounded-2xl p-7 flex flex-col justify-between min-h-[240px]">
                <div>
                  <h3 className="font-serif text-xl text-white mb-3">Not sure where to start?</h3>
                  <p className="text-white/80 text-sm leading-relaxed">
                    Book a free walk-through. Slav will assess your home room by room and give you a clear, prioritized plan — no cost, no obligation.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex items-center gap-2 bg-white text-gold font-semibold px-5 py-3 rounded-xl text-sm hover:bg-beige transition-colors self-start"
                >
                  Book Free Assessment <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>
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

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="bg-beige py-20 md:py-28" aria-labelledby="process-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-16">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                The Process
              </p>
              <h2 id="process-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
                Simple as 1–2–3
              </h2>
              <p className="text-gray-500 text-lg max-w-xl mx-auto">
                From the first phone call to the final install — a straightforward, low-pressure process designed around you.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className="relative text-center px-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white border-2 border-gold/30 mb-6">
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
              href="/process"
              className="inline-flex items-center gap-2 text-gold font-semibold hover:underline"
            >
              See the full process <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOR SENIORS & FAMILIES ───────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="audience-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-14">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                Who We Serve
              </p>
              <h2 id="audience-heading" className="font-serif text-4xl md:text-5xl text-charcoal">
                For Seniors. For Families.
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {/* For Seniors */}
            <AnimatedSection delay={0.05}>
              <div className="bg-beige rounded-3xl p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center text-gold">
                    <User size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-charcoal">For Seniors</h3>
                </div>
                <p className="text-gray-600 leading-relaxed mb-5">
                  You&apos;ve built a life in your home. You know its rooms, its rhythms, its history. ReadyNest helps you stay there — safely and on your own terms.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Stay in the home you love — no nursing home, no uprooting",
                    "Move through every room with confidence",
                    "Simple modifications that don't look institutional",
                    "Work directly with Slav from first visit to final walkthrough — one face, one number",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:underline text-sm"
                >
                  Book Free Assessment <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>

            {/* For Families */}
            <AnimatedSection delay={0.12}>
              <div className="bg-accent-dark rounded-3xl p-10 h-full flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                    <Heart size={22} strokeWidth={1.5} />
                  </div>
                  <h3 className="font-serif text-2xl text-white">For Families</h3>
                </div>
                <p className="text-gray-400 leading-relaxed mb-5">
                  You worry about your parent&apos;s safety every time you drive home after a visit. ReadyNest gives you a way to act on that worry — practically, quickly, and affordably.
                </p>
                <ul className="space-y-3 mb-8 flex-1">
                  {[
                    "Know their home has been professionally assessed",
                    "Modifications installed quickly — often in one visit",
                    "Clear documentation of what was done and why",
                    "A trusted local contact you can actually call",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-gray-400">
                      <span className="text-gold mt-0.5 shrink-0">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/for-families"
                  className="inline-flex items-center gap-2 text-gold font-semibold hover:underline text-sm"
                >
                  Information for families <ArrowRight size={15} />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ── ABOUT SLAV TEASER ────────────────────────────────── */}
      <section className="bg-soft-gray py-20 md:py-28" aria-labelledby="about-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Headshot placeholder */}
            <AnimatedSection className="flex justify-center lg:justify-start">
              <div className="relative">
                {/* Circular photo placeholder */}
                <div
                  className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-beige border-4 border-gold/20 flex items-center justify-center"
                  aria-label="Photo of Slav — coming soon"
                >
                  <div className="text-center text-gray-400">
                    <Users size={48} strokeWidth={1} className="mx-auto mb-2 text-gold/40" />
                    <p className="text-xs">Photo coming soon</p>
                  </div>
                </div>
                {/* Gold ring decoration */}
                <div className="absolute -inset-3 rounded-full border-2 border-gold/15 pointer-events-none" />
              </div>
            </AnimatedSection>

            {/* Text */}
            <AnimatedSection delay={0.1}>
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
                The Person Behind the Work
              </p>
              <h2 id="about-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-6 leading-tight">
                Hi, I&apos;m Slav.
              </h2>
              <p className="text-gray-600 leading-relaxed mb-8">
                I grew up in Ukraine. I&apos;ve worked in fire safety, electrical, and handyman work across Bucks County. I started ReadyNest to be the person I wish more older people had — local, dependable, fairly priced, and serious about the work. I personally assess every home and I&apos;m on-site for the final walkthrough on every project — no exceptions. For larger jobs, I work with a small, vetted team of local trade partners I&apos;ve used for years, so you still get one accountable person and consistent quality, just with the capacity to take on bigger projects without long wait times.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-6 py-3 rounded-xl hover:bg-gold hover:text-white transition-colors text-sm"
              >
                Meet Slav <ArrowRight size={16} />
              </Link>
            </AnimatedSection>

          </div>
        </div>
      </section>

      {/* ── SAFETY CHECKLIST CTA ─────────────────────────────── */}
      <section className="bg-gold py-16 md:py-20" aria-label="Free safety checklist">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <ClipboardList size={40} className="text-white/80 mx-auto mb-5" strokeWidth={1.5} />
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
              Not ready to call yet? That&apos;s okay.
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Download the free ReadyNest Home Safety Checklist — 40 items to walk through your home and identify the most common fall risks. No email required.
            </p>
            <Link
              href="/safety-checklist"
              className="inline-flex items-center gap-2 bg-white text-gold font-semibold px-8 py-4 rounded-xl hover:bg-beige transition-colors text-base"
            >
              Get the Free Checklist <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────── */}
      <section className="bg-accent-dark py-20 md:py-28" id="contact" aria-labelledby="cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                Get Started
              </p>
              <h2 id="cta-heading" className="font-serif text-4xl md:text-5xl text-white mb-4">
                Book Your Free Home Safety Assessment
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Slav will walk through your home, identify every risk, and give you a clear plan — no cost, no obligation.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <ContactForm dark />

              <div className="mt-8 pt-6 border-t border-white/10 text-center space-y-2">
                <p className="text-gray-400 text-sm">Or reach Slav directly:</p>
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
