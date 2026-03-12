"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import TopographicBg from "@/components/ui/TopographicBg";
import { gsap } from "gsap";
import { Linkedin, Twitter, Mail, Globe } from "lucide-react";

export default function TeamPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Editorial team data
  const editorialTeam = [
    {
      name: "Taushif Patel",
      role: "Co-Founder & Editor-in-Chief",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      bio: "Visionary leader with 15+ years in digital media. Previously led editorial teams at major publications.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Sunil Pandey",
      role: "Co-Founder & Managing Editor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
      bio: "Award-winning journalist with expertise in investigative reporting and digital transformation.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Priya Sharma",
      role: "Entertainment Editor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      bio: "Covering Bollywood and entertainment for over a decade. Known for exclusive celebrity interviews.",
      social: { linkedin: "#", instagram: "#" },
    },
    {
      name: "Vikram Singh",
      role: "Sports Editor",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
      bio: "Former cricketer turned sports journalist. Specializes in cricket analysis and commentary.",
      social: { twitter: "#", linkedin: "#" },
    },
    {
      name: "Rajesh Kumar",
      role: "Technology Editor",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop",
      bio: "Tech enthusiast covering AI, startups, and innovation. IIT Delhi alumnus with industry experience.",
      social: { linkedin: "#", twitter: "#" },
    },
    {
      name: "Anjali Mehta",
      role: "Fashion & Lifestyle Editor",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
      bio: "Style expert and trend forecaster. Regular speaker at fashion weeks across India.",
      social: { instagram: "#", linkedin: "#" },
    },
  ];

  // Leadership team
  const leadershipTeam = [
    {
      name: "Aditya Chopra",
      role: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop",
      bio: "Business leader with 20+ years in media and entertainment. Driving Times Applaud's growth strategy.",
    },
    {
      name: "Dr. Sneha Patel",
      role: "Head of Content Strategy",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop",
      bio: "PhD in Media Studies. Shapes editorial vision and content direction across all platforms.",
    },
    {
      name: "Arjun Menon",
      role: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop",
      bio: "Tech innovator leading digital transformation and product development initiatives.",
    },
    {
      name: "Kavita Reddy",
      role: "VP of Marketing",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop",
      bio: "Marketing strategist with proven track record in building media brands and audience engagement.",
    },
  ];

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".team-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".leadership-card", {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".leadership-section",
          start: "top 75%",
        },
      });

      gsap.from(".editorial-card", {
        opacity: 0,
        y: 40,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".editorial-section",
          start: "top 80%",
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
        <section className="relative pb-20 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="team-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                OUR TEAM
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Meet the passionate journalists, editors, and leaders behind Times Applaud. 
                Together, we're reshaping digital media in India.
              </p>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="leadership-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Leadership
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Visionary executives guiding Times Applaud's mission and growth
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadershipTeam.map((member) => (
                <LeadershipCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Editorial Team */}
        <section className="editorial-section section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Editorial Team
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Award-winning journalists and editors creating compelling content daily
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {editorialTeam.map((member) => (
                <EditorialCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="section-padding bg-[#0A0A0A] border-t border-[#2A2A2A]">
          <div className="container-wide text-center space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
              Join Our Team
            </h2>
            <p className="font-inter text-lg text-[#8A8A7C] max-w-2xl mx-auto">
              We're always looking for talented journalists, writers, and creators who are passionate about storytelling
            </p>
            <a
              href="mailto:careers@timesapplaud.com"
              className="inline-block"
            >
              <button className="font-mono-caps text-xs px-8 py-4 bg-[#C9A84C] text-[#0A0A0A] hover:bg-[#D4B85E] transition-colors">
                VIEW OPEN POSITIONS
              </button>
            </a>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Sub-components
function LeadershipCard({ member }: { member: any }) {
  return (
    <div className="leadership-card group text-center">
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-6">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <h3 className="font-heading text-xl text-[#F5F0E8] mb-2">{member.name}</h3>
      <p className="font-mono-caps text-xs text-[#C9A84C] mb-4">{member.role}</p>
      <p className="font-inter text-sm text-[#8A8A7C]">{member.bio}</p>
    </div>
  );
}

function EditorialCard({ member }: { member: any }) {
  return (
    <div className="editorial-card group">
      <div className="flex items-start gap-4">
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden rounded-sm">
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </div>
        
        <div className="flex-1">
          <h3 className="font-heading text-lg text-[#F5F0E8] mb-1">{member.name}</h3>
          <p className="font-mono-caps text-xs text-[#C9A84C] mb-2">{member.role}</p>
          <p className="font-inter text-sm text-[#8A8A7C] line-clamp-2">{member.bio}</p>
          
          {/* Social Links */}
          <div className="flex gap-3 mt-3">
            {member.social.linkedin && (
              <a href={member.social.linkedin} className="text-[#8A8A7C] hover:text-[#C9A84C] transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {member.social.twitter && (
              <a href={member.social.twitter} className="text-[#8A8A7C] hover:text-[#C9A84C] transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
            )}
            {member.social.instagram && (
              <a href={member.social.instagram} className="text-[#8A8A7C] hover:text-[#C9A84C] transition-colors">
                <Globe className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
