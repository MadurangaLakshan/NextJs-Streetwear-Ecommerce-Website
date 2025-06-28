"use client";

import Hero from "../components/homepage/Hero";
import LatestDropsSection from "../components/homepage/LatestDropsSection";
import TopSellingSection from "../components/homepage/TopSellingSection";
import MiddleHero from "../components/homepage/MiddleHero";
import FeaturedCollections from "../components/homepage/FeaturedCollections";

export default function Home() {
  return (
    <>
      <Hero />
      <LatestDropsSection />
      <MiddleHero />
      <TopSellingSection />
      <FeaturedCollections />
    </>
  );
}
