// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/apps/salesTracker",
        destination: "/apps/salesTrack",
        permanent: true,
      },
      {
        source: "/apps/salestracker",
        destination: "/apps/salesTrack",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [
    {
      source: "/(.*)",
      headers: [
        { key: "X-Frame-Options", value: "DENY" },
        { key: "X-Content-Type-Options", value: "nosniff" },
      ],
    },
  ],
};

export default nextConfig;
