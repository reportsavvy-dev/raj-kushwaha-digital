import Link from "next/link";
import type { Service } from "../data/services";
import { ExpertiseExplorerClient } from "./ExpertiseExplorerClient";
import { ServiceOrbital } from "./ServiceOrbital";
import { ToolLogo } from "./ToolLogo";

export type ExpertiseExplorerService = Pick<Service, "name" | "shortName" | "slug" | "summary" | "deliverables" | "tools" | "visual" | "accent" | "accentSoft">;

function ServicePanel({ service }: { service: ExpertiseExplorerService }) {
  return <article className="expertise-panel">
    <div className="panel-copy">
      <span className="eyebrow-small">ACTIVE CAPABILITY</span>
      <h2>{service.name}</h2>
      <p>{service.summary}</p>
      <ul>{service.deliverables.map((item) => <li key={item}>{item}</li>)}</ul>
      <small>TOOLS &amp; PLATFORMS</small>
      <div className="tool-chips logo-tool-chips">{service.tools.map((tool) => <ToolLogo name={tool} key={tool}/>)}</div>
      <Link className="service-deep-link magnetic" href={`/services/${service.slug}`}>EXPLORE FULL SERVICE <span>&#8599;</span></Link>
    </div>
    <ServiceOrbital service={service} compact/>
  </article>;
}

export function ExpertiseExplorer({ services }: { services: ExpertiseExplorerService[] }) {
  const choices = services.map(({ name, accent, accentSoft }) => ({ name, accent, accentSoft }));
  const panels = services.map((service) => <ServicePanel service={service} key={service.slug}/>);

  return <ExpertiseExplorerClient services={choices} panels={panels}/>;
}
