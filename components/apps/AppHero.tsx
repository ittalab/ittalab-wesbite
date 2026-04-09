import React from "react";
import type { App } from "@/lib/apps";
import { cn } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import CTAButton from "@/components/ui/CTAButton";
import AppIcon from "./AppIcon";

interface AppHeroProps {
  app: App;
}

export default function AppHero({ app }: AppHeroProps) {
  const isComingSoon = app.status === "in-development";
  const isFanPitch = app.slug === "fanpitch";

  const features = app.features.slice(0, 6);

  return (
    <section className="py-16 sm:py-20 lg:py-28 border-b border-border bg-background w-full">
      <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Two-column only on lg+ */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_340px] lg:gap-12 lg:items-start gap-10">

          {/* Left: App Info */}
          <div className="flex flex-col gap-8 w-full min-w-0">

            {/* Icon + Tag row */}
            <div className="flex items-center gap-3">
              <AppIcon emoji={app.icon} logo={app.logo} size="lg" isComingSoon={isComingSoon} />
              <Tag variant={app.status}>{isComingSoon ? "Coming Soon" : app.status}</Tag>
            </div>

            {/* Text block */}
            <div className="flex flex-col gap-4">
              <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-7xl leading-[1.02] tracking-tight text-foreground">
                {app.name}
              </h1>
              <p className="font-display font-semibold text-lg sm:text-xl text-primary">
                {app.tagline}
              </p>
              <p className="text-base leading-7 text-foreground/75 max-w-lg">
                {app.description}
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-col gap-3">
              <div className="flex flex-row gap-3">
                <a
                  href={app.appStoreUrl || "https://apps.apple.com/app/id0000000000"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Download on the App Store"
                  className="flex-shrink-0 hover:opacity-80 transition-opacity duration-150 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/appstore.svg" alt="Download on the App Store" style={{ height: 48, width: "auto", display: "block" }} />
                </a>
                <a
                  href={app.playStoreUrl || "https://play.google.com/store/apps/details?id=com.placeholder"}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Get it on Google Play"
                  className="flex-shrink-0 hover:opacity-80 transition-opacity duration-150 rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/icons/playstore.svg" alt="Get it on Google Play" style={{ height: 48, width: "auto", display: "block" }} />
                </a>
              </div>
              <CTAButton
                href={app.websiteUrl || "https://ittalab.com/coming-soon"}
                variant="ghost"
                external
                className="flex-shrink-0 h-12 w-auto self-start px-5 rounded-xl text-sm flex items-center gap-2"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/web.svg" alt="" aria-hidden="true" style={{ height: 20, width: 20, display: "block" }} />
                Visit
              </CTAButton>
            </div>

            {/* Mobile-only: features as simple list */}
            <div className="lg:hidden flex flex-col gap-4">
              <span className="text-xs text-foreground-muted tracking-widest uppercase font-sans">
                Core Features
              </span>
              <ul className="flex flex-col gap-4">
                {features.map((feature, idx) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-5 h-5 flex items-center justify-center rounded-md bg-primary/10 border border-primary/20 text-primary font-mono text-[10px] font-semibold mt-0.5">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm text-foreground/70 leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Right: Features Card — desktop only */}
          <div
            className={cn(
              "hidden lg:block border border-[#2D2319] rounded-2xl overflow-hidden shadow-lg w-full",
              isFanPitch ? "bg-transparent" : "bg-[#231A15]"
            )}
          >
            <div className="px-6 pt-6 pb-4 border-b border-[#2D2319]">
              <span className="font-sans text-xs text-foreground-muted tracking-widest uppercase">
                Core Features
              </span>
            </div>

            <ul className="divide-y divide-[#2D2319]">
              {features.map((feature, idx) => (
                <li
                  key={feature}
                  className="flex items-start gap-4 px-6 py-5 group hover:bg-[#2A1F17] transition-colors duration-150"
                >
                  <span
                    className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-md bg-primary/10 border border-primary/20 text-primary font-mono text-xs font-semibold mt-0.5"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm text-foreground/75 leading-relaxed group-hover:text-foreground/90 transition-colors duration-150">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {app.features.length > 6 && (
              <div className="px-6 py-3 border-t border-[#2D2319]">
                <span className="text-xs text-foreground-muted">
                  +{app.features.length - 6} more features
                </span>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}