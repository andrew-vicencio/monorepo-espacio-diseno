import type { Metadata } from "next";
import CallToAction from "@/components/General/CTA/CallToAction";
import ProductGrid from "@/components/home/ProductGrid";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse Espacio Diseño's range of ergonomic office furniture and fit-out products — desking, seating, storage, and more for Philippine offices and commercial spaces.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/products",
  },
  openGraph: {
    title: "Products | Espacio Diseño",
    description:
      "Browse Espacio Diseño's range of ergonomic office furniture and fit-out products — desking, seating, storage, and more for Philippine offices and commercial spaces.",
    url: "https://espaciodiseno.com.ph/products",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño office furniture and products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function ProductsPage() {
  return (
    <>
      <main className="flex flex-col">
        <div className="pt-24">
          <ProductGrid />
        </div>
      </main>
      <CallToAction />
    </>
  );
}
