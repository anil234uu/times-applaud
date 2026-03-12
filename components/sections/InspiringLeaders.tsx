"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { Trophy, ArrowRight } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";

export default function InspiringLeaders() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Animate elements on scroll
      gsap.from(".leaders-badge", {
        opacity: 0,
        scale: 0.8,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
      });

      gsap.from(".leaders-title", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });

      gsap.from(".leaders-cta", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
        },
      });

      // Animate stars/particles in background
      gsap.to(".star-particle", {
        opacity: 0.8,
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-[#0D1F1C] relative overflow-hidden border-t border-b border-[#C9A84C]/20"
    >
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="star-particle absolute w-[2px] h-[2px] bg-[#C9A84C] rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container-wide relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge/Icon */}
          <div className="leaders-badge flex justify-center">
            <div className="w-20 h-20 rounded-full border-2 border-[#C9A84C] flex items-center justify-center glow-gold">
              <Trophy className="w-10 h-10 text-[#C9A84C]" />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-4">
            <h2 className="leaders-title font-display text-4xl md:text-5xl lg:text-6xl text-[#F5F0E8]">
              INSPIRING LEADERS
            </h2>
            <p className="leaders-title font-display text-2xl md:text-3xl text-[#C9A84C]">
              SEASON 3
            </p>
          </div>

          {/* Subtitle */}
          <p className="font-inter text-lg md:text-xl text-[#8A8A7C] max-w-2xl mx-auto leaders-title">
            Are you an innovator, trailblazer, or a true changemaker? It's your time to shine!
          </p>

          {/* Description */}
          <p className="font-inter text-base text-[#8A8A7C] max-w-xl mx-auto">
            Nominate yourself or your company for recognition and join the league of extraordinary leaders transforming India.
          </p>

          {/* CTA Button */}
          <div className="leaders-cta pt-8">
            <Link href="/inspiring-leaders/nominate">
              <MagneticButton variant="primary" size="lg">
                NOMINATE NOW
                <ArrowRight className="w-5 h-5" />
              </MagneticButton>
            </Link>
          </div>

          {/* Additional Info */}
          <div className="pt-8 font-jetbrains text-xs text-[#8A8A7C]">
            <p>Nominations open until March 31, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
