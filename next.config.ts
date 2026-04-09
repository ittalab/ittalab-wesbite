// next.config.ts
import type { NextConfig } from "next"
 
const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  headers: async () => [{
    source: "/(.*)",
    headers: [
      { key: "X-Frame-Options", value: "DENY" },
      { key: "X-Content-Type-Options", value: "nosniff" },
    ]
  }]
}
 
export default nextConfig
