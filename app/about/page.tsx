"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Users, Target, Award, Globe, TrendingUp, Video } from "lucide-react";

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      // Animate sections on scroll
      gsap.from(".about-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".stat-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 75%",
        },
      });

      gsap.from(".team-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".team-section",
          start: "top 80%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen pt-32">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="about-hero max-w-4xl space-y-8">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                ABOUT US
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Times Applaud is your trusted source for news, entertainment, and sports information. 
                We deliver the latest updates with integrity, insight, and impact.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
                  Our Mission
                </h2>
                <p className="font-inter text-lg text-[#8A8A7C] leading-relaxed">
                  To provide comprehensive, accurate, and engaging news coverage that empowers 
                  readers with knowledge and perspective. We strive to be the bridge between 
                  information and understanding in an increasingly complex world.
                </p>
                <p className="font-inter text-lg text-[#8A8A7C] leading-relaxed">
                  From breaking news to in-depth analysis, from entertainment to sports, we cover 
                  it all with the same commitment to excellence and journalistic integrity.
                </p>
              </div>
              
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=800&fit=crop"
                  alt="Times Applaud Office"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
                By The Numbers
              </h2>
              <p className="font-inter text-[#8A8A7C] max-w-2xl mx-auto">
                Our reach and impact across India and beyond
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
              <StatCard
                icon={<Users className="w-8 h-8" />}
                number="2M+"
                label="Monthly Readers"
                color="#C9A84C"
              />
              <StatCard
                icon={<Globe className="w-8 h-8" />}
                number="10+"
                label="Categories"
                color="#27AE60"
              />
              <StatCard
                icon={<TrendingUp className="w-8 h-8" />}
                number="251K"
                label="Facebook Followers"
                color="#3498DB"
              />
              <StatCard
                icon={<Video className="w-8 h-8" />}
                number="1000+"
                label="Videos Produced"
                color="#E91E63"
              />
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="team-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
                Our Leadership
              </h2>
              <p className="font-inter text-[#8A8A7C] max-w-2xl mx-auto">
                Visionary leaders driving Times Applaud forward
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <FounderCard
                name="Taushif Patel"
                role="Co-Founder & Editor-in-Chief"
                image="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop"
                bio="Visionary leader with a passion for digital media and innovative storytelling."
              />
              <FounderCard
                name="Sunil Pandey"
                role="Co-Founder & Managing Editor"
                image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
                bio="Experienced journalist committed to editorial excellence and ethical reporting."
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <ValueCard
                icon={<Target className="w-10 h-10" />}
                title="Accuracy"
                description="We verify facts and provide context to ensure our readers get the complete picture."
                color="#C9A84C"
              />
              <ValueCard
                icon={<Award className="w-10 h-10" />}
                title="Integrity"
                description="Ethical journalism is at the core of everything we do. We maintain editorial independence."
                color="#27AE60"
              />
              <ValueCard
                icon={<Globe className="w-10 h-10" />}
                title="Inclusivity"
                description="We amplify diverse voices and cover stories that matter to all sections of society."
                color="#3498DB"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#0A0A0A] border-t border-[#2A2A2A]">
          <div className="container-wide text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              Stay Connected
            </h2>
            <p className="font-inter text-lg text-[#8A8A7C] max-w-2xl mx-auto">
              Get the latest news delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/subscribe">
                <MagneticButton variant="primary" size="lg">
                  SUBSCRIBE NOW
                </MagneticButton>
              </Link>
              <Link href="/contact">
                <MagneticButton variant="outline" size="lg">
                  CONTACT US
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
function StatCard({ icon, number, label, color }: any) {
  return (
    <div className="stat-card p-6 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <p className="font-display text-4xl md:text-5xl text-[#F5F0E8] mb-2">{number}</p>
      <p className="font-mono-caps text-xs text-[#8A8A7C]">{label}</p>
    </div>
  );
}

function FounderCard({ name, role, image, bio }: any) {
  return (
    <div className="team-card group">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <h3 className="font-heading text-2xl text-[#F5F0E8] mb-2">{name}</h3>
      <p className="font-mono-caps text-xs text-[#C9A84C] mb-4">{role}</p>
      <p className="font-inter text-[#8A8A7C]">{bio}</p>
    </div>
  );
}

function ValueCard({ icon, title, description, color }: any) {
  return (
    <div className="text-center p-6 space-y-4">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <h3 className="font-heading text-xl text-[#F5F0E8]">{title}</h3>
      <p className="font-inter text-[#8A8A7C] leading-relaxed">{description}</p>
    </div>
  );
}
