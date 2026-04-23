import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-dm-serif",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://readynestpa.com"),
  title: {
    default: "ReadyNest — Home Prep Made Simple | Bucks County, PA",
    template: "%s | ReadyNest — Bucks County, PA",
  },
  description:
    "ReadyNest offers turnkey home preparation services in Bucks County, PA — painting, deep cleaning, junk removal, and repairs. Get your home market-ready in days.",
  keywords: [
    "home prep services Bucks County PA",
    "pre-listing home preparation",
    "get house ready to sell Bucks County",
    "move-in home cleaning Doylestown",
    "junk removal Bucks County",
    "painting services Doylestown PA",
    "home prep for realtors",
    "move-out cleaning Bucks County",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://readynestpa.com",
    siteName: "ReadyNest",
    images: [
      {
        url: "/images/ReadyNest_home_prep_logo.png",
        width: 800,
        height: 600,
        alt: "ReadyNest — Home Prep Made Simple",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyNest — Home Prep Made Simple | Bucks County, PA",
    description:
      "Turnkey home prep services in Bucks County, PA. Painting, cleaning, repairs & junk removal. Market-ready in days.",
    images: ["/images/ReadyNest_home_prep_logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "ReadyNest",
  description:
    "Turnkey home preparation services — painting, cleaning, repairs, and junk removal — for homeowners and realtors in Bucks County, PA.",
  url: "https://readynestpa.com",
  telephone: "+1-267-717-9119",
  email: "info@readynestpa.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Doylestown",
    addressRegion: "PA",
    addressCountry: "US",
  },
  areaServed: {
    "@type": "Place",
    name: "Bucks County, PA",
  },
  serviceType: [
    "Home Preparation",
    "Painting",
    "Cleaning",
    "Junk Removal",
    "Minor Repairs",
    "Exterior Cleaning",
  ],
  priceRange: "$$",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerifDisplay.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
