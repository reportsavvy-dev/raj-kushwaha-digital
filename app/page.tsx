import Link from "next/link";
import { Cursor } from "./components/Cursor";
import { HeroCanvas } from "./components/HeroCanvas";
import { Logo, Nav } from "./components/Nav";
import { ToolLogo } from "./components/ToolLogo";
import { services } from "./data/services";

export default function Home(){return <main><Cursor/><Nav/>
 <section className="home-hero shell"><div className="hero-copy"><span className="eyebrow-small">INDEPENDENT DIGITAL GROWTH AGENCY</span><h1 className="kinetic-title"><span>Move <i>attention.</i></span><span>Build <i>momentum.</i></span></h1><p>Strategy, creativity and technology—connected to grow your business.</p><div><a className="primary-button magnetic" href="mailto:hello@rajkushwahadigital.com?subject=Start a project">START A PROJECT <span>→</span></a><Link className="secondary-button magnetic" href="/expertise">EXPLORE EXPERTISE ↗</Link></div></div><HeroCanvas/></section>
 <div className="ticker coral-ticker"><div>{[...services,...services].map((s,i)=><span key={`${s.name}-${i}`}>{s.name} <b>•</b></span>)}</div></div>
 <section className="home-capabilities shell"><header><span className="eyebrow-small">CAPABILITIES IN MOTION</span><h2>Every discipline.<br/><i>Moving as one.</i></h2><p>Move across a service to reveal the tools and platforms that power it. Every orbit is connected to a clear role in your growth.</p></header><div className="capability-rows">{services.map((s,i)=><Link href="/expertise" className="hover-target capability-motion-row" key={s.name}><span>{String(i+1).padStart(2,"0")}</span><h3>{s.name}</h3><p>{s.summary}</p><div className="mini-tool-orbit">{s.tools.slice(0,4).map(t=><ToolLogo name={t} key={t}/>)}</div><b>↗</b></Link>)}</div></section>
 <section className="method"><div className="shell"><span className="eyebrow-small">HOW WE MOVE</span><h2>From signal to<br/><i>business momentum.</i></h2><div className="method-steps"><article><span>01</span><h3>Discover</h3><p>Understand the business, audience and the real growth problem.</p></article><article><span>02</span><h3>Strategize</h3><p>Choose the right message, channels and connected plan.</p></article><article><span>03</span><h3>Create</h3><p>Design content, campaigns and digital experiences with purpose.</p></article><article><span>04</span><h3>Activate</h3><p>Launch, learn and improve the system as real signals arrive.</p></article></div></div></section>
 <section className="real-growth shell"><h2>No fake promises.<br/><i>Only focused work.</i></h2><p>We connect strategy, creativity and technology around the problem your business actually needs to solve.</p></section><Contact/><Footer/></main>}

export function Contact(){return <section className="contact shell" id="contact"><div className="logo-watermark">RKD</div><div><span className="eyebrow-small">READY WHEN YOU ARE</span><h2>Let&apos;s make your brand<br/><i>the next big signal.</i></h2><a href="mailto:hello@rajkushwahadigital.com">hello@rajkushwahadigital.com <span>↗</span></a></div></section>}
export function Footer(){return <footer><div className="shell"><Logo/><span>RAJKUSHWAHADIGITAL.COM</span><span>© {new Date().getFullYear()} RAJ KUSHWAHA DIGITAL</span></div></footer>}
