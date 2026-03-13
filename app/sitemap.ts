import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://ifmluxurycars.com",
      lastModified: new Date(),
    },
    {
      url: "https://ifmluxurycars.com/fleet",
      lastModified: new Date(),
    },
    {
      url: "https://ifmluxurycars.com/about",
      lastModified: new Date(),
    },
    {
      url: "https://ifmluxurycars.com/contact",
      lastModified: new Date(),
    },
    {
      url: "https://ifmluxurycars.com/faq",
      lastModified: new Date(),
    },
    {
      url: "https://ifmluxurycars.com/auth",
      lastModified: new Date(),
    },
    {
      url: "https://ifmluxurycars.com/my-bookings",
      lastModified: new Date(),
    },
  ];
}