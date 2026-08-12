import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // In production the /careers/<slug> URL is rewritten to /careers-view.html
  // by Netlify (see netlify.toml). This mirrors that rewrite for `next dev`.
  ...(isDev
    ? {
        rewrites: async () => [
          { source: "/careers/:slug", destination: "/careers-view" },
        ],
      }
    : {}),
};

export default nextConfig;
