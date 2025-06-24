"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";

import {
  Sheet,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Search, User, ShoppingCart, ChevronDown, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ReactCountryFlag from "react-country-flag";
import countryList from "react-select-country-list";
import { usePathname } from "next/navigation";

const navbar = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSearchClosing, setIsSearchClosing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("LK");

  const countries = countryList().getData();

  const currencyMap: Record<string, string> = {
    US: "USD",
    GB: "GBP",
    EU: "EUR",
    CA: "CAD",
    AU: "AUD",
    JP: "JPY",
    CN: "CNY",
    IN: "INR",
    BR: "BRL",
    MX: "MXN",
    SG: "SGD",
    HK: "HKD",
    NZ: "NZD",
    ZA: "ZAR",
    KR: "KRW",
    MY: "MYR",
    TH: "THB",
    ID: "IDR",
    PH: "PHP",
    VN: "VND",
    TR: "TRY",
    RU: "RUB",
    AE: "AED",
    SA: "SAR",
    EG: "EGP",
    NG: "NGN",
    KE: "KES",
    GH: "GHS",
    MA: "MAD",
    TN: "TND",
    DZ: "DZD",
    ET: "ETB",
    UG: "UGX",
    TZ: "TZS",
    ZW: "ZWL",
    BW: "BWP",
    MZ: "MZN",
    ZM: "ZMW",
    MW: "MWK",
    SZ: "SZL",
    LS: "LSL",
    NA: "NAD",
    MG: "MGA",
    MU: "MUR",
    SC: "SCR",
    RE: "EUR",
    YT: "EUR",
    KM: "KMF",
    DJ: "DJF",
    SO: "SOS",
    ER: "ERN",
    SS: "SSP",
    SD: "SDG",
    CF: "XAF",
    TD: "XAF",
    CM: "XAF",
    GQ: "XAF",
    GA: "XAF",
    CG: "XAF",
    AO: "AOA",
    CD: "CDF",
    BI: "BIF",
    RW: "RWF",
    ST: "STN",
    CV: "CVE",
    GW: "XOF",
    GN: "GNF",
    SL: "SLL",
    LR: "LRD",
    CI: "XOF",
    BF: "XOF",
    ML: "XOF",
    NE: "XOF",
    SN: "XOF",
    MR: "MRU",
    GM: "GMD",
    GY: "GYD",
    SR: "SRD",
    UY: "UYU",
    PY: "PYG",
    BO: "BOB",
    PE: "PEN",
    EC: "USD",
    CO: "COP",
    VE: "VES",
    CL: "CLP",
    AR: "ARS",
    FK: "FKP",
    GS: "GBP",
    CR: "CRC",
    PA: "PAB",
    NI: "NIO",
    HN: "HNL",
    BZ: "BZD",
    GT: "GTQ",
    SV: "USD",
    DO: "DOP",
    HT: "HTG",
    JM: "JMD",
    CU: "CUP",
    BS: "BSD",
    BB: "BBD",
    TT: "TTD",
    GD: "XCD",
    VC: "XCD",
    LC: "XCD",
    DM: "XCD",
    AG: "XCD",
    KN: "XCD",
    AI: "XCD",
    MS: "XCD",
    VG: "USD",
    VI: "USD",
    PR: "USD",
    TC: "USD",
    KY: "KYD",
    BM: "BMD",
    GL: "DKK",
    FO: "DKK",
    IS: "ISK",
    NO: "NOK",
    SE: "SEK",
    FI: "EUR",
    DK: "DKK",
    EE: "EUR",
    LV: "EUR",
    LT: "EUR",
    PL: "PLN",
    CZ: "CZK",
    SK: "EUR",
    HU: "HUF",
    SI: "EUR",
    HR: "EUR",
    BA: "BAM",
    RS: "RSD",
    ME: "EUR",
    MK: "MKD",
    AL: "ALL",
    BG: "BGN",
    RO: "RON",
    MD: "MDL",
    UA: "UAH",
    BY: "BYN",
    LI: "CHF",
    CH: "CHF",
    AT: "EUR",
    DE: "EUR",
    LU: "EUR",
    BE: "EUR",
    NL: "EUR",
    FR: "EUR",
    MC: "EUR",
    AD: "EUR",
    ES: "EUR",
    PT: "EUR",
    IT: "EUR",
    VA: "EUR",
    SM: "EUR",
    MT: "EUR",
    CY: "EUR",
    GR: "EUR",
    MQ: "EUR",
    GP: "EUR",
    GF: "EUR",
    NC: "XPF",
    PF: "XPF",
    WF: "XPF",
    CK: "NZD",
    NU: "NZD",
    TK: "NZD",
    TV: "AUD",
    NR: "AUD",
    KI: "AUD",
    WS: "WST",
    TO: "TOP",
    FJ: "FJD",
    VU: "VUV",
    SB: "SBD",
    PG: "PGK",
    FM: "USD",
    MH: "USD",
    PW: "USD",
    AS: "USD",
    GU: "USD",
    MP: "USD",
    UM: "USD",
    UZ: "UZS",
    TM: "TMT",
    TJ: "TJS",
    KG: "KGS",
    KZ: "KZT",
    MN: "MNT",
    AF: "AFN",
    PK: "PKR",
    BD: "BDT",
    BT: "BTN",
    NP: "NPR",
    LK: "LKR",
    MV: "MVR",
    MM: "MMK",
    LA: "LAK",
    KH: "KHR",
    BN: "BND",
    TL: "USD",
    IR: "IRR",
    IQ: "IQD",
    SY: "SYP",
    LB: "LBP",
    JO: "JOD",
    IL: "ILS",
    PS: "ILS",
    KW: "KWD",
    BH: "BHD",
    QA: "QAR",
    OM: "OMR",
    YE: "YER",
    GE: "GEL",
    AM: "AMD",
    AZ: "AZN",
  };

  const getCurrency = (countryCode: string) => {
    return currencyMap[countryCode] || "USD";
  };

  const categories = [
    { name: "SHOP ALL", href: "/products" },
    { name: "T-SHIRTS", href: "/products/t-shirts" },
    { name: "HOODIES & JACKETS", href: "/products/shirts" },
    { name: "PANTS", href: "/products/polos" },
    { name: "ACCESSORIES", href: "/products/shorts" },
  ];

  const collections = [
    { name: "PREMIUM", href: "/collections/premium" },
    { name: "OVERSIZE TEE", href: "/collections/oversize" },
    { name: "ESSENTIALS", href: "/collections/essentials" },
    { name: "SEAMLESS", href: "/collections/seamless" },
  ];

  const handleCloseSearch = () => {
    setIsSearchClosing(true);
    setTimeout(() => {
      setIsSearchOpen(false);
      setIsSearchClosing(false);
    }, 300);
  };

  return (
    <div className="flex flex-col justify-center items-center shadow-md bg-white top-0 sticky z-50 ">
      <div className="bg-black text-white w-full h-10 flex justify-center items-center">
        <p className="text-xs sm:text-sm font-inter">
          Sign up and get 15% off to your first order. Sign Up Now.{" "}
        </p>
      </div>

      <div className="flex justify-between items-center px-5 py-5 lg:px-16 w-full">
        <div className="flex items-center lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80">
              <SheetTitle className="sr-only">Main Menu</SheetTitle>
              <div className="mt-6 space-y-6 px-5">
                <div>
                  <div className="space-y-2">
                    {categories.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {collections.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block text-sm text-gray-600 hover:text-gray-900"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex gap-6 items-center justify-center">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={0}
              height={0}
              sizes="100vw"
              className="w-24 h-auto sm:w-32 hover:cursor-pointer"
              priority
            />
          </Link>

          <div className="hidden lg:flex items-center space-x-8 font-geist-sans">
            {/* Shop Dropdown */}
            <div className="relative group">
              <button className="flex items-center space-x-1 font-medium  text-gray-700 hover:text-gray-900 transition-colors hover:cursor-pointer">
                <span>SHOP</span>
                <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
              </button>
              <div className="absolute left-0 top-full mt-1 w-64 p-4 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 ">SHOP</h4>
                    {categories.slice(0, 6).map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 hover:text-gray-900 relative group/item transition-colors duration-200"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/item:w-full"></span>
                        </span>
                      </a>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">
                      COLLECTIONS
                    </h4>
                    {collections.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="block py-1 text-sm text-gray-600 hover:text-gray-900 relative group/item transition-colors duration-200"
                      >
                        <span className="relative">
                          {item.name}
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/item:w-full"></span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-6 font-geist-sans">
            <div className="block py-1 text-gray-600 hover:text-gray-900 relative group/item transition-colors duration-200 cursor-pointer">
              <Link
                href={{ pathname: "/", hash: "latest" }}
                className="relative font-medium"
              >
                ON SALE
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/item:w-full"></span>
              </Link>
            </div>
            <div className="block py-1 text-gray-600 hover:text-gray-900 relative group/item transition-colors duration-200 cursor-pointer">
              <Link
                href={{ pathname: "/", hash: "topselling" }}
                className="relative font-medium"
              >
                NEW DROPS
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/item:w-full"></span>
              </Link>
            </div>
            <div className="block py-1 text-gray-600 hover:text-gray-900 relative group/item transition-colors duration-200 cursor-pointer">
              <Link
                href={{ pathname: "/", hash: "latest" }}
                className="relative font-medium"
              >
                CONTACT
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-900 transition-all duration-300 group-hover/item:w-full"></span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center space-x-4 font-main">
          {/* Search Bar - click to open overlay */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="relative group"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 z-10" />
              <div className="pl-10 pr-4 py-2 w-32 hover:w-80 bg-gray-50 border border-gray-200 rounded-full focus:ring-2 focus:ring-gray-200 focus:border-gray-300 transition-all duration-300 cursor-pointer text-left text-sm text-gray-500">
                Search...
              </div>
            </button>
          </div>

          {/* Mobile Search */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 md:hidden"
            onClick={() => setIsSearchOpen(true)}
          >
            <Search className="h-5 w-5" />
          </Button>

          {/* Country Selector */}
          <div className="hidden sm:flex items-center cursor-pointer">
            <Select value={selectedCountry} onValueChange={setSelectedCountry}>
              <SelectTrigger className="w-24 h-8 text-xs border-none bg-transparent hover:bg-gray-50 cursor-pointer">
                <div className="flex items-center space-x-1">
                  <ReactCountryFlag
                    countryCode={selectedCountry}
                    svg
                    style={{ width: "1em", height: "1em" }}
                  />
                  <span className="text-xs">
                    {getCurrency(selectedCountry)}
                  </span>
                </div>
              </SelectTrigger>
              <SelectContent className="max-h-60 overflow-y-auto">
                {countries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    <div className="flex items-center space-x-2">
                      <ReactCountryFlag
                        countryCode={country.value}
                        svg
                        style={{ width: "1em", height: "1em" }}
                      />
                      <span className="text-sm">{country.label}</span>
                      <span className="text-xs text-gray-500 ml-auto">
                        {getCurrency(country.value)}
                      </span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Shopping Cart */}
          <Button
            variant="ghost"
            size="sm"
            className="p-2 relative cursor-pointer"
          >
            <ShoppingCart className="h-5 w-5" />

            <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              0
            </span>
          </Button>

          {/* User Account */}
          <Button variant="ghost" size="sm" className="p-2 cursor-pointer">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -100, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-0 z-[60] bg-white border-b border-gray-200 shadow-lg py-10"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-20">
                <div className="flex-1 max-w-2xl mx-auto">
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Search for products..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-14 pr-4 py-4 text-lg border-2 border-gray-200 rounded-full focus:ring-2 focus:ring-gray-300 focus:border-gray-400 bg-gray-50"
                      autoFocus
                    />
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  className="p-2 ml-4 cursor-pointer"
                  onClick={handleCloseSearch}
                >
                  <X className="h-6 w-6" />
                </Button>
              </div>
              {searchQuery && (
                <div className="pb-4">
                  <div className="text-sm text-gray-500">
                    Searching for "{searchQuery}"...
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-[55]"
            onClick={handleCloseSearch}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default navbar;
