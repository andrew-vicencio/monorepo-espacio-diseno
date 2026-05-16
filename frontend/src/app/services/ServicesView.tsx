"use client";

import * as React from "react";
import CallToAction from "@/components/General/CTA/CallToAction";
import { motion } from "framer-motion";
import {
  FadeIn,
  SlideRight,
  SlideLeft,
  SlideDown,
  SlideUp,
  StaggeredFadeIn,
} from "@/components/animations/animations";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

export interface Service {
  title: string;
  description: string[];
  image?: string;
  img?: string;
}

library.add(fas);

const ServicesView = () => {
  const advantages: Service[] = [
    {
      image: "fa-solid fa-list-check",
      title: "Track Record",
      description: [
        "We have been in the business since 2005, gaining valuable knowledge and experience in designing and building a variety of work environments and space solutions. Our expertise allows us to deliver high-quality work and handle complex projects efficiently.",
      ],
    },
    {
      image: "fa-solid fa-pen-fancy",
      title: "Design Creativity",
      description: [
        "We have our own team of talented designers and architects. They possess a strong design sense and the ability to create innovative and visually appealing spaces. We do not outsource the design process.",
      ],
    },
    {
      image: "fa-solid fa-ruler-combined",
      title: "Construction & Project Management Excellence",
      description: [
        "With efficient business processes and strong coordination skills, we ensure that projects are delivered on time and to our client's satisfaction.",
      ],
    },
    {
      image: "fa-solid fa-compass-drafting",
      title: "Quality Craftmanship & Materials",
      description: [
        "We prioritize the use of high-quality materials and excellent craftsmanship in the construction phase of the project.",
      ],
    },
    {
      image: "fa-solid fa-ranking-star",
      title: "Customer Satisfaction",
      description: [
        "We highly value customer satisfaction and strive to exceed client expectations. We maintain strong relationships with clients, seek feedback, and make improvements based on their input.",
      ],
    },
    {
      image: "fa-solid fa-arrows-split-up-and-left",
      title: "Adaptability & Flexibility",
      description: [
        "We can handle various types of projects, accommodate changes and modifications, and adjust our approach based on client feedback or unforeseen circumstances.",
      ],
    },
    {
      image: "fa-solid fa-magnifying-glass-chart",
      title: "Transparency and Integrity",
      description: [
        "We provide clear and detailed project proposals and contracts. We are also honest and upfront about any challenges or limitations that may arise during construction.",
      ],
    },
    {
      image: "fa-solid fa-clipboard-check",
      title: "Compliance and Regulations",
      description: [
        "We ensure compliance of building codes, construction guidelines, and safety regulations.",
      ],
    },
  ];

  const services: Service[] = [
    {
      title: "Design & Planning",
      description: [
        "Our team performs a comprehensive assessment of the space, and after a collaborative discussion with our clients to grasp their specifications and functional needs, our creative team then crafts detailed space planning and design solutions, which include 3D rendering, 3D video walkthrough, materials, finishes and furniture specifications. Additionally, we provide a detailed cost analysis of the project for the client's budget consideration.",
      ],
      img: "/images/services/Service Page/Service 1.jpeg",
    },
    {
      title: "Interior Fit-Out & Project Management",
      description: [
        "After the approval of the floor plan, design and cost proposal, we move forward with the construction and execution of our client's vision, which includes the installation of walls, ceilings, flooring, lighting, and other design elements. We also implement engineering works to ensure that the space is fully functional, including mechanical systems, electrical layouts, structured cabling, plumbing, security systems, and fire safety measures.",
        "Our Construction and Project Management team is dedicated to meet tight deadlines. We establish a detailed timeline prior to implementation to effectively manage client expectations, coordinate with suppliers, and hold regular meetings with our clients to ensure everything stays on track and aligns with their vision.",
      ],
      img: "/images/services/Service Page/service 2 .png",
    },
    {
      title: "Ergonomic & Modular Furniture",
      description: [
        "What sets Espacio Diseño apart from other contractors is our exclusive range of modular and ergonomic furniture. We offer a wide range of modular products for tables, partitions, storage, and ergonomic chairs. Our products prioritize comfort, functionality, and style.",
      ],
      img: "/images/services/Service Page/service 3.jpg",
    },
    {
      title: "Custom Furniture & Specialty Products",
      description: [
        "We also specialize in designing and producing customized furniture, thanks to our own dedicated production line. This allows us to create unique pieces tailored specifically for your space and needs. We also offer a wide range of carpets and window blinds as part of our specialty products.",
      ],
      img: "/images/services/Service Page/Service 4.jpg",
    },
    {
      title: "Allied Facilities Management Services",
      description: [
        "We provide comprehensive services to businesses in the Facilities Management sector, addressing all the needs and requirements of the facilities under their care. As their service partner, our offerings encompass a wide range of solutions, covering everything from repair and maintenance to space optimization and tailored solutions for unique requirements of each facility.",
      ],
      img: "/images/services/Service Page/Services 5.png",
    },
  ];

  return (
    <>
      <main>
        {/* Hero banner */}
        <div className="flex flex-col md:flex-row min-h-[50vh]">
          <div className="lg:max-w-[60vw] bg-espacio-red flex-shrink-0">
            <div className="flex flex-col p-8 md:p-12 md:pl-24 lg:pl-36 gap-8 text-white h-full justify-center">
              <div>
                <p className="font-source-sans uppercase tracking-[0.2em] text-sm font-semibold text-white/70 mb-3">
                  What We Offer
                </p>
                <h1 className="font-montserrat font-bold text-5xl md:text-6xl">
                  Services
                </h1>
              </div>
              <p className="font-source-sans leading-7 tracking-wide text-white/90 max-w-xl">
                Espacio Diseño, Inc is a proudly homegrown Filipino design and
                fit-out contractor, specializing in creating innovative and
                functional corporate and commercial environments. With deep roots
                in the local design landscape, we have also established
                ourselves as a premier provider of Ergonomic, Modular &amp;
                Customized Furniture. Our commitment to quality and precision is
                reflected in every project we undertake — whether it&apos;s
                designing modern office environments or delivering tailored
                furniture solutions that meet our clients&apos; unique needs.
                From design concept development and space planning to material
                selection and sourcing, we handle every stage of the design
                process with meticulous attention to detail.
              </p>
            </div>
          </div>
          <div className="flex-1 min-h-[40vh] md:min-h-full relative overflow-hidden">
            <img
              src="/images/services/Photo Intro Services.jpg"
              alt="Espacio Diseño interior design and fit-out services Philippines"
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Unmatched Advantages */}
        <motion.section
          className="flex flex-col mt-12 p-6 gap-6 md:px-24 lg:px-36 md:mt-16 md:gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={FadeIn}
          aria-label="Our advantages"
        >
          <motion.div variants={SlideDown}>
            <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Why Choose Us
            </p>
            <h2 className="font-montserrat font-light text-3xl md:text-4xl">
              Unmatched Advantages
            </h2>
          </motion.div>
          <motion.p
            className="font-source-sans font-light leading-8 tracking-wide text-lg md:text-xl text-dark-grey md:w-3/4"
            variants={SlideRight}
          >
            Partnering with Espacio Diseño Inc. for your space solutions — whether
            in design, fit-out, or furniture — ensures you will experience
            unparalleled advantages.
          </motion.p>
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 pt-4"
            variants={StaggeredFadeIn}
          >
            {advantages.map(({ image, title, description }, i) => (
              <motion.div
                key={i}
                className="flex flex-col gap-4 p-6 rounded-xl bg-slate-50 hover:bg-iced-green border border-transparent hover:border-espacio-green/20 transition-colors duration-200"
                variants={SlideUp}
              >
                <div className="flex items-center justify-center h-16 text-espacio-red">
                  <FontAwesomeIcon
                    className="text-5xl"
                    icon={image as never}
                  />
                </div>
                <h3 className="font-montserrat uppercase text-sm font-semibold tracking-widest text-center">
                  {title}
                </h3>
                <p className="font-source-sans text-dark-grey text-sm leading-relaxed text-center">{description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* Services detail */}
        <section className="flex flex-col gap-20 p-6 md:px-24 lg:px-36 py-20 md:py-28" aria-label="Service details">
          <div>
            <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-3">
              Our Services
            </p>
            <h2 className="font-montserrat font-light text-3xl md:text-4xl">
              End-to-End Solutions
            </h2>
          </div>
          {services.map((service: Service, i: number) => (
            <motion.div
              key={i}
              className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={FadeIn}
            >
              <motion.div
                className={`rounded-xl overflow-hidden shadow-md ${i % 2 === 0 ? "" : "md:order-2"}`}
                variants={i % 2 === 0 ? SlideRight : SlideLeft}
              >
                <img
                  src={service?.img}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div className="col-span-2 flex flex-col justify-center gap-6" variants={SlideDown}>
                <h3 className="text-2xl md:text-3xl font-montserrat font-semibold">
                  {service.title}
                </h3>
                {service.description.map((desc: string, j: number) => (
                  <p
                    key={j}
                    className="font-source-sans leading-8 tracking-wide text-dark-grey"
                  >
                    {desc}
                  </p>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </section>
      </main>
      <CallToAction />
    </>
  );
};

export default ServicesView;
