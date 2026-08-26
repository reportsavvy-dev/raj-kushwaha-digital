"use client";

import { useEffect, useRef } from "react";

const interactiveSelector = "a, button, summary, [role='button'], [data-cursor-action]";
const nativeSelector = "input, textarea, select, [contenteditable='true']";

export function SignalCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const ribbonRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const canvas = ribbonRef.current;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!cursor || !canvas || !finePointer.matches || reducedMotion.matches) return;

    const root = document.documentElement;
    const context = canvas.getContext("2d");
    if (!context) return;

    root.classList.add("signal-cursor-enabled");
    let targetX = -80;
    let targetY = -80;
    let currentX = -80;
    let currentY = -80;
    let frame = 0;
    let lastMoveAt = 0;
    let hidden = true;

    type TrailLayer = {
      color: string;
      ease: number;
      opacity: number;
      width: number;
      x: number;
      y: number;
      points: Array<{ x: number; y: number }>;
    };

    const trails: TrailLayer[] = [
      { color: "#12a89d", ease: 0.24, opacity: 0.78, width: 2.2, x: -80, y: -80, points: [] },
      { color: "#315bea", ease: 0.17, opacity: 0.48, width: 1.7, x: -80, y: -80, points: [] },
      { color: "#ff4d2e", ease: 0.11, opacity: 0.3, width: 1.35, x: -80, y: -80, points: [] },
    ];

    const resizeCanvas = () => {
      const density = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(window.innerWidth * density);
      canvas.height = Math.round(window.innerHeight * density);
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      context.setTransform(density, 0, 0, density, 0, 0);
    };

    const clearRibbon = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      trails.forEach((trail) => {
        trail.points.length = 0;
        trail.x = currentX;
        trail.y = currentY;
      });
    };

    const drawRibbon = () => {
      context.clearRect(0, 0, window.innerWidth, window.innerHeight);
      context.lineCap = "round";
      context.lineJoin = "round";

      trails.forEach((trail) => {
        const { points } = trail;
        if (points.length < 2) return;

        for (let index = 1; index < points.length; index += 1) {
          const previous = points[index - 1];
          const point = points[index];
          const strength = index / points.length;
          context.beginPath();
          context.moveTo(previous.x, previous.y);
          context.lineTo(point.x, point.y);
          context.globalAlpha = trail.opacity * strength * strength;
          context.strokeStyle = trail.color;
          context.lineWidth = trail.width * (0.55 + strength * 0.45);
          context.stroke();
        }
      });

      context.globalAlpha = 1;
    };

    const render = (now: number) => {
      currentX += (targetX - currentX) * 0.28;
      currentY += (targetY - currentY) * 0.28;
      cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;

      let leaderX = currentX;
      let leaderY = currentY;
      const idle = now - lastMoveAt > 110;

      trails.forEach((trail) => {
        trail.x += (leaderX - trail.x) * trail.ease;
        trail.y += (leaderY - trail.y) * trail.ease;
        leaderX = trail.x;
        leaderY = trail.y;

        const lastPoint = trail.points.at(-1);
        if (!lastPoint || Math.hypot(trail.x - lastPoint.x, trail.y - lastPoint.y) > 1.25) {
          trail.points.push({ x: trail.x, y: trail.y });
        }
        if (trail.points.length > 15) trail.points.shift();
        if (idle && trail.points.length) trail.points.shift();
      });

      drawRibbon();

      const unsettled = Math.abs(targetX - currentX) > 0.12 || Math.abs(targetY - currentY) > 0.12;
      const hasTrail = trails.some((trail) => trail.points.length > 1);
      if (!hidden && (unsettled || hasTrail)) {
        frame = window.requestAnimationFrame(render);
      } else {
        frame = 0;
      }
    };

    const move = (event: PointerEvent) => {
      if (event.pointerType && event.pointerType !== "mouse") return;
      targetX = event.clientX;
      targetY = event.clientY;
      lastMoveAt = performance.now();
      const element = event.target instanceof Element ? event.target : null;
      const usesNativeCursor = Boolean(element?.closest(nativeSelector));
      hidden = usesNativeCursor;
      cursor.classList.toggle("is-hidden", usesNativeCursor);
      canvas.classList.toggle("is-hidden", usesNativeCursor);
      cursor.classList.toggle("is-action", Boolean(element?.closest(interactiveSelector)) && !usesNativeCursor);
      cursor.classList.add("is-visible");
      canvas.classList.add("is-visible");
      if (usesNativeCursor) clearRibbon();
      if (!frame) frame = window.requestAnimationFrame(render);
    };

    const press = () => cursor.classList.add("is-pressed");
    const release = () => cursor.classList.remove("is-pressed");
    const hide = () => {
      hidden = true;
      cursor.classList.remove("is-visible");
      canvas.classList.remove("is-visible");
      clearRibbon();
    };

    const show = () => {
      hidden = false;
    };

    const visibilityChange = () => {
      if (document.hidden) hide();
    };

    resizeCanvas();
    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerenter", show, { passive: true });
    window.addEventListener("pointerdown", press, { passive: true });
    window.addEventListener("pointerup", release, { passive: true });
    window.addEventListener("resize", resizeCanvas, { passive: true });
    document.documentElement.addEventListener("mouseleave", hide);
    window.addEventListener("blur", hide);
    document.addEventListener("visibilitychange", visibilityChange);

    return () => {
      root.classList.remove("signal-cursor-enabled");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerenter", show);
      window.removeEventListener("pointerdown", press);
      window.removeEventListener("pointerup", release);
      window.removeEventListener("resize", resizeCanvas);
      document.documentElement.removeEventListener("mouseleave", hide);
      window.removeEventListener("blur", hide);
      document.removeEventListener("visibilitychange", visibilityChange);
      if (frame) window.cancelAnimationFrame(frame);
      clearRibbon();
    };
  }, []);

  return (
    <>
      <canvas className="signal-ribbon" ref={ribbonRef} aria-hidden="true" />
      <div className="signal-cursor" ref={cursorRef} aria-hidden="true">
        <span className="signal-cursor__orbit" />
        <span className="signal-cursor__head" />
      </div>
    </>
  );
}
