"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { designProjects, type DesignProject } from "../data/designProjects";

const AUTOPLAY_DELAY = 6000;

type GuideSlide = {
  image: string;
  title: string;
  label: string;
  alt: string;
};

const axiomGuidePages: GuideSlide[] = [
  { image: "/case-studies/axiom-guide/page-01.webp", title: "Brand guidelines", label: "Overview", alt: "Axiom Arise brand guidelines cover" },
  { image: "/case-studies/axiom-guide/page-02.webp", title: "Master logo", label: "Master logo", alt: "Axiom Arise approved master logo and locked characteristics" },
  { image: "/case-studies/axiom-guide/page-03.webp", title: "Colour system", label: "Colours", alt: "Axiom Arise charcoal, teal and white production colour values" },
  { image: "/case-studies/axiom-guide/page-04.webp", title: "Typography", label: "Typography", alt: "Axiom Arise supporting Montserrat typography guidance" },
  { image: "/case-studies/axiom-guide/page-05.webp", title: "Clear space and size", label: "Clear space", alt: "Axiom Arise logo clear-space and minimum-size rules" },
  { image: "/case-studies/axiom-guide/page-06.webp", title: "Approved variations", label: "Variations", alt: "Axiom Arise full-colour, monochrome and white-reverse logo variations" },
  { image: "/case-studies/axiom-guide/page-07.webp", title: "Usage rules", label: "Usage rules", alt: "Axiom Arise approved and prohibited logo usage rules" },
  { image: "/case-studies/axiom-guide/page-08.webp", title: "Application previews", label: "Applications", alt: "Axiom Arise business card, letterhead and envelope application previews" },
];

const keyGuidePages: GuideSlide[] = [
  { image: "/case-studies/key-medsolutions-guide/page-01.webp", title: "Brand system overview", label: "Overview", alt: "Key MedSolutions complete brand-system overview with exact approved logo" },
  { image: "/case-studies/key-medsolutions-guide/page-02.webp", title: "Master logo and clear space", label: "Master logo", alt: "Key MedSolutions master logo, clear-space grid and artwork controls" },
  { image: "/case-studies/key-medsolutions-guide/page-03.webp", title: "Healthcare colour system", label: "Colours", alt: "Key MedSolutions approved blue, green and supporting colour palette" },
  { image: "/case-studies/key-medsolutions-guide/page-04.webp", title: "Readable type hierarchy", label: "Typography", alt: "Key MedSolutions brand typography and accessible hierarchy" },
  { image: "/case-studies/key-medsolutions-guide/page-05.webp", title: "Approved logo contexts", label: "Lockups", alt: "Key MedSolutions approved logo lockups and usage contexts" },
  { image: "/case-studies/key-medsolutions-guide/page-06.webp", title: "Brand applications", label: "Applications", alt: "Key MedSolutions letterhead, business card, social and dashboard applications" },
];

const khGuidePages: GuideSlide[] = [
  { image: "/case-studies/khrcm-guide/page-01.webp", title: "Brand system overview", label: "Overview", alt: "KH RCM complete brand-system overview with exact approved logo" },
  { image: "/case-studies/khrcm-guide/page-02.webp", title: "Master logo and clear space", label: "Master logo", alt: "KH RCM master logo, clear-space grid and artwork controls" },
  { image: "/case-studies/khrcm-guide/page-03.webp", title: "Healthcare colour system", label: "Colours", alt: "KH RCM approved forest green, cobalt and navy colour palette" },
  { image: "/case-studies/khrcm-guide/page-04.webp", title: "Humanist type hierarchy", label: "Typography", alt: "KH RCM brand typography and readable hierarchy" },
  { image: "/case-studies/khrcm-guide/page-05.webp", title: "Approved logo contexts", label: "Lockups", alt: "KH RCM approved logo lockups and usage contexts" },
  { image: "/case-studies/khrcm-guide/page-06.webp", title: "Brand applications", label: "Applications", alt: "KH RCM letterhead, business card, social and revenue dashboard applications" },
];

