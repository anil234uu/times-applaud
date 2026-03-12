"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";
import { getFeaturedArticles, articles } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { cn, formatTimeAgo, formatViews } from "@/lib/utils";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  const featuredArticles = getFeaturedArticles();

  // Auto-rotate slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [featuredArticles.length]);

  // Animate slide changes
  useEffect(() => {
    if (!textContainerRef.current || !imageContainerRef.current) return;

    const ctx = gsap.context(() => {
      // Fade out current content
      gsap.to(textContainerRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          // Fade in new content
          gsap.fromTo(
            textContainerRef.current,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
          );
        },
      });

      // Parallax effect on image
      gsap.to(imageContainerRef.current, {
        scale: 1.05,
        duration: 1,
        ease: "power2.out",
      });
    });

    return () => ctx.revert();
  }, [currentSlide]);

  // Initial animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-word", {
        opacity: 0,
        y: 60,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.from(".hero-meta", {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.6,
      });

      gsap.from(".hero-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.8,
      });

      gsap.from(".scroll-indicator", {
        opacity: 0,
        y: 10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 1,
      });
    });

    return () => ctx.revert();
  }, []);

  // Parallax on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;

      const scrolled = window.scrollY;
      const parallax = Math.min(scrolled * 0.3, 100);

      gsap.to(heroRef.current, {
        y: parallax,
        transform: `translateY(${parallax}px)`,
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const article = featuredArticles[currentSlide];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[#0A0A0A]">
        <TopographicBg animated />
      </div>

      {/* Content Container */}
      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center min-h-[calc(100vh-80px)]">
          {/* Left Column - Text Content (60%) */}
          <div className="lg:col-span-3 space-y-6 lg:space-y-8">
            <div ref={textContainerRef}>
              {/* Category Badge */}
              <div className="flex items-center gap-4 mb-6 hero-meta">
                <span
                  className={cn(
                    "font-mono-caps text-xs px-3 py-1 rounded-full",
                    article.category === "news" ? "badge-breaking" : "badge-news"
                  )}
                >
                  {article.isBreaking && (
                    <span className="inline-block w-2 h-2 bg-white rounded-full mr-2 animate-pulse" />
                  )}
                  {article.category.toUpperCase()}
                </span>
                <span className="font-jetbrains text-xs text-[#8A8A7C] flex items-center gap-2">
                  <Clock className="w-3 h-3" />
                  {formatTimeAgo(article.publishedAt)}
                </span>
                <span className="font-jetbrains text-xs text-[#8A8A7C] flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {formatViews(article.views)} views
                </span>
              </div>

              {/* Headline */}
              <h1 className="font-display text-4xl md:text-6xl lg:text-7xl xl:text-8xl leading-none text-[#F5F0E8] mb-6">
                {article.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className="hero-title-word inline-block mr-3"
                  >
                    {word}
                  </span>
                ))}
              </h1>

              {/* Excerpt */}
              <p className="font-inter text-lg md:text-xl text-[#8A8A7C] max-w-2xl leading-relaxed mb-8 hero-meta">
                {article.excerpt}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-3 mb-8 hero-meta">
                <Image
                  src={article.author.avatar}
                  alt={article.author.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-[#2A2A2A]"
                />
                <div>
                  <p className="font-inter text-sm text-[#F5F0E8]">
                    {article.author.name}
                  </p>
                  <p className="font-mono-caps text-xs text-[#8A8A7C]">
                    {article.author.role}
                  </p>
                </div>
              </div>

              {/* CTA Button */}
              <div className="hero-cta">
                <Link href={`/article/${article.slug}`}>
                  <MagneticButton variant="primary" size="lg">
                    READ FULL STORY
                    <ArrowRight className="w-4 h-4" />
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>

          {/* Right Column - Image (40%) */}
          <div className="lg:col-span-2 relative">
            <div
              ref={imageContainerRef}
              className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm"
            >
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                priority
              />
              
              {/* Grain Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay">
                <svg className="w-full h-full">
                  <filter id="noise">
                    <feTurbulence
                      type="fractalNoise"
                      baseFrequency="0.8"
                      numOctaves="4"
                      stitchTiles="stitch"
                    />
                  </filter>
                  <rect width="100%" height="100%" filter="url(#noise)" />
                </svg>
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -left-4 bg-[#0D1F1C] border border-[#2A2A2A] p-4 shadow-2xl">
              <p className="font-mono-caps text-xs text-[#8A8A7C] mb-1">
                ESTABLISHED
              </p>
              <p className="font-display text-2xl text-[#C9A84C]">2022</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 scroll-indicator">
        <p className="font-mono-caps text-xs text-[#8A8A7C]">SCROLL TO EXPLORE</p>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#C9A84C] to-transparent" />
      </div>

      {/* Slide Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3">
        {featuredArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === currentSlide
                ? "bg-[#C9A84C] w-6"
                : "bg-[#8A8A7C]/50 hover:bg-[#8A8A7C]"
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Live Clock */}
      <LiveClock />
    </section>
  );
}

// Live IST Clock Component
function LiveClock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString("en-IN", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      setTime(istTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute top-8 right-8 font-jetbrains text-xs text-[#8A8A7C]">
      <span className="text-[#C9A84C]">IST</span> {time}
    </div>
  );
}
