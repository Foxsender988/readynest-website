import type { Metadata } from "next";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import AnimatedSection from "@/components/sections/AnimatedSection";

export const metadata: Metadata = {
  title: "Contact ReadyNest | Get a Free Home Prep Quote | Bucks County, PA",
  description:
    "Get a free home prep quote from ReadyNest. Call 267-717-9119 or fill out our form. We serve Doylestown, Bucks County, PA. Walk-throughs scheduled within 48 hours.",
  alternates: { canonical: "https://readynestpa.com/contact" },
  openGraph: {
    title: "Contact ReadyNest | Free Home Prep Quote | Bucks County, PA",
    description:
      "Contact ReadyNest for a free walk-through and quote. Call 267-717-9119 or send us a message. Serving Doylestown and all of Bucks County, PA.",
    url: "https://readynestpa.com/contact",
  },
};

const contactDetails = [
  {
    icon: <Phone size={20} strokeWidth={1.5} />,
    label: "Phone",
    value: "267-717-9119",
    href: "tel:+12677179119",
    ariaLabel: "Call ReadyNest at 267-717-9119",
  },
  {
    icon: <Mail size={20} strokeWidth={1.5} />,
    label: "Email",
    value: "info@readynestpa.com",
    href: "mailto:info@readynestpa.com",
    ariaLabel: "Email ReadyNest",
  },
  {
    icon: <MapPin size={20} strokeWidth={1.5} />,
    label: "Service Area",
    value: "Doylestown, PA & Bucks County",
    href: null,
    ariaLabel: null,
  },
  {
    icon: <Clock size={20} strokeWidth={1.5} />,
    label: "Business Hours",
    value: "Monday–Saturday, 7 AM – 6 PM",
    href: null,
    ariaLabel: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">Free Walk-Through</p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Get In Touch
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Ready to get your home market-ready? Fill out the form below or give us a call. We&apos;ll have a walk-through scheduled within 48 hours.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form — wider column */}
            <div className="lg:col-span-3">
              <AnimatedSection>
                <div className="bg-white border border-soft-gray rounded-3xl p-8 md:p-10 shadow-sm">
                  <h2 className="font-serif text-2xl text-charcoal mb-2">Send Us a Message</h2>
                  <p className="text-gray-500 text-sm mb-8">
                    We&apos;ll respond within one business day — usually same day.
                  </p>
                  <ContactForm />
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info — narrower column */}
            <div className="lg:col-span-2 space-y-6">
              <AnimatedSection delay={0.1}>
                {/* Contact Card */}
                <div className="bg-accent-dark rounded-3xl p-8 text-white">
                  <h2 className="font-serif text-2xl mb-6">Contact Info</h2>
                  <ul className="space-y-5">
                    {contactDetails.map((detail) => (
                      <li key={detail.label} className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-gold/15 flex items-center justify-center text-gold">
                          {detail.icon}
                        </div>
                        <div>
                          <p className="text-gray-400 text-xs uppercase tracking-wide mb-0.5">{detail.label}</p>
                          {detail.href ? (
                            <a
                              href={detail.href}
                              className="text-white font-medium text-sm hover:text-gold transition-colors"
                              aria-label={detail.ariaLabel ?? undefined}
                            >
                              {detail.value}
                            </a>
                          ) : (
                            <p className="text-white font-medium text-sm">{detail.value}</p>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.15}>
                {/* Quick CTA */}
                <div className="bg-beige rounded-3xl p-8 border border-soft-gray">
                  <h3 className="font-serif text-xl text-charcoal mb-3">Prefer to Call?</h3>
                  <p className="text-gray-500 text-sm mb-5 leading-relaxed">
                    Speak directly with our team — no menus, no hold music. We pick up.
                  </p>
                  <a
                    href="tel:+12677179119"
                    className="flex items-center justify-center gap-2 w-full bg-gold text-white font-semibold px-5 py-3.5 rounded-xl hover:bg-[#a07d46] transition-colors text-sm"
                    aria-label="Call ReadyNest now"
                  >
                    <Phone size={16} />
                    Call 267-717-9119
                  </a>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                {/* Map placeholder */}
                <div className="rounded-3xl overflow-hidden border border-soft-gray bg-beige aspect-video flex items-center justify-center">
                  {/*
                    TODO: Replace this placeholder with a Google Maps embed.
                    Coordinates for Doylestown, PA: 40.3101, -75.1299
                    Example iframe:
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3042...!2d-75.1299!3d40.3101..."
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="ReadyNest location in Doylestown, PA"
                    />
                  */}
                  <div className="text-center p-6">
                    <MapPin size={32} className="text-gold mx-auto mb-3" />
                    <p className="font-serif text-lg text-charcoal mb-1">Doylestown, PA</p>
                    <p className="text-gray-500 text-sm">Bucks County, Pennsylvania</p>
                    <a
                      href="https://maps.google.com/?q=Doylestown,PA"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-gold text-xs font-medium underline hover:no-underline"
                    >
                      Open in Google Maps
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ-style reassurance */}
      <section className="bg-beige border-t border-soft-gray py-16" aria-labelledby="contact-faq">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <h2 id="contact-faq" className="font-serif text-3xl text-charcoal mb-8 text-center">
              What to Expect After You Reach Out
            </h2>
          </AnimatedSection>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                step: "Within 24 hours",
                text: "We'll respond to your message or form submission and confirm your walk-through window.",
              },
              {
                step: "Within 48 hours",
                text: "A member of the ReadyNest team visits your home for a free, no-obligation walk-through.",
              },
              {
                step: "Within 24 hrs after",
                text: "You receive an itemized quote with clear pricing and a proposed start date. You decide if you want to move forward.",
              },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={i * 0.08}>
                <div className="bg-white rounded-2xl p-6 border-t-4 border-gold card-hover h-full">
                  <p className="text-gold text-xs font-semibold uppercase tracking-wider mb-3">{item.step}</p>
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
