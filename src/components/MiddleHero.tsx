"use client";

import React from "react";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { motion } from "framer-motion";

const MiddleHero = () => {
  return (
    <div className="relative flex flex-row items-center justify-between w-full h-[700px] lg:h-[800px] px-8 bg-gradient-to-b from-gray-300 to-gray-900 ">
      <div>
        <Image
          src="/mid_hero.png"
          alt="Hero Image"
          height={1100}
          width={1100}
          className="absolute left-0 bottom-0"
        ></Image>
      </div>

      <div className="z-10 lg:pr-40">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-8xl lg:text-9xl xl:text-[10rem] font-freedom text-yellow-300 text-center">
            FIND CLOTHES THAT <br /> MATCHES YOUR STYLE
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex flex-col items-center justify-center ">
            <p className="mt-4 text-lg md:text-xl text-gray-200 text-center max-w-2xl font-geist-sans">
              Explore our curated collection of premium streetwear, designed to
              elevate your wardrobe and express your unique style.
            </p>
            <button className="border-2 bg-gray-950 border-gray-900 text-white px-8 py-4 mt-5  font-bold text-sm hover:bg-gray-950/75 transition-colors rounded-full cursor-pointer  font-geist-sans">
              SHOP NOW
              <ShoppingBag className="inline ml-2" />
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default MiddleHero;
