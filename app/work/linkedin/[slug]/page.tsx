import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cursor } from "../../../components/Cursor";
import { Nav } from "../../../components/Nav";
import { linkedinWorkBySlug, linkedinWorkSamples } from "../../../data/linkedinWork";
import { Contact, Footer } from "../../../page";

type PageProps = { params: Promise<{ slug: string }> };

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return linkedinWorkSamples.map((sample) => ({ slug: sample.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const sample = linkedinWorkBySlug(slug);
  if (!sample) return {};
  const canonical = `/work/linkedin/${sample.slug}`;
  return {
    title: { absolute: `${sample.client} LinkedIn Work | Raj Kushwaha Digital` },
    description: sample.summary,
    alternates: { canonical },
    openGraph: {
      title: sample.headline,
      description: sample.summary,
      url: canonical,
      type: "article",
      images: [{ url: sample.postImage }],
    },
  };
}

export default async function LinkedInWorkPage({ params }: PageProps) {
  const { slug } = await params;
  const sample = linkedinWorkBySlug(slug);
  if (!sample) notFound();
  const index = linkedinWorkSamples.findIndex((item) => item.slug === sample.slug);
  const next = linkedinWorkSamples[(index + 1) % linkedinWorkSamples.length];
  const canonicalUrl = `https://rajkushwahadigital.com/work/linkedin/${sample.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: "https://rajkushwahadigital.com/" },
          { "@type": "ListItem", position: 2, name: "Work", item: "https://rajkushwahadigital.com/work" },
          { "@type": "ListItem", position: 3, name: sample.client, item: canonicalUrl },
        ],
      },
      {
        "@type": "Article",
        headline: sample.headline,
        description: sample.summary,
        url: canonicalUrl,
        image: `https://rajkushwahadigital.com${sample.postImage}`,
        author: { "@id": "https://rajkushwahadigital.com/#person" },
        publisher: { "@id": "https://rajkushwahadigital.com/#organization" },
        about: sample.client,
      },
    ],
  };

  return <main className="case-study-page linkedin-sample-page" style={{ "--case-accent": sample.accent, "--case-soft": sample.accentSoft } as React.CSSProperties}>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Cursor/><Nav/>

    <section className="case-hero linkedin-case-hero shell">
      <div className="case-hero-copy">
        <span className="eyebrow-small">PUBLIC LINKEDIN WORK / {String(index + 1).padStart(2, "0")}</span>
        <Image src={sample.logo} alt={sample.logoAlt} width={220} height={100} priority unoptimized/>
        <small>{sample.topic}</small>
        <h1>{sample.headline}</h1>
        <p>{sample.summary}</p>
      </div>
      <div className="case-hero-visual linkedin-post-visual"><Image src={sample.postImage} alt={sample.postAlt} fill priority sizes="(max-width: 900px) 100vw, 50vw"/><span className="case-visual-logo"><Image src={sample.logo} alt="" width={170} height={68} unoptimized/></span></div>
    </section>

    <section className="case-provenance shell">
      <span>LIVE WORK SAMPLE</span>
      <p>This page documents a publicly visible LinkedIn creative and the production system behind it. It demonstrates delivered content and design work. It does not claim impressions, leads or revenue that are not publicly verified.</p>
      <a href={sample.postUrl} target="_blank" rel="noreferrer">VIEW LINKEDIN POST ↗</a>
    </section>

    <section className="case-narrative linkedin-case-narrative shell">
      <article><span>01 / THE BRIEF</span><h2>What the post needed to solve</h2><p>{sample.challenge}</p><p><strong>Primary audience:</strong> {sample.audience}</p></article>
      <article><span>02 / THE APPROACH</span><h2>How the idea was shaped</h2>{sample.approach.map((item) => <p key={item}>{item}</p>)}</article>
      <article><span>03 / THE DELIVERY</span><h2>What was produced</h2>{sample.delivered.map((item) => <p key={item}>{item}</p>)}</article>
    </section>

    <section className="linkedin-proof shell">
      <div className="linkedin-proof-image"><Image src={sample.postImage} alt={sample.postAlt} width={900} height={1125} sizes="(max-width: 900px) 100vw, 52vw"/></div>
      <article>
        <span className="eyebrow-small">WHAT THIS SAMPLE PROVES</span>
        <h2>Strategy made<br/><i>visible.</i></h2>
        <ul>
          <li><b>01</b><span>One audience and one professional problem were defined before design.</span></li>
          <li><b>02</b><span>The headline, visual and caption were built around the same takeaway.</span></li>
          <li><b>03</b><span>The creative follows the client&apos;s own identity rather than one agency template.</span></li>
          <li><b>04</b><span>The final asset is visible on the client&apos;s official LinkedIn presence.</span></li>
        </ul>
        <div className="linkedin-proof-links"><a href={sample.linkedin} target="_blank" rel="noreferrer">COMPANY PAGE ↗</a><a href={sample.website} target="_blank" rel="noreferrer">CLIENT WEBSITE ↗</a></div>
      </article>
    </section>

    <Link href={`/work/linkedin/${next.slug}`} className="next-case shell"><span>NEXT LINKEDIN SAMPLE</span><strong>{next.client}</strong><i>↗</i></Link>
    <Contact/><Footer/>
  </main>;
}
