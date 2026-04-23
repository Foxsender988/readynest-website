import Link from "next/link";
import { Home, ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-beige">
      <div className="text-center px-4">
        <p className="font-serif text-8xl text-gold mb-4">404</p>
        <h1 className="font-serif text-3xl text-charcoal mb-4">Page Not Found</h1>
        <p className="text-gray-500 text-base mb-8 max-w-sm mx-auto">
          Sorry, we couldn&apos;t find that page. Let us get you back home.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gold text-white font-semibold px-6 py-3 rounded-xl hover:bg-[#a07d46] transition-colors"
          >
            <Home size={18} />
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 border-2 border-charcoal text-charcoal font-semibold px-6 py-3 rounded-xl hover:border-gold hover:text-gold transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </div>
  );
}
