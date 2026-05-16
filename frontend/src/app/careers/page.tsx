import type { Metadata } from "next";
import jobs from "@/data/jobs.json";
import type { Job } from "@/data/types";
import CareersView from "./CareersView";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Espacio Diseño team. We are a growing interior design and fit-out company based in the Philippines looking for talented designers, project managers, and fit-out specialists.",
  alternates: {
    canonical: "https://espaciodiseno.com.ph/careers",
  },
  openGraph: {
    title: "Careers | Espacio Diseño",
    description:
      "Join the Espacio Diseño team. We are a growing interior design and fit-out company based in the Philippines looking for talented designers, project managers, and fit-out specialists.",
    url: "https://espaciodiseno.com.ph/careers",
    images: [
      {
        url: "/images/lounge.jpg",
        width: 1200,
        height: 630,
        alt: "Espacio Diseño office environment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function CareersPage() {
  // Local static data — jobs are baked into the static HTML.
  // To re-add Sanity later: `const jobs = await client.fetch(ALL_JOBS_QUERY)`.
  return <CareersView jobs={jobs as Job[]} />;
}
