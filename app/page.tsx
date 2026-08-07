import Link from "next/link";
import { Nav } from "./components/Nav";

const services = [
  ["01", "Digital Marketing", "Full-funnel strategies that turn attention into measurable business growth."],
  ["02", "SEO · AEO · GEO · SXO", "Search visibility built for Google, AI answers and better user journeys."],
  ["03", "Social Media", "Always-on content, community and paid campaigns that build relevance."],
  ["04", "PPC Ads", "Precision media buying across Google and social with relentless optimization."],
  ["05", "Branding & Design", "Distinctive identities, logos and graphics made to be remembered."],
  ["06", "Performance Marketing", "Revenue-first campaigns tracked from first click to final conversion."],
  ["07", "Content & Influence", "Stories, creators, PR and content systems that earn attention."],
  ["08", "Web, Apps & AI", "Fast digital products, custom software and automations that scale."],
];

export default function Home() {
  return (
    <main>
      <Nav />
      <section className="hero wrap">
        <div className="eyebrow"><span /> Growth partner for ambitious brands</div>
        <h1>We turn <em>attention</em><br />into <strong>growth.</strong></h1>
        <div className="hero-bottom">
          <p>Strategy, creativity and technology working as one. We build digital experiences that move people—and numbers.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="mailto:hello@rajkushwahadigital.com?subject=Let’s grow my brand">Start a project <b>↗</b></a>
            <Link className="btn btn-ghost" href="/expertise">Explore expertise</Link>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb"><span>RK</span></div>
          <div className="metric metric-a"><small>AVERAGE ROAS</small><b>4.8×</b></div>
          <div className="metric metric-b"><small>GROWTH MINDSET</small><b>∞</b></div>
        </div>
      </section>

      <section className="marquee" aria-label="Services"><div>STRATEGY ✦ CREATIVE ✦ PERFORMANCE ✦ TECHNOLOGY ✦ STRATEGY ✦ CREATIVE ✦ PERFORMANCE ✦</div></section>

      <section className="services wrap" id="services">
        <div className="section-head">
          <div><span className="kicker">WHAT WE DO</span><h2>Everything your brand<br />needs to <i>move forward.</i></h2></div>
          <p>One integrated team. No silos, no vanity metrics—just the right mix of insight, craft and execution.</p>
        </div>
        <div className="service-grid">
          {services.map(([no, title, text]) => (
            <article className="service-card" key={no}>
              <span className="service-no">{no}</span><span className="arrow">↗</span>
              <h3>{title}</h3><p>{text}</p>
            </article>
          ))}
        </div>
        <div className="center"><Link className="text-link" href="/expertise">View all 15 capabilities <span>→</span></Link></div>
      </section>

      <section className="approach">
        <div className="wrap approach-grid">
          <div><span className="kicker">HOW WE WORK</span><h2>Built differently.<br /><i>Driven by impact.</i></h2></div>
          <div className="steps">
            <div><b>01</b><h3>Discover</h3><p>We find the real problem, audience and opportunity.</p></div>
            <div><b>02</b><h3>Design</h3><p>We turn insights into a sharp, connected growth plan.</p></div>
            <div><b>03</b><h3>Deliver</h3><p>We launch, measure, learn and improve—continuously.</p></div>
          </div>
        </div>
      </section>

      <section className="cta wrap" id="contact">
        <span className="kicker">YOUR NEXT CHAPTER</span>
        <h2>Have an idea?<br /><i>Let’s make it matter.</i></h2>
        <a className="round-cta" href="mailto:hello@rajkushwahadigital.com?subject=Project enquiry"><span>LET’S TALK</span><b>↗</b></a>
      </section>
      <Footer />
    </main>
  );
}

export function Footer() {
  return <footer><div className="wrap footer-grid"><div><div className="brand footer-brand"><span className="brand-mark">RK</span><span>RAJ KUSHWAHA<small>DIGITAL</small></span></div><p>Building brands people choose.</p></div><div><small>CONTACT</small><a href="mailto:hello@rajkushwahadigital.com">hello@rajkushwahadigital.com</a></div><div><small>EXPLORE</small><Link href="/">Home</Link><Link href="/expertise">Expertise</Link></div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} Raj Kushwaha Digital</span><span>RAJKUSHWAHADIGITAL.COM</span></div></footer>;
}
