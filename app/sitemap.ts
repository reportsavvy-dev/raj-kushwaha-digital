import type { MetadataRoute } from "next";
import { caseStudies } from "./data/caseStudies";
import { linkedinWorkSamples } from "./data/linkedinWork";
import { services } from "./data/services";

const baseUrl = "https://rajkushwahadigital.com";
const lastModified = new Date("2026-08-10T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/expertise`, lastModified },
    { url: `${baseUrl}/work`, lastModified },
    ...caseStudies.map((study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified,
    })),
    ...linkedinWorkSamples.map((sample) => ({
      url: `${baseUrl}/work/linkedin/${sample.slug}`,
      lastModified,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified,
    })),
  ];
}
