"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { designProjects } from "../data/designProjects";

const AUTOPLAY_DELAY = 6000;

export function BrandGuideCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [interacting, setInteracting] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (paused || interacting || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % designProjects.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [paused, interacting, reducedMotion]);

  const goTo = (index: number) => setActive((index + designProjects.length) % designProjects.length);

  return <section
    className="brand-guide-showcase shell"
    id="case-study"
    aria-labelledby="brand-guide-title"
    aria-roledescription="carousel"
    aria-label="Selected brand identity systems"
    onMouseEnter={() => setInteracting(true)}
    onMouseLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)}
    onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
    }}
  >
    <header className="brand-guide-heading">
      <span className="eyebrow-small">SELECTED IDENTITY SYSTEMS</span>
      <div>
        <h2 id="brand-guide-title">Three brands.<br/><i>Every slide visible.</i></h2>
        <p>Complete brand-guide frames shown without cropping. Original client logos remain overlaid as verified assets for accurate spelling and reproduction.</p>
      </div>
    </header>

    <div className="brand-guide-viewport" aria-live={paused ? "polite" : "off"}>
      <div className="brand-guide-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {designProjects.map((project, index) => <article
          className="brand-guide-slide"
          key={project.client}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${designProjects.length}: ${project.client}`}
          aria-hidden={index !== active}
          style={{ "--design-accent": project.accent, "--design-soft": project.soft } as React.CSSProperties}
        >
          <div className="brand-guide-art">
            <Image src={project.slideImage} alt={project.slideAlt} fill sizes="(max-width: 760px) 100vw, 68vw" priority={index === 0} unoptimized style={{ objectFit: "contain" }}/>
            <div className="brand-guide-logo"><Image src={project.logo} alt={project.logoAlt} width={560} height={190} unoptimized style={{ objectFit: "contain" }}/></div>
            <span className="brand-guide-number">0{index + 1}</span>
          </div>
          <div className="brand-guide-copy">
            <span className="eyebrow-small">{project.eyebrow}</span>
            <small>{project.sector}</small>
            <h3>{project.title}</h3>
            <div className="brand-guide-proof">{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
            {(project.caseHref || project.sourceHref) ? <div className="brand-guide-links">
              {project.caseHref ? <Link href={project.caseHref} tabIndex={index === active ? 0 : -1}>READ THE EVIDENCE <span aria-hidden="true">↗</span></Link> : null}
              {project.sourceHref ? <a href={project.sourceHref} target="_blank" rel="noopener noreferrer" tabIndex={index === active ? 0 : -1}>{project.sourceLabel} <span aria-hidden="true">↗</span></a> : null}
            </div> : null}
          </div>
        </article>)}
      </div>
    </div>

    <div className="brand-guide-controls">
      <button type="button" onClick={() => goTo(active - 1)} aria-label="Show previous brand slide">←</button>
      <div>{designProjects.map((project, index) => <button
        type="button"
        key={project.client}
        className={index === active ? "is-active" : ""}
        onClick={() => goTo(index)}
        aria-label={`Show ${project.client} slide`}
        aria-current={index === active ? "true" : undefined}
      ><span>0{index + 1}</span><b>{project.client}</b></button>)}</div>
      <button type="button" onClick={() => goTo(active + 1)} aria-label="Show next brand slide">→</button>
      {!reducedMotion ? <button className="brand-guide-pause" type="button" onClick={() => setPaused((value) => !value)} aria-label={paused ? "Start automatic slide rotation" : "Pause automatic slide rotation"}>{paused ? "PLAY" : "PAUSE"}</button> : null}
    </div>
    <p className="brand-guide-disclosure">Axiom Arise delivery details come from the approved project handoff. Key MedSolutions and KH RCM use verified brand assets; no unverified performance result is claimed.</p>
  </section>;
}
