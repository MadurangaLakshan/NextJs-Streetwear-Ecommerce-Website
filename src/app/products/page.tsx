"use client";

import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { useState } from "react";
import { ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";

import { ScrollArea } from "@/components/ui/scroll-area";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const page = () => {
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [selectedColors, setSelectedColors] = useState<string[]>([]);
  const [selectedSizes, setSelectedSizes] = useState<string[]>([]);
  const [selectedDressStyle, setSelectedDressStyle] = useState<string[]>([]);
  const [sortBy, setSortBy] = useState("most-popular");

  const products = [
    {
      id: 1,
      name: "Gradient Graphic T-shirt",
      price: 145,
      originalPrice: null,
      rating: 3.5,
      reviewCount: 35,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 2,
      name: "Polo with Tipping Details",
      price: 180,
      originalPrice: null,
      rating: 4.5,
      reviewCount: 45,
      image:
        "https://images.unsplash.com/photo-1583743814966-8936f37f8d2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 3,
      name: "Black Striped T-shirt",
      price: 120,
      originalPrice: 150,
      rating: 5.0,
      reviewCount: 55,
      image:
        "https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 4,
      name: "Skinny Fit Jeans",
      price: 240,
      originalPrice: 260,
      rating: 3.5,
      reviewCount: 25,
      image:
        "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 5,
      name: "Checkered Shirt",
      price: 180,
      originalPrice: null,
      rating: 4.5,
      reviewCount: 35,
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 6,
      name: "Sleeve Striped T-shirt",
      price: 130,
      originalPrice: 160,
      rating: 4.5,
      reviewCount: 45,
      image:
        "https://images.unsplash.com/photo-1556821840-3a63f95609a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 7,
      name: "Vertical Striped Shirt",
      price: 212,
      originalPrice: 232,
      rating: 5.0,
      reviewCount: 25,
      image:
        "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 8,
      name: "Courage Graphic T-shirt",
      price: 145,
      originalPrice: null,
      rating: 4.0,
      reviewCount: 35,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
    {
      id: 9,
      name: "Loose Fit Bermuda Shorts",
      price: 80,
      originalPrice: null,
      rating: 3.0,
      reviewCount: 15,
      image:
        "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    },
  ];

  const colors = [
    { name: "Green", value: "green", color: "#00C12B" },
    { name: "Red", value: "red", color: "#F50606" },
    { name: "Yellow", value: "yellow", color: "#F5DD06" },
    { name: "Orange", value: "orange", color: "#F57906" },
    { name: "Light Blue", value: "lightblue", color: "#06CAF5" },
    { name: "Blue", value: "blue", color: "#063AF5" },
    { name: "Purple", value: "purple", color: "#7D06F5" },
    { name: "Pink", value: "pink", color: "#F506A4" },
    { name: "White", value: "white", color: "#FFFFFF" },
    { name: "Black", value: "black", color: "#000000" },
  ];

  const sizes = [
    "XX-Small",
    "X-Small",
    "Small",
    "Medium",
    "Large",
    "X-Large",
    "XX-Large",
    "3X-Large",
    "4X-Large",
  ];

  const dressStyles = ["Casual", "Formal", "Party", "Gym"];

  const renderStars = (rating: number) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ★
          </span>
        );
      } else if (i === fullStars && hasHalfStar) {
        stars.push(
          <span key={i} className="text-yellow-400">
            ☆
          </span>
        );
      } else {
        stars.push(
          <span key={i} className="text-gray-300">
            ☆
          </span>
        );
      }
    }
    return stars;
  };

  const handleColorToggle = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
  };

  const handleSizeToggle = (size: string) => {
    setSelectedSizes((prev) =>
      prev.includes(size) ? prev.filter((s) => s !== size) : [...prev, size]
    );
  };

  const handleDressStyleToggle = (style: string) => {
    setSelectedDressStyle((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };
  return (
    <div className="w-full mx-auto px-4 sm:px-6 lg:px-16 pb-4">
      <div className="flex flex-col items-center justify-center w-full ">
        <div className="flex flex-col items-start justify-start w-full py-8 md:p-8">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />

              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <h1 className="text-2xl font-bold pb-8">Casual</h1>
        </div>
      </div>

      <div className="min-h-screen px-4 sm:px-6 lg:px-16 ">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost">
                    <ListFilter className="h-5 w-5 " />
                    <h1 className="text-lg font-semibold">Filter & Sort</h1>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left">
                  <ScrollArea className="h-screen px-6 pt-6 pb-24">
                    <SheetHeader>
                      <SheetTitle>
                        <span className="text-lg font-semibold">
                          Filter & Sort
                        </span>
                      </SheetTitle>
                      <SheetDescription>
                        Make changes to your profile here. Click save when
                        you&apos;re done.
                      </SheetDescription>
                    </SheetHeader>

                    <div className="p-6">
                      <Accordion
                        type="multiple"
                        defaultValue={[
                          "colors",
                          "price",
                          "size",
                          "dress-style",
                        ]}
                      >
                        <AccordionItem value="colors">
                          <AccordionTrigger className="text-sm font-medium">
                            Colors
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-5 gap-3">
                              {colors.map((color) => (
                                <button
                                  key={color.value}
                                  onClick={() => handleColorToggle(color.value)}
                                  className={`w-8 h-8 rounded-full border-2 cursor-pointer ${
                                    selectedColors.includes(color.value)
                                      ? "border-black transition-colors duration-300"
                                      : "border-gray-300 transition-colors duration-300"
                                  }`}
                                  style={{ backgroundColor: color.color }}
                                />
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="price">
                          <AccordionTrigger className="text-sm font-medium">
                            Price
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4 p-2">
                              <Slider
                                value={priceRange}
                                onValueChange={setPriceRange}
                                max={500}
                                min={0}
                                step={10}
                                className="w-full cursor-pointer"
                              />
                              <div className="flex justify-between text-sm text-gray-600">
                                <span>${priceRange[0]}</span>
                                <span>${priceRange[1]}</span>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="size">
                          <AccordionTrigger className="text-sm font-medium">
                            Size
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              {sizes.map((size) => (
                                <div
                                  key={size}
                                  className="flex items-center space-x-2 "
                                >
                                  <Checkbox
                                    id={size}
                                    checked={selectedSizes.includes(size)}
                                    onCheckedChange={() =>
                                      handleSizeToggle(size)
                                    }
                                  />
                                  <label
                                    htmlFor={size}
                                    className="text-sm text-gray-700 cursor-pointer"
                                  >
                                    {size}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="dress-style">
                          <AccordionTrigger className="text-sm font-medium">
                            Dress Style
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-3">
                              {dressStyles.map((style) => (
                                <div
                                  key={style}
                                  className="flex items-center space-x-2"
                                >
                                  <Checkbox
                                    id={style}
                                    checked={selectedDressStyle.includes(style)}
                                    onCheckedChange={() =>
                                      handleDressStyleToggle(style)
                                    }
                                  />
                                  <label
                                    htmlFor={style}
                                    className="text-sm text-gray-700 cursor-pointer"
                                  >
                                    {style}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>

                    <SheetFooter>
                      <Button className="w-full mt-6 bg-black text-white hover:bg-gray-800 transition-colors duration-300 cursor-pointer rounded-full">
                        Apply Filter
                      </Button>
                      <SheetClose asChild>
                        <Button variant="outline" className="cursor-pointer">
                          Close
                        </Button>
                      </SheetClose>
                    </SheetFooter>
                  </ScrollArea>
                </SheetContent>
              </Sheet>

              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-600">67 Products</span>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8 ">
              {products.map((product) => (
                <Card
                  key={product.id}
                  className="group cursor-pointer border-none shadow-none"
                >
                  <CardContent className="p-0">
                    <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <h3 className="font-medium mb-2 text-sm">{product.name}</h3>
                    <div className="flex items-center mb-2">
                      <div className="flex">{renderStars(product.rating)}</div>
                      <span className="ml-2 text-sm text-gray-600">
                        {product.rating}/5
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="font-bold text-lg">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <>
                          <span className="text-gray-500 line-through">
                            ${product.originalPrice}
                          </span>
                          <span className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs font-medium">
                            -
                            {Math.round(
                              (1 - product.price / product.originalPrice) * 100
                            )}
                            %
                          </span>
                        </>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center">
              <Button variant="outline" className="flex items-center space-x-2">
                <span>← Previous</span>
              </Button>

              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>

              <Button variant="outline" className="flex items-center space-x-2">
                <span>Next →</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
