const canonicalOrigin = "https://www.rajkushwahadigital.com";
const key = "508431f0a52f07e8a2bc6a73030e175f";
const sitemapUrl = `${canonicalOrigin}/sitemap.xml`;

const sitemapResponse = await fetch(sitemapUrl, {
  headers: { "user-agent": "Raj-Kushwaha-Digital-IndexNow/1.0" },
});

if (!sitemapResponse.ok) {
  throw new Error(`Could not read sitemap: ${sitemapResponse.status}`);
}

const sitemap = await sitemapResponse.text();
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
  .map((match) => match[1])
  .filter((url) => url.startsWith(`${canonicalOrigin}/`) || url === `${canonicalOrigin}/`);

if (!urlList.length) {
  throw new Error("The canonical sitemap contained no URLs.");
}

const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: new URL(canonicalOrigin).host,
    key,
    keyLocation: `${canonicalOrigin}/${key}.txt`,
    urlList,
  }),
});

if (![200, 202].includes(response.status)) {
  throw new Error(`IndexNow submission failed: ${response.status} ${await response.text()}`);
}

console.log(`IndexNow accepted ${urlList.length} canonical URLs (${response.status}).`);
