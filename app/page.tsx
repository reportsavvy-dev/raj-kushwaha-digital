import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Cursor } from "./components/Cursor";
import { DeferredToolOrbit } from "./components/DeferredToolOrbit";
import { HeroSolarSystem } from "./components/HeroSolarSystem";
import { LinkedInWorkCard } from "./components/LinkedInWorkCard";
import { Nav } from "./components/Nav";
import { Contact, Footer } from "./components/SiteSections";
import { ToolLogo } from "./components/ToolLogo";
import { caseStudies } from "./data/caseStudies";
import { linkedinWorkSamples, recentLinkedInWorkSamples } from "./data/linkedinWork";
import { services } from "./data/services";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Agency | Raj Kushwaha Digital" },
  description: "Raj Kushwaha Digital connects SEO, paid media, social, branding, web development and AI automation into measurable growth systems.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Digital Marketing Agency | Raj Kushwaha Digital",
    description: "Strategy, search, media, creative, development and automation connected to measurable business progress.",
    url: "/",
    siteName: "Raj Kushwaha Digital",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 800, alt: "Raj Kushwaha Digital. Move Attention. Build Momentum." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency | Raj Kushwaha Digital",
    description: "Strategy, search, media, creative, development and automation connected to measurable business progress.",
    images: ["/og.jpg"],
  },
};

const heroSignals = [
  { tool: "Google", label: "Google", note: "SEARCH" },
  { tool: "Meta Ads", label: "Meta", note: "ADS" },
  { tool: "Instagram", label: "Instagram", note: "SOCIAL" },
  { tool: "LinkedIn", label: "LinkedIn", note: "B2B" },
  { tool: "OpenAI", label: "AI", note: "INSIGHTS" },
];

