import React from "react";

interface TagProps {
  variant: "in-development" | "beta" | "live";
  children?: React.ReactNode;
}

const tagLabels = {
  "in-development": "Coming Soon",
  beta: "Beta",
  live: "LIVE",
};

export default function Tag({ variant, children }: TagProps) {
  const baseStyles =
    "px-3 py-1 rounded-full text-xs font-sans font-medium uppercase tracking-wide inline-flex items-center gap-1.5";

  const variantStyles = {
    "in-development":
      "bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/30",
    beta: "bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/30",
    live: "bg-[#16A34A]/18 text-[#F5F5DC] border border-[#16A34A]/55 shadow-[0_0_0_1px_rgba(22,163,74,0.25),0_4px_14px_rgba(22,163,74,0.28)] font-semibold",
  };

  const displayText = children || tagLabels[variant];

  return (
    <span className={`${baseStyles} ${variantStyles[variant]}`}>
      {variant === "live" && (
        <span
          className="inline-block w-1.5 h-1.5 rounded-full bg-[#16A34A] shrink-0"
          aria-hidden="true"
        />
      )}
      <span>{displayText}</span>
    </span>
  );
}