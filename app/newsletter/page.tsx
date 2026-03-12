"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Mail, Send, Check, Gift, Bell, Archive } from "lucide-react";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<"daily" | "weekly" | "breaking">("daily");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubscribed(true);
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
            <div className="max-w-4xl space-y-6">
              <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                NEWSLETTER
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Stay ahead of the curve with Times Applaud's curated newsletters. 
                Choose your frequency and never miss a story that matters.
              </p>
            </div>
          </div>
        </section>

        {/* Newsletter Plans */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              Choose Your Newsletter
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              Select the newsletter plan that fits your reading preferences
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <NewsletterPlanCard
                icon={<Bell className="w-8 h-8" />}
                id="daily"
                title="Daily Digest"
                description="Your morning briefing"
                schedule="Every morning at 7 AM IST"
                features={[
                  "Top 10 stories of the day",
                  "Quick 5-minute read",
                  "Breaking news from yesterday",
                  "Today's top trends",
                ]}
                selected={selectedPlan === "daily"}
                onSelect={() => setSelectedPlan("daily")}
                popular={true}
              />
              <NewsletterPlanCard
                icon={<Archive className="w-8 h-8" />}
                id="weekly"
                title="Weekly Roundup"
                description="Week in review"
                schedule="Every Sunday at 9 AM IST"
                features={[
                  "Best stories of the week",
                  "In-depth analysis",
                  "Exclusive interviews",
                  "Photo essays & videos",
                  "Opinion pieces",
                ]}
                selected={selectedPlan === "weekly"}
                onSelect={() => setSelectedPlan("weekly")}
                popular={false}
              />
              <NewsletterPlanCard
                icon={<Send className="w-8 h-8" />}
                id="breaking"
                title="Breaking Alerts"
                description="Real-time updates"
                schedule="As it happens"
                features={[
                  "Major breaking news",
                  "Election results",
                  "Budget announcements",
                  "Sports victories",
                  "Urgent updates only",
                ]}
                selected={selectedPlan === "breaking"}
                onSelect={() => setSelectedPlan("breaking")}
                popular={false}
              />
            </div>

            {/* Signup Form */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                {subscribed ? (
                  <div className="text-center py-12 space-y-6">
                    <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#27AE60]/20">
                      <Check className="w-10 h-10 text-[#27AE60]" />
                    </div>
                    <div>
                      <h3 className="font-heading text-2xl text-[#F5F0E8] mb-2">
                        You're All Set!
                      </h3>
                      <p className="font-inter text-[#8A8A7C]">
                        Thank you for subscribing to the {selectedPlan === 'daily' ? 'Daily Digest' : selectedPlan === 'weekly' ? 'Weekly Roundup' : 'Breaking Alerts'}.
                      </p>
                      <p className="font-inter text-[#8A8A7C] mt-2">
                        Check your inbox for confirmation email.
                      </p>
                    </div>
                    <button
                      onClick={() => {
                        setSubscribed(false);
                        setEmail("");
                      }}
                      className="font-mono-caps text-xs text-[#8A8A7C] hover:text-[#C9A84C] transition-colors underline"
                    >
                      SUBSCRIBE ANOTHER EMAIL
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-8">
                      <Mail className="w-12 h-12 text-[#C9A84C] mx-auto mb-4" />
                      <h2 className="font-display text-2xl text-[#F5F0E8] mb-2">
                        Subscribe to {selectedPlan === 'daily' ? 'Daily Digest' : selectedPlan === 'weekly' ? 'Weekly Roundup' : 'Breaking Alerts'}
                      </h2>
                      <p className="font-inter text-[#8A8A7C]">
                        Free newsletter delivered to your inbox
                      </p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block font-mono-caps text-xs text-[#8A8A7C] mb-2">
                          EMAIL ADDRESS *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-[#0A0A0A] border border-[#2A2A2A] px-4 py-3 text-[#F5F0E8] placeholder:text-[#8A8A7C] focus:outline-none focus:border-[#C9A84C] transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>

                      <div className="space-y-3">
                        <label className="block font-mono-caps text-xs text-[#8A8A7C]">
                          PREFERRED FREQUENCY
                        </label>
                        <div className="space-y-2">
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="plan"
                              checked={selectedPlan === "daily"}
                              onChange={() => setSelectedPlan("daily")}
                              className="w-4 h-4 accent-[#C9A84C]"
                            />
                            <span className="font-inter text-sm text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                              Daily Digest — Every morning at 7 AM
                            </span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="plan"
                              checked={selectedPlan === "weekly"}
                              onChange={() => setSelectedPlan("weekly")}
                              className="w-4 h-4 accent-[#C9A84C]"
                            />
                            <span className="font-inter text-sm text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                              Weekly Roundup — Every Sunday morning
                            </span>
                          </label>
                          <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="radio"
                              name="plan"
                              checked={selectedPlan === "breaking"}
                              onChange={() => setSelectedPlan("breaking")}
                              className="w-4 h-4 accent-[#C9A84C]"
                            />
                            <span className="font-inter text-sm text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors">
                              Breaking Alerts — Real-time notifications
                            </span>
                          </label>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <input
                          type="checkbox"
                          required
                          id="consent"
                          className="w-4 h-4 mt-1 accent-[#C9A84C]"
                        />
                        <label htmlFor="consent" className="font-inter text-sm text-[#8A8A7C]">
                          I agree to receive marketing emails from Times Applaud and accept the{" "}
                          <a href="/privacy" className="text-[#C9A84C] hover:underline">
                            Privacy Policy
                          </a>{" "}
                          and{" "}
                          <a href="/terms" className="text-[#C9A84C] hover:underline">
                            Terms of Service
                          </a>
                          . I can unsubscribe anytime.
                        </label>
                      </div>

                      <button type="submit" className="w-full">
                        <MagneticButton variant="primary" size="lg">
                          <Mail className="w-4 h-4" />
                          SUBSCRIBE TO NEWSLETTER
                        </MagneticButton>
                      </button>

                      <p className="font-jetbrains text-xs text-[#8A8A7C] text-center">
                        Join 500,000+ readers who trust Times Applaud for their daily news.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Sample Newsletter Preview */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4 text-center">
              What You'll Get
            </h2>
            <p className="font-inter text-[#8A8A7C] text-center mb-12 max-w-2xl mx-auto">
              A sneak peek into our Daily Digest newsletter
            </p>

            <div className="max-w-2xl mx-auto p-8 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]">
              {/* Newsletter Header */}
              <div className="border-b border-[#2A2A2A] pb-6 mb-6">
                <h3 className="font-display text-3xl text-[#F5F0E8] mb-2">
                  TIMES APPLAUD
                </h3>
                <p className="font-mono-caps text-xs text-[#8A8A7C]">
                  DAILY DIGEST · {new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>

              {/* Sample Content */}
              <div className="space-y-6">
                <SampleStory
                  category="BREAKING"
                  title="India Wins Historic Cricket World Cup"
                  color="#D32F2F"
                />
                <SampleStory
                  category="ENTERTAINMENT"
                  title="Bollywood's Biggest Wedding of the Year"
                  color="#9B59B6"
                />
                <SampleStory
                  category="TECHNOLOGY"
                  title="AI Startups Raise Record Funding in 2025"
                  color="#3498DB"
                />
                <SampleStory
                  category="LIFESTYLE"
                  title="Why Gen Z is Rethinking Work-Life Balance"
                  color="#E91E63"
                />
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-[#2A2A2A] text-center">
                <p className="font-jetbrains text-xs text-[#8A8A7C]">
                  You received this email because you subscribed to Times Applaud
                </p>
                <p className="font-jetbrains text-xs text-[#8A8A7C] mt-2">
                  © 2026 Times Applaud Pvt. Ltd. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide max-w-3xl">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-8 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              <FAQItem
                question="Is the newsletter free?"
                answer="Yes! All our newsletters are completely free. We also offer premium subscriptions with additional benefits on our Subscribe page."
              />
              <FAQItem
                question="Can I change my subscription later?"
                answer="Absolutely! You can update your newsletter preferences or unsubscribe at any time by clicking the link at the bottom of any newsletter email."
              />
              <FAQItem
                question="How do I read the newsletter?"
                answer="Our newsletters arrive directly in your email inbox. Simply open the email and click on any story that interests you to read the full article on our website."
              />
              <FAQItem
                question="Do you share my email address?"
                answer="Never. We respect your privacy and never share, sell, or rent email addresses to third parties. Your information is secure with us."
              />
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function NewsletterPlanCard({ icon, id, title, description, schedule, features, selected, onSelect, popular }: any) {
  return (
    <div
      onClick={onSelect}
      className={`p-6 rounded-sm border cursor-pointer transition-all ${
        selected
          ? 'border-[#C9A84C] bg-[#0D1F1C]/80'
          : 'border-[#2A2A2A] bg-[#0A0A0A]/50 hover:border-[#C9A84C]/50'
      } ${popular && !selected ? 'relative' : ''}`}
    >
      {popular && !selected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C9A84C] text-[#0A0A0A] font-mono-caps text-xs px-4 py-1 rounded-full">
          MOST POPULAR
        </div>
      )}

      <div className="flex items-center gap-4 mb-4">
        <div className={`${selected ? 'text-[#C9A84C]' : 'text-[#8A8A7C]'}`}>
          {icon}
        </div>
        <div>
          <h3 className="font-heading text-xl text-[#F5F0E8]">{title}</h3>
          <p className="font-inter text-sm text-[#8A8A7C]">{description}</p>
        </div>
      </div>

      <p className="font-jetbrains text-xs text-[#8A8A7C] mb-4 pb-4 border-b border-[#2A2A2A]">
        {schedule}
      </p>

      <ul className="space-y-3 mb-6">
        {features.map((feature: string, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${selected ? 'text-[#C9A84C]' : 'text-[#27AE60]'}`} />
            <span className="font-inter text-sm text-[#F5F0E8]">{feature}</span>
          </li>
        ))}
      </ul>

      <div className={`text-center py-2 rounded-sm font-mono-caps text-xs ${
        selected ? 'bg-[#C9A84C] text-[#0A0A0A]' : 'bg-[#2A2A2A] text-[#8A8A7C]'
      }`}>
        {selected ? 'SELECTED ✓' : 'CLICK TO SELECT'}
      </div>
    </div>
  );
}

function SampleStory({ category, title, color }: any) {
  return (
    <div className="space-y-2">
      <p className="font-mono-caps text-xs uppercase" style={{ color }}>
        {category}
      </p>
      <h4 className="font-heading text-base text-[#F5F0E8] hover:text-[#C9A84C] cursor-pointer transition-colors">
        {title}
      </h4>
    </div>
  );
}

function FAQItem({ question, answer }: any) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2A2A2A] rounded-sm overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#0D1F1C]/50 transition-colors"
      >
        <span className="font-heading text-lg text-[#F5F0E8]">{question}</span>
        <span className={`font-display text-2xl text-[#8A8A7C] transition-transform ${isOpen ? 'rotate-45' : ''}`}>
          +
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6">
          <p className="font-inter text-[#8A8A7C] leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}
