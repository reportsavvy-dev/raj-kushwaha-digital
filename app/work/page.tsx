import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cursor } from "../components/Cursor";
import { LinkedInWorkCard } from "../components/LinkedInWorkCard";
import { Nav } from "../components/Nav";
import { caseStudies } from "../data/caseStudies";
import { linkedinWorkSamples } from "../data/linkedinWork";
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
      <p>Verified performance cases sit beside publicly visible LinkedIn work. Metrics appear only when the portfolio supplies evidence. Creative samples show the strategy and production work without inventing campaign results.</p>
    </section>

    <section className="client-logo-band shell" aria-label="Selected clients">
      <span>SELECTED CLIENTS</span>
      <div>
        {linkedinWorkSamples.map((sample) => <a href={sample.linkedin} target="_blank" rel="noreferrer" key={sample.client}><Image src={sample.logo} alt={sample.logoAlt} width={180} height={80} unoptimized/><small>{sample.client}</small></a>)}
        <a href={caseStudies[1].website} target="_blank" rel="noreferrer"><Image src={caseStudies[1].logo} alt={caseStudies[1].logoAlt} width={180} height={80} unoptimized/></a>
      </div>
    </section>

    <section className="work-index shell">
      {caseStudies.map((study, index) => <Link href={`/work/${study.slug}`} className="portfolio-card" key={study.slug} style={{"--case-accent": study.accent, "--case-soft": study.accentSoft} as React.CSSProperties}>
        <div className="portfolio-card-visual"><Image src={study.heroImage} alt={study.heroAlt} fill unoptimized sizes="(max-width: 900px) 100vw, 55vw"/><span className="portfolio-visual-logo"><Image src={study.logo} alt="" width={170} height={62} unoptimized/></span></div>
        <div className="portfolio-card-copy">
          <header><span>0{index + 1}</span><Image src={study.logo} alt={study.logoAlt} width={220} height={80} unoptimized/></header>
          <small>{study.industry}</small>
          <h2>{study.headline}</h2>
          <div className="portfolio-card-metrics">{study.metrics.map((metric) => <p key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></p>)}</div>
          <b>READ THE EVIDENCE <i>↗</i></b>
        </div>
      </Link>)}
    </section>

    <section className="linkedin-work-section shell" id="linkedin-work">
      <header>
        <span className="eyebrow-small">PUBLISHED LINKEDIN WORK</span>
        <h2>Nine brands.<br/><i>Nine distinct systems.</i></h2>
        <p>Each card links to a public client post and a breakdown of the audience, problem, content decision and final delivery. These are work samples, not fabricated performance claims.</p>
      </header>
      <div className="linkedin-work-grid">
        {linkedinWorkSamples.map((sample, index) => <LinkedInWorkCard sample={sample} index={index} key={sample.slug}/>)}
      </div>
    </section>

    <section className="evidence-principle shell">
      <span className="eyebrow-small">HOW RESULTS ARE PRESENTED</span>
      <h2>Specific enough to inspect.<br/><i>Honest enough to trust.</i></h2>
      <p>We separate screenshots, portfolio statements and current public brand information. We do not turn historical rankings into current guarantees, and we do not invent client results to fill a layout.</p>
    </section>
    <Contact/><Footer/>
  </main>;
}
