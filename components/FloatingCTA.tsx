"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, FileText } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FloatingCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling past ~400px (past the hero)
      setVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-40 lg:hidden"
          role="complementary"
          aria-label="Quick contact actions"
        >
          <div className="flex">
            <a
              href="tel:+12677179119"
              className="flex-1 flex items-center justify-center gap-2 bg-charcoal text-white py-4 font-semibold text-sm hover:bg-[#333] transition-colors"
              aria-label="Call ReadyNest now"
            >
              <Phone size={18} />
              Call Now
            </a>
            <Link
              href="/contact"
              className="flex-1 flex items-center justify-center gap-2 bg-gold text-white py-4 font-semibold text-sm hover:bg-[#a07d46] transition-colors"
            >
              <FileText size={18} />
              Get a Quote
            </Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
