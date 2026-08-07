"use client";

import { useEffect, useState } from "react";
import { RKDMark } from "./BrandMark";

export function BrandIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const key = "rkd-brand-intro-seen";
    if (sessionStorage.getItem(key)) {
      setVisible(false);
      return;
    }

    sessionStorage.setItem(key, "1");
    document.body.classList.add("brand-intro-active");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = window.setTimeout(() => setVisible(false), reducedMotion ? 350 : 2600);
    return () => {
      window.clearTimeout(timer);
      document.body.classList.remove("brand-intro-active");
    };
  }, []);

  useEffect(() => {
    if (!visible) document.body.classList.remove("brand-intro-active");
  }, [visible]);

  if (!visible) return null;
  return <div className="brand-intro" role="status" aria-label="Raj Kushwaha Digital is loading">
    <div className="brand-intro-track"><i/><span>LIVE SIGNAL</span><i/></div>
    <div className="brand-intro-mark"><RKDMark/><b/></div>
    <div className="brand-intro-wordmark"><strong>RAJ KUSHWAHA DIGITAL</strong><span>STRATEGY · CREATIVITY · TECHNOLOGY</span></div>
  </div>;
}
