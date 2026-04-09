import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { notFound } from "next/navigation";
import AppHero from "@/components/apps/AppHero";

export const metadata: Metadata = {
  title: "FanPitch — Ittalab",
  description: "FanPitch is a football prediction app where you compete with friends in private leagues.",
};

export default function FanPitchPage() {
  const app = apps.find((entry) => entry.slug === "fanpitch");

  if (!app) {
    notFound();
  }

  return (
    <main className="py-12 min-h-screen bg-background">
      <AppHero app={app} />
    </main>
  );
}
