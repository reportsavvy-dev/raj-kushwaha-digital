export type CaseStudy = {
  title: string;
  sector: string;
  challenge: string;
  solution: string;
  impact: string;
  metrics: string[];
  label?: string;
};

export type Service = {
  name: string;
  shortName: string;
  slug: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  directAnswer: string;
  intro: string;
  overviewHeading: string;
  processHeading: string;
  deliverables: string[];
  successSignals: string[];
  tools: string[];
  visual: string;
  accent: string;
  accentSoft: string;
  benefits: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  caseStudy: CaseStudy;
  testimonial: { quote: string; attribution: string; label: string };
  faqs: { question: string; answer: string }[];
  sources?: { label: string; href: string }[];
};

type ServiceInput = Omit<Service, "metaTitle" | "metaDescription" | "directAnswer" | "overviewHeading" | "processHeading" | "successSignals" | "sources" | "benefits" | "process" | "testimonial" | "faqs"> & {
  benefits?: Service["benefits"];
  process?: Service["process"];
  testimonialQuote?: string;
  faq?: [string, string][];
};

type ServiceEnhancement = Pick<Service, "metaTitle" | "metaDescription" | "directAnswer" | "overviewHeading" | "processHeading" | "successSignals" | "benefits" | "process"> & {
  extraFaqs: [string, string][];
  sources?: Service["sources"];
};

