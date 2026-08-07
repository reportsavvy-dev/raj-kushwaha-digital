"use client";
import { useRef } from "react";
const tools=[
 {c:"instagram",icon:"IG",title:"Instagram Post",body:<><div className="media-art"><b>BUILD<br/>BRANDS THAT<br/><i>CONNECT.</i></b></div><small>♡ 8.2K　⌁ 342</small></>},
 {c:"meta",icon:"M",title:"Meta Ads",body:<><span className="status">● Active</span><small>CAMPAIGN PERFORMANCE</small><div className="trend">⌁╱⌁╱╱</div><div className="three"><span>Reach</span><span>Clicks</span><span>Leads</span></div></>},
 {c:"google",icon:"G",title:"Google Search",body:<><div className="search-pill">digital marketing agency⌕</div><b className="search-result">Raj Kushwaha Digital</b><small>Strategy · Creative · Technology</small></>},
 {c:"email",icon:"✉",title:"Email Flow",body:<div className="email-flow"><span>Welcome email</span><i>↓</i><span>Case study</span><i>↓</i><span>Book a call</span></div>},
 {c:"seo",icon:"⌕",title:"SEO Overview",body:<><small>ORGANIC VISIBILITY</small><div className="seo-chart">╱⌁╱╱</div><div className="rank-lines"><i/><i/><i/></div></>},
 {c:"content",icon:"□",title:"Content Calendar",body:<div className="calendar">{Array.from({length:15},(_,i)=><i className={i===7||i===11?"on":""} key={i}/>)}</div>},
 {c:"agent",icon:"✦",title:"AI Agent",body:<><span className="status">● Active</span><small>CONTENT ASSISTANT</small><p>Generating campaign ideas...</p><div className="loading"><i/></div></>},
 {c:"web",icon:"⌘",title:"Website",body:<div className="wire"><i/><span/><b/><em/></div>},
];
export function HeroCanvas(){const ref=useRef<HTMLDivElement>(null);const move=(e:React.MouseEvent)=>{const r=ref.current?.getBoundingClientRect();if(!r)return;const x=(e.clientX-r.left-r.width/2)/r.width,y=(e.clientY-r.top-r.height/2)/r.height;ref.current?.style.setProperty("--mx",String(x));ref.current?.style.setProperty("--my",String(y))};return <div className="hero-canvas" ref={ref} onMouseMove={move} onMouseLeave={()=>{ref.current?.style.setProperty("--mx","0");ref.current?.style.setProperty("--my","0")}}><div className="signal-mark">RKD</div><div className="signal-lines" aria-hidden="true"><i/><i/><i/><i/><i/></div>{tools.map((t,i)=><article className={`tool-card ${t.c}`} style={{"--i":i} as React.CSSProperties} key={t.c}><header><span>{t.icon}</span><b>{t.title}</b></header>{t.body}</article>)}</div>}
