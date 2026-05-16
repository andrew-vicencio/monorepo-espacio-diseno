"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideUp,
  SlideRight,
  SlideLeft,
  SlideDown,
} from "@/components/animations/animations";
import Link from "next/link";
import { urlFor } from "@/lib/sanityImage";
import type { SanityImageSource } from "@sanity/image-url";

import TestimonialCarousel from "@/components/home/testimonials/TestimonialCarousel";
import ServicesCarousel from "@/components/home/ServicesCarousel";
import CallToAction from "@/components/General/CTA/CallToAction";
import ClientCarousel from "@/components/home/ClientCarousel";
import ProductGrid from "@/components/home/ProductGrid";
import HeroComponent from "@/components/home/hero/hero";
import RenderSection from "@/components/home/RenderSection";

type SanityImage = SanityImageSource & { alt?: string }

type HomePageData = {
  breakImage1?: SanityImage
  breakImage2?: SanityImage
  ctaImage?: SanityImage
} | null

type SanityClient = {
  _id: string
  name: string
  logo?: SanityImageSource
}

type SanityProductCategory = {
  _id: string
  title: string
  slug: { current: string }
  image?: SanityImage
}

interface HomeViewProps {
  homePageData?: HomePageData
  clients?: SanityClient[]
  productCategories?: SanityProductCategory[]
}

function imgSrc(sanityImage: SanityImage | undefined, fallback: string): string {
  if (sanityImage) {
    return urlFor(sanityImage).width(1200).format('webp').quality(80).url()
  }
  return fallback
}

export default function HomeView({ homePageData, clients, productCategories }: HomeViewProps) {
  const break1Src = imgSrc(homePageData?.breakImage1, '/images/home/break-3.jpg')
  const break1Alt = homePageData?.breakImage1?.alt ?? 'Espacio Diseño office interior break area'
  const break2Src = imgSrc(homePageData?.breakImage2, '/images/home/break-2.jpg')
  const break2Alt = homePageData?.breakImage2?.alt ?? 'Espacio Diseño modern office interior design'

  return (
    <>
      <main>
        {/* Hero */}
        <HeroComponent />

        {/* Intro / Value prop break section */}
        <motion.section
          className="py-16 lg:py-24 lg:flex lg:flex-row lg:items-stretch lg:bg-iced-green lg:px-12 2xl:px-36 lg:gap-10"
          aria-label="About Espacio Diseño"
          initial="hidden"
          whileInView="visible"
          variants={FadeIn}
          viewport={{ once: true }}
        >
          <motion.div className="flex flex-col justify-center gap-8 px-6 md:px-12 lg:px-0 lg:w-1/2 lg:gap-12">
            <motion.div variants={SlideDown}>
              <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                Why Espacio Diseño
              </p>
              <h2 className="font-montserrat font-light tracking-wide text-2xl lg:text-3xl 2xl:text-4xl leading-snug">
                Whether you are looking for innovative design ideas or technical
                expertise, we are here to elevate your space and create a truly{" "}
                remarkable environment.
              </h2>
            </motion.div>
            <motion.div variants={SlideUp} className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-block text-center font-source-sans font-semibold uppercase tracking-wider text-sm text-white bg-espacio-red rounded-md px-8 py-4 border-2 border-espacio-red hover:bg-white hover:text-espacio-red transition-colors duration-200"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/about-us"
                className="inline-block text-center font-source-sans font-semibold uppercase tracking-wider text-sm text-black rounded-md px-8 py-4 border-2 border-black hover:bg-black hover:text-white transition-colors duration-200"
              >
                Learn About Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden lg:block flex-1 relative min-h-[50vh] bg-top bg-cover rounded-tl-xl rounded-tr-[90px] rounded-br-xl rounded-bl-[90px] overflow-hidden"
            variants={SlideLeft}
          >
            <img
              src={break1Src}
              alt={break1Alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Services */}
        <motion.section
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ServicesCarousel />
        </motion.section>

        {/* 3D Render gallery */}
        <section className="py-20 bg-white" aria-label="Design renders">
          <div className="px-6 md:px-12 lg:px-36 mb-10">
            <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-2">
              Design Vision
            </p>
            <h2 className="font-montserrat font-light text-3xl md:text-4xl tracking-wide">
              3D Design Renders
            </h2>
          </div>
          <RenderSection />
        </section>

        {/* Second break section */}
        <motion.section
          className="py-16 lg:py-24 lg:flex lg:flex-row lg:items-stretch lg:bg-iced-green lg:px-12 2xl:px-36 lg:gap-10"
          aria-label="Our commitment"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FadeIn}
        >
          <motion.div
            className="flex flex-col justify-center gap-8 px-6 md:px-12 lg:px-0 lg:w-1/2 lg:gap-12 lg:order-2"
            variants={SlideDown}
          >
            <div>
              <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-4">
                Our Commitment
              </p>
              <h2 className="font-montserrat font-light tracking-wide text-2xl lg:text-3xl 2xl:text-4xl leading-snug">
                With our expertise and commitment to excellence, you can trust us
                to deliver exceptional results that exceed your expectations.
              </h2>
            </div>
            <motion.div variants={SlideUp}>
              <Link
                href="/portfolio"
                className="inline-block text-center font-source-sans font-semibold uppercase tracking-wider text-sm text-white bg-espacio-red rounded-md px-8 py-4 border-2 border-espacio-red hover:bg-white hover:text-espacio-red transition-colors duration-200"
              >
                See Our Projects
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="hidden lg:block flex-1 relative min-h-[50vh] bg-top bg-cover rounded-tl-xl rounded-tr-[90px] rounded-br-xl rounded-bl-[90px] overflow-hidden lg:order-1"
            variants={SlideRight}
          >
            <img
              src={break2Src}
              alt={break2Alt}
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </motion.div>
        </motion.section>

        {/* Products */}
        <section className="py-20">
          <ProductGrid categories={productCategories} />
        </section>

        {/* Products tagline */}
        <div className="px-6 md:px-12 lg:px-36 pb-8">
          <p className="font-source-sans font-light tracking-widest leading-8 text-lg lg:text-xl text-dark-grey border-l-4 border-espacio-green pl-6">
            Investing in our ergonomic &amp; office systems furniture means
            investing in productivity and well-being, as our thoughtfully
            designed pieces help create a healthier work environment.
          </p>
        </div>

        {/* Client logos */}
        <ClientCarousel clients={clients} />

        {/* Testimonials */}
        <div className="mt-20">
          <TestimonialCarousel />
        </div>

        {/* Closing tagline */}
        <div className="px-6 md:px-12 lg:px-36 py-16">
          <p className="font-source-sans font-light tracking-widest leading-8 text-lg lg:text-xl text-dark-grey border-l-4 border-espacio-red pl-6">
            What sets us apart is our unwavering commitment to customer
            satisfaction. We believe that our success lies in the success of
            our clients. That&apos;s why we go above and beyond to ensure that
            every project is delivered on time, and to the highest standards of
            quality.
          </p>
        </div>
      </main>
      <CallToAction ctaImage={homePageData?.ctaImage} />
    </>
  );
}
