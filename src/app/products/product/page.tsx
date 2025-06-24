"use client";

import React from "react";
import { useState } from "react";
import { Star, Minus, Plus, Heart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import * as motion from "motion/react-client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const page = () => {
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("black");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

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
  ];

  const productImages = [
    "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  ];

  const sizes = ["X-Small", "Small", "Medium", "Large", "X-Large", "2X-Large"];
  const colors = [
    { name: "black", color: "#000000" },
    { name: "white", color: "#FFFFFF" },
    { name: "gray", color: "#6B7280" },
  ];

  const reviews = [
    {
      id: 1,
      name: "Samantha D.",
      rating: 5,
      date: "August 14, 2023",
      comment:
        "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    },
    {
      id: 2,
      name: "Alex K.",
      rating: 4,
      date: "August 15, 2023",
      comment:
        "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this shirt definitely gets a thumbs up from me.",
    },
    {
      id: 3,
      name: "Ethan R.",
      rating: 4,
      date: "August 16, 2023",
      comment:
        "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    },
    {
      id: 4,
      name: "Olivia P.",
      rating: 5,
      date: "August 17, 2023",
      comment:
        "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out.",
    },
    {
      id: 5,
      name: "Liam K.",
      rating: 4,
      date: "August 18, 2023",
      comment:
        "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for design.",
    },
    {
      id: 6,
      name: "Ava H.",
      rating: 5,
      date: "August 19, 2023",
      comment:
        "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter.",
    },
  ];

  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
          }`}
        />
      );
    }
    return stars;
  };

  const averageRating =
    reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  const tabVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.2 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };
  return (
    <div className="min-h-screen  max-w-8xl mx-auto px-4 sm:px-6 lg:px-16 pb-12">
      <div className="flex flex-col items-start justify-start w-full p-8 ">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbLink href="/products">Shop</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>product</BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 ">
        <div className="flex gap-4 ">
          {/* Thumbnail Images - Vertical on Left */}
          <div className="flex flex-col space-y-4">
            {productImages.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-20 h-20 md:w-30 md:h-30 lg:w-35 lg:h-35 xl:w-50 2xl:h-50 rounded-lg overflow-hidden border-2 flex-shrink-0 cursor-pointer hover:scale-105 transition-all duration-300 ${
                  selectedImage === index
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
              >
                <img
                  src={image}
                  alt={`Product ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 aspect-square bg-gray-100 rounded-2xl overflow-hidden">
            <img
              src={productImages[selectedImage]}
              alt="Product"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side - Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              One Life Graphic T-shirt
            </h1>
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center">
                {renderStars(Math.floor(averageRating))}
                <span className="ml-2 text-sm text-gray-600">
                  {averageRating.toFixed(1)}/5
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-3xl font-bold text-gray-900">$260</span>
              <span className="text-2xl text-gray-500 line-through">$300</span>
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm font-medium">
                -40%
              </span>
            </div>
          </div>

          <p className="text-gray-600">
            This graphic t-shirt which is perfect for any occasion. Crafted from
            a soft and breathable fabric, it offers superior comfort and style.
          </p>

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Select Colors
            </h3>
            <div className="flex space-x-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  onClick={() => setSelectedColor(color.name)}
                  className={`w-8 h-8 rounded-full border-2 cursor-pointer transition-colors duration-300 ${
                    selectedColor === color.name
                      ? "border-black  hover:border-gray-900"
                      : "border-gray-300"
                  }`}
                  style={{ backgroundColor: color.color }}
                />
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <h3 className="text-sm font-medium text-gray-900 mb-3">
              Choose Size
            </h3>
            <div className="flex flex-wrap gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-full border cursor-pointer transition-colors duration-300${
                    selectedSize === size
                      ? "bg-black  border-black "
                      : "bg-gray-100 text-gray-900 border-gray-300 hover:border-gray-900 "
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border border-gray-300 rounded-full">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-3 hover:bg-gray-100 rounded-l-full cursor-pointer transition-colors duration-300"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="px-4 py-2 min-w-[60px] text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="p-3 hover:bg-gray-100 rounded-r-full cursor-pointer transition-colors duration-300"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <Button className="flex-1 bg-black text-white hover:bg-gray-800 rounded-full py-3 cursor-pointer transition-colors duration-100">
              Add to Cart
            </Button>

            <button className="p-3 border border-gray-300 rounded-full hover:bg-gray-100 cursor-pointer transition-colors duration-300">
              <Heart className="h-5 w-5 " />
            </button>
          </div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="mt-16">
        <Tabs defaultValue="reviews" className="w-full">
          <TabsList className="grid w-full grid-cols-3 rounded-full pb-10">
            <TabsTrigger
              value="details"
              className="rounded-full cursor-pointer "
            >
              Product Details
            </TabsTrigger>
            <TabsTrigger
              value="reviews"
              className="rounded-full cursor-pointer "
            >
              Rating & Reviews
            </TabsTrigger>
            <TabsTrigger
              value="faqs"
              className="rounded-full cursor-pointer p-2"
            >
              FAQs
            </TabsTrigger>
          </TabsList>

          <TabsContent value="reviews" className="mt-8">
            <motion.div
              key="reviews"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <h3 className="text-xl font-semibold">All Reviews</h3>
                  <span className="text-gray-500">({reviews.length})</span>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    Latest
                  </Button>
                  <Button variant="outline" size="sm">
                    Write a Review
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <Card key={review.id}>
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        {renderStars(review.rating)}
                      </div>
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-semibold">{review.name}</h4>
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                      </div>
                      <p className="text-gray-600 mb-2">{review.comment}</p>
                      <p className="text-sm text-gray-500">
                        Posted on {review.date}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="text-center mt-8">
                <Button variant="outline" className="rounded-full">
                  Load More Reviews
                </Button>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="details" className="mt-8">
            <motion.div
              key="reviews"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
            >
              <div className="prose max-w-none">
                <h3>Product Details</h3>
                <ul>
                  <li>100% Cotton</li>
                  <li>Machine wash cold</li>
                  <li>Tumble dry low</li>
                  <li>Do not bleach</li>
                  <li>Iron on low heat</li>
                </ul>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="faqs" className="mt-8">
            <motion.div
              key="reviews"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={tabVariants}
            >
              <Accordion
                type="single"
                collapsible
                className="w-full"
                defaultValue="item-1"
              >
                <AccordionItem value="item-1">
                  <AccordionTrigger className="cursor-pointer">
                    Product Information
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      Our flagship product combines cutting-edge technology with
                      sleek design. Built with premium materials, it offers
                      unparalleled performance and reliability.
                    </p>
                    <p>
                      Key features include advanced processing capabilities, and
                      an intuitive user interface designed for both beginners
                      and experts.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="cursor-pointer">
                    Shipping Details
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We offer worldwide shipping through trusted courier
                      partners. Standard delivery takes 3-5 business days, while
                      express shipping ensures delivery within 1-2 business
                      days.
                    </p>
                    <p>
                      All orders are carefully packaged and fully insured. Track
                      your shipment in real-time through our dedicated tracking
                      portal.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="cursor-pointer">
                    Return Policy
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                      We stand behind our products with a comprehensive 30-day
                      return policy. If you&apos;re not completely satisfied,
                      simply return the item in its original condition.
                    </p>
                    <p>
                      Our hassle-free return process includes free return
                      shipping and full refunds processed within 48 hours of
                      receiving the returned item.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* You might also like Section */}
      <div className="w-full px-4 sm:px-6 lg:px-12 xl:px-16 py-20">
        <h2 className="text-2xl md:text-3xl font-abril-fatface text-center mb-12">
          YOU MIGHT ALSO LIKE
        </h2>
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
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                      {product.discount && (
                        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded text-sm font-medium">
                          -{product.discount}
                        </div>
                      )}
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium text-lg">{product.name}</h3>

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
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default page;
