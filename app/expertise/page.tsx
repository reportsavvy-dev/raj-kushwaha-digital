import type { Metadata } from "next";
import { Cursor } from "../components/Cursor";
import { ExpertiseExplorer } from "../components/ExpertiseExplorer";
import { Nav } from "../components/Nav";
import { services } from "../data/services";
import { Contact, Footer } from "../page";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: { absolute: "Digital Marketing Services & Expertise | RKD" },
  description: "Explore 15 connected services across SEO, media, social, branding, content, development and AI automation.",
  alternates: { canonical: "/expertise" },
};

export default function Expertise() {
  const explorerServices = services.map(({ name, shortName, slug, summary, deliverables, tools, visual, accent, accentSoft }) => ({ name, shortName, slug, summary, deliverables, tools, visual, accent, accentSoft }));
  return <main><Cursor/><Nav/>
    <section className="expertise-hero shell"><span className="eyebrow-small">15 DIGITAL GROWTH SERVICES</span><h1>Choose the expertise.<br/><i>Keep the system connected.</i></h1><p>Raj Kushwaha Digital brings strategy, acquisition, creative, technology and automation into one accountable plan. Open any service for a plain-language scope, delivery process, success measures, illustrative case format and direct answers to common buying questions.</p></section>
    <ExpertiseExplorer services={explorerServices}/><Contact/><Footer/>
  </main>;
}
