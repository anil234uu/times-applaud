"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import TopographicBg from "@/components/ui/TopographicBg";
import { gsap } from "gsap";
import { Shield, FileText, CheckCircle } from "lucide-react";

export default function TermsPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".terms-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".terms-section", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".terms-content",
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
            <div className="terms-hero max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <Shield className="w-12 h-12 text-[#C9A84C]" />
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                  TERMS OF SERVICE
                </h1>
              </div>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Please read these terms carefully before using Times Applaud services
              </p>
              <p className="font-jetbrains text-sm text-[#8A8A7C]">
                Last Updated: March 12, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Terms Content */}
        <section className="terms-content section-padding bg-[#0A0A0A]">
          <div className="container-wide max-w-4xl">
            <div className="space-y-12">
              
              {/* Section 1 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="1. Acceptance of Terms"
                content="By accessing and using Times Applaud (the 'Platform'), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by these terms, please do not use this Platform."
              />

              {/* Section 2 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="2. Description of Service"
                content="Times Applaud provides news, entertainment, sports coverage, magazine content, videos, podcasts, and other digital media content (collectively, the 'Content'). The service may include advertising, sponsored content, and third-party links. We reserve the right to modify, suspend, or discontinue any aspect of the Platform at any time."
              />

              {/* Section 3 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="3. User Accounts"
                content="To access certain features, you may need to create an account. You are responsible for maintaining the security of your account credentials and for all activities that occur under your account. You agree to provide accurate, current, and complete information during registration and to update such information as needed."
              />

              {/* Section 4 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="4. Intellectual Property Rights"
                content="All Content on the Platform, including but not limited to articles, videos, podcasts, images, logos, trademarks, and software, is the property of Times Applaud Pvt. Ltd. or its licensors and is protected by Indian and international copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission."
              />

              {/* Section 5 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="5. Permitted Use"
                content="You may access and view Content for personal, non-commercial use only. You may not: (a) sell, license, or distribute Content; (b) use automated systems to access the Platform; (c) circumvent any technological measures used to protect Content; (d) use the Platform for any unlawful purpose; or (e) attempt to gain unauthorized access to our systems."
              />

              {/* Section 6 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="6. User-Generated Content"
                content="If you submit comments, feedback, suggestions, or other content, you grant Times Applaud a non-exclusive, royalty-free, perpetual, irrevocable license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content worldwide. You represent that you own or have necessary rights to submit such content."
              />

              {/* Section 7 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="7. Disclaimer of Warranties"
                content="THE PLATFORM AND CONTENT ARE PROVIDED 'AS IS' AND 'AS AVAILABLE' WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE PLATFORM WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE."
              />

              {/* Section 8 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="8. Limitation of Liability"
                content="TO THE MAXIMUM EXTENT PERMITTED BY LAW, TIMES APPLAUD SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUES, DATA, OR USE, INCURRED BY YOU OR ANY THIRD PARTY, WHETHER IN AN ACTION IN CONTRACT OR TORT, ARISING FROM YOUR ACCESS TO OR USE OF THE PLATFORM."
              />

              {/* Section 9 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="9. Indemnification"
                content="You agree to indemnify, defend, and hold harmless Times Applaud, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, judgments, awards, losses, costs, expenses, or fees arising out of or relating to your violation of these Terms or your use of the Platform."
              />

              {/* Section 10 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="10. Termination"
                content="We may terminate or suspend your access to the Platform at any time, with or without cause, with or without notice, effective immediately. Upon termination, your right to use the Platform will cease immediately. All provisions of these Terms which by their nature should survive termination shall survive."
              />

              {/* Section 11 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="11. Governing Law"
                content="These Terms shall be governed by and construed in accordance with the laws of India, without regard to its conflict of law principles. Any disputes arising out of or relating to these Terms shall be subject to the exclusive jurisdiction of the courts located in Mumbai, Maharashtra."
              />

              {/* Section 12 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="12. Changes to Terms"
                content="We reserve the right to modify these Terms at any time. We will notify users of material changes by posting the new Terms on the Platform and updating the 'Last Updated' date. Your continued use of the Platform after such modifications constitutes your acceptance of the updated Terms."
              />

              {/* Section 13 */}
              <TermsSection
                icon={<FileText className="w-6 h-6" />}
                title="13. Contact Information"
                content="If you have any questions about these Terms, please contact us at legal@timesapplaud.com or write to us at: Legal Department, Times Applaud Pvt. Ltd., Samarth Complex, B Wing-201, 2nd Floor, Bapista Compound, Jawahar Nagar, Goregaon West, Mumbai, Maharashtra."
              />

            </div>
          </div>
        </section>

        {/* Acknowledgment Section */}
        <section className="section-padding bg-[#0D1F1C] border-t border-[#2A2A2A]">
          <div className="container-wide max-w-4xl text-center space-y-6">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/20">
              <CheckCircle className="w-8 h-8 text-[#C9A84C]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-[#F5F0E8]">
              By Using Times Applaud
            </h2>
            <p className="font-inter text-lg text-[#8A8A7C] max-w-2xl mx-auto">
              You acknowledge that you have read, understood, and agree to be bound by these Terms of Service and our Privacy Policy.
            </p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Sub-component
function TermsSection({ icon, title, content }: any) {
  return (
    <div className="terms-section flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
        {icon}
      </div>
      <div className="flex-1 space-y-3">
        <h3 className="font-heading text-xl text-[#F5F0E8]">{title}</h3>
        <p className="font-inter text-[#8A8A7C] leading-relaxed whitespace-pre-line">
          {content}
        </p>
      </div>
    </div>
  );
}
