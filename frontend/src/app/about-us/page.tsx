import type { Metadata } from "next";
import AboutView from "./AboutView";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Espacio Diseño, Inc. — a homegrown Filipino interior design and fit-out contractor with over a decade of experience transforming corporate and commercial spaces across the Philippines.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/about-us",
  },
  openGraph: {
    title: "About Us | Espacio Diseño",
    description:
      "Learn about Espacio Diseño, Inc. — a homegrown Filipino interior design and fit-out contractor with over a decade of experience transforming corporate and commercial spaces across the Philippines.",
    url: "https://espaciodiseno.com.ph/about-us",
    images: [
      {
        url: "/images/about/banner.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño team and office",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function AboutUsPage() {
  return <AboutView />;
}
