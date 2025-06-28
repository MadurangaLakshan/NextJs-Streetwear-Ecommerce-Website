"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
      ease: "easeOut" as const,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: "easeOut" as const,
    },
  },
};

const textVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2 },
  },
};

const FeaturedCollections = () => {
  return (
    <section className="w-full py-16 md:py-24 bg-white relative font-geist-sans">
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-abril-fatface mb-12 text-center"
          variants={textVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          FEATURED COLLECTIONS
        </motion.h2>

        {/* Animated Grid */}
        <motion.div
          className="grid grid-cols-1 gap-4 h-auto md:grid-cols-6 md:grid-rows-2 md:h-[50vh] lg:h-[60vh] xl:h-[70vh] 2xl:px-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 - Hoodies */}
          <motion.div
            className="h-64 md:h-full md:col-span-2 group cursor-pointer order-1 md:order-2"
            variants={itemVariants}
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/featured/hoodies.png"
                alt="Hoodies collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Hoodies</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 2 - T-Shirts */}
          <motion.div
            className="h-64 md:h-full md:col-span-2 md:row-span-2 group cursor-pointer order-2 md:order-1"
            variants={itemVariants}
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/featured/tshirts.png"
                alt="T-Shirts collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">T-Shirts</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 3 - Pants */}
          <motion.div
            className="h-64 md:h-full md:col-span-2 md:row-span-2 group cursor-pointer order-3"
            variants={itemVariants}
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/featured/pants.png"
                alt="Pants collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Pants</h3>
              </div>
            </div>
          </motion.div>

          {/* Card 4 - Accessories */}
          <motion.div
            className="h-64 md:h-full md:col-span-2 group cursor-pointer order-4 md:order-3"
            variants={itemVariants}
          >
            <div className="relative h-full rounded-2xl overflow-hidden">
              <Image
                src="/featured/accessories.png"
                alt="Accessories collection"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-bold text-white">Accessories</h3>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedCollections;
