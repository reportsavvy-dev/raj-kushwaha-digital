"use client";

import { useEffect, useRef } from "react";

const CURSOR_TONES = ["teal", "violet", "gold", "coral", "main"] as const;

export function Cursor() {
  const trail = useRef<HTMLDivElement>(null);
  const arrows = useRef<Array<HTMLSpanElement | null>>([]);
  const progress = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cursorEnabled = finePointer && !reducedMotion;

    if (!cursorEnabled) {
      document.documentElement.classList.add("native-cursor");
      return () => document.documentElement.classList.remove("native-cursor");
    }

    let x = -60;
    let y = -60;
    let cursorFrame = 0;
    let scrollFrame = 0;
    let serviceActive = false;
    const followers = CURSOR_TONES.map(() => ({ x: -60, y: -60 }));
    const easing = [0.12, 0.17, 0.24, 0.34, 1];
    const maxLag = [54, 41, 29, 17, 0];

    const renderCursor = () => {
      let moving = false;

      followers.forEach((position, index) => {
        if (index === followers.length - 1) {
          position.x = x;
          position.y = y;
        } else {
          position.x += (x - position.x) * easing[index];
          position.y += (y - position.y) * easing[index];

          const deltaX = x - position.x;
          const deltaY = y - position.y;
          const distance = Math.hypot(deltaX, deltaY);
          const limit = maxLag[index] * (serviceActive ? 1.22 : 1);

          if (distance > limit) {
            position.x = x - (deltaX / distance) * limit;
            position.y = y - (deltaY / distance) * limit;
          }

          if (Math.abs(deltaX) > 0.12 || Math.abs(deltaY) > 0.12) moving = true;
        }

        const tilt = index === followers.length - 1
          ? 0
          : Math.max(-10, Math.min(10, (x - position.x) * 0.13));

        arrows.current[index]?.style.setProperty(
          "transform",
          `translate3d(${position.x}px,${position.y}px,0) rotate(${tilt}deg)`,
        );
      });

      if (moving) {
        cursorFrame = window.requestAnimationFrame(renderCursor);
      } else {
        cursorFrame = 0;
      }
    };

    const move = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      trail.current?.classList.add("is-visible");
      if (!cursorFrame) cursorFrame = window.requestAnimationFrame(renderCursor);
    };

    const over = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const isHeaderNavigation = Boolean(target.closest(".nav"));
      const isInteractive = !isHeaderNavigation && Boolean(target.closest("a,button,.hover-target"));
      serviceActive = Boolean(target.closest(".capability-motion-row"));
      trail.current?.classList.toggle("cursor-active", isInteractive);
      trail.current?.classList.toggle("cursor-service", serviceActive);
    };

    const down = () => trail.current?.classList.add("cursor-click");
    const up = () => trail.current?.classList.remove("cursor-click");
    const hide = () => trail.current?.classList.remove("is-visible");

    const renderScroll = () => {
      scrollFrame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.current?.style.setProperty("transform", `scaleY(${max ? window.scrollY / max : 0})`);
    };
    const scroll = () => {
      if (!scrollFrame) scrollFrame = window.requestAnimationFrame(renderScroll);
    };

    const magneticCleanups: Array<() => void> = [];
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

    const motionObserver = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("motion-paused", !entry.isIntersecting)),
      { rootMargin: "140px 0px" },
    );
    document.querySelectorAll(".ticker,.service-marquee,.home-client-carousel").forEach((element) => motionObserver.observe(element));

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    window.addEventListener("pointerdown", down, { passive: true });
    window.addEventListener("pointerup", up, { passive: true });
    window.addEventListener("blur", hide);
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("scroll", scroll, { passive: true });
    renderScroll();

    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      window.removeEventListener("pointerdown", down);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("blur", hide);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("scroll", scroll);
      magneticCleanups.forEach((cleanup) => cleanup());
      motionObserver.disconnect();
      if (cursorFrame) window.cancelAnimationFrame(cursorFrame);
      if (scrollFrame) window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return <>
    <div className="page-progress"><small>01</small><i><span ref={progress}/></i><b>RKD</b></div>
    <div ref={trail} className="cursor-trail" aria-hidden="true">
      {CURSOR_TONES.map((tone, index) => <span
        className={`cursor-arrow cursor-arrow--${tone}`}
        key={tone}
        ref={(node) => { arrows.current[index] = node; }}
      />)}
    </div>
  </>;
}
