"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideUp,
  StaggeredFadeIn,
} from "@/components/animations/animations";
import CompanyValues from "@/components/about/companyValues";
import clsx from "clsx";
import OpenPositionTable from "@/components/about/careersTable";
import type { Job } from "@/data/types";

interface IBenefits {
  title: string;
  description?: string[];
}

const CareersView = ({ jobs }: { jobs: Job[] }) => {
  const benefits: IBenefits[] = [
    {
      title: "Retirement Planning",
    },
    {
      title: "Health Insurance Plan",
      description: ["HMO"],
    },
    {
      title: "Professional Development",
      description: ["Seminars/Training", "Mentorship", "Internship"],
    },
    {
      title: "Employee Recognition",
      description: ["Loyalty Service Reward", "Employees of the Year"],
    },
    {
      title: "Financial Assistance",
      description: [
        "Salary Loan, Zero Interest",
        "Funeral Assistance",
        "Death Benefit",
        "Maternity Benefit",
      ],
    },
    {
      title: "Birthday Incentives",
      description: ["Paid Birthday Leave"],
    },
    {
      title: "Nutrition",
      description: [
        "Free lunch, twice a month",
        "Full pantry - free snacks, tea, coffee",
        "Overtime Meal Allowance",
      ],
    },
    {
      title: "Employee Socials",
      description: ["Espacio Night", "Espacio Events"],
    },
  ];

  return (
    <main className="">
      <motion.div className="relative">
        <img
          className="w-full max-h-[25vh] md:max-h-[50vh] object-cover object-[50%_31%] brightness-75"
          src="/images/lounge.jpg"
          alt="Espacio Diseño workplace — join our team"
        />
        <motion.div
          className="absolute top-20 left-16 md:top-52 md:left-32"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="font-montserrat text-white text-6xl xl:text-8xl tracking-tight">
            Careers
          </h1>
        </motion.div>
      </motion.div>

      {/* Company Values */}
      <div className="px-4 mt-12 mb-14 lg:px-36 lg:mt-24 lg:mb-28">
        <CompanyValues />
      </div>

      {/* TODO: Add Carousel */}
      <div
        className={clsx(
          "text-white",
          "flex flex-row justify-center items-center m-auto",
          "xl:max-w-[66vw]"
        )}
      >
        <div
          className={clsx(
            "bg-slate-500",
            "flex flex-col px-8 py-12 gap-8 items-center justify-center",
            "md:flex-row md:rounded-lg",
            "xl:gap-24 xl:px-24 xl:py-16"
          )}
        >
          <div className="flex flex-col justify-center items-center">
            <div className="rounded-[90%] bg-slate-50 w-40 h-40"></div>
          </div>
          <div className="flex flex-col justify-even items-center gap-12">
            <div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
                nec est arcu. Fusce vel neque elit. Nulla dictum maximus elit
                nec lacinia. Quisque vitae enim ut turpis mollis dapibus. Etiam
                posuere sodales tempor. Praesent erat leo, tristique quis
                hendrerit a, lobortis sit amet lacus. Phasellus et tortor eros.
              </p>
            </div>
            <div className="flex flex-col gap-2 self-start">
              <p className="font-semibold font-montserrat">Name</p>
              <p className="font-light">Position</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col p-8 gap-8 xl:gap-12 xl:px-36 xl:py-24">
        <h2 className="font-montserrat text-6xl font-semibold">Our Culture</h2>
        <div>
          <p className="text-lg xl:text-xl font-light tracking-widest leading-relaxed xl:max-w-[80%]">
            Our collaborative and creative environment fosters a culture of
            continuous learning and growth, empowering our team to push the
            boundaries of what&apos;s possible. By nurturing a supportive and
            inclusive atmosphere, we ensure that every team member can
            contribute their unique perspective and thrive in their roles.
          </p>
        </div>
        <motion.ul
          className="self-center grid grid-cols-1 lg:grid-cols-2 gap-8 w-3/4 text-center"
          variants={StaggeredFadeIn}
          viewport={{ once: true }}
          initial="hidden"
          whileInView="visible"
        >
          <motion.li className="flex flex-col" variants={SlideUp}>
            <h3 className="font-montserrat text-xl">
              Beautiful & Vibrant Work Environment
            </h3>
            <p>
              Espacio Diseño prioritizes aesthetics and functionality in its
              workspace, creating an inspiring environment that encourages
              creativity and collaboration.
            </p>
          </motion.li>
          <motion.li className="flex flex-col" variants={SlideUp}>
            <h3 className="font-montserrat text-xl">Work Hard, Play Hard</h3>
            <p>
              Although our projects can be demanding with tight deadlines, we
              emphasize balance by providing fun activities that allow our
              employees to unwind and relax.
            </p>
          </motion.li>
          <motion.li className="flex flex-col" variants={SlideUp}>
            <h3 className="font-montserrat text-xl">Excellence</h3>
            <p>
              We are committed to maintain high standards and to look for ways
              to continuously enhance the quality of our work.
            </p>
          </motion.li>
          <motion.li className="flex flex-col" variants={SlideUp}>
            <h3 className="font-montserrat text-xl">Passion</h3>
            <p>
              We love what we do, and our enthusiasm fuels motivation and
              engagement, which contributes to the overall productivity of
              Espacio Diseño.
            </p>
          </motion.li>
          <motion.li className="flex flex-col" variants={SlideUp}>
            <h3 className="font-montserrat text-xl">Diversity</h3>
            <p>
              We value different perspectives and backgrounds, promoting
              inclusivity and enriching the creative process.
            </p>
          </motion.li>
          <motion.li className="flex flex-col" variants={SlideUp}>
            <h3 className="font-montserrat text-xl">
              Out of the Box Thinking
            </h3>
            <p>
              We encourage creative thinking, explore new ideas and embrace
              innovative problem-solving. By valuing original solutions and
              unique approaches to challenges, we cultivate a thriving workplace
              where innovation thrives.
            </p>
          </motion.li>
        </motion.ul>
      </div>

      {/* Careers */}
      <motion.div
        className="w-full flex flex-col justify-center items-center gap-8 bg-espacio-green py-8"
        viewport={{ once: true }}
        initial="hidden"
        whileInView="visible"
      >
        <motion.h2
          variants={FadeIn}
          className="text-white text-center text-4xl lg:text-6xl"
        >
          Be part of a <br /> winning team
        </motion.h2>
        <motion.button
          variants={FadeIn}
          className="border border-espacio-red bg-espacio-red text-white px-4 py-2 lg:px-8 lg:py-5 rounded-md"
        >
          See Open Positions
        </motion.button>
      </motion.div>

      <div className="flex flex-col p-8 gap-8 xl:gap-12 xl:px-36 xl:mt-24">
        <h2 className="font-montserrat text-6xl font-semibold">Benefits</h2>
        <div className="text-xl font-light leading-relaxed tracking-widest">
          <p>
            We prioritize the well-being of our employees by offering a
            comprehensive range of benefits as a testament to our appreciation
            for their hard work and dedication. We firmly believe that fostering
            a nurturing and healthy environment not only enhances productivity
            but also helps us attract and retain top talents.
          </p>
          <p className="mt-4">
            In recognition of our employees&apos; contributions, we celebrate
            every milestone of the company by{" "}
            <strong className="uppercase font-bold">giving back</strong> to our
            team.
          </p>
        </div>
        <motion.div
          variants={StaggeredFadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center gap-8"
        >
          {benefits.map(({ title }, i) => (
            <motion.div
              key={i}
              variants={SlideUp}
              className="bg-slate-200 flex flex-col justify-between gap-4 px-6 py-4"
            >
              <div className="flex flex-col gap-4">
                <h4 className="font-montserrat text-xl font-light tracking-wider text-center">
                  {title}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      <div className="px-8 my-12 lg:px-36 lg:mt-24 lg:mb-28 flex flex-col gap-8">
        <h3 className="text-2xl font-montserrat font-light">Open Positions</h3>
        <div>
          <OpenPositionTable data={jobs} />
        </div>
      </div>
    </main>
  );
};

export default CareersView;
