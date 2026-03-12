"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MagneticButton from "@/components/ui/MagneticButton";
import TopographicBg from "@/components/ui/TopographicBg";
import { Rss, ExternalLink, RefreshCw, Check } from "lucide-react";
import { rssFeedUrls, categoryToFeed } from "@/lib/rss-feeds";

export default function RSSFeedPage() {
  const [copiedUrl, setCopiedUrl] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, 'success' | 'error' | 'testing'>>({});

  const copyToClipboard = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  const testFeed = async (url: string, key: string) => {
    setTestResults(prev => ({ ...prev, [key]: 'testing' }));
    
    try {
      const response = await fetch(`/api/rss/feed?url=${encodeURIComponent(url)}`);
      if (response.ok) {
        setTestResults(prev => ({ ...prev, [key]: 'success' }));
      } else {
        setTestResults(prev => ({ ...prev, [key]: 'error' }));
      }
    } catch (error) {
      setTestResults(prev => ({ ...prev, [key]: 'error' }));
    }
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
              <div className="flex items-center gap-4">
                <Rss className="w-12 h-12 text-[#C9A84C]" />
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl text-[#F5F0E8] leading-none">
                  RSS FEEDS
                </h1>
              </div>
              <p className="font-inter text-xl text-[#8A8A7C] max-w-3xl leading-relaxed">
                Subscribe to our curated RSS feeds and stay updated with the latest news from Times Applaud and trusted sources across India.
              </p>
            </div>
          </div>
        </section>

        {/* Available Feeds by Category */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-8">
              Category Feeds
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.entries(categoryToFeed).map(([category, feeds]) => (
                <FeedCard
                  key={category}
                  category={category}
                  feeds={feeds}
                  copiedUrl={copiedUrl}
                  onCopy={copyToClipboard}
                  testResults={testResults}
                  onTest={testFeed}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All RSS Sources */}
        <section className="section-padding bg-[#0D1F1C]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-8">
              All RSS Sources
            </h2>

            <div className="space-y-12">
              {/* Google News */}
              <SourceSection
                title="Google News India"
                feeds={rssFeedUrls.google}
                color="#4285F4"
                copiedUrl={copiedUrl}
                onCopy={copyToClipboard}
                testResults={testResults}
                onTest={testFeed}
              />

              {/* Times of India */}
              <SourceSection
                title="Times of India"
                feeds={rssFeedUrls.timesOfIndia}
                color="#E31E24"
                copiedUrl={copiedUrl}
                onCopy={copyToClipboard}
                testResults={testResults}
                onTest={testFeed}
              />

              {/* Hindustan Times */}
              <SourceSection
                title="Hindustan Times"
                feeds={rssFeedUrls.hindustanTimes}
                color="#0054A6"
                copiedUrl={copiedUrl}
                onCopy={copyToClipboard}
                testResults={testResults}
                onTest={testFeed}
              />

              {/* Indian Express */}
              <SourceSection
                title="Indian Express"
                feeds={rssFeedUrls.indianExpress}
                color="#009FE3"
                copiedUrl={copiedUrl}
                onCopy={copyToClipboard}
                testResults={testResults}
                onTest={testFeed}
              />

              {/* NDTV */}
              <SourceSection
                title="NDTV"
                feeds={rssFeedUrls.ndtv}
                color="#E21B1B"
                copiedUrl={copiedUrl}
                onCopy={copyToClipboard}
                testResults={testResults}
                onTest={testFeed}
              />
            </div>
          </div>
        </section>

        {/* How to Use */}
        <section className="section-padding bg-[#0A0A0A]">
          <div className="container-wide">
            <h2 className="font-display text-3xl md:text-4xl text-[#F5F0E8] mb-8 text-center">
              How to Use RSS Feeds
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <StepCard
                number="01"
                title="Choose Your Feed"
                description="Select from our category feeds or individual news sources based on your interests."
              />
              <StepCard
                number="02"
                title="Copy RSS URL"
                description="Click the copy button on any feed card to copy the RSS URL to your clipboard."
              />
              <StepCard
                number="03"
                title="Add to Reader"
                description="Paste the URL into your favorite RSS reader app to start receiving updates."
              />
            </div>

            <div className="text-center mt-12">
              <p className="font-inter text-[#8A8A7C] mb-6">
                Popular RSS readers include Feedly, Inoreader, NewsBlur, and The Old Reader.
              </p>
              <Link href="/category/news">
                <MagneticButton variant="outline">
                  BROWSE NEWS CATEGORIES
                  <ExternalLink className="w-4 h-4 ml-2" />
                </MagneticButton>
              </Link>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}

function FeedCard({ category, feeds, copiedUrl, onCopy, testResults, onTest }: any) {
  const categoryName = category.charAt(0).toUpperCase() + category.slice(1);
  
  return (
    <div className="p-6 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/50 space-y-4">
      <h3 className="font-heading text-xl text-[#F5F0E8]">{categoryName}</h3>
      
      <div className="space-y-3">
        {feeds.map((feed: string, index: number) => {
          const shortUrl = feed.replace(/^https?:\/\//, '').split('/')[0];
          const status = testResults[feed];
          
          return (
            <div key={index} className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="font-jetbrains text-xs text-[#8A8A7C] truncate">
                  {shortUrl}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onCopy(feed)}
                    className="p-1.5 text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === feed ? (
                      <Check className="w-4 h-4 text-[#27AE60]" />
                    ) : (
                      <ExternalLink className="w-4 h-4" />
                    )}
                  </button>
                  <button
                    onClick={() => onTest(feed, `cat-${index}`)}
                    className="p-1.5 text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
                    title="Test Feed"
                  >
                    <RefreshCw className={`w-4 h-4 ${status === 'testing' ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
              
              {status && (
                <div className="text-xs">
                  {status === 'testing' && (
                    <span className="text-[#8A8A7C]">Testing...</span>
                  )}
                  {status === 'success' && (
                    <span className="text-[#27AE60]">✓ Working</span>
                  )}
                  {status === 'error' && (
                    <span className="text-[#D32F2F]">✗ Error</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function SourceSection({ title, feeds, color, copiedUrl, onCopy, testResults, onTest }: any) {
  return (
    <div className="space-y-4">
      <h3 
        className="font-display text-2xl text-[#F5F0E8] flex items-center gap-3"
        style={{ borderBottom: `2px solid ${color}`, paddingBottom: '8px' }}
      >
        {title}
      </h3>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {Object.entries(feeds).map(([key, url]: [string, any], index: number) => {
          const status = testResults[url];
          
          return (
            <div
              key={index}
              className="p-4 rounded-sm border border-[#2A2A2A] bg-[#0A0A0A]/50"
            >
              <div className="flex items-start justify-between gap-2 mb-2">
                <span className="font-mono-caps text-xs uppercase text-[#8A8A7C]">
                  {key.replace(/([A-Z])/g, ' $1').trim()}
                </span>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => onCopy(url as string)}
                    className="p-1 text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
                    title="Copy URL"
                  >
                    {copiedUrl === url ? (
                      <Check className="w-3.5 h-3.5 text-[#27AE60]" />
                    ) : (
                      <ExternalLink className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => onTest(url as string, `${title}-${key}`)}
                    className="p-1 text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
                    title="Test Feed"
                  >
                    <RefreshCw className={`w-3.5 h-3.5 ${status === 'testing' ? 'animate-spin' : ''}`} />
                  </button>
                </div>
              </div>
              
              <p className="font-jetbrains text-xs text-[#8A8A7C] truncate mb-2">
                {(url as string).replace(/^https?:\/\//, '')}
              </p>
              
              {status && (
                <div className="text-xs">
                  {status === 'testing' && (
                    <span className="text-[#8A8A7C]">Testing...</span>
                  )}
                  {status === 'success' && (
                    <span className="text-[#27AE60]">✓ Working</span>
                  )}
                  {status === 'error' && (
                    <span className="text-[#D32F2F]">✗ Error</span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function StepCard({ number, title, description }: any) {
  return (
    <div className="text-center p-6 space-y-4">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#C9A84C]/20 text-[#C9A84C] font-display text-2xl">
        {number}
      </div>
      <h3 className="font-heading text-xl text-[#F5F0E8]">{title}</h3>
      <p className="font-inter text-[#8A8A7C] leading-relaxed">{description}</p>
    </div>
  );
}
