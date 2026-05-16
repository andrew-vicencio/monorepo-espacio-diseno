'use client';

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ProductType } from "@/types/product-types";

const ProductGrid = () => {
  const products: ProductType[] = [
    {
      title: 'Desking',
      url: '/products/desking',
      image: '/images/Products/Desking.jpg',
    },
    {
      title: 'Panels',
      url: '/products/panels',
      image: '/images/Products/Panels.jpg',
    },
    {
      title: 'Seating',
      url: '/products/seating',
      image: '/images/Products/Seating.jpg',
    },
    {
      title: 'Storage',
      url: '/products/storage',
      image: '/images/Products/Storage.jpeg',
    },
    {
      title: 'Custom',
      url: '/products/custom',
      image: '/images/Products/Customization.jpg',
    },
  ]

  return (
    <section className="flex flex-col gap-8 px-6 md:px-12 lg:px-36" aria-label="Product categories">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-source-sans text-espacio-red uppercase tracking-[0.2em] text-sm font-semibold mb-2">
            Furniture Solutions
          </p>
          <h2 className="font-montserrat font-light text-3xl md:text-4xl tracking-wide">
            Explore Our Ergonomic &amp; Systems Furniture
          </h2>
        </div>
        <Link
          href="/products"
          className="font-source-sans text-sm font-semibold uppercase tracking-wider text-espacio-red hover:underline underline-offset-4 whitespace-nowrap"
        >
          Browse All Products →
        </Link>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
        {products.map((product, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            whileHover={{ y: -4, transition: { duration: 0.15 } }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            <Link
              href={product.url}
              className="block rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 bg-white group"
            >
              <div className="relative overflow-hidden aspect-square">
                <img
                  draggable="false"
                  src={product.image}
                  alt={`Espacio Diseño ${product.title} office furniture Philippines`}
                  loading={i > 2 ? "lazy" : undefined}
                  className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                />
              </div>
              <div className="text-center py-4 px-2">
                <h3 className="font-montserrat uppercase text-sm md:text-base font-medium tracking-wider">
                  {product.title}
                </h3>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
