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
  summary: string;
  intro: string;
  deliverables: string[];
  tools: string[];
  visual: string;
  accent: string;
  accentSoft: string;
  benefits: { title: string; text: string }[];
  process: { step: string; title: string; text: string }[];
  caseStudy: CaseStudy;
  testimonial: { quote: string; attribution: string; label: string };
  faqs: { question: string; answer: string }[];
};

type ServiceInput = Omit<Service, "benefits" | "process" | "testimonial" | "faqs"> & {
  benefits?: Service["benefits"];
  process?: Service["process"];
  testimonialQuote?: string;
  faq?: [string, string][];
};

const makeService = (input: ServiceInput): Service => ({
  ...input,
  benefits: input.benefits ?? [
    { title: "Sharper direction", text: `A focused ${input.shortName.toLowerCase()} plan built around your commercial priorities.` },
    { title: "Connected execution", text: "Strategy, creative and technology work as one system instead of disconnected tasks." },
    { title: "Measurable learning", text: "Clear signals help us learn, improve and invest in what moves the business forward." },
  ],
  process: input.process ?? [
    { step: "01", title: "Discover", text: "We study the business, audience, competitors and the real growth constraint." },
    { step: "02", title: "Design", text: `We turn the findings into a practical ${input.shortName.toLowerCase()} system and action plan.` },
    { step: "03", title: "Activate", text: "We launch, measure and continuously improve the work using live signals." },
  ],
  testimonial: {
    quote: input.testimonialQuote ?? `The team turned ${input.shortName.toLowerCase()} into a clear, connected system our people could understand and use.`,
    attribution: "Client name · to be replaced with a verified portfolio quote",
    label: "Draft testimonial placeholder",
  },
  faqs: [
    ...(input.faq ?? []),
    [
      `How does a ${input.shortName.toLowerCase()} project begin?`,
      "We begin with a focused discovery call, review the available data and agree on the outcome, scope, timeline and success signals before execution starts.",
    ],
    [
      "What will reporting include?",
      "Reporting connects activity to meaningful business signals. You receive a clear view of progress, learning, next actions and the metrics that matter for the engagement.",
    ],
  ].slice(0, 5).map(([question, answer]) => ({ question, answer })),
});

