import type { Metadata } from "next";
import Link from "next/link";
import { Phone, ArrowRight, CalendarCheck, FileText, HardHat, Star } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: "How It Works | ReadyNest — Home Prep in 3 Simple Steps",
  description:
    "See how ReadyNest makes home prep effortless in Bucks County, PA. Book a walk-through, review your custom plan, and we handle everything. No stress, no surprises.",
  alternates: { canonical: "https://readynestpa.com/how-it-works" },
  openGraph: {
    title: "How It Works | ReadyNest — Home Prep in 3 Simple Steps",
    description:
      "Book a walk-through, get a clear plan, and we handle the rest. Home prep made simple in Bucks County, PA.",
    url: "https://readynestpa.com/how-it-works",
  },
};

const steps = [
  {
    number: "01",
    icon: <CalendarCheck size={32} strokeWidth={1.4} />,
    title: "Book a Walk-Through",
    summary: "Free, no-obligation. Scheduled within 48 hours.",
    detail:
      "Call us at 267-717-9119 or fill out the form on our website. We'll schedule a free, no-obligation walk-through within 48 hours. We'll tour your home together, discuss your goals — selling? moving in? turning over a rental? — and identify exactly what needs attention. No sales pressure, just an honest assessment.",
    bullets: [
      "Free walk-through with no obligation",
      "Scheduled within 48 hours of your call or form submission",
      "We visit your home in person — no guessing from photos",
      "Discuss your timeline, goals, and must-haves",
    ],
  },
  {
    number: "02",
    icon: <FileText size={32} strokeWidth={1.4} />,
    title: "Review Your Custom Plan",
    summary: "Clear, itemized quote within 24 hours of the walk-through.",
    detail:
      "Within 24 hours of the walk-through, you'll receive a clear, itemized proposal. Every service is spelled out — no vague line items, no surprise fees at the end. You'll know exactly what's being done and exactly what it costs. You approve the plan, pick your start date, and we handle the rest. Need to adjust scope? We work with you until it's right.",
    bullets: [
      "Itemized quote with no hidden fees or vague line items",
      "Delivered within 24 hours of the walk-through",
      "You choose your start date and set the timeline",
      "Easy scope adjustments before work begins",
    ],
  },
  {
    number: "03",
    icon: <HardHat size={32} strokeWidth={1.4} />,
    title: "We Get It Done",
    summary: "Vetted crews, progress updates, and a final walkthrough.",
    detail:
      "Our vetted local crews handle all the work — painting, cleaning, repairs, hauling — with care and professionalism. You get progress updates along the way so you're never in the dark. When we're done, we do a final walkthrough together to make sure everything meets the ReadyNest standard. If anything isn't right, we fix it before we leave.",
    bullets: [
      "Vetted, professional local crews on every job",
      "Progress updates throughout the project",
      "Final walkthrough before we consider the job complete",
      "We don't leave until you're satisfied",
    ],
  },
];

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">The Process</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Home Prep in 3 Simple Steps
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            From first call to final walkthrough — ReadyNest makes getting your home ready for the market or move-in completely stress-free.
          </p>
        </div>
      </section>

      {/* Steps — vertical timeline */}
      <section className="py-20 md:py-28 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Vertical timeline line (desktop) */}
          <div
            className="hidden md:block absolute left-[2.75rem] top-8 bottom-8 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-16 md:space-y-20">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.1}>
                <div className="md:grid md:grid-cols-[5.5rem_1fr] gap-8 items-start">
                  {/* Number + Icon */}
                  <div className="flex md:flex-col items-center gap-4 md:gap-3 mb-6 md:mb-0">
                    <div className="relative z-10 flex-shrink-0 w-[5.5rem] h-[5.5rem] rounded-2xl bg-gold flex flex-col items-center justify-center shadow-md shadow-gold/20">
                      <span className="text-white font-serif text-xl leading-none">{step.number}</span>
                      <div className="text-white/80 mt-1">{step.icon}</div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white border border-soft-gray rounded-3xl p-8 shadow-sm">
                    <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-2">{step.summary}</p>
                    <h2 className="font-serif text-3xl text-charcoal mb-4">{step.title}</h2>
                    <p className="text-gray-600 text-base leading-relaxed mb-6">{step.detail}</p>
                    <ul className="space-y-2.5">
                      {step.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-sm text-gray-500">
                          <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center">
                            <svg width="10" height="8" viewBox="0 0 10 8" fill="none" aria-hidden="true">
                              <path d="M1 4L3.5 6.5L9 1" stroke="#B8975A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </span>
                          {b}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* What Happens After */}
      <section className="bg-beige py-16 md:py-20 border-y border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="flex items-start gap-5">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold">
                <Star size={26} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="font-serif text-3xl text-charcoal mb-4">What Happens After?</h2>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  You get a move-ready home, a single invoice, and zero headaches. Whether it&apos;s a listing that wows buyers or a move-in that feels like home from day one — we deliver on the promise.
                </p>
                <p className="text-gray-600 text-base leading-relaxed">
                  Many of our clients are realtors who rely on ReadyNest to turn properties around quickly and consistently. Others are homeowners who just want the process to be simple. Whatever your situation, we treat every home — and every client — like it matters. Because it does.
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-accent-dark py-20" aria-labelledby="hiw-cta">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="hiw-cta" className="font-serif text-4xl text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            Book your free walk-through today. We&apos;ll have a plan in your hands within 24 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Book a Walk-Through <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+12677179119"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 text-white font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
            >
              <Phone size={18} />
              Call 267-717-9119
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
