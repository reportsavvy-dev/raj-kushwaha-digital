import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = new URL("../", import.meta.url);

const brands = [
  {
    slug: "key-medsolutions-guide",
    name: "KEY MEDSOLUTIONS",
    descriptor: "MEDICAL BILLING & REVENUE CYCLE MANAGEMENT",
    logo: "public/clients/key-medsolutions.webp",
    reference: "public/case-studies/key-medsolutions-guide/reference-upscaled.webp",
    colours: [
      ["PRIMARY BLUE", "#0B55B7", "Trust / clarity"],
      ["PRIMARY GREEN", "#00A968", "Care / progress"],
      ["INK", "#121820", "Authority"],
      ["MIST", "#E7F4F0", "Support"],
      ["PAPER", "#FAF7F0", "Space"],
    ],
    type: ["INTER", "Arial / system sans-serif", "Clear, dependable and accessible"],
    values: ["PRECISION", "CARE", "ACCESS", "TRUST"],
  },
  {
    slug: "khrcm-guide",
    name: "KH RCM",
    descriptor: "HEALTHCARE REVENUE EXPERTS",
    logo: "public/clients/kh-rcm.webp",
    reference: "public/case-studies/khrcm-guide/reference-upscaled.webp",
    colours: [
      ["FOREST GREEN", "#086349", "Health / integrity"],
      ["COBALT BLUE", "#0B67B1", "Expertise"],
      ["DARK NAVY", "#0B446F", "Confidence"],
      ["PALE BLUE", "#E7F4FB", "Access"],
      ["IVORY", "#FAF7F0", "Space"],
    ],
    type: ["HUMANIST SANS", "Arial / system sans-serif", "Calm, precise and readable"],
    values: ["EXPERTISE", "PRECISION", "INTEGRITY", "PERFORMANCE"],
  },
];

