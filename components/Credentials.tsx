import { Award, BadgeCheck, ShieldCheck } from "lucide-react";
import { PA_HIC_NUMBER } from "@/lib/site";

const credentials = [
  {
    icon: <Award size={20} strokeWidth={1.5} />,
    label: "Certified Aging-in-Place Specialist (CAPS, NAHB)",
  },
  {
    icon: <BadgeCheck size={20} strokeWidth={1.5} />,
    label: `PA Registered Home Improvement Contractor (#${PA_HIC_NUMBER})`,
  },
  {
    icon: <ShieldCheck size={20} strokeWidth={1.5} />,
    label: "Fully Insured",
  },
];

export default function Credentials() {
  return (
    <div
      className="bg-white rounded-2xl border border-soft-gray px-6 py-6 grid sm:grid-cols-3 gap-6"
      aria-label="Credentials"
    >
      {credentials.map((item) => (
        <div key={item.label} className="flex items-center gap-3">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-beige text-gold shrink-0">
            {item.icon}
          </div>
          <p className="font-semibold text-charcoal text-sm leading-snug">{item.label}</p>
        </div>
      ))}
    </div>
  );
}
