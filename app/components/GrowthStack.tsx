"use client";

import { useEffect, useRef } from "react";
import { services } from "../data/services";
import { ToolLogo } from "./ToolLogo";

const clamp = (value: number, min: number, max: number) => Math.min(max, Math.max(min, value));

export function GrowthStack() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const render = () => {
      const section = sectionRef.current;
      const stage = stageRef.current;
      if (!section || !stage) return;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = clamp(-rect.top / travel, 0, 1);
      section.style.setProperty("--stack-progress", `${progress}`);

      stage.querySelectorAll<HTMLElement>(".growth-cube").forEach((cube, index) => {
        const count = services.length;
        const pathProgress = (index / count + progress * .92 + .045) % 1;
        let x = 0;
        let y = 0;

        if (pathProgress < .19) {
          const segment = pathProgress / .19;
          x = 3 + Math.sin(segment * Math.PI) * 2;
          y = -11 + segment * 76;
        } else if (pathProgress < .82) {
          const segment = (pathProgress - .19) / .63;
          x = 4 + segment * 92;
          y = 65 + Math.sin(segment * Math.PI) * 17;
        } else {
          const segment = (pathProgress - .82) / .18;
          x = 96 - Math.sin(segment * Math.PI) * 2;
          y = 65 - segment * 76;
        }

        const edgeFade = Math.min(pathProgress / .055, (1 - pathProgress) / .055, 1);
        const depth = .67 + clamp(y / 100, 0, 1) * .42;
        const direction = index % 2 === 0 ? 1 : -1;
        const spin = progress * 860 * direction + index * 47;
        cube.style.left = `${x}%`;
        cube.style.top = `${y}%`;
        cube.style.opacity = `${clamp(edgeFade, 0, 1)}`;
        cube.style.zIndex = `${Math.round(10 + y)}`;
        cube.style.setProperty("--cube-scale", `${depth}`);
        cube.style.setProperty("--cube-rx", `${-13 + Math.sin(spin * .018) * 18}deg`);
        cube.style.setProperty("--cube-ry", `${spin}deg`);
        cube.style.setProperty("--cube-rz", `${spin * .32}deg`);
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(render);
    };
    render();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return <section className="growth-stack-section" ref={sectionRef} aria-label="The RKD Growth Stack">
    <div className="growth-stack-sticky">
      <div className="growth-stack-grid" aria-hidden="true"/>
      <div className="growth-stack-copy">
        <span>TOOLS · PLATFORMS · APPLICATIONS</span>
        <h2>THE <i>RKD</i><br/>GROWTH STACK</h2>
        <p>15 SERVICES. ONE CONNECTED SYSTEM.</p>
      </div>
      <div className="growth-track-stage" ref={stageRef}>
        <div className="growth-path growth-path-left" aria-hidden="true"/>
        <div className="growth-path growth-path-bottom" aria-hidden="true"/>
        <div className="growth-path growth-path-right" aria-hidden="true"/>
        {services.map((service, index) => {
          const faces = [service.tools[0], service.tools[1] ?? service.tools[0], service.tools[2] ?? service.tools[0]];
          return <article
            className="growth-cube"
            style={{"--cube-accent": service.accent, "--cube-soft": service.accentSoft} as React.CSSProperties}
            key={service.slug}
            tabIndex={0}
          >
            <div className="growth-cube-3d">
              <div className="cube-face cube-front"><small>{String(index + 1).padStart(2, "0")}</small><ToolLogo name={faces[0]}/></div>
              <div className="cube-face cube-right"><ToolLogo name={faces[1]}/></div>
              <div className="cube-face cube-top"><ToolLogo name={faces[2]}/></div>
              <div className="cube-face cube-back"><b>RKD</b></div>
              <div className="cube-face cube-left"><b>{service.visual.toUpperCase()}</b></div>
              <div className="cube-face cube-bottom"><b>MOVE</b></div>
            </div>
            <div className="cube-tooltip"><b>{service.name}</b><span>{service.tools.slice(0, 4).join(" · ")}</span></div>
          </article>;
        })}
      </div>
      <div className="growth-stack-footer"><span>SCROLL TO MOVE THE STACK</span><i><b/></i><span>01 — 15</span></div>
    </div>
  </section>;
}
