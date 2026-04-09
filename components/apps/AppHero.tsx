import React from "react";
import type { App } from "@/lib/apps";
import { cn } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import CTAButton from "@/components/ui/CTAButton";
import AppIcon from "./AppIcon";

interface AppHeroProps {
  app: App;
}

const BADGE_HEIGHT = 56; // single source of truth for all three buttons

export default function AppHero({ app }: AppHeroProps) {
  const isComingSoon = app.status === "in-development";
  const isFanPitch = app.slug === "fanpitch";
  const iosUrl = app.appStoreUrl || "https://apps.apple.com/app/id0000000000";
  const androidUrl = app.playStoreUrl || "https://play.google.com/store/apps/details?id=com.placeholder";
  const webUrl = app.websiteUrl || "https://ittalab.com/coming-soon";

  const features = app.features.slice(0, 6);

  return (
    <section className="py-16 border-b border-border bg-background">
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_360px] items-start">

          {/* Left: App Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <AppIcon emoji={app.icon} logo={app.logo} size="lg" isComingSoon={isComingSoon} />
              <Tag variant={app.status}>{isComingSoon ? "Coming Soon" : app.status}</Tag>
            </div>

            <div className="space-y-4 max-w-2xl">
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-foreground">
                {app.name}
              </h1>
              <p className="font-display font-semibold text-xl md:text-2xl text-primary">
                {app.tagline}
              </p>
              <p className="text-lg md:text-xl text-foreground/80 leading-relaxed">
                {app.description}
              </p>
            </div>

            {/* Download Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">

              {/* App Store badge */}

              <a
                href={iosUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download on the App Store"
                className="rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:opacity-80 transition-opacity duration-150 flex items-center justify-center"
                style={{ minWidth: 200, width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, background: 'none', border: 'none' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/appstore.svg"
                  alt="Download on the App Store"
                  style={{ width: 200, height: 'auto', display: 'block' }}
                />
              </a>

              {/* Google Play badge */}
              <a
                href={androidUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Get it on Google Play"
                className="rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:opacity-80 transition-opacity duration-150 flex items-center justify-center"
                style={{ minWidth: 200, width: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0, background: 'none', border: 'none' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/playstore.svg"
                  alt="Get it on Google Play"
                  style={{ width: 200, height: 'auto', display: 'block' }}
                />
              </a>

              {/* Web App button — override CTAButton height via inline style */}
              <CTAButton
                href={webUrl}
                variant="ghost"
                external
                className="!h-[56px] !min-w-[200px] !text-lg !px-8 !rounded-xl"
                style={{ height: BADGE_HEIGHT, minWidth: 200, width: 200, fontSize: 22, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/icons/web.svg"
                  alt=""
                  aria-hidden="true"
                  style={{ height: 28, width: 28, display: "block", marginRight: 12 }}
                />
                Visit
              </CTAButton>

            </div>
          </div>

          {/* Right: Features Card */}
          <div
            className={cn(
              "border border-[#2D2319] rounded-2xl overflow-hidden shadow-lg",
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
                  className="flex items-start gap-4 px-6 py-4 group hover:bg-[#2A1F17] transition-colors duration-150"
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