function BrandDeck({
  project,
  slides,
  deckNumber,
  pdfHref,
  priority = false,
  reducedMotion,
}: {
  project: DesignProject;
  slides: GuideSlide[];
  deckNumber: number;
  pdfHref?: string;
  priority?: boolean;
  reducedMotion: boolean;
}) {
  const [active, setActive] = useState(0);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    if (interacting || reducedMotion) return;
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, AUTOPLAY_DELAY + deckNumber * 320);
    return () => window.clearInterval(timer);
  }, [deckNumber, interacting, reducedMotion, slides.length]);

  const goTo = (index: number) => setActive((index + slides.length) % slides.length);

  return <section
    className="brand-guide-deck"
    aria-labelledby={`brand-guide-${deckNumber}-title`}
    aria-roledescription="carousel"
    aria-label={`${project.client} brand guide`}
    onMouseEnter={() => setInteracting(true)}
    onMouseLeave={() => setInteracting(false)}
    onFocusCapture={() => setInteracting(true)}
    onBlurCapture={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setInteracting(false);
    }}
  >
    <div className="brand-guide-deck-heading">
      <span>{String(deckNumber).padStart(2, "0")}</span>
      <div><small>INDEPENDENT BRAND GUIDE</small><h3 id={`brand-guide-${deckNumber}-title`}>{project.client}</h3></div>
      <b>{String(active + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</b>
    </div>

    <div className="brand-guide-viewport" aria-live="off">
      <div className="brand-guide-track" style={{ transform: `translate3d(-${active * 100}%, 0, 0)` }}>
        {slides.map((slide, index) => <article
          className="brand-guide-slide"
          key={`${project.client}-${slide.label}`}
          aria-roledescription="slide"
          aria-label={`${index + 1} of ${slides.length}: ${project.client}, ${slide.title}`}
          aria-hidden={index !== active}
          style={{ "--design-accent": project.accent, "--design-soft": project.soft } as React.CSSProperties}
        >
          <div className="brand-guide-art brand-guide-art-pdf">
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              sizes="(max-width: 980px) 100vw, 68vw"
              priority={priority && index === 0}
              unoptimized
              style={{ objectFit: "contain" }}
            />
            <span className="brand-guide-number">{String(index + 1).padStart(2, "0")}</span>
          </div>
          <div className="brand-guide-copy">
            <span className="eyebrow-small">{project.eyebrow}</span>
            <small>{`PAGE ${String(index + 1).padStart(2, "0")} / ${String(slides.length).padStart(2, "0")} · ${project.sector}`}</small>
            <h3>{slide.title}</h3>
            <p className="brand-guide-summary">{project.summary}</p>
            <div className="brand-guide-proof">{project.proof.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="brand-guide-links">
              {pdfHref ? <a href={pdfHref} target="_blank" rel="noopener noreferrer" tabIndex={index === active ? 0 : -1}>OPEN COMPLETE BRAND GUIDE <span aria-hidden="true">↗</span></a> : null}
              {project.caseHref ? <Link href={project.caseHref} tabIndex={index === active ? 0 : -1}>READ THE EVIDENCE <span aria-hidden="true">↗</span></Link> : null}
              {project.sourceHref ? <a href={project.sourceHref} target="_blank" rel="noopener noreferrer" tabIndex={index === active ? 0 : -1}>{project.sourceLabel} <span aria-hidden="true">↗</span></a> : null}
            </div>
            <div className="brand-guide-copy-logo"><Image src={project.logo} alt={project.logoAlt} width={560} height={190} unoptimized style={{ objectFit: "contain" }}/></div>
          </div>
        </article>)}
      </div>
    </div>

    <div className="brand-guide-controls">
      <button type="button" onClick={() => goTo(active - 1)} aria-label={`Show previous ${project.client} guide page`}>←</button>
      <div>{slides.map((slide, index) => <button
        type="button"
        key={`${project.client}-${slide.label}-control`}
        className={index === active ? "is-active" : ""}
        onClick={() => goTo(index)}
        aria-label={`Show ${project.client} ${slide.title}`}
        aria-current={index === active ? "true" : undefined}
      ><span>{String(index + 1).padStart(2, "0")}</span><b>{slide.label}</b></button>)}</div>
      <button type="button" onClick={() => goTo(active + 1)} aria-label={`Show next ${project.client} guide page`}>→</button>
    </div>
  </section>;
}

export function BrandGuideCarousel() {
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  return <section className="brand-guide-showcase shell" id="case-study" aria-labelledby="brand-guide-title">
    <header className="brand-guide-heading">
      <span className="eyebrow-small">SELECTED IDENTITY SYSTEMS</span>
      <div>
        <h2 id="brand-guide-title">Three brands.<br/><i>Three complete stories.</i></h2>
        <p>Axiom Arise, Key MedSolutions and KH RCM each have their own independent carousel. Every slide can be opened manually, while the presentation advances automatically when untouched.</p>
      </div>
    </header>

    <div className="brand-guide-decks">
      <BrandDeck project={designProjects[0]} slides={axiomGuidePages} deckNumber={1} pdfHref="/case-studies/axiom-guide/Axiom_Arise_Brand_Guidelines.pdf" priority reducedMotion={reducedMotion}/>
      <BrandDeck project={designProjects[1]} slides={keyGuidePages} deckNumber={2} reducedMotion={reducedMotion}/>
      <BrandDeck project={designProjects[2]} slides={khGuidePages} deckNumber={3} reducedMotion={reducedMotion}/>
    </div>

    <p className="brand-guide-disclosure">Axiom Arise delivery details come from the approved project handoff. Key MedSolutions and KH RCM use their exact supplied logo assets with dedicated visual brand-guide presentations; no unverified performance result is claimed.</p>
  </section>;
}
