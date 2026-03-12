"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Play, Clock, Calendar, TrendingUp, Filter } from "lucide-react";

export default function VideosPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  // Video categories
  const categories = [
    { id: "all", label: "All Videos" },
    { id: "news", label: "News" },
    { id: "entertainment", label: "Entertainment" },
    { id: "sports", label: "Sports" },
    { id: "technology", label: "Technology" },
    { id: "lifestyle", label: "Lifestyle" },
  ];

  // Mock video data
  const videos = [
    {
      id: "v1",
      title: "Breaking: India's Historic World Cup Victory - Full Highlights",
      excerpt: "Relive the most memorable moments from India's thrilling World Cup final victory",
      thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
      duration: "12:45",
      views: "2.3M",
      publishedAt: "2 days ago",
      category: "sports",
      isFeatured: true,
    },
    {
      id: "v2",
      title: "Banita Sandhu Exclusive Interview on Fashion & Career Choices",
      excerpt: "The actress opens up about her journey, style evolution, and upcoming projects",
      thumbnail: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      duration: "18:30",
      views: "856K",
      publishedAt: "1 week ago",
      category: "entertainment",
      isFeatured: true,
    },
    {
      id: "v3",
      title: "AI Revolution in India: Tech Startups Changing the Game",
      excerpt: "Inside look at how Indian AI companies are disrupting global markets",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-8c5b5e9a5d1d?w=800&h=600&fit=crop",
      duration: "15:20",
      views: "542K",
      publishedAt: "3 days ago",
      category: "technology",
      isFeatured: false,
    },
    {
      id: "v4",
      title: "Mumbai Street Food Tour: Hidden Gems You Must Try",
      excerpt: "Exploring the city's best kept culinary secrets with top chefs",
      thumbnail: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=600&fit=crop",
      duration: "22:15",
      views: "1.2M",
      publishedAt: "5 days ago",
      category: "lifestyle",
      isFeatured: false,
    },
    {
      id: "v5",
      title: "Election 2026: Ground Report from Key Battleground States",
      excerpt: "Our correspondents report from the field on voter sentiment and key issues",
      thumbnail: "https://images.unsplash.com/photo-1540910419868-474947be97f4?w=800&h=600&fit=crop",
      duration: "25:00",
      views: "980K",
      publishedAt: "1 day ago",
      category: "news",
      isFeatured: false,
    },
    {
      id: "v6",
      title: "Behind the Scenes: Times Applaud Magazine Photoshoot",
      excerpt: "Exclusive access to our March issue cover shoot with top celebrities",
      thumbnail: "https://images.unsplash.com/photo-1550614000-4b9519e09d6f?w=800&h=600&fit=crop",
      duration: "10:30",
      views: "425K",
      publishedAt: "1 week ago",
      category: "entertainment",
      isFeatured: false,
    },
    {
      id: "v7",
      title: "Cricket Analysis: Breaking Down the Winning Strategy",
      excerpt: "Expert panel discusses tactical decisions that led to victory",
      thumbnail: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
      duration: "28:45",
      views: "675K",
      publishedAt: "4 days ago",
      category: "sports",
      isFeatured: false,
    },
    {
      id: "v8",
      title: "Sustainable Living: Zero Waste Homes in Urban India",
      excerpt: "Meet families who've successfully adopted eco-friendly lifestyles",
      thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=600&fit=crop",
      duration: "16:50",
      views: "389K",
      publishedAt: "6 days ago",
      category: "lifestyle",
      isFeatured: false,
    },
    {
      id: "v9",
      title: "Gadget Review: Latest Smartphones Compared",
      excerpt: "Comprehensive review and comparison of 2026's flagship phones",
      thumbnail: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&h=600&fit=crop",
      duration: "14:20",
      views: "912K",
      publishedAt: "2 days ago",
      category: "technology",
      isFeatured: false,
    },
  ];

  const filteredVideos = activeCategory === "all" 
    ? videos 
    : videos.filter(v => v.category === activeCategory);

  const featuredVideos = videos.filter(v => v.isFeatured);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".videos-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".featured-video", {
        opacity: 0,
        scale: 0.95,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 75%",
        },
      });

      gsap.from(".video-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".videos-grid",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen pt-32" ref={pageRef}>
        <Header />

        {/* Hero Section */}
        <section className="relative pb-20 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="videos-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                VIDEOS
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Watch the latest news, entertainment, sports highlights, and exclusive interviews. 
                Premium video content from Times Applaud.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Videos */}
        <section className="featured-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-8">
              Featured Now
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {featuredVideos.map((video) => (
                <FeaturedVideoCard key={video.id} video={video} />
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <div className="flex items-center gap-4 mb-8 overflow-x-auto pb-4">
              <Filter className="w-5 h-5 text-[#8A8A7C] flex-shrink-0" />
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`font-mono-caps text-xs px-6 py-2 rounded-full whitespace-nowrap transition-colors ${
                    activeCategory === category.id
                      ? 'bg-[#C9A84C] text-[#0A0A0A]'
                      : 'bg-[#2A2A2A] text-[#8A8A7C] hover:text-[#F5F0E8]'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Videos Grid */}
            <div className="videos-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVideos.map((video) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>

            {filteredVideos.length === 0 && (
              <div className="text-center py-20">
                <p className="font-inter text-[#8A8A7C]">No videos found in this category.</p>
              </div>
            )}

            {/* Load More */}
            {filteredVideos.length > 0 && (
              <div className="text-center mt-12">
                <MagneticButton variant="outline" size="lg">
                  LOAD MORE VIDEOS
                </MagneticButton>
              </div>
            )}
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="section-padding bg-[#0A0A0A] border-t border-[#2A2A2A]">
          <div className="container-wide text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              Never Miss a Video
            </h2>
            <p className="font-inter text-lg text-[#8A8A7C] max-w-2xl mx-auto">
              Subscribe to our YouTube channel and newsletter for the latest video content
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://youtube.com/@TimesApplaud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MagneticButton variant="primary" size="lg">
                  SUBSCRIBE ON YOUTUBE
                </MagneticButton>
              </a>
              <Link href="/newsletter">
                <MagneticButton variant="outline" size="lg">
                  GET EMAIL UPDATES
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Sub-components
function FeaturedVideoCard({ video }: { video: any }) {
  return (
    <div className="featured-video group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
        
        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-full bg-[#C9A84C]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <Play className="w-8 h-8 text-[#0A0A0A] ml-1" fill="#0A0A0A" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-4 right-4 bg-[#0A0A0A]/90 px-3 py-1 rounded-sm">
          <span className="font-jetbrains text-xs text-[#F5F0E8]">{video.duration}</span>
        </div>
      </div>

      <h3 className="font-heading text-xl text-[#F5F0E8] mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
        {video.title}
      </h3>
      <p className="font-inter text-sm text-[#8A8A7C] mb-3 line-clamp-2">{video.excerpt}</p>
      
      <div className="flex items-center gap-4 text-xs text-[#8A8A7C]">
        <span className="font-jetbrains flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {video.views} views
        </span>
        <span className="font-jetbrains">{video.publishedAt}</span>
      </div>
    </div>
  );
}

function VideoCard({ video }: { video: any }) {
  return (
    <div className="video-card group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
        <Image
          src={video.thumbnail}
          alt={video.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-14 h-14 rounded-full bg-[#C9A84C]/90 flex items-center justify-center">
            <Play className="w-6 h-6 text-[#0A0A0A] ml-0.5" fill="#0A0A0A" />
          </div>
        </div>

        {/* Duration Badge */}
        <div className="absolute bottom-2 right-2 bg-[#0A0A0A]/90 px-2 py-1 rounded-sm">
          <span className="font-jetbrains text-[10px] text-[#F5F0E8]">{video.duration}</span>
        </div>
      </div>

      <h3 className="font-heading text-base text-[#F5F0E8] mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
        {video.title}
      </h3>
      
      <div className="flex items-center gap-3 text-xs text-[#8A8A7C]">
        <span className="font-jetbrains flex items-center gap-1">
          <TrendingUp className="w-3 h-3" />
          {video.views}
        </span>
        <span>•</span>
        <span className="font-jetbrains">{video.publishedAt}</span>
      </div>
    </div>
  );
}
