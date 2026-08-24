import { ToolLogo } from "./ToolLogo";

export function DeferredToolOrbit({ tools }: { tools: string[] }) {
  return <div className="mini-tool-orbit" aria-label={`Tools include ${tools.join(", ")}`}>
    {tools.map((tool) => <ToolLogo name={tool} key={tool}/>)}
  </div>;
}
