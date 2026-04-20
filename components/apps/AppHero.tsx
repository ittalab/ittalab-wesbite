import React from "react";
import Link from "next/link";
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

  const renderStoreBadge = ({
    href,
    status,
    iconSrc,
    alt,
    ariaLabel,
  }: {
    href: string;
    status: App["appStoreStatus"];
    iconSrc: string;
    alt: string;
    ariaLabel: string;
  }) => {
    if (status === "live") {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={ariaLabel}
          className="flex-shrink-0 rounded-xl transition-opacity duration-150 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} alt={alt} style={{ height: 48, width: "auto", display: "block" }} />
        </a>
      );
    }

    return (
      <div className="flex min-w-0 flex-col gap-2" aria-disabled="true">
        <div className="flex-shrink-0 rounded-xl border border-[#2D2319] bg-[#231A15]/70 p-1 opacity-55">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={iconSrc} alt={alt} style={{ height: 48, width: "auto", display: "block" }} />
        </div>
        <span className="max-w-[220px] text-xs leading-5 text-foreground-muted">
          Currently not available. Check soon.
        </span>
      </div>
    );
  };

  return (
    <section className="w-full border-b border-border bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto w-full max-w-screen-xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col gap-10 lg:grid lg:grid-cols-[1fr_340px] lg:items-start lg:gap-12">
          <div className="flex w-full min-w-0 flex-col gap-8">
            <div className="flex items-center gap-3">
              <AppIcon emoji={app.icon} logo={app.logo} size="lg" isComingSoon={isComingSoon} />
              <Tag variant={app.status}>{isComingSoon ? "Coming Soon" : "LIVE"}</Tag>
            </div>

            <div className="flex flex-col gap-4">
              <h1 className="font-display text-4xl font-bold leading-[1.02] tracking-tight text-foreground sm:text-5xl lg:text-7xl">
                {app.name}
              </h1>
              <p className="font-display text-lg font-semibold text-primary sm:text-xl">
                {app.tagline}
              </p>
              <p className="max-w-lg text-base leading-7 text-foreground/75">
                {app.description}
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-start gap-3">
                {renderStoreBadge({
                  href: app.appStoreUrl,
                  status: app.appStoreStatus,
                  iconSrc: "/icons/appstore.svg",
                  alt: "Download on the App Store",
                  ariaLabel: "Download on the App Store",
                })}
                {renderStoreBadge({
                  href: app.playStoreUrl,
                  status: app.playStoreStatus,
                  iconSrc: "/icons/playstore.svg",
                  alt: "Get it on Google Play",
                  ariaLabel: "Get it on Google Play",
                })}
              </div>

              <CTAButton
                href={app.websiteUrl || "https://ittalab.com/coming-soon"}
                variant="ghost"
                external
                className="flex h-12 w-auto flex-shrink-0 items-center gap-2 self-start rounded-xl px-5 text-sm"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/icons/web.svg" alt="" aria-hidden="true" style={{ height: 20, width: 20, display: "block" }} />
                Visit
              </CTAButton>
            </div>

            <div className="flex flex-col gap-4 pb-20 lg:hidden">
              <span className="font-sans text-xs uppercase tracking-widest text-foreground-muted">
                Core Features
              </span>
              <ul className="flex flex-col gap-4">
                {features.map((feature, idx) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 font-mono text-[10px] font-semibold text-primary">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm leading-relaxed text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className={cn(
              "hidden w-full overflow-hidden rounded-2xl border border-[#2D2319] shadow-lg lg:block",
              isFanPitch ? "bg-transparent" : "bg-[#231A15]"
            )}
          >
            <div className="border-b border-[#2D2319] px-6 pb-4 pt-6">
              <span className="font-sans text-xs uppercase tracking-widest text-foreground-muted">
                Core Features
              </span>
            </div>

            <ul className="divide-y divide-[#2D2319]">
              {features.map((feature, idx) => (
                <li
                  key={feature}
                  className="group flex items-start gap-4 px-6 py-5 transition-colors duration-150 hover:bg-[#2A1F17]"
                >
                  <span
                    className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-md border border-primary/20 bg-primary/10 font-mono text-xs font-semibold text-primary"
                    aria-hidden="true"
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-foreground/75 transition-colors duration-150 group-hover:text-foreground/90">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {app.features.length > 6 && (
              <div className="border-t border-[#2D2319] px-6 py-3">
                <span className="text-xs text-foreground-muted">
                  +{app.features.length - 6} more features
                </span>
              </div>
            )}
          </div>
        </div>

        {isFanPitch ? (
          <div className="mt-40 border-t border-border/50 pt-12 text-sm sm:mt-48 sm:pt-14 lg:mt-56 lg:pt-16">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
              <Link
                className="font-medium text-cream underline-offset-4 transition-colors hover:text-primary hover:underline"
                href="/apps/info/fanpitch/privacypolicy"
              >
                Privacy Policy
              </Link>
              <Link
                className="font-medium text-cream underline-offset-4 transition-colors hover:text-primary hover:underline"
                href="/apps/info/fanpitch/tos"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
