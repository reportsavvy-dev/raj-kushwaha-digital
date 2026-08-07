"use client";
import Link from "next/link";
import { useState } from "react";

export function Nav() {
  const [open, setOpen] = useState(false);
  return <header className="nav wrap">
    <Link className="brand" href="/" aria-label="Raj Kushwaha Digital home"><span className="brand-mark">RK</span><span>RAJ KUSHWAHA<small>DIGITAL</small></span></Link>
    <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? "CLOSE" : "MENU"}</button>
    <nav className={open ? "open" : ""}><Link href="/">Home</Link><Link href="/expertise">Expertise</Link><a href="/#services">Services</a><a href="mailto:hello@rajkushwahadigital.com" className="nav-cta">Let’s talk <span>↗</span></a></nav>
  </header>;
}
