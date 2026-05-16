import type { Metadata } from "next";
import projects from "@/data/projects.json";
import PortfolioView, { PortfolioProject } from "./PortfolioView";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore Espacio Diseño's portfolio of completed interior design and office fit-out projects across the Philippines — from corporate headquarters to retail environments.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/portfolio",
  },
  openGraph: {
    title: "Portfolio | Espacio Diseño",
    description:
      "Explore Espacio Diseño's portfolio of completed interior design and office fit-out projects across the Philippines — from corporate headquarters to retail environments.",
    url: "https://espaciodiseno.com.ph/portfolio",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño portfolio projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function PortfolioPage() {
  // Local static data — project videos baked into the static HTML.
  // To re-add Sanity later: `const projects = await client.fetch(PROJECTS_QUERY)`.
  return <PortfolioView projects={projects as PortfolioProject[]} />;
}
