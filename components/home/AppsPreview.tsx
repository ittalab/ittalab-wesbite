import React from "react";
import Link from "next/link";
import { apps } from "@/lib/apps";
import SectionLabel from "@/components/ui/SectionLabel";
import AppCard from "@/components/apps/AppCard";

export default function AppsPreview() {
  return (
    <section className="pt-24 pb-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl space-y-6">
          <SectionLabel>{"WHAT WE BUILD"}</SectionLabel>

          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight">
            Apps that solve one thing well
          </h2>

          <p className="text-lg text-muted max-w-xl">
            Each app has a clear purpose. No feature creep. No bloat.
          </p>
        </div>

        <div className="mt-12 sm:mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-7">
          {apps.map((app) => (
            <div className="h-full flex" key={app.slug}>
              <AppCard app={app} />
            </div>
          ))}
        </div>

        {apps.length > 3 && (
          <div className="mt-10 text-center">
            <Link
              href="/apps"
              className="text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-2"
            >
              <span className="font-medium">View all apps</span>
              <span>→</span>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}