import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cursor } from "../components/Cursor";
import { Nav } from "../components/Nav";
import { caseStudies } from "../data/caseStudies";
import { Contact, Footer } from "../page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Case Studies | Raj Kushwaha Digital" },
  description: "Portfolio backed SEO, LinkedIn, content and organic growth case studies with client evidence, methods and dated performance snapshots.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return <main className="work-page">
    <Cursor/><Nav/>
    <section className="work-hero shell">
      <span className="eyebrow-small">CLIENT WORK / PORTFOLIO EVIDENCE</span>
      <h1>Proof before<br/><i>promises.</i></h1>
      <p>Three engagements from Raj&apos;s 2025 portfolio. Every metric is tied to a supplied screenshot or written portfolio statement. Search positions and platform counts are shown as dated evidence, not permanent guarantees.</p>
    </section>

    <section className="client-logo-band shell" aria-label="Selected clients">
      <span>SELECTED CLIENTS</span>
      <div>{caseStudies.map((study) => <a href={study.website} target="_blank" rel="noreferrer" key={study.client}><Image src={study.logo} alt={study.logoAlt} width={260} height={100}/></a>)}</div>
    </section>

    <section className="work-index shell">
      {caseStudies.map((study, index) => <Link href={`/work/${study.slug}`} className="portfolio-card" key={study.slug} style={{"--case-accent": study.accent, "--case-soft": study.accentSoft} as React.CSSProperties}>
        <div className="portfolio-card-visual"><Image src={study.heroImage} alt={study.heroAlt} fill sizes="(max-width: 900px) 100vw, 55vw"/></div>
        <div className="portfolio-card-copy">
          <header><span>0{index + 1}</span><Image src={study.logo} alt={study.logoAlt} width={220} height={80}/></header>
          <small>{study.industry}</small>
          <h2>{study.headline}</h2>
          <div className="portfolio-card-metrics">{study.metrics.map((metric) => <p key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></p>)}</div>
          <b>READ THE EVIDENCE <i>↗</i></b>
        </div>
      </Link>)}
    </section>

    <section className="evidence-principle shell">
      <span className="eyebrow-small">HOW RESULTS ARE PRESENTED</span>
      <h2>Specific enough to inspect.<br/><i>Honest enough to trust.</i></h2>
      <p>We separate screenshots, portfolio statements and current public brand information. We do not turn historical rankings into current guarantees, and we do not invent client results to fill a layout.</p>
    </section>
    <Contact/><Footer/>
  </main>;
}

