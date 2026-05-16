import type { Metadata } from "next";
import CallToAction from "@/components/General/CTA/CallToAction";
import ProductGrid from "@/components/home/ProductGrid";
import productsData from "@/data/products.json";
import type { ProductsByCategory } from "@/data/types";
import { capitalize } from "@/utils/utils";

const products = productsData as ProductsByCategory;

interface ProductPageProps {
  params: Promise<{ product: string }>;
}

// Pre-render one page per product category slug at build time.
// To re-add Sanity later: fetch slugs via `client.fetch(PRODUCT_CATEGORIES_QUERY)`.
export function generateStaticParams() {
  return Object.keys(products).map((product) => ({ product }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { product } = await params;
  const title = capitalize(product);
  const items = products[product] ?? [];
  const firstImage = items[0]?.image ?? "/images/lounge.jpg";
  const canonicalUrl = `https://espaciodiseno.com.ph/products/${product}`;

  return {
    title,
    description: `Shop ${title} from Espacio Diseño — ergonomic and commercial-grade office furniture designed for Philippine workplaces. Browse our full range of ${title.toLowerCase()} solutions.`,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | Espacio Diseño`,
      description: `Shop ${title} from Espacio Diseño — ergonomic and commercial-grade office furniture designed for Philippine workplaces.`,
      url: canonicalUrl,
      images: [
        {
          url: firstImage,
          width: 1200,
          height: 630,
          alt: `Espacio Diseño ${title}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Espacio Diseño`,
      description: `Shop ${title} from Espacio Diseño — ergonomic and commercial-grade office furniture designed for Philippine workplaces.`,
    },
  };
}

export default async function AllProductsPage({ params }: ProductPageProps) {
  const { product } = await params;
  // Local static data — products for this category baked into the static HTML.
  // To re-add Sanity later: `client.fetch(PRODUCTS_QUERY, { category: product })`.
  const items = products[product] ?? [];
  const title = capitalize(product);
  const firstImage = items[0]?.image ?? "https://espaciodiseno.com.ph/images/lounge.jpg";

  const productCategoryJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${title} — Espacio Diseño`,
    description: `${title} products from Espacio Diseño, a Philippines-based interior design and fit-out company.`,
    url: `https://espaciodiseno.com.ph/products/${product}`,
    numberOfItems: items.length,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: item.name,
        image: item.image ?? firstImage,
        brand: {
          "@type": "Brand",
          name: "Espacio Diseño",
        },
        offers: {
          "@type": "Offer",
          url: `https://espaciodiseno.com.ph/products/${product}`,
          priceCurrency: "PHP",
          availability: "https://schema.org/InStock",
          seller: {
            "@type": "Organization",
            name: "Espacio Diseño, Inc.",
          },
        },
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productCategoryJsonLd) }}
      />
      <main className="flex flex-col">
        <div className="mt-24 mb-20">
          <ProductGrid />
        </div>
        <div className="mb-14 px-6 lg:px-36">
          <h2 className="font-montserrat text-4xl tracking-normal">{title}</h2>
        </div>
        <div className="mb-20 px-6 lg:px-36">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map((item) => (
              <div
                key={item._id}
                className="relative group rounded-[10px] cursor-pointer overflow-hidden border border-light-grey/15"
              >
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full h-full top-0 left-0 opacity-90 -z-10 group-hover:opacity-100"
                  />
                ) : null}
                <div className="card-content absolute bottom-0 left-0 w-full bg-white/60">
                  <h3 className="uppercase tracking-widest ml-8 mb-5 mt-3">
                    {item.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <CallToAction />
    </>
  );
}
