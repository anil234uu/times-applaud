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
import { BookOpen, Calendar, Users, Award } from "lucide-react";

export default function MagazinePage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Mock magazine issues data
  const latestIssues = [
    {
      id: "m1",
      title: "March 2026 Issue",
      coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=600&h=800&fit=crop",
      description: "Special Edition: India's Rising Stars in Global Entertainment",
      publishedAt: "March 1, 2026",
      slug: "march-2026-issue",
    },
    {
      id: "m2",
      title: "February 2026 Issue",
      coverImage: "https://images.unsplash.com/photo-1550614000-4b9519e09d6f?w=600&h=800&fit=crop",
      description: "Tech Titans: How Indian Startups Are Conquering the World",
      publishedAt: "February 1, 2026",
      slug: "february-2026-issue",
    },
    {
      id: "m3",
      title: "January 2026 Issue",
      coverImage: "https://images.unsplash.com/photo-1504711434969-e33886d87759?w=600&h=800&fit=crop",
      description: "New Year Special: Lifestyle Trends Reshaping Urban India",
      publishedAt: "January 1, 2026",
      slug: "january-2026-issue",
    },
  ];

  const featuredArticles = [
    {
      id: "fa1",
      title: "Banita Sandhu Brings Edgy Glam To Wedding Fashion In Anamika Khanna Ensemble",
      excerpt: "Actress Banita Sandhu recently grabbed attention with her stylish appearance at a celebrity wedding, choosing an unconventional lehenga that broke traditional norms while maintaining ethnic elegance.",
      image: "https://images.unsplash.com/photo-1594576722512-582bcd46fba3?w=800&h=600&fit=crop",
      category: "Fashion",
      author: "Anjali Mehta",
      readTime: "8 min read",
    },
    {
      id: "fa2",
      title: "Hardik Pandya on World Cup Glory: 'Since She Came Into My Life, I've Only Been Winning'",
      excerpt: "In an exclusive interview, India's cricket star opens up about his relationship with Mahieka, the team's winning momentum, and how personal happiness translates to professional success.",
      image: "https://images.unsplash.com/photo-1531415074968-036ba1b575da?w=800&h=600&fit=crop",
      category: "Sports",
      author: "Vikram Singh",
      readTime: "12 min read",
    },
    {
      id: "fa3",
      title: "Bollywood's OTT Revolution: How Streaming Changed Cinema Forever",
      excerpt: "An in-depth analysis of how platforms like Netflix, Amazon Prime, and Disney+ Hotstar have transformed Bollywood storytelling, budgets, and star power in post-pandemic India.",
      image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&h=600&fit=crop",
      category: "Entertainment",
      author: "Priya Sharma",
      readTime: "15 min read",
    },
    {
      id: "fa4",
      title: "India's AI Startups Raise Record $2.3 Billion in 2025",
      excerpt: "From Bangalore to Hyderabad, Indian AI companies are attracting unprecedented global investment. We profile the unicorns leading the charge in machine learning and automation.",
      image: "https://images.unsplash.com/photo-1485827404703-8c5b5e9a5d1d?w=800&h=600&fit=crop",
      category: "Technology",
      author: "Rajesh Kumar",
      readTime: "10 min read",
    },
    {
      id: "fa5",
      title: "The New Wellness Movement: Why Gen Z is Rethinking Health",
      excerpt: "Mental health apps, meditation studios, and fitness influencers are driving a wellness revolution among India's youth. Here's what's trending in 2026.",
      image: "https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&h=600&fit=crop",
      category: "Lifestyle",
      author: "Dr. Sneha Patel",
      readTime: "9 min read",
    },
    {
      id: "fa6",
      title: "Beyond Goa: India's Hidden Beach Destinations You've Never Heard Of",
      excerpt: "From pristine shores in Odisha to untouched islands in Lakshadweep, discover the secret beach getaways that offer tranquility away from tourist crowds.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d9e?w=800&h=600&fit=crop",
      category: "Travel",
      author: "Arjun Menon",
      readTime: "11 min read",
    },
  ];

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".magazine-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".issue-card", {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".issues-section",
          start: "top 75%",
        },
      });

      gsap.from(".article-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".featured-section",
          start: "top 80%",
        },
      });

      gsap.from(".stat-item", {
        opacity: 0,
        scale: 0.8,
        stagger: 0.1,
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 85%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen pt-32" ref={pageRef}>
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="magazine-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                MAGAZINE
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Long-form journalism, in-depth features, and exclusive interviews. 
                Times Applaud Magazine brings you stories that matter, told beautifully.
              </p>
            </div>
          </div>
        </section>

        {/* Latest Issues */}
        <section className="issues-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
                Latest Issues
              </h2>
              <Link href="/subscribe">
                <MagneticButton variant="outline" size="sm">
                  SUBSCRIBE NOW
                </MagneticButton>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {latestIssues.map((issue) => (
                <IssueCard key={issue.id} issue={issue} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="featured-section section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Featured Stories
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Handpicked long-form journalism and investigative pieces
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-12 text-center">
              By The Numbers
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <StatItem
                icon={<BookOpen className="w-8 h-8" />}
                number="50+"
                label="Articles Per Issue"
                color="#C9A84C"
              />
              <StatItem
                icon={<Calendar className="w-8 h-8" />}
                number="12"
                label="Issues Per Year"
                color="#27AE60"
              />
              <StatItem
                icon={<Users className="w-8 h-8" />}
                number="500K"
                label="Monthly Readers"
                color="#3498DB"
              />
              <StatItem
                icon={<Award className="w-8 h-8" />}
                number="25+"
                label="Awards Won"
                color="#E91E63"
              />
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-[#0D1F1C] border-t border-[#2A2A2A]">
          <div className="container-wide text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              Never Miss an Issue
            </h2>
            <p className="font-inter text-lg text-[#8A8A7C] max-w-2xl mx-auto">
              Subscribe to Times Applaud Magazine and get premium long-form content delivered to your inbox every month
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/subscribe">
                <MagneticButton variant="primary" size="lg">
                  GET DIGITAL ACCESS
                </MagneticButton>
              </Link>
              <Link href="/newsletter">
                <MagneticButton variant="outline" size="lg">
                  FREE NEWSLETTER
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
function IssueCard({ issue }: { issue: any }) {
  return (
    <div className="issue-card group cursor-pointer">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-4">
        <Image
          src={issue.coverImage}
          alt={issue.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
      <h3 className="font-heading text-xl text-[#F5F0E8] mb-2 group-hover:text-[#C9A84C] transition-colors">
        {issue.title}
      </h3>
      <p className="font-inter text-sm text-[#8A8A7C] mb-3">{issue.description}</p>
      <p className="font-jetbrains text-xs text-[#C9A84C]">{issue.publishedAt}</p>
    </div>
  );
}

function ArticleCard({ article }: { article: any }) {
  return (
    <article className="article-card group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <p className="font-mono-caps text-xs text-[#C9A84C] mb-2">{article.category.toUpperCase()}</p>
      <h3 className="font-heading text-xl text-[#F5F0E8] mb-3 group-hover:text-[#C9A84C] transition-colors line-clamp-2">
        {article.title}
      </h3>
      <p className="font-inter text-sm text-[#8A8A7C] mb-4 line-clamp-2">{article.excerpt}</p>
      <div className="flex items-center justify-between text-xs text-[#8A8A7C]">
        <span className="font-jetbrains">{article.author}</span>
        <span className="font-jetbrains">{article.readTime}</span>
      </div>
    </article>
  );
}

function StatItem({ icon, number, label, color }: any) {
  return (
    <div className="stat-item text-center p-6 space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${color}20`, color }}>
        {icon}
      </div>
      <p className="font-display text-4xl md:text-5xl text-[#F5F0E8]">{number}</p>
      <p className="font-mono-caps text-xs text-[#8A8A7C]">{label}</p>
    </div>
  );
}
