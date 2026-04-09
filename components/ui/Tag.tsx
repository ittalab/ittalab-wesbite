import React from "react";

interface TagProps {
  variant: "in-development" | "beta" | "live";
  children?: React.ReactNode;
}

// User-friendly display labels
const tagLabels = {
  "in-development": "Coming Soon",
  beta: "Beta",
  live: "Available Now",
};

export default function Tag({ variant, children }: TagProps) {
  const baseStyles =
    "px-3 py-1 rounded-full text-xs font-sans font-medium uppercase tracking-wide inline-flex items-center";

  const variantStyles = {
    "in-development":
      "bg-[#EA580C]/10 text-[#EA580C] border border-[#EA580C]/30",
    beta: "bg-[#16A34A]/10 text-[#16A34A] border border-[#16A34A]/30",
    live: "bg-[#F5F5DC]/5 text-[#F5F5DC] border border-[#F5F5DC]/20",
  };

  const displayText = children || tagLabels[variant];

  return <span className={`${baseStyles} ${variantStyles[variant]}`}>{displayText}</span>;
}
