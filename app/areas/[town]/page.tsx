import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import ServicesGrid from "@/components/ServicesGrid";
import ContactForm from "@/components/ContactForm";
import { towns, getTown } from "@/lib/towns";

export const dynamicParams = false;

export function generateStaticParams() {
  return towns.map((town) => ({ town: town.slug }));
}

// Next.js 15 — params is a Promise
type Props = { params: Promise<{ town: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) return {};
  const url = `https://readynestpa.com/areas/${town.slug}`;
  return {
    title: { absolute: `Aging-in-Place Home Safety in ${town.name}, PA | ReadyNest` },
    description: town.metaDescription,
    alternates: { canonical: url },
    openGraph: {
      title: `Aging-in-Place Home Safety in ${town.name}, PA | ReadyNest`,
      description: town.metaDescription,
      url,
    },
  };
}

export default async function TownPage({ params }: Props) {
  const { town: slug } = await params;
  const town = getTown(slug);
  if (!town) notFound();

  return (
    <>
      {/* ── Hero ── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Serving {town.name} &amp; Bucks County
          </p>
          <h1 className="font-serif text-4xl md:text-6xl text-charcoal mb-8 leading-tight">
            Aging-in-Place Home Safety in {town.name}, PA
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-gold text-white font-semibold px-7 py-4 rounded-xl hover:bg-[#a07d46] transition-colors"
            >
              Book Free Assessment <ArrowRight size={18} />
            </Link>
            <a
              href="tel:+12677179119"
              className="inline-flex items-center justify-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-7 py-4 rounded-xl hover:border-gold hover:text-gold transition-colors"
              aria-label="Call or text ReadyNest at 267-717-9119"
            >
              <Phone size={18} />
              267-717-9119
            </a>
          </div>
        </div>
      </section>

      {/* ── Intro copy ── */}
      <section className="bg-white py-16 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="space-y-5 text-gray-600 text-lg leading-relaxed">
              {town.intro.map((para) => (
                <p key={para}>{para}</p>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="bg-white pb-20 md:pb-28" aria-labelledby="town-services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
                Our Services
              </p>
              <h2
                id="town-services-heading"
                className="font-serif text-4xl md:text-5xl text-charcoal"
              >
                Home Safety Services in {town.name}
              </h2>
            </div>
          </AnimatedSection>
          <ServicesGrid />
        </div>
      </section>

      {/* ── Contact form ── */}
      <section
        className="bg-accent-dark py-20 md:py-28 scroll-mt-20"
        id="contact"
        aria-labelledby="town-cta-heading"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 id="town-cta-heading" className="font-serif text-4xl md:text-5xl text-white mb-4">
                Book Your Free {town.name} Home Safety Assessment
              </h2>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                No cost, no obligation. We respond within 24 hours — usually the same day.
              </p>
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <ContactForm dark />
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
