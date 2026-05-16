import { client } from './sanity'

export const HOME_PAGE_QUERY = `*[_type == "homePage"][0]{
  breakImage1{ ..., "alt": alt },
  breakImage2{ ..., "alt": alt },
  ctaImage{ ..., "alt": alt }
}`

export const CLIENTS_QUERY = `*[_type == "client"] | order(_createdAt asc) {
  _id,
  name,
  logo
}`

export const PRODUCT_CATEGORIES_QUERY = `*[_type == "productCategory"] | order(_createdAt asc) {
  _id,
  title,
  slug,
  image{ ..., "alt": alt }
}`

export async function getHomePageData() {
  return client.fetch(HOME_PAGE_QUERY)
}

export async function getClients() {
  return client.fetch(CLIENTS_QUERY)
}

export async function getProductCategories() {
  return client.fetch(PRODUCT_CATEGORIES_QUERY)
}

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc, _createdAt asc) {
  _id,
  title,
  description,
  image{ ..., "alt": alt }
}`

export const PROJECTS_QUERY = `*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  client,
  featured,
  coverImage{ ..., "alt": alt },
  images[]{ ..., "alt": alt },
  videoUrl,
  body
}`

export async function getServices() {
  return client.fetch(SERVICES_QUERY)
}

export async function getProjects() {
  return client.fetch(PROJECTS_QUERY)
}
