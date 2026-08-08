import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://one-hundred-baq.github.io/public-website";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/services`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/case-study`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/about`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/capital`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${SITE_URL}/how-we-think`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/technology`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/privacy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
