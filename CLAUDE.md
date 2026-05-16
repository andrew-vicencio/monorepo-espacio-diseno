# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

Monorepo for the Espacio Diseno website (espaciodiseno.com.ph), a design and interior fit-out company based in the Philippines. One package:

- **`espacio-diseno/`** — Next.js 15 App Router frontend, fully static export to `out/`

## Commands

### espacio-diseno (frontend)

```bash
cd espacio-diseno
npm run dev        # next dev → localhost:3000
npm run build      # next build → static output to out/
npm run start      # next start (preview production build)
npm run typecheck  # tsc --noEmit
```

## Architecture

### Data Flow

All content is baked into the build from local data files — there is no CMS or runtime data fetching.

- **`src/data/posts.json`** — Blog/insights posts (title, slug, excerpt, image path, HTML body)
- **`src/data/jobs.json`** — Open job listings (title, url, department)
- **`src/data/products.json`** — Product items keyed by category slug
- **`src/data/projects.json`** — Portfolio project videos
- **`src/data/types.ts`** — TypeScript interfaces for all data shapes

Static assets (images, videos) live in `public/` and are referenced by path strings in components and data files.

### Frontend Structure (`espacio-diseno/src/`)

- **`app/`** — Next.js App Router. `layout.tsx` wraps all routes with NavBar + Footer. Dynamic routes (`[product]/`, `[insight]/`) use `generateStaticParams()` keyed from the data files.
- **`components/General/`** — Shared layout: `Layout/`, `nav/`, `footer/`, `cards/`, `CTA/`, `breadcrumbs/`, `contact-form/`.
- **`components/home/`** — Home page sections: hero, testimonials, carousels (Swiper), product grid.
- **`components/about/`** — Careers ag-grid table, company values.
- **`components/ui/`** — shadcn/ui base components.
- **`components/animations/`** — Framer Motion variant definitions (FadeIn, SlideUp, SlideDown, SlideLeft, SlideRight, StaggeredFadeIn). Use these with `whileInView` for scroll-triggered effects; don't create one-off configs.

### Routing & Static Generation

Next.js builds all pages statically (`output: 'export'` in `next.config.ts`). Dynamic routes derive params from the local data files at build time via `generateStaticParams()`. There is no server-side rendering.

### Styling System

Tailwind CSS with these custom tokens (defined in `tailwind.config.js`):
- `espacio-red: #ec2027` — Primary brand color (CTAs, accents)
- `espacio-green: #68be5e` — Secondary brand color
- `iced-green: #edf5eb` — Light background sections
- `light-grey: #999`, `dark-grey: #666`
- Fonts: **Montserrat** (headings, `font-montserrat`), **Source Sans 3** (body/buttons, `font-source-sans`) — loaded via Google Fonts in `global.css`
- SASS is available but Tailwind is the primary approach
- shadcn/ui components use HSL CSS variables for theming (defined in `global.css`)

When implementing Figma designs, use the project's custom color tokens and font names rather than raw hex values.

### Path Aliases

Use `@/` to import from `src/`:
```ts
import { cn } from '@/lib/utils'
import posts from '@/data/posts.json'
```

## Environment Variables

No environment variables are required. The site is fully static with no runtime secrets.

## Deployment

- **Frontend**: Netlify, static build. Build command: `npm run build` (from `espacio-diseno/`), publish dir: `out/`.
