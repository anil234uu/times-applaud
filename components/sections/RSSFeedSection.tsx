"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, RefreshCw, Rss } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { formatTimeAgo } from "@/lib/utils";

interface RSSArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: {
    name: string;
  };
  publishedAt: string;
  readingTime: number;
  link: string;
  source: string;
  isBreaking: boolean;
}

interface RSSFeedProps {
  category: string;
  limit?: number;
}

export default function RSSFeedSection({ category, limit = 10 }: RSSFeedProps) {
  const [articles, setArticles] = useState<RSSArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastFetched, setLastFetched] = useState<Date | null>(null);

  const fetchRSSFeed = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(`/api/rss/feed?category=${category}`);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to fetch feed');
      }

      setArticles(data.articles.slice(0, limit));
      setLastFetched(new Date());
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRSSFeed();
    
    // Auto-refresh every 15 minutes
    const interval = setInterval(fetchRSSFeed, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [category, limit]);

  if (loading && articles.length === 0) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="flex flex-col items-center gap-4">
          <RefreshCw className="w-8 h-8 text-[#C9A84C] animate-spin" />
          <p className="font-inter text-[#8A8A7C]">Loading latest news...</p>
        </div>
      </div>
    );
  }

  if (error && articles.length === 0) {
    return (
      <div className="text-center py-20">
        <p className="font-inter text-[#8A8A7C] mb-4">{error}</p>
        <button
          onClick={fetchRSSFeed}
          className="font-mono-caps text-xs px-6 py-3 border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0A0A0A] transition-colors"
        >
          TRY AGAIN
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header with Refresh */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Rss className="w-5 h-5 text-[#C9A84C]" />
          <h3 className="font-mono-caps text-sm text-[#C9A84C]">
            LIVE NEWS FEED
          </h3>
        </div>
        
        <div className="flex items-center gap-4">
          {lastFetched && (
            <span className="font-jetbrains text-xs text-[#8A8A7C]">
              Updated {formatTimeAgo(lastFetched.toISOString())}
            </span>
          )}
          <button
            onClick={fetchRSSFeed}
            className="p-2 text-[#8A8A7C] hover:text-[#C9A84C] transition-colors"
            aria-label="Refresh feed"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* Articles List */}
      <div className="space-y-4">
        {articles.map((article, index) => (
          <article
            key={article.id}
            className="group p-4 rounded-sm border border-[#2A2A2A] bg-[#0D1F1C]/30 hover:border-[#C9A84C]/50 transition-all"
          >
            <div className="flex gap-4">
              {/* Rank Number */}
              <span className="font-display text-2xl text-[#8A8A7C]/30 group-hover:text-[#C9A84C]/50 transition-colors">
                {String(index + 1).padStart(2, '0')}
              </span>

              {/* Content */}
              <div className="flex-1 space-y-2">
                {/* Breaking Badge */}
                {article.isBreaking && (
                  <span className="inline-block font-mono-caps text-[10px] px-2 py-0.5 bg-[#D32F2F] text-white rounded-full">
                    BREAKING
                  </span>
                )}

                {/* Title */}
                <Link
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <h4 className="font-heading text-base text-[#F5F0E8] group-hover:text-[#C9A84C] transition-colors line-clamp-2">
                    {article.title}
                  </h4>
                </Link>

                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-[#8A8A7C]">
                  <span className="font-jetbrains">
                    {article.source}
                  </span>
                  <span>•</span>
                  <span className="font-jetbrains">
                    {formatTimeAgo(article.publishedAt)}
                  </span>
                  <span>•</span>
                  <span className="font-jetbrains">
                    {article.readingTime} min read
                  </span>
                  
                  {/* External Link Icon */}
                  <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View Source Link */}
      <div className="pt-4 text-center">
        <Link
          href={`https://news.google.com/search?q=${category}&hl=en-IN&gl=IN&ceid=IN:en`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MagneticButton variant="outline" size="sm">
            VIEW ON GOOGLE NEWS
            <ExternalLink className="w-3 h-3" />
          </MagneticButton>
        </Link>
      </div>
    </div>
  );
}
