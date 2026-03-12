"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap } from "gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Briefcase, MapPin, Clock, TrendingUp, Users, Award, CheckCircle } from "lucide-react";

export default function CareersPage() {
  const pageRef = useRef<HTMLDivElement>(null);
  const [selectedDepartment, setSelectedDepartment] = useState<string>("all");

  // Job openings data
  const jobOpenings = [
    {
      id: "j1",
      title: "Senior Video Journalist",
      department: "Editorial",
      location: "Mumbai",
      type: "Full-time",
      experience: "5-8 years",
      posted: "2 weeks ago",
      description: "We're looking for an experienced video journalist to create compelling visual stories across news, entertainment, and features.",
      requirements: ["Proven video journalism experience", "Proficiency in shooting and editing", "Strong storytelling skills"],
    },
    {
      id: "j2",
      title: "Technology Reporter",
      department: "Editorial",
      location: "Bangalore",
      type: "Full-time",
      experience: "3-5 years",
      posted: "1 week ago",
      description: "Seeking a tech-savvy reporter to cover AI, startups, gadgets, and the intersection of technology and society.",
      requirements: ["Background in technology or computer science", "Excellent writing skills", "Understanding of startup ecosystem"],
    },
    {
      id: "j3",
      title: "Social Media Manager",
      department: "Marketing",
      location: "Mumbai",
      type: "Full-time",
      experience: "4-6 years",
      posted: "3 days ago",
      description: "Lead our social media strategy across platforms, engage with our audience, and drive growth through innovative content.",
      requirements: ["Proven social media management experience", "Knowledge of analytics tools", "Creative content creation skills"],
    },
    {
      id: "j4",
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      experience: "3-7 years",
      posted: "5 days ago",
      description: "Build and maintain our digital platforms using modern technologies. Work on high-traffic applications serving millions of users.",
      requirements: ["React, Node.js, TypeScript", "Experience with Next.js", "Database design skills"],
    },
    {
      id: "j5",
      title: "Fashion & Lifestyle Writer",
      department: "Editorial",
      location: "Delhi",
      type: "Full-time",
      experience: "2-4 years",
      posted: "1 week ago",
      description: "Cover fashion trends, lifestyle features, and celebrity style. Attend fashion weeks and create engaging content.",
      requirements: ["Passion for fashion and lifestyle", "Strong portfolio", "Industry connections preferred"],
    },
    {
      id: "j6",
      title: "Data Analyst",
      department: "Product",
      location: "Mumbai",
      type: "Full-time",
      experience: "2-5 years",
      posted: "4 days ago",
      description: "Analyze user behavior, track KPIs, and provide insights to drive product decisions and business strategy.",
      requirements: ["SQL, Python, or R", "Experience with analytics tools", "Strong analytical thinking"],
    },
    {
      id: "j7",
      title: "Sports Correspondent",
      department: "Editorial",
      location: "Mumbai",
      type: "Full-time",
      experience: "3-6 years",
      posted: "6 days ago",
      description: "Cover cricket, football, and other sports. Attend matches, conduct interviews, and write match reports and features.",
      requirements: ["Sports journalism background", "Cricket knowledge essential", "Willingness to travel"],
    },
    {
      id: "j8",
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      experience: "4-7 years",
      posted: "1 week ago",
      description: "Design intuitive and beautiful user experiences for our web and mobile platforms. Lead design thinking initiatives.",
      requirements: ["Strong portfolio", "Figma expertise", "User research experience"],
    },
  ];

  const departments = [
    { id: "all", label: "All Departments", count: jobOpenings.length },
    { id: "Editorial", label: "Editorial", count: jobOpenings.filter(j => j.department === "Editorial").length },
    { id: "Engineering", label: "Engineering", count: jobOpenings.filter(j => j.department === "Engineering").length },
    { id: "Marketing", label: "Marketing", count: jobOpenings.filter(j => j.department === "Marketing").length },
    { id: "Product", label: "Product", count: jobOpenings.filter(j => j.department === "Product").length },
    { id: "Design", label: "Design", count: jobOpenings.filter(j => j.department === "Design").length },
  ];

  const filteredJobs = selectedDepartment === "all" 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".careers-hero", {
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

      gsap.from(".job-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".jobs-section",
          start: "top 80%",
        },
      });

      gsap.from(".culture-card", {
        opacity: 0,
        scale: 0.9,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".culture-section",
          start: "top 75%",
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
            <div className="careers-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                CAREERS
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Join India's fastest-growing digital media company. Be part of a team that's 
                reshaping how millions consume news, entertainment, and stories.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-12 text-center">
              Why Work at Times Applaud?
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                icon={<Users className="w-8 h-8" />}
                number="200+"
                label="Team Members"
                subtext="Across India"
                color="#C9A84C"
              />
              <StatCard
                icon={<TrendingUp className="w-8 h-8" />}
                number="2M+"
                label="Monthly Readers"
                subtext="Reach your work"
                color="#27AE60"
              />
              <StatCard
                icon={<Award className="w-8 h-8" />}
                number="25+"
                label="Awards Won"
                subtext="Industry recognition"
                color="#3498DB"
              />
              <StatCard
                icon={<Briefcase className="w-8 h-8" />}
                number="8"
                label="Open Positions"
                subtext="Join us today"
                color="#E91E63"
              />
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="culture-section section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Our Culture
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              We foster innovation, creativity, and journalistic excellence in a collaborative environment
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <CultureCard
                title="Innovation First"
                description="We embrace new technologies and creative approaches to storytelling."
                image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=600&fit=crop"
              />
              <CultureCard
                title="Collaborative Spirit"
                description="Cross-functional teams working together to create impactful content."
                image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              />
              <CultureCard
                title="Growth Mindset"
                description="Continuous learning and professional development opportunities."
                image="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
              />
            </div>
          </div>
        </section>

        {/* Job Openings Section */}
        <section className="jobs-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Open Positions
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Find your perfect role. Filter by department or browse all openings.
            </p>

            {/* Department Filter */}
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`font-mono-caps text-xs px-6 py-3 rounded-full transition-colors ${
                    selectedDepartment === dept.id
                      ? 'bg-[#C9A84C] text-[#0A0A0A]'
                      : 'bg-[#2A2A2A] text-[#8A8A7C] hover:text-[#F5F0E8]'
                  }`}
                >
                  {dept.label} ({dept.count})
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20">
                <p className="font-inter text-[#8A8A7C]">No positions available in this department.</p>
              </div>
            )}

            {/* No Matching Roles */}
            <div className="mt-16 p-8 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50 text-center">
              <h3 className="font-heading text-xl text-[#F5F0E8] mb-4">
                Don't See Your Perfect Role?
              </h3>
              <p className="font-inter text-[#8A8A7C] mb-6">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <a href="mailto:careers@timesapplaud.com">
                <MagneticButton variant="outline" size="lg">
                  SUBMIT YOUR RESUME
                </MagneticButton>
              </a>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-[#0D1F1C] border-t border-[#2A2A2A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-12 text-center">
              Benefits & Perks
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <BenefitItem
                title="Competitive Salary"
                description="Industry-leading compensation packages"
                icon={<CheckCircle className="w-6 h-6" />}
              />
              <BenefitItem
                title="Health Insurance"
                description="Comprehensive medical coverage for you and family"
                icon={<CheckCircle className="w-6 h-6" />}
              />
              <BenefitItem
                title="Flexible Hours"
                description="Work when you're most productive"
                icon={<CheckCircle className="w-6 h-6" />}
              />
              <BenefitItem
                title="Remote Options"
                description="Hybrid and remote work opportunities"
                icon={<CheckCircle className="w-6 h-6" />}
              />
              <BenefitItem
                title="Learning Budget"
                description="Annual stipend for courses and conferences"
                icon={<CheckCircle className="w-6 h-6" />}
              />
              <BenefitItem
                title="Creative Freedom"
                description="Pitch and pursue stories you're passionate about"
                icon={<CheckCircle className="w-6 h-6" />}
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Sub-components
function StatCard({ icon, number, label, subtext, color }: any) {
  return (
    <div className="stat-card p-6 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50 text-center">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-4" style={{ backgroundColor: `${color}20` }}>
        <div style={{ color }}>{icon}</div>
      </div>
      <p className="font-display text-4xl md:text-5xl text-[#F5F0E8] mb-2">{number}</p>
      <p className="font-mono-caps text-xs text-[#8A8A7C] mb-1">{label}</p>
      <p className="font-inter text-xs text-[#8A8A7C]">{subtext}</p>
    </div>
  );
}

function CultureCard({ title, description, image }: any) {
  return (
    <div className="culture-card group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-sm mb-4">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
      </div>
      <h3 className="font-heading text-xl text-[#F5F0E8] mb-2">{title}</h3>
      <p className="font-inter text-[#8A8A7C]">{description}</p>
    </div>
  );
}

function JobCard({ job }: any) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="job-card p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50 hover:border-[#C9A84C]/50 transition-all">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono-caps text-xs px-3 py-1 bg-[#C9A84C]/20 text-[#C9A84C] rounded-full">
              {job.department}
            </span>
            <span className="font-jetbrains text-xs text-[#8A8A7C]">{job.posted}</span>
          </div>

          <h3 className="font-heading text-xl text-[#F5F0E8] mb-3">{job.title}</h3>

          <div className="flex flex-wrap gap-4 text-sm text-[#8A8A7C] mb-4">
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              {job.location}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {job.type}
            </span>
            <span className="flex items-center gap-2">
              <Briefcase className="w-4 h-4" />
              {job.experience}
            </span>
          </div>

          <p className="font-inter text-[#8A8A7C] mb-4">{job.description}</p>

          {isExpanded && (
            <div className="mb-4 space-y-3">
              <div>
                <p className="font-mono-caps text-xs text-[#8A8A7C] mb-2">REQUIREMENTS</p>
                <ul className="space-y-1">
                  {job.requirements.map((req: string, index: number) => (
                    <li key={index} className="font-inter text-sm text-[#F5F0E8] flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-[#27AE60]" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="font-mono-caps text-xs text-[#C9A84C] hover:underline"
          >
            {isExpanded ? 'SHOW LESS' : 'SHOW MORE'} →
          </button>
        </div>

        <div className="md:self-center">
          <Link href={`/careers/${job.id}`}>
            <MagneticButton variant="primary" size="sm">
              APPLY NOW
            </MagneticButton>
          </Link>
        </div>
      </div>
    </div>
  );
}

function BenefitItem({ title, description, icon }: any) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50">
      <div className="text-[#27AE60]">{icon}</div>
      <div>
        <h3 className="font-heading text-lg text-[#F5F0E8] mb-1">{title}</h3>
        <p className="font-inter text-sm text-[#8A8A7C]">{description}</p>
      </div>
    </div>
  );
}
