/**
 * upload-to-sanity.mjs
 *
 * Upload local image files to Sanity and patch documents to reference them.
 *
 * Usage:
 *   node --env-file=.env scripts/upload-to-sanity.mjs
 *
 * .env file at the monorepo root (no quotes needed):
 *   SANITY_TOKEN=skAbCdEf...
 *
 * How to get a token:
 *   sanity.io → project lcurog0l → API → Tokens → Add API token → Editor role
 */

// Uses the @sanity/client already installed in frontend/node_modules
import { createClient } from '../frontend/node_modules/@sanity/client/dist/index.js'
import { createReadStream, existsSync } from 'fs'
import { basename, extname, resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

// ─── config ──────────────────────────────────────────────────────────────────

const PROJECT_ID = 'lcurog0l'
const DATASET    = 'production'
const API_VER    = '2024-11-13'

// Resolve paths relative to this script file
const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT      = resolve(__dirname, '..')
const PUBLIC    = resolve(ROOT, 'frontend', 'public')

// ─── load token ──────────────────────────────────────────────────────────────

const token = process.env.SANITY_TOKEN

if (!token) {
  console.error(
    '\nNo token found. Run with:\n' +
    '  node --env-file=.env scripts/upload-to-sanity.mjs\n' +
    '\n.env file at the monorepo root:\n' +
    '  SANITY_TOKEN=skAbCdEf...\n' +
    '\nGet a token: sanity.io/manage → project lcurog0l → API → Tokens → Editor role\n'
  )
  process.exit(1)
}

const client = createClient({
  projectId: PROJECT_ID,
  dataset: DATASET,
  apiVersion: API_VER,
  useCdn: false,
  token,
})

// ─── helpers ─────────────────────────────────────────────────────────────────

async function uploadImage(filePath, label) {
  const abs = resolve(PUBLIC, filePath)
  if (!existsSync(abs)) {
    console.warn(`  ⚠  skipping "${label}" — file not found: ${abs}`)
    return null
  }
  const ext = extname(abs).replace('.', '')
  const contentType = ext === 'svg' ? 'image/svg+xml'
    : ext === 'jpg' || ext === 'jpeg' ? 'image/jpeg'
    : ext === 'png' ? 'image/png'
    : ext === 'webp' ? 'image/webp'
    : 'application/octet-stream'

  process.stdout.write(`  uploading ${label} … `)
  const asset = await client.assets.upload('image', createReadStream(abs), {
    filename: basename(abs),
    contentType,
  })
  console.log(`✓  ${asset._id}`)
  return asset
}

function imageRef(asset, altText) {
  return {
    _type: 'image',
    asset: { _type: 'reference', _ref: asset._id },
    alt: altText,
  }
}

// ─── upload plan ─────────────────────────────────────────────────────────────
//
// Edit this section to add or change what gets uploaded.
// Each entry is: { file: path-relative-to-public/, label, alt }
//
// ─────────────────────────────────────────────────────────────────────────────

async function run() {
  console.log(`\nConnecting to Sanity project ${PROJECT_ID} / ${DATASET}\n`)

  // ── 1. Home page images ────────────────────────────────────────────────────
  console.log('── Home Page ──')
  const [break1, break2, cta] = await Promise.all([
    uploadImage('images/home/break-3.jpg',  'breakImage1 (about section)'),
    uploadImage('images/home/break-2.jpg',  'breakImage2 (commitment section)'),
    uploadImage('images/CTA.jpg',           'ctaImage'),
  ])

  if (break1 || break2 || cta) {
    const patch = client.patch('homePage').setIfMissing({})
    if (break1) patch.set({ breakImage1: imageRef(break1, 'Espacio Diseño office interior') })
    if (break2) patch.set({ breakImage2: imageRef(break2, 'Espacio Diseño modern office interior design') })
    if (cta)    patch.set({ ctaImage:    imageRef(cta,    'Espacio Diseño interior design consultation') })
    await patch.commit({ autoGenerateArrayKeys: true })

    // Ensure the homePage document exists as a singleton
    await client.createIfNotExists({ _type: 'homePage', _id: 'homePage' })
    // Re-apply patch in case doc was just created
    const patch2 = client.patch('homePage')
    if (break1) patch2.set({ breakImage1: imageRef(break1, 'Espacio Diseño office interior') })
    if (break2) patch2.set({ breakImage2: imageRef(break2, 'Espacio Diseño modern office interior design') })
    if (cta)    patch2.set({ ctaImage:    imageRef(cta,    'Espacio Diseño interior design consultation') })
    await patch2.commit()
    console.log('  ✓  homePage document updated\n')
  }

  // ── 2. Product category images ─────────────────────────────────────────────
  console.log('── Product Categories ──')
  const categoryImages = [
    { slug: 'desking',  file: 'images/Products/Desking.jpg',        alt: 'Espacio Diseño Desking office furniture Philippines' },
    { slug: 'panels',   file: 'images/Products/Panels.jpg',         alt: 'Espacio Diseño Panels office furniture Philippines' },
    { slug: 'seating',  file: 'images/Products/Seating.jpg',        alt: 'Espacio Diseño Seating office furniture Philippines' },
    { slug: 'storage',  file: 'images/Products/Storage.jpeg',       alt: 'Espacio Diseño Storage office furniture Philippines' },
    { slug: 'custom',   file: 'images/Products/Customization.jpg',  alt: 'Espacio Diseño Custom office furniture Philippines' },
  ]

  for (const { slug, file, alt } of categoryImages) {
    const asset = await uploadImage(file, `productCategory: ${slug}`)
    if (!asset) continue

    // Find the category document by slug
    const doc = await client.fetch(
      `*[_type == "productCategory" && slug.current == $slug][0]{ _id }`,
      { slug }
    )
    if (!doc) {
      console.warn(`  ⚠  no productCategory found with slug "${slug}" — upload ok but not linked`)
      continue
    }
    await client.patch(doc._id)
      .set({ image: imageRef(asset, alt) })
      .commit()
    console.log(`  ✓  ${slug} category linked\n`)
  }

  // ── 3. Client logos ────────────────────────────────────────────────────────
  console.log('── Client Logos ──')
  const clientLogos = [
    { name: 'Facebook',      file: 'clients/svg/facebook.svg' },
    { name: 'Adidas',        file: 'clients/svg/adidas.svg' },
    { name: 'Agoda',         file: 'clients/svg/agoda.svg' },
    { name: 'Alaska',        file: 'clients/svg/alaska.svg' },
    { name: 'Amdocs',        file: 'clients/svg/amdocs.svg' },
    { name: 'Cathay Pacific',file: 'clients/svg/cathay-pacific.svg' },
    { name: 'Cognizant',     file: 'clients/svg/cognizant.svg' },
    { name: 'Daikin',        file: 'clients/svg/daikin.svg' },
    { name: 'Lufthansa',     file: 'clients/svg/lufthansa.svg' },
  ]

  for (const { name, file } of clientLogos) {
    const asset = await uploadImage(file, `client logo: ${name}`)
    if (!asset) continue

    // Find or create the client document
    const doc = await client.fetch(
      `*[_type == "client" && name == $name][0]{ _id }`,
      { name }
    )

    if (doc) {
      await client.patch(doc._id).set({ logo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } } }).commit()
    } else {
      await client.create({
        _type: 'client',
        name,
        logo: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } },
      })
    }
    console.log(`  ✓  ${name} client linked\n`)
  }

  console.log('Done.\n')
}

run().catch((err) => {
  console.error('\nFailed:', err.message)
  process.exit(1)
})
