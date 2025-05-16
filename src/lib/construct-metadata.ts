import { Metadata } from "next";

export function constructMetadata(): Metadata {
  return {
    metadataBase: new URL("https://thedreamydev.vercel.app/"),
    title: "Shoaib Sayyed",
    description: "Frontend Engineer",
    openGraph: {
      title: "Shoaib Sayyed",
      description: "Frontend Engineer",
      url: "https://thedreamydev.vercel.app/",
      siteName: "Shoaib Sayyed",
      locale: "en_US",
      type: "website",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    twitter: {
      title: "Shoaib Sayyed",
      card: "summary_large_image",
    },
  };
}
