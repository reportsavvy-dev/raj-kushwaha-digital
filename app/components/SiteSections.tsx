import Link from "next/link";
import { RKDMark } from "./BrandMark";
import { Logo } from "./Nav";

export function Contact() {
  return <section className="contact shell" id="contact"><div className="contact-brandmark"><RKDMark/></div><div><span className="eyebrow-small">START WITH THE REAL PROBLEM</span><h2>Tell us what must change.<br/><i>We&apos;ll map the next move.</i></h2><Link href="/contact">START A PROJECT <span>↗</span></Link></div></section>;
}

export function Footer() {
  return <footer><div className="shell"><Logo/><nav aria-label="Footer"><Link href="/work">WORK</Link><Link href="/insights">INSIGHTS</Link><Link href="/about/raj-kushwaha">ABOUT RAJ</Link><Link href="/contact">CONTACT</Link></nav><span>© {new Date().getFullYear()} RAJ KUSHWAHA DIGITAL</span></div></footer>;
}
