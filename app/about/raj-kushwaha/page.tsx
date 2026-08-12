import type { Metadata } from "next";
import Link from "next/link";
import { Cursor } from "../../components/Cursor";
import { Nav } from "../../components/Nav";
import { Contact, Footer } from "../../page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Raj Kushwaha | Digital Marketing Strategist" },
  description: "Meet Raj Kushwaha, the strategist behind Raj Kushwaha Digital, with hands-on work across SEO, LinkedIn, content, analytics and digital growth.",
  alternates: { canonical: "/about/raj-kushwaha" },
  openGraph: { title: "Raj Kushwaha | Digital Marketing Strategist", description: "The experience, working principles and portfolio evidence behind Raj Kushwaha Digital.", url: "/about/raj-kushwaha", type: "profile" },
};

const baseUrl = "https://www.rajkushwahadigital.com";
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    { "@type": "ProfilePage", "@id": `${baseUrl}/about/raj-kushwaha#profile`, url: `${baseUrl}/about/raj-kushwaha`, name: "Raj Kushwaha, Digital Marketing Strategist", dateModified: "2026-08-12", mainEntity: { "@id": `${baseUrl}/#raj-kushwaha` }, isPartOf: { "@id": `${baseUrl}/#website` } },
    { "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
      { "@type": "ListItem", position: 2, name: "Raj Kushwaha", item: `${baseUrl}/about/raj-kushwaha` },
    ] },
  ],
};

export default function RajKushwahaPage() {
  return <main className="author-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Cursor/><Nav/>
    <section className="author-hero shell">
      <span className="eyebrow-small">STRATEGIST / OPERATOR / AUTHOR</span>
      <h1>Raj<br/><i>Kushwaha.</i></h1>
      <div><p>Raj Kushwaha leads the strategy and delivery behind Raj Kushwaha Digital. His portfolio records six years of hands-on work across organic search, LinkedIn, content, analytics and digital growth.</p><a href="https://www.linkedin.com/in/rajkumarkushwaha014" target="_blank" rel="me noopener noreferrer">VIEW LINKEDIN ↗</a></div>
    </section>
    <section className="author-body shell">
      <div><span>06</span><small>YEARS OF HANDS-ON DIGITAL MARKETING EXPERIENCE</small></div>
      <article>
        <h2>Work that can be inspected.</h2>
        <p>The portfolio covers search and social programs for staffing, consulting and medical-billing brands. The case studies on this site distinguish dated platform evidence, client feedback and current public work from concepts that have not been deployed for a client.</p>
        <p>Raj works across diagnosis, planning and execution: technical search reviews, content architecture, LinkedIn publishing, measurement and the client conversations needed to keep each channel tied to a commercial decision.</p>
        <h2>How guidance is written.</h2>
        <p>Platform-sensitive claims are checked against primary documentation. Recommendations state the trade-offs and limitations. No article, proposal or case study promises a ranking, a citation or a campaign result that cannot be supported.</p>
        <div><Link href="/work">VIEW PORTFOLIO EVIDENCE ↗</Link><Link href="/insights">READ THE INSIGHTS ↗</Link></div>
      </article>
    </section>
    <Contact/><Footer/>
  </main>;
}
