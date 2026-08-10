import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.rajkushwahadigital.com"),
  title: { default: "Digital Marketing Agency | Raj Kushwaha Digital", template: "%s | Raj Kushwaha Digital" },
  description: "Raj Kushwaha Digital connects SEO, paid media, social, branding, web development and AI automation into measurable growth systems.",
  authors: [{ name: "Raj Kushwaha Digital", url: "https://www.rajkushwahadigital.com" }],
  creator: "Raj Kushwaha Digital",
  publisher: "Raj Kushwaha Digital",
  category: "Digital Marketing",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Digital Marketing Agency | Raj Kushwaha Digital",
    description: "Strategy, search, media, creative, development and automation connected to measurable business progress.",
    url: "https://www.rajkushwahadigital.com",
    siteName: "Raj Kushwaha Digital",
    images: [{ url: "/og.jpg", width: 1200, height: 800, alt: "Raj Kushwaha Digital. Move Attention. Build Momentum." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency | Raj Kushwaha Digital",
    description: "Strategy, search, media, creative, development and automation connected to measurable business progress.",
    images: ["/og.jpg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.rajkushwahadigital.com/#organization",
      name: "Raj Kushwaha Digital",
      alternateName: "RKD",
      url: "https://www.rajkushwahadigital.com/",
      logo: "https://www.rajkushwahadigital.com/icon",
      email: "hello@rajkushwahadigital.com",
      description: "Independent digital marketing agency covering strategy, search, media, creative, development and AI automation.",
      founder: { "@id": "https://www.rajkushwahadigital.com/#raj-kushwaha" },
      contactPoint: {
        "@type": "ContactPoint",
        email: "hello@rajkushwahadigital.com",
        contactType: "sales",
      },
    },
    {
      "@type": "Person",
      "@id": "https://www.rajkushwahadigital.com/#raj-kushwaha",
      name: "Raj Kushwaha",
      jobTitle: "Digital Marketing Strategist",
      description: "Digital marketing strategist with six years of hands on experience across SEO, social media, content, analytics and organic growth.",
      worksFor: { "@id": "https://www.rajkushwahadigital.com/#organization" },
      sameAs: ["https://www.linkedin.com/in/rajkumarkushwaha014"],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.rajkushwahadigital.com/#website",
      url: "https://www.rajkushwahadigital.com/",
      name: "Raj Kushwaha Digital",
      alternateName: "RKD",
      publisher: { "@id": "https://www.rajkushwahadigital.com/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}/>{children}</body></html>;
}
