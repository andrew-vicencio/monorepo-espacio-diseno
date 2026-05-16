"use client";

import * as React from "react";
import CallToAction from "@/components/General/CTA/CallToAction";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideDown,
  SlideLeft,
  SlideRight,
  SlideUp,
  StaggeredFadeIn,
} from "@/components/animations/animations";
import type { SanityImageSource } from "@sanity/image-url";
import { urlFor } from "@/lib/sanityImage";

export type SanityProject = {
  _id: string;
  title: string;
  client?: string;
  featured?: boolean;
  coverImage?: SanityImageSource & { alt?: string };
  images?: Array<SanityImageSource & { alt?: string }>;
  videoUrl?: string;
  body?: unknown;
};

const PortfolioView = ({ projects }: { projects: SanityProject[] }) => {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <main>
        {/* Hero banner */}
        <div className="flex flex-col md:flex-row min-h-[50vh]">
          <div className="lg:max-w-[55vw] bg-espacio-red flex-shrink-0">
            <div className="flex flex-col p-8 md:p-12 md:pl-24 lg:pl-36 gap-8 text-white h-full justify-center">
              <div>
                <p className="font-source-sans uppercase tracking-[0.2em] text-sm font-semibold text-white/70 mb-3">
                  Our Work
                </p>
                <h1 className="font-montserrat font-bold text-5xl md:text-6xl">
                  Projects
                </h1>
              </div>
              <div className="font-source-sans leading-7 tracking-wide text-white/90 flex flex-col gap-4 max-w-xl">
                <p>
                  At Espacio Diseño, we take great pride in our impressive track
                  record, with a remarkable <strong className="text-white font-bold">80% rate of repeat clients</strong>. This has
                  also led to numerous referrals, as satisfied clients recommend
                  us to other companies, further expanding our network and
                  reinforcing our standing as a trusted fit-out and furniture
                  contractor within the industry.
                </p>
                <p>
                  This enduring trust has established us as a reliable partner
                  for our clients during every milestone, whether it be
                  expansion, relocation, or renovation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex-1 min-h-[40vh] md:min-h-full">
            <img
              src="/images/projects/intro.png"
              alt="Espacio Diseño completed office fit-out project Philippines"
              className="h-full w-full object-cover object-bottom"
            />
          </div>
        </div>

        {/* Featured projects */}
        {featured.length > 0 && (
          <section className="flex flex-col gap-20 py-20 px-6 md:px-24 lg:px-36 md:py-28" aria-label="Featured projects">
            <div>
              <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Case Studies
              </p>
              <h2 className="font-montserrat font-light text-3xl md:text-4xl">
                Featured Projects
              </h2>
            </div>
            {featured.map((project, i) => {
              const mediaSrc = project.videoUrl ?? null;
              const imgSrc = project.coverImage
                ? urlFor(project.coverImage).width(960).format('webp').quality(80).url()
                : null;
              const imgAlt = project.coverImage?.alt ?? project.title;

              return (
                <motion.div
                  key={project._id}
                  className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16"
                  variants={FadeIn}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <motion.div
                    className={`w-full lg:w-auto lg:max-w-[480px] rounded-xl overflow-hidden shadow-lg flex-shrink-0 ${i % 2 ? "lg:order-2" : ""}`}
                    variants={i % 2 ? SlideLeft : SlideRight}
                  >
                    {mediaSrc ? (
                      <video loop autoPlay muted playsInline className="w-full object-cover">
                        <source src={mediaSrc} />
                      </video>
                    ) : imgSrc ? (
                      <img src={imgSrc} alt={imgAlt} className="w-full object-cover" />
                    ) : null}
                  </motion.div>
                  <motion.div className="flex-1 flex flex-col gap-6">
                    <div>
                      {project.client && (
                        <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-2">
                          {project.client}
                        </p>
                      )}
                      <motion.h3
                        className="font-montserrat text-3xl font-light tracking-tight"
                        variants={SlideDown}
                      >
                        {project.title}
                      </motion.h3>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </section>
        )}

        {/* Project gallery */}
        {rest.length > 0 && (
          <section className="pb-20 px-6 md:px-24 lg:px-36" aria-label="Project gallery">
            <div className="mb-10">
              <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
                Project Gallery
              </p>
              <h2 className="font-montserrat font-light text-3xl md:text-4xl">
                More Projects
              </h2>
            </div>
            <motion.ul
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
              variants={StaggeredFadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {rest.map((proj) => {
                const videoSrc = proj.videoUrl;
                const imgSrc = proj.coverImage
                  ? urlFor(proj.coverImage).width(800).format('webp').quality(80).url()
                  : null;
                const imgAlt = proj.coverImage?.alt ?? proj.title;

                return (
                  <motion.li
                    key={proj._id}
                    className="rounded-xl overflow-hidden shadow-md bg-slate-900"
                    variants={SlideUp}
                  >
                    <div className="px-4 py-3 bg-slate-800">
                      <h3 className="font-montserrat text-white text-sm font-medium">{proj.title}</h3>
                    </div>
                    {videoSrc ? (
                      <video className="w-full" controls>
                        <source src={videoSrc} />
                      </video>
                    ) : imgSrc ? (
                      <img src={imgSrc} alt={imgAlt} className="w-full object-cover" />
                    ) : null}
                  </motion.li>
                );
              })}
            </motion.ul>
          </section>
        )}

        {projects.length === 0 && (
          <div className="py-32 text-center text-dark-grey font-source-sans">
            Projects coming soon.
          </div>
        )}
      </main>
      <CallToAction />
    </>
  );
};

export default PortfolioView;
