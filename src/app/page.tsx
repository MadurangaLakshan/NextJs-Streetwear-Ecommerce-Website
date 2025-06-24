"use client";

import Hero from "../components/Hero";
import LatestDropsSection from "../components/LatestDropsSection";
import TopSellingSection from "../components/TopSellingSection";
import MiddleHero from "../components/MiddleHero";
import FeaturedCollections from "../components/FeaturedCollections";

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