const esc = (value) => String(value).replace(/[&<>\"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[char]);

function frame(brand, page, title, subtitle, body, logoUri) {
  const accent = brand.colours[0][1];
  const second = brand.colours[1][1];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="1200" viewBox="0 0 1600 1200">
    <defs>
      <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#111820" opacity=".11"/></pattern>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%"><feDropShadow dx="0" dy="16" stdDeviation="20" flood-color="#101820" flood-opacity=".12"/></filter>
      <linearGradient id="accentLine" x1="0" x2="1"><stop stop-color="${accent}"/><stop offset="1" stop-color="${second}"/></linearGradient>
    </defs>
    <rect width="1600" height="1200" fill="#faf7f0"/><rect width="1600" height="1200" fill="url(#dots)" opacity=".58"/>
    <path d="M48 50h110M48 50v110M1552 50h-110M1552 50v110M48 1150h110M48 1150v-110M1552 1150h-110M1552 1150v-110" fill="none" stroke="${accent}" stroke-width="2"/>
    <text x="72" y="92" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="4" fill="${accent}">${String(page).padStart(2, "0")} / 06</text>
    <text x="72" y="148" font-family="Arial, sans-serif" font-size="48" font-weight="800" letter-spacing="-1" fill="#101820">${esc(title)}</text>
    <text x="72" y="184" font-family="Arial, sans-serif" font-size="15" font-weight="700" letter-spacing="3" fill="#5c625f">${esc(subtitle)}</text>
    <rect x="72" y="210" width="1456" height="3" rx="2" fill="url(#accentLine)"/>
    ${body}
    <rect x="72" y="1045" width="1456" height="105" rx="18" fill="#fffdf8" stroke="#c8c2b7"/>
    <text x="102" y="1085" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="3" fill="${accent}">${esc(brand.name)} / BRAND GUIDELINES</text>
    <text x="102" y="1122" font-family="Arial, sans-serif" font-size="13" letter-spacing="1.5" fill="#4c5351">${esc(brand.descriptor)}</text>
    <rect x="1110" y="1061" width="390" height="74" rx="14" fill="#fff"/>
    <image href="${logoUri}" x="1140" y="1071" width="330" height="54" preserveAspectRatio="xMidYMid meet"/>
  </svg>`;
}

function masterLogo(brand, logoUri) {
  const accent = brand.colours[0][1];
  const second = brand.colours[1][1];
  return `<g>
    <rect x="150" y="270" width="1300" height="700" rx="28" fill="#fffdf8" stroke="#bbb5aa" filter="url(#shadow)"/>
    <path d="M230 350h1140v540H230zM350 270v700M470 270v700M590 270v700M710 270v700M830 270v700M950 270v700M1070 270v700M1190 270v700M1310 270v700M150 430h1300M150 590h1300M150 750h1300" fill="none" stroke="#252b2a" stroke-opacity=".16"/>
    <circle cx="800" cy="620" r="330" fill="none" stroke="${accent}" stroke-opacity=".25" stroke-width="2"/><circle cx="800" cy="620" r="204" fill="none" stroke="${second}" stroke-opacity=".28" stroke-width="2"/>
    <rect x="300" y="455" width="1000" height="330" rx="24" fill="#fff" stroke="${accent}" stroke-dasharray="10 10"/>
    <image href="${logoUri}" x="410" y="535" width="780" height="170" preserveAspectRatio="xMidYMid meet"/>
    <text x="300" y="830" font-family="Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#505754">PROTECTED CLEAR SPACE</text>
    <text x="1170" y="830" text-anchor="end" font-family="Arial, sans-serif" font-size="13" font-weight="700" letter-spacing="2" fill="#505754">MASTER ARTWORK</text>
  </g>`;
}

function colourSystem(brand) {
  return `<g>${brand.colours.map(([name, hex, use], index) => {
    const x = 78 + index * 296;
    return `<g><rect x="${x}" y="285" width="252" height="520" rx="22" fill="${hex}" filter="url(#shadow)"/>
      <rect x="${x}" y="805" width="252" height="160" rx="0 0 22 22" fill="#fffdf8" stroke="#d3cdc2"/>
      <text x="${x + 24}" y="852" font-family="Arial, sans-serif" font-size="17" font-weight="800" fill="#111820">${esc(name)}</text>
      <text x="${x + 24}" y="892" font-family="monospace" font-size="22" font-weight="700" fill="#111820">${hex}</text>
      <text x="${x + 24}" y="928" font-family="Arial, sans-serif" font-size="13" fill="#5b615f">${esc(use)}</text></g>`;
  }).join("")}</g>`;
}

function typography(brand) {
  const accent = brand.colours[0][1];
  const second = brand.colours[1][1];
  return `<g>
    <rect x="80" y="275" width="580" height="690" rx="28" fill="#fffdf8" stroke="#c8c2b7" filter="url(#shadow)"/>
    <text x="130" y="495" font-family="Arial, sans-serif" font-size="240" font-weight="800" letter-spacing="-18" fill="${accent}">Aa</text>
    <text x="130" y="565" font-family="Arial, sans-serif" font-size="24" font-weight="800" letter-spacing="4" fill="#111820">${esc(brand.type[0])}</text>
    <text x="130" y="610" font-family="Arial, sans-serif" font-size="18" fill="#535a58">${esc(brand.type[1])}</text>
    <text x="130" y="665" font-family="Arial, sans-serif" font-size="15" letter-spacing="3" fill="#111820">ABCDEFGHIJKLMNOPQRSTUVWXYZ</text>
    <text x="130" y="705" font-family="Arial, sans-serif" font-size="15" letter-spacing="3" fill="#111820">abcdefghijklmnopqrstuvwxyz 0123456789</text>
    <text x="130" y="785" font-family="Arial, sans-serif" font-size="18" fill="${second}">${esc(brand.type[2])}</text>
    <rect x="700" y="275" width="820" height="690" rx="28" fill="#101820" filter="url(#shadow)"/>
    <text x="760" y="375" font-family="Arial, sans-serif" font-size="14" font-weight="700" letter-spacing="4" fill="${second}">TYPE HIERARCHY</text>
    <text x="760" y="505" font-family="Arial, sans-serif" font-size="86" font-weight="800" fill="#fffdf8">Headline 01</text>
    <text x="760" y="590" font-family="Arial, sans-serif" font-size="52" font-weight="700" fill="#fffdf8">Section title 02</text>
    <text x="760" y="675" font-family="Arial, sans-serif" font-size="28" font-weight="600" fill="#e7ece9">Subheading for clear structure</text>
    <text x="760" y="750" font-family="Arial, sans-serif" font-size="20" fill="#c4cbc8">Body copy remains calm, concise and easy to scan.</text>
    <path d="M760 825h640" stroke="${second}" stroke-width="4"/><text x="760" y="875" font-family="monospace" font-size="15" fill="#c4cbc8">86 / 90 · 52 / 58 · 28 / 36 · 20 / 30</text>
  </g>`;
}

function lockups(brand, logoUri) {
  const accent = brand.colours[0][1];
  return `<g>${["PRIMARY / LIGHT", "DIGITAL HEADER", "COMPACT SPACE", "MONO REFERENCE"].map((label, index) => {
    const x = 88 + (index % 2) * 730;
    const y = 285 + Math.floor(index / 2) * 350;
    const bg = index === 3 ? "#edf0ed" : "#fff";
    return `<g><rect x="${x}" y="${y}" width="690" height="285" rx="24" fill="${bg}" stroke="#c7c1b6" filter="url(#shadow)"/>
      <text x="${x + 28}" y="${y + 45}" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="3" fill="${accent}">${label}</text>
      <image href="${logoUri}" x="${x + 80}" y="${y + 85}" width="530" height="125" preserveAspectRatio="xMidYMid meet"/>
      <path d="M${x + 28} ${y + 238}h634" stroke="#d4cec3"/><text x="${x + 28}" y="${y + 263}" font-family="Arial, sans-serif" font-size="11" fill="#5c625f">USE SUPPLIED MASTER ARTWORK. NEVER STRETCH, RETYPE OR RECOLOUR.</text></g>`;
  }).join("")}</g>`;
}

function applications(brand, logoUri) {
  const accent = brand.colours[0][1];
  const second = brand.colours[1][1];
  const modules = [
    ["LETTERHEAD", 90, 285, 390, 650],
    ["BUSINESS CARD", 520, 285, 470, 300],
    ["SOCIAL PROFILE", 1030, 285, 480, 300],
    ["DIGITAL DASHBOARD", 520, 625, 990, 310],
  ];
  return `<g>${modules.map(([label, x, y, w, h], index) => `<g><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="22" fill="${index === 3 ? "#111820" : "#fff"}" stroke="#c7c1b6" filter="url(#shadow)"/>
    <text x="${x + 25}" y="${y + 38}" font-family="Arial, sans-serif" font-size="12" font-weight="700" letter-spacing="3" fill="${index === 3 ? second : accent}">${label}</text>
    ${index < 3 ? `<image href="${logoUri}" x="${x + 45}" y="${y + 70}" width="${w - 90}" height="${Math.min(110, h * .3)}" preserveAspectRatio="xMidYMid meet"/>` : ""}
    ${index === 0 ? `<path d="M140 500h290M140 540h290M140 580h220M140 760h290M140 800h260" stroke="#bbb5aa" stroke-width="5"/>` : ""}
    ${index === 1 ? `<rect x="560" y="480" width="390" height="8" fill="url(#accentLine)"/>` : ""}
    ${index === 2 ? `<circle cx="1270" cy="490" r="44" fill="${accent}" opacity=".14"/><path d="M1100 530h340" stroke="#bbb5aa" stroke-width="5"/>` : ""}
    ${index === 3 ? `<path d="M580 860V755l95-38 95 30 95-80 95 38 95-95 95 47 95-85 95 42" fill="none" stroke="${second}" stroke-width="8"/><rect x="580" y="880" width="250" height="14" rx="7" fill="${accent}"/><rect x="850" y="880" width="180" height="14" rx="7" fill="${second}"/><rect x="1050" y="880" width="370" height="14" rx="7" fill="#525a58"/>` : ""}
  </g>`).join("")}</g>`;
}

async function overview(brand, logo, out) {
  const reference = new URL(brand.reference, root);
  const source = sharp(fileURLToPath(reference)).resize(1600, 1067, { fit: "fill", kernel: sharp.kernel.lanczos3 });
  const logoMeta = await sharp(fileURLToPath(logo)).metadata();
  const logoWidth = brand.slug === "key-medsolutions-guide" ? 620 : 720;
  const logoHeight = Math.round(logoWidth * (logoMeta.height / logoMeta.width));
  const top = brand.slug === "key-medsolutions-guide" ? 165 : 150;
  const exactLogo = await sharp(fileURLToPath(logo)).resize({ width: logoWidth }).png().toBuffer();
  const board = await source.composite([{ input: exactLogo, left: Math.round((1600 - logoWidth) / 2), top }]).webp({ quality: 90, effort: 6 }).toBuffer();
  await sharp({ create: { width: 1600, height: 1200, channels: 4, background: "#faf7f0" } })
    .composite([{ input: board, left: 0, top: 67 }])
    .webp({ quality: 90, effort: 6 })
    .toFile(fileURLToPath(out));
}

for (const brand of brands) {
  const dir = new URL(`public/case-studies/${brand.slug}/`, root);
  await mkdir(dir, { recursive: true });
  const logoPath = new URL(brand.logo, root);
  const logoBytes = await sharp(fileURLToPath(logoPath)).png().toBuffer();
  const logoUri = `data:image/png;base64,${logoBytes.toString("base64")}`;
  await overview(brand, logoPath, new URL("page-01.webp", dir));
  const pages = [
    ["MASTER LOGO & CLEAR SPACE", "EXACT SOURCE ARTWORK / RESPONSIVE CONTROL", masterLogo(brand, logoUri)],
    ["COLOUR SYSTEM", "APPROVED DIGITAL PALETTE / ACCESSIBLE CONTRAST", colourSystem(brand)],
    ["TYPOGRAPHY", "READABLE HIERARCHY / CONSISTENT VOICE", typography(brand)],
    ["APPROVED LOCKUPS", "LIGHT, COMPACT AND DIGITAL CONTEXTS", lockups(brand, logoUri)],
    ["BRAND APPLICATIONS", "PRINT, SOCIAL AND PERFORMANCE TOUCHPOINTS", applications(brand, logoUri)],
  ];
  for (let index = 0; index < pages.length; index += 1) {
    const [title, subtitle, body] = pages[index];
    const svg = frame(brand, index + 2, title, subtitle, body, logoUri);
    await sharp(Buffer.from(svg)).resize(1600, 1200).webp({ quality: 90, effort: 6 }).toFile(fileURLToPath(new URL(`page-${String(index + 2).padStart(2, "0")}.webp`, dir)));
  }
}

console.log("Generated Key MedSolutions and KH RCM brand-guide carousel assets.");
