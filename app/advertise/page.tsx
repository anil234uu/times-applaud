"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import Image from "next/image";
import { TrendingUp, Users, Target, BarChart3, Mail, Phone, Check } from "lucide-react";

export default function AdvertisePage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".advertise-hero", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".stat-card", {
        opacity: 0,
        y: 30,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".stats-section",
          start: "top 80%",
        },
      });

      gsap.from(".package-card", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".packages-section",
          start: "top 75%",
        },
      });

      gsap.from(".contact-form", {
        opacity: 0,
        x: 30,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-form",
          start: "top 75%",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 1000);
  };

  return (
    <>
      <CustomCursor />
      <main className="relative min-h-screen pt-32">
        <Header />

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 bg-[#0A0A0A] overflow-hidden">
          <TopographicBg animated />
          
          <div className="container-wide relative z-10">
            <div className="advertise-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                ADVERTISE WITH US
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Connect with 2M+ engaged readers across India. Premium brand placements, 
                targeted campaigns, and measurable results with Times Applaud.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Why Advertise With Times Applaud?
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Reach a premium audience with high engagement and conversion rates
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatCard
                icon={<Users className="w-8 h-8" />}
                number="2M+"
                label="Monthly Readers"
                subtext="Across all platforms"
                color="#C9A84C"
              />
              <StatCard
                icon={<Target className="w-8 h-8" />}
                number="65%"
                label="Engagement Rate"
                subtext="Above industry average"
                color="#27AE60"
              />
              <StatCard
                icon={<BarChart3 className="w-8 h-8" />}
                number="3.5M+"
                label="Monthly Pageviews"
                subtext="Premium inventory"
                color="#3498DB"
              />
              <StatCard
                icon={<TrendingUp className="w-8 h-8" />}
                number="251K"
                label="Social Media Reach"
                subtext="Facebook followers"
                color="#E91E63"
              />
            </div>
          </div>
        </section>

        {/* Audience Demographics */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8]">
                  Our Audience
                </h2>
                <p className="font-inter text-lg text-[#8A8A7C] leading-relaxed">
                  Times Applaud reaches educated, affluent urban professionals who make 
                  informed purchasing decisions. Our readers are early adopters, trendsetters, 
                  and decision-makers.
                </p>
                
                <div className="space-y-4">
                  <DemographicItem
                    label="Age Group"
                    value="25-45 years (Primary)"
                    percentage={75}
                    color="#C9A84C"
                  />
                  <DemographicItem
                    label="Urban Metro Cities"
                    value="Mumbai, Delhi, Bangalore, Hyderabad"
                    percentage={68}
                    color="#27AE60"
                  />
                  <DemographicItem
                    label="College Educated"
                    value="Graduate & Post-Graduate"
                    percentage={82}
                    color="#3498DB"
                  />
                  <DemographicItem
                    label="Household Income"
                    value="₹10L+ annually"
                    percentage={58}
                    color="#E91E63"
                  />
                </div>
              </div>

              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=800&fit=crop"
                  alt="Audience Analytics"
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Advertising Packages */}
        <section className="packages-section section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Advertising Packages
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Flexible solutions tailored to your brand's goals and budget
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <PackageCard
                title="Brand Awareness"
                price="₹50,000"
                period="/month"
                description="Perfect for emerging brands"
                features={[
                  "Homepage banner (728x90)",
                  "2 sponsored articles",
                  "Social media mentions (5 posts)",
                  "Newsletter feature (1 edition)",
                  "Basic analytics report",
                  "Campaign duration: 30 days",
                ]}
                popular={false}
              />
              <PackageCard
                title="Premium Partner"
                price="₹1,50,000"
                period="/month"
                description="Maximum visibility & engagement"
                features={[
                  "Homepage hero banner (exclusive)",
                  "6 sponsored articles",
                  "Category page takeovers",
                  "Social media campaign (15 posts)",
                  "Newsletter sponsorship (weekly)",
                  "Video content integration",
                  "Advanced analytics dashboard",
                  "Dedicated account manager",
                ]}
                popular={true}
                color="#C9A84C"
              />
              <PackageCard
                title="Custom Campaign"
                price="Custom"
                period=""
                description="Tailored solutions for enterprise"
                features={[
                  "Multi-platform integration",
                  "Custom content creation",
                  "Influencer collaborations",
                  "Event partnerships",
                  "Video production",
                  "Podcast sponsorships",
                  "Print + Digital combo",
                  "Comprehensive ROI analysis",
                ]}
                popular={false}
              />
            </div>
          </div>
        </section>

        {/* Ad Formats */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Available Ad Formats
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Choose from a variety of engaging ad formats across our platform
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AdFormatCard
                title="Display Banners"
                sizes={["728x90 (Leaderboard)", "300x250 (Medium Rectangle)", "160x600 (Wide Skyscraper)"]}
                placement="Homepage, Category pages, Article pages"
                color="#C9A84C"
              />
              <AdFormatCard
                title="Native Advertising"
                sizes={["Sponsored Articles", "Branded Content", "Product Reviews"]}
                placement="Integrated seamlessly with editorial content"
                color="#27AE60"
              />
              <AdFormatCard
                title="Video Ads"
                sizes={["Pre-roll (15-30 sec)", "Mid-roll", "Out-stream video"]}
                placement="Video player, Article embeds"
                color="#3498DB"
              />
              <AdFormatCard
                title="Newsletter Sponsorship"
                sizes={["Header banner", "Mid-content placement", "Dedicated emails"]}
                placement="Daily Digest, Weekly Roundup"
                color="#E91E63"
              />
              <AdFormatCard
                title="Social Media"
                sizes={["Instagram Stories", "Facebook Posts", "Twitter Cards"]}
                placement="Cross-platform promotion"
                color="#9B59B6"
              />
              <AdFormatCard
                title="Special Projects"
                sizes={["Microsites", "Interactive experiences", "AR/VR campaigns"]}
                placement="Custom implementations"
                color="#FF5722"
              />
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-6">
                    Let's Grow Your Brand
                  </h2>
                  <p className="font-inter text-lg text-[#8A8A7C] leading-relaxed mb-6">
                    Our advertising team will help you create a customized campaign that delivers 
                    real results. Whether you want to increase brand awareness, drive website traffic, 
                    or generate leads, we have the right solution for you.
                  </p>
                  
                  <div className="space-y-4">
                    <ContactInfoItem
                      icon={<Mail className="w-5 h-5" />}
                      label="Email Us"
                      value="marketing@timesapplaud.com"
                    />
                    <ContactInfoItem
                      icon={<Phone className="w-5 h-5" />}
                      label="Call Us"
                      value="+91 22 1234 5678"
                    />
                  </div>
                </div>

                <div className="p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                  <h4 className="font-heading text-lg text-[#F5F0E8] mb-4">
                    What Happens Next?
                  </h4>
                  <ol className="space-y-3 font-inter text-sm text-[#8A8A7C]">
                    <li className="flex items-start gap-3">
                      <span className="font-display text-lg text-[#C9A84C]">1.</span>
                      <span>Our team reviews your requirements within 24 hours</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-display text-lg text-[#C9A84C]">2.</span>
                      <span>Schedule a consultation call to discuss your goals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-display text-lg text-[#C9A84C]">3.</span>
                      <span>Receive a customized proposal with pricing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="font-display text-lg text-[#C9A84C]">4.</span>
                      <span>Campaign launch with dedicated support</span>
                    </li>
                  </ol>
                </div>
              </div>

              {/* Contact Form */}
              <div className="contact-form">
                <div className="p-8 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                  {submitted ? (
                    <div className="text-center py-12">
                      <Check className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
                      <h3 className="font-heading text-xl text-[#F5F0E8] mb-2">
                        Thank You!
                      </h3>
                      <p className="font-inter text-[#8A8A7C]">
                        Our marketing team will contact you within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <>
                      <h3 className="font-display text-2xl text-[#F5F0E8] mb-6">
                        Request a Quote
                      </h3>
                      
                      <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                              YOUR NAME *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                              placeholder="John Smith"
                            />
                          </div>
                          
                          <div>
                            <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                              COMPANY *
                            </label>
                            <input
                              type="text"
                              required
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                          <div>
                            <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                              EMAIL *
                            </label>
                            <input
                              type="email"
                              required
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                              placeholder="john@company.com"
                            />
                          </div>
                          
                          <div>
                            <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                              PHONE *
                            </label>
                            <input
                              type="tel"
                              required
                              className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                              placeholder="+91 98765 43210"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                            INTERESTED PACKAGE *
                          </label>
                          <select
                            required
                            className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] transition-colors"
                          >
                            <option value="">Select a package</option>
                            <option value="brand-awareness">Brand Awareness - ₹50,000/month</option>
                            <option value="premium-partner">Premium Partner - ₹1,50,000/month</option>
                            <option value="custom">Custom Campaign - Pricing on request</option>
                          </select>
                        </div>

                        <div>
                          <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                            CAMPAIGN OBJECTIVES
                          </label>
                          <textarea
                            rows={4}
                            className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                            placeholder="Tell us about your campaign goals, target audience, and expected outcomes..."
                          />
                        </div>

                          <MagneticButton variant="primary" size="lg" className="w-full" type="submit">
                            REQUEST QUOTE
                          </MagneticButton>

                        <p className="font-jetbrains text-xs text-[#8A8A7C] text-center">
                          By submitting, you agree to our Terms of Service and Privacy Policy.
                        </p>
                      </form>
                    </>
                  )}
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

function DemographicItem({ label, value, percentage, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-inter text-sm text-[#8A8A7C]">{label}</span>
        <span className="font-mono-caps text-xs text-[#F5F0E8]" style={{ color }}>{percentage}%</span>
      </div>
      <div className="h-2 bg-[#2A2A2A] rounded-full overflow-hidden">
        <div 
          className="h-full rounded-full" 
          style={{ width: `${percentage}%`, backgroundColor: color }}
        />
      </div>
      <p className="font-jetbrains text-xs text-[#8A8A7C]">{value}</p>
    </div>
  );
}

function PackageCard({ title, price, period, description, features, popular, color }: any) {
  return (
    <div
      className={`p-6 rounded-sm border ${
        popular ? 'border-[#C9A84C] bg-[#0D1F1C]/80' : 'border-[#2A2A2A] bg-[#0A0A0A]/50'
      } relative`}
    >
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] font-mono-caps text-xs px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="font-heading text-xl text-[#F5F0E8] mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className={`font-display text-4xl ${popular ? 'text-[#C9A84C]' : 'text-[#F5F0E8]'}`}>
            {price}
          </span>
          <span className="font-mono-caps text-xs text-[#8A8A7C]">{period}</span>
        </div>
        <p className="font-inter text-sm text-[#8A8A7C] mt-3">{description}</p>
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-[#27AE60] flex-shrink-0 mt-0.5" />
            <span className="font-inter text-sm text-[#F5F0E8]">{feature}</span>
          </li>
        ))}
      </ul>

      <MagneticButton variant={popular ? 'primary' : 'outline'} size="md" className="w-full">
        {popular ? 'GET STARTED' : 'LEARN MORE'}
      </MagneticButton>
    </div>
  );
}

function AdFormatCard({ title, sizes, placement, color }: any) {
  return (
    <div className="p-6 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50 space-y-4">
      <h3 className="font-heading text-lg text-[#F5F0E8]">{title}</h3>
      
      <div>
        <p className="font-mono-caps text-xs text-[#8A8A7C] mb-2">AVAILABLE SIZES</p>
        <ul className="space-y-1">
          {sizes.map((size: string, index: number) => (
            <li key={index} className="font-inter text-sm text-[#F5F0E8]">• {size}</li>
          ))}
        </ul>
      </div>

      <div>
        <p className="font-mono-caps text-xs text-[#8A8A7C] mb-1">PLACEMENT</p>
        <p className="font-inter text-sm text-[#F5F0E8]">{placement}</p>
      </div>
    </div>
  );
}

function ContactInfoItem({ icon, label, value }: any) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#C9A84C]/20 text-[#C9A84C]">
        {icon}
      </div>
      <div>
        <p className="font-mono-caps text-xs text-[#8A8A7C]">{label}</p>
        <p className="font-heading text-base text-[#F5F0E8]">{value}</p>
      </div>
    </div>
  );
}
