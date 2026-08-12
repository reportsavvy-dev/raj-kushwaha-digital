import type { Metadata } from "next";
import Link from "next/link";
import { Cursor } from "../components/Cursor";
import { Nav } from "../components/Nav";
import { insights } from "../data/insights";
import { Contact, Footer } from "../page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Insights | Raj Kushwaha Digital" },
  description: "Evidence-led guidance on SEO, AEO, GEO, AI search, content, demand generation and digital marketing measurement.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Digital Marketing Insights | Raj Kushwaha Digital",
    description: "Practical search and growth guidance built from primary sources, real work and explicit limitations.",
    url: "/insights",
    type: "website",
  },
};

const baseUrl = "https://www.rajkushwahadigital.com";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": `${baseUrl}/insights#page`,
      url: `${baseUrl}/insights`,
      name: "Digital Marketing Insights",
      description: "Evidence-led guidance on search, AI discovery, content and digital growth.",
      isPartOf: { "@id": `${baseUrl}/#website` },
      about: { "@id": `${baseUrl}/#organization` },
    },
    {
      "@type": "ItemList",
      itemListElement: insights.map((insight, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: insight.title,
        url: `${baseUrl}/insights/${insight.slug}`,
      })),
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: "Insights", item: `${baseUrl}/insights` },
      ],
    },
  ],
};

export default function InsightsPage() {
  return <main className="insights-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Cursor/><Nav/>
    <section className="insights-hero shell">
      <span className="eyebrow-small">RESEARCH / PRACTICE / EVIDENCE</span>
      <h1>Useful answers.<br/><i>Clear limits.</i></h1>
      <p>Practical guidance for buyers and operators working through search, AI discovery and measurable digital growth. Each article separates platform guidance, working judgment and claims that still need evidence.</p>
    </section>
    <section className="insight-index shell" aria-label="Latest insights">
      {insights.map((insight, index) => <article className="insight-card" key={insight.slug}>
        <header><span>{String(index + 1).padStart(2, "0")}</span><b>{insight.category}</b><time dateTime={insight.published}>{new Date(`${insight.published}T00:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric", timeZone: "UTC" })}</time></header>
        <h2><Link href={`/insights/${insight.slug}`}>{insight.title}</Link></h2>
        <p>{insight.excerpt}</p>
        <footer><span>{insight.readTime}</span><Link href={`/insights/${insight.slug}`}>READ THE GUIDE <i>↗</i></Link></footer>
      </article>)}
    </section>
    <section className="insight-principle shell">
      <span className="eyebrow-small">EDITORIAL STANDARD</span>
      <h2>Primary sources first.<br/><i>No invented certainty.</i></h2>
      <p>Search and AI platforms change. Technical claims are dated and linked to current first-party guidance. Client results remain separate from planning examples, and no article promises a ranking or citation.</p>
    </section>
    <Contact/><Footer/>
  </main>;
}
