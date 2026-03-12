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
import { Play, Clock, Calendar, Headphones, TrendingUp, Mic } from "lucide-react";

export default function PodcastsPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState<string | null>(null);

  // Podcast episodes data
  const episodes = [
    {
      id: "p1",
      title: "The World Cup Victory: Inside India's Dressing Room",
      host: "Vikram Singh",
      guest: "Team India Players",
      duration: "52:30",
      publishedAt: "March 10, 2026",
      plays: "450K",
      category: "Sports",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=800&fit=crop",
      description: "Exclusive interviews with the heroes of India's historic World Cup triumph. Hear untold stories from the tournament.",
    },
    {
      id: "p2",
      title: "Bollywood's OTT Revolution with Karan Johar",
      host: "Priya Sharma",
      guest: "Karan Johar",
      duration: "1:08:45",
      publishedAt: "March 8, 2026",
      plays: "680K",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=800&fit=crop",
      description: "The legendary filmmaker discusses how streaming platforms have transformed Bollywood storytelling and star power.",
    },
    {
      id: "p3",
      title: "AI Startups: India's Next Big Thing",
      host: "Rajesh Kumar",
      guest: "Tech Entrepreneurs",
      duration: "45:20",
      publishedAt: "March 5, 2026",
      plays: "320K",
      category: "Technology",
      image: "https://images.unsplash.com/photo-1485827404703-8c5b5e9a5d1d?w=800&h=800&fit=crop",
      description: "Meet the founders building billion-dollar AI companies in Bangalore, Hyderabad, and beyond.",
    },
    {
      id: "p4",
      title: "Wellness Warriors: Gen Z's Health Revolution",
      host: "Dr. Sneha Patel",
      guest: "Fitness Experts & Influencers",
      duration: "38:15",
      publishedAt: "March 3, 2026",
      plays: "275K",
      category: "Lifestyle",
      image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&h=800&fit=crop",
      description: "How young India is redefining health, fitness, and mental wellness in the digital age.",
    },
    {
      id: "p5",
      title: "Fashion Forward: Sustainable Style with Designers",
      host: "Anjali Mehta",
      guest: "Top Fashion Designers",
      duration: "42:50",
      publishedAt: "March 1, 2026",
      plays: "198K",
      category: "Fashion",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea8f2c00?w=800&h=800&fit=crop",
      description: "Leading designers discuss eco-friendly fashion and India's influence on global sustainable style.",
    },
    {
      id: "p6",
      title: "Election 2026: What the Polls Don't Tell You",
      host: "Taushif Patel",
      guest: "Political Analysts",
      duration: "55:30",
      publishedAt: "February 28, 2026",
      plays: "520K",
      category: "News",
      image: "https://images.unsplash.com/photo-1540910419868-474947be97f4?w=800&h=800&fit=crop",
      description: "Deep dive into ground realities, voter sentiment, and the issues shaping India's biggest election.",
    },
  ];

  const trendingEpisodes = episodes.slice(0, 3);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".podcasts-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".trending-episode", {
        opacity: 0,
        x: -30,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trending-section",
          start: "top 75%",
        },
      });

      gsap.from(".episode-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".episodes-section",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const togglePlay = (id: string) => {
    setIsPlaying(isPlaying === id ? null : id);
  };

  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen pt-32" ref={pageRef}>
        <Header />

        {/* Hero Section */}
        <section className="relative pb-20 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="podcasts-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                PODCASTS
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Deep conversations, exclusive interviews, and thought-provoking discussions. 
                Times Applaud Podcasts bring you stories worth hearing.
              </p>
            </div>
          </div>
        </section>

        {/* Trending Episodes */}
        <section className="trending-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-8 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-[#C9A84C]" />
              Trending Now
            </h2>

            <div className="space-y-6">
              {trendingEpisodes.map((episode, index) => (
                <TrendingEpisodeCard
                  key={episode.id}
                  episode={episode}
                  rank={index + 1}
                  isPlaying={isPlaying === episode.id}
                  onToggle={() => togglePlay(episode.id)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Episodes */}
        <section className="episodes-section section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Latest Episodes
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Fresh conversations every week across sports, entertainment, technology, and more
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {episodes.map((episode) => (
                <EpisodeCard
                  key={episode.id}
                  episode={episode}
                  isPlaying={isPlaying === episode.id}
                  onToggle={() => togglePlay(episode.id)}
                />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <MagneticButton variant="outline" size="lg">
                LOAD MORE EPISODES
              </MagneticButton>
            </div>
          </div>
        </section>

        {/* Subscribe CTA */}
        <section className="section-padding bg-[#0A0A0A] border-t border-[#2A2A2A]">
          <div className="container-wide text-center space-y-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#C9A84C]/20 mb-4">
              <Headphones className="w-10 h-10 text-[#C9A84C]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              Subscribe to Our Podcasts
            </h2>
            <p className="font-inter text-lg text-[#8A8A7C] max-w-2xl mx-auto">
              Listen on your favorite platform - Spotify, Apple Podcasts, Google Podcasts, or anywhere you get your podcasts
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <MagneticButton variant="primary" size="lg">
                <SpotifyIcon className="w-5 h-5 mr-2" />
                SPOTIFY
              </MagneticButton>
              <MagneticButton variant="outline" size="lg">
                <AppleIcon className="w-5 h-5 mr-2" />
                APPLE PODCASTS
              </MagneticButton>
              <MagneticButton variant="outline" size="lg">
                <GoogleIcon className="w-5 h-5 mr-2" />
                GOOGLE PODCASTS
              </MagneticButton>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Sub-components
function TrendingEpisodeCard({ episode, rank, isPlaying, onToggle }: any) {
  return (
    <div className="trending-episode group p-6 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50 hover:border-[#C9A84C]/50 transition-all">
      <div className="flex gap-6">
        {/* Rank Number */}
        <span className="font-display text-4xl text-[#8A8A7C]/30 group-hover:text-[#C9A84C]/50 transition-colors">
          {String(rank).padStart(2, '0')}
        </span>

        {/* Episode Art */}
        <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden rounded-sm">
          <Image
            src={episode.image}
            alt={episode.title}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
          <button
            onClick={onToggle}
            className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <div className="w-12 h-12 rounded-full bg-[#C9A84C] flex items-center justify-center">
              {isPlaying ? (
                <div className="flex gap-1">
                  <span className="w-1 h-4 bg-[#0A0A0A] animate-pulse" />
                  <span className="w-1 h-6 bg-[#0A0A0A] animate-pulse delay-75" />
                  <span className="w-1 h-4 bg-[#0A0A0A] animate-pulse" />
                </div>
              ) : (
                <Play className="w-5 h-5 text-[#0A0A0A] ml-0.5" fill="#0A0A0A" />
              )}
            </div>
          </button>
        </div>

        {/* Episode Info */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono-caps text-xs px-3 py-1 bg-[#C9A84C]/20 text-[#C9A84C] rounded-full">
              {episode.category}
            </span>
            <span className="font-jetbrains text-xs text-[#8A8A7C] flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {episode.duration}
            </span>
          </div>

          <h3 className="font-heading text-xl text-[#F5F0E8] mb-2 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
            {episode.title}
          </h3>

          <p className="font-inter text-sm text-[#8A8A7C] mb-3 line-clamp-2">
            {episode.description}
          </p>

          <div className="flex items-center gap-4 text-xs text-[#8A8A7C]">
            <span className="font-jetbrains">Host: {episode.host}</span>
            <span>•</span>
            <span className="font-jetbrains">{episode.guest}</span>
            <span>•</span>
            <span className="font-jetbrains flex items-center gap-1">
              <TrendingUp className="w-3 h-3" />
              {episode.plays} plays
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function EpisodeCard({ episode, isPlaying, onToggle }: any) {
  return (
    <div className="episode-card group cursor-pointer">
      <div className="relative aspect-square overflow-hidden rounded-sm mb-4">
        <Image
          src={episode.image}
          alt={episode.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        
        {/* Play Button Overlay */}
        <button
          onClick={onToggle}
          className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <div className="w-16 h-16 rounded-full bg-[#C9A84C] flex items-center justify-center group-hover:scale-110 transition-transform">
            {isPlaying ? (
              <div className="flex gap-2">
                <span className="w-1.5 h-6 bg-[#0A0A0A] animate-pulse" />
                <span className="w-1.5 h-8 bg-[#0A0A0A] animate-pulse delay-75" />
                <span className="w-1.5 h-6 bg-[#0A0A0A] animate-pulse" />
              </div>
            ) : (
              <Play className="w-7 h-7 text-[#0A0A0A] ml-1" fill="#0A0A0A" />
            )}
          </div>
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-mono-caps text-xs px-2 py-0.5 bg-[#C9A84C]/20 text-[#C9A84C] rounded-full">
            {episode.category}
          </span>
          <span className="font-jetbrains text-xs text-[#8A8A7C] flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {episode.duration}
          </span>
        </div>

        <h3 className="font-heading text-lg text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
          {episode.title}
        </h3>

        <p className="font-inter text-sm text-[#8A8A7C] line-clamp-2">
          {episode.description}
        </p>

        <div className="pt-3 border-t border-[#2A2A2A]">
          <p className="font-jetbrains text-xs text-[#8A8A7C]">
            <span className="text-[#F5F0E8]">{episode.host}</span> with {episode.guest}
          </p>
        </div>
      </div>
    </div>
  );
}

// Simple icon components
function SpotifyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
    </svg>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-.8 1.94-.8s.16 1.06-.59 1.91c-.69.81-1.91.87-1.91.87s-.17-1.14.56-1.98"/>
    </svg>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15v-4H8l4-5 4 5h-3v4h-2z"/>
    </svg>
  );
}
