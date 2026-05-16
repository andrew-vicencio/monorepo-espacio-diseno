'use client';

import React from "react";
import { motion } from 'framer-motion';
// 3D render gallery. Source images live in `public/3d-render/`.
const renderImages: string[] = [
  '/3d-render/4.jpeg',
  '/3d-render/5.png',
  '/3d-render/6.png',
  '/3d-render/7.png',
  '/3d-render/8.JPG',
  '/3d-render/9.png',
  '/3d-render/10 - Copy.png',
  '/3d-render/11.jpeg',
  '/3d-render/12.jpeg',
  '/3d-render/14.jpg',
  '/3d-render/15.1.jpg',
  '/3d-render/16.JPG',
  '/3d-render/17.JPG',
  '/3d-render/18.jpeg',
  '/3d-render/19.jpg',
  '/3d-render/20.png',
  '/3d-render/21.png',
  '/3d-render/22.JPG',
  '/3d-render/23.JPG',
  '/3d-render/24.jpg',
  '/3d-render/25.png',
  '/3d-render/26.png',
];

// Each item takes 0.16s. staggerChildren = 0.08s (half) so the next item starts
// when the current one is halfway through — creating visible overlap.
const containerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05, when: "beforeChildren" } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.16, ease: "easeIn" } },
};

const RenderSection = () => {
  return (
    <div className="flex justify-center items-center overflow-hidden max-h-screen">
      <motion.div
        className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 2xl:columns-6 [mask-image:linear-gradient(rgba(0,0,0,0)_0%,#000_50%,rgba(0,0,0,0)_100%)] xl:[mask-image:linear-gradient(#000_0%,rgba(0,0,0,0)_100%)]"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {
          renderImages.map((src, i) => (
            <motion.div
              key={i}
              className="mb-4 bg-espacio-red"
              variants={itemVariant}
            >
              <img src={src} alt={`Espacio Diseño 3D interior design render ${i + 1}`} className="opacity-95" />
            </motion.div>
          ))
        }
      </motion.div>
    </div>
  );
}

export default RenderSection;
