import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BrandIntro } from "./components/BrandIntro";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rajkushwahadigital.com"),
  title: { default: "Digital Marketing Agency | Raj Kushwaha Digital", template: "%s | Raj Kushwaha Digital" },
  description: "Raj Kushwaha Digital connects SEO, paid media, social, branding, web development and AI automation into measurable growth systems.",
  authors: [{ name: "Raj Kushwaha Digital", url: "https://rajkushwahadigital.com" }],
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
    url: "https://rajkushwahadigital.com",
    siteName: "Raj Kushwaha Digital",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Raj Kushwaha Digital. Move Attention. Build Momentum." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency | Raj Kushwaha Digital",
    description: "Strategy, search, media, creative, development and automation connected to measurable business progress.",
    images: ["/og.png"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://rajkushwahadigital.com/#organization",
      name: "Raj Kushwaha Digital",
      alternateName: "RKD",
      url: "https://rajkushwahadigital.com/",
      email: "hello@rajkushwahadigital.com",
      description: "Independent digital marketing agency covering strategy, search, media, creative, development and AI automation.",
      founder: { "@id": "https://rajkushwahadigital.com/#raj-kushwaha" },
    },
    {
      "@type": "Person",
      "@id": "https://rajkushwahadigital.com/#raj-kushwaha",
      name: "Raj Kushwaha",
      jobTitle: "Digital Marketing Strategist",
      description: "Digital marketing strategist with six years of hands on experience across SEO, social media, content, analytics and organic growth.",
      worksFor: { "@id": "https://rajkushwahadigital.com/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://rajkushwahadigital.com/#website",
      url: "https://rajkushwahadigital.com/",
      name: "Raj Kushwaha Digital",
      alternateName: "RKD",
      publisher: { "@id": "https://rajkushwahadigital.com/#organization" },
      inLanguage: "en",
    },
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${geistSans.variable} ${geistMono.variable}`}><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c") }}/><BrandIntro/>{children}</body></html>;
}
