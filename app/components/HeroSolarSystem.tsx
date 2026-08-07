"use client";

import { useRef } from "react";
import { ToolLogo } from "./ToolLogo";

const planets = [
  { name: "Meta Ads", tool: "Meta Ads", orbit: "orbit-one", delay: "0s", color: "#0866ff", className: "planet-meta", content: <><div className="planet-chart"><i/><i/><i/><i/></div><small>CAMPAIGN SIGNAL</small></> },
  { name: "AI Agent", tool: "OpenAI", orbit: "orbit-one", delay: "-6s", color: "#8b5cf6", className: "planet-ai", content: <><div className="planet-chart"><i/><i/><i/><i/></div><small>ACTIVE ASSISTANT</small></> },
  { name: "Instagram", tool: "Instagram", orbit: "orbit-two", delay: "-3s", color: "#e1306c", className: "planet-instagram", content: <><div className="planet-bars"><i/><i/><i/><i/></div><small>SOCIAL GROWTH</small></> },
  { name: "Email Flow", tool: "Mailchimp", orbit: "orbit-two", delay: "-11s", color: "#f2c500", className: "planet-email", content: <><div className="planet-bars"><i/><i/><i/><i/></div><small>LIFECYCLE FLOW</small></> },
  { name: "Google Search", tool: "Google", orbit: "orbit-three", delay: "-5s", color: "#4285f4", className: "planet-google", content: <><div className="planet-search">digital marketing⌕</div><small>SEARCH VISIBILITY</small></> },
  { name: "Website", tool: "Next.js", orbit: "orbit-three", delay: "-16s", color: "#14b8a6", className: "planet-website", content: <><div className="planet-wire"><i/><i/><i/></div><small>CONVERSION EXPERIENCE</small></> },
];

export function HeroSolarSystem() {
  const ref = useRef<HTMLDivElement>(null);
  const move = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current) return;
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    ref.current.style.setProperty("--solar-x", `${x * 18}px`);
    ref.current.style.setProperty("--solar-y", `${y * 18}px`);
  };

  return <div className="hero-solar-system" ref={ref} onMouseMove={move} onMouseLeave={() => {
    ref.current?.style.setProperty("--solar-x", "0px");
    ref.current?.style.setProperty("--solar-y", "0px");
  }} aria-label="Connected marketing tools orbiting the Raj Kushwaha Digital analytics core">
    <div className="solar-stage">
    <div className="solar-glow"/>
    <div className="solar-orbit orbit-one" aria-hidden="true"/>
    <div className="solar-orbit orbit-two" aria-hidden="true"/>
    <div className="solar-orbit orbit-three" aria-hidden="true"/>
    <div className="solar-signal signal-a"/><div className="solar-signal signal-b"/><div className="solar-signal signal-c"/><div className="solar-signal signal-d"/>

    <article className="solar-core">
      <header><span>RKD GROWTH CORE</span><b>● LIVE</b></header>
      <div className="core-dashboard">
        <div className="core-chart"><small>CONNECTED PERFORMANCE</small><div className="chart-line"><i/><i/><i/><i/><i/></div></div>
        <div className="core-signals"><i/><i/><i/><i/><i/></div>
        <div className="core-donut"><i/></div>
        <div className="core-bars"><i/><i/><i/><i/><i/></div>
      </div>
      <div className="core-footer"><span>STRATEGY</span><span>CREATIVE</span><span>TECH</span></div>
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
