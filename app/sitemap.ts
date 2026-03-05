import { MetadataRoute } from "next";
import { routing } from "@/i18n/routing";

const baseUrl = "https://primebusinessmen.ae";

const paths = [
  "",
  "/services",
  "/administrative-apparatus",
  "/brand-identity",
  "/execution",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of routing.locales) {
    for (const path of paths) {
      entries.push({
        url: `${baseUrl}/${locale}${path}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.8,
      });
    }
  }

  return entries;
}
