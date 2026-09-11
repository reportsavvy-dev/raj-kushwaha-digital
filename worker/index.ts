/** Cloudflare Worker entry point for the vinext-starter template. */
import { handleImageOptimization, DEFAULT_DEVICE_SIZES, DEFAULT_IMAGE_SIZES } from "vinext/server/image-optimization";
import handler from "vinext/server/app-router-entry";

interface Env {
  ASSETS: Fetcher;
  DB: D1Database;
  IMAGES: {
    input(stream: ReadableStream): {
      transform(options: Record<string, unknown>): {
        output(options: { format: string; quality: number }): Promise<{ response(): Response }>;
      };
    };
  };
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

const ALLOWED_METHODS = new Set(["GET", "HEAD", "OPTIONS"]);

type EdgeCacheStorage = CacheStorage & { default?: Cache };

function edgeCacheFor(request: Request, url: URL): Cache | undefined {
  const acceptsHtml = request.headers.get("accept")?.includes("text/html");
  const isDocument = request.method === "GET" && acceptsHtml && !url.search && request.headers.get("rsc") !== "1";
  if (!isDocument) return undefined;
  return (globalThis as typeof globalThis & { caches?: EdgeCacheStorage }).caches?.default;
}

const CONTENT_SECURITY_POLICY = [
  "default-src 'self'",
  "base-uri 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "frame-src 'none'",
  "form-action 'self' https://formsubmit.co",
  "script-src 'self' 'unsafe-inline' https://www.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "connect-src 'self' https://formsubmit.co https://www.googletagmanager.com https://*.google-analytics.com https://*.analytics.google.com",
  "media-src 'self'",
  "manifest-src 'self'",
  "worker-src 'self' blob:",
  "upgrade-insecure-requests",
].join("; ");

function secureResponse(response: Response): Response {
  const headers = new Headers(response.headers);
  headers.set("Content-Security-Policy", CONTENT_SECURITY_POLICY);
  headers.set("Cross-Origin-Opener-Policy", "same-origin");
  headers.set("Permissions-Policy", "camera=(), geolocation=(), microphone=(), payment=(), usb=(), browsing-topics=()");
  headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  headers.set("Strict-Transport-Security", "max-age=31536000; includeSubDomains");
  headers.set("X-Content-Type-Options", "nosniff");
  headers.set("X-Frame-Options", "DENY");
  headers.delete("X-Powered-By");

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

// Image security config. SVG sources with .svg extension auto-skip the
// optimization endpoint on the client side (served directly, no proxy).
// To route SVGs through the optimizer (with security headers), set
// dangerouslyAllowSVG: true in next.config.js and uncomment below:
// const imageConfig: ImageConfig = { dangerouslyAllowSVG: true };

const worker = {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);

    if (!ALLOWED_METHODS.has(request.method)) {
      return secureResponse(new Response("Method Not Allowed", {
        status: 405,
        headers: {
          Allow: "GET, HEAD, OPTIONS",
          "Cache-Control": "no-store",
          "Content-Type": "text/plain; charset=utf-8",
        },
      }));
    }

    if (url.pathname === "/_vinext/image") {
      const allowedWidths = [...DEFAULT_DEVICE_SIZES, ...DEFAULT_IMAGE_SIZES];
      const response = await handleImageOptimization(request, {
        fetchAsset: (path) => env.ASSETS.fetch(new Request(new URL(path, request.url))),
        transformImage: async (body, { width, format, quality }) => {
          const result = await env.IMAGES.input(body).transform(width > 0 ? { width } : {}).output({ format, quality });
          return result.response();
        },
      }, allowedWidths);
      return secureResponse(response);
    }

    const edgeCache = edgeCacheFor(request, url);
    const cached = await edgeCache?.match(request);
    if (cached) return cached;

    const response = secureResponse(await handler.fetch(request, env, ctx));
    if (edgeCache && response.ok && response.headers.get("content-type")?.startsWith("text/html") && !response.headers.has("set-cookie")) {
      response.headers.set("Cache-Control", "public, max-age=0, s-maxage=900");
      ctx.waitUntil(edgeCache.put(request, response.clone()).catch(() => undefined));
    }
    return response;
  },
};

export default worker;
