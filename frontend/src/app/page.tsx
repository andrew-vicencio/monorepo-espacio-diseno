import type { Metadata } from "next";
import HomeView from "./HomeView";
import { getHomePageData, getClients, getProductCategories } from "@/lib/queries";

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

export default async function IndexPage() {
  const [homePageData, clients, productCategories] = await Promise.all([
    getHomePageData(),
    getClients(),
    getProductCategories(),
  ]);

  return (
    <HomeView
      homePageData={homePageData}
      clients={clients}
      productCategories={productCategories}
    />
  );
}
