"use client";

import type { CSSProperties } from "react";
import CTAButton from "@/components/ui/CTAButton";

const ROWS = 6;
const COLS = 10;

// Bricklaying order: bottom row first, left to right, then next row up
// Each brick drops in from above its final position
const getBrickDelay = (row: number, col: number): number => {
  const invertedRow = ROWS - 1 - row; // row 5 (bottom) = invertedRow 0 → animates first
  return (invertedRow * COLS + col) * 85; // 85ms between each brick
};

const BRICK_COLORS = [
  "#C1440E", // requested brick color
];

const getBrickColor = (row: number, col: number): string => {
  // Pseudo-random but deterministic color per brick
  return BRICK_COLORS[(row * 3 + col * 7) % BRICK_COLORS.length];
};

const headline = "From Concept to App Store.";
const words = headline.match(/[^\s]+/g) || [];
const totalHeadlineDuration = words.length * 0.12 + 0.35; // last word delay + its own duration

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* ── LEFT: Text ── */}
          <div className="space-y-6">
            <p
              className="text-xs font-sans font-medium tracking-widest uppercase"
              style={{
                color: "#EA580C",
                opacity: 0,
                animation: "brickFadeIn 0.4s ease both",
                animationDelay: "0s",
              }}
            >
              APP STUDIO
            </p>

            {/* Brick-drop headline */}
            <h1
              aria-label={headline}
              className="font-display font-bold leading-[0.95] tracking-tight"
              style={{
                fontSize: "clamp(40px, 7vw, 80px)",
                color: "#F5F5DC",
                display: "block",
              }}
            >
              {words.map((word, i) => (
                <span
                  key={i}
                  data-brick-word
                  style={{
                    display: "inline-block",
                    opacity: 0,
                    animation: "brickDrop 0.38s cubic-bezier(0.22, 1, 0.36, 1) both",
                    animationDelay: `${i * 0.12}s`,
                    marginRight: i !== words.length - 1 ? "0.25em" : "0",
                  }}
                >
                  {word}
                </span>
              ))}
            </h1>

            {/* Subtext — fades in after last word lands */}
            <p
              className="font-sans leading-relaxed max-w-xl"
              style={{
                fontSize: "clamp(16px, 2vw, 20px)",
                color: "#A89880",
                opacity: 0,
                animation: "brickFadeIn 0.45s ease both",
                animationDelay: `${totalHeadlineDuration + 0.05}s`,
              }}
            >
              Ittalab builds mobile apps with clear scope and zero compromise on quality.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-wrap gap-4 pt-4"
              style={{
                opacity: 0,
                animation: "brickFadeIn 0.45s ease both",
                animationDelay: `${totalHeadlineDuration + 0.2}s`,
              }}
            >
              <CTAButton href="/apps" variant="primary">
                See what we build
              </CTAButton>
              <CTAButton href="/about" variant="secondary">
                Our approach
              </CTAButton>
            </div>
          </div>

          {/* ── RIGHT: Brick wall ── */}
          <div className="flex justify-center items-center">
            <div
              style={{
                position: "relative",
                // Each brick: 44px wide, 22px tall, 3px gap
                width: `${COLS * 47 + 23}px`, // +23 for odd-row offset
                height: `${ROWS * 25}px`,
              }}
            >
              {Array.from({ length: ROWS }).map((_, rowIndex) =>
                Array.from({ length: COLS }).map((_, colIndex) => {
                  const isOddRow = rowIndex % 2 === 1;
                  const left = colIndex * 47 + (isOddRow ? 23 : 0);
                  const top = rowIndex * 25;
                  const delay = getBrickDelay(rowIndex, colIndex);
                  const color = getBrickColor(rowIndex, colIndex);

                  return (
                    <div
                      key={`${rowIndex}-${colIndex}`}
                      style={
                        {
                          position: "absolute",
                          left,
                          top,
                          width: "44px",
                          height: "22px",
                          borderRadius: "2px",
                          backgroundColor: color,
                          // Mortar gap effect via box-shadow inset
                          boxShadow:
                            "inset 0 0 0 1px rgba(0,0,0,0.25), 0 1px 3px rgba(0,0,0,0.4)",
                          opacity: 0,
                          animation: "brickLay 0.3s cubic-bezier(0.22, 1, 0.36, 1) both",
                          animationDelay: `${delay}ms`,
                          // CSS custom property for potential future use
                          "--brick-delay": `${delay}ms`,
                        } as CSSProperties
                      }
                    />
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>

      {/* All keyframes in one place */}
      <style>{`
        @keyframes brickDrop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          60% {
            opacity: 1;
            transform: translateY(4px);
          }
          80% {
            transform: translateY(-1px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes brickLay {
          0% {
            opacity: 0;
            transform: translateY(-14px) scaleX(0.85);
          }
          55% {
            opacity: 1;
            transform: translateY(3px) scaleX(1.02);
          }
          80% {
            transform: translateY(-1px) scaleX(1);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scaleX(1);
          }
        }

        @keyframes brickFadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }

        @media (prefers-reduced-motion: reduce) {
          [data-brick-word],
          [data-brick-word] {
            animation: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>
    </section>
  );
}