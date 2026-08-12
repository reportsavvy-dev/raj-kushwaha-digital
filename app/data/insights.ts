export type InsightSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type Insight = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  category: string;
  published: string;
  modified: string;
  readTime: string;
  directAnswer: string;
  takeaways: string[];
  sections: InsightSection[];
  relatedService: { href: string; label: string };
  sources: { label: string; href: string; note: string }[];
};

export const insights: Insight[] = [
  {
    slug: "seo-aeo-geo-aio-difference",
    title: "SEO, AEO, GEO and AIO: what actually changes?",
    metaTitle: "SEO vs AEO, GEO and AIO: A Practical Guide",
    description: "A practical explanation of SEO, AEO, GEO, AIO and SXO, what overlaps, what changes, and what businesses should implement first.",
    excerpt: "The acronyms overlap more than most sales decks admit. Here is the operating model behind search results, answer engines and AI-assisted discovery.",
    category: "SEARCH STRATEGY",
    published: "2026-08-12",
    modified: "2026-08-12",
    readTime: "8 MIN READ",
    directAnswer: "SEO builds crawlable, indexable and useful pages. AEO makes answers easy to extract and understand. GEO improves the clarity and evidence that generative systems can retrieve and cite. AIO connects those disciplines across AI-assisted search. SXO makes sure the visitor can complete the next step. They are not five separate marketing channels.",
    takeaways: [
      "Start with technical SEO and genuinely useful pages; the other layers cannot rescue content that is inaccessible or unhelpful.",
      "Use headings, direct answers, definitions and evidence because they help people and machines interpret the page.",
      "Treat structured data as clarification, not a ranking switch, and keep it consistent with visible content.",
      "Measure qualified actions and assisted discovery, not only a single keyword position.",
    ],
    sections: [
      {
        heading: "The simplest useful distinction",
        paragraphs: [
          "Traditional SEO asks whether a search engine can discover, understand and rank a page for a relevant need. AEO focuses on whether a clear passage can answer a question directly. GEO focuses on whether generative systems can retrieve, trust and attribute the information. AIO is a broader operating label for making content useful across AI-assisted discovery. SXO completes the loop by improving what happens after the click.",
          "The same page can serve all five jobs. Splitting them into separate content factories usually creates duplicate pages, contradictory definitions and weak internal competition.",
        ],
      },
      {
        heading: "What AI search does not change",
        paragraphs: [
          "Google states that its established Search requirements and best practices still apply to AI features. A page must be indexed and eligible to appear with a snippet. Google also says there is no special AI text file or schema markup required to appear in those features.",
          "That makes the fundamentals more important, not less: accessible rendering, clear internal links, accurate titles, helpful main content, visible evidence and a fast experience on the device the buyer actually uses.",
        ],
      },
      {
        heading: "What should change in the content",
        paragraphs: [
          "Write the answer before the background. Define the scope, name the trade-offs and show how a decision is made. A useful section should still make sense when it is read on its own because answer engines often retrieve passages rather than presenting a whole page.",
          "Add original evidence where you have it: a dated screenshot, a documented process, an attributed client comment or a before-and-after measurement with its source. When evidence is unavailable, label the example as a plan or hypothesis instead of turning it into a case study.",
        ],
        bullets: [
          "Use one descriptive H1 and headings that match the questions being answered.",
          "State who wrote or reviewed the page and link to a real author profile.",
          "Cite first-party guidance for changing technical claims.",
          "Keep key facts in HTML text, even when a visual also communicates them.",
        ],
      },
      {
        heading: "How to measure the combined system",
        paragraphs: [
          "Track whether the right audience discovers the site and takes a meaningful next step. Search Console and Bing data can show query and landing-page demand. Analytics should show contact starts, completed enquiries and assisted conversions. Bing's AI Performance reporting can also expose pages cited in AI answers where the report is available.",
          "No platform can guarantee a citation or ranking. A sound program improves eligibility, relevance and usefulness, then uses observed data to decide what to strengthen next.",
        ],
      },
    ],
    relatedService: { href: "/services/seo-aeo-geo-sxo", label: "Explore SEO, AEO, GEO, AIO and SXO" },
    sources: [
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features", note: "Eligibility, indexing and content guidance for AI Overviews and AI Mode." },
      { label: "Google Search Central: structured data policies", href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies", note: "Accuracy, visibility and quality requirements for structured data." },
      { label: "Bing Webmaster Guidelines", href: "https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a", note: "Content, crawlability and AI-search guidance from Microsoft Bing." },
    ],
  },
  {
    slug: "how-to-appear-in-ai-search-citations",
    title: "How to make a website eligible for AI search citations",
    metaTitle: "How to Earn AI Search Citations: Technical Checklist",
    description: "A technical and editorial checklist for improving eligibility in ChatGPT search, Google AI features and Bing Copilot without fake GEO tactics.",
    excerpt: "Crawler access is only the entry ticket. AI-search visibility also depends on indexing, precise passages, attributable expertise and evidence worth citing.",
    category: "AI SEARCH",
    published: "2026-08-12",
    modified: "2026-08-12",
    readTime: "9 MIN READ",
    directAnswer: "To improve AI citation eligibility, allow the relevant search crawler, keep important pages indexable, publish clear factual passages with sources, identify the author and organisation, connect related pages with internal links, and make structured data match the visible page. These steps improve eligibility; they do not guarantee that an AI system will cite the page.",
    takeaways: [
      "Allow OAI-SearchBot for ChatGPT search; GPTBot controls potential model-training use and is a separate decision.",
      "Google AI features use normal Search eligibility, so an unindexed or snippet-ineligible page cannot shortcut the process.",
      "A real author profile and consistent organisation identity make attribution clearer across the site.",
      "Publish fewer pages with firsthand detail and primary citations instead of many near-duplicate AI summaries.",
    ],
    sections: [
      {
        heading: "1. Separate crawler access from citation quality",
        paragraphs: [
          "OpenAI documents OAI-SearchBot as the crawler used for ChatGPT search. GPTBot is used for potential model training and can be controlled independently. Allowing a crawler does not create a citation; it only removes one possible access barrier.",
          "The same distinction matters across platforms. Robots rules, firewalls and CDN bot controls must agree. A robots file that allows a bot is ineffective if the server blocks the published IP ranges or serves the bot an error page.",
        ],
      },
      {
        heading: "2. Build pages that can be retrieved as evidence",
        paragraphs: [
          "A strong page has a narrow purpose, a direct answer near the top and supporting detail below it. Dates should appear on facts that can change. Claims should link to primary evidence. Case-study numbers should explain the period and source rather than floating as decoration.",
          "Generic statements such as 'we drive transformative growth' are hard to verify and easy to replace. A documented method, a dated result and a clear limitation give a retrieval system something specific to represent.",
        ],
        bullets: [
          "Answer one commercial question per page.",
          "Use short definitional passages where the reader needs a definition.",
          "Explain the decision criteria, not just the conclusion.",
          "Link to the source page rather than citing an unnamed study.",
        ],
      },
      {
        heading: "3. Create a consistent entity graph",
        paragraphs: [
          "Organisation, author, service, article and breadcrumb data should use stable identifiers and canonical URLs. The author's visible byline should link to a profile that describes the same person represented in structured data. Service claims should match the service page, and every marked-up fact should be visible to visitors.",
          "Schema can reduce ambiguity, but Google explicitly warns that valid markup does not guarantee a rich result. It should describe the page faithfully rather than becoming a hidden layer of promotional claims.",
        ],
      },
      {
        heading: "4. Distribute and monitor without guessing",
        paragraphs: [
          "Submit the XML sitemap in Google Search Console and Bing Webmaster Tools, and keep a feed for newly published articles. Use URL inspection after material updates, then allow time for recrawling. Watch which pages earn impressions, links, citations and qualified visits.",
          "Bing's AI Performance report can show citation activity and grounding queries. Treat that data as observation rather than proof that one change caused an appearance. For ChatGPT search, OpenAI notes that referral URLs include tracking parameters, so analytics can be used to monitor resulting visits.",
        ],
      },
    ],
    relatedService: { href: "/services/seo-aeo-geo-sxo", label: "Build an AI-search-ready search system" },
    sources: [
      { label: "OpenAI: overview of OpenAI crawlers", href: "https://developers.openai.com/api/docs/bots", note: "Official distinction between OAI-SearchBot, GPTBot and ChatGPT-User." },
      { label: "Google Search Central: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features", note: "Official Search eligibility and technical guidance for Google's AI features." },
      { label: "Google Search Central: Article structured data", href: "https://developers.google.com/search/docs/appearance/structured-data/article", note: "Recommended author, date, headline and image properties for articles." },
      { label: "Bing Webmaster Tools: AI Performance", href: "https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c", note: "Microsoft's documentation for AI citations and grounding query reporting." },
    ],
  },
];

export function insightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}
