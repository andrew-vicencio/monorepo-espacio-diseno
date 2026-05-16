import type { Metadata } from "next";
import HomeView from "./HomeView";

export const metadata: Metadata = {
  title: "Interior Design & Office Fit-Out Philippines",
  description:
    "Espacio Diseño delivers end-to-end interior design and fit-out services for offices, retail spaces, and commercial environments across the Philippines. Book a free consultation.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph",
  },
  openGraph: {
    title: "Espacio Diseño — Interior Design & Office Fit-Out Philippines",
    description:
      "Espacio Diseño delivers end-to-end interior design and fit-out services for offices, retail spaces, and commercial environments across the Philippines.",
    url: "https://espaciodiseno.com.ph",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño interior design showroom",
      },
    ],
  },
};

export default function IndexPage() {
  return <HomeView />;
}
