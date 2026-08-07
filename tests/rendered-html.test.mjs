import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

async function render(pathname = "/") {
  return worker.fetch(
    new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("home page renders verified portfolio proof", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);
  const html = await response.text();

  assert.match(html, /PORTFOLIO BACKED CASE STUDIES/);
  assert.match(html, /Silverspace Inc/);
  assert.match(html, /Key MedSolutions/);
  assert.match(html, /Vizva Consultancy Services/);
  assert.match(html, /CLIENT FEEDBACK/);
  assert.match(html, /href="\/work"/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape/i);
  assert.doesNotMatch(html, /[—–]/);
});

test("work index renders all portfolio case routes", async () => {
  const response = await render("/work");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /Proof before/);
  assert.match(html, /\/work\/silverspace-organic-search-linkedin-growth/);
  assert.match(html, /\/work\/key-medsolutions-search-authority/);
  assert.match(html, /\/work\/vizva-linkedin-organic-growth/);
  assert.match(html, /historical rankings/i);
  assert.match(html, /rel="canonical" href="https:\/\/rajkushwahadigital\.com\/work"/);
});

test("case page exposes evidence, attribution and structured data", async () => {
  const response = await render("/work/silverspace-organic-search-linkedin-growth");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /15,750/);
  assert.match(html, /Google Search Console: 1\.56K to 3\.19K/);
  assert.match(html, /Akash Dabhi/);
  assert.match(html, /VERIFIED PORTFOLIO SOURCE/);
  assert.match(html, /"@type":"Article"/);
  assert.match(html, /silverspace-search-evidence\.webp/);
  assert.doesNotMatch(html, /current ranking guarantee/i);
});

test("service page separates real work from planning examples", async () => {
  const response = await render("/services/seo-aeo-geo-sxo");
  assert.equal(response.status, 200);
  const html = await response.text();

  assert.match(html, /RELATED CLIENT RESULTS/);
  assert.match(html, /PLANNING EXAMPLE \/ CONCEPT/);
  assert.match(html, /This is not client work/);
  assert.match(html, /Planning benchmark, not client feedback/);
});

test("sitemap includes work and case study URLs", async () => {
  const response = await render("/sitemap.xml");
  assert.equal(response.status, 200);
  const xml = await response.text();
  assert.match(xml, /https:\/\/rajkushwahadigital\.com\/work<\/loc>/);
  assert.match(xml, /https:\/\/rajkushwahadigital\.com\/work\/key-medsolutions-search-authority/);
});

