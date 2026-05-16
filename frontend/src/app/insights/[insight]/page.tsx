import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import postsData from "@/data/posts.json";
import type { Post } from "@/data/types";
import { formatDate } from "@/utils/utils";
import Breadcrumb from "@/components/General/breadcrumbs/index";
import CallToAction from "@/components/General/CTA/CallToAction";

const posts = postsData as Post[];

interface InsightPageProps {
  params: Promise<{ insight: string }>;
}

// Pre-render one page per post slug at build time.
// To re-add Sanity later: fetch slugs via `client.fetch(POST_SLUGS_QUERY)`.
export function generateStaticParams() {
  return posts.map((p) => ({ insight: p.slug.current }));
}

function getData(slug: string) {
  const post = posts.find((p) => p.slug.current === slug) ?? null;
  // Related = other posts, excluding the current one. Sanity used a scored
  // match query (RELATED_POST_QUERY); a simple slice is sufficient statically.
  const related = posts.filter((p) => p.slug.current !== slug).slice(0, 3);
  return { post, related };
}

export async function generateMetadata({
  params,
}: InsightPageProps): Promise<Metadata> {
  const { insight } = await params;
  const { post } = getData(insight);

  if (!post) {
    return { title: "Insights" };
  }

  const canonicalUrl = `https://espaciodiseno.com.ph/insights/${post.slug.current}`;
  const ogImage = post.image
    ? { url: post.image, width: 1200, height: 630, alt: post.title }
    : { url: "/images/lounge.jpg", width: 1200, height: 630, alt: post.title };

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: canonicalUrl,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: ["Espacio Diseño"],
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [ogImage.url],
    },
  };
}

export default async function ArticlePage({ params }: InsightPageProps) {
  const { insight } = await params;
  const { post, related: relatedPosts } = getData(insight);

  if (!post) notFound();

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image ?? "https://espaciodiseno.com.ph/images/lounge.jpg",
    datePublished: post.publishedAt,
    dateModified: post._updatedAt ?? post.publishedAt,
    author: {
      "@type": "Organization",
      name: "Espacio Diseño, Inc.",
      url: "https://espaciodiseno.com.ph",
    },
    publisher: {
      "@type": "Organization",
      name: "Espacio Diseño, Inc.",
      url: "https://espaciodiseno.com.ph",
      logo: {
        "@type": "ImageObject",
        url: "https://espaciodiseno.com.ph/logo.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://espaciodiseno.com.ph/insights/${post.slug.current}`,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="">
        <main className="min-h-screen xl:w-3/5 2xl:w-4/5 lg:py-10 lg:pt-4 lg:mx-auto">
          {/* breadcrumbs */}
          <div className="pl-4 pt-4 md:pl-2 md:py-2">
            <Breadcrumb />
          </div>
          {/* main article */}
          <article className="p-4 pt-2 md:p-0 md:pt-0">
            {/* banner */}
            <header>
              <div className="overflow-hidden max-h-[300px]">
                {post?.image ? (
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full aspect-[800/300] object-cover"
                  />
                ) : null}
              </div>
            </header>
            {/* meta data */}
            <div className="p-4 md:mx-auto lg:p-0 md:w-4/5 2xl:w-3/5 lg:mx-auto">
              <div className="pt-8 pb-6">
                <h1 className="text-4xl font-bold">{post?.title}</h1>
                {post?.publishedAt && (
                  <h2 className="text-sm font-light tracking-wider mt-2">
                    {post.publishedAt && (
                      <>Published {formatDate(post.publishedAt)}</>
                    )}
                    {post._updatedAt &&
                      post._updatedAt !== post.publishedAt && (
                        <>&ensp;&bull; Updated {formatDate(post._updatedAt)}</>
                      )}
                  </h2>
                )}
              </div>
              {/* Article content - body (HTML string from the local data layer) */}
              {post?.body ? (
                <div
                  className="prose prose-sm sm:mx-auto md:max-w-none font-montserrat"
                  dangerouslySetInnerHTML={{ __html: post.body }}
                />
              ) : null}
            </div>
          </article>
        </main>
        <div className="lg:w-2/3 mx-auto my-10">
          <div className="mb-6">
            <h2 className="text-xl font-montserrat tracking-wider">
              Related Articles
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto">
            {relatedPosts.map((article) => (
              <Link
                key={article._id}
                href={`/insights/${article?.slug?.current ?? ""}`}
                className="cursor-pointer min-h-[300px] shadow-md flex flex-col hover:scale-105 transition-transform"
              >
                <div className="max-h-[200px] overflow-hidden">
                  {article?.image && (
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full"
                    />
                  )}
                </div>
                <div className="flex-1 flex flex-col gap-2 justify-between p-4">
                  <h3 className="line-clamp-1 font-montserrat text-lg">
                    {article?.title}
                  </h3>
                  <p className="line-clamp-2 font-light tracking-widest">
                    {article?.excerpt}
                  </p>
                  <span className="block text-right text-sm font-light tracking-widest uppercase">
                    Read More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CallToAction />
    </>
  );
}
