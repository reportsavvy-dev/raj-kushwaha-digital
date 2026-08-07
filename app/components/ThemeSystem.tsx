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
const flakes: SnowStyle[] = Array.from({ length: 56 }, (_, index) => ({
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
  useEffect(() => {
    const stored = localStorage.getItem(THEME_KEY);
    document.documentElement.dataset.theme = stored === "antarctica" ? "antarctica" : "studio";
  }, []);

  return <div className="antarctica-atmosphere" aria-hidden="true">
    <div className="polar-stars" />
    <div className="aurora aurora-one" />
    <div className="aurora aurora-two" />
    <div className="aurora aurora-three" />
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
    setTheme(initial);
    document.documentElement.dataset.theme = initial;

    const syncTheme = (event: Event) => setTheme((event as CustomEvent<SiteTheme>).detail);
    window.addEventListener("rkd-theme-change", syncTheme);
    return () => window.removeEventListener("rkd-theme-change", syncTheme);
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
