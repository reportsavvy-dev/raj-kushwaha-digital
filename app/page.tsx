import Link from "next/link";
import { Cursor } from "./components/Cursor";
import { HeroSolarSystem } from "./components/HeroSolarSystem";
import { RKDMark } from "./components/BrandMark";
import { Logo, Nav } from "./components/Nav";
import { ToolLogo } from "./components/ToolLogo";
import { ThemeSwitcher } from "./components/ThemeSystem";
import { services } from "./data/services";

export const dynamic = "force-static";

const heroSignals = [
  { tool: "Google", label: "Google", note: "SEARCH" },
  { tool: "Meta Ads", label: "Meta", note: "ADS" },
  { tool: "Instagram", label: "Instagram", note: "SOCIAL" },
  { tool: "LinkedIn", label: "LinkedIn", note: "B2B" },
  { tool: "OpenAI", label: "AI", note: "INSIGHTS" },
];

export default function Home() {
  return <main>
    <Cursor/><Nav/><ThemeSwitcher/>
    <section className="home-hero shell">
      <div className="hero-copy">
        <section className="hero-signal-strip" aria-label="Active marketing platforms">
          <header><span>● ACTIVE SIGNALS</span><i/></header>
          <div>{heroSignals.map((signal, index) => <article key={signal.label} style={{"--signal-index": index} as React.CSSProperties}>
            <ToolLogo name={signal.tool}/><span><b>{signal.label}</b><small>{signal.note}</small></span>
          </article>)}</div>
          <footer>{heroSignals.map((signal) => <i key={signal.label}/>)}</footer>
        </section>
        <span className="eyebrow-small">INDEPENDENT DIGITAL GROWTH AGENCY</span>
        <h1 className="kinetic-title"><span>Move <i>attention.</i></span><span>Build <i>momentum.</i></span></h1>
        <p className="studio-hero-copy">Strategy, creativity and technology—connected to grow your business.</p>
        <p className="antarctica-hero-copy">Data-driven strategies. Creative that connects.<br/>Performance that compounds.<br/>We help brands grow—sustainably.</p>
        <div><a className="primary-button magnetic" href="mailto:hello@rajkushwahadigital.com?subject=Start a project">START A PROJECT <span>→</span></a><Link className="secondary-button magnetic" href="/expertise">EXPLORE EXPERTISE ↗</Link></div>
      </div>
      <HeroSolarSystem/>
    </section>

    <div className="ticker coral-ticker"><div>{[...services, ...services].map((service, index) => <span key={`${service.name}-${index}`}>{service.name} <b>•</b></span>)}</div></div>

    <section className="home-capabilities shell">
      <header><span className="eyebrow-small">CAPABILITIES IN MOTION</span><h2>Every discipline.<br/><i>Moving as one.</i></h2><p>Move across a service to reveal the real tools and platforms that power it. Select any capability for its process, case study, proof and answers.</p></header>
      <div className="capability-rows">{services.map((service, index) => <Link href={`/services/${service.slug}`} className="hover-target capability-motion-row" key={service.name} style={{"--row-accent": service.accent, "--row-soft": service.accentSoft} as React.CSSProperties}>
        <span>{String(index + 1).padStart(2, "0")}</span><h3>{service.name}</h3><p>{service.summary}</p>
        <div className="mini-tool-orbit">{service.tools.slice(0, 4).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div><b>↗</b>
      </Link>)}</div>
    </section>

    <section className="featured-work shell">
      <header><span className="eyebrow-small">CASE STUDY PREVIEWS</span><h2>Systems designed<br/><i>to move the signal.</i></h2><p>These concept studies show the strategic depth and output structure prepared for each service. Verified portfolio results can replace them without changing the design.</p></header>
      <div className="work-grid">{services.slice(1, 4).map((service, index) => <Link href={`/services/${service.slug}#case-study`} className="work-card" key={service.slug} style={{"--work-accent": service.accent, "--work-soft": service.accentSoft} as React.CSSProperties}>
        <div className="work-card-top"><span>0{index + 1}</span><b>{service.caseStudy.label}</b></div>
        <h3>{service.caseStudy.title}</h3><p>{service.caseStudy.sector}</p>
        <div className="work-card-logos">{service.tools.slice(0, 3).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div>
        <span className="work-arrow">VIEW STUDY ↗</span>
      </Link>)}</div>
    </section>

    <section className="method"><div className="shell"><span className="eyebrow-small">HOW WE MOVE</span><h2>From signal to<br/><i>business momentum.</i></h2><div className="method-steps"><article><span>01</span><h3>Discover</h3><p>Understand the business, audience and the real growth problem.</p></article><article><span>02</span><h3>Strategize</h3><p>Choose the right message, channels and connected plan.</p></article><article><span>03</span><h3>Create</h3><p>Design content, campaigns and digital experiences with purpose.</p></article><article><span>04</span><h3>Activate</h3><p>Launch, learn and improve the system as real signals arrive.</p></article></div></div></section>
    <section className="real-growth shell"><h2>No fake promises.<br/><i>Only focused work.</i></h2><p>We connect strategy, creativity and technology around the problem your business actually needs to solve.</p></section>
    <Contact/><Footer/>
  </main>;
}

export function Contact() {
  return <section className="contact shell" id="contact"><div className="contact-brandmark"><RKDMark/></div><div><span className="eyebrow-small">READY WHEN YOU ARE</span><h2>Let&apos;s make your brand<br/><i>the next big signal.</i></h2><a href="mailto:hello@rajkushwahadigital.com">hello@rajkushwahadigital.com <span>↗</span></a></div></section>;
}

export function Footer() {
  return <footer><div className="shell"><Logo/><span>RAJKUSHWAHADIGITAL.COM</span><span>© {new Date().getFullYear()} RAJ KUSHWAHA DIGITAL</span></div></footer>;
}
