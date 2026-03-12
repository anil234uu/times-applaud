"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import { Download, BookOpen } from "lucide-react";
import { magazineEditions } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";

export default function Magazine() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate covers on scroll
      gsap.from(".magazine-cover", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
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
    <section ref={sectionRef} className="section-padding bg-[#0A0A0A]">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              DIGITAL EDITION
            </h2>
            <p className="font-inter text-[#8A8A7C]">
              Browse our monthly magazine issues
            </p>
          </div>
          
          <Link href="/magazine/archive">
            <MagneticButton variant="outline" size="sm">
              VIEW FULL ARCHIVE
            </MagneticButton>
          </Link>
        </div>

        {/* Magazine Covers Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {magazineEditions.map((edition, index) => (
            <div
              key={edition.id}
              className={`magazine-cover group relative ${index === 0 ? 'md:-mt-8' : ''}`}
            >
              {/* 3D Cover Effect */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-105 group-hover:-translate-y-2">
                <Image
                  src={edition.cover}
                  alt={edition.title}
                  fill
                  className="object-cover"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-4 space-y-3">
                    <Link href={edition.downloadUrl}>
                      <MagneticButton variant="primary" size="sm" className="w-full">
                        <Download className="w-4 h-4" />
                        DOWNLOAD PDF
                      </MagneticButton>
                    </Link>
                  </div>
                </div>

                {/* Current Issue Badge */}
                {index === 0 && (
                  <div className="absolute top-3 right-3 bg-[#C9A84C] text-[#0A0A0A] font-mono-caps text-xs px-3 py-1 rounded-full">
                    LATEST
                  </div>
                )}
              </div>

              {/* Issue Info */}
              <div className="mt-4 space-y-1">
                <p className="font-jetbrains text-xs text-[#8A8A7C]">
                  {edition.month.toUpperCase()} {edition.year}
                </p>
                <h3 className="font-heading text-sm text-[#F5F0E8] line-clamp-2">
                  {edition.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 border border-[#2A2A2A] rounded-full bg-[#0D1F1C]/50">
            <BookOpen className="w-5 h-5 text-[#C9A84C]" />
            <span className="font-inter text-sm text-[#8A8A7C]">
              Get the latest issue delivered to your inbox
            </span>
            <Link href="/subscribe">
              <button className="ml-4 font-mono-caps text-xs text-[#C9A84C] hover:underline">
                SUBSCRIBE →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
