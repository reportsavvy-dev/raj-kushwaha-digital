import { Nav } from "../components/Nav";
import { Footer } from "../page";

const expertise = [
  ["Digital Marketing", ["Digital strategy", "Campaign planning", "Funnel optimization", "Analytics & reporting"]],
  ["SEO · AEO · GEO · SXO", ["Technical & on-page SEO", "Answer engine optimization", "Generative engine optimization", "Search experience optimization"]],
  ["Social Media Management", ["Content strategy", "Community management", "Social listening", "Paid social campaigns"]],
  ["PPC Ads", ["Google Search & Display", "Meta & LinkedIn Ads", "Media planning", "Conversion tracking"]],
  ["Branding", ["Brand strategy", "Positioning & messaging", "Visual identity", "Brand guidelines"]],
  ["Logo & Graphic Design", ["Logo systems", "Campaign creatives", "Social media design", "Print & marketing collateral"]],
  ["Performance Marketing", ["Full-funnel acquisition", "CRO & landing pages", "Attribution", "Experimentation"]],
  ["Email Marketing", ["Lifecycle automation", "Newsletters", "Lead nurturing", "Segmentation & testing"]],
  ["Lead Generation", ["B2B & B2C funnels", "Landing pages", "CRM workflows", "Lead qualification"]],
  ["PR · Public Relations", ["Media relations", "Press releases", "Reputation management", "Founder positioning"]],
  ["Content Marketing", ["Content strategy", "Blogs & articles", "Video & scripts", "Case studies"]],
  ["Influencer Marketing", ["Creator discovery", "Campaign management", "UGC programs", "Performance reporting"]],
  ["Web Development", ["Marketing websites", "E-commerce", "Landing pages", "Maintenance & optimization"]],
  ["App & Software Development", ["Mobile apps", "Web applications", "Custom software", "Product design"]],
  ["AI Agents & Automation", ["AI assistants", "Workflow automation", "CRM automation", "Custom integrations"]],
];

export default function Expertise() {
  return <main><Nav />
    <section className="inner-hero wrap"><span className="kicker">OUR EXPERTISE</span><h1>One team.<br /><i>Every growth lever.</i></h1><p>From the first search to the final sale, we connect strategy, creative, media and technology to make every touchpoint work harder.</p></section>
    <section className="expertise-list wrap">
      {expertise.map(([title, items], i) => <article key={title as string}>
        <span className="exp-no">{String(i + 1).padStart(2, "0")}</span><h2>{title as string}</h2>
        <ul>{(items as string[]).map(item => <li key={item}>{item}</li>)}</ul>
        <a href={`mailto:hello@rajkushwahadigital.com?subject=${encodeURIComponent(title as string)}`} aria-label={`Enquire about ${title}`}>↗</a>
      </article>)}
    </section>
    <section className="cta wrap"><span className="kicker">NEED THE RIGHT MIX?</span><h2>Let’s build your<br /><i>growth engine.</i></h2><a className="round-cta" href="mailto:hello@rajkushwahadigital.com?subject=Build my growth plan"><span>GET A PLAN</span><b>↗</b></a></section>
    <Footer />
  </main>;
}
