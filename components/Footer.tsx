import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "Bathroom Safety" },
  { href: "/services", label: "Entry & Exit Safety" },
  { href: "/services", label: "Stairs & Hallways" },
  { href: "/services", label: "Smart Home Safety" },
  { href: "/services#trash-valet", label: "Trash Valet" },
];

const quickLinks = [
  { href: "/process", label: "Our Process" },
  { href: "/for-families", label: "For Families" },
  { href: "/about", label: "About Slav" },
  { href: "/contact", label: "Contact" },
  { href: "/safety-checklist", label: "Free Safety Checklist" },
];

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Col 1: Brand */}
          <div>
            <Image
              src="/images/ReadyNest_home_prep_logo.png"
              alt="ReadyNest — Aging-in-Place Home Safety"
              width={150}
              height={48}
              className="h-11 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Aging-in-place home safety modifications for seniors and their families — installed personally by Slav in Bucks County, PA.
            </p>
            <div className="flex items-start gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="text-gold shrink-0 mt-0.5" />
              <span>Serving older homeowners and their families in Doylestown, New Hope, Newtown, Buckingham, Plumsteadville, Warrington, Chalfont, Yardley, Richboro, Southampton, Langhorne, and Ottsville.</span>
            </div>
          </div>

          {/* Col 2: Services */}
          <div>
            <h3 className="font-serif text-lg mb-5 text-white">Services</h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links + Contact */}
          <div>
            <h3 className="font-serif text-lg mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3 mb-8">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-gold transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+12677179119"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Phone size={14} className="text-gold shrink-0" />
                  267-717-9119
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@readynestpa.com"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                >
                  <Mail size={14} className="text-gold shrink-0" />
                  info@readynestpa.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={14} className="text-gold shrink-0 mt-0.5" />
                <span>Mon–Fri 7 AM–7 PM · Sat 8 AM–4 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ReadyNest · Insured · Bucks County, Pennsylvania · Site by Slav
          </p>
          <p className="text-gray-500 text-xs">
            Aging-in-Place Specialists
          </p>
        </div>
      </div>
    </footer>
  );
}
