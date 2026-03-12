"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import TopographicBg from "@/components/ui/TopographicBg";
import { gsap } from "gsap";
import { AlertTriangle, FileText, Scale, Info } from "lucide-react";

export default function DisclaimerPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".disclaimer-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".disclaimer-section", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".disclaimer-content",
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
            <div className="disclaimer-hero max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <AlertTriangle className="w-12 h-12 text-[#C9A84C]" />
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                  DISCLAIMER
                </h1>
              </div>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Important information about the content on Times Applaud
              </p>
              <p className="font-jetbrains text-sm text-[#8A8A7C]">
                Last Updated: March 12, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Disclaimer Content */}
        <section className="disclaimer-content section-padding bg-[#0A0A0A]">
          <div className="container-wide max-w-4xl">
            <div className="space-y-12">
              
              {/* General Disclaimer */}
              <DisclaimerSection
                icon={<Info className="w-6 h-6" />}
                title="General Information"
                content="The information provided on Times Applaud is for general informational and educational purposes only. All information on the Platform is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Platform."
              />

              {/* Professional Advice Disclaimer */}
              <DisclaimerSection
                icon={<AlertTriangle className="w-6 h-6" />}
                title="Not Professional Advice"
                content={`The Content on Times Applaud should not be construed as professional advice in any field including but not limited to:

• Legal Advice: Information provided is not a substitute for professional legal counsel
• Financial Advice: Investment and financial information is for educational purposes only
• Medical Advice: Health-related content is not medical advice or diagnosis
• Business Advice: Business information does not constitute professional consultation

Always seek the advice of qualified professionals with any questions you may have regarding specific situations.`}
              />

              {/* News and Information Accuracy */}
              <DisclaimerSection
                icon={<FileText className="w-6 h-6" />}
                title="News and Information Accuracy"
                content={`While we strive to ensure all news and information presented on Times Applaud is accurate at the time of publishing:

• Breaking news may be updated as more information becomes available
• We do not guarantee the completeness or reliability of third-party sources
• Opinions expressed by authors are their own and may not reflect official positions
• Statistics and data may change over time and should be verified independently`}
              />

              {/* Investment and Financial Content */}
              <DisclaimerSection
                icon={<Scale className="w-6 h-6" />}
                title="Investment and Financial Disclaimers"
                content={`Any financial or investment-related content on Times Applaud:

• Is provided for informational purposes only
• Does not constitute investment advice or recommendations
• Past performance discussed is not indicative of future results
• Should not be relied upon for making investment decisions
• May contain forward-looking statements that involve risks and uncertainties

Consult with a qualified financial advisor before making any investment decisions.`}
              />

              {/* Health and Wellness Content */}
              <DisclaimerSection
                icon={<AlertTriangle className="w-6 h-6" />}
                title="Health and Wellness Disclaimer"
                content={`Content related to health, fitness, nutrition, and wellness:

• Is for general informational purposes only
• Is not intended as medical advice, diagnosis, or treatment
• Should not replace professional medical consultation
• May discuss general wellness trends that may not apply to everyone
• Individual results may vary for any health-related suggestions

Always consult with qualified healthcare providers for medical concerns.`}
              />

              {/* Technology and Product Reviews */}
              <DisclaimerSection
                icon={<Info className="w-6 h-6" />}
                title="Technology and Product Reviews"
                content={`Reviews and opinions about products, services, and technology:

• Represent the opinions of our writers at the time of publication
• Are based on available information and testing at review time
• May become outdated as products are updated or changed
• Do not guarantee product performance or suitability
• May contain affiliate links (disclosed where applicable)

Conduct your own research before making purchasing decisions.`}
              />

              {/* Third-Party Links */}
              <DisclaimerSection
                icon={<FileText className="w-6 h-6" />}
                title="Third-Party Content and Links"
                content="Times Applaud may contain links to third-party websites, advertisements, or content that we do not control. We are not responsible for the accuracy, relevance, timeliness, or completeness of any third-party information. Inclusion of any links does not imply endorsement. Access third-party sites at your own risk."
              />

              {/* Forward-Looking Statements */}
              <DisclaimerSection
                icon={<Scale className="w-6 h-6" />}
                title="Forward-Looking Statements"
                content={`Some content on Times Applaud may contain forward-looking statements regarding:

• Future market conditions and trends
• Company projections and expectations
• Industry developments and predictions
• Economic forecasts

These statements involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially from those expressed or implied.`}
              />

              {/* No Liability */}
              <DisclaimerSection
                icon={<AlertTriangle className="w-6 h-6" />}
                title="Limitation of Liability"
                content="UNDER NO CIRCUMSTANCES SHALL TIMES APPLAUD, ITS AFFILIATES, OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES ARISING FROM YOUR USE OF THE PLATFORM OR RELIANCE ON ANY INFORMATION PROVIDED."
              />

              {/* Errors and Omissions */}
              <DisclaimerSection
                icon={<FileText className="w-6 h-6" />}
                title="Errors and Omissions"
                content="Despite our best efforts, some information on Times Applaud may contain typographical errors, inaccuracies, or omissions. We reserve the right to correct any errors, inaccuracies, or omissions at any time without prior notice. Information is subject to change without notice."
              />

              {/* Jurisdictional Issues */}
              <DisclaimerSection
                icon={<Scale className="w-6 h-6" />}
                title="Jurisdictional Considerations"
                content="Times Applaud is published in India. Information provided is primarily relevant to Indian readers. Laws, regulations, and practices vary by jurisdiction. Content may not be appropriate or available in all countries. Users accessing from other jurisdictions do so at their own initiative and are responsible for compliance with local laws."
              />

              {/* Contact */}
              <DisclaimerSection
                icon={<Info className="w-6 h-6" />}
                title="Questions About This Disclaimer"
                content={`If you have any questions about this Disclaimer or need clarification on any point, please contact us:

Email: legal@timesapplaud.com
Address: Legal Department, Times Applaud Pvt. Ltd., Samarth Complex, B Wing-201, 2nd Floor, Bapista Compound, Jawahar Nagar, Goregaon West, Mumbai, Maharashtra

We will respond to inquiries within 5 business days.`}
              />

            </div>
          </div>
        </section>

        {/* Important Notice Box */}
        <section className="section-padding bg-[#0D1F1C] border-t border-[#2A2A2A]">
          <div className="container-wide max-w-4xl">
            <div className="p-8 rounded-sm border border-[#C9A84C]/30 bg-[#C9A84C]/5">
              <div className="flex items-start gap-4">
                <AlertTriangle className="w-8 h-8 text-[#C9A84C] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="font-display text-xl text-[#F5F0E8] mb-3">
                    Important Notice
                  </h2>
                  <p className="font-inter text-[#8A8A7C] leading-relaxed">
                    By using Times Applaud, you acknowledge that you have read, understood, and agree to this Disclaimer. If you do not agree with any part of this disclaimer, please discontinue use of the Platform immediately. Your continued use of Times Applaud constitutes acceptance of these terms.
                  </p>
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

// Sub-component
function DisclaimerSection({ icon, title, content }: any) {
  return (
    <div className="disclaimer-section flex gap-4">
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
