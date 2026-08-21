/* eslint-disable @next/next/no-img-element */
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Cursor } from "../../components/Cursor";
import { Nav } from "../../components/Nav";
import { insightBySlug, insights } from "../../data/insights";
import { Contact, Footer } from "../../components/SiteSections";

type PageProps = { params: Promise<{ slug: string }> };
const baseUrl = "https://www.rajkushwahadigital.com";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight) return {};
  const canonical = `/insights/${insight.slug}`;
  return {
    title: { absolute: insight.metaTitle },
    description: insight.description,
    authors: [{ name: "Raj Kushwaha", url: "/about/raj-kushwaha" }],
    alternates: { canonical },
    openGraph: {
      title: insight.metaTitle,
      description: insight.description,
      url: canonical,
      type: "article",
      publishedTime: insight.published,
      modifiedTime: insight.modified,
      authors: [`${baseUrl}/about/raj-kushwaha`],
      images: insight.image ? [{ url: insight.image.src, width: insight.image.width, height: insight.image.height, alt: insight.image.alt }] : undefined,
    },
    twitter: insight.image ? { card: "summary_large_image", title: insight.metaTitle, description: insight.description, images: [insight.image.src] } : undefined,
  };
}

export default async function InsightPage({ params }: PageProps) {
  const { slug } = await params;
  const insight = insightBySlug(slug);
  if (!insight) notFound();
  const canonicalUrl = `${baseUrl}/insights/${insight.slug}`;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${canonicalUrl}#article`,
        headline: insight.title,
        description: insight.description,
        datePublished: insight.published,
        dateModified: insight.modified,
        inLanguage: "en",
        mainEntityOfPage: canonicalUrl,
        author: { "@id": `${baseUrl}/#raj-kushwaha` },
        publisher: { "@id": `${baseUrl}/#organization` },
        isPartOf: { "@id": `${baseUrl}/#website` },
        about: insight.category,
        image: insight.image ? `${baseUrl}${insight.image.src}` : undefined,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
          { "@type": "ListItem", position: 2, name: "Insights", item: `${baseUrl}/insights` },
          { "@type": "ListItem", position: 3, name: insight.title, item: canonicalUrl },
        ],
      },
    ],
  };

  return <main className="insight-article-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Cursor/><Nav/>
    <article>
      <header className="article-hero shell">
        <nav aria-label="Breadcrumb"><Link href="/insights">INSIGHTS</Link><span>/</span><span>{insight.category}</span></nav>
        <h1>{insight.title}</h1>
        <p>{insight.excerpt}</p>
        <div className="article-byline">
          <span>BY <Link href="/about/raj-kushwaha" rel="author">RAJ KUSHWAHA</Link></span>
          <time dateTime={insight.published}>PUBLISHED {new Date(`${insight.published}T00:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" }).toUpperCase()}</time>
          <span>{insight.readTime}</span>
        </div>
        {insight.image ? <figure className="article-hero-image">{/* A pre-compressed static WebP avoids an image-proxy request on the edge. */}<img src={insight.image.src} alt={insight.image.alt} width={insight.image.width} height={insight.image.height} fetchPriority="high" decoding="async"/></figure> : null}
      </header>
      <section className="article-answer shell" aria-labelledby="direct-answer-title">
        <span>DIRECT ANSWER</span><h2 id="direct-answer-title">The short version</h2><p>{insight.directAnswer}</p>
      </section>
      <div className="article-layout shell">
        <aside>
          <span>KEY TAKEAWAYS</span>
          <ol>{insight.takeaways.map((takeaway) => <li key={takeaway}>{takeaway}</li>)}</ol>
        </aside>
        <div className="article-body">
          {insight.sections.map((section) => <section key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets ? <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul> : null}
          </section>)}
          <section className="article-sources" aria-labelledby="article-sources-heading">
            <span>PRIMARY SOURCES</span><h2 id="article-sources-heading">Check the platform guidance</h2>
            <p>Sources reviewed {new Date(`${insight.modified}T00:00:00Z`).toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" })}. These links support the platform-specific statements above; they do not imply a partnership or endorsement.</p>
            <ol>{insight.sources.map((source) => <li key={source.href}><a href={source.href} target="_blank" rel="noopener noreferrer"><b>{source.label}</b><small>{source.note}</small><i>↗</i></a></li>)}</ol>
          </section>
        </div>
      </div>
      <section className="article-next shell">
        <div><span>RELATED EXPERTISE</span><h2>Turn the guidance into an operating plan.</h2></div>
        <Link href={insight.relatedService.href}>{insight.relatedService.label} <i>↗</i></Link>
      </section>
    </article>
    <Contact/><Footer/>
  </main>;
}
