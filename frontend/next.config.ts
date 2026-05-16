import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static export to the `out/` directory. No SSR, no API routes.
  output: "export",
  images: {
    // next/export cannot run the Image Optimization API at runtime.
    // We use plain <img> tags with pre-sized static assets under `public/`.
    unoptimized: true,
  },
  // Emit `out/about-us/index.html` style paths so Netlify serves clean URLs.
  trailingSlash: true,
};

export default nextConfig;
