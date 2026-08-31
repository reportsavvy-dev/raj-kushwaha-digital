import type { Metadata } from "next";
import { CookieSettingsButton } from "../components/AnalyticsConsent";
import { Footer } from "../components/SiteSections";
import { Nav } from "../components/Nav";

export const metadata: Metadata = {
  title: "Privacy and Analytics Notice",
  description: "How Raj Kushwaha Digital handles project enquiries, analytics consent and website data.",
  alternates: { canonical: "https://www.rajkushwahadigital.com/privacy" },
  openGraph: {
    title: "Privacy and Analytics Notice | Raj Kushwaha Digital",
    description: "How Raj Kushwaha Digital handles project enquiries, analytics consent and website data.",
    url: "https://www.rajkushwahadigital.com/privacy",
    images: [{ url: "/og.jpg", width: 1200, height: 800, alt: "Raj Kushwaha Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy and Analytics Notice | Raj Kushwaha Digital",
    description: "How Raj Kushwaha Digital handles project enquiries, analytics consent and website data.",
    images: ["/og.jpg"],
  },
};

export default function PrivacyPage() {
  return <main><Nav/><article className="privacy-page shell">
    <header><span className="eyebrow-small">PRIVACY & ANALYTICS</span><h1>Clear choices.<br/><i>Limited collection.</i></h1><p>Last updated: 1 September 2026</p></header>
    <section><h2>What this notice covers</h2><p>Raj Kushwaha Digital operates this website and is responsible for the information described here. Questions or privacy requests can be sent to <a href="mailto:hello@rajkushwahadigital.com">hello@rajkushwahadigital.com</a>.</p></section>
    <section><h2>Project enquiries</h2><p>When you submit the project enquiry form, we receive the details you enter so we can respond and assess the requested work. The form is delivered through FormSubmit. We do not send your name, email address, company, message or other form fields to Google Analytics.</p></section>
    <section><h2>Optional website analytics</h2><p>Google Tag Manager and Google Analytics 4 load only after you select <strong>Allow analytics</strong>. They may record pages viewed, approximate location, device and browser information, referral source, scrolls, outbound clicks and successful enquiry events. The enquiry event contains only the form name, not the submitted form content.</p></section>
    <section><h2>Your analytics choice</h2><p>Your choice is stored in your browser as <code>rkd_analytics_consent</code>. Declining prevents the Google tracking script from loading. You can change your choice at any time.</p><CookieSettingsButton/></section>
    <section><h2>Storage and sharing</h2><p>Enquiry information is retained only as needed for the conversation, service delivery and legitimate business records. Analytics data is processed by Google under its applicable terms and privacy documentation. We do not sell personal information.</p></section>
    <section><h2>Your request</h2><p>You may ask us to access, correct or delete information you previously provided, subject to applicable legal or record-keeping requirements. Contact us using the email address above.</p></section>
  </article><Footer/></main>;
}
