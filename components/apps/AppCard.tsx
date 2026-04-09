import React from "react";
import Link from "next/link";
import type { App } from "@/lib/apps";
import { cn } from "@/lib/utils";
import Tag from "@/components/ui/Tag";
import AppIcon from "./AppIcon";

interface AppCardProps {
  app: App;
}

export default function AppCard({ app }: AppCardProps) {
  const isComingSoon = app.status === "in-development";

  const isLive = app.status === "live";
  const cardClasses = cn(
    isLive
      ? "bg-[#181818] border border-[#2D2319]"
      : "bg-gradient-to-br from-[#181818] via-[#232526] to-[#EA580C]/20 border border-[#2D2319]",
    "rounded-xl p-6 sm:p-7 lg:p-8 w-full min-h-[280px] sm:min-h-[300px] lg:min-h-[340px] flex flex-col gap-5 sm:gap-6 lg:gap-8 overflow-hidden transition-all duration-300",
    isLive && "hover:border-[#EA580C]/50 hover:translate-y-[-4px] hover:shadow-2xl",
    isComingSoon && "app-card--coming-soon opacity-80 cursor-not-allowed"
  );

  const cardBody = (
    <div className={cardClasses}>
      <div className="shrink-0 mb-1 sm:mb-2 lg:mb-3">
        <AppIcon emoji={app.icon} logo={app.logo} size="sm" isComingSoon={isComingSoon} />
      </div>

      <div className="space-y-4 flex-1">
        <h3 className="text-xl lg:text-2xl font-display font-bold text-[#F5F5DC] leading-tight">
          {app.name}
        </h3>

        <p
          className={cn(
            "text-[15px] sm:text-base text-[#F5F5DC]/80 leading-relaxed",
            isComingSoon && "opacity-70"
          )}
          style={{
            display: "-webkit-box",
            WebkitBoxOrient: "vertical",
            WebkitLineClamp: 2,
            overflow: "hidden",
          }}
        >
          {app.tagline}
        </p>
      </div>

      <div className="min-h-[32px] pt-1">
        {isComingSoon && <Tag variant={app.status}>Coming Soon</Tag>}
      </div>

      <div
        className={cn(
          "mt-auto flex items-center transition-colors",
          isLive ? "text-[#EA580C] group-hover:text-[#C2410C]" : "text-[#F5F5DC]/35"
        )}
      >
        <span className="text-xs sm:text-sm font-medium mr-2">
          {isComingSoon ? "Coming Soon" : "Open app"}
        </span>
        <span className={cn("transform transition-transform", isLive && "group-hover:translate-x-1")}>→</span>
      </div>
    </div>
  );

  if (!isLive) {
    return <div className="block w-full h-full" aria-disabled="true">{cardBody}</div>;
  }

  return (
    <Link href={`/apps/info/${app.slug}`} className="group block w-full h-full">
      {cardBody}
    </Link>
  );
}