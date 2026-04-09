import { apps } from "@/lib/apps";

export default function sitemap() {
  const staticRoutes = [
    {
      url: "https://ittalab.com",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
    {
      url: "https://ittalab.com/apps",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: "https://ittalab.com/about",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: "https://ittalab.com/contact",
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  const appRoutes = apps.map((app) => ({
    url: `https://ittalab.com/apps/${app.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticRoutes, ...appRoutes];
}