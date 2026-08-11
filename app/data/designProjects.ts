export type DesignProject = {
  client: string;
  logo: string;
  logoAlt: string;
  slideImage: string;
  slideAlt: string;
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
    slideImage: "/case-studies/generated/axiom-arise-brand-slide-v3.webp",
    slideAlt: "Axiom Arise identity construction board with proportion grid, colour variants and responsive logo studies",
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
    slideImage: "/case-studies/generated/key-medsolutions-brand-slide-v1.webp",
    slideAlt: "Key MedSolutions healthcare identity board with construction grid, colours, icons, stationery and social applications",
    sector: "Medical billing and revenue cycle management",
    eyebrow: "HIGH-RESOLUTION BRAND GUIDE",
    title: "A blurred source logo rebuilt as a practical healthcare brand system",
    summary:
      "The supplied 512px artwork was too soft for dependable print use. Its medical cross, stethoscope idea, wordmark and tagline were preserved while the identity was rebuilt into crisp paths and documented for consistent healthcare communication.",
    scope: [
      "AI-compatible, EPS, SVG and vector PDF masters",
      "Full-colour, black, white, green and blue variants",
      "Clear-space, typography, colour and usage rules",
      "Social assets, stationery and Golden Ratio reference",
    ],
    proof: ["9-page brand guide", "400 DPI A4 masters", "Logo structure preserved"],
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
    slideImage: "/case-studies/generated/kh-rcm-brand-slide-v1.webp",
    slideAlt: "KH RCM healthcare revenue identity board with logo construction, colour system and digital applications",
    sector: "Medical and dental billing",
    eyebrow: "VERIFIED BRAND APPLICATION",
    title: "A healthcare identity organised around trust, accuracy and access",
    summary:
      "KH RCM presents medical and dental billing services to US practices. The identity application keeps the brand easy to recognise while giving revenue cycle, coding, credentialing and denial-management services a clear visual hierarchy.",
    scope: [
      "Approved logo and identity application",
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
