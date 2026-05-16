import type { Metadata } from "next";
import PortfolioView from "./PortfolioView";
import { getProjects } from "@/lib/queries";

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

export default async function PortfolioPage() {
  const projects = await getProjects();
  return <PortfolioView projects={projects} />;
}
