import type { MetadataRoute } from "next";
import { caseStudies } from "./data/caseStudies";
import { linkedinWorkSamples } from "./data/linkedinWork";
import { services } from "./data/services";
import { insights } from "./data/insights";

const baseUrl = "https://www.rajkushwahadigital.com";
const lastModified = new Date("2026-09-11T00:00:00.000Z");
const localDetailsModified = new Date("2026-09-26T00:00:00.000Z");
const homepageModified = new Date("2026-10-09T00:00:00.000Z");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${baseUrl}/`, lastModified: homepageModified },
    { url: `${baseUrl}/contact`, lastModified: localDetailsModified },
    { url: `${baseUrl}/expertise`, lastModified },
    { url: `${baseUrl}/work`, lastModified: new Date(Math.max(+lastModified, ...caseStudies.map((study) => study.modified ? Date.parse(study.modified) : +lastModified))) },
    { url: `${baseUrl}/insights`, lastModified: new Date(Math.max(...insights.map((insight) => Date.parse(insight.modified)))) },
    { url: `${baseUrl}/about/raj-kushwaha`, lastModified: new Date("2026-09-16T00:00:00.000Z") },
    { url: `${baseUrl}/privacy`, lastModified },
    { url: `${baseUrl}/digital-marketing-agency-ahmedabad`, lastModified: localDetailsModified },
    ...insights.map((insight) => ({
      url: `${baseUrl}/insights/${insight.slug}`,
      lastModified: new Date(`${insight.modified}T00:00:00.000Z`),
    })),
    ...caseSudies.map((study) => ({
      url: `${baseUrl}/work/${study.slug}`,
      lastModified: study.modified ? new Date(`${study.modified}T00:00:00.000Z`) : lastModified,
    })),
    ...linkedinWorkSamples.map((sample) => ({
      url: `${baseUrl}/work/linkedin/${sample.slug}`,
      lastModified,
    })),
    ...services.map((service) => ({
      url: `${baseUrl}/services/${service.slug}`,
      lastModified: insights.some((insight) => insight.relatedService.href === `/services/${service.slug}`) ? new Date("2026-09-16T00:00:00.000Z") : lastModified,
    })),
  ];
}
