"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const consentKey = "rkd_analytics_consent";
const containerId = "GTM-PT5F2LLZ";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

function loadTagManager() {
  if (document.getElementById("rkd-gtm")) return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });
  const script = document.createElement("script");
  script.id = "rkd-gtm";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtm.js?id=${containerId}`;
  document.head.appendChild(script);
}

export function AnalyticsConsent() {
  const [choice, setChoice] = useState<"loading" | "unset" | "granted" | "denied">("loading");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      const saved = localStorage.getItem(consentKey);
      if (saved === "granted") loadTagManager();
      setChoice(saved === "granted" || saved === "denied" ? saved : "unset");
    }, 0);

    const reopen = () => setChoice("unset");
    window.addEventListener("rkd:open-consent", reopen);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("rkd:open-consent", reopen);
    };
  }, []);

  function update(next: "granted" | "denied") {
    localStorage.setItem(consentKey, next);
    setChoice(next);
    if (next === "granted") loadTagManager();
  }

  if (choice !== "unset") return null;

  return <aside className="analytics-consent" aria-label="Analytics choices">
    <div>
      <strong>YOUR ANALYTICS CHOICE</strong>
      <p>We use Google Analytics only with your permission to understand visits and improve the website. We do not send contact-form details to Analytics. <Link href="/privacy">Read the privacy notice</Link>.</p>
    </div>
    <div className="analytics-consent-actions">
      <button type="button" onClick={() => update("denied")}>DECLINE</button>
      <button type="button" className="is-primary" onClick={() => update("granted")}>ALLOW ANALYTICS</button>
    </div>
  </aside>;
}

export function CookieSettingsButton() {
  return <button className="cookie-settings" type="button" onClick={() => window.dispatchEvent(new Event("rkd:open-consent"))}>COOKIE SETTINGS</button>;
}
