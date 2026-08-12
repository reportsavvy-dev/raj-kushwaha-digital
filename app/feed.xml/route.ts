import { insights } from "../data/insights";

const baseUrl = "https://www.rajkushwahadigital.com";

function escapeXml(value: string) {
  return value.replace(/[<>&'\"]/g, (character) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", "'": "&apos;", '\"': "&quot;" })[character] ?? character);
}

export function GET() {
  const items = insights.map((insight) => `<item>
    <title>${escapeXml(insight.title)}</title>
    <link>${baseUrl}/insights/${insight.slug}</link>
    <guid isPermaLink="true">${baseUrl}/insights/${insight.slug}</guid>
    <description>${escapeXml(insight.excerpt)}</description>
    <pubDate>${new Date(`${insight.published}T00:00:00Z`).toUTCString()}</pubDate>
    <author>hello@rajkushwahadigital.com (Raj Kushwaha)</author>
  </item>`).join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0"><channel><title>Raj Kushwaha Digital Insights</title><link>${baseUrl}/insights</link><description>Evidence-led guidance on search, AI discovery and digital growth.</description><language>en</language>${items}</channel></rss>`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8", "Cache-Control": "public, max-age=3600, s-maxage=86400" } });
}
