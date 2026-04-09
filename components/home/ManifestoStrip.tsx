import React from "react";
import SectionLabel from "@/components/ui/SectionLabel";

export default function ManifestoStrip() {
  return (
    <section className="py-20 lg:py-24 border-t border-border">
      <div className="container mx-auto px-6 lg:px-16">
        <div className="max-w-2xl space-y-5">
          <SectionLabel>{"HOW WE WORK"}</SectionLabel>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground leading-tight max-w-xl">
            Independence means no compromise
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-2xl">
            We aren&apos;t funded. We don&apos;t have investors to please or growth targets to hit. That means every app is built the way it should be — focused, useful, and respectful of your time.
          </p>
        </div>
      </div>
    </section>
  );
}