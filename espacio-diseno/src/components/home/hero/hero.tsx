'use client';

import * as React from "react";
import './styles.css';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroComponent = () => {
  const vid = "https://pub-61f3ed2bee1d4cb4a3d805820ec2d524.r2.dev/hero.webm";
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Video container */}
      <div className="relative w-full overflow-hidden" style={{ maxHeight: '88vh', minHeight: '60vh' }}>
        <video
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ minHeight: '60vh', maxHeight: '88vh' }}
        >
          <source src={vid} type="video/webm" />
        </video>

        {/* Dark gradient overlay for text contrast */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.35) 55%, rgba(0,0,0,0.1) 100%)'
          }}
        />

        {/* Hero content */}
        <motion.div
          className="absolute inset-0 flex flex-col justify-end pb-12 px-8 md:px-16 lg:px-36 lg:pb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
        >
          <div className="max-w-2xl">
            <p className="font-source-sans text-espacio-green uppercase tracking-[0.25em] text-sm md:text-base font-semibold mb-3">
              Interior Design &amp; Fit-Out Philippines
            </p>
            <h1 className="font-montserrat text-white font-bold leading-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              Your Space,<br />Our Masterpiece
            </h1>
            <p className="font-source-sans text-slate-200 font-light leading-relaxed mb-8"
              style={{ fontSize: 'clamp(1rem, 2vw, 1.25rem)' }}
            >
              End-to-end interior design and fit-out for offices, retail spaces,
              and commercial environments across the Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-us"
                className="inline-block text-center font-source-sans font-semibold uppercase tracking-wider text-sm text-white bg-espacio-red rounded-md px-8 py-4 border-2 border-espacio-red hover:bg-white hover:text-espacio-red transition-colors duration-200"
              >
                Book a Free Consultation
              </Link>
              <Link
                href="/portfolio"
                className="inline-block text-center font-source-sans font-semibold uppercase tracking-wider text-sm text-white rounded-md px-8 py-4 border-2 border-white hover:bg-white hover:text-black transition-colors duration-200"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default HeroComponent;
