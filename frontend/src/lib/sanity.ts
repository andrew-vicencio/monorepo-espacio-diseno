import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-11-13',
  useCdn: true,
  // SANITY_API_READ_TOKEN is only used at build time for GROQ queries
  // against the private dataset. Not NEXT_PUBLIC_ so it never hits the browser.
  token: process.env.SANITY_API_READ_TOKEN,
})
