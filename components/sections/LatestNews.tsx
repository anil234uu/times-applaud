"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { getRealLatestArticles } from "@/lib/real-data";
import { cn, formatTimeAgo, formatViews } from "@/lib/utils";

const categories = ["All", "News", "Entertainment", "Sports", "Technology", "Travel"];

export default function LatestNews() {
  const [activeCategory, setActiveCategory] = useState("All");
  const containerRef = useRef<HTMLDivElement>(null);

  const latestArticles = getRealLatestArticles(10);

  const filteredArticles = activeCategory === "All"
    ? latestArticles
    : latestArticles.filter((a: any) => a.category.toLowerCase() === activeCategory.toLowerCase());

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards on scroll
      gsap.from(".latest-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[#0A0A0A]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
            LATEST STORIES
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "font-mono-caps text-xs px-4 py-2 rounded-full transition-all duration-300",
                  activeCategory === category
                    ? "bg-[#C9A84C] text-[#0A0A0A]"
                    : "bg-[#1A1A1A] text-[#8A8A7C] hover:text-[#F5F0E8]"
                )}
              >
                {category.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Large Featured Card (First Article) */}
          {filteredArticles.length > 0 && (
            <Link
              href={`/article/${filteredArticles[0].slug}`}
              className="latest-card group relative grid lg:grid-cols-2 gap-6 p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50 card-hover"
            >
              {/* Image */}
              <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-sm">
                <Image
                  src={filteredArticles[0].image}
                  alt={filteredArticles[0].title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center space-y-4">
                <span
                  className={cn(
                    "font-mono-caps text-xs px-3 py-1 rounded-full w-fit",
                    `badge-${filteredArticles[0].category}`
                  )}
                >
                  {filteredArticles[0].category.toUpperCase()}
                </span>

                <h3 className="font-heading text-2xl md:text-3xl text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                  {filteredArticles[0].title}
                </h3>

                <p className="font-inter text-[#8A8A7C] line-clamp-3">
                  {filteredArticles[0].excerpt}
                </p>

                <div className="flex items-center gap-4 pt-4">
                  <Image
                    src={filteredArticles[0].author.avatar}
                    alt={filteredArticles[0].author.name}
                    width={40}
                    height={40}
                    className="rounded-full border border-[#2A2A2A]"
                  />
                  <div>
                    <p className="font-inter text-sm text-[#F5F0E8]">
                      {filteredArticles[0].author.name}
                    </p>
                    <p className="font-jetbrains text-xs text-[#8A8A7C]">
                      {formatTimeAgo(filteredArticles[0].publishedAt)} • {formatViews(filteredArticles[0].views)} views
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Smaller Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredArticles.slice(1, 5).map((article) => (
              <Link
                key={article.id}
                href={`/article/${article.slug}`}
                className="latest-card group relative p-4 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/30 card-hover"
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <span
                    className={cn(
                      "font-mono-caps text-xs px-2 py-1 rounded-full w-fit",
                      `badge-${article.category}`
                    )}
                  >
                    {article.category.toUpperCase()}
                  </span>

                  <h3 className="font-heading text-lg text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {article.title}
                  </h3>

                  <div className="flex items-center gap-3 font-jetbrains text-xs text-[#8A8A7C]">
                    <span>{formatTimeAgo(article.publishedAt)}</span>
                    <span>•</span>
                    <span>{formatViews(article.views)} views</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="font-mono-caps text-sm px-8 py-4 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300 glow-gold">
            LOAD MORE STORIES →
          </button>
        </div>
      </div>
    </section>
  );
}
