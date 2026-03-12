import { NextRequest, NextResponse } from 'next/server';
import Parser from 'rss-parser';

// Initialize RSS parser
const parser = new Parser({
  customFields: {
    item: [
      ['content:encoded', 'content'],
      ['media:content', 'mediaContent', { keepArray: true }],
      ['dc:creator', 'creator'],
    ],
  },
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const feedUrl = searchParams.get('url');
  const category = searchParams.get('category');

  if (!feedUrl && !category) {
    return NextResponse.json(
      { error: 'Feed URL or category is required' },
      { status: 400 }
    );
  }

  try {
    // If category is provided, use the first feed URL for that category
    const urlToFetch = feedUrl || await getFeedUrlForCategory(category!);

    if (!urlToFetch) {
      return NextResponse.json(
        { error: 'No feed found for category' },
        { status: 404 }
      );
    }

    // Fetch and parse RSS feed with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout
    
    let feed;
    try {
      // Use fetch with timeout, then parse
      const response = await fetch(urlToFetch, { signal: controller.signal });
      if (!response.ok) throw new Error('Failed to fetch feed');
      const xml = await response.text();
      feed = await parser.parseString(xml);
    } catch (fetchError: any) {
      clearTimeout(timeoutId);
      console.error('RSS fetch error:', fetchError.message);
      
      // Return empty array instead of error for better UX
      return NextResponse.json({
        success: true,
        feed: {
          title: `${category?.toUpperCase() || 'News'} Feed`,
          description: 'Latest news updates',
          link: '',
          lastUpdated: new Date().toISOString(),
        },
        articles: [],
        count: 0,
        message: 'Feed temporarily unavailable. Please try again later.',
      });
    }
    
    clearTimeout(timeoutId);

    // Transform feed items to our article format
    const articles = feed.items.map((item: any) => ({
      id: item.guid || generateId(item.link),
      slug: generateSlug(item.title),
      title: item.title || 'Untitled',
      excerpt: item.contentSnippet || item.description || '',
      content: item.content || item.description || '',
      category: category || 'news',
      image: extractImageUrl(item),
      author: {
        id: 'rss',
        name: item.creator || item.author || 'News Desk',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop',
        role: 'Journalist',
      },
      publishedAt: item.pubDate || new Date().toISOString(),
      readingTime: calculateReadingTime(item.contentSnippet || ''),
      views: Math.floor(Math.random() * 5000) + 100, // Simulated views
      isFeatured: false,
      isBreaking: isBreaking(item.title),
      tags: item.categories || [],
      source: feed.title || 'News Source',
      link: item.link,
    }));

    return NextResponse.json({
      success: true,
      feed: {
        title: feed.title,
        description: feed.description,
        link: feed.link,
        lastUpdated: new Date().toISOString(),
      },
      articles,
      count: articles.length,
    });
  } catch (error: any) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json(
      { 
        error: 'Failed to fetch RSS feed',
        details: error.message 
      },
      { status: 500 }
    );
  }
}

// Helper functions
async function getFeedUrlForCategory(category: string): Promise<string | null> {
  const { categoryToFeed } = await import('@/lib/rss-feeds');
  const feeds = categoryToFeed[category];
  
  if (!feeds || feeds.length === 0) {
    // Return Google News top stories as default fallback
    return 'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en';
  }
  
  // Try each feed URL until one works
  for (const feedUrl of feeds) {
    try {
      const response = await fetch(feedUrl, { method: 'HEAD' });
      if (response.ok) {
        return feedUrl;
      }
    } catch (error) {
      continue; // Try next feed
    }
  }
  
  // If all feeds fail, return the first one anyway (might be temporary issue)
  return feeds[0];
}

function extractImageUrl(item: any): string {
  // Try multiple sources for image
  if (item.image) return item.image;
  if (item.enclosure?.url) return item.enclosure.url;
  if (item.mediaContent && item.mediaContent[0]?.url) {
    return item.mediaContent[0].url;
  }
  if (item.content) {
    const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
    if (imgMatch) return imgMatch[1];
  }
  // Default placeholder
  return `https://source.unsplash.com/random/1200x800/?${item.categories?.[0] || 'news'}`;
}

function generateId(link: string): string {
  return Buffer.from(link).toString('base64').substring(0, 16);
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 60);
}

function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function isBreaking(title: string): boolean {
  const breakingKeywords = ['breaking', 'urgent', 'just in', 'live', 'alert'];
  return breakingKeywords.some(keyword => 
    title.toLowerCase().includes(keyword)
  );
}
