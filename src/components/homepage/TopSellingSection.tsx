"use client";

import React from "react";
import { Star } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

const TopSellingSection = () => {
  const latestDrops = [
    {
      id: 0,
      name: "T-shirt with Tape Details",
      rating: 4.5,
      price: 120,
      originalPrice: null,
      discount: null,
      image: "/tshirt_1.png",
    },
    {
      id: 1,
      name: "Skinny Fit Jeans",
      rating: 3.5,
      price: 240,
      originalPrice: 260,
      discount: "20%",
      image: "/tshirt_2.png",
    },
    {
      id: 2,
      name: "Oversized Cargo Pants",
      rating: 4.5,
      price: 180,
      originalPrice: null,
      discount: null,
      image: "/pant_1.png",
    },
    {
      id: 3,
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: null,
      image: "/tshirt_3.png",
    },
    {
      id: 4,
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: null,
      image: "/pant_2.png",
    },
    {
      id: 5,
      name: "Sleeve Striped T-shirt",
      rating: 4.5,
      price: 130,
      originalPrice: 160,
      discount: null,
      image: "/tshirt_5.png",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star
          key="half"
          className="h-4 w-4 fill-yellow-400/50 text-yellow-400"
        />
      );
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />);
    }

    return stars;
  };

  return (
    <>
      <section
        id="topselling"
        className="w-full py-16 md:py-24 bg-white relative"
      >
        <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl font-abril-fatface mb-12 text-center">
              TOP SELLING
            </h2>
          </motion.div>
          <motion.div
            id="home"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative w-full mx-auto">
              <Carousel
                opts={{
                  align: "start",
                }}
                className="w-full"
              >
                <CarouselContent>
                  {latestDrops.map((product) => (
                    <CarouselItem
                      key={product.id}
                      className="lg:px-10 basis-full sm:basis-1/2 lg:basis-1/3 xl:basis-1/4 cursor-pointer"
                    >
                      <div className="space-y-3">
                        <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[3/4]">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                          {product.discount && (
                            <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                              -{product.discount}
                            </div>
                          )}
                        </div>

                        <div className="space-y-2">
                          <h3 className="font-medium text-lg">
                            {product.name}
                          </h3>

                          <div className="flex items-center gap-2">
                            <div className="flex items-center">
                              {renderStars(product.rating)}
                            </div>
                            <span className="text-sm text-gray-600">
                              {product.rating}/5
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xl font-bold">
                              ${product.price}
                            </span>
                            {product.originalPrice && (
                              <span className="text-lg text-gray-500 line-through">
                                ${product.originalPrice}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-6 h-12 w-12 cursor-pointer hidden md:flex" />
                <CarouselNext className="-right-6 h-12 w-12 cursor-pointer hidden md:flex" />
              </Carousel>
            </div>
            <div className="text-center mt-12">
              <button className="border-2 border-gray-900 text-gray-900 px-10 py-3 font-medium hover:bg-gray-900 hover:text-white transition-colors rounded-full cursor-pointer">
                View All
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      <div className="mt-16 md:mt-20 px-10">
        <Separator className="bg-gray-200" />
      </div>
    </>
  );
};

export default TopSellingSection;
