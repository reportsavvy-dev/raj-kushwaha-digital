"use client";

import { useEffect, useState, type CSSProperties } from "react";

type SiteTheme = "studio" | "antarctica";
type SnowStyle = CSSProperties & {
  "--snow-x": string;
  "--snow-delay": string;
  "--snow-duration": string;
  "--snow-size": string;
  "--snow-drift": string;
  "--snow-opacity": string;
};

const THEME_KEY = "rkd-theme";
const flakes: SnowStyle[] = Array.from({ length: 20 }, (_, index) => ({
  "--snow-x": `${(index * 37 + 11) % 100}%`,
  "--snow-delay": `${-((index * 0.61) % 12).toFixed(2)}s`,
  "--snow-duration": `${5 + (index % 8)}s`,
  "--snow-size": `${2 + (index % 5)}px`,
  "--snow-drift": `${130 + ((index * 29) % 320)}px`,
  "--snow-opacity": `${0.35 + (index % 6) * 0.1}`,
}));

function applyTheme(theme: SiteTheme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(THEME_KEY, theme);
  window.dispatchEvent(new CustomEvent<SiteTheme>("rkd-theme-change", { detail: theme }));
}

export function ThemeAtmosphere() {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const stored = localStorage.getItem(THEME_KEY);
    const initial = stored === "antarctica" ? "antarctica" : "studio";
    root.dataset.theme = initial;
    const activationFrame = window.requestAnimationFrame(() => setActive(initial === "antarctica"));

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let current = 0;
    let target = 0;
    let lastPaint = 0;

    const paintAurora = (progress: number) => {
      const arc = Math.sin(progress * Math.PI);
      const surge = Math.exp(-Math.pow((progress - 0.57) / 0.22, 2));
      const diffuse = Math.max(0, (progress - 0.68) / 0.32);
      root.style.setProperty("--aurora-scroll-x", `${(-1 - progress * 15).toFixed(2)}vw`);
      root.style.setProperty("--aurora-scroll-y", `${(arc * 7 - progress * 3).toFixed(2)}vh`);
      root.style.setProperty("--aurora-scroll-scale", `${(1.045 + arc * 0.09 + progress * 0.035).toFixed(3)}`);
      root.style.setProperty("--aurora-scroll-rotate", `${(-2 + progress * 7).toFixed(2)}deg`);
      root.style.setProperty("--aurora-scroll-opacity", `${(0.72 + arc * 0.2 - progress * 0.08).toFixed(3)}`);
      root.style.setProperty("--aurora-fold-shift", `${(progress * 10).toFixed(2)}vw`);
      root.style.setProperty("--aurora-fold-scale", `${(0.88 + arc * 0.28).toFixed(3)}`);
      root.style.setProperty("--aurora-reflection", `${(0.18 + arc * 0.2).toFixed(3)}`);
      root.style.setProperty("--aurora-rays-opacity", `${(0.22 + surge * 0.48 - diffuse * 0.12).toFixed(3)}`);
      root.style.setProperty("--aurora-wave-opacity", `${(0.16 + surge * 0.5).toFixed(3)}`);
      root.style.setProperty("--aurora-wave-y", `${(8 + arc * 7).toFixed(2)}vh`);
      root.style.setProperty("--aurora-patch-opacity", `${(diffuse * 0.42).toFixed(3)}`);
      root.style.setProperty("--aurora-surge-glow", `${(0.08 + surge * 0.34).toFixed(3)}`);
    };

    const animate = (time: number) => {
      if (time - lastPaint < 42) {
        frame = requestAnimationFrame(animate);
        return;
      }
      lastPaint = time;
      current += (target - current) * 0.16;
      paintAurora(current);
      if (Math.abs(target - current) > 0.0005) frame = requestAnimationFrame(animate);
      else frame = 0;
    };

    const onScroll = () => {
      if (reducedMotion || document.hidden || root.dataset.theme !== "antarctica") return;
      target = Math.min(1, window.scrollY / Math.max(window.innerHeight * 2.2, 1));
      if (!frame) frame = requestAnimationFrame(animate);
    };

    const syncAtmosphere = (event: Event) => {
      const nextTheme = (event as CustomEvent<SiteTheme>).detail;
      setActive(nextTheme === "antarctica");
      if (nextTheme === "antarctica") onScroll();
    };

    const onVisibilityChange = () => {
      if (document.hidden && frame) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else if (!document.hidden) {
        onScroll();
      }
    };

    paintAurora(0);
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("rkd-theme-change", syncAtmosphere);
    document.addEventListener("visibilitychange", onVisibilityChange);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("rkd-theme-change", syncAtmosphere);
      document.removeEventListener("visibilitychange", onVisibilityChange);
      window.cancelAnimationFrame(activationFrame);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  if (!active) return null;

  return <div className="antarctica-atmosphere" aria-hidden="true">
    <div className="aurora-photo" />
    <div className="polar-stars" />
    <div className="aurora-scroll-field">
      <div className="aurora aurora-one" />
      <div className="aurora aurora-two" />
      <div className="aurora aurora-three" />
      <div className="aurora-travel-wave"><i/><i/></div>
      <div className="aurora-rays">{Array.from({ length: 6 }, (_, index) => <i key={index} style={{
        "--ray-height": `${43 + (index % 8) * 6}%`,
        "--ray-duration": `${5.2 + index * 0.17}s`,
        "--ray-delay": `${index * -0.31}s`,
      } as CSSProperties} />)}</div>
      <div className="aurora-diffuse-patches">{Array.from({ length: 3 }, (_, index) => <i key={index}/>)}</div>
    </div>
    <div className="snow-field">
      {flakes.map((style, index) => <i key={index} style={style} />)}
    </div>
    <div className="ice-horizon" />
  </div>;
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<SiteTheme>("studio");

  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    const initial = stored === "antarctica" ? "antarctica" : "studio";
    document.documentElement.dataset.theme = initial;
    const frame = window.requestAnimationFrame(() => setTheme(initial));

    const syncTheme = (event: Event) => setTheme((event as CustomEvent<SiteTheme>).detail);
    window.addEventListener("rkd-theme-change", syncTheme);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("rkd-theme-change", syncTheme);
    };
  }, []);

  const choose = (nextTheme: SiteTheme) => {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  };

  return <aside className="theme-switcher" aria-label="Choose website theme">
    <span className="theme-switcher-label">THEME</span>
    <button className={theme === "studio" ? "active" : ""} onClick={() => choose("studio")} aria-pressed={theme === "studio"}>
      <i className="theme-studio-icon"><b /><b /><b /></i><span>STUDIO</span>
    </button>
    <button className={theme === "antarctica" ? "active" : ""} onClick={() => choose("antarctica")} aria-pressed={theme === "antarctica"}>
      <i className="theme-snow-icon">&#10052;</i><span>ANTARCTICA</span>
    </button>
  </aside>;
}
