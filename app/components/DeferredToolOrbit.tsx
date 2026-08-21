"use client";

import { useEffect, useRef, useState } from "react";
import { ToolLogo } from "./ToolLogo";

export function DeferredToolOrbit({ tools }: { tools: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { rootMargin: "240px 0px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return <div ref={ref} className="mini-tool-orbit" aria-label={`Tools include ${tools.join(", ")}`}>
    {visible ? tools.map((tool) => <ToolLogo name={tool} key={tool}/>) : null}
  </div>;
}
