import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    tsconfigPath: "tsconfig.vercel.json",
  },
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "rajkushwahadigital.com" }],
        destination: "https://www.rajkushwahadigital.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
