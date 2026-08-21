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
  image?: { src: string; alt: string; width: number; height: number };
  directAnswer: string;
  takeaways: string[];
  sections: InsightSection[];
  relatedService: { href: string; label: string };
  sources: { label: string; href: string; note: string }[];
};

export const insights: Insight[] = [
  {
    slug: "seo-aeo-geo-aio-one-search-visibility-system",
    title: "SEO, AEO, GEO and AIO in 2026: build one search visibility system",
    metaTitle: "SEO, AEO, GEO & AIO in 2026: One Search System",
    description: "A practical 2026 framework for SEO, AEO, GEO and AIO covering crawlability, answer clarity, evidence, structured data, UX and measurement.",
    excerpt: "The labels are useful, but four disconnected strategies create duplicate work. Build one discoverability system that search engines, AI products and buyers can understand.",
    category: "SEARCH OPERATIONS",
    published: "2026-08-17",
    modified: "2026-08-17",
    readTime: "11 MIN READ",
    image: {
      src: "/insights/seo-aeo-geo-aio-one-system.webp",
      alt: "SEO, AEO, GEO and AIO shown as one connected search visibility system",
      width: 1440,
      height: 810,
    },
    directAnswer: "SEO, AEO, GEO and AIO should not run as four separate programs. They are overlapping views of the same job: make useful information accessible, easy to interpret, well supported, pleasant to use and measurable. Build one search visibility system, then observe how it performs across conventional results, Google AI features, Bing and Copilot, and ChatGPT search.",
    takeaways: [
      "Start with indexability and useful main content. No answer format or AI file can compensate for an inaccessible page.",
      "Give important claims a clear source, author, date and context so people and retrieval systems can evaluate them.",
      "Use structured data to clarify visible information, not to manufacture reviews, expertise or results.",
      "Measure qualified enquiries and assisted discovery alongside clicks, citations and query visibility.",
    ],
    sections: [
      {
        heading: "Four labels, one operating system",
        paragraphs: [
          "SEO is the foundation: discovery, crawling, indexing, relevance and page experience. AEO describes content that answers a question clearly. GEO describes content that generative systems can retrieve, interpret and cite. AIO is a broader label for coordinating visibility across AI-assisted discovery. These are industry terms, not four independent Google ranking systems.",
          "Google's current guidance is unusually direct. It says that SEO remains relevant for AI features and that the same core requirements still apply. For Google, a page must be indexed and eligible to appear with a snippet before it can be shown as a supporting link in an AI experience. That is why separate microsites or near-duplicate pages for each acronym usually add complexity rather than visibility.",
        ],
      },
      {
        heading: "The six layers that make the system work",
        paragraphs: [
          "A durable program connects six layers. Access covers status codes, robots rules, rendering, canonicals and sitemaps. Meaning covers titles, headings, entities, internal links and structured data. Evidence covers firsthand experience, source links, authorship and dates. Answerability covers direct definitions, useful comparisons and passages that retain meaning outside the full page. Experience covers mobile usability, accessibility and speed. Measurement connects all of that work to qualified business outcomes.",
          "The order matters. A concise answer on a blocked URL is invisible. Valid schema cannot repair unsupported claims. A fast page with generic content is still replaceable. Each layer supports the next one.",
        ],
        bullets: [
          "Access: return a clean 200 response, use one canonical URL and keep important content in crawlable HTML.",
          "Meaning: give every page one clear purpose, one descriptive H1 and internal links that explain its place in the site.",
          "Evidence: cite primary sources, identify the author and label client proof separately from examples or plans.",
          "Answerability: state the answer early, then explain criteria, tradeoffs, examples and limitations.",
          "Experience: keep controls usable on mobile and target good Core Web Vitals at the 75th percentile.",
          "Measurement: track enquiries, assisted conversions, non-brand clicks and cited appearances without claiming causation too quickly.",
        ],
      },
      {
        heading: "What Google, Bing and ChatGPT actually need",
        paragraphs: [
          "Google does not require special AI schema or an llms.txt file for its search features. Normal technical SEO, high quality content and snippet eligibility remain the relevant controls. Standard structured data can still reduce ambiguity when it matches the visible page, but it is not an AI citation switch.",
          "Bing Webmaster Tools now reports AI citation activity, cited pages and grounding queries. Microsoft describes these as sampled observations, not rankings or proof that one optimization caused a citation. Use them to find topics that deserve stronger evidence, clearer sections or fresher information.",
          "OpenAI separates OAI-SearchBot, which supports ChatGPT search, from GPTBot, which is used for potential model training. A publisher can make those choices independently. Allowing OAI-SearchBot removes an access barrier; it does not guarantee that ChatGPT will cite the site.",
        ],
      },
      {
        heading: "A practical 90 day implementation plan",
        paragraphs: [
          "During the first month, fix access and measurement. Verify canonicals, robots rules, XML sitemaps, server responses, analytics events and conversion paths. Map every indexable page to a real buyer question and merge pages that compete for the same purpose.",
          "During the second month, strengthen the pages closest to revenue. Add a direct answer, decision criteria, source notes, author context, relevant proof and links to the next useful page. Update structured data only after the visible content is accurate.",
          "During the third month, publish one genuinely useful article for an unanswered buyer question. Distribute it through the channels where the audience already pays attention. Review Search Console, Bing AI Performance and analytics together, then improve the passages and paths that attract the right visitors.",
        ],
      },
      {
        heading: "Technical thresholds worth protecting",
        paragraphs: [
          "Core Web Vitals are experience guardrails, not a substitute for relevance. Google's current thresholds for a good experience are Largest Contentful Paint at 2.5 seconds or less, Interaction to Next Paint at 200 milliseconds or less and Cumulative Layout Shift at 0.1 or less. Field performance should be assessed at the 75th percentile on both mobile and desktop.",
          "Keep article images compressed and dimensioned, reserve space for media, limit client-side animation and respect reduced-motion preferences. A readable article that responds quickly is more useful than a decorative interface that delays the answer.",
        ],
      },
      {
        heading: "What not to turn into a growth tactic",
        paragraphs: [
          "Do not create thin pages for every wording of the same question. Do not publish invented testimonials, citation badges or performance graphs. Do not add review markup for feedback that is not visible and verifiable. Do not treat keyword repetition, an AI detector score or an llms.txt file as evidence of quality.",
          "The useful standard is simpler: can a buyer understand the answer, inspect the evidence, identify who is responsible and complete the next step without friction? If the answer is yes, the page is doing the work that SEO, AEO, GEO, AIO and SXO are all trying to describe.",
        ],
      },
    ],
    relatedService: { href: "/services/seo-aeo-geo-sxo", label: "Build one connected search visibility system" },
    sources: [
      { label: "Google Search Central: succeeding in AI search", href: "https://developers.google.com/search/docs/fundamentals/ai-optimization-guide", note: "Google's July 2026 guidance on SEO, AI features, content, controls and measurement." },
      { label: "Google Search Central: structured data policies", href: "https://developers.google.com/search/docs/appearance/structured-data/sd-policies", note: "Requirements for accurate, visible and representative structured data." },
      { label: "Bing Webmaster Tools: AI Performance", href: "https://www.bing.com/webmasters/help/ai-performance-9f8e7d6c", note: "Microsoft's explanation of citations, cited pages, grounding queries and reporting limits." },
      { label: "OpenAI: overview of OpenAI crawlers", href: "https://developers.openai.com/api/docs/bots", note: "Official distinction between OAI-SearchBot, GPTBot and ChatGPT-User." },
      { label: "web.dev: Web Vitals", href: "https://web.dev/articles/vitals", note: "Current LCP, INP and CLS thresholds and 75th-percentile assessment guidance." },
    ],
  },
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
    image: {
      src: "/case-studies/generated/search-intelligence.webp",
      alt: "Search intelligence dashboard connecting technical SEO, answer clarity and content evidence",
      width: 1448,
      height: 1086,
    },
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
    image: {
      src: "/case-studies/generated/product-ai.webp",
      alt: "AI search eligibility system connecting crawl access, structured content and measurement",
      width: 1448,
      height: 1086,
    },
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
