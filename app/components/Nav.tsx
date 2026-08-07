"use client";
import Link from "next/link";
import { useState } from "react";

export function Logo(){return <span className="logo-lockup"><span className="logo-mark"><i>R</i><b>K</b><em>D</em><small><u/><u/><u/></small></span><span className="logo-name">RAJ KUSHWAHA<small>DIGITAL</small></span></span>}
export function Nav(){const[open,setOpen]=useState(false);return <header className="nav shell"><Link href="/" aria-label="Raj Kushwaha Digital home"><Logo/></Link><button className="menu" onClick={()=>setOpen(!open)} aria-expanded={open}>{open?"CLOSE":"MENU"}</button><nav className={open?"open":""}><Link href="/">HOME</Link><Link href="/expertise">EXPERTISE</Link><a href="mailto:hello@rajkushwahadigital.com">CONTACT</a></nav></header>}
