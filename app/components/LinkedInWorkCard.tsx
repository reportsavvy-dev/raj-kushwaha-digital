import Image from "next/image";
import Link from "next/link";
import type { CSSProperties } from "react";
import type { LinkedInWorkSample } from "../data/linkedinWork";

type LinkedInWorkCardProps = {
  sample: LinkedInWorkSample;
  index: number;
};

export function LinkedInWorkCard({ sample, index }: LinkedInWorkCardProps) {
  const caseNumber = String(index + 1).padStart(2, "0");

  return <Link
    href={`/work/linkedin/${sample.slug}`}
    className="linkedin-work-card"
    style={{ "--sample-accent": sample.accent, "--sample-soft": sample.accentSoft } as CSSProperties}
  >
    <div className="linkedin-work-image">
      <Image src={sample.cardImage} alt={sample.cardAlt} fill unoptimized sizes="(max-width: 720px) 100vw, (max-width: 1100px) 50vw, 33vw"/>
      <div className="linkedin-visual-status"><span>CASE {caseNumber} / 09</span><b><i/> LIVE POST</b></div>
      <div className="linkedin-visual-logo"><Image src={sample.logo} alt="" width={148} height={58} unoptimized/></div>
      <div className="linkedin-visual-steps" aria-label="Case study process">
        <span><b>01</b> STRATEGY</span>
        <span><b>02</b> CREATIVE</span>
        <span><b>03</b> DELIVERY</span>
      </div>
    </div>
    <div className="linkedin-work-copy">
      <small>PUBLIC LINKEDIN WORK / {caseNumber}</small>
      <h3>{sample.headline}</h3>
      <p>{sample.topic}</p>
      <b>VIEW THE LIVE CASE <i>↗</i></b>
    </div>
  </Link>;
}
