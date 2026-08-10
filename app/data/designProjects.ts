export type DesignProject = {
  client: string;
  logo: string;
  logoAlt: string;
  sector: string;
  eyebrow: string;
  title: string;
  summary: string;
  scope: string[];
  proof: string[];
  sourceHref?: string;
  sourceLabel?: string;
  caseHref?: string;
  accent: string;
  soft: string;
};

export const designProjects: DesignProject[] = [
  {
    client: "Axiom Arise",
    logo: "/clients/axiom-arise.webp",
    logoAlt: "Axiom Arise Recruitment and Talent Solutions approved master logo",
    sector: "Recruitment and talent solutions",
    eyebrow: "COMPLETE IDENTITY DELIVERY",
    title: "One approved mark, prepared for every real-world format",
    summary:
      "The selected Axiom Arise wordmark and teal square were treated as a locked master reference. The work was to protect that identity while preparing a clean, usable system for digital, social, print and stationery applications.",
    scope: [
      "Primary, black, white reverse and teal logo variants",
      "AI, EPS, SVG, vector PDF, PNG and JPG files",
      "Social profile assets and LinkedIn/Facebook covers",
      "Business card, A4 letterhead and DL envelope",
    ],
    proof: ["34 validated files", "8-page brand guide", "4 colour systems"],
    accent: "#16a6a0",
    soft: "#d9f4f1",
  },
  {
    client: "Key MedSolutions",
    logo: "/clients/key-medsolutions.webp",
    logoAlt: "Key MedSolutions official logo",
    sector: "Medical billing and revenue cycle management",
    eyebrow: "BRAND APPLICATION SYSTEM",
    title: "A healthcare identity carried consistently into search and content",
    summary:
      "For a medical billing brand, clarity and trust matter more than visual noise. The existing identity was applied consistently across search-led content and LinkedIn communication while keeping the service language practical for healthcare providers.",
    scope: [
      "Brand-consistent content layouts",
      "Search and social creative direction",
      "Healthcare service hierarchy",
      "Reusable visual communication rules",
    ],
    proof: ["Portfolio-verified client", "Official website checked", "Search case available"],
    sourceHref: "https://www.keymedsolution.com/",
    sourceLabel: "VISIT OFFICIAL WEBSITE",
    caseHref: "/work/key-medsolutions-search-authority",
    accent: "#00a86b",
    soft: "#dcf5e8",
  },
  {
    client: "KH RCM",
    logo: "/clients/kh-rcm.webp",
    logoAlt: "KH RCM official logo",
    sector: "Medical and dental billing",
    eyebrow: "IDENTITY IN USE",
    title: "A billing brand organised around trust, accuracy and access",
    summary:
      "KH RCM presents medical and dental billing services to US practices. The identity application keeps the brand easy to recognise while giving revenue cycle, coding, credentialing and denial-management services a clear visual hierarchy.",
    scope: [
      "Logo and identity application",
      "Medical and dental service structure",
      "Trust-led website presentation",
      "Consistent digital brand touchpoints",
    ],
    proof: ["Official logo used", "Public website verified", "No invented performance data"],
    sourceHref: "https://www.khrcm.com/",
    sourceLabel: "VISIT OFFICIAL WEBSITE",
    accent: "#1679bd",
    soft: "#dceefa",
  },
];
