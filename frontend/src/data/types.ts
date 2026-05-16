/**
 * Local data-layer types.
 *
 * These mirror the field shapes Sanity returned so that a future developer can
 * swap `import data from '@/data/*.json'` for `client.fetch(QUERY)` with minimal
 * changes. Field names (`slug.current`, `image`, `publishedAt`, etc.) are kept
 * compatible with the Sanity schema documented in CLAUDE.md.
 */

export interface Slug {
  current: string;
}

export interface Job {
  _id: string;
  title: string;
  url: string;
  department: string;
}

export interface Post {
  _id: string;
  title: string;
  slug: Slug;
  excerpt: string;
  /** Local image path under `public/`. Will become a Sanity image object later. */
  image: string;
  publishedAt: string;
  _updatedAt: string;
  /** Rich text rendered as an HTML string. Will become Portable Text later. */
  body: string;
}

/** Post fields used in list/related-article cards. */
export type PostSummary = Pick<
  Post,
  "_id" | "title" | "slug" | "excerpt" | "image" | "publishedAt" | "_updatedAt"
>;

export interface ProjectVideoAsset {
  asset: { url: string | null } | null;
}

export interface Project {
  _id: string;
  title: string | null;
  video: ProjectVideoAsset[] | null;
}

export interface ProductItem {
  _id: string;
  name: string;
  slug: Slug;
  /** Local image path under `public/`. Will become a Sanity image object later. */
  image: string;
  website: string;
}

/** Products keyed by category slug, as `products.json` is structured. */
export type ProductsByCategory = Record<string, ProductItem[]>;
