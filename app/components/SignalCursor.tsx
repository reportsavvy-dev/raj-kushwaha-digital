"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, summary, [role='button'], [data-cursor-action]";
const nativeSelector = "input, textarea, select, [contenteditable='true']";

export function SignalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cursor || !finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    root.classList.add("signal-cursor-enabled");
    let targetX = -80;
    let targetY = -80;
    let currentX = -80;
    let currentY = -80;
    let frame = 0;

    const render = () => {
      currentX += (targetX - currentX) * 0.24;
      currentY += (targetY - currentY) * 0.24;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      if (Math.abs(targetX - currentX) > 0.12 || Math.abs(targetY - currentY) > 0.12) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      const element = event.target instanceof Element ? event.target : null;
      const usesNativeCursor = Boolean(element?.closest(nativeSelector));
      cursor.classList.toggle("is-hidden", usesNativeCursor);
      cursor.classList.toggle("is-action", Boolean(element?.closest(interactiveSelector)) && !usesNativeCursor);
      cursor.classList.add("is-visible");
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const press = () => cursor.classList.add("is-pressed");
    const release = () => cursor.classList.remove("is-pressed");
    const hide = () => cursor.classList.remove("is-visible");

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);

    return () => {
      root.classList.remove("signal-cursor-enabled");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="signal-cursor" ref={cursorRef} aria-hidden="true">
      <span className="signal-cursor__orbit" />
      <span className="signal-cursor__head" />
      <span className="signal-cursor__particle signal-cursor__particle--one" />
      <span className="signal-cursor__particle signal-cursor__particle--two" />
      <span className="signal-cursor__particle signal-cursor__particle--three" />
    </div>
  );
}
