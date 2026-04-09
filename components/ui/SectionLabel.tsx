import React from "react";

interface SectionLabelProps {
  children: string;
}

export default function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="block text-xs font-sans font-medium text-[#EA580C] uppercase tracking-[0.2em]">
      {children}
    </p>
  );
}