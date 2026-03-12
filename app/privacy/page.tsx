"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import TopographicBg from "@/components/ui/TopographicBg";
import { gsap } from "gsap";
import { Shield, Lock, Eye, Database, UserCheck, FileText } from "lucide-react";

export default function PrivacyPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".privacy-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".privacy-section", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".privacy-content",
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
            <div className="privacy-hero max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <Lock className="w-12 h-12 text-[#C9A84C]" />
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                  PRIVACY POLICY
                </h1>
              </div>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                We respect your privacy and are committed to protecting your personal information
              </p>
              <p className="font-jetbrains text-sm text-[#8A8A7C]">
                Last Updated: March 12, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="privacy-content section-padding bg-[#0A0A0A]">
          <div className="container-wide max-w-4xl">
            <div className="space-y-12">
              
              {/* Introduction */}
              <PrivacySection
                icon={<Shield className="w-6 h-6" />}
                title="Introduction"
                content="Times Applaud Pvt. Ltd. ('we,' 'our,' or 'us') is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website www.timesapplaud.com (the 'Platform'), use our mobile applications, or interact with our services."
              />

              {/* Section 1 */}
              <PrivacySection
                icon={<Eye className="w-6 h-6" />}
                title="1. Information We Collect"
                content={`• Personal Information: When you register for an account, subscribe to newsletters, or contact us, we may collect your name, email address, phone number, and other contact details.

• Usage Data: We automatically collect information about how you access the Platform, including your IP address, browser type, device information, pages viewed, time spent on pages, and click patterns.

• Cookies and Similar Technologies: We use cookies, web beacons, and similar technologies to enhance your experience, analyze trends, and administer the Platform.`}
              />

              {/* Section 2 */}
              <PrivacySection
                icon={<Database className="w-6 h-6" />}
                title="2. How We Use Your Information"
                content={`We use the information we collect to:

• Provide, maintain, and improve the Platform
• Send you technical notices, updates, security alerts, and support messages
• Respond to your comments, questions, and requests
• Personalize your experience and deliver content relevant to your interests
• Monitor and analyze trends, usage, and activities
• Detect, investigate, and prevent fraudulent transactions and illegal activities
• Comply with legal obligations`}
              />

              {/* Section 3 */}
              <PrivacySection
                icon={<UserCheck className="w-6 h-6" />}
                title="3. Sharing of Information"
                content={`We do not sell, trade, or rent your personal information to third parties. We may share information in the following situations:

• Service Providers: With vendors who perform services on our behalf (hosting, analytics, customer service)
• Business Transfers: In connection with a merger, acquisition, or sale of assets
• Legal Requirements: When required by law or to protect our rights and safety
• With Your Consent: When you have given us explicit permission to share information`}
              />

              {/* Section 4 */}
              <PrivacySection
                icon={<Lock className="w-6 h-6" />}
                title="4. Data Security"
                content="We implement appropriate technical and organizational measures to protect the security of your personal information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee its absolute security."
              />

              {/* Section 5 */}
              <PrivacySection
                icon={<FileText className="w-6 h-6" />}
                title="5. Your Rights and Choices"
                content={`Depending on your location, you may have the following rights:

• Access: Request a copy of the personal information we hold about you
• Correction: Request correction of inaccurate or incomplete information
• Deletion: Request deletion of your personal information
• Opt-Out: Unsubscribe from marketing communications at any time
• Cookie Control: Manage cookie preferences through your browser settings
• Data Portability: Request transfer of your data to another service

To exercise these rights, contact us at privacy@timesapplaud.com`}
              />

              {/* Section 6 */}
              <PrivacySection
                icon={<Eye className="w-6 h-6" />}
                title="6. Cookies and Tracking"
                content={`We use different types of cookies:

• Essential Cookies: Necessary for the Platform to function
• Performance Cookies: Help us understand how visitors use the Platform
• Functionality Cookies: Remember your choices and preferences
• Targeting Cookies: Used to deliver relevant advertisements

You can control cookies through your browser settings. Disabling cookies may limit your use of certain features.`}
              />

              {/* Section 7 */}
              <PrivacySection
                icon={<Database className="w-6 h-6" />}
                title="7. Third-Party Links and Services"
                content="The Platform may contain links to third-party websites, applications, or services that are not operated by us. This Privacy Policy does not apply to third-party sites. We encourage you to review the privacy policies of any third-party sites you visit."
              />

              {/* Section 8 */}
              <PrivacySection
                icon={<UserCheck className="w-6 h-6" />}
                title="8. Children's Privacy"
                content="Our Platform is not intended for children under 18 years of age. We do not knowingly collect personal information from children under 18. If we learn that we have collected personal information from a child under 18, we will delete that information as quickly as possible."
              />

              {/* Section 9 */}
              <PrivacySection
                icon={<Shield className="w-6 h-6" />}
                title="9. International Data Transfers"
                content="Your information may be transferred to — and maintained on — computers located outside of your state, province, country, or other governmental jurisdiction where the privacy laws may not be as protective as those in your jurisdiction. By using the Platform, you consent to such transfers."
              />

              {/* Section 10 */}
              <PrivacySection
                icon={<FileText className="w-6 h-6" />}
                title="10. Changes to This Policy"
                content="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the 'Last Updated' date. Your continued use of the Platform after changes constitutes acceptance of the updated policy."
              />

              {/* Section 11 */}
              <PrivacySection
                icon={<Shield className="w-6 h-6" />}
                title="11. GDPR Compliance (EU Users)"
                content={`If you are in the European Union, you have additional rights:

• Right to withdraw consent at any time
• Right to object to processing of your data
• Right to restrict processing in certain circumstances
• Right to be forgotten (data erasure)
• Right to human intervention in automated decisions

We comply with GDPR requirements for EU users.`}
              />

              {/* Section 12 */}
              <PrivacySection
                icon={<Lock className="w-6 h-6" />}
                title="12. CCPA Compliance (California Residents)"
                content={`California residents have specific rights under CCPA:

• Right to know what personal information is collected
• Right to know if personal information is sold or disclosed
• Right to opt-out of the sale of personal information
• Right to equal service and price

We do not sell personal information of California residents.`}
              />

              {/* Contact Section */}
              <PrivacySection
                icon={<FileText className="w-6 h-6" />}
                title="Contact Us"
                content={`If you have any questions about this Privacy Policy or our privacy practices, please contact us:

Email: privacy@timesapplaud.com
Address: Privacy Officer, Times Applaud Pvt. Ltd., Samarth Complex, B Wing-201, 2nd Floor, Bapista Compound, Jawahar Nagar, Goregaon West, Mumbai, Maharashtra

You may also contact our Data Protection Officer at dpo@timesapplaud.com`}
              />

            </div>
          </div>
        </section>

        {/* Summary Box */}
        <section className="section-padding bg-[#0D1F1C] border-t border-[#2A2A2A]">
          <div className="container-wide max-w-4xl">
            <div className="p-8 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50">
              <h2 className="font-display text-2xl text-[#F5F0E8] mb-6">
                Quick Summary
              </h2>
              <ul className="space-y-3 font-inter text-[#8A8A7C]">
                <li className="flex items-start gap-3">
                  <span className="text-[#27AE60] mt-1">✓</span>
                  <span>We collect only necessary information to provide our services</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#27AE60] mt-1">✓</span>
                  <span>We never sell your personal information to third parties</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#27AE60] mt-1">✓</span>
                  <span>You can access, correct, or delete your data at any time</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#27AE60] mt-1">✓</span>
                  <span>We use industry-standard security measures to protect your data</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#27AE60] mt-1">✓</span>
                  <span>You can opt-out of marketing communications anytime</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

// Sub-component
function PrivacySection({ icon, title, content }: any) {
  return (
    <div className="privacy-section flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C]">
        {icon}
      </div>
      <div className="flex-1 space-y-3">
        <h3 className="font-heading text-xl text-[#F5F0E8]">{title}</h3>
        <div className="font-inter text-[#8A8A7C] leading-relaxed whitespace-pre-line">
          {content}
        </div>
      </div>
    </div>
  );
}
