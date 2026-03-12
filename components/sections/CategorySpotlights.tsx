"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { getRealArticlesByCategory } from "@/lib/real-data";
import { cn, formatTimeAgo } from "@/lib/utils";

const categories = [
  { id: "entertainment", label: "Entertainment", color: "#9B59B6" },
  { id: "sports", label: "Sports", color: "#27AE60" },
  { id: "technology", label: "Technology", color: "#3498DB" },
  { id: "lifestyle", label: "Lifestyle", color: "#E91E63" },
  { id: "travel", label: "Travel", color: "#1ABC9C" },
  { id: "health", label: "Health", color: "#00BCD4" },
];

export default function CategorySpotlights() {
  const [activeCategory, setActiveCategory] = useState("entertainment");
  const sectionRef = useRef<HTMLDivElement>(null);

  const articles = getRealArticlesByCategory(activeCategory).slice(0, 4);
  const activeColor = categories.find((c) => c.id === activeCategory)?.color || "#C9A84C";

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate on scroll
      gsap.from(".category-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  // Animate when category changes
  useEffect(() => {
    gsap.to(".category-content", {
      opacity: 0,
      duration: 0.2,
      onComplete: () => {
        gsap.to(".category-content", {
          opacity: 1,
          duration: 0.4,
        });
      },
    });
  }, [activeCategory]);

  return (
    <section ref={sectionRef} className="section-padding bg-[#0A0A0A]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
            CATEGORY SPOTLIGHTS
          </h2>
          <p className="font-inter text-[#8A8A7C] max-w-2xl mx-auto">
            Explore our curated content across diverse categories
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "font-mono-caps text-xs px-6 py-3 rounded-full transition-all duration-300",
                activeCategory === category.id
                  ? "text-[#0A0A0A]"
                  : "bg-[#1A1A1A] text-[#8A8A7C] hover:text-[#F5F0E8]"
              )}
              style={{
                backgroundColor: activeCategory === category.id ? category.color : undefined,
              }}
            >
              {category.label.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Category Content Grid */}
        <div className="category-content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {articles.map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className={`category-card group relative p-4 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/30 card-hover ${
                index === 0 ? 'md:col-span-2' : ''
              }`}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Overlay Gradient */}
                <div
                  className="absolute inset-0 opacity-60"
                  style={{
                    background: `linear-gradient(135deg, ${activeColor}40 0%, transparent 100%)`,
                  }}
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <span
                  className="font-mono-caps text-xs px-2 py-1 rounded-full w-fit inline-block"
                  style={{ backgroundColor: `${activeColor}30`, color: activeColor }}
                >
                  {article.category.toUpperCase()}
                </span>

                <h3 className="font-heading text-lg text-[#F5F0E8] group-hover:text-[#F5F0E8] transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="font-inter text-sm text-[#8A8A7C] line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center gap-3 font-jetbrains text-xs text-[#8A8A7C]">
                  <span>{formatTimeAgo(article.publishedAt)}</span>
                  <span>•</span>
                  <span>{article.readingTime} min read</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Link */}
        <div className="text-center mt-12">
          <Link href={`/category/${activeCategory}`}>
            <button
              className="font-mono-caps text-sm px-8 py-3 border border-[#2A2A2A] text-[#8A8A7C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-all duration-300"
              style={{
                borderColor: activeCategory === activeCategory ? activeColor : undefined,
                color: activeCategory === activeCategory ? activeColor : undefined,
              }}
            >
              VIEW ALL {activeCategory.toUpperCase()} →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
