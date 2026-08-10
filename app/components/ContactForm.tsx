"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Digital strategy",
  "SEO / AEO / GEO",
  "Social / content",
  "Paid media",
  "Branding / design",
  "Website",
  "App / software",
  "AI automation",
];

const budgets = ["Under ₹50,000", "₹50,000–₹1.5L", "₹1.5L–₹5L", "₹5L+", "Not sure yet"];
const timelines = ["As soon as possible", "Within 2–4 weeks", "Within 1–2 months", "2–3 months", "Still exploring"];

export function ContactForm() {
  const [status, setStatus] = useState("");

  function submitProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const selected = form.getAll("projectType").join(", ") || "Not selected";
    const lines = [
      `Name: ${form.get("name")}`,
      `Work email: ${form.get("email")}`,
      `Company / brand: ${form.get("company") || "Not provided"}`,
      `Website: ${form.get("website") || "Not provided"}`,
      `Project type: ${selected}`,
      `Approximate budget: ${form.get("budget") || "Not selected"}`,
      `Ideal timeline: ${form.get("timeline") || "Not selected"}`,
      "",
      "Project context:",
      String(form.get("context") || ""),
    ];
    const subject = `Project enquiry from ${form.get("name")}`;
    setStatus("Your email draft is opening. Review it, then press send in your email app.");
    window.location.href = `mailto:hello@rajkushwahadigital.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
  }

  return <form className="project-enquiry-form" onSubmit={submitProject}>
    <header><span>PROJECT ENQUIRY</span><small>* REQUIRED</small></header>

    <div className="contact-field-grid">
      <label><span>FULL NAME *</span><input name="name" autoComplete="name" required placeholder="Your full name"/></label>
      <label><span>WORK EMAIL *</span><input name="email" type="email" autoComplete="email" required placeholder="name@company.com"/></label>
      <label><span>COMPANY / BRAND</span><input name="company" autoComplete="organization" placeholder="Your company or brand"/></label>
      <label><span>WEBSITE (IF ANY)</span><input name="website" type="url" inputMode="url" autoComplete="url" placeholder="https://yourwebsite.com"/></label>
    </div>

    <fieldset>
      <legend>PROJECT TYPE <small>SELECT ALL THAT APPLY</small></legend>
      <div className="contact-choice-grid project-type-options">{projectTypes.map((item) => <label key={item}><input type="checkbox" name="projectType" value={item}/><span>{item}</span></label>)}</div>
    </fieldset>

    <fieldset>
      <legend>APPROXIMATE BUDGET <small>OPTIONAL</small></legend>
      <div className="contact-choice-grid">{budgets.map((item) => <label key={item}><input type="radio" name="budget" value={item}/><span>{item}</span></label>)}</div>
    </fieldset>

    <fieldset>
      <legend>IDEAL TIMELINE <small>OPTIONAL</small></legend>
      <div className="contact-choice-grid">{timelines.map((item) => <label key={item}><input type="radio" name="timeline" value={item}/><span>{item}</span></label>)}</div>
    </fieldset>

    <label className="contact-context"><span>PROJECT CONTEXT *</span><textarea name="context" required maxLength={1500} rows={7} placeholder="What is stuck, what needs to change, who are you trying to reach, and what would a useful result look like?"/></label>
    <button className="contact-submit" type="submit">OPEN PROJECT EMAIL <span>→</span></button>
    <p className="contact-form-note">This opens a prefilled email in your default mail app. Your information is not stored on this website.</p>
    <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
