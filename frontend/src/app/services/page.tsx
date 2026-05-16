import type { Metadata } from "next";
import ServicesView from "./ServicesView";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Espacio Diseño offers full-service interior design, space planning, and office fit-out solutions for corporate and commercial clients across the Philippines — from concept to completion.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/services",
  },
  openGraph: {
    title: "Services | Espacio Diseño",
    description:
      "Espacio Diseño offers full-service interior design, space planning, and office fit-out solutions for corporate and commercial clients across the Philippines — from concept to completion.",
    url: "https://espaciodiseno.com.ph/services",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño interior design and fit-out services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ServicesPage() {
  return <ServicesView />;
}
