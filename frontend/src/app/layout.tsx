import type { Metadata } from "next";
import NavBar from "@/components/General/nav/navbar";
import Footer from "@/components/General/footer/footer";
import "@/styles/global.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://espaciodiseno.com.ph"),
  title: {
    default: "Espacio Diseño — Interior Design & Fit-Out Philippines",
    template: "%s | Espacio Diseño",
  },
  description:
    "Espacio Diseño, Inc. is a homegrown Filipino interior design and fit-out contractor specializing in corporate offices, commercial spaces, and retail environments across the Philippines.",
  keywords: [
    "interior design Philippines",
    "office fit-out Manila",
    "commercial fit-out Philippines",
    "corporate office design",
    "office renovation Philippines",
    "interior fit-out contractor",
    "office furniture Philippines",
    "Espacio Diseno",
  ],
  authors: [{ name: "Espacio Diseño, Inc." }],
  creator: "Espacio Diseño, Inc.",
  publisher: "Espacio Diseño, Inc.",
  icons: {
    icon: "/icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_PH",
    siteName: "Espacio Diseño",
    title: "Espacio Diseño — Interior Design & Fit-Out Philippines",
    description:
      "Espacio Diseño, Inc. is a homegrown Filipino interior design and fit-out contractor specializing in corporate offices, commercial spaces, and retail environments across the Philippines.",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño — Interior Design & Fit-Out Philippines",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Espacio Diseño — Interior Design & Fit-Out Philippines",
    description:
      "Espacio Diseño, Inc. is a homegrown Filipino interior design and fit-out contractor specializing in corporate offices, commercial spaces, and retail environments across the Philippines.",
    images: ["/images/lounge.jpg"],
  },
  alternates: {
    canonical: "https://espaciodiseno.com.ph",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://espaciodiseno.com.ph/#business",
  name: "Espacio Diseño, Inc.",
  alternateName: "Espacio Diseno",
  description:
    "A homegrown Filipino interior design and fit-out contractor specializing in corporate offices, commercial spaces, and retail environments across the Philippines.",
  url: "https://espaciodiseno.com.ph",
  logo: "https://espaciodiseno.com.ph/logo.png",
  image: "https://espaciodiseno.com.ph/images/lounge.jpg",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PH",
    addressRegion: "Metro Manila",
  },
  areaServed: [
    { "@type": "Country", name: "Philippines" },
    { "@type": "City", name: "Manila" },
    { "@type": "City", name: "Makati" },
    { "@type": "City", name: "Taguig" },
    { "@type": "City", name: "Pasig" },
    { "@type": "City", name: "Quezon City" },
  ],
  knowsAbout: [
    "Interior Design",
    "Office Fit-Out",
    "Commercial Fit-Out",
    "Space Planning",
    "Office Furniture",
    "Corporate Office Design",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-PH">
      <head>
        {/* Resource hints — establish early connections to key origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
