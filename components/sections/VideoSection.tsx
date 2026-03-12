"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Play, Clock, TrendingUp } from "lucide-react";
import { videos } from "@/lib/data";
import { formatViews } from "@/lib/utils";

export default function VideoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate video cards on scroll
      gsap.from(".video-card", {
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

  return (
    <section ref={sectionRef} className="section-padding bg-[#0D1F1C]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              WATCH ON YOUTUBE
            </h2>
            <p className="font-inter text-[#8A8A7C]">
              Latest videos from Times Applaud
            </p>
          </div>
          
          <Link href="https://youtube.com/@TimesApplaud" target="_blank">
            <button className="font-mono-caps text-xs px-6 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-all duration-300">
              SUBSCRIBE →
            </button>
          </Link>
        </div>

        {/* Featured Video + Playlist */}
        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Featured Video */}
          <div className="lg:col-span-2 video-card">
            <div className="relative aspect-video rounded-sm overflow-hidden group cursor-pointer">
              {/* Thumbnail */}
              <Image
                src={videos[0].thumbnail}
                alt={videos[0].title}
                fill
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/60 transition-colors">
                <div className="w-20 h-20 rounded-full bg-[#C9A84C]/90 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 glow-gold">
                  <Play className="w-8 h-8 text-[#0A0A0A] ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-4 right-4 bg-[#0A0A0A]/90 font-jetbrains text-xs px-2 py-1 rounded">
                {videos[0].duration}
              </div>
            </div>

            {/* Video Info */}
            <div className="mt-4 space-y-2">
              <h3 className="font-heading text-xl md:text-2xl text-[#F5F0E8]">
                {videos[0].title}
              </h3>
              <div className="flex items-center gap-4 font-jetbrains text-xs text-[#8A8A7C]">
                <span className="flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {formatViews(videos[0].views)} views
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {videos[0].publishedAt}
                </span>
              </div>
            </div>
          </div>

          {/* Video Playlist */}
          <div className="space-y-4">
            {videos.slice(1).map((video, index) => (
              <Link
                key={video.id}
                href={`https://youtube.com/watch?v=${video.youtubeId}`}
                target="_blank"
                className={`video-card group flex gap-4 p-3 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50 hover:border-[#C9A84C]/50 transition-all card-hover`}
              >
                {/* Thumbnail */}
                <div className="relative w-32 aspect-video flex-shrink-0 overflow-hidden rounded-sm">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                  
                  {/* Mini Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-white" />
                  </div>

                  {/* Duration */}
                  <div className="absolute bottom-1 right-1 bg-[#0A0A0A]/90 font-jetbrains text-[10px] px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h4 className="font-heading text-sm text-[#F5F0E8] line-clamp-2 group-hover:text-[#C9A84C] transition-colors">
                    {video.title}
                  </h4>
                  <div className="mt-2 font-jetbrains text-xs text-[#8A8A7C] flex items-center gap-2">
                    <span>{formatViews(video.views)} views</span>
                    <span>•</span>
                    <span>{video.publishedAt}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Scrolling Marquee */}
        <div className="mt-12 overflow-hidden bg-[#C9A84C] py-3">
          <div className="animate-marquee flex gap-16 whitespace-nowrap">
            {[
              "WATCH ON YOUTUBE",
              "SUBSCRIBE FOR UPDATES",
              "NEW VIDEOS EVERY WEEK",
              "JOIN 251K+ FOLLOWERS",
              ...Array(4).fill("WATCH ON YOUTUBE • SUBSCRIBE FOR UPDATES"),
            ].flat().map((text, index) => (
              <span
                key={index}
                className="font-mono-caps text-sm text-[#0A0A0A]"
              >
                {text}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
