"use client";

import { useEffect } from "react";

const motionSelectors = [
  ".ticker",
  ".service-marquee",
  ".hero-solar-system",
  ".hero-periodic-system",
].join(",");

export function MotionGovernor() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>(motionSelectors));
    if (!elements.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          entry.target.classList.toggle("motion-paused", !entry.isIntersecting);
        }
      },
      { rootMargin: "160px 0px" },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