const enhancements: Record<string, ServiceEnhancement> = {
  "digital-marketing": {
    metaTitle: "Integrated Digital Marketing Services | RKD",
    metaDescription: "Integrated digital strategy, campaigns, content and analytics tied to qualified demand, conversion and customer value.",
    directAnswer: "Digital marketing should turn business priorities into a coordinated plan for search, media, content, social and conversion. Raj Kushwaha Digital assigns every channel a role, a measurable outcome and a clear decision cadence.",
    overviewHeading: "What does an integrated digital marketing system include?",
    processHeading: "How we turn scattered activity into a working plan",
    successSignals: ["Qualified demand by channel", "Conversion rate and acquisition cost", "Pipeline or revenue contribution", "Documented tests and next decisions"],
    benefits: [
      { title: "One commercial direction", text: "Campaigns, content and channel budgets work against the same customer journey and business target." },
      { title: "Cleaner measurement", text: "A practical event and reporting plan separates useful signals from platform vanity metrics." },
      { title: "Faster decisions", text: "A shared review rhythm shows what to stop, improve, protect or scale next." },
    ],
    process: [
      { step: "01", title: "Diagnose the constraint", text: "We review the offer, audience, funnel, current channels, tracking and sales reality to locate the biggest avoidable loss." },
      { step: "02", title: "Build the channel plan", text: "Each channel receives a purpose, audience, message, budget range, landing path and success measure." },
      { step: "03", title: "Run a learning cycle", text: "Campaigns launch in controlled phases, with reporting built around decisions rather than a monthly data dump." },
    ],
    extraFaqs: [["Do you start with every marketing channel at once?", "No. We start with the smallest channel mix capable of testing the commercial hypothesis, then add complexity only when the data supports it."], ["Can you fix an existing marketing setup instead of rebuilding it?", "Yes. The first audit identifies what should be kept, repaired, consolidated or removed, so useful work is not discarded without reason."]],
  },
  "seo-aeo-geo-sxo": {
    metaTitle: "SEO, AEO, GEO, AIO & SXO Services | RKD",
    metaDescription: "Technical SEO, answer-ready content, AI search visibility and search experience optimization grounded in Google guidance.",
    directAnswer: "SEO improves discovery in organic search; AEO makes useful answers easy to extract; GEO and AIO address visibility in generative and AI assisted search; SXO improves the experience after the click. For Google AI Overviews and AI Mode, these disciplines still depend on indexable, useful and technically sound SEO, not special markup or shortcuts.",
    overviewHeading: "What modern search optimization actually covers",
    processHeading: "How we improve search visibility without chasing hacks",
    successSignals: ["Valid pages indexed and internally linked", "Qualified non-brand clicks and enquiries", "Topic and query coverage by intent", "LCP ≤2.5s, INP ≤200ms and CLS ≤0.1 at p75"],
    benefits: [
      { title: "Searchable foundations", text: "Crawl paths, canonicals, sitemaps, metadata and page rendering are checked before content expansion." },
      { title: "Evidence-led answers", text: "Pages answer real decisions with clear definitions, original insight and verifiable detail instead of keyword padding." },
      { title: "A better next step", text: "Search experience optimization connects the query to a readable page, useful proof and an obvious action." },
    ],
    process: [
      { step: "01", title: "Crawl and benchmark", text: "We inspect indexability, internal links, templates, structured data, Core Web Vitals and Search Console performance." },
      { step: "02", title: "Map demand to pages", text: "Search intent, customer questions and business expertise are mapped to a focused page architecture without duplicate variants." },
      { step: "03", title: "Publish, validate, improve", text: "Content and technical changes are released, inspected, measured in field data and refined from real query and conversion evidence." },
    ],
    extraFaqs: [["Which Google algorithms do you optimize for?", "We do not optimize for one named update. Google uses systems including BERT, neural matching, RankBrain, passage ranking, link analysis and page level quality signals. The durable response is useful original content, clear site structure and compliant technical SEO."], ["Are Core Web Vitals a ranking guarantee?", "No. Core Web Vitals are page experience signals, not a guarantee of rankings. We target good field thresholds: LCP within 2.5 seconds, INP at 200 milliseconds or less and CLS at 0.1 or less at the 75th percentile for mobile and desktop."]],
    sources: [
      { label: "Google: AI features and your website", href: "https://developers.google.com/search/docs/appearance/ai-features" },
      { label: "Google: Search ranking systems", href: "https://developers.google.com/search/docs/appearance/ranking-systems-guide" },
      { label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" },
    ],
  },
  "social-media-management-marketing": {
    metaTitle: "Social Media Management & Marketing | RKD",
    metaDescription: "Platform-native social strategy, content production, community management and paid distribution with clear reporting.",
    directAnswer: "Social media management keeps your brand consistent, responsive and useful on the platforms your audience already uses. The work combines an editorial point of view, native creative formats, community operations and paid distribution where it adds reach or conversion.",
    overviewHeading: "What a complete social media operation needs",
    processHeading: "From audience behavior to a repeatable publishing system",
    successSignals: ["Qualified reach and watch time", "Saves, shares and useful conversations", "Response quality and response time", "Assisted traffic, leads or sales"],
    benefits: [
      { title: "A recognizable voice", text: "Clear language, visual rules and content pillars make the brand identifiable before the logo is noticed." },
      { title: "Creative built for the feed", text: "Hooks, pacing, aspect ratios and calls to action are planned for each platform rather than copied everywhere." },
      { title: "Community with ownership", text: "Response rules, escalation paths and listening turn comments and messages into managed customer touchpoints." },
    ],
    process: [
      { step: "01", title: "Read the audience", text: "We study customer questions, platform behavior, competitors, existing content and the conversations the brand can credibly own." },
      { step: "02", title: "Create the operating system", text: "Content pillars, formats, calendar, approval flow, community rules and paid support are documented." },
      { step: "03", title: "Publish and learn", text: "Weekly signals shape the next creative batch; strong ideas are adapted, distributed and tested without flattening the brand voice." },
    ],
    extraFaqs: [["How often should a brand post on social media?", "There is no universal frequency. We choose a sustainable cadence based on production capacity, platform expectations and whether each post has a clear role."], ["How do you report social media performance?", "Reports separate attention, engagement quality, community health and commercial actions. A viral post is not called a success unless it supports the agreed objective."]],
  },
  "ppc-ads": {
    metaTitle: "PPC Advertising Management | Raj Kushwaha Digital",
    metaDescription: "Google, Meta and LinkedIn ad campaigns built around search intent, conversion tracking and qualified acquisition.",
    directAnswer: "PPC advertising buys targeted visibility and charges when a defined interaction occurs, most commonly a click. Good PPC management connects keywords or audiences to relevant ads, a focused landing experience and verified conversion tracking.",
    overviewHeading: "What makes paid campaigns accountable",
    processHeading: "How campaigns move from spend to qualified action",
    successSignals: ["Qualified conversions by campaign", "Cost per qualified lead or sale", "Search-term and audience quality", "Landing-page conversion rate"],
    benefits: [
      { title: "Intent before volume", text: "Campaign structure distinguishes urgent demand from broad research and excludes traffic unlikely to convert." },
      { title: "Traceable outcomes", text: "Conversion events, consent and source data are checked before bidding decisions rely on them." },
      { title: "Controlled experimentation", text: "Ads, offers and landing pages are tested with enough separation to understand what changed the result." },
    ],
    process: [
      { step: "01", title: "Model the economics", text: "We agree conversion value, lead quality, viable acquisition cost, geography and the budget needed for a meaningful test." },
      { step: "02", title: "Build intent-led campaigns", text: "Keywords, audiences, exclusions, creative, landing pages and tracking are assembled around distinct jobs." },
      { step: "03", title: "Optimize downstream", text: "Search terms, lead feedback and conversion quality guide bids, budgets and creative. Click through rate alone is not enough." },
    ],
    extraFaqs: [["When should we stop a PPC test?", "A test should stop when tracking is unreliable, the offer is not converting, traffic quality is persistently poor or the spend has produced enough evidence to reject the hypothesis."], ["Will you need access to our analytics?", "Yes. Useful optimization usually requires appropriate access to the ad platform, analytics, tag management, landing pages and any CRM data used to confirm lead quality."]],
  },
  "branding": {
    metaTitle: "Brand Strategy & Identity Services | RKD",
    metaDescription: "Positioning, messaging, visual identity and practical brand guidelines for businesses that need clarity and consistency.",
    directAnswer: "Branding defines why a business should matter, what it should be known for and how that idea appears in words and design. A useful brand system helps marketing, sales and product teams make consistent choices without making everything look identical.",
    overviewHeading: "What turns a business identity into a usable brand",
    processHeading: "How strategy becomes a clear verbal and visual system",
    successSignals: ["Distinct positioning customers can repeat", "Consistent message hierarchy", "Usable identity across priority formats", "Faster, more coherent brand decisions"],
    benefits: [
      { title: "A sharper position", text: "The brand is anchored to a meaningful customer choice, not a list of generic values." },
      { title: "Language people can use", text: "A message hierarchy gives founders, sales teams and marketers the same clear story." },
      { title: "Rules with room to move", text: "The identity stays recognizable while adapting to campaigns, products and new channels." },
    ],
    process: [
      { step: "01", title: "Find the useful truth", text: "Research and stakeholder input uncover the audience tension, competitive frame and credible advantage." },
      { step: "02", title: "Choose the brand idea", text: "Positioning, promise, personality and message architecture are developed and pressure-tested together." },
      { step: "03", title: "Make it operational", text: "Visual and verbal rules are applied to real touchpoints, documented and handed over in formats the team can use." },
    ],
    extraFaqs: [["How long does a brand strategy project take?", "Timing depends on research depth, stakeholder availability and scope. A focused identity project can take weeks; a complex repositioning with multiple decision-makers takes longer."], ["What should we prepare before the project?", "Useful inputs include business goals, customer evidence, competitor context, existing research, brand assets and access to the people who make final decisions."]],
  },
  "logo-graphic-design": {
    metaTitle: "Logo & Graphic Design Services | Raj Kushwaha Digital",
    metaDescription: "Responsive logo systems, campaign design, social templates and production-ready brand assets built for real use.",
    directAnswer: "Logo design creates a distinctive identifying mark; graphic design turns the broader visual system into useful communication. We design both for real constraints, from a small app icon and monochrome print to social campaigns, presentations and signage.",
    overviewHeading: "What you receive beyond a single logo file",
    processHeading: "How a visual idea is tested before it becomes a system",
    successSignals: ["Recognition at small and large sizes", "Legibility in color and monochrome", "Consistent production across channels", "Organized source files and usage rules"],
    benefits: [
      { title: "Distinct for a reason", text: "The concept grows from brand strategy and category context, not a fashionable shape chosen in isolation." },
      { title: "Responsive by default", text: "Primary, compact and icon versions protect recognition across awkward spaces and tiny screens." },
      { title: "Ready for production", text: "Color specifications, file formats, spacing rules and templates reduce avoidable design errors." },
    ],
    process: [
      { step: "01", title: "Define the design brief", text: "We agree what the identity must communicate, where it will appear and which category conventions to use or avoid." },
      { step: "02", title: "Develop distinct routes", text: "A small number of conceptually different directions are tested for meaning, form, scale and ownability." },
      { step: "03", title: "Refine and prepare", text: "The chosen route becomes a responsive logo suite with practical files, templates and a concise usage guide." },
    ],
    extraFaqs: [["Do you use grids or the golden ratio for logo design?", "Proportion systems can improve consistency, but they do not make a logo distinctive by themselves. We use geometry when it supports the idea, legibility and reproduction, not as decoration for the presentation."], ["Can you redesign a logo without losing recognition?", "Yes. We identify which shapes, colors or cues already carry equity, then decide what to preserve, simplify or replace based on the reason for the redesign."]],
  },
  "performance-marketing": {
    metaTitle: "Performance Marketing Services | RKD",
    metaDescription: "Paid media, creative testing, conversion optimization and measurement connected to acquisition efficiency and growth.",
    directAnswer: "Performance marketing is a full-funnel discipline in which media, creative, landing pages and measurement are managed against defined commercial outcomes. It differs from simple ad buying because learning and conversion quality matter as much as platform delivery.",
    overviewHeading: "What a performance growth loop connects",
    processHeading: "How we test, learn and scale without losing control",
    successSignals: ["Blended customer acquisition cost", "Contribution margin or qualified pipeline", "Creative and audience learning rate", "Conversion and retention by cohort"],
    benefits: [
      { title: "One performance view", text: "Media efficiency is read alongside site conversion, lead quality and customer value." },
      { title: "Structured creative learning", text: "Each test changes a deliberate variable so the next brief improves rather than merely looks different." },
      { title: "Scale with guardrails", text: "Budgets expand when signal quality, economics and operational capacity can support the increase." },
    ],
    process: [
      { step: "01", title: "Set the growth model", text: "We define funnel stages, unit economics, attribution limits, usable data and the decisions the model must support." },
      { step: "02", title: "Create the test portfolio", text: "Audience, message, format, offer and landing-page hypotheses are prioritized by expected value and effort." },
      { step: "03", title: "Scale verified patterns", text: "Winning patterns receive more budget while fatigue, incrementality and downstream quality remain under review." },
    ],
    extraFaqs: [["Do you use last-click attribution?", "Last click is one useful view, not a complete truth. We combine platform data, analytics, CRM or commerce outcomes and controlled tests where the available data supports them."], ["How much data is needed before making a decision?", "It depends on conversion frequency, spend and the size of the expected effect. We document decision thresholds so the team does not overreact to normal variation."]],
  },
  "email-marketing": {
    metaTitle: "Email Marketing & Automation Services | RKD",
    metaDescription: "Lifecycle journeys, newsletters, segmentation and testing designed around relevance, consent and deliverability.",
    directAnswer: "Email marketing turns permission-based audience data into timely communication across acquisition, onboarding, conversion, retention and re-engagement. Strong programs combine useful messages, sensible segmentation, reliable sending infrastructure and a test plan.",
    overviewHeading: "What makes an email program useful rather than noisy",
    processHeading: "How lifecycle messages move from trigger to measurable action",
    successSignals: ["Delivery and inbox placement health", "Click and conversion by journey", "Revenue or pipeline per recipient", "Unsubscribe and complaint rates"],
    benefits: [
      { title: "Messages tied to moments", text: "Journeys respond to customer behavior and lifecycle stage instead of sending the same broadcast to everyone." },
      { title: "A maintainable system", text: "Modular templates, naming rules and documented triggers keep the program usable after launch." },
      { title: "Responsible list growth", text: "Consent, authentication, frequency and suppression rules protect trust and long-term deliverability." },
    ],
    process: [
      { step: "01", title: "Audit the lifecycle", text: "We map data sources, permissions, segments, current sends, deliverability risks and the customer moments email can improve." },
      { step: "02", title: "Build priority journeys", text: "Copy, design, triggers, delays, fallbacks and success events are created for the highest-value flows first." },
      { step: "03", title: "QA and optimize", text: "Links, rendering, tracking and logic are tested before launch; results then shape subject lines, content, timing and segmentation." },
    ],
    extraFaqs: [["Which email automations should we build first?", "Usually the highest-value starting points are welcome or onboarding, lead nurture, cart or enquiry recovery, post-purchase education and re-engagement. The right order depends on your customer journey."], ["Can you improve an existing email account?", "Yes. We can audit deliverability, data hygiene, templates, automations, reporting and campaign rhythm, then repair the parts with the clearest business impact."]],
  },
  "lead-generation": {
    metaTitle: "Lead Generation Services | Raj Kushwaha Digital",
    metaDescription: "Intent-led campaigns, landing pages, qualification and CRM routing designed to create better sales conversations.",
    directAnswer: "Lead generation creates a dependable path from audience interest to a qualified sales conversation. The system needs a relevant offer, targeted acquisition, a focused landing flow, clear qualification rules and a fast handoff to the right owner.",
    overviewHeading: "What separates a lead engine from a form campaign",
    processHeading: "How we build for lead quality before lead volume",
    successSignals: ["Cost per qualified opportunity", "Lead-to-meeting conversion", "Sales acceptance and response time", "Pipeline contribution by source"],
    benefits: [
      { title: "Fit defined upfront", text: "Marketing and sales agree the audience, intent and disqualification rules before campaigns begin." },
      { title: "Context travels with the lead", text: "Source, offer, form responses and campaign details reach the person responsible for follow-up." },
      { title: "Feedback closes the loop", text: "Sales outcomes return to marketing so targeting and messages improve from real conversations." },
    ],
    process: [
      { step: "01", title: "Define qualification", text: "We document customer fit, buying signals, exclusions, ownership and the service-level expectation for follow-up." },
      { step: "02", title: "Build the acquisition path", text: "Offer, campaign, landing page, form, tracking and CRM routing are designed as one journey." },
      { step: "03", title: "Improve from sales evidence", text: "Lead dispositions, meeting quality and pipeline outcomes are reviewed alongside media and page performance." },
    ],
    extraFaqs: [["How quickly should sales contact a new lead?", "Response expectations should match intent and team capacity. High-intent enquiries usually need rapid ownership; nurture-stage contacts need useful follow-up rather than an immediate sales push."], ["Can you work with long B2B sales cycles?", "Yes. We track intermediate progress such as qualified meetings, stage movement and pipeline value while allowing enough time for revenue outcomes to mature."]],
  },
  "public-relations": {
    metaTitle: "Public Relations & Media Outreach | RKD",
    metaDescription: "Newsworthy story development, press materials, targeted outreach and reputation support without coverage guarantees.",
    directAnswer: "Public relations earns attention by giving journalists and relevant audiences a credible reason to care now. We develop the story, supporting evidence, spokesperson material and targeted outreach while keeping editorial decisions with the publication.",
    overviewHeading: "What a credible PR campaign needs before outreach",
    processHeading: "How a business update becomes a defensible media story",
    successSignals: ["Relevant journalist responses", "Quality and accuracy of coverage", "Message pull-through", "Referral, search and reputation impact"],
    benefits: [
      { title: "A real news angle", text: "The story is tested for timeliness, relevance, evidence and audience value before a pitch is written." },
      { title: "Focused media relations", text: "Outreach is tailored to journalists, beats and publications rather than sent as a generic mass email." },
      { title: "Prepared spokespeople", text: "Key messages, proof points and difficult questions are handled before an interview request arrives." },
    ],
    process: [
      { step: "01", title: "Interrogate the story", text: "We identify what changed, who it affects, why it matters and which claims can be supported." },
      { step: "02", title: "Build the press package", text: "Pitch, release, fact sheet, media assets, spokesperson notes and target list are prepared around the angle." },
      { step: "03", title: "Pitch and respond", text: "Outreach is paced and personalized; feedback, requests and coverage are handled with accurate follow-through." },
    ],
    extraFaqs: [["Is PR the same as advertising?", "No. Advertising buys placement and controls the message. PR seeks earned editorial attention, so relevance and credibility matter and coverage remains the publication's decision."], ["What makes a story newsworthy?", "Common factors include meaningful change, timeliness, consequence, novelty, strong data, a human angle or a credible expert view on an active issue."]],
  },
  "content-marketing": {
    metaTitle: "Content Marketing Strategy & Production | RKD",
    metaDescription: "Expert-led articles, case studies, video scripts and content systems built around audience questions and distribution.",
    directAnswer: "Content marketing earns attention by publishing useful material that helps a defined audience understand a problem, make a decision or do better work. The strongest programs connect first-hand expertise, search demand, editorial quality and planned distribution.",
    overviewHeading: "What makes content worth finding and citing",
    processHeading: "How expertise becomes a useful, reusable content asset",
    successSignals: ["Qualified organic discovery", "Engaged reading or viewing", "Assisted enquiries and sales use", "Backlinks, citations and reuse"],
    benefits: [
      { title: "Expertise stays in the work", text: "Subject-matter input, real examples and source checks prevent the content from becoming commodity advice." },
      { title: "One idea, several useful forms", text: "A strong source asset can support search, email, social, sales and video without copying the same message everywhere." },
      { title: "A portfolio, not a posting treadmill", text: "Topics are selected for long-term usefulness and business relevance, then updated when facts or intent change." },
    ],
    process: [
      { step: "01", title: "Find the knowledge gap", text: "Audience questions, search behavior, sales conversations and internal expertise reveal where the brand can add something original." },
      { step: "02", title: "Create with evidence", text: "Writers work from interviews, examples, reliable sources and a clear editorial brief; claims are checked before approval." },
      { step: "03", title: "Distribute and maintain", text: "The asset is published, internally linked, repurposed where useful and reviewed as performance or facts change." },
    ],
    extraFaqs: [["How do you avoid generic AI-written content?", "We start with a specific reader decision, gather first-hand business input, verify factual claims and edit for a recognizable point of view. AI may assist workflow, but it does not replace expertise or accountability."], ["How long should an article be for SEO?", "There is no ideal word count. The page should be long enough to answer the intent with useful depth and short enough to avoid repetition, filler and sections that exist only for keywords."]],
  },
  "influencer-marketing": {
    metaTitle: "Influencer Marketing & Creator Campaigns | RKD",
    metaDescription: "Creator discovery, briefing, campaign operations, usage rights and reporting based on audience fit and credible content.",
    directAnswer: "Influencer marketing uses trusted creators to communicate with an audience in a format that feels native to the creator's channel. Effective campaigns prioritize audience fit, creative credibility, clear usage rights and measurable actions over follower count.",
    overviewHeading: "What protects the idea, creator relationship and investment",
    processHeading: "How we select and run creator partnerships",
    successSignals: ["Qualified reach and content retention", "Saves, replies and attributable actions", "Cost per usable asset or outcome", "Brand-lift and creator-fit learning"],
    benefits: [
      { title: "Fit beyond follower count", text: "Audience relevance, content quality, credibility, engagement patterns and brand safety shape the shortlist." },
      { title: "A brief with creative room", text: "Non-negotiable facts and outcomes are clear, while the creator retains the voice their audience trusts." },
      { title: "Rights made explicit", text: "Usage period, paid amplification, edits, exclusivity and deliverables are agreed before content is produced." },
    ],
    process: [
      { step: "01", title: "Define the partnership job", text: "We clarify audience, objective, message, format, budget, brand-safety needs and how success will be evaluated." },
      { step: "02", title: "Shortlist and contract", text: "Creators are reviewed against evidence, then scope, timing, approvals, disclosures and rights are documented." },
      { step: "03", title: "Launch and learn", text: "Content is checked for accuracy and disclosure, tracked after publication and assessed for both media value and reuse." },
    ],
    extraFaqs: [["Should we choose micro- or macro-influencers?", "Choose based on the campaign job. Smaller creators may offer stronger niche credibility; larger creators may provide faster reach. Audience quality, content fit and economics matter more than the label."], ["How do you identify fake engagement?", "We review audience distribution, comment quality, growth patterns, reach consistency and available first-party creator analytics. No single ratio proves authenticity, so signals are considered together."]],
  },
  "web-development": {
    metaTitle: "Web Development & Website Design | RKD",
    metaDescription: "Fast, accessible websites and landing pages built with clear content, responsive UX, analytics and search foundations.",
    directAnswer: "Web development turns business requirements, content and interface design into a reliable website that people and search engines can use. We build responsive pages with semantic HTML, accessible interactions, clean crawl paths and performance budgets from the start.",
    overviewHeading: "What a high-performing marketing website includes",
    processHeading: "How we move from customer journey to production release",
    successSignals: ["Core Web Vitals field performance", "Task and conversion completion", "Accessibility and responsive QA", "Indexed pages and clean analytics events"],
    benefits: [
      { title: "Clarity before decoration", text: "Information architecture and page content make the offer understandable before visual effects are added." },
      { title: "Performance as a constraint", text: "Asset weight, JavaScript, fonts and animation are budgeted around real devices and network conditions." },
      { title: "Ownership after launch", text: "The stack, editing workflow, repositories and handover are planned so the site remains maintainable." },
    ],
    process: [
      { step: "01", title: "Define journeys and content", text: "Pages, user tasks, search intent, content ownership, integrations and success events are mapped before high-fidelity design." },
      { step: "02", title: "Design and build in systems", text: "Responsive components, semantic structure, accessibility and performance are developed together rather than checked at the end." },
      { step: "03", title: "Test, release, observe", text: "Devices, browsers, forms, analytics, crawlability and redirects are verified; field data then guides post-launch improvements." },
    ],
    extraFaqs: [["How do you protect Core Web Vitals?", "We minimize render-blocking work, reserve layout space, control animation and JavaScript cost, optimize media and measure both lab diagnostics and real-user field data after launch."], ["Will you submit the site to Google?", "We can provide crawlable pages, robots rules, canonicals and an XML sitemap. Search Console ownership and URL inspection are then used to submit and monitor the site; Google alone decides when and whether a page is indexed."]],
    sources: [{ label: "web.dev: Core Web Vitals", href: "https://web.dev/articles/vitals" }],
  },
  "app-software-development": {
    metaTitle: "Custom App & Software Development | RKD",
    metaDescription: "Purpose-built web apps, mobile products, APIs and internal software shaped around real workflows and maintainable delivery.",
    directAnswer: "Custom software is justified when existing tools cannot support a valuable workflow without costly workarounds. We define the user problem, reduce the first release to its riskiest assumptions and build a maintainable product with explicit ownership and integration boundaries.",
    overviewHeading: "What we define before custom development begins",
    processHeading: "How a workflow becomes a reliable digital product",
    successSignals: ["User task completion and adoption", "Reliability and error rate", "Cycle time saved or value created", "Maintainability and release confidence"],
    benefits: [
      { title: "Scope tied to risk", text: "The first release tests the assumptions most likely to invalidate the product, not the longest feature list." },
      { title: "Interfaces people understand", text: "UX follows the real workflow, permissions and exception cases instead of forcing users around the database model." },
      { title: "Engineering with a handover path", text: "Architecture, environments, repositories, documentation and ownership are agreed before launch." },
    ],
    process: [
      { step: "01", title: "Model the workflow", text: "Users, tasks, business rules, data, integrations, risks and failure states are made explicit." },
      { step: "02", title: "Prototype the hard parts", text: "Critical journeys and technical unknowns are tested early before the full delivery plan is committed." },
      { step: "03", title: "Ship in verifiable slices", text: "Small releases receive functional, security and usability checks, with observability and rollback considered before production." },
    ],
    extraFaqs: [["When should we buy software instead of building it?", "Buy when a mature product handles the workflow at an acceptable total cost and risk. Build when the process creates strategic value, needs unusual integration or cannot be supported responsibly by available tools."], ["How do you estimate a custom software project?", "We estimate after discovery separates known scope from technical and product uncertainty. High-risk assumptions may need a paid prototype before a reliable delivery range is possible."]],
  },
  "ai-agent-automation": {
    metaTitle: "AI Agents & Workflow Automation Services | RKD",
    metaDescription: "Human-supervised AI agents and automations for research, triage, content operations, CRM workflows and connected tools.",
    directAnswer: "An AI agent combines a model with instructions, context, tools and control logic to complete a bounded task. Useful automation starts with a repeatable workflow, defined permissions, review points, failure handling and a measurable reason to automate it.",
    overviewHeading: "What makes an AI workflow useful and governable",
    processHeading: "How we automate work without automating accountability",
    successSignals: ["Cycle time and manual steps removed", "Accuracy at defined review gates", "Exception and escalation rate", "Cost per successful workflow run"],
    benefits: [
      { title: "A real operating role", text: "The agent receives a bounded task, approved sources and explicit tools instead of an open-ended instruction to 'do AI'." },
      { title: "Humans keep decision rights", text: "High-impact actions require approval, while low-risk preparation can move automatically." },
      { title: "Failures become visible", text: "Logs, fallbacks, retries and escalation paths are designed before the workflow is trusted with live work." },
    ],
    process: [
      { step: "01", title: "Choose the right workflow", text: "We score repetition, rules, data access, error cost and expected value to decide whether automation is sensible." },
      { step: "02", title: "Design the control plane", text: "Inputs, permissions, tools, prompts, structured outputs, review gates and fallback behavior are specified." },
      { step: "03", title: "Pilot under observation", text: "The workflow runs on representative cases, exceptions are logged and autonomy expands only when evidence supports it." },
    ],
    extraFaqs: [["What should not be delegated to an AI agent?", "Avoid unsupervised decisions where errors create legal, financial, safety, privacy or reputation harm. Sensitive actions need clear human authority and appropriate controls."], ["How do you measure whether automation is worth it?", "We compare implementation and operating cost with time saved, quality, throughput, error handling and the value of faster work. A demo is not counted as a successful deployment."]],
  },
};

const makeService = (input: ServiceInput): Service => {
  const enhancement = enhancements[input.slug];
  if (!enhancement) throw new Error(`Missing content enhancement for ${input.slug}`);
  return {
    ...input,
    ...enhancement,
    benefits: enhancement.benefits,
    process: enhancement.process,
    testimonial: {
      quote: input.testimonialQuote ?? enhancement.directAnswer,
      attribution: "Planning benchmark, not client feedback",
      label: "Project outcome standard",
    },
    faqs: [...(input.faq ?? []), ...enhancement.extraFaqs].slice(0, 5).map(([question, answer]) => ({ question, answer })),
  };
};

export const services: Service[] = [
  makeService({
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    slug: "digital-marketing",
    summary: "An integrated digital roadmap connecting every channel to a clear business objective.",
    intro: "We connect audience insight, creative ideas, media and measurement into one practical growth system. Every channel gets a job and every action needs a reason.",
    deliverables: ["Digital strategy", "Channel planning", "Campaign architecture", "Reporting framework"],
    tools: ["GA4", "Looker Studio", "Tag Manager", "Meta Ads", "Google Ads"],
    visual: "strategy",
    accent: "#ff5a36",
    accentSoft: "#ffd8ce",
    caseStudy: { title: "One growth system for a multi-channel brand", sector: "D2C lifestyle · concept", challenge: "Disconnected campaigns made performance difficult to understand and harder to scale.", solution: "A unified channel plan, campaign calendar and measurement framework connected content, media and landing pages.", impact: "A clearer acquisition journey and a repeatable weekly decision rhythm for the marketing team.", metrics: ["5 channels aligned", "1 shared dashboard", "12-week roadmap"], label: "Concept case study" },
    testimonialQuote: "We finally had one view of marketing instead of five disconnected channel reports.",
    faq: [["Which channels should my business use?", "The right mix depends on audience behavior, offer maturity, sales cycle and budget. We recommend the smallest useful channel system first, then expand from evidence."], ["Can you work with our internal team?", "Yes. We can lead the strategy, operate selected channels or work as an integrated extension of your existing team."]],
  }),
  makeService({
    name: "SEO · AEO · GEO · AIO · SXO",
    shortName: "Search Visibility",
    slug: "seo-aeo-geo-sxo",
    summary: "Search visibility built for organic results, direct answers, AI-assisted discovery and stronger post-click journeys.",
    intro: "Modern search spans ranked results, featured answers, AI Overviews, AI Mode and other generative systems. We improve the shared foundations: technical access, original expertise, clear information architecture, useful text and a fast experience. Then we measure where qualified discovery grows.",
    deliverables: ["Technical SEO audit", "Intent-led content architecture", "AEO, GEO and AIO content", "Search experience optimization", "Search Console measurement"],
    tools: ["Google Search Console", "SEMrush", "Screaming Frog", "GA4", "Google"],
    visual: "search",
    accent: "#635bff",
    accentSoft: "#ddd9ff",
    benefits: [{title:"Found everywhere",text:"Build visibility across traditional, answer and generative search surfaces."},{title:"Useful by design",text:"Match content to genuine questions and the next action a visitor needs."},{title:"Technically sound",text:"Give search engines and people a fast, structured and accessible experience."}],
    caseStudy: { title: "From scattered pages to a search ecosystem", sector: "B2B services · concept", challenge: "The website ranked for branded terms but failed to capture category demand or answer-engine visibility.", solution: "Technical fixes, topic clusters, structured answers and conversion-focused page improvements were sequenced into one roadmap.", impact: "A stronger discoverability foundation with clear content ownership and intent-led landing journeys.", metrics: ["42-page audit", "8 topic clusters", "90-day plan"], label: "Concept case study" },
    testimonialQuote: "The roadmap made modern search understandable, from technical fixes to AI answer visibility.",
    faq: [["What is the difference between SEO, AEO, GEO, AIO and SXO?", "SEO improves organic discovery. AEO structures clear answers. GEO focuses on being found and cited in generative systems, while AIO is commonly used for optimization across AI-assisted discovery. SXO improves usefulness and conversion after the visit. On Google, AEO, GEO and AIO still rely on core SEO foundations."], ["How quickly can search performance improve?", "Critical crawl or indexing faults can be corrected quickly, but Google must recrawl and reprocess the pages. Competitive visibility and authority usually build over months, so milestones are set after the technical and demand audit."], ["Do you guarantee first-page rankings or AI citations?", "No credible partner can guarantee rankings, AI citations or indexing. Search and generative systems make those decisions; we provide useful original content, compliant technical work, transparent measurement and continuous improvement."]],
  }),
  makeService({
    name: "Social Media Management / Marketing",
    shortName: "Social Media",
    slug: "social-media-management-marketing",
    summary: "Platform-native content and community systems that make your brand relevant, consistent and worth following.",
    intro: "We give your brand recognizable social behavior, not just a posting calendar. Strategy, formats, community, creators and paid distribution work together across the platforms your audience actually uses.",
    deliverables: ["Content strategy", "Creative production", "Community management", "Paid social"],
    tools: ["Instagram", "Facebook", "LinkedIn", "YouTube", "WhatsApp", "X", "Pinterest"],
    visual: "social",
    accent: "#ff2f92",
    accentSoft: "#ffd4e8",
    benefits: [{title:"Recognizable voice",text:"A consistent point of view and visual rhythm across every chosen platform."},{title:"Native creative",text:"Formats designed for how people actually watch, read, save and share."},{title:"Active community",text:"Thoughtful response systems turn attention into trust and participation."}],
    caseStudy: { title: "A social system built to be remembered", sector: "Consumer brand · concept", challenge: "Irregular posting and generic creative produced activity without a recognizable brand presence.", solution: "Four content pillars, platform-native templates, a response playbook and paid amplification created a repeatable social engine.", impact: "A clearer brand voice, faster production and a stronger path from discovery to conversation.", metrics: ["4 content pillars", "3 platform playbooks", "30-day calendar"], label: "Concept case study" },
    testimonialQuote: "The brand stopped looking like a collection of posts and started feeling like a living community.",
    faq: [["Which social platforms will you manage?", "We choose platforms based on audience, buying journey and content fit. Instagram, Meta, LinkedIn, YouTube, WhatsApp, X and Pinterest can be combined when strategically relevant."], ["Do you create the content too?", "Yes. Scope can include content planning, copy, design, short-form video direction, publishing and community management."], ["Can organic and paid social work together?", "Yes. Organic learning helps identify resonant ideas, while paid distribution helps those ideas reach and convert the right audience."]],
  }),
  makeService({
    name: "PPC Ads",
    shortName: "PPC",
    slug: "ppc-ads",
    summary: "Intent-led advertising designed to reach the right people and continuously improve cost per result.",
    intro: "We structure paid campaigns around intent, economics and measurement rather than vanity clicks. Search, social and retargeting work together to create accountable demand.",
    deliverables: ["Search campaigns", "Display campaigns", "Retargeting", "Conversion tracking"],
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Tag Manager"],
    visual: "ads",
    accent: "#1a73e8",
    accentSoft: "#d6e8ff",
    caseStudy: { title: "Rebuilding paid acquisition around intent", sector: "Professional services · concept", challenge: "Broad targeting produced traffic but few qualified enquiries.", solution: "Campaigns were rebuilt around high-intent themes, negative keywords, dedicated landing pages and complete conversion tracking.", impact: "Cleaner signals, better lead context and a media structure ready for disciplined optimization.", metrics: ["3 intent tiers", "100% tracking map", "6 test themes"], label: "Concept case study" },
    testimonialQuote: "Every campaign decision had a commercial reason, and we could finally see what happened after the click.",
    faq: [["What budget do I need for PPC?", "Budget depends on market competition, geography, conversion value and learning volume. We recommend a viable test budget after keyword and audience research."], ["Do you design landing pages and ads?", "Yes. Campaign structure, copy, creative, landing-page direction and measurement can be delivered as one connected scope."], ["Which metrics matter most?", "We monitor platform efficiency, but optimize toward qualified leads, acquisition cost and the downstream value your business can verify."]],
  }),
  makeService({
    name: "Branding",
    shortName: "Branding",
    slug: "branding",
    summary: "A clear strategy, voice and visual system that turns a business into a recognizable brand.",
    intro: "We clarify what your brand should stand for, how it should sound and how it should show up. The result is a practical system that makes every future decision more coherent.",
    deliverables: ["Positioning", "Messaging", "Visual identity", "Brand guidelines"],
    tools: ["Figma", "Adobe CC", "Notion", "Illustrator"],
    visual: "brand",
    accent: "#ffb800",
    accentSoft: "#fff0b8",
    caseStudy: { title: "Making a complex business easy to remember", sector: "Technology · concept", challenge: "A strong product was hidden behind technical language and an inconsistent visual identity.", solution: "Positioning, message architecture and a modular design system translated the product into one memorable brand idea.", impact: "A confident story and usable identity system for sales, product and marketing teams.", metrics: ["1 brand idea", "6 message pillars", "24 core assets"], label: "Concept case study" },
    testimonialQuote: "The brand now feels like the company we are becoming, not the company we started as.",
    faq: [["What is included in a branding project?", "Depending on scope: research, positioning, audience, proposition, messaging, naming support, tone of voice, visual identity and usage guidelines."], ["Can you refresh an existing brand?", "Yes. We can evolve recognizable equity while fixing inconsistency, outdated expression or a story that no longer matches the business."], ["Will we receive editable files?", "Yes. Final scope includes organized production files, practical guidelines and agreed export formats."]],
  }),
  makeService({
    name: "Logo Design + Graphic Designing",
    shortName: "Design",
    slug: "logo-graphic-design",
    summary: "Distinctive visual assets made to communicate clearly across every digital and physical touchpoint.",
    intro: "We design flexible logos and graphic systems that stay distinctive from a tiny profile icon to a full campaign. Every visual decision begins with communication, not decoration.",
    deliverables: ["Logo system", "Campaign design", "Social creatives", "Marketing collateral"],
    tools: ["Illustrator", "Photoshop", "InDesign", "Canva", "Figma"],
    visual: "design",
    accent: "#9d4edd",
    accentSoft: "#ead6ff",
    caseStudy: { title: "One visual language across every touchpoint", sector: "Hospitality · concept", challenge: "Different vendors had created a fragmented identity with no reliable production system.", solution: "A responsive logo suite, type and color rules, campaign templates and a practical asset library unified output.", impact: "Faster everyday design and a more distinctive customer experience online and offline.", metrics: ["5 logo formats", "18 templates", "1 asset library"], label: "Concept case study" },
    testimonialQuote: "The system gave our team freedom to create without making the brand inconsistent.",
    faq: [["How many logo concepts are presented?", "We focus on a small number of strategically distinct directions, explain the reasoning and refine the selected route through agreed feedback rounds."], ["Can you create ongoing graphics after the logo?", "Yes. We can extend the identity into social templates, presentations, campaigns, print and everyday marketing materials."], ["Do you provide source files?", "Yes. Approved final assets are supplied in appropriate editable and export formats with a clear usage guide."]],
  }),
  makeService({
    name: "Performance Marketing",
    shortName: "Performance Marketing",
    slug: "performance-marketing",
    summary: "Full-funnel acquisition focused on measurable actions, disciplined testing and profitable scale.",
    intro: "We connect media, creative, landing experiences and analytics around profitable growth. The system is designed to learn quickly and scale only what earns the right to scale.",
    deliverables: ["Media strategy", "Experimentation", "CRO", "Attribution"],
    tools: ["Google Ads", "Meta Ads", "GA4", "Looker Studio", "Tag Manager"],
    visual: "performance",
    accent: "#00a86b",
    accentSoft: "#c9f4df",
    caseStudy: { title: "Turning campaign activity into a growth loop", sector: "E-commerce · concept", challenge: "Media, creative and conversion teams optimized separate metrics with no shared learning system.", solution: "A full-funnel measurement plan and structured creative testing connected spend to customer acquisition and repeatable insights.", impact: "Faster decisions and a clearer path for scaling winning audiences, messages and experiences.", metrics: ["4 funnel stages", "12 test cells", "1 profit view"], label: "Concept case study" },
    testimonialQuote: "Testing became a business discipline rather than a weekly collection of ad experiments.",
    faq: [["How is performance marketing different from PPC?", "PPC is a paid media discipline. Performance marketing connects paid media with creative testing, landing-page optimization, measurement and commercial outcomes across the funnel."], ["Can you work with our existing creative team?", "Yes. We provide performance insights, test briefs and feedback loops so internal or external creative teams can produce better iterations."], ["How often do you optimize?", "Signals are monitored continuously, with decision cadence based on spend and data volume so changes are meaningful rather than reactive."]],
  }),
  makeService({
    name: "Email Marketing",
    shortName: "Email Marketing",
    slug: "email-marketing",
    summary: "Relevant lifecycle communication that nurtures leads, activates customers and builds repeat engagement.",
    intro: "We design email journeys around moments that matter, from first interest to repeat purchase, using useful content, clear segmentation and continuous testing.",
    deliverables: ["Lifecycle journeys", "Newsletters", "Segmentation", "A/B testing"],
    tools: ["Mailchimp", "Klaviyo", "Brevo", "HubSpot", "GA4"],
    visual: "email",
    accent: "#00a4a6",
    accentSoft: "#c8f2ef",
    caseStudy: { title: "A lifecycle journey beyond the welcome email", sector: "Subscription business · concept", challenge: "The same broadcast message reached every subscriber regardless of intent or stage.", solution: "Audience segments, onboarding, education, conversion and re-engagement flows created a more useful lifecycle.", impact: "A maintainable communication system with clear triggers, owners and testing priorities.", metrics: ["5 core journeys", "9 segments", "10 test ideas"], label: "Concept case study" },
    testimonialQuote: "Email became a customer experience channel instead of a monthly send button.",
    faq: [["Can you migrate our email platform?", "Yes. Migration scope can include data cleanup, segmentation, templates, core automations, QA and launch planning."], ["Do you write and design the emails?", "Yes. Strategy, copy, modular design, build, testing and reporting can be delivered end to end."], ["How do you protect deliverability?", "We use permission-based list practices, authentication checks, sensible sending patterns, list hygiene and content testing."]],
  }),
  makeService({
    name: "Lead Generation",
    shortName: "Lead Generation",
    slug: "lead-generation",
    summary: "Connected acquisition funnels that capture demand and move qualified prospects toward a conversation.",
    intro: "We build lead systems around fit and intent rather than raw form fills. Offers, media, landing pages, qualification and CRM routing work together from first touch to sales handoff.",
    deliverables: ["Lead magnets", "Landing pages", "Qualification", "CRM routing"],
    tools: ["HubSpot", "Google Ads", "LinkedIn", "Meta Ads", "GA4"],
    visual: "leads",
    accent: "#f04444",
    accentSoft: "#ffd7d7",
    caseStudy: { title: "Building a qualification-first lead engine", sector: "B2B consulting · concept", challenge: "Lead volume looked healthy, but the sales team spent time on poor-fit enquiries.", solution: "A stronger offer, intent-led campaign, qualifying landing flow and CRM handoff aligned marketing with sales reality.", impact: "More useful lead context and a transparent path from campaign to commercial conversation.", metrics: ["7 qualification fields", "3 lead routes", "1 shared SLA"], label: "Concept case study" },
    testimonialQuote: "The biggest change was not more forms. It was better conversations with better context.",
    faq: [["How do you define a qualified lead?", "We define fit and intent with your sales team before launch, including explicit criteria, routing rules and feedback signals."], ["Can leads connect to our CRM?", "Yes. We can plan form capture, source tracking, enrichment, routing and notifications for supported CRM workflows."], ["Do you provide lead lists?", "Our focus is consent-aware demand capture and qualification. Any outbound data work is scoped around applicable privacy and platform requirements."]],
  }),
  makeService({
    name: "PR (Public Relations)",
    shortName: "Public Relations",
    slug: "public-relations",
    summary: "Credible narratives and media outreach that strengthen reputation and keep the brand part of the conversation.",
    intro: "We turn business expertise and meaningful moments into credible stories. Strategy, press material, targeted outreach and reputation monitoring keep communication focused and useful.",
    deliverables: ["Media strategy", "Press releases", "Outreach", "Reputation support"],
    tools: ["Google News", "Media lists", "Monitoring", "Newsrooms"],
    visual: "pr",
    accent: "#ef476f",
    accentSoft: "#ffd2dd",
    caseStudy: { title: "Finding the story inside a product launch", sector: "Technology · concept", challenge: "A feature-led announcement lacked a timely reason for editors or industry audiences to care.", solution: "A data-supported narrative, founder point of view and targeted media map created multiple credible story angles.", impact: "A repeatable editorial narrative and stronger materials for earned, owned and executive communication.", metrics: ["4 story angles", "30-media map", "1 press kit"], label: "Concept case study" },
    testimonialQuote: "The team found a story people could care about, not just a list of product features.",
    faq: [["Can you guarantee media coverage?", "No. Editorial decisions remain with journalists and publications. We guarantee thoughtful strategy, strong materials, relevant outreach and transparent reporting."], ["Do you write press releases?", "Yes. We can develop the story, press release, media pitch, founder quotes, supporting fact sheet and digital press kit."], ["Can PR support personal branding?", "Yes. Executive positioning, thought-leadership angles and expert commentary can be part of the communications plan."]],
  }),
  makeService({
    name: "Content Marketing",
    shortName: "Content Marketing",
    slug: "content-marketing",
    summary: "Useful, searchable content that answers real questions and compounds brand authority over time.",
    intro: "We create content systems that earn attention by being genuinely useful. Audience questions, search opportunity, brand expertise and distribution guide what gets made and why.",
    deliverables: ["Content strategy", "Articles", "Case studies", "Video scripts"],
    tools: ["Notion", "Google Search Console", "Canva", "YouTube", "GA4"],
    visual: "content",
    accent: "#ff7a00",
    accentSoft: "#ffe1c1",
    caseStudy: { title: "Turning expertise into a content engine", sector: "Financial services · concept", challenge: "Subject-matter expertise lived in calls and documents but rarely became accessible marketing content.", solution: "An expert interview workflow, topic architecture and modular production plan turned knowledge into articles, video and sales content.", impact: "A consistent publishing system designed to build authority and support long sales cycles.", metrics: ["6 topic pillars", "3 formats per idea", "90-day calendar"], label: "Concept case study" },
    testimonialQuote: "Content became a reusable business asset instead of a deadline we chased every week.",
    faq: [["How do you choose content topics?", "We combine audience questions, search behavior, commercial relevance, brand expertise and distribution potential."], ["Can one idea become multiple formats?", "Yes. We design modular content so a strong source idea can support articles, social posts, email, video and sales enablement."], ["Do you use AI to write content?", "AI can support research and workflow, but strategy, factual accuracy, brand voice and editorial judgment remain human-led."]],
  }),
  makeService({
    name: "Influencer Marketing",
    shortName: "Influencer Marketing",
    slug: "influencer-marketing",
    summary: "Creator partnerships chosen for audience fit, authentic storytelling and measurable campaign value.",
    intro: "We match brands with creators through relevance, credibility and audience fit. Clear briefs, fair collaboration and practical tracking protect both the idea and the investment.",
    deliverables: ["Creator discovery", "Briefing", "Campaign management", "Reporting"],
    tools: ["Instagram", "YouTube", "Creator analytics", "Hootsuite"],
    visual: "influence",
    accent: "#e1306c",
    accentSoft: "#ffd2e2",
    caseStudy: { title: "From creator reach to credible recommendation", sector: "Beauty · concept", challenge: "Past collaborations delivered impressions but little brand fit, useful content or measurable action.", solution: "A creator-fit scorecard, tiered roles, modular brief and trackable landing journey prioritized trust and reuse.", impact: "A partnership model designed for authentic stories, owned content value and clearer commercial signals.", metrics: ["25-creator shortlist", "3 partnership tiers", "8 content rights assets"], label: "Concept case study" },
    testimonialQuote: "The creators felt like genuine partners, and the content finally sounded natural on their channels.",
    faq: [["How do you select creators?", "We evaluate audience relevance, content quality, credibility, engagement patterns, brand safety, working fit and campaign economics. Follower count alone is not enough."], ["Do you manage contracts and approvals?", "Campaign management can include outreach, negotiation coordination, briefing, schedules, review workflow, usage rights tracking and reporting."], ["Can creator content be used in ads?", "Yes, when usage rights and platform permissions are agreed in advance. We plan this into the campaign scope."]],
  }),
  makeService({
    name: "Web Development",
    shortName: "Web Development",
    slug: "web-development",
    summary: "Fast, accessible and conversion-focused websites designed around real customer journeys.",
    intro: "We design and build websites that explain clearly, load quickly and make the next action obvious. Strategy, UX, visual design, content and engineering stay connected throughout.",
    deliverables: ["Marketing websites", "E-commerce", "Landing pages", "Optimization"],
    tools: ["Next.js", "WordPress", "Shopify", "React", "Figma", "GitHub"],
    visual: "web",
    accent: "#2563eb",
    accentSoft: "#d8e6ff",
    caseStudy: { title: "A website rebuilt around customer decisions", sector: "Professional services · concept", challenge: "The existing site described the company but did not help different buyers understand relevance or take action.", solution: "A new information architecture, clear service journeys, proof modules and a fast component system connected story to enquiry.", impact: "A maintainable digital front door designed for clarity, accessibility and conversion learning.", metrics: ["3 audience journeys", "12 reusable blocks", "Core Web Vitals ready"], label: "Concept case study" },
    testimonialQuote: "The new site explains our value in minutes and gives our team a system we can actually maintain.",
    faq: [["Which platform should we use?", "We recommend the platform after understanding content needs, integrations, internal skills, scale and ownership. Next.js, WordPress and Shopify each suit different situations."], ["Will the website work on mobile?", "Yes. Responsive behavior, touch interactions, readability and performance are designed and tested as core requirements."], ["Can you manage content and SEO too?", "Yes. Content strategy, copy, technical search foundations, analytics and ongoing optimization can be included."]],
  }),
  makeService({
    name: "Development (App and Software)",
    shortName: "App & Software Development",
    slug: "app-software-development",
    summary: "Purpose-built digital products that make complex workflows simple for teams and customers.",
    intro: "We translate real operational needs into focused digital products. Product thinking, UX and engineering move together from prototype to reliable release.",
    deliverables: ["Mobile apps", "Web apps", "Custom software", "API integrations"],
    tools: ["React", "Node.js", "Postgres", "GitHub", "Cloud platforms", "Figma"],
    visual: "app",
    accent: "#14b8a6",
    accentSoft: "#cdf5ef",
    caseStudy: { title: "Replacing a manual workflow with one product", sector: "Operations · concept", challenge: "Requests, approvals and updates were spread across spreadsheets, messages and individual memory.", solution: "A role-based web application centralized intake, status, approvals and reporting around the actual team workflow.", impact: "A simpler operating rhythm with clearer ownership, searchable history and fewer repetitive updates.", metrics: ["4 user roles", "7 workflow states", "1 source of truth"], label: "Concept case study" },
    testimonialQuote: "The product removed daily friction because it was designed around how our team really works.",
    faq: [["Do you build an MVP first?", "When appropriate, yes. We define the smallest product that can test the highest-risk assumptions and create useful learning."], ["Who owns the source code?", "Ownership, licensing, repositories and handover are agreed clearly in the project scope before development begins."], ["Can you integrate existing tools?", "Yes. We assess available APIs, authentication, data flow, reliability and maintenance before recommending an integration approach."]],
  }),
  makeService({
    name: "AI Agent & Automation",
    shortName: "AI & Automation",
    slug: "ai-agent-automation",
    summary: "Practical AI systems that handle repetitive work, connect tools and keep teams moving faster.",
    intro: "We find useful automation opportunities, design human safe workflows and connect the right models and tools. The goal is reliable time savings and fewer avoidable handoffs, not AI theatre.",
    deliverables: ["AI assistants", "Workflow automation", "CRM automation", "Custom integrations"],
    tools: ["OpenAI", "Make", "Zapier", "HubSpot", "n8n", "Node.js"],
    visual: "ai",
    accent: "#8b5cf6",
    accentSoft: "#e6ddff",
    benefits: [{title:"Time returned",text:"Automate repetitive coordination and preparation while keeping people in control."},{title:"Connected context",text:"Move useful information between the tools where your team already works."},{title:"Safe by design",text:"Define permissions, review points, fallbacks and monitoring before automation goes live."}],
    caseStudy: { title: "An AI assistant with a real operating role", sector: "Marketing operations · concept", challenge: "Campaign research and first-draft preparation consumed hours before strategic work could begin.", solution: "A guarded assistant gathered approved inputs, structured briefs, drafted variations and routed output for human review.", impact: "A repeatable preparation workflow that preserved judgment while reducing avoidable manual work.", metrics: ["6 connected steps", "2 review gates", "1 audit trail"], label: "Concept case study" },
    testimonialQuote: "The automation helps the team start from a stronger first draft without removing human judgment.",
    faq: [["What can an AI agent automate?", "Good candidates are repeatable tasks with clear inputs, rules, tool access and review points, such as research preparation, triage, drafting, routing and structured updates."], ["Will AI replace our team?", "Our approach is to remove repetitive friction and augment expert work. We design explicit human ownership and escalation into the workflow."], ["How do you handle sensitive data?", "Data access, retention, permissions and provider settings are reviewed during solution design. Sensitive workflows require appropriate controls and approval."]],
  }),
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
