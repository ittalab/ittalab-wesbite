import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Ittalab",
  description: "Independent app studio. From Concept to App Store.",
};

export default function AboutPage() {
  return (
    <main className="pt-8 sm:pt-10 pb-20 sm:pb-24 min-h-screen border-t border-border flex items-start justify-center">
      <div className="container mx-auto px-6 lg:px-16 max-w-3xl w-full text-center">
        <div className="space-y-6 flex flex-col items-center">
          <p className="text-xs text-primary font-sans font-medium tracking-widest uppercase">
            ABOUT ITTALAB
          </p>

          <h1 className="max-w-2xl text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Built by one person. No investors. No bullshit.
          </h1>

          <div className="max-w-2xl space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p className="mx-auto">
              Ittalab is one person building apps that solve specific problems. No team. No funding. No pitch deck. Just work.
            </p>

            <p className="mx-auto">
              Every app here exists because someone needed it — including me. If it doesn&apos;t solve a real problem, it doesn&apos;t get built. If it needs ten features to be useful, it doesn&apos;t get built.
            </p>

            <p className="mx-auto">
              There&apos;s no roadmap. No backlog of &apos;nice-to-haves.&apos; When an idea is worth building, it gets built. When it&apos;s done, it ships. Everything else is noise.
            </p>

            <p className="mx-auto">
              Apps are like bricks — each one serves a purpose, placed deliberately. Stack them right and you build something that lasts. Rush it or add too many, and the whole thing falls apart.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-border pt-8 flex flex-col items-center text-center">
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Want to chat?
          </h2>
          <p className="text-base text-muted mb-4">
            Reach out:{" "}
            <Link
              href="mailto:support@ittalab.com"
              className="text-primary hover:text-primary-hover transition underline"
            >
              support@ittalab.com
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}