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
            Focused apps, built with intent
          </h1>

          <div className="max-w-2xl space-y-6 text-lg text-foreground/90 leading-relaxed">
            <p className="mx-auto">
              Ittalab builds focused apps that are simple, useful, and designed with intent. There&apos;s no funding or external direction-just direct execution from idea to release.
            </p>

            <p className="mx-auto">
              Every app exists for a clear reason. It either solves a real need or creates a better way to play, explore, or connect. If it doesn&apos;t feel necessary or enjoyable, it doesn&apos;t get built.
            </p>

            <p className="mx-auto">
              Ideas aren&apos;t stored in long roadmaps or backlogs. They&apos;re explored when they make sense and shipped when they&apos;re ready. The focus is on building, refining, and releasing-not overplanning.
            </p>

            <p className="mx-auto">
              Each app stands on its own as a small, intentional experience. Over time, they form a growing collection of useful and enjoyable products.
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