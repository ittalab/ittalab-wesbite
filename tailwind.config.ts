import type { Config } from "tailwindcss";

export default {
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)"],
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      colors: {
            background: "#181818",        // Dark black background
        surface: "#231A15",           // Slightly lighter brown (elevated elements)
        foreground: "#1C1410",         // Dark text (not pure black)
        muted: "#9C8A7A",             // Muted tan (secondary text)
        border: "#2D2319",            // Subtle brown border
        primary: {
          DEFAULT: "#EA580C",         // Orange bricks (brand identity)
          hover: "#C2410C",           // Darker orange on hover
        },
        success: "#16A34A",           // Green for positive states
        warning: "#DC2626",           // Red for warnings
      },
      container: {
        center: true,
        padding: { DEFAULT: "1.5rem", lg: "4rem" },
        screens: { sm: "640px", md: "768px", lg: "1024px", xl: "1280px" },
      },
    },
  },
} satisfies Config;