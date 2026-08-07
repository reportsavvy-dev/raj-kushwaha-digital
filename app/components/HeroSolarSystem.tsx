"use client";

import { ToolLogo } from "./ToolLogo";
import { useMotionSurface } from "./useMotionSurface";

const planets = [
  { name: "Meta Ads", tool: "Meta Ads", orbit: "orbit-one", delay: "0s", color: "#0866ff", className: "planet-meta", content: <><div className="planet-chart"><i/><i/><i/><i/></div><small>CAMPAIGN SIGNAL</small></> },
  { name: "AI Agent", tool: "OpenAI", orbit: "orbit-one", delay: "-6s", color: "#8b5cf6", className: "planet-ai", content: <><div className="planet-chart"><i/><i/><i/><i/></div><small>ACTIVE ASSISTANT</small></> },
  { name: "Instagram", tool: "Instagram", orbit: "orbit-two", delay: "-3s", color: "#e1306c", className: "planet-instagram", content: <><div className="planet-bars"><i/><i/><i/><i/></div><small>SOCIAL GROWTH</small></> },
  { name: "Email Flow", tool: "Mailchimp", orbit: "orbit-two", delay: "-11s", color: "#f2c500", className: "planet-email", content: <><div className="planet-bars"><i/><i/><i/><i/></div><small>LIFECYCLE FLOW</small></> },
  { name: "Google Search", tool: "Google", orbit: "orbit-three", delay: "-5s", color: "#4285f4", className: "planet-google", content: <><div className="planet-search">digital marketing⌕</div><small>SEARCH VISIBILITY</small></> },
  { name: "Website", tool: "Next.js", orbit: "orbit-three", delay: "-16s", color: "#14b8a6", className: "planet-website", content: <><div className="planet-wire"><i/><i/><i/></div><small>CONVERSION EXPERIENCE</small></> },
];

export function HeroSolarSystem() {
  const motion = useMotionSurface("--solar-x", "--solar-y");

  return <div className="hero-solar-system" {...motion} aria-label="Connected marketing tools orbiting the Raj Kushwaha Digital analytics core">
    <div className="solar-stage">
    <div className="solar-glow"/>
    <div className="solar-orbit orbit-one" aria-hidden="true"/>
    <div className="solar-orbit orbit-two" aria-hidden="true"/>
    <div className="solar-orbit orbit-three" aria-hidden="true"/>
    <div className="solar-signal signal-a"/><div className="solar-signal signal-b"/><div className="solar-signal signal-c"/><div className="solar-signal signal-d"/>

    <article className="solar-core">
      <header><span>RKD GROWTH INTELLIGENCE</span><b>● DEMO SIGNAL</b></header>
      <div className="analytics-sources" aria-label="Analytics data sources">
        <ToolLogo name="GA4"/><ToolLogo name="Google Search Console"/><ToolLogo name="Meta Ads"/><ToolLogo name="HubSpot"/>
      </div>
      <div className="analytics-kpis">
        <article><small>BLENDED ROAS</small><strong>4.8×</strong><span>↑ 18.6%</span></article>
        <article><small>QUALIFIED LEADS</small><strong>386</strong><span>↑ 24.1%</span></article>
        <article><small>ORGANIC VISIBILITY</small><strong>+42%</strong><span>90 DAYS</span></article>
      </div>
      <div className="analytics-performance">
        <header><small>ATTRIBUTED CONVERSIONS</small><b>74</b></header>
        <div className="analytics-line"><i/><i/><i/><i/><i/><i/></div>
      </div>
      <div className="analytics-channels">
        <span>GOOGLE <i><b style={{width:"84%"}}/></i><em>32</em></span>
        <span>META <i><b style={{width:"67%"}}/></i><em>21</em></span>
        <span>ORGANIC <i><b style={{width:"51%"}}/></i><em>14</em></span>
        <span>EMAIL <i><b style={{width:"29%"}}/></i><em>07</em></span>
      </div>
      <div className="core-footer"><span>SESSIONS 82.4K</span><span>CAC ₹1,240</span><span>CVR 3.7%</span></div>
    </article>

    {planets.map((planet) => <div className={`solar-runner ${planet.orbit}`} style={{animationDelay: planet.delay} as React.CSSProperties} key={planet.name}>
      <div className="solar-anchor">
        <article className={`solar-planet ${planet.className}`} style={{"--planet-color": planet.color, animationDelay: planet.delay} as React.CSSProperties}>
          <header><ToolLogo name={planet.tool}/><b>{planet.name}</b></header>{planet.content}
        </article>
      </div>
    </div>)}
    </div>
  </div>;
}