export const services: Service[] = [
  makeService({
    name: "Digital Marketing",
    shortName: "Digital Marketing",
    slug: "digital-marketing",
    summary: "An integrated digital roadmap connecting every channel to a clear business objective.",
    intro: "We connect audience insight, creative ideas, media and measurement into one practical growth system—so every channel has a job and every action has a reason.",
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
    name: "SEO · AEO · GEO · SXO",
    shortName: "Search Visibility",
    slug: "seo-aeo-geo-sxo",
    summary: "A complete search presence built for rankings, answer engines, generative discovery and better user journeys.",
    intro: "Search is now bigger than blue links. We build technical health, topical authority, answer-ready content, generative visibility and a better post-click experience as one connected discipline.",
    deliverables: ["Technical SEO", "Content optimization", "AI visibility", "Search experience"],
    tools: ["Google Search Console", "SEMrush", "Screaming Frog", "GA4", "Google"],
    visual: "search",
    accent: "#635bff",
    accentSoft: "#ddd9ff",
    benefits: [{title:"Found everywhere",text:"Build visibility across traditional, answer and generative search surfaces."},{title:"Useful by design",text:"Match content to genuine questions and the next action a visitor needs."},{title:"Technically sound",text:"Give search engines and people a fast, structured and accessible experience."}],
    caseStudy: { title: "From scattered pages to a search ecosystem", sector: "B2B services · concept", challenge: "The website ranked for branded terms but failed to capture category demand or answer-engine visibility.", solution: "Technical fixes, topic clusters, structured answers and conversion-focused page improvements were sequenced into one roadmap.", impact: "A stronger discoverability foundation with clear content ownership and intent-led landing journeys.", metrics: ["42-page audit", "8 topic clusters", "90-day plan"], label: "Concept case study" },
    testimonialQuote: "The roadmap made modern search understandable—from technical fixes to AI answer visibility.",
    faq: [["What is the difference between SEO, AEO, GEO and SXO?", "SEO improves organic visibility, AEO helps content become direct answers, GEO improves visibility in generative engines, and SXO improves the experience after a person arrives."], ["How quickly can search performance improve?", "Technical and experience fixes can show early movement, while authority and competitive rankings usually compound over several months. We set realistic milestones after the audit."], ["Do you guarantee first-page rankings?", "No credible partner can guarantee rankings. We commit to rigorous work, transparent measurement and continuous improvement."]],
  }),
  makeService({
    name: "Social Media Management / Marketing",
    shortName: "Social Media",
    slug: "social-media-management-marketing",
    summary: "Platform-native content and community systems that make your brand relevant, consistent and worth following.",
    intro: "We give your brand a recognizable social behavior—not just a posting calendar. Strategy, formats, community, creators and paid distribution work together across the platforms your audience actually uses.",
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
    intro: "We structure paid campaigns around intent, economics and measurement—not vanity clicks. Search, social and retargeting work together to create accountable demand.",
    deliverables: ["Search campaigns", "Display campaigns", "Retargeting", "Conversion tracking"],
    tools: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "Tag Manager"],
    visual: "ads",
    accent: "#1a73e8",
    accentSoft: "#d6e8ff",
    caseStudy: { title: "Rebuilding paid acquisition around intent", sector: "Professional services · concept", challenge: "Broad targeting produced traffic but few qualified enquiries.", solution: "Campaigns were rebuilt around high-intent themes, negative keywords, dedicated landing pages and complete conversion tracking.", impact: "Cleaner signals, better lead context and a media structure ready for disciplined optimization.", metrics: ["3 intent tiers", "100% tracking map", "6 test themes"], label: "Concept case study" },
    testimonialQuote: "Every campaign decision had a commercial reason—and we could finally see what happened after the click.",
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
    intro: "We design email journeys around moments that matter—from first interest to repeat purchase—using useful content, clear segmentation and continuous testing.",
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
    intro: "We build lead systems around fit and intent—not raw form fills. Offers, media, landing pages, qualification and CRM routing work together from first touch to sales handoff.",
    deliverables: ["Lead magnets", "Landing pages", "Qualification", "CRM routing"],
    tools: ["HubSpot", "Google Ads", "LinkedIn", "Meta Ads", "GA4"],
    visual: "leads",
    accent: "#f04444",
    accentSoft: "#ffd7d7",
    caseStudy: { title: "Building a qualification-first lead engine", sector: "B2B consulting · concept", challenge: "Lead volume looked healthy, but the sales team spent time on poor-fit enquiries.", solution: "A stronger offer, intent-led campaign, qualifying landing flow and CRM handoff aligned marketing with sales reality.", impact: "More useful lead context and a transparent path from campaign to commercial conversation.", metrics: ["7 qualification fields", "3 lead routes", "1 shared SLA"], label: "Concept case study" },
    testimonialQuote: "The biggest change was not more forms—it was better conversations with better context.",
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
    testimonialQuote: "The team found a story people could care about—not just a list of product features.",
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
    faq: [["How do you select creators?", "We evaluate audience relevance, content quality, credibility, engagement patterns, brand safety, working fit and campaign economics—not follower count alone."], ["Do you manage contracts and approvals?", "Campaign management can include outreach, negotiation coordination, briefing, schedules, review workflow, usage rights tracking and reporting."], ["Can creator content be used in ads?", "Yes, when usage rights and platform permissions are agreed in advance. We plan this into the campaign scope."]],
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
    intro: "We find useful automation opportunities, design human-safe workflows and connect the right models and tools. The goal is reliable leverage—not AI theatre.",
    deliverables: ["AI assistants", "Workflow automation", "CRM automation", "Custom integrations"],
    tools: ["OpenAI", "Make", "Zapier", "HubSpot", "n8n", "Node.js"],
    visual: "ai",
    accent: "#8b5cf6",
    accentSoft: "#e6ddff",
    benefits: [{title:"Time returned",text:"Automate repetitive coordination and preparation while keeping people in control."},{title:"Connected context",text:"Move useful information between the tools where your team already works."},{title:"Safe by design",text:"Define permissions, review points, fallbacks and monitoring before automation goes live."}],
    caseStudy: { title: "An AI assistant with a real operating role", sector: "Marketing operations · concept", challenge: "Campaign research and first-draft preparation consumed hours before strategic work could begin.", solution: "A guarded assistant gathered approved inputs, structured briefs, drafted variations and routed output for human review.", impact: "A repeatable preparation workflow that preserved judgment while reducing avoidable manual work.", metrics: ["6 connected steps", "2 review gates", "1 audit trail"], label: "Concept case study" },
    testimonialQuote: "The automation helps the team start from a stronger first draft without removing human judgment.",
    faq: [["What can an AI agent automate?", "Good candidates are repeatable tasks with clear inputs, rules, tool access and review points—such as research preparation, triage, drafting, routing and structured updates."], ["Will AI replace our team?", "Our approach is to remove repetitive friction and augment expert work. We design explicit human ownership and escalation into the workflow."], ["How do you handle sensitive data?", "Data access, retention, permissions and provider settings are reviewed during solution design. Sensitive workflows require appropriate controls and approval."]],
  }),
];

export const serviceBySlug = (slug: string) => services.find((service) => service.slug === slug);
