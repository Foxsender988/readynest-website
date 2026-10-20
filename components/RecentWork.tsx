import { ImageIcon } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";
import PhotoWithFallback from "@/components/PhotoWithFallback";

// TODO: Drop 3–6 job photos into /public/images/work/ using these filenames (landscape,
// ~1200×900px JPGs work best) and update the alt text to describe each job.
// Remove entries you don't have photos for. Missing files show a neutral placeholder tile.
const workPhotos = [
  { src: "/images/work/work-1.jpg", alt: "Grab bars installed in a shower" },
  { src: "/images/work/work-2.jpg", alt: "Second handrail installed on a staircase" },
  { src: "/images/work/work-3.jpg", alt: "Threshold ramp at a front entry" },
  { src: "/images/work/work-4.jpg", alt: "Comfort-height toilet with grab bar" },
  { src: "/images/work/work-5.jpg", alt: "Motion-sensor lighting in a hallway" },
  { src: "/images/work/work-6.jpg", alt: "Walk-in shower conversion with fold-down bench" },
];

export default function RecentWork() {
  return (
    <section className="bg-white py-20 md:py-28" aria-labelledby="recent-work-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-14">
            <p className="text-gold text-sm font-semibold tracking-wider uppercase mb-3">
              Recent Work
            </p>
            <h2 id="recent-work-heading" className="font-serif text-4xl md:text-5xl text-charcoal mb-4">
              Safer Homes Across Bucks County
            </h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Clean, sturdy modifications that fit the home — not hospital equipment.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workPhotos.map((photo, i) => (
            <AnimatedSection key={photo.src} delay={i * 0.06}>
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-beige">
                <PhotoWithFallback
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                  fallback={
                    <div className="w-full h-full flex items-center justify-center text-gold/40">
                      <ImageIcon size={40} strokeWidth={1} aria-hidden="true" />
                    </div>
                  }
                />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
