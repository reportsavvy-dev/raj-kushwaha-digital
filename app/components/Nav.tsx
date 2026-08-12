"use client";

import Link from "next/link";
import { useState } from "react";
import { serviceIndex } from "../data/serviceIndex";
import { RKDMark } from "./BrandMark";

export function Logo() {
  return <span className="logo-lockup">
    <RKDMark/>
    <span className="logo-name"><b>RAJ KUSHWAHA</b><small>DIGITAL</small></span>
  </span>;
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [expertiseOpen, setExpertiseOpen] = useState(false);
  const closeAll = () => { setOpen(false); setExpertiseOpen(false); };

  return <header className="nav shell">
    <Link href="/" onClick={closeAll}><Logo/></Link>
    <button className="menu" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="primary-navigation">{open ? "CLOSE" : "MENU"}</button>
    <nav id="primary-navigation" className={open ? "open" : ""}>
      <Link href="/" onClick={closeAll}>HOME</Link>
      <Link href="/work" onClick={closeAll}>WORK</Link>
      <Link href="/insights" onClick={closeAll}>INSIGHTS</Link>
      <div className={`expertise-nav ${expertiseOpen ? "is-open" : ""}`} onMouseLeave={() => setExpertiseOpen(false)}>
        <div className="expertise-nav-trigger">
          <Link href="/expertise" onMouseEnter={() => setExpertiseOpen(true)} onFocus={() => setExpertiseOpen(true)} onClick={() => setOpen(false)}>EXPERTISE</Link>
          <button aria-label="Show all services" aria-expanded={expertiseOpen} onClick={() => setExpertiseOpen(!expertiseOpen)}>+</button>
        </div>
        <div className="expertise-dropdown" aria-label="All services">
          <header><span>15 CONNECTED CAPABILITIES</span><b>Choose an expertise <i>↗</i></b></header>
          <div>{serviceIndex.map((service, index) => <Link href={`/services/${service.slug}`} key={service.slug} onClick={closeAll}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            <b>{service.name}</b>
            <i style={{background: service.accent}}/>
          </Link>)}</div>
        </div>
      </div>
      <Link href="/contact" onClick={closeAll}>CONTACT</Link>
    </nav>
  </header>;
}
