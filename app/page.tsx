"use client";

import { useEffect, useState } from "react";
import PreLoader from "@/components/sections/PreLoader";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import TrendingNow from "@/components/sections/TrendingNow";
import LatestNews from "@/components/sections/LatestNews";
import CategorySpotlights from "@/components/sections/CategorySpotlights";
import InspiringLeaders from "@/components/sections/InspiringLeaders";
import Magazine from "@/components/sections/Magazine";
import VideoSection from "@/components/sections/VideoSection";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial load
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <PreLoader />;
  }

  return (
    <>
      {/* PreLoader - Shows only on first visit */}
      <PreLoader />

      {/* Custom Cursor (hidden on touch devices) */}
      <CustomCursor />

      {/* Main Content */}
      <main className="relative pt-32">
        {/* Header with Breaking News Ticker */}
        <Header />

        {/* Hero Section */}
        <Hero />

        {/* Trending Now - Horizontal Scroll */}
        <TrendingNow />

        {/* Latest News - Bento Grid */}
        <LatestNews />

        {/* Category Spotlights - Tabbed Section */}
        <CategorySpotlights />

        {/* Inspiring Leaders Feature */}
        <InspiringLeaders />

        {/* Digital Magazine */}
        <Magazine />

        {/* Video Section */}
        <VideoSection />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
