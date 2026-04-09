import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/home/HeroSection";
import AppsPreview from "@/components/home/AppsPreview";
import ManifestoStrip from "@/components/home/ManifestoStrip";

export const metadata: Metadata = {
  title: "Ittalab — App Studio",
  description:
    "From Concept to App Store.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AppsPreview />
      <ManifestoStrip />
    </>
  );
}