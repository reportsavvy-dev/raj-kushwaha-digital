import type { Metadata } from "next";
import { Cursor } from "../components/Cursor";
import { ExpertiseExplorer } from "../components/ExpertiseExplorer";
import { Nav } from "../components/Nav";
import { Contact, Footer } from "../page";

export const metadata: Metadata = {
  title: "Expertise",
  description: "Explore 15 connected digital marketing, creative, technology and automation services from Raj Kushwaha Digital.",
};

export default function Expertise() {
  return <main><Cursor/><Nav/>
    <section className="expertise-hero shell"><span className="eyebrow-small">15 CONNECTED CAPABILITIES</span><h1>Every discipline.<br/><i>Moving as one.</i></h1><p>Move across the index. Each capability activates a colorful universe of real tools and platforms. Open any service for its complete process, concept case study, testimonial layout and FAQs.</p></section>
    <ExpertiseExplorer/><Contact/><Footer/>
  </main>;
}
