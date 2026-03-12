"use client";

import { useEffect, useRef, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import RSSFeedSection from "@/components/sections/RSSFeedSection";
import { getRealArticlesByCategory, getRealTrendingArticles } from "@/lib/real-data";
import { cn, formatTimeAgo, formatViews } from "@/lib/utils";
import { ArrowRight, Clock, TrendingUp } from "lucide-react";

const categoryConfig: Record<string, { label: string; color: string }> = {
  news: { label: "News", color: "#D32F2F" },
  entertainment: { label: "Entertainment", color: "#9B59B6" },
  sports: { label: "Sports", color: "#27AE60" },
  technology: { label: "Technology", color: "#3498DB" },
  travel: { label: "Travel", color: "#1ABC9C" },
  lifestyle: { label: "Lifestyle", color: "#E91E63" },
  health: { label: "Health", color: "#00BCD4" },
  fashion: { label: "Fashion", color: "#FF5722" },
  magazine: { label: "Magazine", color: "#C9A84C" },
};

export default function CategoryPage() {
  const params = useParams();
  const categorySlug = params?.slug as string;
  const pageRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const articles = getRealArticlesByCategory(categorySlug);
  const trendingArticles = getRealTrendingArticles().slice(0, 5);
  const categoryInfo = categoryConfig[categorySlug] || { label: categorySlug, color: "#C9A84C" };

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!pageRef.current || !mounted) return;

    const ctx = gsap.context(() => {
      // Animate header on scroll
      gsap.from(".category-header", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".category-header",
          start: "top 80%",
        },
      });

      // Animate article cards
      gsap.from(".article-card", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".articles-grid",
          start: "top 75%",
        },
      });

      // Animate sidebar
      gsap.from(".trending-card", {
        opacity: 0,
        x: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".trending-sidebar",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, [categorySlug, mounted]);

  if (!mounted) return null;

  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen pt-32">
        <Header />
        
        {/* Hero Section */}
        <section ref={pageRef} className="relative pt-32 pb-16 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="category-header max-w-4xl space-y-6">
              {/* Category Badge */}
              <span
                className="inline-block font-mono-caps text-xs px-4 py-2 rounded-full"
                style={{ backgroundColor: categoryInfo.color, color: "#0A0A0A" }}
              >
                {categoryInfo.label.toUpperCase()}
              </span>

              {/* Page Title */}
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                {categoryInfo.label}
              </h1>

              {/* Description */}
              <p className="font-inter text-xl text-[#8A8A7C] max-w-2xl">
                Latest stories, updates and in-depth coverage from the world of {categoryInfo.label.toLowerCase()}
              </p>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#C9A84C]" />
                  <span className="font-jetbrains text-sm text-[#8A8A7C]">
                    {articles.length} Articles
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#C9A84C]" />
                  <span className="font-jetbrains text-sm text-[#8A8A7C]">
                    Updated Daily
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Articles Grid */}
              <div className="lg:col-span-2">
                {articles.length > 0 ? (
                  <div className="articles-grid grid gap-6">
                    {articles.map((article, index) => (
                      <Link
                        key={article.id}
                        href={`/article/${article.slug}`}
                        className={`article-card group relative p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/30 card-hover ${
                          index === 0 ? 'lg:col-span-2' : ''
                        }`}
                      >
                        <div className="flex flex-col md:flex-row gap-6">
                          {/* Image */}
                          <div className="relative w-full md:w-64 aspect-video flex-shrink-0 overflow-hidden rounded-sm">
                            <Image
                              src={article.image}
                              alt={article.title}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                            />
                          </div>

                          {/* Content */}
                          <div className="flex-1 space-y-4">
                            <span
                              className="inline-block font-mono-caps text-xs px-3 py-1 rounded-full"
                              style={{ 
                                backgroundColor: `${categoryInfo.color}30`, 
                                color: categoryInfo.color 
                              }}
                            >
                              {article.category.toUpperCase()}
                            </span>

                            <h2 className="font-heading text-2xl text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                              {article.title}
                            </h2>

                            <p className="font-inter text-[#8A8A7C] line-clamp-2">
                              {article.excerpt}
                            </p>

                            <div className="flex items-center gap-4 pt-2">
                              <div className="flex items-center gap-2">
                                <Image
                                  src={article.author.avatar}
                                  alt={article.author.name}
                                  width={32}
                                  height={32}
                                  className="rounded-full border border-[#2A2A2A]"
                                />
                                <span className="font-inter text-sm text-[#F5F0E8]">
                                  {article.author.name}
                                </span>
                              </div>
                              <span className="font-jetbrains text-xs text-[#8A8A7C]">
                                {formatTimeAgo(article.publishedAt)}
                              </span>
                              <span className="font-jetbrains text-xs text-[#8A8A7C]">
                                • {article.readingTime} min read
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-20">
                    <p className="font-inter text-xl text-[#8A8A7C] mb-4">
                      No articles found in this category yet.
                    </p>
                    <Link href="/">
                      <MagneticButton variant="outline">
                        Back to Home
                      </MagneticButton>
                    </Link>
                  </div>
                )}
              </div>

              {/* Sidebar - Trending */}
              <div className="lg:col-span-1">
                <div className="trending-sidebar sticky top-24 space-y-6">
                  <div className="space-y-4">
                    <h3 className="font-mono-caps text-sm text-[#C9A84C] flex items-center gap-2">
                      <TrendingUp className="w-4 h-4" />
                      TRENDING NOW
                    </h3>
                    
                    <div className="space-y-4">
                      {trendingArticles.map((article, index) => (
                        <Link
                          key={article.id}
                          href={`/article/${article.slug}`}
                          className="trending-card group flex gap-4 p-4 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/30 hover:border-[#C9A84C]/50 transition-all"
                        >
                          <span className="font-display text-3xl text-[#8A8A7C]/30 group-hover:text-[#C9A84C]/50 transition-colors">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          
                          <div className="flex-1 min-w-0">
                            <h4 className="font-heading text-sm text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors line-clamp-3">
                              {article.title}
                            </h4>
                            <div className="mt-2 font-jetbrains text-xs text-[#8A8A7C]">
                              {formatViews(article.views)} views
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Newsletter Signup */}
                  <div className="p-6 border border-[#2A2A2A] bg-[#0D1F1C]/50">
                    <h4 className="font-heading text-lg text-[#F5F0E8] mb-2">
                      Subscribe to Our Newsletter
                    </h4>
                    <p className="font-inter text-sm text-[#8A8A7C] mb-4">
                      Get the latest {categoryInfo.label.toLowerCase()} updates delivered to your inbox.
                    </p>
                    <form className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-2 text-sm text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C]"
                      />
                      <button
                        type="submit"
                        className="w-full font-mono-caps text-xs px-4 py-2 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#D4B85E] transition-colors"
                      >
                        SUBSCRIBE
                      </button>
                    </form>
                  </div>
                  
                  {/* RSS Live Feed */}
                  <div className="trending-sidebar sticky bottom-8">
                    <RSSFeedSection category={categorySlug} limit={5} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
