"use client";

import { useRef } from "react";
import type { Service } from "../data/services";
import { ToolLogo } from "./ToolLogo";

export function ServiceOrbital({ service, compact = false }: { service: Service; compact?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const rings = [service.tools.slice(0, 2), service.tools.slice(2, 5), service.tools.slice(5, 8)];

  const move = (event: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect || !ref.current) return;
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    ref.current.style.setProperty("--orbit-x", `${x * 18}px`);
    ref.current.style.setProperty("--orbit-y", `${y * 18}px`);
  };

  return <div
    className={`service-orbital ${compact ? "orbital-compact" : ""}`}
    ref={ref}
    onMouseMove={move}
    onMouseLeave={() => {
      ref.current?.style.setProperty("--orbit-x", "0px");
      ref.current?.style.setProperty("--orbit-y", "0px");
    }}
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
