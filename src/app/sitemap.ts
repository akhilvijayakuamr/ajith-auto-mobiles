import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://ajithautomobiles.vercel.app";

  const routes = [
    "",
    "/services/piaggio-ape-service-idukki",
    "/services/atul-auto-service-idukki",
    "/services/mahindra-alfa-service-idukki",
    "/services/three-wheeler-spare-parts-idukki",
    "/services/auto-rickshaw-repair-idukki",
    "/three-wheeler-workshop-idukki",
    "/three-wheeler-workshop-kattappana",
    "/three-wheeler-workshop-nedumkandam",
    "/three-wheeler-workshop-adimali",
    "/three-wheeler-workshop-thodupuzha",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
