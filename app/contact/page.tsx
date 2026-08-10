import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "../components/ContactForm";
import { Cursor } from "../components/Cursor";
import { Nav } from "../components/Nav";
import { Footer } from "../page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Contact Raj Kushwaha Digital | Start a Project" },
  description: "Tell Raj Kushwaha Digital what is stuck, what needs to change and what a useful result looks like. Start a marketing, search, creative, web or AI project.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Start a Project | Raj Kushwaha Digital",
    description: "Share the business problem, scope and timing. We will review the brief and recommend a useful next move.",
    url: "/contact",
    type: "website",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://rajkushwahadigital.com/" },
        { "@type": "ListItem", position: 2, name: "Contact", item: "https://rajkushwahadigital.com/contact" },
      ],
    },
    {
      "@type": "ContactPage",
      "@id": "https://rajkushwahadigital.com/contact#page",
      url: "https://rajkushwahadigital.com/contact",
      name: "Contact Raj Kushwaha Digital",
      description: "Project enquiry page for Raj Kushwaha Digital.",
      inLanguage: "en",
      mainEntity: { "@id": "https://rajkushwahadigital.com/#organization" },
    },
  ],
};

export default function ContactPage() {
  return <main className="contact-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}/>
    <Cursor/><Nav/>
    <section className="contact-page-layout shell">
      <div className="contact-page-intro">
        <span className="eyebrow-small">NEW BUSINESS / PROJECT ENQUIRY</span>
        <h1>Start with<br/>the real<br/><i>problem.</i></h1>
        <p>Tell us what is stuck, what needs to change and what a useful result looks like. You do not need to arrive with the channel, scope or solution already decided.</p>

        <section className="direct-contact-card">
          <span>DIRECT CONTACT</span>
          <a href="mailto:hello@rajkushwahadigital.com?subject=Project enquiry">hello@rajkushwahadigital.com <b>↗</b></a>
          <p><small>RESPONSE EXPECTATION</small>Usually within two business days.</p>
        </section>

        <section className="contact-next-steps">
          <span>WHAT HAPPENS NEXT</span>
          <ol>
            <li><b>01</b><strong>Review</strong><small>We read the brief and inspect any supplied links.</small></li>
            <li><b>02</b><strong>Clarify</strong><small>We ask only the questions needed to frame the work.</small></li>
            <li><b>03</b><strong>Recommend</strong><small>You receive a practical next step, scope or discovery call.</small></li>
          </ol>
        </section>

        <Link className="contact-work-link" href="/work">Prefer to see the evidence first? <b>VIEW CLIENT WORK ↗</b></Link>
      </div>
      <div className="contact-form-orbit" aria-hidden="true"><i/><i/><i/><b/><b/></div>
      <ContactForm/>
    </section>
    <Footer/>
  </main>;
}
