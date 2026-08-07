"use client";

import Link from "next/link";
import { useState } from "react";
import { services } from "../data/services";
import { ServiceOrbital } from "./ServiceOrbital";
import { ToolLogo } from "./ToolLogo";

export function ExpertiseExplorer() {
  const [active, setActive] = useState(0);
  const service = services[active];

  return <section className="expertise-explorer shell" style={{"--service-accent": service.accent, "--service-soft": service.accentSoft} as React.CSSProperties}>
    <div className="service-index">
      {services.map((item, index) => <button
        key={item.name}
        className={active === index ? "active" : ""}
        onMouseEnter={() => setActive(index)}
        onFocus={() => setActive(index)}
        onClick={() => setActive(index)}
        style={{"--row-accent": item.accent} as React.CSSProperties}
      >
        <span>{String(index + 1).padStart(2, "0")}</span><b>{item.name}</b><i>{active === index ? "−" : "+"}</i>
      </button>)}
    </div>
    <article className="expertise-panel" key={service.name}>
      <div className="panel-copy">
        <span className="eyebrow-small">ACTIVE CAPABILITY</span>
        <h2>{service.name}</h2>
        <p>{service.summary}</p>
        <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
        <small>TOOLS &amp; PLATFORMS</small>
        <div className="tool-chips logo-tool-chips">{service.tools.map((tool) => <ToolLogo name={tool} key={tool}/>)}</div>
        <Link className="service-deep-link magnetic" href={`/services/${service.slug}`}>EXPLORE FULL SERVICE <span>↗</span></Link>
      </div>
      <ServiceOrbital service={service} compact/>
    </article>
  </section>;
}
