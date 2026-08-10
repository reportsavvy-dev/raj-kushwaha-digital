export type PortfolioCaseStudy = {
  slug: string;
  client: string;
  logo: string;
  logoAlt: string;
  website: string;
  industry: string;
  headline: string;
  summary: string;
  metaDescription: string;
  heroImage: string;
  heroAlt: string;
  accent: string;
  accentSoft: string;
  services: string[];
  metrics: { value: string; label: string; detail: string }[];
  challenge: string[];
  work: string[];
  outcomes: string[];
  evidence: { src: string; alt: string; caption: string }[];
  testimonial: { quote: string; name: string; role: string };
  evidenceNote: string;
};

export const caseStudies: PortfolioCaseStudy[] = [
  {
    slug: "silverspace-organic-search-linkedin-growth",
    client: "Silverspace Inc",
    logo: "/clients/silverspace.svg",
    logoAlt: "Silverspace Inc logo",
    website: "https://silverspaceinc.com/",
    industry: "IT staffing and business consulting",
    headline: "Organic search and LinkedIn growth built around one B2B story",
    summary: "Silverspace needed stronger inbound demand without paid media. Search architecture, expert content, LinkedIn publishing and a sharper identity were treated as one connected growth program.",
    metaDescription: "See how Silverspace combined SEO, expert content and LinkedIn publishing to grow organic clicks, backlinks and qualified B2B demand.",
    heroImage: "/case-studies/silverspace-card-illustration.webp",
    heroAlt: "Connected search, content and professional audience illustration for Silverspace Inc",
    accent: "#635bff",
    accentSoft: "#e6e1ff",
    services: ["seo-aeo-geo-sxo", "social-media-management-marketing", "content-marketing", "branding", "logo-graphic-design", "lead-generation"],
    metrics: [
      { value: "15,750", label: "New LinkedIn followers", detail: "Portfolio reporting window: prior 365 days" },
      { value: "+104%", label: "Organic clicks", detail: "Google Search Console: 1.56K to 3.19K" },
      { value: "+55.66%", label: "Backlinks", detail: "Portfolio snapshot: 32.6K to 49.6K" },
    ],
    challenge: [
      "The company had a credible offer, but search visibility and social momentum were not producing enough qualified inbound interest.",
      "The website, LinkedIn content and visual identity felt like separate activities rather than one recognizable market position.",
      "Growth had to come from organic work. Google Ads and paid social were not part of the engagement described in the portfolio.",
    ],
    work: [
      "Restructured search priorities around staffing, consulting and software intent, then supported those pages with useful editorial content.",
      "Built a consistent LinkedIn publishing rhythm around hiring insight, technology and business expertise.",
      "Refreshed the identity while retaining the cube symbol that already carried recognition.",
      "Used Search Console, search visibility tools and platform analytics to review the work as one system.",
    ],
    outcomes: [
      "The portfolio reports a 65% increase in qualified inbound leads and an 80% increase in website visitors over 12 months.",
      "A LinkedIn analytics capture shows 30,369 total followers and 15,750 new followers in the prior 365 days.",
      "The before and after Search Console capture shows clicks moving from 1.56K to 3.19K and impressions from 30.9K to 38.4K.",
      "The portfolio also reports a 90% improvement in average post engagement.",
    ],
    evidence: [
      { src: "/case-studies/silverspace-search-evidence.webp", alt: "Silverspace Search Console and SEO before and after evidence from the 2025 portfolio", caption: "Search Console and SEO tool snapshots supplied in the 2025 portfolio." },
      { src: "/case-studies/silverspace-social-evidence.webp", alt: "Silverspace LinkedIn follower evidence from the 2025 portfolio", caption: "LinkedIn follower capture supplied in the 2025 portfolio." },
    ],
    testimonial: {
      quote: "Raj transformed our online presence with a powerful organic strategy. No ads, only smart SEO and LinkedIn growth. Results were consistent, measurable, and business driven.",
      name: "Akash Dabhi",
      role: "Silverspace Inc",
    },
    evidenceNote: "Figures and testimonial are reproduced from Raj Kushwaha's 2025 portfolio. Platform counts and keyword positions are point in time captures and can change.",
  },
  {
    slug: "key-medsolutions-search-authority",
    client: "Key MedSolutions",
    logo: "/clients/key-medsolutions.webp",
    logoAlt: "Key MedSolutions logo",
    website: "https://www.keymedsolution.com/",
    industry: "Medical billing and revenue cycle management",
    headline: "Search authority for a specialist medical billing company",
    summary: "Key MedSolutions needed to be discoverable for specific medical billing problems, not only broad category terms. Technical improvements, service page content, local search work and evidence rich answers created a more useful search footprint.",
    metaDescription: "See the SEO and content work that helped Key MedSolutions expand organic clicks, search impressions and specialist medical billing visibility.",
    heroImage: "/case-studies/keymed-card-illustration.webp",
    heroAlt: "Healthcare billing search authority and analytics illustration for Key MedSolutions",
    accent: "#00a86b",
    accentSoft: "#d8f7e8",
    services: ["seo-aeo-geo-sxo", "content-marketing", "social-media-management-marketing", "lead-generation"],
    metrics: [
      { value: "1.02K", label: "Organic clicks", detail: "After snapshot, up from 188" },
      { value: "75.3K", label: "Search impressions", detail: "After snapshot, up from 1.29K" },
      { value: "47", label: "Organic keywords", detail: "Portfolio SEO snapshot, up from 9" },
    ],
    challenge: [
      "The site had limited visibility for specialist medical billing services in a competitive United States market.",
      "Low organic traffic and a thin local search presence made it difficult for healthcare practices to find the company at the moment of need.",
      "The work required medical billing language that was specific enough for buyers while still being clear and readable.",
    ],
    work: [
      "Reworked service pages around intent such as internal medicine billing, accounts receivable recovery and revenue cycle management.",
      "Published educational pages and articles that explained practical billing problems in plain language.",
      "Improved technical search foundations and page experience, then strengthened local business information for Greensboro searches.",
      "Tracked changes through Search Console, search results, local results and third party visibility tools.",
    ],
    outcomes: [
      "Portfolio screenshots show clicks increasing from 188 to 1.02K and impressions increasing from 1.29K to 75.3K across the displayed reporting windows.",
      "The supplied SEO snapshot shows organic traffic moving from 132 to 2.1K and organic keywords moving from 9 to 47.",
      "Captured search positions include first place for two profit enhancement queries and second place for an internal medicine billing query.",
      "The portfolio also shows visibility in Google AI Overview and local map results. These are historical captures, not current placement guarantees.",
    ],
    evidence: [
      { src: "/case-studies/keymed-search-evidence.webp", alt: "Key MedSolutions Search Console and SEO before and after evidence from the 2025 portfolio", caption: "Search Console and SEO tool snapshots supplied in the 2025 portfolio." },
      { src: "/case-studies/keymed-ranking-evidence.webp", alt: "Key MedSolutions captured keyword ranking evidence from the 2025 portfolio", caption: "Keyword positions captured in the 2025 portfolio. Rankings can change." },
    ],
    testimonial: {
      quote: "Our rankings improved, leads increased and we built strong authority in medical billing. Raj delivered exactly what he promised, quality results through organic marketing.",
      name: "Shubham Pandya",
      role: "Key MedSolutions",
    },
    evidenceNote: "Figures, screenshots and testimonial are reproduced from Raj Kushwaha's 2025 portfolio. Search positions are historical evidence and are not presented as current rankings.",
  },
  {
    slug: "vizva-linkedin-organic-growth",
    client: "Vizva Consultancy Services",
    logo: "/clients/vizva.webp",
    logoAlt: "Vizva Consultancy Services logo",
    website: "https://vizvaconsultancyservices.com/",
    industry: "Staffing, consulting and software services",
    headline: "A 90 day LinkedIn growth program supported by search demand",
    summary: "Vizva served several audiences across staffing, consulting and technology. The work gave those services a clearer editorial structure, built a consistent LinkedIn presence and connected social attention to search ready service pages.",
    metaDescription: "Explore Vizva's 90 day LinkedIn and SEO program, with portfolio evidence for follower growth, organic clicks and international demand.",
    heroImage: "/case-studies/vizva-card-illustration.webp",
    heroAlt: "Professional audience growth and search demand illustration for Vizva Consultancy Services",
    accent: "#19a8dd",
    accentSoft: "#d8f3ff",
    services: ["social-media-management-marketing", "seo-aeo-geo-sxo", "content-marketing", "lead-generation", "digital-marketing"],
    metrics: [
      { value: "7,497", label: "New LinkedIn followers", detail: "Portfolio reporting window: 90 days" },
      { value: "+79%", label: "Organic clicks", detail: "Google Search Console: 1.21K to 2.17K" },
      { value: "+127%", label: "Search impressions", detail: "Google Search Console: 9.17K to 20.8K" },
    ],
    challenge: [
      "A broad service mix made the brand difficult to explain consistently across LinkedIn and search.",
      "The company wanted inbound interest from employers and candidates across the United States, United Kingdom and India without paid promotion.",
      "Low publishing consistency meant useful expertise was not compounding into recognition or demand.",
    ],
    work: [
      "Created a LinkedIn content system around staffing insight, hiring stories, business services and technology expertise.",
      "Mapped search pages to specific staffing and consulting queries instead of relying on one broad services page.",
      "Connected case evidence, testimonials and service content to clearer enquiry journeys for candidates and business buyers.",
      "Reviewed follower growth, Search Console performance, keyword visibility and lead quality as connected signals.",
    ],
    outcomes: [
      "The portfolio reports 7,497 new LinkedIn followers in 90 days and 16,657 total followers by the following October reporting point.",
      "Search Console captures show clicks moving from 1.21K to 2.17K and impressions moving from 9.17K to 20.8K.",
      "Captured search positions include first place for non IT staffing services and skills development training workshops, plus second place for fintech consultancy services.",
      "The portfolio reports consistent client and candidate enquiries from the United States, United Kingdom and India.",
    ],
    evidence: [
      { src: "/case-studies/vizva-search-evidence.webp", alt: "Vizva Consultancy Services Search Console and SEO before and after evidence", caption: "Search Console and SEO tool snapshots supplied in the 2025 portfolio." },
      { src: "/case-studies/vizva-social-evidence.webp", alt: "Vizva Consultancy Services LinkedIn follower evidence", caption: "LinkedIn follower capture supplied in the 2025 portfolio." },
    ],
    testimonial: {
      quote: "Outstanding digital growth strategy. In just 90 days, we saw massive LinkedIn growth, global leads and stronger brand authority, all organically. Highly recommended.",
      name: "Rishi Pathak",
      role: "Vizva Consultancy Services",
    },
    evidenceNote: "Figures, screenshots and testimonial are reproduced from Raj Kushwaha's 2025 portfolio. Platform counts and keyword positions are point in time captures and can change.",
  },
];

export const caseStudyBySlug = (slug: string) => caseStudies.find((study) => study.slug === slug);
