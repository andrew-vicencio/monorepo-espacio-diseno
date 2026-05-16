import type { Metadata } from "next";
import posts from "@/data/posts.json";
import type { Post } from "@/data/types";
import InsightsView from "./InsightsView";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Design tips, fit-out trends, and expert advice from the Espacio Diseño team. Stay up to date on interior design and office fit-out best practices in the Philippines.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/insights",
  },
  openGraph: {
    title: "Insights | Espacio Diseño",
    description:
      "Design tips, fit-out trends, and expert advice from the Espacio Diseño team. Stay up to date on interior design and office fit-out best practices in the Philippines.",
    url: "https://espaciodiseno.com.ph/insights",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño interior design insights",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function InsightsPage() {
  // Local static data — posts baked into the static HTML.
  // To re-add Sanity later: `const insights = await client.fetch(POSTS_QUERY)`.
  return <InsightsView insights={posts as Post[]} />;
}
