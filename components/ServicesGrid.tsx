import Link from "next/link";
import { ShieldCheck, DoorOpen, ArrowUpDown, Lightbulb, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/sections/AnimatedSection";

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
    icon: <Lightbulb size={28} strokeWidth={1.5} />,
    name: "Smart Home Safety",
    description:
      "Motion lighting, smart doorbells, and leak and smoke alerts — so your parent is safer at night and you get a heads-up when something's wrong.",
    href: "/services#smart-home",
  },
];

export default function ServicesGrid() {
  return (
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
  );
}
