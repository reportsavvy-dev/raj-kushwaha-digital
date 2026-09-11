import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "../components/Nav";
import { Contact, Footer } from "../components/SiteSections";

export const dynamic = "force-static";

const canonicalPath = "/digital-marketing-agency-ahmedabad";
const canonicalUrl = `https://www.rajkushwahadigital.com${canonicalPath}`;

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Agency in Ahmedabad | RKD" },
  description: "Digital marketing services for Ahmedabad businesses across SEO, AEO, GEO, paid media, content, web development, analytics and AI automation.",
  alternates: { canonical: canonicalPath },
  openGraph: {
    title: "Digital Marketing Agency in Ahmedabad | RKD",
    description: "Connected digital marketing for Ahmedabad businesses: search, paid media, content, development, analytics and automation.",
    url: canonicalPath,
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 800, alt: "Raj Kushwaha Digital services for Ahmedabad businesses" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Ahmedabad | RKD",
    description: "Connected digital marketing for Ahmedabad businesses: search, paid media, content, development, analytics and automation.",
    images: ["/og.jpg"],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajkushwahadigital.com/" },
        { "@type": "ListItem", position: 2, name: "Digital Marketing Agency in Ahmedabad", item: canonicalUrl },
      ],
    },
    {
      "@type": "Service",
      "@id": `${canonicalUrl}#service`,
      name: "Digital Marketing Services in Ahmedabad",
      serviceType: "Digital marketing",
      description: "SEO, AEO, GEO, paid media, content, social, web development, analytics and AI automation for Ahmedabad businesses.",
      url: canonicalUrl,
      provider: { "@id": "https://www.rajkushwahadigital.com/#organization" },
      areaServed: {
        "@type": "City",
        name: "Ahmedabad",
        containedInPlace: { "@type": "AdministrativeArea", name: "Gujarat" },
      },
    },
  ],
};

const capabilities = [
  { title: "SEO, AEO, GEO & AIO", text: "Technical access, intent-led pages, answer-ready content and clear entity signals built on one search foundation.", href: "/services/seo-aeo-geo-sxo" },
  { title: "Lead & performance systems", text: "Paid and organic acquisition connected to landing pages, qualification, CRM handoff and useful conversion events.", href: "/services/lead-generation" },
  { title: "Content & LinkedIn", text: "A practical editorial system for expertise, distribution and credible buyer education without invented performance claims.", href: "/services/content-marketing" },
];

const faqs = [
  ["Does Raj Kushwaha Digital work with Ahmedabad businesses?", "Yes. Ahmedabad businesses can engage Raj Kushwaha Digital through scheduled remote project calls and a documented delivery process. No walk-in office is represented on this page."],
  ["Can you guarantee a first-page ranking in Ahmedabad?", "No ethical agency can guarantee a ranking. The work improves relevance, technical eligibility, content usefulness, local signals and measurement, then reports what search and enquiry data actually show."],
  ["Do Ahmedabad businesses need separate SEO, AEO and GEO plans?", "Usually no. Search engines and AI answer surfaces share the same core requirements: accessible pages, useful text, clear entities, strong internal links and credible evidence. Channel-specific refinements come after that foundation."],
  ["What happens before a proposal?", "We review the offer, audience, current website, search visibility, measurement and sales journey. The recommendation then identifies the smallest useful scope and the decisions it should support."],
];

