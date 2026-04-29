import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: { absolute: "Contact ReadyNest | Book a Free Home Safety Assessment, Bucks County" },
  description:
    "Book a free aging-in-place home safety assessment with Slav in Bucks County, PA. Call 267-717-9119 or fill out the form. We respond within 24 hours — usually the same day.",
  alternates: { canonical: "https://readynestpa.com/contact" },
  openGraph: {
    title: "Contact ReadyNest | Book a Free Home Safety Assessment | Bucks County",
    description:
      "Slav visits your home, walks through every room, and gives you a written safety report — at no cost and no obligation. Serving Bucks County, PA.",
    url: "https://readynestpa.com/contact",
  },
};

// Next.js 15 — searchParams is a Promise
export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const params = await searchParams;
  const defaultService = params.service ?? "";

  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Free Home Safety Assessment
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Book Your Free Assessment
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Slav visits your home, walks through every room, and gives you a written safety
            report — at no cost and no obligation.
          </p>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">

            {/* Form — wider column */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white border border-soft-gray rounded-3xl p-8 md:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl text-charcoal mb-1">Request a Visit</h2>
                  <p className="text-gray-500 text-sm mb-8">
                    We respond within 24 hours — usually the same day.
                  </p>
                  <ContactForm defaultService={defaultService} />
                </div>
              </AnimatedSection>
            </div>

            {/* Sidebar — narrower column */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1}>
                {/* Contact card */}
                <div className="bg-accent-dark rounded-3xl p-8 text-white">
                  <h2 className="font-serif text-2xl mb-6">Contact Info</h2>
                  <ul className="space-y-5">
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                        <Phone size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                          Phone
                        </p>
                        <a
                          href="tel:+12677179119"
                          className="text-white font-medium text-sm hover:text-gold transition-colors"
                          aria-label="Call ReadyNest at 267-717-9119"
                        >
                          267-717-9119
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                        <Mail size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                          Email
                        </p>
                        <a
                          href="mailto:info@readynestpa.com"
                          className="text-white font-medium text-sm hover:text-gold transition-colors"
                          aria-label="Email ReadyNest"
                        >
                          info@readynestpa.com
                        </a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                        <Clock size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                          Hours
                        </p>
                        <p className="text-white font-medium text-sm">
                          Mon–Fri 7 AM–7 PM · Sat 8 AM–4 PM
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                        <Clock size={20} strokeWidth={1.5} />
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">
                          Response Time
                        </p>
                        <p className="text-white font-medium text-sm">Usually same day</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                {/* Service area card */}
                <div className="bg-beige rounded-3xl p-8 border border-soft-gray">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin size={20} className="text-gold shrink-0" />
                    <h3 className="font-serif text-xl text-charcoal">Service Area</h3>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Doylestown, New Hope, Newtown, Buckingham, Plumsteadville, Warrington,
                    Chalfont, Yardley, Richboro, Southampton, Langhorne, and Ottsville.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHAT TO EXPECT ───────────────────────────────────── */}
      <section
        className="bg-beige border-t border-soft-gray py-16 md:py-20"
        aria-labelledby="expect-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2
              id="expect-heading"
              className="font-serif text-3xl text-charcoal mb-8 text-center"
            >
              What to Expect After You Reach Out
            </h2>
          </AnimatedSection>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "Within 24 hours",
                text: "Slav calls or texts to confirm your preferred visit window.",
              },
              {
                step: "Assessment day",
                text: "60–90 minute walk-through — free, no obligation, every room covered.",
              },
              {
                step: "Within 24 hours after",
                text: "Written report emailed to your family contact with findings and recommendations.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border-t-4 border-gold h-full">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">
                    {item.step}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
