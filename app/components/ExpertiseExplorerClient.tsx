"use client";

import type { CSSProperties, ReactNode } from "react";
import { useState } from "react";

type ExpertiseChoice = {
  name: string;
  accent: string;
  accentSoft: string;
};

export function ExpertiseExplorerClient({ services, panels }: { services: ExpertiseChoice[]; panels: ReactNode[] }) {
  const [active, setActive] = useState(0);
  const service = services[active];

  return <section className="expertise-explorer shell" style={{"--service-accent": service.accent, "--service-soft": service.accentSoft} as CSSProperties}>
    <div className="service-index">
      {services.map((item, index) => <button
        key={item.name}
        className={active === index ? "active" : ""}
        onMouseEnter={() => setActive(index)}
        onFocus={() => setActive(index)}
        onClick={() => setActive(index)}
        style={{"--row-accent": item.accent} as CSSProperties}
      >
        <span>{String(index + 1).padStart(2, "0")}</span><b>{item.name}</b><i>{active === index ? "−" : "+"}</i>
      </button>)}
    </div>
    {panels[active]}
  </section>;
}
