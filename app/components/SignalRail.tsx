"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiArrowLeft, FiArrowRight, FiExternalLink } from "react-icons/fi";

type SignalClient = {
  href: string;
  src: string;
  alt: string;
  name: string;
};

const accents = ["#ff5638", "#12a89d", "#315bea", "#ffb000"];

export function SignalRail({ clients }: { clients: SignalClient[] }) {
  const initialIndex = Math.floor(clients.length / 2);
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLAnchorElement | null)[]>([]);
  const dragRef = useRef({ active: false, startX: 0, scrollLeft: 0, moved: false });
  const scrollFrameRef = useRef<number | null>(null);
  const lastInteractionRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const [isInteracting, setIsInteracting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  const centerCard = useCallback((index: number, behavior: ScrollBehavior = "smooth") => {
    const viewport = viewportRef.current;
    const card = cardRefs.current[index];
    if (!viewport || !card) return;

    viewport.scrollTo({
      left: card.offsetLeft - (viewport.clientWidth - card.clientWidth) / 2,
      behavior,
    });
    setActiveIndex(index);
  }, []);

  const markInteraction = useCallback(() => {
    lastInteractionRef.current = Date.now();
  }, []);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotion = () => setReduceMotion(motionQuery.matches);
    updateMotion();
    motionQuery.addEventListener("change", updateMotion);
    return () => motionQuery.removeEventListener("change", updateMotion);
  }, []);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport || !("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting), {
      rootMargin: "120px 0px",
      threshold: 0.15,
    });
    observer.observe(viewport);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => centerCard(initialIndex, "auto"));
    return () => window.cancelAnimationFrame(frame);
  }, [centerCard, initialIndex]);

  useEffect(() => () => {
    if (scrollFrameRef.current !== null) window.cancelAnimationFrame(scrollFrameRef.current);
  }, []);

  useEffect(() => {
    if (reduceMotion || !isVisible || isInteracting || clients.length < 2) return;

    const timer = window.setInterval(() => {
      if (document.hidden || Date.now() - lastInteractionRef.current < 6500) return;
      const nextIndex = (activeIndex + 1) % clients.length;
      centerCard(nextIndex);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [activeIndex, centerCard, clients.length, isInteracting, isVisible, reduceMotion]);

  const handleScroll = () => {
    if (scrollFrameRef.current !== null) return;
    scrollFrameRef.current = window.requestAnimationFrame(() => {
      scrollFrameRef.current = null;
      const viewport = viewportRef.current;
      if (!viewport) return;
      const viewportCenter = viewport.scrollLeft + viewport.clientWidth / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;
        const distance = Math.abs(card.offsetLeft + card.clientWidth / 2 - viewportCenter);
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      setActiveIndex(closestIndex);
    });
  };

  const move = (direction: -1 | 1) => {
    markInteraction();
    centerCard((activeIndex + direction + clients.length) % clients.length, reduceMotion ? "auto" : "smooth");
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "mouse" || event.button !== 0) return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    dragRef.current = { active: true, startX: event.clientX, scrollLeft: viewport.scrollLeft, moved: false };
    viewport.setPointerCapture(event.pointerId);
    viewport.dataset.dragging = "true";
    setIsInteracting(true);
    markInteraction();
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragRef.current.active || event.pointerType !== "mouse") return;
    const viewport = viewportRef.current;
    if (!viewport) return;
    const distance = event.clientX - dragRef.current.startX;
    if (Math.abs(distance) > 5) dragRef.current.moved = true;
    viewport.scrollLeft = dragRef.current.scrollLeft - distance;
  };

  const finishDrag = (event: React.PointerEvent<HTMLDivElement>) => {
    const viewport = viewportRef.current;
    if (!dragRef.current.active || !viewport) return;
    dragRef.current.active = false;
    delete viewport.dataset.dragging;
    if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
    setIsInteracting(false);
    centerCard(activeIndex, reduceMotion ? "auto" : "smooth");
  };

  return (
    <div className="signal-rail">
      <header className="signal-rail__header">
        <div>
          <h2>The Signal Rail</h2>
          <p>Selected client systems across search, social, content and brand delivery. Drag the rail or open a card to inspect the work.</p>
        </div>
        <div className="signal-rail__controls" aria-label="Client work controls">
          <button type="button" onClick={() => move(-1)} aria-label="Show previous client">
            <FiArrowLeft aria-hidden="true" />
          </button>
          <span aria-hidden="true">{String(activeIndex + 1).padStart(2, "0")} / {String(clients.length).padStart(2, "0")}</span>
          <button type="button" onClick={() => move(1)} aria-label="Show next client">
            <FiArrowRight aria-hidden="true" />
          </button>
        </div>
      </header>

      <div
        className="signal-rail__viewport"
        ref={viewportRef}
        onScroll={handleScroll}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={finishDrag}
        onPointerCancel={finishDrag}
        onMouseEnter={() => setIsInteracting(true)}
        onMouseLeave={() => {
          if (!dragRef.current.active) setIsInteracting(false);
        }}
        onFocusCapture={() => setIsInteracting(true)}
        onBlurCapture={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) setIsInteracting(false);
        }}
        aria-label="Selected client work carousel"
        aria-roledescription="carousel"
      >
        <div className="signal-rail__track">
          {clients.map((client, index) => (
            <Link
              ref={(node) => { cardRefs.current[index] = node; }}
              className="signal-card"
              data-active={index === activeIndex ? "true" : "false"}
              data-cursor-action="view"
              href={client.href}
              prefetch={false}
              key={`${client.name}-${index}`}
              style={{ "--signal-accent": accents[index % accents.length] } as React.CSSProperties}
              aria-label={`View work for ${client.name}`}
              onClick={(event) => {
                if (dragRef.current.moved) {
                  event.preventDefault();
                  dragRef.current.moved = false;
                }
              }}
            >
              <span className="signal-card__status">{index === activeIndex ? "ACTIVE SIGNAL" : "CLIENT SIGNAL"}</span>
              <span className="signal-card__logo">
                <Image src={client.src} alt={client.alt} width={230} height={96} unoptimized />
              </span>
              <span className="signal-card__footer">
                <b>{client.name}</b>
                <span><span>{String(index + 1).padStart(2, "0")}</span><FiExternalLink aria-hidden="true" /></span>
              </span>
            </Link>
          ))}
        </div>
      </div>

      <div className="signal-rail__meter" aria-hidden="true">
        <span style={{ transform: `scaleX(${(activeIndex + 1) / clients.length})` }} />
        <small>AUTO / DRAG</small>
      </div>
    </div>
  );
}
