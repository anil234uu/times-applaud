"use client";

import { useEffect, useRef } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import TopographicBg from "@/components/ui/TopographicBg";
import { gsap } from "gsap";
import { Cookie, Settings, Shield, CheckCircle, X } from "lucide-react";

export default function CookiesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pageRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".cookies-hero", {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      });

      gsap.from(".cookies-section", {
        opacity: 0,
        y: 30,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".cookies-content",
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
            <div className="cookies-hero max-w-4xl space-y-6">
              <div className="flex items-center gap-4">
                <Cookie className="w-12 h-12 text-[#C9A84C]" />
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                  COOKIES POLICY
                </h1>
              </div>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Learn about how we use cookies and similar technologies on Times Applaud
              </p>
              <p className="font-jetbrains text-sm text-[#8A8A7C]">
                Last Updated: March 12, 2026
              </p>
            </div>
          </div>
        </section>

        {/* Cookies Content */}
        <section className="cookies-content section-padding bg-[#0A0A0A]">
          <div className="container-wide max-w-4xl">
            <div className="space-y-12">
              
              {/* Introduction */}
              <CookiesSection
                icon={<Shield className="w-6 h-6" />}
                title="What Are Cookies?"
                content="Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They help websites remember information about your visit, which can make it easier to use the site and enhance your browsing experience. Cookies also help ensure that advertisements you see online are more relevant to you and your interests."
              />

              {/* Types of Cookies We Use */}
              <CookiesSection
                icon={<Settings className="w-6 h-6" />}
                title="Types of Cookies We Use"
                content={`We use different types of cookies on Times Applaud:

• Essential Cookies: These cookies are necessary for the Platform to function properly. They enable basic functions like page navigation, secure access to protected areas, and form filling. Without these cookies, our Platform cannot function correctly.

• Performance/Analytics Cookies: These cookies collect information about how visitors use our Platform, such as which pages are visited most often, whether users receive error messages, and how users interact with the site. This helps us improve how our Platform works.

• Functionality Cookies: These cookies allow our Platform to remember choices you make (such as your user name, language preference, or region) and provide enhanced, more personalized features.

• Targeting/Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests. They also limit the number of times you see an advertisement and help measure the effectiveness of advertising campaigns.`}
              />

              {/* Specific Cookies Used */}
              <CookiesSection
                icon={<Cookie className="w-6 h-6" />}
                title="Specific Cookies We Use"
                content={`Essential Cookies:
• session_id: Maintains your session during browsing (Session)
• auth_token: Authentication for logged-in users (24 hours)
• csrf_token: Security protection against CSRF attacks (Session)

Performance/Analytics Cookies:
• _ga: Google Analytics for distinguishing users (2 years)
• _gid: Google Analytics for distinguishing users (24 hours)
• _gat: Google Analytics for throttling request rate (1 minute)
• analytics_id: Internal analytics tracking (90 days)

Functionality Cookies:
• user_preferences: Stores your display preferences (1 year)
• language: Remembers your language selection (1 year)
• font_size: Remembers text size preference (1 year)

Targeting Cookies:
• _fbp: Facebook advertising pixel (90 days)
• _gcl_au: Google Ads conversion tracking (90 days)`}
              />

              {/* Third-Party Cookies */}
              <CookiesSection
                icon={<Settings className="w-6 h-6" />}
                title="Third-Party Cookies"
                content={`In addition to our own cookies, we also use cookies from trusted third parties:

• Google Analytics: For website analytics and reporting
• Google AdSense: For serving relevant advertisements
• Facebook Pixel: For measuring ad performance
• Twitter Ads: For advertising and conversion tracking
• LinkedIn Insights: For B2B marketing and analytics
• YouTube: For embedded video content tracking

These third parties may collect information about your online activities over time and across different websites.`}
              />

              {/* How to Control Cookies */}
              <CookiesSection
                icon={<Settings className="w-6 h-6" />}
                title="How to Control or Delete Cookies"
                content={`You have several options to manage or delete cookies:

Browser Settings:
Most web browsers allow some control of cookies through browser settings. You can set your browser to refuse all or some cookies, or to alert you when websites set or access cookies.

To manage cookies in popular browsers:
• Chrome: Settings → Privacy and security → Cookies
• Firefox: Options → Privacy & Security → Cookies
• Safari: Preferences → Privacy → Manage Website Data
• Edge: Settings → Privacy → Cookies

Mobile Devices:
• iOS: Settings → Safari → Privacy & Security
• Android: Chrome → Settings → Site settings → Cookies

Opt-Out Tools:
• Your Online Choices (Europe): youronlinechoices.com
• Network Advertising Initiative: optout.networkadvertising.org
• Digital Advertising Alliance: optout.aboutads.info

Note: Disabling cookies may limit your ability to use certain features of our Platform.`}
              />

              {/* Cookie Consent */}
              <CookiesSection
                icon={<CheckCircle className="w-6 h-6" />}
                title="Your Cookie Consent"
                content={`When you first visit Times Applaud, you will see a cookie consent banner. You can:

✓ Accept All Cookies: Allows all cookies for optimal experience
✓ Reject Non-Essential: Only essential cookies are used
✓ Customize Settings: Choose which types of cookies to accept

You can change your cookie preferences at any time by adjusting your browser settings or using our cookie management tool. However, please note that blocking or deleting cookies may affect your ability to use certain features of our Platform.`}
              />

              {/* Updates to Policy */}
              <CookiesSection
                icon={<FileText className="w-6 h-6" />}
                title="Updates to This Cookies Policy"
                content="We may update this Cookies Policy from time to time to reflect changes in technology, legislation, or our business operations. Any changes will be posted on this page with an updated 'Last Updated' date. We encourage you to review this policy periodically to stay informed about our use of cookies."
              />

              {/* Contact Information */}
              <CookiesSection
                icon={<Shield className="w-6 h-6" />}
                title="Contact Us"
                content={`If you have questions about our use of cookies or this Cookies Policy, please contact us:

Email: privacy@timesapplaud.com
Data Protection Officer: dpo@timesapplaud.com
Address: Privacy Officer, Times Applaud Pvt. Ltd., Samarth Complex, B Wing-201, 2nd Floor, Bapista Compound, Jawahar Nagar, Goregaon West, Mumbai, Maharashtra

We will respond to cookie-related inquiries within 5 business days.`}
              />

            </div>
          </div>
        </section>

        {/* Cookie Categories Summary */}
        <section className="section-padding bg-[#0D1F1C] border-t border-[#2A2A2A]">
          <div className="container-wide max-w-4xl">
            <h2 className="font-display text-2xl md:text-3xl text-[#F5F0E8] mb-8 text-center">
              Quick Reference: Cookie Categories
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <CookieCategoryCard
                icon={<CheckCircle className="w-6 h-6" />}
                category="Essential Cookies"
                purpose="Required for basic website functionality"
                examples="Session management, authentication, security"
                canDisable={false}
                color="#27AE60"
              />
              
              <CookieCategoryCard
                icon={<Settings className="w-6 h-6" />}
                category="Performance Cookies"
                purpose="Help us understand how visitors use our site"
                examples="Google Analytics, page interaction tracking"
                canDisable={true}
                color="#3498DB"
              />
              
              <CookieCategoryCard
                icon={<Cookie className="w-6 h-6" />}
                category="Functionality Cookies"
                purpose="Remember your choices and preferences"
                examples="Language, text size, display settings"
                canDisable={true}
                color="#9B59B6"
              />
              
              <CookieCategoryCard
                icon={<Shield className="w-6 h-6" />}
                category="Targeting Cookies"
                purpose="Deliver relevant advertisements"
                examples="Facebook Pixel, Google AdSense"
                canDisable={true}
                color="#E91E63"
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
function CookiesSection({ icon, title, content }: any) {
  return (
    <div className="cookies-section flex gap-4">
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

function CookieCategoryCard({ icon, category, purpose, examples, canDisable, color }: any) {
  return (
    <div className="p-6 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50 space-y-4">
      <div className="flex items-start justify-between">
        <div style={{ color }}>{icon}</div>
        <span className={`font-mono-caps text-xs px-3 py-1 rounded-full ${canDisable ? 'bg-[#27AE60]/20 text-[#27AE60]' : 'bg-[#8A8A7C]/20 text-[#8A8A7C]'}`}>
          {canDisable ? 'OPTIONAL' : 'REQUIRED'}
        </span>
      </div>
      
      <h3 className="font-heading text-lg text-[#F5F0E8]">{category}</h3>
      
      <div className="space-y-3">
        <div>
          <p className="font-mono-caps text-xs text-[#8A8A7C] mb-1">PURPOSE</p>
          <p className="font-inter text-sm text-[#F5F0E8]">{purpose}</p>
        </div>
        
        <div>
          <p className="font-mono-caps text-xs text-[#8A8A7C] mb-1">EXAMPLES</p>
          <p className="font-inter text-sm text-[#F5F0E8]">{examples}</p>
        </div>
      </div>
    </div>
  );
}

function FileText({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}
