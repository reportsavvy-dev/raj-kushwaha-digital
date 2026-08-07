import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Contact, Footer } from "../../page";
import { Cursor } from "../../components/Cursor";
import { Nav } from "../../components/Nav";
import { RKDMark } from "../../components/BrandMark";
import { ServiceOrbital } from "../../components/ServiceOrbital";
import { ToolLogo } from "../../components/ToolLogo";
import { caseStudies } from "../../data/caseStudies";
import { linkedinWorkSamples } from "../../data/linkedinWork";
import { serviceBySlug, services } from "../../data/services";

type PageProps = { params: Promise<{ slug: string }> };

const serviceCaseVisuals: Record<string, { src: string; alt: string }> = {
  "digital-marketing": { src: "/case-studies/generated/growth-media.webp", alt: "Integrated digital growth and media system concept artwork" },
  "seo-aeo-geo-sxo": { src: "/case-studies/generated/search-intelligence.webp", alt: "Search intelligence, technical SEO and content authority concept artwork" },
  "social-media-management-marketing": { src: "/case-studies/generated/social-influence.webp", alt: "Social media publishing and community growth system concept artwork" },
  "ppc-ads": { src: "/case-studies/generated/growth-media.webp", alt: "Paid media, landing page and conversion measurement concept artwork" },
  branding: { src: "/case-studies/generated/brand-pr.webp", alt: "Brand identity system and campaign application concept artwork" },
  "logo-graphic-design": { src: "/case-studies/generated/brand-pr.webp", alt: "Responsive logo construction and graphic design system concept artwork" },
  "performance-marketing": { src: "/case-studies/generated/growth-media.webp", alt: "Performance marketing analytics and channel orchestration concept artwork" },
  "email-marketing": { src: "/case-studies/generated/lifecycle-leads.webp", alt: "Email lifecycle journey and audience segmentation concept artwork" },
  "lead-generation": { src: "/case-studies/generated/lifecycle-leads.webp", alt: "Lead capture, qualification and CRM handoff concept artwork" },
  "public-relations": { src: "/case-studies/generated/brand-pr.webp", alt: "Public relations story, press kit and brand system concept artwork" },
  "content-marketing": { src: "/case-studies/generated/search-intelligence.webp", alt: "Content authority, topic architecture and distribution concept artwork" },
  "influencer-marketing": { src: "/case-studies/generated/social-influence.webp", alt: "Influencer collaboration, social content and audience system concept artwork" },
  "web-development": { src: "/case-studies/generated/product-ai.webp", alt: "Responsive website system and performance monitoring concept artwork" },
  "app-software-development": { src: "/case-studies/generated/product-ai.webp", alt: "Application workflow, database and software interface concept artwork" },
  "ai-agent-automation": { src: "/case-studies/generated/product-ai.webp", alt: "AI agent workflow, approval gate and monitoring system concept artwork" },
};

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return {};
  const canonical = `/services/${service.slug}`;
  return {
    title: { absolute: service.metaTitle },
    description: service.metaDescription,
    alternates: { canonical },
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: canonical,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const index = services.findIndex((item) => item.slug === service.slug);
  const related = [services[(index + 1) % services.length], services[(index + 5) % services.length], services[(index + 10) % services.length]];
  const relatedCases = caseStudies.filter((study) => study.services.includes(service.slug));
  const relatedLinkedIn = linkedinWorkSamples.filter((sample) => sample.services.includes(service.slug));
  const hasClientProof = relatedCases.length > 0 || relatedLinkedIn.length > 0;
  const caseVisual = serviceCaseVisuals[service.slug];
  const orbitalService = { shortName: service.shortName, tools: service.tools, visual: service.visual, accent: service.accent, accentSoft: service.accentSoft };
  const canonicalUrl = `https://rajkushwahadigital.com/services/${service.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rajkushwahadigital.com/" },
          { "@type": "ListItem", position: 2, name: "Expertise", item: "https://rajkushwahadigital.com/expertise" },
          { "@type": "ListItem", position: 3, name: service.name, item: canonicalUrl },
        ],
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: service.name,
        serviceType: service.name,
        description: service.metaDescription,
        url: canonicalUrl,
        provider: { "@id": "https://rajkushwahadigital.com/#organization" },
        areaServed: "Worldwide",
      },
    ],
  };

  return <main className="service-page" style={{"--service-accent": service.accent, "--service-soft": service.accentSoft} as React.CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Cursor/><Nav/>

    <section className="service-detail-hero shell">
      <div className="service-hero-copy">
        <span className="eyebrow-small">EXPERTISE / {String(index + 1).padStart(2, "0")}</span>
        <h1>{service.name}</h1>
        <p className="service-direct-answer">{service.directAnswer}</p>
        <p>{service.intro}</p>
        <div><a className="primary-button magnetic" href={`mailto:hello@rajkushwahadigital.com?subject=${encodeURIComponent(service.name)} project`}>START A {service.shortName.toUpperCase()} PROJECT <span>→</span></a><Link className="text-link" href={hasClientProof ? "#client-work" : "#case-study"}>{hasClientProof ? "SEE CLIENT WORK" : "SEE THE PLANNING EXAMPLE"} ↓</Link></div>
      </div>
      <ServiceOrbital service={orbitalService}/>
    </section>

    <section className="service-marquee"><div>{[...service.tools, ...service.tools].map((tool, toolIndex) => <span key={`${tool}-${toolIndex}`}><ToolLogo name={tool}/><b>{tool}</b></span>)}</div></section>

    <section className="service-overview shell">
      <header><span className="eyebrow-small">SCOPE AND OUTCOMES</span><h2>{service.overviewHeading}</h2></header>
      <div className="service-overview-copy"><p>{service.summary}</p><small className="content-label">TYPICAL DELIVERABLES</small><ul>{service.deliverables.map((item) => <li key={item}><span>✓</span>{item}</li>)}</ul><div className="success-signals"><small className="content-label">SUCCESS SIGNALS</small><ul>{service.successSignals.map((item) => <li key={item}><span>↗</span>{item}</li>)}</ul></div></div>
    </section>

    <section className="service-benefits shell">
      {service.benefits.map((benefit, benefitIndex) => <article key={benefit.title}><span>0{benefitIndex + 1}</span><h3>{benefit.title}</h3><p>{benefit.text}</p></article>)}
    </section>

    <section className="service-process">
      <div className="shell"><header><span className="eyebrow-small">HOW THE WORK RUNS</span><h2>{service.processHeading}</h2></header><div className="service-process-grid">{service.process.map((item) => <article key={item.step}><span>{item.step}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div>
    </section>

    {relatedCases.length ? <section className="service-proof shell" id="client-work">
      <header><span className="eyebrow-small">RELATED CLIENT RESULTS</span><h2>Portfolio evidence for<br/><i>{service.shortName}.</i></h2><p>These cases use supplied screenshots, portfolio reporting and attributed client feedback.</p></header>
      <div>{relatedCases.map((study) => <Link href={`/work/${study.slug}`} key={study.slug} style={{"--proof-accent": study.accent, "--proof-soft": study.accentSoft} as React.CSSProperties}>
        <span className="service-proof-logo"><Image src={study.logo} alt={study.logoAlt} width={180} height={68} unoptimized/></span>
        <h3>{study.headline}</h3>
        <p>{study.metrics[0].value}<small>{study.metrics[0].label}</small></p>
        <b>VIEW EVIDENCE ↗</b>
      </Link>)}</div>
    </section> : null}

    {relatedLinkedIn.length ? <section className="service-linkedin-proof shell" id={relatedCases.length ? undefined : "client-work"}>
      <header><span className="eyebrow-small">PUBLIC LINKEDIN WORK</span><h2>Published work for<br/><i>real brands.</i></h2><p>These creatives are visible on the brands&apos; official LinkedIn pages. The work proves content and design delivery without inventing performance numbers.</p></header>
      <div className="service-linkedin-grid">{relatedLinkedIn.slice(0, 3).map((sample) => <Link href={`/work/linkedin/${sample.slug}`} key={sample.slug} style={{ "--sample-accent": sample.accent, "--sample-soft": sample.accentSoft } as React.CSSProperties}>
        <div className="service-linkedin-image"><Image src={sample.cardImage} alt={sample.cardAlt} fill unoptimized sizes="(max-width: 900px) 100vw, 33vw"/></div>
        <span><Image src={sample.logo} alt={sample.logoAlt} width={130} height={54} unoptimized/><small>{sample.client}</small></span>
        <h3>{sample.headline}</h3><b>VIEW WORK SAMPLE ↗</b>
      </Link>)}</div>
      {relatedLinkedIn.length > 3 ? <Link className="all-work-link" href="/work#linkedin-work">VIEW ALL NINE BRAND SAMPLES ↗</Link> : null}
    </section> : null}

    <section className="service-case shell" id="case-study">
      <div className="case-art">
        <Image className="case-art-image" src={caseVisual.src} alt={caseVisual.alt} fill unoptimized sizes="(max-width: 900px) 100vw, 55vw"/>
        <div className="case-art-top"><span className="case-art-brand"><RKDMark/><b>RAJ KUSHWAHA DIGITAL</b></span><b>{service.caseStudy.sector}</b></div>
        <div className="case-art-core"><small>RKD / {service.visual.toUpperCase()}</small><strong>{service.caseStudy.title}</strong></div>
      </div>
      <div className="case-copy">
        <span className="eyebrow-small">CAPABILITY CASE STUDY / CONCEPT</span><h2>{service.caseStudy.title}</h2>
        <div><small>THE CHALLENGE</small><p>{service.caseStudy.challenge}</p></div>
        <div><small>THE MOVE</small><p>{service.caseStudy.solution}</p></div>
        <div><small>THE IMPACT</small><p>{service.caseStudy.impact}</p></div>
        <ul>{service.caseStudy.metrics.map((metric) => <li key={metric}>{metric}</li>)}</ul>
        <p className="concept-disclosure">Planning example only. This is not client work and does not contain claimed results. Verified client cases appear above where relevant.</p>
      </div>
    </section>

    <section className="service-testimonial shell">
      <span>↗</span><blockquote>A successful engagement should make this statement true: “{service.testimonial.quote}”</blockquote><div className="testimonial-credit"><b>PROJECT OUTCOME STANDARD</b><small>Planning benchmark, not client feedback</small></div>
    </section>

    <section className="service-faq shell">
      <header><span className="eyebrow-small">CLEAR ANSWERS</span><h2>Questions about<br/><i>{service.shortName}.</i></h2></header>
      <div>{service.faqs.map((faq, faqIndex) => <details key={faq.question}><summary><span>0{faqIndex + 1}</span><b>{faq.question}</b><i>+</i></summary><p>{faq.answer}</p></details>)}</div>
    </section>

    {service.sources?.length ? <section className="service-sources shell"><span className="eyebrow-small">PRIMARY GUIDANCE</span><p>These sources inform the standards described on this page.</p><div>{service.sources.map((source) => <a href={source.href} rel="noreferrer" target="_blank" key={source.href}>{source.label}<span>↗</span></a>)}</div></section> : null}

    <section className="related-services shell"><header><span className="eyebrow-small">CONNECTED EXPERTISE</span><h2>Keep moving.</h2></header><div>{related.map((item) => <Link href={`/services/${item.slug}`} key={item.slug} style={{"--related-accent": item.accent, "--related-soft": item.accentSoft} as React.CSSProperties}><span>{item.shortName}</span><div>{item.tools.slice(0, 3).map((tool) => <ToolLogo name={tool} key={tool}/>)}</div><b>↗</b></Link>)}</div></section>

    <Contact/><Footer/>
  </main>;
}
