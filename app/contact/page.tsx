"use client";

import { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!formRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".contact-hero", {
        opacity: 0,
        y: 40,
        duration: 0.8,
        ease: "power3.out",
      });

      gsap.from(".contact-card", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".contact-cards",
          start: "top 80%",
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
    // Simulate form submission
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
            <div className="contact-hero max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                CONTACT US
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Get in touch with our editorial team. We're here to answer your questions and hear your story ideas.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="contact-cards grid md:grid-cols-3 gap-6 mb-16">
              <ContactCard
                icon={<Mail className="w-6 h-6" />}
                title="Email Us"
                details={[
                  "marketing@timesapplaud.com",
                  "editorial@timesapplaud.com",
                ]}
                color="#C9A84C"
              />
              <ContactCard
                icon={<Phone className="w-6 h-6" />}
                title="Call Us"
                details={["+91 22 1234 5678"]}
                color="#27AE60"
              />
              <ContactCard
                icon={<MapPin className="w-6 h-6" />}
                title="Visit Us"
                details={[
                  "Samarth Complex, B Wing- 201,",
                  "2nd Floor, Bapista Compound,",
                  "Jawahar Nagar, Goregaon West,",
                  "Mumbai, Maharashtra",
                ]}
                color="#3498DB"
              />
            </div>

            {/* Contact Form & Map */}
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="contact-form">
                <div className="p-8 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                  <h2 className="font-display text-2xl text-[#F5F0E8] mb-6">
                    Send Us a Message
                  </h2>

                  {submitted ? (
                    <div className="text-center py-12">
                      <MessageSquare className="w-16 h-16 text-[#C9A84C] mx-auto mb-4" />
                      <h3 className="font-heading text-xl text-[#F5F0E8] mb-2">
                        Thank You!
                      </h3>
                      <p className="font-inter text-[#8A8A7C]">
                        We've received your message and will get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                          YOUR NAME *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                          placeholder="John Doe"
                        />
                      </div>

                      <div>
                        <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                          SUBJECT *
                        </label>
                        <select
                          required
                          className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] focus:outline-none focus:border-[#C9A84C] transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="Editorial">Editorial / Story Tip</option>
                          <option value="Advertising">Advertising Inquiry</option>
                          <option value="Partnership">Partnership Opportunity</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      <div>
                        <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                          MESSAGE *
                        </label>
                        <textarea
                          required
                          rows={6}
                          className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none"
                          placeholder="Your message..."
                        />
                      </div>

                      <button type="submit" className="w-full">
                        <MagneticButton variant="primary" size="lg">
                          SEND MESSAGE
                          <Send className="w-4 h-4" />
                        </MagneticButton>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-display text-xl text-[#F5F0E8] mb-4">
                    Editorial Team
                  </h3>
                  <p className="font-inter text-[#8A8A7C] leading-relaxed mb-4">
                    Have a news tip or story idea? Our editorial team is always interested in 
                    hearing from our readers. For press releases, event coverage requests, or 
                    news tips, please email us at editorial@timesapplaud.com.
                  </p>
                  <p className="font-inter text-[#8A8A7C] leading-relaxed">
                    For advertising and partnership inquiries, reach out to our marketing team 
                    at marketing@timesapplaud.com.
                  </p>
                </div>

                <div className="p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                  <h4 className="font-heading text-lg text-[#F5F0E8] mb-4">
                    Office Hours
                  </h4>
                  <div className="space-y-2 font-inter text-sm text-[#8A8A7C]">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span className="text-[#F5F0E8]">9:00 AM - 7:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span className="text-[#F5F0E8]">10:00 AM - 4:00 PM IST</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span className="text-[#C9A84C]">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                  <h4 className="font-heading text-lg text-[#F5F0E8] mb-4">
                    Follow Us
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <SocialLink platform="Facebook" url="https://facebook.com/timesapplaud" />
                    <SocialLink platform="Instagram" url="https://instagram.com/timesapplaud" />
                    <SocialLink platform="Twitter" url="https://twitter.com/timesapplaud" />
                    <SocialLink platform="YouTube" url="https://youtube.com/@TimesApplaud" />
                    <SocialLink platform="LinkedIn" url="https://linkedin.com/company/timesapplaud" />
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

function ContactCard({ icon, title, details, color }: any) {
  return (
    <div className="contact-card p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4" style={{ backgroundColor: `${color}20`, color }}>
        {icon}
      </div>
      <h3 className="font-heading text-lg text-[#F5F0E8] mb-3">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail: string, index: number) => (
          <li key={index} className="font-inter text-sm text-[#8A8A7C]">
            {detail}
          </li>
        ))}
      </ul>
    </div>
  );
}

function SocialLink({ platform, url }: any) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4 py-2 rounded-full border border-[#2A2A2A] text-xs font-mono-caps text-[#8A8A7C] hover:border-[#C9A84C] hover:text-[#C9A84C] transition-colors"
    >
      {platform}
    </a>
  );
}
