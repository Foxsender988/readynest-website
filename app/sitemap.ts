import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { towns } from "@/lib/towns";

const pages: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/services", priority: 0.9 },
  { path: "/contact", priority: 0.8 },
  { path: "/process", priority: 0.8 },
  { path: "/for-families", priority: 0.8 },
  { path: "/who-pays", priority: 0.7 },
  { path: "/faq", priority: 0.7 },
  { path: "/about", priority: 0.7 },
  { path: "/safety-checklist", priority: 0.6 },
  { path: "/resources", priority: 0.6 },
  { path: "/trash-valet", priority: 0.5 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    ...pages.map((page) => ({
      url: `${SITE_URL}${page.path === "/" ? "/" : page.path}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: page.priority,
    })),
    ...towns.map((town) => ({
      url: `${SITE_URL}/areas/${town.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];
}
