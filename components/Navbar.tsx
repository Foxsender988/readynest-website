"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/for-families", label: "For Families" },
  { href: "/process", label: "Our Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 bg-white transition-shadow duration-300",
          scrolled ? "shadow-md" : "shadow-sm"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center shrink-0" aria-label="ReadyNest PA Home">
              <Image
                src="/images/ReadyNest_home_prep_logo.png"
                alt="ReadyNest PA — Aging-in-Place Home Safety"
                width={160}
                height={52}
                priority
                className="h-10 md:h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors duration-200 hover:text-gold",
                    pathname === link.href ? "text-gold" : "text-charcoal"
                  )}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop Right */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+12677179119"
                className="flex items-center gap-1.5 text-sm font-medium text-charcoal hover:text-gold transition-colors"
                aria-label="Call ReadyNest PA"
              >
                <Phone size={15} />
                267-717-9119
              </a>
              <Link
                href="/contact"
                className="bg-gold text-white text-sm font-semibold px-5 py-2.5 rounded-lg hover:bg-[#a07d46] transition-colors"
              >
                Free Assessment
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-charcoal hover:text-gold transition-colors"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/40 z-40 lg:hidden"
              onClick={() => setIsOpen(false)}
              aria-hidden="true"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-72 bg-white z-50 lg:hidden shadow-2xl"
              role="dialog"
              aria-modal="true"
              aria-label="Navigation menu"
            >
              <div className="flex items-center justify-between p-5 border-b border-soft-gray">
                <Image
                  src="/images/ReadyNest_home_prep_logo.png"
                  alt="ReadyNest PA"
                  width={130}
                  height={42}
                  className="h-9 w-auto object-contain"
                />
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-charcoal hover:text-gold transition-colors"
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              <nav className="flex flex-col p-5 gap-1" aria-label="Mobile navigation">
                <Link
                  href="/"
                  className={clsx(
                    "px-3 py-3 rounded-lg text-base font-medium transition-colors",
                    pathname === "/" ? "bg-beige text-gold" : "text-charcoal hover:bg-beige hover:text-gold"
                  )}
                >
                  Home
                </Link>
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-3 py-3 rounded-lg text-base font-medium transition-colors",
                      pathname === link.href
                        ? "bg-beige text-gold"
                        : "text-charcoal hover:bg-beige hover:text-gold"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>

              <div className="p-5 border-t border-soft-gray space-y-3">
                <a
                  href="tel:+12677179119"
                  className="flex items-center gap-2 px-3 py-3 text-charcoal font-medium hover:text-gold transition-colors"
                >
                  <Phone size={16} className="text-gold" />
                  267-717-9119
                </a>
                <Link
                  href="/contact"
                  className="block text-center bg-gold text-white font-semibold px-5 py-3 rounded-lg hover:bg-[#a07d46] transition-colors"
                >
                  Book Free Assessment
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="h-16 md:h-20" aria-hidden="true" />
    </>
  );
}
