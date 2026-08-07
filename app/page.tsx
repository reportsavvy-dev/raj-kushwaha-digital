import type { Metadata } from "next";
import Link from "next/link";
import { Cursor } from "./components/Cursor";
import { HeroSolarSystem } from "./components/HeroSolarSystem";
import { RKDMark } from "./components/BrandMark";
import { Logo, Nav } from "./components/Nav";
import { ToolLogo } from "./components/ToolLogo";
import { services } from "./data/services";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Agency | Raj Kushwaha Digital" },
  description: "Raj Kushwaha Digital connects SEO, paid media, social, branding, web development and AI automation into measurable growth systems.",
  alternates: { canonical: "/" },
};

const heroSignals = [
  { tool: "Google", label: "Google", note: "SEARCH" },
  { tool: "Meta Ads", label: "Meta", note: "ADS" },
  { tool: "Instagram", label: "Instagram", note: "SOCIAL" },
  { tool: "LinkedIn", label: "LinkedIn", note: "B2B" },
  { tool: "OpenAI", label: "AI", note: "INSIGHTS" },
];

export default function Home() {
  return <main>
    <Cursor/><Nav/>
    <section className="home-hero shell">
      <div className="hero-copy">
        <section className="hero-signal-strip" aria-label="Active marketing platforms">
          <header><span>● ACTIVE SIGNALS</span><i/></header>
          <div>{heroSignals.map((signal, index) => <article key={signal.label} style={{"--signal-index": index} as React.CSSProperties}>
            <ToolLogo name={signal.tool}/><span><b>{signal.label}</b><small>{signal.note}</small></span>
          </article>)}</div>
          <footer>{heroSignals.map((signal) => <i key={signal.label}/>)}</footer>
        </section>
        <span className="eyebrow-small">INDEPENDENT DIGITAL MARKETING AGENCY</span>
        <h1 className="kinetic-title"><span>Move <i>attention.</i></span><span>Build <i>momentum.</i></span></h1>
        <p className="studio-hero-copy">Raj Kushwaha Digital connects strategy, search, media, creative, development and automation around one job: turning qualified attention into measurable business progress.</p>
        <div><a className="primary-button magnetic" href="mailto:hello@rajkushwahadigital.com?subject=Start a project">START A PROJECT <span>→</span></a><Link className="secondary-button magnetic" href="/expertise">EXPLORE EXPERTISE ↗</Link></div>
      </div>
      <HeroSolarSystem/>
    </section>

    <div className="ticker coral-ticker"><div>{[...services, ...services].map((service, index) => <span key={`${service.name}-${index}`}>{service.name} <b>•</b></span>)}</div></div>

    <section className="home-capabilities shell">
      <header><span className="eyebrow-small">15 CONNECTED SERVICES</span><h2>Specialists where needed.<br/><i>One system where it matters.</i></h2><p>Choose a service to see what it solves, what the work includes, how success is measured and which tools support delivery. The recommendation starts with your constraint—not a preselected channel package.</p></header>
      <div className="capability-rows">{services.map((service, index) => <Link href={`/services/${service.slug}`} className="hover-target capability-motion-row" key={service.name} style={{"--row-accent": service.accent, "--row-soft": service.accentSoft} as React.CSSProperties}>
        <span>{String(index + 1).padStart(2, "0")}</span><h3>{service.name}</h3><p>{service.summary}</p>
        <div className="mini-tool-orbit">{service.tools.slice(0, 4).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div><b>↗</b>
      </Link>)}</div>
    </section>

    <section className="featured-work shell">
      <header><span className="eyebrow-small">ILLUSTRATIVE CASE FORMATS</span><h2>See the thinking<br/><i>before the claim.</i></h2><p>These are clearly labelled concept studies, not invented client results. Each one shows the problem framing, proposed system and measurement plan a real engagement would require.</p></header>
      <div className="work-grid">{services.slice(1, 4).map((service, index) => <Link href={`/services/${service.slug}#case-study`} className="work-card" key={service.slug} style={{"--work-accent": service.accent, "--work-soft": service.accentSoft} as React.CSSProperties}>
        <div className="work-card-top"><span>0{index + 1}</span><b>{service.caseStudy.label}</b></div>
        <h3>{service.caseStudy.title}</h3><p>{service.caseStudy.sector}</p>
        <div className="work-card-logos">{service.tools.slice(0, 3).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div>
        <span className="work-arrow">VIEW STUDY ↗</span>
      </Link>)}</div>
    </section>

    <section className="method"><div className="shell"><span className="eyebrow-small">HOW THE WORK RUNS</span><h2>Evidence before activity.<br/><i>Learning before scale.</i></h2><div className="method-steps"><article><span>01</span><h3>Diagnose</h3><p>Review the offer, audience, journey, data and operating limits to identify the real constraint.</p></article><article><span>02</span><h3>Decide</h3><p>Set the outcome, channel roles, scope, ownership and success signals before production begins.</p></article><article><span>03</span><h3>Build</h3><p>Create the campaigns, content or product in testable parts with measurement attached.</p></article><article><span>04</span><h3>Improve</h3><p>Use customer behavior and commercial evidence to stop, repair or scale the right work.</p></article></div></div></section>
    <section className="real-growth shell"><h2>No ranking guarantees.<br/><i>No invented results.</i></h2><p>Raj Kushwaha Digital documents assumptions, labels concept work honestly and reports the signals that support an actual business decision.</p></section>
    <Contact/><Footer/>
  </main>;
}

export function Contact() {
  return <section className="contact shell" id="contact"><div className="contact-brandmark"><RKDMark/></div><div><span className="eyebrow-small">START WITH THE REAL PROBLEM</span><h2>Tell us what must change.<br/><i>We&apos;ll map the next move.</i></h2><a href="mailto:hello@rajkushwahadigital.com?subject=Project enquiry">hello@rajkushwahadigital.com <span>↗</span></a></div></section>;
}

export function Footer() {
  return <footer><div className="shell"><Logo/><span>RAJKUSHWAHADIGITAL.COM</span><span>© {new Date().getFullYear()} RAJ KUSHWAHA DIGITAL</span></div></footer>;
}
