import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Tag } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

// TODO: Build out full resources/blog section. Add more articles over time.

export const metadata: Metadata = {
  title: { absolute: "Home Safety Resources | ReadyNest — Fall Prevention Guides, Bucks County, PA" },
  description:
    "Practical guides for older adults and their families — fall prevention, aging-in-place planning, and home safety resources from ReadyNest in Bucks County.",
  alternates: { canonical: "https://readynestpa.com/resources" },
  openGraph: {
    title: "Home Safety Resources | ReadyNest",
    description:
      "Practical guides for older adults and their families — fall prevention, aging-in-place planning, and more. Bucks County, PA.",
    url: "https://readynestpa.com/resources",
  },
};

export default function ResourcesPage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="bg-beige py-16 md:py-24 border-b border-soft-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-4">
            Guides & Articles
          </p>
          <h1 className="font-serif text-5xl md:text-6xl text-charcoal mb-5">
            Home Safety Resources
          </h1>
          <p className="text-gray-500 text-xl max-w-2xl mx-auto leading-relaxed">
            Practical guides for older adults and their families — fall prevention,
            aging-in-place planning, and more.
          </p>
        </div>
      </section>

      {/* ── ARTICLE GRID ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28" aria-labelledby="articles-heading">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="sr-only" id="articles-heading">
            Articles and guides
          </div>

          {/* Placeholder article card */}
          <AnimatedSection>
            <article className="bg-white rounded-2xl overflow-hidden border border-soft-gray shadow-sm max-w-xl">
              {/* Article thumbnail placeholder */}
              <div className="bg-beige aspect-video flex items-center justify-center border-b border-soft-gray">
                {/* TODO: Replace with actual article thumbnail */}
                <p className="text-gray-400 text-xs">Article image coming soon</p>
              </div>

              <div className="p-7">
                {/* Category + date */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center gap-1.5 bg-gold/10 text-gold text-xs font-semibold px-3 py-1 rounded-full">
                    <Tag size={11} />
                    Fall Prevention
                  </span>
                  <span className="text-gray-400 text-xs">Coming soon</span>
                </div>

                <h2 className="font-serif text-2xl text-charcoal mb-3 leading-snug">
                  10 Warning Signs Your Parent&apos;s Home Needs a Safety Assessment
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">
                  What to look for during a family visit — and what to do if you spot a risk.
                </p>

                {/* TODO: Link to actual article when published */}
                <Link
                  href="#"
                  className="inline-flex items-center gap-1.5 text-gold text-sm font-medium hover:gap-2.5 transition-all"
                  aria-label="Read article: 10 Warning Signs Your Parent's Home Needs a Safety Assessment (coming soon)"
                >
                  Read Article → <ArrowRight size={14} />
                </Link>
              </div>
            </article>
          </AnimatedSection>
        </div>
      </section>

      {/* ── BOTTOM CTA ───────────────────────────────────────── */}
      <section className="bg-gold py-16 md:py-20" aria-labelledby="resources-cta-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <p className="text-white/80 text-sm font-semibold tracking-wider uppercase mb-4">
              Skip the Research
            </p>
            <h2
              id="resources-cta-heading"
              className="font-serif text-3xl md:text-4xl text-white mb-5"
            >
              Want a professional assessment instead?
            </h2>
            <p className="text-white/85 text-lg mb-8 max-w-xl mx-auto leading-relaxed">
              Slav will walk through your home, identify every risk, and give you a clear
              written report — free of charge, no obligation.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-white text-gold font-semibold px-8 py-4 rounded-xl hover:bg-beige transition-colors text-base"
            >
              Book Free Assessment
              <ArrowRight size={18} />
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
