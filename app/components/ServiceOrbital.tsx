"use client";

import type { Service } from "../data/services";
import { ToolLogo } from "./ToolLogo";
import { useMotionSurface } from "./useMotionSurface";

export function ServiceOrbital({ service, compact = false }: { service: Service; compact?: boolean }) {
  const motion = useMotionSurface("--orbit-x", "--orbit-y");
  const rings = [service.tools.slice(0, 2), service.tools.slice(2, 5), service.tools.slice(5, 8)];

  return <div
    className={`service-orbital ${compact ? "orbital-compact" : ""}`}
    {...motion}
    style={{"--service-accent": service.accent, "--service-soft": service.accentSoft} as React.CSSProperties}
  >
    <div className="orbital-label"><span>{service.visual.toUpperCase()} SYSTEM</span><b>● LIVE</b></div>
    <div className="orbital-glow"/>
    <div className="orbital-core"><small>CONNECTED</small><strong>{service.shortName}</strong><span>RKD</span></div>
    {rings.map((tools, ringIndex) => tools.length > 0 && <div className={`orbital-ring orbital-ring-${ringIndex + 1}`} key={ringIndex}>
      {tools.map((tool) => <ToolLogo name={tool} key={tool}/>)}
    </div>)}
    <div className="orbital-axis"><span>STRATEGY</span><span>CREATIVE</span><span>TECHNOLOGY</span><span>GROWTH</span></div>
  </div>;
}
