import React from "react";
import type { Metadata } from "next";
import { apps } from "@/lib/apps";
import { notFound } from "next/navigation";
import AppHero from "@/components/apps/AppHero";

type PageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return apps
    .filter((app) => app.status === "live")
    .map((app) => ({ slug: app.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: PageParams;
}): Promise<Metadata> {
  const { slug } = await params;
  const app = apps.find((entry) => entry.slug === slug && entry.status === "live");

  if (!app) {
    return {};
  }

  return {
    title: `${app.name} — Ittalab`,
    description: app.description,
  };
}

export default async function AppInfoPage({
  params,
}: {
  params: PageParams;
}) {
  const { slug } = await params;
  const app = apps.find((entry) => entry.slug === slug && entry.status === "live");

  if (!app) {
    notFound();
  }

  return (
    <main className="py-12 min-h-screen bg-background">
      <AppHero app={app} />
    </main>
  );
}