const homeClientLogos = [
  ...linkedinWorkSamples.map((sample) => ({ href: `/work/linkedin/${sample.slug}`, src: sample.logo, alt: sample.logoAlt, name: sample.client })),
  { href: `/work/${caseStudies[1].slug}`, src: caseStudies[1].logo, alt: caseStudies[1].logoAlt, name: caseStudies[1].client },
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
        <div><Link className="primary-button magnetic" href="/contact">START A PROJECT <span>→</span></Link><Link className="secondary-button magnetic" href="/expertise">EXPLORE EXPERTISE ↗</Link></div>
      </div>
      <HeroSolarSystem/>
    </section>

    <div className="ticker coral-ticker"><div>{[...services, ...services].map((service, index) => <span key={`${service.name}-${index}`}>{service.name} <b>•</b></span>)}</div></div>

    <section className="home-capabilities shell">
      <header><span className="eyebrow-small">15 CONNECTED SERVICES</span><h2>Specialists where needed.<br/><i>One system where it matters.</i></h2><p>Choose a service to see what it solves, what the work includes, how success is measured and which tools support delivery. The recommendation starts with your constraint, not a preselected channel package.</p></header>
      <div className="capability-rows">{services.map((service, index) => <Link href={`/services/${service.slug}`} className="hover-target capability-motion-row" key={service.name} style={{"--row-accent": service.accent, "--row-soft": service.accentSoft} as React.CSSProperties}>
        <span>{String(index + 1).padStart(2, "0")}</span><h3>{service.name}</h3><p>{service.summary}</p>
        <DeferredToolOrbit tools={service.tools.slice(0, 4)}/><b>↗</b>
      </Link>)}</div>
    </section>

    <section className="home-clients shell">
      <span className="eyebrow-small">SELECTED CLIENT WORK</span>
      <div className="home-client-carousel" aria-label="Selected client work moving in a three dimensional carousel">
        <div className="home-client-arc">
          {homeClientLogos.map((client, index) => <Link
            className="home-client-motion"
            href={client.href}
            key={client.name}
            style={{"--client-delay": `${index * -3}s`, "--client-mobile-delay": `${index * -2.4}s`} as React.CSSProperties}
            aria-label={`View work for ${client.name}`}
          >
            <span className="home-client-card">
              <Image src={client.src} alt={client.alt} width={170} height={72} unoptimized/>
              <small>{client.name}</small>
            </span>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="featured-work shell">
      <header><span className="eyebrow-small">PORTFOLIO BACKED CASE STUDIES</span><h2>Real work.<br/><i>Visible evidence.</i></h2><p>Client stories built from Raj&apos;s supplied portfolio, including platform captures, before and after snapshots and attributed feedback. Historical rankings are clearly identified as point in time evidence.</p></header>
      <div className="work-grid">{caseStudies.map((study, index) => <Link href={`/work/${study.slug}`} className="work-card verified-work-card" key={study.slug} style={{"--work-accent": study.accent, "--work-soft": study.accentSoft} as React.CSSProperties}>
        <div className="work-card-image"><Image src={study.heroImage} alt={study.heroAlt} fill unoptimized sizes="(max-width: 900px) 100vw, 33vw"/><span className="work-visual-logo"><Image src={study.logo} alt="" width={145} height={54} unoptimized/></span></div>
        <div className="work-card-top"><span>0{index + 1}</span><b>VERIFIED PORTFOLIO CASE</b></div>
        <h3>{study.headline}</h3><p>{study.industry}</p>
        <div className="work-card-metric">{study.metrics.slice(0, 2).map((metric) => <span key={metric.label}><strong>{metric.value}</strong><small>{metric.label}</small></span>)}</div>
        <span className="work-arrow">READ THE EVIDENCE ↗</span>
      </Link>)}</div>
      <Link className="all-work-link" href="/work">VIEW ALL CLIENT WORK ↗</Link>
    </section>

    <section className="home-linkedin-work shell">
      <header><span className="eyebrow-small">RECENT LINKEDIN WORK</span><h2>Current client work.<br/><i>Visible on LinkedIn.</i></h2><p>Three recent posts from official client pages, reviewed in August 2026. The cards are static here to keep the page light; each link opens the supporting work sample.</p></header>
      <div className="linkedin-work-grid">
        {recentLinkedInWorkSamples.map((sample, index) => <LinkedInWorkCard sample={sample} index={index} recent key={sample.slug}/>)}
      </div>
      <Link className="all-work-link" href="/work#linkedin-work">VIEW THE LINKEDIN WORK ARCHIVE <span aria-hidden="true">↗</span></Link>
    </section>

    <section className="home-testimonials shell">
      <header><span className="eyebrow-small">CLIENT FEEDBACK</span><h2>Trust is earned<br/><i>in the work.</i></h2></header>
      <div>{caseStudies.map((study) => <blockquote key={study.client}><Image src={study.logo} alt={study.logoAlt} width={170} height={64} unoptimized/><p>“{study.testimonial.quote}”</p><footer><strong>{study.testimonial.name}</strong><span>{study.testimonial.role}</span></footer></blockquote>)}</div>
      <p className="testimonial-source-note">Feedback reproduced from Raj Kushwaha&apos;s 2025 portfolio.</p>
    </section>

    <section className="about-raj shell">
      <span className="eyebrow-small">WHO LEADS THE WORK</span>
      <div className="experience-orbit" aria-label="Six years of hands on digital marketing experience"><strong>06</strong><i aria-hidden="true"/><small>YEARS OF HANDS ON DIGITAL MARKETING EXPERIENCE</small></div>
      <article><h2>Raj Kushwaha works across search, social, content and analytics.</h2><p>His portfolio covers organic growth programs for staffing, medical billing and consulting brands. The work shown here combines strategy with execution: page planning, technical search, content production, LinkedIn publishing, measurement and the client conversations needed to keep each channel useful.</p><p>Before independent client work, the portfolio records experience with Autotech Nonwoven, Ages Pvt Ltd and Webtezz.</p><Link className="text-link" href="/about/raj-kushwaha">ABOUT RAJ AND THE EDITORIAL STANDARD ↗</Link></article>
    </section>

    <section className="method"><div className="shell"><span className="eyebrow-small">HOW THE WORK RUNS</span><h2>Evidence before activity.<br/><i>Learning before scale.</i></h2><div className="method-steps"><article><span>01</span><h3>Diagnose</h3><p>Review the offer, audience, journey, data and operating limits to identify the real constraint.</p></article><article><span>02</span><h3>Decide</h3><p>Set the outcome, channel roles, scope, ownership and success signals before production begins.</p></article><article><span>03</span><h3>Build</h3><p>Create the campaigns, content or product in testable parts with measurement attached.</p></article><article><span>04</span><h3>Improve</h3><p>Use customer behavior and commercial evidence to stop, repair or scale the right work.</p></article></div></div></section>
    <section className="real-growth shell"><h2>No ranking guarantees.<br/><i>No invented results.</i></h2><p>Raj Kushwaha Digital documents assumptions, labels concept work honestly and reports the signals that support an actual business decision.</p></section>
    <Contact/><Footer/>
  </main>;
}
