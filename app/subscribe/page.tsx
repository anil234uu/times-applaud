"use client";

import { useState, useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Check, Mail, Newspaper, Gift } from "lucide-react";

export default function SubscribePage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate subscription
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
                SUBSCRIBE
              </h1>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Get premium news coverage delivered straight to your inbox. Stay informed with Times Applaud.
              </p>
            </div>
          </div>
        </section>

        {/* Subscription Plans */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <PlanCard
                title="Free Newsletter"
                price="FREE"
                period=""
                description="Daily news roundup in your inbox"
                features={[
                  "Daily news digest",
                  "Breaking news alerts",
                  "Weekly magazine preview",
                  "Access to free articles",
                ]}
                cta="Subscribe Free"
                popular={false}
              />
              <PlanCard
                title="Digital Edition"
                price="₹299"
                period="/month"
                description="Full access to digital magazine + newsletter"
                features={[
                  "Everything in Free",
                  "Monthly digital magazine",
                  "Archive access (1 year)",
                  "Ad-free reading",
                  "Exclusive videos",
                ]}
                cta="Get Digital Access"
                popular={true}
                color="#C9A84C"
              />
              <PlanCard
                title="Premium Plus"
                price="₹999"
                period="/year"
                description="Complete access with exclusive benefits"
                features={[
                  "All Digital features",
                  "Print magazine delivery",
                  "Archive access (5 years)",
                  "Priority customer support",
                  "Event invitations",
                  "Special discounts",
                ]}
                cta="Go Premium"
                popular={false}
              />
            </div>

            {/* Email Signup Form */}
            <div className="max-w-2xl mx-auto">
              <div className="p-8 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50">
                {subscribed ? (
                  <div className="text-center py-12">
                    <Check className="w-16 h-16 text-[#27AE60] mx-auto mb-4" />
                    <h3 className="font-heading text-2xl text-[#F5F0E8] mb-2">
                      You're Subscribed!
                    </h3>
                    <p className="font-inter text-[#8A8A7C]">
                      Thank you for subscribing. Check your inbox for confirmation.
                    </p>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl text-[#F5F0E8] mb-2 text-center">
                      Start with Our Free Newsletter
                    </h2>
                    <p className="font-inter text-[#8A8A7C] text-center mb-6">
                      Join thousands of readers who start their day with Times Applaud
                    </p>
                    
                    <form onSubmit={handleSubmit} className="space-y-4">
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

                      <button type="submit" className="w-full">
                        <MagneticButton variant="primary" size="lg">
                          <Mail className="w-4 h-4" />
                          SUBSCRIBE NOW
                        </MagneticButton>
                      </button>

                      <p className="font-jetbrains text-xs text-[#8A8A7C] text-center">
                        By subscribing, you agree to our Terms of Service and Privacy Policy.
                        Unsubscribe anytime.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-4">
                Why Subscribe?
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <BenefitCard
                icon={<Newspaper className="w-10 h-10" />}
                title="Curated Content"
                description="Hand-picked stories that matter most to you, edited by our expert team."
                color="#C9A84C"
              />
              <BenefitCard
                icon={<Mail className="w-10 h-10" />}
                title="Morning Digest"
                description="Start your day informed with our comprehensive morning newsletter."
                color="#27AE60"
              />
              <BenefitCard
                icon={<Gift className="w-10 h-10" />}
                title="Exclusive Access"
                description="Get access to special reports, interviews, and premium content."
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

function PlanCard({ title, price, period, description, features, cta, popular, color }: any) {
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

      <button className="w-full">
        <MagneticButton
          variant={popular ? 'primary' : 'outline'}
          size="md"
        >
          {cta}
        </MagneticButton>
      </button>
    </div>
  );
}

function BenefitCard({ icon, title, description, color }: any) {
  return (
    <div className="text-center p-6 space-y-4">
      <div className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-4" style={{ backgroundColor: `${color}20`, color }}>
        {icon}
      </div>
      <h3 className="font-heading text-xl text-[#F5F0E8]">{title}</h3>
      <p className="font-inter text-[#8A8A7C] leading-relaxed">{description}</p>
    </div>
  );
}
