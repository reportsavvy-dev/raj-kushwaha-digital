const toolLabels: Record<string, string> = {
  "Adobe CC": "CC",
  "Cloud platforms": "CLD",
  "Creator analytics": "CA",
  "Google Ads": "ADS",
  "Google News": "NEWS",
  "Google Search Console": "GSC",
  "LinkedIn Ads": "LI",
  "Looker Studio": "LS",
  "Media lists": "PR",
  "Meta Ads": "META",
  "Tag Manager": "GTM",
};

function compactLabel(tool: string) {
  if (toolLabels[tool]) return toolLabels[tool];
  if (tool.length <= 5) return tool.toUpperCase();
  const words = tool.split(/[\s.]+/).filter(Boolean);
  return words.length > 1
    ? words.map((word) => word[0]).join("").slice(0, 4).toUpperCase()
    : tool.slice(0, 3).toUpperCase();
}

export function DeferredToolOrbit({ tools }: { tools: string[] }) {
  return <div className="mini-tool-orbit" aria-label={`Tools include ${tools.join(", ")}`}>
    {tools.map((tool) => <span className="mini-tool-badge" aria-hidden="true" key={tool}>{compactLabel(tool)}</span>)}
  </div>;
}
