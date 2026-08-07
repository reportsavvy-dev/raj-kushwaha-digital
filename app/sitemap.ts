import type { MetadataRoute } from "next";
import { services } from "./data/services";

const baseUrl = "https://rajkushwahadigital.com";
const lastModified = new Date("2026-08-07T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${baseUrl}/expertise`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
