"use client";

import { useEffect, useRef } from "react";
import { ToolLogo } from "./ToolLogo";

const tools = [
  { c: "instagram", logo: "Instagram", title: "Instagram Post", accent: "#e1306c", soft: "#ffd4e5", depth: 50, body: <><div className="media-art"><b>BUILD<br/>BRANDS THAT<br/><i>CONNECT.</i></b></div><small>♡ 8.2K　⌁ 342</small></> },
  { c: "meta", logo: "Meta Ads", title: "Meta Ads", accent: "#0866ff", soft: "#d8e8ff", depth: 76, body: <><span className="status">● Active</span><small>CAMPAIGN PERFORMANCE</small><div className="trend">⌁╱⌁╱╱</div><div className="three"><span>Reach</span><span>Clicks</span><span>Leads</span></div></> },
  { c: "google", logo: "Google", title: "Google Search", accent: "#4285f4", soft: "#dce9ff", depth: 58, body: <><div className="search-pill">digital marketing agency⌕</div><b className="search-result">Raj Kushwaha Digital</b><small>Strategy · Creative · Technology</small></> },
  { c: "email", logo: "Mailchimp", title: "Email Flow", accent: "#ffe01b", soft: "#fff5ad", depth: 88, body: <div className="email-flow"><span>Welcome email</span><i>↓</i><span>Case study</span><i>↓</i><span>Book a call</span></div> },
  { c: "seo", logo: "Google Search Console", title: "SEO Overview", accent: "#635bff", soft: "#e1ddff", depth: 34, body: <><small>ORGANIC VISIBILITY</small><div className="seo-chart">╱⌁╱╱</div><div className="rank-lines"><i/><i/><i/></div></> },
  { c: "content", logo: "Notion", title: "Content Calendar", accent: "#ff7a00", soft: "#ffe1c2", depth: 72, body: <div className="calendar">{Array.from({length: 15}, (_, i) => <i className={i === 7 || i === 11 ? "on" : ""} key={i}/>)}</div> },
  { c: "agent", logo: "OpenAI", title: "AI Agent", accent: "#8b5cf6", soft: "#e7ddff", depth: 96, body: <><span className="status">● Active</span><small>CONTENT ASSISTANT</small><p>Generating campaign ideas...</p><div className="loading"><i/></div></> },
  { c: "web", logo: "Next.js", title: "Website", accent: "#14b8a6", soft: "#d3f4ee", depth: 44, body: <div className="wire"><i/><span/><b/><em/></div> },
];

export function HeroCanvas() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const root = ref.current;
      if (!root) return;
      const rect = root.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const progress = Math.max(-1, Math.min(1, (viewportCenter - (rect.top + rect.height / 2)) / window.innerHeight));
      root.querySelectorAll<HTMLElement>(".tool-card").forEach((card, index) => {
        const depth = Number(card.dataset.depth || 50);
        const direction = index % 2 === 0 ? 1 : -1;
        card.style.setProperty("--scroll-y", `${progress * depth}px`);
        card.style.setProperty("--scroll-r", `${progress * direction * (3 + index * .32)}deg`);
      });
    };
    const onScroll = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { cancelAnimationFrame(frame); window.removeEventListener("scroll", onScroll); };
  }, []);

  const move = (event: React.MouseEvent) => {
    const root = ref.current;
    const rect = root?.getBoundingClientRect();
    if (!root || !rect) return;
    const x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    const y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    root.querySelectorAll<HTMLElement>(".tool-card").forEach((card, index) => {
      const direction = index % 2 === 0 ? 1 : -1;
      const strength = 18 + index * 3;
      card.style.setProperty("--pointer-x", `${x * strength * direction}px`);
      card.style.setProperty("--pointer-y", `${y * strength}px`);
    });
  };

  const reset = () => ref.current?.querySelectorAll<HTMLElement>(".tool-card").forEach((card) => {
    card.style.setProperty("--pointer-x", "0px");
    card.style.setProperty("--pointer-y", "0px");
  });

  return <div className="hero-canvas colorful-canvas" ref={ref} onMouseMove={move} onMouseLeave={reset}>
    <div className="signal-mark">RKD</div>
    <div className="signal-lines" aria-hidden="true"><i/><i/><i/><i/><i/></div>
    {tools.map((tool, index) => <article
      className={`tool-card ${tool.c}`}
      data-depth={tool.depth}
      style={{"--i": index, "--accent": tool.accent, "--soft": tool.soft} as React.CSSProperties}
      key={tool.c}
    >
      <header><ToolLogo name={tool.logo}/><b>{tool.title}</b></header>
      {tool.body}
    </article>)}
  </div>;
}
