import { Users } from "lucide-react";
import PhotoWithFallback from "@/components/PhotoWithFallback";

// TODO: Drop Slav's headshot at /public/images/slav-headshot.jpg (square crop, ~800×800px).
// Until the file exists, the "Photo coming soon" placeholder is shown.
export default function Headshot({ size = "lg" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "w-64 h-64 md:w-80 md:h-80" : "w-64 h-64 md:w-72 md:h-72";

  return (
    <div className="relative">
      <div
        className={`relative ${dims} rounded-full overflow-hidden bg-beige border-4 border-gold/20`}
      >
        <PhotoWithFallback
          src="/images/slav-headshot.jpg"
          alt="Slav, owner of ReadyNest and Certified Aging-in-Place Specialist"
          sizes="(min-width: 768px) 320px, 256px"
          className="object-cover"
          fallback={
            <div className="w-full h-full flex items-center justify-center text-center text-gray-400">
              <div>
                <Users size={48} strokeWidth={1} className="mx-auto mb-2 text-gold/40" />
                <p className="text-xs">Photo coming soon</p>
              </div>
            </div>
          }
        />
      </div>
      {/* Gold ring decoration */}
      <div
        className="absolute -inset-3 rounded-full border-2 border-gold/15 pointer-events-none"
        aria-hidden="true"
      />
    </div>
  );
}
