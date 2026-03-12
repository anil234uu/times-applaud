"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { getRealTrendingArticles } from "@/lib/real-data";
import { cn, formatTimeAgo, formatViews } from "@/lib/utils";

export default function TrendingNow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const trendingArticles = getRealTrendingArticles();

  useEffect(() => {
    if (!scrollRef.current) return;

    const ctx = gsap.context(() => {
      // Animate cards on entry
      gsap.from(".trending-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });

      // Horizontal scroll with drag
      let proxy = { scroll: 0 };
      let killScroll = false;

      const scrollTo = (value: number) => {
        gsap.to(proxy, {
          scroll: value,
          duration: 0.5,
          ease: "power2.out",
          onUpdate: () => {
            if (scrollRef.current) {
              scrollRef.current.scrollLeft = proxy.scroll;
            }
          },
        });
      };

      scrollRef.current?.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        proxy.scroll += evt.deltaY;
        scrollTo(proxy.scroll);
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="section-padding bg-[#0D1F1C] relative overflow-hidden">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-8">
          <h2 className="font-mono-caps text-sm text-[#C9A84C]">
            TRENDING NOW
          </h2>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-[#C9A84C] to-transparent" />
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="horizontal-scroll pb-8 -mx-4 px-4"
          style={{ scrollbarWidth: "thin" }}
        >
          {trendingArticles.map((article, index) => (
            <Link
              key={article.id}
              href={`/article/${article.slug}`}
              className="trending-card flex-shrink-0 w-[300px] md:w-[400px] group"
            >
              <div className="relative aspect-video overflow-hidden rounded-sm mb-4 card-hover">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
                
                {/* Category Badge */}
                <span
                  className={cn(
                    "absolute top-3 left-3 font-mono-caps text-xs px-2 py-1 rounded-full",
                    `badge-${article.category}`
                  )}
                >
                  {article.category.toUpperCase()}
                </span>
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="font-heading text-xl md:text-2xl text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                  {article.title}
                </h3>
                
                <div className="flex items-center gap-4 font-jetbrains text-xs text-[#8A8A7C]">
                  <span>{formatTimeAgo(article.publishedAt)}</span>
                  <span>•</span>
                  <span>{formatViews(article.views)} views</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
