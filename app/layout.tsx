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
    default: "ReadyNest — Aging-in-Place Home Safety | Bucks County, PA",
    template: "%s | ReadyNest",
  },
  description:
    "ReadyNest provides aging-in-place home safety modifications in Bucks County, PA — grab bars, ramps, stair railings, smart home safety. Free home assessment. Call 267-717-9119.",
  keywords: [
    "aging in place Bucks County PA",
    "home safety modifications seniors",
    "grab bar installation Doylestown PA",
    "senior home safety Bucks County",
    "fall prevention home modifications",
    "aging in place contractor Pennsylvania",
    "home safety assessment Doylestown",
    "bathroom safety modifications seniors",
    "stair railing installation Bucks County",
    "senior home modifications Newtown PA",
    "handicap accessibility home modifications",
    "ReadyNest aging in place",
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
        alt: "ReadyNest — Aging-in-Place Home Safety",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ReadyNest — Aging-in-Place Home Safety | Bucks County, PA",
    description:
      "Home safety modifications for seniors — grab bars, ramps, stair railings & smart home safety. Personally overseen by Slav in Bucks County, PA. Free assessment.",
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
