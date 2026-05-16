'use client';

import React from 'react';
import { motion } from 'framer-motion';

const ClientCarousel = () => {
  const clientsMap = [
    { img: '/clients/svg/facebook.svg', name: 'Facebook' },
    { img: '/clients/svg/adidas.svg', name: 'Adidas' },
    { img: '/clients/svg/agoda.svg', name: 'Agoda' },
    { img: '/clients/svg/alaska.svg', name: 'Alaska' },
    { img: '/clients/svg/amdocs.svg', name: 'Amdocs' },
    { img: '/clients/svg/cathay-pacific.svg', name: 'Cathay Pacific' },
    { img: '/clients/svg/cognizant.svg', name: 'Cognizant' },
    { img: '/clients/svg/daikin.svg', name: 'Daikin' },
    { img: '/clients/svg/lufthansa.svg', name: 'Lufthansa' },
  ]

  return (
    <section className="mt-24 md:px-12 lg:px-24 xl:px-36 overflow-hidden" aria-label="Our clients">
      <div className="flex flex-col gap-6">
        <div className="px-6 md:px-0">
          <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Our Clients
          </p>
          <h2 className="font-montserrat font-light text-3xl md:text-4xl tracking-wide">
            Trusted by Leading Brands
          </h2>
        </div>
        <div className="relative overflow-hidden py-8">
          {/* Fade masks */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
            style={{ background: 'linear-gradient(to right, white, transparent)' }}
          />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
            style={{ background: 'linear-gradient(to left, white, transparent)' }}
          />
          {/*
            One strip with logos duplicated inside. Total width = 2x one strip.
            Animating to -50% moves exactly one full strip to the left, then loops
            seamlessly back to 0. Each logo sits in a fixed w-36 h-16 box so
            different SVG aspect ratios don't affect spacing.
          */}
          <motion.div
            className="flex items-center"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
          >
            {[0, 1].map((copy) =>
              clientsMap.map(({ img, name }, j) => (
                <div
                  key={`${copy}-${j}`}
                  className="flex-shrink-0 w-36 h-16 flex items-center justify-center px-4"
                >
                  <img
                    src={img}
                    alt={name}
                    loading="lazy"
                    className="max-w-full max-h-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ClientCarousel;
