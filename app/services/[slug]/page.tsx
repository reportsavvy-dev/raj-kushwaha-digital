import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact, Footer } from "../../page";
import { Cursor } from "../../components/Cursor";
import { Nav } from "../../components/Nav";
import { ServiceOrbital } from "../../components/ServiceOrbital";
import { ToolLogo } from "../../components/ToolLogo";
import { serviceBySlug, services } from "../../data/services";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  return { title: service.name, description: service.summary };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === service.slug);
  const related = [services[(index + 1) % services.length], services[(index + 5) % services.length], services[(index + 10) % services.length]];

  return <main className="service-page" style={{"--service-accent": service.accent, "--service-soft": service.accentSoft} as React.CSSProperties}>
    <Cursor/><Nav/>

    <section className="service-detail-hero shell">
      <div className="service-hero-copy">
        <span className="eyebrow-small">EXPERTISE / {String(index + 1).padStart(2, "0")}</span>
        <h1>{service.name}</h1>
        <p>{service.intro}</p>
        <div><a className="primary-button magnetic" href={`mailto:hello@rajkushwahadigital.com?subject=${encodeURIComponent(service.name)} project`}>START A {service.shortName.toUpperCase()} PROJECT <span>→</span></a><Link className="text-link" href="#case-study">SEE THE CASE STUDY ↓</Link></div>
      </div>
      <ServiceOrbital service={service}/>
    </section>

    <section className="service-marquee"><div>{[...service.tools, ...service.tools].map((tool, toolIndex) => <span key={`${tool}-${toolIndex}`}><ToolLogo name={tool}/><b>{tool}</b></span>)}</div></section>

    <section className="service-overview shell">
      <header><span className="eyebrow-small">WHAT WE BUILD</span><h2>A connected system,<br/><i>not isolated output.</i></h2></header>
      <div className="service-overview-copy"><p>{service.summary}</p><ul>{service.deliverables.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul></div>
    </section>

    <section className="service-benefits shell">
      {service.benefits.map((benefit, benefitIndex) => <article key={benefit.title}><span>0{benefitIndex + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}
    </section>

    <section className="service-process">
      <div className="shell"><header><span className="eyebrow-small">OUR PROCESS</span><h2>Designed to learn.<br/><i>Built to move.</i></h2></header><div className="service-process-grid">{service.process.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
    </section>

    <section className="service-case shell" id="case-study">
      <div className="case-art">
        <div className="case-art-top"><span>{service.caseStudy.label ?? "Case study"}</span><b>{service.caseStudy.sector}</b></div>
        <div className="case-art-core"><small>RKD / {service.visual.toUpperCase()}</small><strong>{service.caseStudy.title}</strong></div>
        <div className="case-art-tools">{service.tools.slice(0, 5).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div>
      </div>
      <div className="case-copy">
        <span className="eyebrow-small">CASE STUDY / CONCEPT</span><h2>{service.caseStudy.title}</h2>
        <div><small>THE CHALLENGE</small><p>{service.caseStudy.challenge}</p></div>
        <div><small>THE MOVE</small><p>{service.caseStudy.solution}</p></div>
        <div><small>THE IMPACT</small><p>{service.caseStudy.impact}</p></div>
        <ul>{service.caseStudy.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
        <p className="concept-disclosure">Illustrative concept prepared to demonstrate the case-study format. Replace with verified portfolio data before presenting it as client work.</p>
      </div>
    </section>

    <section className="service-testimonial shell">
      <span>“</span><blockquote>{service.testimonial.quote}</blockquote><div className="testimonial-credit"><b>{service.testimonial.label}</b><small>{service.testimonial.attribution}</small></div>
    </section>

    <section className="service-faq shell">
      <header><span className="eyebrow-small">QUESTIONS, ANSWERED</span><h2>FAQs about<br/><i>{service.shortName}.</i></h2></header>
      <div>{service.faqs.map((faq, faqIndex) => <details key={faq.question}><summary><span>0{faqIndex + 1}</span><b>{faq.question}</b><i>+</i></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    <section className="related-services shell"><header><span className="eyebrow-small">CONNECTED EXPERTISE</span><h2>Keep moving.</h2></header><div>{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug} style={{"--related-accent": item.accent, "--related-soft": item.accentSoft} as React.CSSProperties}><span>{item.shortName}</span><div>{item.tools.slice(0, 3).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div><b>↗</b></Link>)}</div></section>

    <Contact/><Footer/>
  </main>;
}