export default function AhmedabadDigitalMarketingPage() {
  return <main className="service-page" style={{ "--service-accent": "#b72f14", "--service-soft": "#ffd8ce" } as React.CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Nav/>
    <section className="service-detail-hero shell">
      <div className="service-hero-copy">
        <span className="eyebrow-small">AHMEDABAD / DIGITAL GROWTH</span>
        <h1>Digital marketing agency in Ahmedabad</h1>
        <p className="service-direct-answer">Raj Kushwaha Digital helps Ahmedabad businesses connect SEO, AEO, GEO, paid media, content, web development, analytics and AI automation to a measurable commercial goal.</p>
        <p>The plan starts with the buyer journey and the current constraint. Channels are added only when they have a clear role, success signal and next decision.</p>
        <div><Link className="primary-button magnetic" href="/contact">DISCUSS YOUR AHMEDABAD PROJECT <span>&rarr;</span></Link><Link className="text-link" href="#services">SEE THE APPROACH &darr;</Link></div>
      </div>
      <aside className="local-market-card" aria-label="Ahmedabad digital marketing scope">
        <span>SERVICE AREA / AHMEDABAD, GUJARAT</span>
        <strong>Search.<br/>Demand.<br/>Experience.</strong>
        <ul><li><b>01</b><span>LOCAL + ORGANIC SEARCH</span></li><li><b>02</b><span>PAID + SOCIAL DEMAND</span></li><li><b>03</b><span>WEB + CONVERSION</span></li><li><b>04</b><span>ANALYTICS + AUTOMATION</span></li></ul>
      </aside>
    </section>

    <section className="service-overview shell" id="services">
      <header><span className="eyebrow-small">WHAT THE WORK COVERS</span><h2>One market.<br/><i>One connected system.</i></h2></header>
      <div className="service-overview-copy"><p>A local page alone does not create local authority. Ahmedabad visibility grows when accurate business information, useful service pages, portfolio evidence, internal links and genuine external reputation support the same story.</p><small className="content-label">THE FIRST PRIORITIES</small><ul><li><span>&#10003;</span>Technical crawlability and index coverage</li><li><span>&#10003;</span>Ahmedabad search intent and buyer questions</li><li><span>&#10003;</span>Clear service, proof and enquiry pathways</li><li><span>&#10003;</span>GA4, Search Console and qualified-lead measurement</li></ul></div>
    </section>

    <section className="service-benefits shell">
      {capabilities.map((item, index) => <article key={item.title}><span>0{index + 1}</span><h3>{item.title}</h3><p>{item.text}</p><Link className="text-link" href={item.href}>EXPLORE SERVICE &#8599;</Link></article>)}
    </section>

    <section className="service-process">
      <div className="shell"><header><span className="eyebrow-small">HOW AN AHMEDABAD ENGAGEMENT STARTS</span><h2>Diagnose before<br/>adding channels.</h2></header><div className="service-process-grid">
        <article><span>01</span><h3>Audit demand</h3><p>Review local and non-local queries, competitors, current landing pages, index coverage and existing proof.</p></article>
        <article><span>02</span><h3>Map the journey</h3><p>Connect each useful query and campaign to the right page, answer, evidence and conversion action.</p></article>
        <article><span>03</span><h3>Measure decisions</h3><p>Track qualified enquiries, assisted conversions, non-brand clicks and page experience, not vanity totals.</p></article>
      </div></div>
    </section>

    <section className="service-overview shell">
      <header><span className="eyebrow-small">PROOF AND PRACTICE</span><h2>Inspect the work.<br/><i>Then choose the scope.</i></h2></header>
      <div className="service-overview-copy"><p>Portfolio pages separate verified evidence from planning examples. Search guidance is linked to primary platform documentation and updated when the underlying systems change.</p><small className="content-label">USEFUL NEXT PAGES</small><ul><li><span>&#8599;</span><Link href="/work">Verified client work</Link></li><li><span>&#8599;</span><Link href="/services/digital-marketing">Integrated digital marketing</Link></li><li><span>&#8599;</span><Link href="/insights/seo-aeo-geo-aio-one-search-visibility-system">SEO, AEO, GEO and AIO guide</Link></li><li><span>&#8599;</span><Link href="/services/web-development">Web development and measurement</Link></li></ul></div>
    </section>

    <section className="service-faq shell">
      <header><span className="eyebrow-small">AHMEDABAD / CLEAR ANSWERS</span><h2>Questions before<br/><i>you choose an agency.</i></h2></header>
      <div>{faqs.map(([question, answer], index) => <details key={question}><summary><span>0{index + 1}</span><b>{question}</b><i>+</i></summary><p>{answer}</p></details>)}</div>
    </section>
    <Contact/><Footer/>
  </main>;
}
