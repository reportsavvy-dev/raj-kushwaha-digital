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
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function submitProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    const form = new FormData(formElement);
    const selected = form.getAll("projectType").join(", ") || "Not selected";
    const name = String(form.get("name") || "");

    setIsSubmitting(true);
    setStatus("Sending your enquiry...");

    try {
      const response = await fetch("https://formsubmit.co/ajax/hello@rajkushwahadigital.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email: String(form.get("email") || ""),
          "Company / brand": String(form.get("company") || "Not provided"),
          Website: String(form.get("website") || "Not provided"),
          "Project type": selected,
          "Approximate budget": String(form.get("budget") || "Not selected"),
          "Ideal timeline": String(form.get("timeline") || "Not selected"),
          "Project context": String(form.get("context") || ""),
          _subject: `Project enquiry from ${name}`,
          _template: "table",
          _url: window.location.href,
        }),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      formElement.reset();
      setStatus("Thank you. Your enquiry has been submitted successfully.");
    } catch {
      setStatus("We could not send your enquiry. Please try again or email hello@rajkushwahadigital.com.");
    } finally {
      setIsSubmitting(false);
    }
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
    <button className="contact-submit" type="submit" disabled={isSubmitting}>{isSubmitting ? "SENDING..." : "SUBMIT ENQUIRY"} <span>→</span></button>
    <p className="contact-form-note">Your enquiry will be sent securely to hello@rajkushwahadigital.com.</p>
    <p className="contact-form-status" role="status" aria-live="polite">{status}</p>
  </form>;
}
