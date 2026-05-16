"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideDown,
  SlideLeft,
  SlideRight,
  SlideUp,
} from "@/components/animations/animations";
import clsx from "clsx";
import CompanyValues from "@/components/about/companyValues";
import Link from "next/link";

const AboutView = () => {
  const affiliates = [
    {
      img: "/images/about/affiliations/worldvision.gif",
      title: "World Vision",
    },
    {
      img: "/images/about/affiliations/rotary.png",
      title: "Rotary Club of Taguig West",
    },
    {
      img: "/images/about/affiliations/british-chamber.png",
      title: "British Chamber of Commerce",
    },
    {
      img: "/images/about/affiliations/global-woman-club.jpg",
      title: "Global Woman Club of Manila",
    },
  ];

  return (
    <main className="w-full">
      {/* Banner hero */}
      <div className="relative overflow-hidden">
        <img
          className="w-full max-h-[55vh] min-h-[40vh] object-cover object-[50%_31%]"
          style={{ filter: 'brightness(0.75)' }}
          src="/images/about/banner.jpg"
          alt="Espacio Diseño office interior design Philippines"
        />
        {/* Overlay gradient */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.2) 60%, rgba(0,0,0,0) 100%)' }}
        />
        <motion.div
          className="absolute inset-0 flex flex-col justify-end pb-12 px-8 md:px-16 lg:px-36"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <p className="font-source-sans text-espacio-green uppercase tracking-[0.25em] text-sm font-semibold mb-2">
            Est. 2005 · Philippines
          </p>
          <h1 className="font-montserrat text-white font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight leading-tight">
            About Us
          </h1>
        </motion.div>
      </div>

      {/* Tagline */}
      <section className="flex justify-center px-8 mt-12 lg:px-36 lg:mt-20 lg:mb-8">
        <motion.div
          className="font-montserrat font-light tracking-wider flex flex-col gap-6 lg:gap-8 lg:w-2/3"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <h2 className="text-3xl lg:text-5xl leading-tight">
            Your Space, <br className="lg:hidden" />
            Our Masterpiece.
          </h2>
          <p className="font-source-sans text-lg lg:text-xl text-dark-grey leading-relaxed">
            Together, let&apos;s create a space that truly reflects your identity.
          </p>
        </motion.div>
      </section>

      {/* Company story */}
      <motion.section
        className={clsx(
          "flex flex-col gap-8 mt-12 px-6",
          "lg:flex-row xl:px-36 lg:mt-20 lg:gap-16"
        )}
        variants={FadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.img
          src="/images/about/office.png"
          alt="Espacio Diseño office interior"
          className="lg:hidden xl:block xl:max-w-[45%] rounded-xl object-cover object-[55%_50%] flex-1 shadow-lg"
          variants={SlideRight}
          loading="lazy"
        />
        <motion.div className="flex flex-col justify-center gap-6 lg:gap-8">
          <div>
            <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Story
            </p>
          </div>
          <motion.div
            className={clsx(
              "flex flex-col gap-5 leading-relaxed",
              "lg:font-light lg:text-lg lg:leading-loose text-dark-grey"
            )}
            variants={SlideDown}
          >
            <motion.img
              src="/images/about/office.png"
              alt=""
              className="hidden lg:inline-block lg:max-w-[50%] xl:hidden m-4 float-start rounded-xl shadow-md"
              variants={SlideRight}
              loading="lazy"
            />
            <p>
              At Espacio Diseño, we believe that every space has the potential
              to inspire and elevate both creativity and productivity. Founded
              in 2005, we have dedicated ourselves to transforming environments
              into remarkable masterpieces that reflect the vision, brand
              identity and values of our clients. What started as a small
              endeavor has grown into a reputable furniture, design and fit-out
              firm, recognized for our innovative approach, transparency
              throughout the project, and unwavering commitment to ensure our
              clients are happy and satisfied with our work.
            </p>
            <p>
              Over the years, we have successfully executed numerous projects
              across various industries, consistently exceeding client
              expectations. We pride ourselves on going above and beyond to
              deliver tailored design space solutions that enhance functionality
              while showcasing remarkable design and craftmanship. By closely
              listening to our clients&apos; needs and specifications, we ensure
              that every space we create aligns with their vision, boost
              productivity and reflect their identity.
            </p>
            <p>
              As we have grown, so has our expertise. We embrace the latest
              design trends and technologies, continually refining our methods
              to deliver exceptional results for our projects. Our dedicated
              team collaborates with you at every step, ensuring that each
              detail supports your vision.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Company Values */}
      <section className="px-6 mt-16 mb-14 lg:px-36 lg:mt-24 lg:mb-28">
        <CompanyValues />
      </section>

      {/* Careers CTA */}
      <motion.section
        className="w-full flex flex-col justify-center items-center gap-8 bg-espacio-green py-16 md:py-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        aria-label="Join our team"
      >
        <motion.div
          variants={FadeIn}
          className="text-center flex flex-col items-center gap-6 px-6"
        >
          <h2 className="font-montserrat text-white text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Be part of a <br /> winning team
          </h2>
          <p className="font-source-sans text-white/90 text-lg max-w-lg">
            Join a passionate team of designers, architects, and project managers building remarkable spaces across the Philippines.
          </p>
        </motion.div>
        <motion.div variants={SlideUp}>
          <Link
            href="/careers"
            className="inline-block font-source-sans font-semibold uppercase tracking-wider text-sm text-white border-2 border-white rounded-md px-8 py-4 hover:bg-white hover:text-espacio-green transition-colors duration-200"
          >
            See Open Positions
          </Link>
        </motion.div>
      </motion.section>

      {/* Community Engagement */}
      <section className="lg:relative lg:h-[75vh] overflow-hidden">
        <img
          src="/images/about/community-break.jpg"
          alt="Espacio Diseño community engagement activities"
          className="w-full max-h-[75vh] object-cover object-center"
          loading="lazy"
        />
        <motion.div
          className={clsx(
            "px-8 py-12",
            "flex flex-col gap-4 lg:gap-6",
            "text-white bg-black/80",
            "lg:absolute lg:bottom-1/4 lg:left-44 lg:w-3/5 lg:px-16 lg:py-12",
            "lg:rounded-tr-xl lg:rounded-tl-[90px] lg:rounded-bl-xl lg:rounded-br-[90px]"
          )}
          variants={FadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="font-montserrat text-2xl tracking-tight lg:text-4xl xl:text-5xl font-light">
            Community Engagement
          </h2>
          <p className="font-source-sans tracking-wide leading-loose text-white/90">
            We sincerely express our heartfelt gratitude for the blessings we
            have received over the years. We are honored to have earned the
            trust of numerous corporations that have chosen us to implement
            their projects. The more projects awarded to us, the greater our
            capacity to extend our support to the community. In appreciation of
            this trust, we believe in sharing our blessings by{" "}
            <strong className="font-bold text-espacio-green">PAYING IT FORWARD</strong>{" "}
            to uplift and empower our society. Through partnerships with civic or
            humanitarian organizations and NGOs, we strive to inspire change and
            build a brighter future for all.
          </p>
        </motion.div>
      </section>

      {/* Child Sponsorship */}
      <motion.section
        className={clsx(
          "p-6 lg:px-36 lg:py-24",
          "grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16 overflow-hidden"
        )}
        variants={FadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="flex flex-col gap-6 lg:gap-10 justify-center">
          <div>
            <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Giving Back
            </p>
            <motion.h3
              variants={SlideDown}
              className="text-3xl font-montserrat font-light leading-snug"
            >
              Child Sponsorship
            </motion.h3>
          </div>
          <motion.p variants={SlideUp} className="font-source-sans text-lg tracking-wide font-light leading-8 text-dark-grey">
            We proudly sponsor 11 children through World Vision, ensuring they
            have access to basic necessities, such as food, clean water,
            education and health care. By investing in their futures, we aim
            to break the cycle of poverty and empower the next generation to
            reach their full potential.
          </motion.p>
        </motion.div>
        <motion.img
          variants={SlideLeft}
          src="/images/about/child-sponsorship.jpg"
          alt="Espacio Diseño child sponsorship through World Vision"
          className="rounded-xl shadow-md object-cover w-full"
          loading="lazy"
        />
      </motion.section>

      {/* Break image */}
      <div className="overflow-hidden">
        <img
          src="/images/about/break.png"
          alt=""
          aria-hidden="true"
          className="max-h-[200px] lg:max-h-[45vh] w-full object-cover object-[50%_60%]"
          loading="lazy"
        />
      </div>

      {/* Affiliations */}
      <section className="flex flex-col gap-8 px-6 py-16 lg:py-24 lg:px-36">
        <div>
          <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
            Our Network
          </p>
          <h2 className="font-montserrat text-4xl lg:text-5xl font-light">Affiliations</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {affiliates.map(({ img, title }, i) => (
            <div
              key={i}
              className="flex flex-col items-center gap-4"
            >
              <div className="flex items-center justify-center h-24">
                <img
                  src={img}
                  alt={`${title} logo`}
                  className="max-h-20 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
              <h3 className="text-base font-light font-montserrat text-center text-dark-grey">
                {title}
              </h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AboutView;
