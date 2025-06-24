"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/hero.png"
            alt="Luxury streetwear"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 text-white px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="max-w-4xl">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="font-freedom leading-tight mb-12 tracking-tight text-left">
                <span className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem]">
                  PREMIUM THREADS
                </span>
                <br />
                <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[8rem]">
                  WITH STREET BORN ATTITUDE
                </span>
              </h1>
            </motion.div>
          </div>

          {/* Centered content section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center text-center max-w-7xl mx-auto font-geist-sans">
              <p className="text-base md:text-lg lg:text-xl text-gray-200 mb-8 max-w-2xl ">
                Browse through our diverse range of meticulously crafted
                garments, designed to bring out your individuality and cater to
                your sense of style.
              </p>
              <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <button className="border-2 bg-gray-950 border-gray-900 text-white px-8 py-4 font-bold text-sm hover:bg-gray-950/75 transition-colors rounded-full cursor-pointer font-geist-sans">
                  SHOP NOW
                  <ShoppingBag className="inline ml-2" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
