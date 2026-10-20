import { Star, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import { GOOGLE_REVIEWS_URL } from "@/lib/site";

// TODO: Replace these placeholders with real client reviews (copied from Google, with the
// client's permission). Use first name + last initial and town only. Don't publish until filled in.
const reviews = [
  {
    quote: "[Placeholder — paste a real client review here.]",
    name: "[First name L.]",
    town: "[Town]",
  },
  {
    quote: "[Placeholder — paste a real client review here.]",
    name: "[First name L.]",
    town: "[Town]",
  },
  {
    quote: "[Placeholder — paste a real client review here.]",
    name: "[First name L.]",
    town: "[Town]",
  },
];

export default function Reviews() {
  return (
    <section className="bg-beige py-20 md:py-28" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
              Reviews
            </p>
            <h2 id="reviews-heading" className="font-serif text-4xl md:text-5xl text-charcoal">
              What Clients Say
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <figure className="bg-white rounded-2xl p-7 h-full flex flex-col">
                <div className="flex gap-1 text-gold mb-4" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={16} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <blockquote className="text-gray-600 text-sm leading-relaxed flex-1">
                  &ldquo;{review.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 text-charcoal text-sm font-semibold">
                  {review.name}
                  <span className="text-gray-400 font-normal"> · {review.town}</span>
                </figcaption>
              </figure>
            </AnimatedSection>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold font-semibold px-7 py-3.5 rounded-xl hover:bg-gold hover:text-white transition-colors"
          >
            Read our Google reviews <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
