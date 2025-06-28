"use client";

import React from "react";
import { Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative">
      {/* Newsletter Section */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-black rounded-2xl p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-white mb-6 md:mb-0 text font-bebas-neue text-6xl">
              <h3 className="mb-2">STAY UPTO DATE ABOUT</h3>
              <h3 className="">OUR LATEST OFFERS</h3>
            </div>
            <div className="flex flex-col space-y-4 w-full md:w-auto">
              <div className="flex items-center bg-white rounded-full py-2 px-4 w-full md:w-80">
                <Mail className="text-gray-400 h-5 w-5 mr-3" />
                <Input
                  type="email"
                  placeholder="Enter your email address..."
                  className="flex-1 bg-transparent focus:outline-none outline-none border-none"
                />
              </div>
              <Button className="bg-white text-black hover:bg-gray-100 rounded-full py-3 font-semibold cursor-pointer hover:scale-105 transition-all duration-500">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Grey background section that starts at the exact halfway point */}
      <div className="bg-gray-200 relative -mt-38 lg:-mt-26 pt-20 pb-16 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1">
              <Link href="/">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-24 h-auto sm:w-32 pt-5 md:pt-0 hover:cursor-pointer"
                  priority
                />
              </Link>
              <p className="text-gray-600 mb-6 pt-6 font-bold font-inter">
                We have clothes that suits your style and which you're proud to
                wear. From women to men.
              </p>
              <div className="flex space-x-4">
                <div className="border-1 border-gray-500 bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-105 duration-300">
                  <Instagram />
                </div>
                <div className="border-1 border-gray-500 bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-105 duration-300">
                  <Facebook />
                </div>
                <div className="border-1 border-gray-500 bg-white rounded-full flex items-center justify-center p-2 cursor-pointer hover:scale-105 duration-300">
                  <Twitter className="" />
                </div>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                Help
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Customer Support
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Delivery Details
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Terms & Conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* FAQ Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4 uppercase tracking-wide">
                FAQ
              </h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Account
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Manage Deliveries
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Orders
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-600 hover:text-gray-900">
                    Payments
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                Onirica © 2025, All Rights Reserved
              </p>
              <div className="flex space-x-4">
                <div className="bg-white rounded-md p-2 flex items-center justify-center">
                  <Image
                    src="/paymentMethods/Visa.png"
                    alt="Visa"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="bg-white rounded-md p-2  flex items-center justify-center">
                  <Image
                    src="/paymentMethods/Paypal.png"
                    alt="Paypal"
                    width={48}
                    height={48}
                    className="object-contain "
                    priority
                  />
                </div>
                <div className="bg-white rounded-md p-2 flex items-center justify-center">
                  <Image
                    src="/paymentMethods/Mastercard.png"
                    alt="Mastercard"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
                <div className="bg-white rounded-md p-2 flex items-center justify-center">
                  <Image
                    src="/paymentMethods/Koko.png"
                    alt="Koko"
                    width={48}
                    height={48}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
