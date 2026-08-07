"use client";

import { useEffect, useRef } from "react";

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const cursorEnabled = finePointer;
    let x = 0;
    let y = 0;
    let ringX = 0;
    let ringY = 0;
    let cursorFrame = 0;
    let scrollFrame = 0;

    const renderCursor = () => {
      ringX += (x - ringX) * 0.18;
      ringY += (y - ringY) * 0.18;
      ring.current?.style.setProperty("transform", `translate3d(${ringX}px,${ringY}px,0)`);

      if (Math.abs(x - ringX) > 0.15 || Math.abs(y - ringY) > 0.15) {
        cursorFrame = window.requestAnimationFrame(renderCursor);
      } else {
        cursorFrame = 0;
      }
    };

    const move = (event: PointerEvent) => {
      if (!cursorEnabled) return;
      x = event.clientX;
      y = event.clientY;
      dot.current?.style.setProperty("transform", `translate3d(${x}px,${y}px,0)`);
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(renderCursor);
    };

    const over = (event: PointerEvent) => {
      if (!cursorEnabled) return;
      ring.current?.classList.toggle(
        "cursor-active",
        Boolean((event.target as HTMLElement).closest("a,button,.hover-target")),
      );
    };
    const down = () => cursorEnabled && ring.current?.classList.add("cursor-click");
    const up = () => ring.current?.classList.remove("cursor-click");

    const renderScroll = () => {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("transform", `scaleY(${max ? window.scrollY / max : 0})`);
    };
    const scroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(renderScroll);
    };

    const magneticCleanups: Array<() => void> = [];
    if (finePointer) {
      document.querySelectorAll<HTMLElement>(".magnetic").forEach((element) => {
        let rect: DOMRect | null = null;
        let frame = 0;
        let offsetX = 0;
        let offsetY = 0;
        const enter = () => { rect = element.getBoundingClientRect(); };
        const paint = () => {
          frame = 0;
          element.style.transform = `translate3d(${offsetX}px,${offsetY}px,0)`;
        };
        const magneticMove = (event: PointerEvent) => {
          if (!cursorEnabled) return;
          rect ??= element.getBoundingClientRect();
          offsetX = (event.clientX - rect.left - rect.width / 2) * 0.12;
          offsetY = (event.clientY - rect.top - rect.height / 2) * 0.16;
          if (!frame) frame = window.requestAnimationFrame(paint);
        };
        const leave = () => {
          rect = null;
          element.style.transform = "";
        };
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointermove", magneticMove);
        element.addEventListener("pointerleave", leave);
        magneticCleanups.push(() => {
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointermove", magneticMove);
          element.removeEventListener("pointerleave", leave);
          if (frame) window.cancelAnimationFrame(frame);
        });
      });
    }

    const motionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("motion-paused", !entry.isIntersecting)),
      { rootMargin: "140px 0px" },
    );
    document.querySelectorAll(".ticker,.service-marquee").forEach((element) => motionObserver.observe(element));

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("scroll", scroll, { passive: true });
    renderScroll();

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("scroll", scroll);
      magneticCleanups.forEach((cleanup) => cleanup());
      motionObserver.disconnect();
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return <>
    <div className="page-progress"><small>01</small><i><span ref={progress}/></i><b>RKD</b></div>
    <div ref={dot} className="cursor-dot"><i/></div>
    <div ref={ring} className="cursor-ring"><i/><b>+</b><span>SIGNAL</span></div>
  </>;
}
