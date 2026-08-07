"use client";

import { useEffect, useRef } from "react";

export function useMotionSurface(xVariable: string, yVariable: string, strength = 18) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const pointer = useRef({ x: 0, y: 0 });
  const finePointer = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    finePointer.current = window.matchMedia("(pointer: fine)").matches;
    const observer = new IntersectionObserver(
      ([entry]) => element.classList.toggle("motion-paused", !entry.isIntersecting),
      { rootMargin: "120px 0px" },
    );
    observer.observe(element);

    return () => {
      observer.disconnect();
      if (frame.current) window.cancelAnimationFrame(frame.current);
    };
  }, []);

  const paint = () => {
    frame.current = 0;
    const element = ref.current;
    if (!element) return;
    element.style.setProperty(xVariable, `${pointer.current.x * strength}px`);
    element.style.setProperty(yVariable, `${pointer.current.y * strength}px`);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const element = ref.current;
    if (!element || !finePointer.current) return;
    const rect = element.getBoundingClientRect();
    pointer.current.x = (event.clientX - rect.left - rect.width / 2) / rect.width;
    pointer.current.y = (event.clientY - rect.top - rect.height / 2) / rect.height;
    if (!frame.current) frame.current = window.requestAnimationFrame(paint);
  };

  const onPointerLeave = () => {
    pointer.current = { x: 0, y: 0 };
    if (!frame.current) frame.current = window.requestAnimationFrame(paint);
  };

  return { ref, onPointerMove, onPointerLeave };
}
