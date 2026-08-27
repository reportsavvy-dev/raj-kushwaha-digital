type PeriodicCard = {
  symbol: string;
  label: string;
  category: "search" | "paid" | "social" | "content" | "brand" | "data" | "development" | "core";
  href: string;
  column: number;
  row: number;
};

const cards: PeriodicCard[] = [
  { symbol: "SEO", label: "Search Engine", category: "search", href: "/services/seo-aeo-geo-sxo", column: 0, row: 0 },
  { symbol: "AEO", label: "Answer Engine", category: "search", href: "/services/seo-aeo-geo-sxo", column: 1, row: 0 },
  { symbol: "GEO", label: "Generative Search", category: "search", href: "/services/seo-aeo-geo-sxo", column: 2, row: 0 },
  { symbol: "AIO", label: "AI Optimization", category: "search", href: "/services/seo-aeo-geo-sxo", column: 3, row: 0 },
  { symbol: "SXO", label: "Search Experience", category: "search", href: "/services/seo-aeo-geo-sxo", column: 4, row: 0 },
  { symbol: "HUB", label: "HubSpot", category: "brand", href: "/services/lead-generation", column: 5, row: 0 },
  { symbol: "CAN", label: "Canva", category: "brand", href: "/services/logo-graphic-design", column: 6, row: 0 },

  { symbol: "PPC", label: "Paid Search", category: "paid", href: "/services/ppc-ads", column: 0, row: 1 },
  { symbol: "META", label: "Meta Ads", category: "paid", href: "/services/ppc-ads", column: 1, row: 1 },
  { symbol: "SMM", label: "Social Media", category: "social", href: "/services/social-media-management-marketing", column: 2, row: 1 },
  { symbol: "LI", label: "LinkedIn", category: "social", href: "/services/social-media-management-marketing", column: 3, row: 1 },
  { symbol: "IG", label: "Instagram", category: "social", href: "/services/social-media-management-marketing", column: 4, row: 1 },
  { symbol: "YT", label: "YouTube", category: "social", href: "/services/social-media-management-marketing", column: 5, row: 1 },
  { symbol: "FGA", label: "Figma", category: "brand", href: "/services/logo-graphic-design", column: 6, row: 1 },

  { symbol: "EM", label: "Email Marketing", category: "content", href: "/services/email-marketing", column: 0, row: 2 },
  { symbol: "CM", label: "Content Marketing", category: "content", href: "/services/content-marketing", column: 1, row: 2 },
  { symbol: "PR", label: "Public Relations", category: "content", href: "/services/public-relations", column: 2, row: 2 },
  { symbol: "RKD", label: "Growth Core", category: "core", href: "/expertise", column: 3, row: 2 },
  { symbol: "INF", label: "Influencer", category: "content", href: "/services/influencer-marketing", column: 4, row: 2 },
  { symbol: "BR", label: "Branding", category: "brand", href: "/services/branding", column: 5, row: 2 },
  { symbol: "GD", label: "Graphic Design", category: "brand", href: "/services/logo-graphic-design", column: 6, row: 2 },

  { symbol: "AUTO", label: "Automation", category: "data", href: "/services/ai-agent-automation", column: 0, row: 3 },
  { symbol: "AGT", label: "AI Agents", category: "data", href: "/services/ai-agent-automation", column: 1, row: 3 },
  { symbol: "CRM", label: "Lead Systems", category: "data", href: "/services/lead-generation", column: 2, row: 3 },
  { symbol: "GA4", label: "Analytics", category: "data", href: "/services/performance-marketing", column: 3, row: 3 },
  { symbol: "GSC", label: "Search Console", category: "data", href: "/services/seo-aeo-geo-sxo", column: 4, row: 3 },
  { symbol: "WEB", label: "Web Development", category: "development", href: "/services/web-development", column: 5, row: 3 },
  { symbol: "APP", label: "App Development", category: "development", href: "/services/app-software-development", column: 6, row: 3 },

  { symbol: "WP", label: "WordPress", category: "development", href: "/services/web-development", column: 2, row: 4 },
  { symbol: "REA", label: "React", category: "development", href: "/services/app-software-development", column: 3, row: 4 },
  { symbol: "API", label: "Integrations", category: "development", href: "/services/app-software-development", column: 4, row: 4 },
];

const legend = [
  ["search", "Search"],
  ["paid", "Paid"],
  ["social", "Social"],
  ["content", "Content"],
  ["brand", "Brand"],
  ["data", "Automation & Data"],
  ["development", "Development"],
] as const;

export function HeroPeriodicSystem() {
  return <section className="hero-periodic-system" aria-labelledby="periodic-system-title">
    <header className="periodic-system__title" id="periodic-system-title">
      <span>DIGITAL MARKETING</span>
      <strong>PERIODIC SYSTEM</strong>
    </header>

    <p className="periodic-system__hint"><span aria-hidden="true" /> Select a card to open its service.</p>

    <div className="periodic-system__viewport">
      <div className="periodic-system__table" role="list" aria-label="Digital marketing capabilities">
        {cards.map((card, index) => <a
          className={`periodic-card periodic-card--${card.category}`}
          href={card.href}
          style={{
            gridColumn: card.column + 1,
            gridRow: card.row + 1,
            "--card-index": index,
          } as React.CSSProperties}
          aria-label={`${card.label}. View related expertise.`}
          role="listitem"
          key={`${card.symbol}-${card.label}`}
        >
          <span className="periodic-card__index">{String(index + 1).padStart(2, "0")}</span>
          <strong>{card.symbol}</strong>
          <small>{card.label}</small>
          <i aria-hidden="true" />
        </a>)}
      </div>
    </div>

    <div className="periodic-system__legend" aria-label="Capability colour key">
      {legend.map(([category, label]) => <span className={`legend-${category}`} key={category}><i />{label}</span>)}
    </div>
  </section>;
}
