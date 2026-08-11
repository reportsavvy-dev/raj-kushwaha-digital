"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { designProjects } from "../data/designProjects";

const AUTOPLAY_DELAY = 6000;

const axiomGuidePages = [
  { image: "/case-studies/axiom-guide/page-01.webp", title: "Brand guidelines", label: "Overview", alt: "Axiom Arise brand guidelines cover" },
  { image: "/case-studies/axiom-guide/page-02.webp", title: "Master logo", label: "Master logo", alt: "Axiom Arise approved master logo and locked characteristics" },
  { image: "/case-studies/axiom-guide/page-03.webp", title: "Colour system", label: "Colours", alt: "Axiom Arise charcoal, teal and white production colour values" },
  { image: "/case-studies/axiom-guide/page-04.webp", title: "Typography", label: "Typography", alt: "Axiom Arise supporting Montserrat typography guidance" },
  { image: "/case-studies/axiom-guide/page-05.webp", title: "Clear space and size", label: "Clear space", alt: "Axiom Arise logo clear-space and minimum-size rules" },
  { image: "/case-studies/axiom-guide/page-06.webp", title: "Approved variations", label: "Variations", alt: "Axiom Arise full-colour, monochrome and white-reverse logo variations" },
  { image: "/case-studies/axiom-guide/page-07.webp", title: "Usage rules", label: "Usage rules", alt: "Axiom Arise approved and prohibited logo usage rules" },
  { image: "/case-studies/axiom-guide/page-08.webp", title: "Application previews", label: "Applications", alt: "Axiom Arise business card, letterhead and envelope application previews" },
];

const carouselSlides = [
  ...axiomGuidePages.map((page, index) => ({
    project: designProjects[0],
    image: page.image,
    imageAlt: page.alt,
    title: page.title,
    label: page.label,
    guidePage: `${String(index + 1).padStart(2, "0")} / ${String(axiomGuidePages.length).padStart(2, "0")}`,
    isGuidePage: true,
  })),
  ...designProjects.slice(1).map((project) => ({
    project,
    image: project.slideImage,
    imageAlt: project.slideAlt,
    title: project.title,
    label: project.client,
    guidePage: null,
    isGuidePage: false,
  })),
];

export function BrandGuideCarousel() {
  const [active, setActive] = useState(0);
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
    if (interacting || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % carouselSlides.length);
    }, AUTOPLAY_DELAY);
    return () => window.clearInterval(timer);
  }, [interacting, reducedMotion]);

  const goTo = (index: number) => setActive((index + carouselSlides.length) % carouselSlides.length);

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
        <p>Complete brand-guide frames shown without cropping. Verified client logos sit below the guide artwork so every construction detail remains visible.</p>
      </div>
    </header>

    <div className="brand-guide-viewport" aria-live="off">
      <div className="brand-guide-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {carouselSlides.map((slide, index) => {
          const project = slide.project;
          return <article
          className="brand-guide-slide"
          key={`${project.client}-${slide.label}`}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${carouselSlides.length}: ${project.client}, ${slide.title}`}
          aria-hidden={index !== active}
          style={{ "--design-accent": project.accent, "--design-soft": project.soft } as React.CSSProperties}
        >
          <div className={`brand-guide-art ${slide.isGuidePage ? "brand-guide-art-pdf" : ""}`}>
            <Image src={slide.image} alt={slide.imageAlt} fill sizes="(max-width: 760px) 100vw, 68vw" priority={index === 0} unoptimized style={{ objectFit: "contain" }}/>
            <span className="brand-guide-number">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="brand-guide-copy">
            <span className="eyebrow-small">{slide.isGuidePage ? "AXIOM ARISE / BRAND GUIDE" : project.eyebrow}</span>
            <small>{slide.guidePage ? `PAGE ${slide.guidePage} / ${project.sector}` : project.sector}</small>
            <h3>{slide.title}</h3>
            <div className="brand-guide-proof">{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
            {(slide.isGuidePage || project.caseHref || project.sourceHref) ? <div className="brand-guide-links">
              {slide.isGuidePage ? <a href="/case-studies/axiom-guide/Axiom_Arise_Brand_Guidelines.pdf" target="_blank" rel="noopener noreferrer" tabIndex={index === active ? 0 : -1}>OPEN COMPLETE BRAND GUIDE <span aria-hidden="true">↗</span></a> : null}
              {project.caseHref ? <Link href={project.caseHref} tabIndex={index === active ? 0 : -1}>READ THE EVIDENCE <span aria-hidden="true">↗</span></Link> : null}
              {project.sourceHref ? <a href={project.sourceHref} target="_blank" rel="noopener noreferrer" tabIndex={index === active ? 0 : -1}>{project.sourceLabel} <span aria-hidden="true">↗</span></a> : null}
            </div> : null}
            <div className="brand-guide-copy-logo"><Image src={project.logo} alt={project.logoAlt} width={560} height={190} unoptimized style={{ objectFit: "contain" }}/></div>
          </div>
        </article>})}
      </div>
    </div>

    <div className="brand-guide-controls">
      <button type="button" onClick={() => goTo(active - 1)} aria-label="Show previous brand slide">←</button>
      <div>{carouselSlides.map((slide, index) => <button
        type="button"
        key={`${slide.project.client}-${slide.label}`}
        className={index === active ? "is-active" : ""}
        onClick={() => goTo(index)}
        aria-label={`Show ${slide.project.client} ${slide.title} slide`}
        aria-current={index === active ? "true" : undefined}
      ><span>{String(index + 1).padStart(2, "0")}</span><b>{slide.label}</b></button>)}</div>
      <button type="button" onClick={() => goTo(active + 1)} aria-label="Show next brand slide">→</button>
    </div>
    <p className="brand-guide-disclosure">Axiom Arise delivery details come from the approved project handoff. Key MedSolutions and KH RCM use verified brand assets; no unverified performance result is claimed.</p>
  </section>;
}
