import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cursor } from "../../components/Cursor";
import { Nav } from "../../components/Nav";
import { caseStudies, caseStudyBySlug } from "../../data/caseStudies";
import { Contact, Footer } from "../../page";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) return {};
  const canonical = `/work/${study.slug}`;
  return {
    title: { absolute: `${study.client} Case Study | Raj Kushwaha Digital` },
    description: study.metaDescription,
    alternates: { canonical },
    openGraph: { title: study.headline, description: study.metaDescription, url: canonical, type: "article", images: [{ url: study.heroImage }] },
  };
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudyBySlug(slug);
  if (!study) notFound();
  const index = caseStudies.findIndex((item) => item.slug === study.slug);
  const next = caseStudies[(index + 1) % caseStudies.length];
  const canonicalUrl = `https://www.rajkushwahadigital.com/work/${study.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://www.rajkushwahadigital.com/" },
          { "@type": "ListItem", position: 2, name: "Work", item: "https://www.rajkushwahadigital.com/work" },
          { "@type": "ListItem", position: 3, name: study.client, item: canonicalUrl },
        ],
      },
      {
        "@type": "Article",
        headline: study.headline,
        description: study.summary,
        url: canonicalUrl,
        mainEntityOfPage: canonicalUrl,
        inLanguage: "en",
        image: `https://www.rajkushwahadigital.com${study.heroImage}`,
        author: { "@id": "https://www.rajkushwahadigital.com/#raj-kushwaha" },
        publisher: { "@id": "https://www.rajkushwahadigital.com/#organization" },
        about: study.client,
        dateModified: "2026-08-11",
      },
    ],
  };

  return <main className="case-study-page" style={{"--case-accent": study.accent, "--case-soft": study.accentSoft} as React.CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\u003c") }}/>
    <Cursor/><Nav/>
    <section className="case-hero shell">
      <div className="case-hero-copy">
        <span className="eyebrow-small">PORTFOLIO CASE / {String(index + 1).padStart(2, "0")}</span>
        <Image src={study.logo} alt={study.logoAlt} width={280} height={110} priority unoptimized/>
        <small>{study.industry}</small>
        <h1>{study.headline}</h1>
        <p>{study.summary}</p>
      </div>
      <div className="case-hero-visual"><Image src={study.heroImage} alt={study.heroAlt} fill priority unoptimized sizes="(max-width: 900px) 100vw, 50vw"/><span className="case-visual-logo"><Image src={study.logo} alt="" width={190} height={72} unoptimized/></span></div>
    </section>

    <section className="case-metric-grid shell">{study.metrics.map((metric) => <article key={metric.label}><strong>{metric.value}</strong><h2>{metric.label}</h2><p>{metric.detail}</p></article>)}</section>

    <section className="case-provenance shell"><span>VERIFIED PORTFOLIO SOURCE</span><p>{study.evidenceNote}</p><a href={study.website} target="_blank" rel="noreferrer">VISIT CLIENT WEBSITE ↗</a></section>

    <section className="case-narrative shell">
      <article><span>01 / THE STARTING POINT</span><h2>What had to change</h2>{study.challenge.map((item) => <p key={item}>{item}</p>)}</article>
      <article><span>02 / THE WORK</span><h2>What Raj did</h2>{study.work.map((item) => <p key={item}>{item}</p>)}</article>
      <article><span>03 / THE OUTCOME</span><h2>What the evidence shows</h2>{study.outcomes.map((item) => <p key={item}>{item}</p>)}</article>
    </section>

    <section className="case-evidence shell">
      <header><span className="eyebrow-small">SUPPLIED EVIDENCE</span><h2>The screenshots<br/><i>behind the story.</i></h2></header>
      <div>{study.evidence.map((item) => <figure key={item.src}><Image src={item.src} alt={item.alt} width={1400} height={788} unoptimized sizes="(max-width: 900px) 100vw, 50vw"/><figcaption>{item.caption}</figcaption></figure>)}</div>
    </section>

    <section className="verified-testimonial shell">
      <span>CLIENT FEEDBACK</span>
      <blockquote>“{study.testimonial.quote}”</blockquote>
      <p><strong>{study.testimonial.name}</strong><small>{study.testimonial.role}</small></p>
    </section>

    <Link href={`/work/${next.slug}`} className="next-case shell"><span>NEXT CASE</span><strong>{next.client}</strong><i>↗</i></Link>
    <Contact/><Footer/>
  </main>;
}
