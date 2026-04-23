import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
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
              alt="ReadyNest — Home Prep Made Simple"
              width={150}
              height={48}
              className="h-11 w-auto object-contain mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              Home Prep Made Simple
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <MapPin size={14} className="text-gold shrink-0" />
              <span>Doylestown, PA | Bucks County</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h3 className="font-serif text-lg mb-5 text-white">Quick Links</h3>
            <ul className="space-y-3">
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
          </div>

          {/* Col 3: Contact */}
          <div>
            <h3 className="font-serif text-lg mb-5 text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+12677179119"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                  aria-label="Call ReadyNest"
                >
                  <Phone size={15} className="text-gold shrink-0" />
                  267-717-9119
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@readynestpa.com"
                  className="flex items-center gap-3 text-gray-400 text-sm hover:text-gold transition-colors"
                  aria-label="Email ReadyNest"
                >
                  <Mail size={15} className="text-gold shrink-0" />
                  info@readynestpa.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <Clock size={15} className="text-gold shrink-0 mt-0.5" />
                <span>Monday–Saturday, 7 AM – 6 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} ReadyNest. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Serving Bucks County, PA
          </p>
        </div>
      </div>
    </footer>
  );
}
