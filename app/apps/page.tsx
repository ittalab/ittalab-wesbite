import React from "react";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import AppCard from "@/components/apps/AppCard";
import SectionLabel from "@/components/ui/SectionLabel";

export const metadata: Metadata = {
  title: "Apps — Ittalab",
  description: "Independent app studio portfolio. Some are live. Some are coming soon.",
};

export default function AppsPage() {
  return (
    <main className="py-24 min-h-screen">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="space-y-4 max-w-2xl">
          <SectionLabel>{"APP PORTFOLIO"}</SectionLabel>

          <h1 className="text-5xl lg:text-6xl font-display font-bold text-foreground">
            Everything we&apos;ve built
          </h1>

          <p className="text-lg text-muted">
            Some are live. Some are coming soon. All solve real problems.
          </p>
        </div>

        <div className="mt-16 lg:mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>

        {apps.length > 3 && (
          <div className="mt-12 text-center">
            <a
              href="/apps"
              className="text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2"
            >
              <span className="font-medium">View all apps</span>
              <span>→</span>
            </a>
          </div>
        )}
      </div>
    </main>
  );
}