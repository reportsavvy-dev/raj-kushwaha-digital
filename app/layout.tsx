import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BrandIntro } from "./components/BrandIntro";
import { ThemeAtmosphere } from "./components/ThemeSystem";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rajkushwahadigital.com"),
  title: { default: "Raj Kushwaha Digital — Growth, Creative & Technology", template: "%s | Raj Kushwaha Digital" },
  description: "A full-service digital growth agency for marketing, SEO, social, performance, branding, web development and AI automation.",
  openGraph: {
    title: "Raj Kushwaha Digital — Move Attention. Build Momentum.",
    description: "Strategy, creativity and technology—connected to grow your business.",
    url: "https://rajkushwahadigital.com",
    siteName: "Raj Kushwaha Digital",
    images: [{ url: "/og.png", width: 1536, height: 1024, alt: "Raj Kushwaha Digital — Move Attention. Build Momentum." }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raj Kushwaha Digital — Move Attention. Build Momentum.",
    description: "Strategy, creativity and technology—connected to grow your business.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning><body className={`${geistSans.variable} ${geistMono.variable}`}><ThemeAtmosphere/><BrandIntro/>{children}</body></html>;
}
