import React from "react";
import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  external?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
  style,
}: CTAButtonProps) {

  const baseStyles = [
    "font-sans font-semibold text-base",
    "px-6 min-w-[140px] h-12",
    "rounded-xl",
    "transition-all duration-200",
    "inline-flex items-center justify-center gap-2",
    "focus:outline-none focus:ring-2 focus:ring-[#EA580C]/60 focus:ring-offset-2",
  ].join(" ");

  const primaryStyles = [
    "bg-[#EA580C] text-[#1C1410]",
    "hover:bg-[#C2410C] hover:shadow-lg hover:-translate-y-0.5",
    "active:translate-y-0",
    "border border-transparent",
  ].join(" ");

  const secondaryStyles = [
    "bg-transparent text-[#F5F5DC] border border-[#EA580C]",
    "hover:bg-[#EA580C]/10 hover:border-[#C2410C]",
  ].join(" ");

  const ghostStyles = [
    "bg-transparent text-[#EA580C] border border-[#EA580C]",
    "hover:bg-[#EA580C]/10 hover:border-[#C2410C]",
  ].join(" ");

  let variantStyles = primaryStyles;
  if (variant === "secondary") variantStyles = secondaryStyles;
  if (variant === "ghost") variantStyles = ghostStyles;

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    const isExternal = external || href.startsWith("http");

    if (isExternal) {
      return (
        <a
          href={href}
          className={combinedClasses}
          style={style}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={combinedClasses} style={style}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={combinedClasses} style={style}>
      {children}
    </button>
  );
}