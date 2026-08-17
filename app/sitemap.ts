import type { MetadataRoute } from "next";
import { caseStudies } from "./data/caseStudies";
import { linkedinWorkSamples } from "./data/linkedinWork";
import { services } from "./data/services";
import { insights } from "./data/insights";

const baseUrl = "https://www.rajkushwahadigital.com";
const lastModified = new Date("2026-08-17T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
    { url: `${baseUrl}/expertise`, lastModified },
    { url: `${baseUrl}/work`, lastModified },
    { url: `${baseUrl}/insights`, lastModified },
    { url: `${baseUrl}/about/raj-kushwaha`, lastModified },
    ...insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(`${insight.modified}T00:00:00.000Z`),
    })),
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
