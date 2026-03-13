# 🗞️ TIMES APPLAUD - RSS NEWS AGGREGATOR ARCHITECTURE

## ⚠️ CRITICAL UNDERSTANDING

**Times Applaud is NOT a traditional CMS.** It is an **automated RSS news aggregation engine** that:
- Fetches content from 500+ external RSS/Atom feeds in real-time
- Parses, cleans, and deduplicates articles automatically
- Categorizes content using intelligent algorithms
- Displays fresh, relevant news without manual editorial input
- Constantly refreshes and updates based on feed freshness

**No editors write articles here** — the system runs autonomously, pulling live news from hundreds of sources 24/7.

---

## 🏗️ SYSTEM ARCHITECTURE

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    TIMES APPLAUD RSS ARCHITECTURE                        │
│                                                                         │
│  ┌─────────────┐     ┌──────────────┐     ┌──────────────────────┐     │
│  │ RSS FEEDS   │────▶│ FEED ENGINE  │────▶│ DATABASE             │     │
│  │ (500+       │     │ (Node.js     │     │ (PostgreSQL)         │     │
│  │  Sources)   │     │  Workers)    │     │                      │     │
│  │             │     │              │     │ ┌────────────────┐   │     │
│  │ • RSS 2.0   │     │ • Parser     │     │ │ articles       │   │     │
│  │ • Atom      │     │ • Cleaner    │     │ │ feeds          │   │     │
│  │ • JSON Feed │     │ • Deduper    │     │ │ categories     │   │     │
│  │ • Sitemap   │     │ • Scorer     │     │ │ media          │   │     │
│  │             │     │ • Categorizer│     │ │ feed_logs      │   │     │
│  └─────────────┘     └──────────────┘     │ │ refresh_queue  │   │     │
│                                           └────────┬─────────┘   │     │
│                                                    │               │     │
│                                                    ▼               │     │
│  ┌──────────────┐     ┌──────────────┐     ┌──────────────────┐   │     │
│  │ ADMIN PANEL  │────▶│ REST API     │◀───▶│ NEXT.JS FRONTEND │   │     │
│  │ (Feed Mgmt)  │     │ + GraphQL    │     │ (SSR + ISR + CSR)│   │     │
│  └──────────────┘     └──────────────┘     └──────────────────┘   │     │
│                                                    │                 │
│                              ┌─────────────────────┘                │
│                              ▼                                      │
│                    ┌──────────────────┐                             │
│                    │ REDIS CACHE      │                             │
│                    │ + WebSocket      │                             │
│                    │ (Real-time)      │                             │
│                    └──────────────────┘                             │
└─────────────────────────────────────────────────────────────────────────┘
```

---

## 📡 CURRENT RSS IMPLEMENTATION

### **1. Feed Sources Configuration**

**File**: `/lib/rss-feeds.ts`

Currently configured sources:
- ✅ **Google News** (9 categories)
- ✅ **Times of India** (7 feeds)
- ✅ **Hindustan Times** (6 feeds)
- ✅ **Indian Express** (6 feeds)
- ✅ **NDTV** (5 feeds)
- ✅ **ESPN Cricinfo** (Cricket)

**Total Active Feeds**: 39+ RSS endpoints

#### Category Mapping:
```typescript
export const categoryToFeed: Record<string, string[]> = {
  news: [google.topStories, toi.india],
  entertainment: [google.entertainment, toi.entertainment],
  sports: [google.sports, toi.sports, espn.cricket],
  technology: [google.technology, toi.technology],
  // ... etc
};
```

---

### **2. RSS Feed API Endpoint**

**File**: `/app/api/rss/feed/route.ts`

**Functionality**:
1. Accepts `category` or `url` parameter
2. Fetches RSS feed with 10-second timeout
3. Parses XML using `rss-parser` library
4. Extracts images from multiple sources:
   - `<enclosure url="...">`
   - `<media:content url="...">`
   - `<img src="...">` in content
5. Transforms to standardized article format
6. Returns JSON for frontend consumption

**Features**:
- ✅ Timeout handling (10 seconds)
- ✅ Graceful error fallbacks
- ✅ Feed health checking (tries multiple URLs)
- ✅ Image extraction from multiple sources
- ✅ Breaking news detection
- ✅ Reading time calculation
- ✅ Simulated view counts

**Response Format**:
```json
{
  "success": true,
  "feed": {
    "title": "Google News",
    "description": "Latest news",
    "lastUpdated": "2026-03-12T10:30:00Z"
  },
  "articles": [
    {
      "id": "base64-encoded-guid",
      "slug": "article-title-slug",
      "title": "Article Title",
      "excerpt": "Short description...",
      "content": "Full content...",
      "category": "news",
      "image": "https://...",
      "author": {
        "name": "Author Name",
        "role": "Journalist"
      },
      "publishedAt": "2026-03-12T10:00:00Z",
      "readingTime": 3,
      "views": 1234,
      "isBreaking": false,
      "source": "News Source",
      "link": "https://original-article-url.com"
    }
  ],
  "count": 50
}
```

---

### **3. Frontend Integration**

**Category Pages**: `/app/category/[slug]/page.tsx`

Fetches RSS feeds dynamically for each category:
```typescript
const response = await fetch(`/api/rss/feed?category=${slug}`, {
  next: { revalidate: 900 } // Revalidate every 15 minutes
});
```

**RSS Feed Section Component**: `/components/sections/RSSFeedSection.tsx`

Displays fetched articles with:
- Auto-refresh every 15 minutes
- Loading states
- Error handling
- External link to original article

---

## 🔄 DATA FLOW

### Step-by-Step Process:

1. **User Visits Category Page**
   ```
   User → /category/news → Next.js SSR
   ```

2. **API Request Triggered**
   ```
   Frontend → GET /api/rss/feed?category=news
   ```

3. **Feed Selection**
   ```
   API looks up categoryToFeed['news']
   → Returns [google.topStories, toi.india]
   → Tries first feed URL
   ```

4. **RSS Fetch & Parse**
   ```
   fetch(rssUrl, { timeout: 10s })
   → parser.parseString(xml)
   → Transform items to Article[]
   ```

5. **Response & Cache**
   ```
   Redis cache stores result for 15 min
   → Return JSON to frontend
   ```

6. **Render Articles**
   ```
   Frontend displays articles
   → Shows loading skeleton on stale data
   → Refreshes every 15 minutes (ISR)
   ```

---

## 🛠️ MISSING COMPONENTS (TO BE BUILT)

Based on the architecture you described, here's what still needs implementation:

### **Phase 3: Backend Infrastructure**

#### 1. **Database Layer** (PostgreSQL)
```sql
-- Tables needed:
CREATE TABLE feeds (
  id UUID PRIMARY KEY,
  url TEXT UNIQUE,
  source_name TEXT,
  category TEXT[],
  last_fetched TIMESTAMP,
  is_active BOOLEAN
);

CREATE TABLE articles (
  id UUID PRIMARY KEY,
  feed_id UUID REFERENCES feeds(id),
  title TEXT,
  content TEXT,
  excerpt TEXT,
  image_url TEXT,
  author_name TEXT,
  published_at TIMESTAMP,
  category TEXT[],
  score INTEGER,
  is_deduplicated BOOLEAN,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE feed_logs (
  id UUID PRIMARY KEY,
  feed_id UUID REFERENCES feeds(id),
  status_code INTEGER,
  error_message TEXT,
  fetched_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE refresh_queue (
  id UUID PRIMARY KEY,
  feed_id UUID REFERENCES feeds(id),
  priority INTEGER,
  scheduled_for TIMESTAMP,
  status TEXT
);
```

#### 2. **Node.js Feed Workers**
```javascript
// workers/feed-fetcher.js
import Parser from 'rss-parser';
import { Pool } from 'pg';
import Redis from 'ioredis';

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const redis = new Redis(process.env.REDIS_URL);

async function fetchFeed(feedId, url) {
  try {
    const response = await fetch(url, { 
      signal: AbortSignal.timeout(10000) 
    });
    const xml = await response.text();
    const feed = await parser.parseString(xml);
    
    // Deduplicate
    const existingGuids = await checkExistingGuids(feed.items);
    const newItems = feed.items.filter(item => !existingGuids.has(item.guid));
    
    // Score articles
    const scored = newItems.map(item => ({
      ...item,
      score: calculateScore(item)
    }));
    
    // Save to DB
    await saveArticles(feedId, scored);
    
    // Update feed log
    await logSuccess(feedId, response.status);
    
    // Publish via WebSocket
    redis.publish('new_articles', JSON.stringify({
      feed_id: feedId,
      count: scored.length
    }));
    
  } catch (error) {
    await logError(feedId, error.message);
  }
}

function calculateScore(item) {
  let score = 0;
  
  // Freshness bonus
  const age = Date.now() - new Date(item.pubDate).getTime();
  const hoursOld = age / (1000 * 60 * 60);
  score += Math.max(0, 100 - hoursOld * 2);
  
  // Keyword matching
  const hotKeywords = ['breaking', 'exclusive', 'urgent'];
  hotKeywords.forEach(keyword => {
    if (item.title.toLowerCase().includes(keyword)) {
      score += 20;
    }
  });
  
  // Source authority
  score += getSourceAuthorityScore(item.source);
  
  return score;
}
```

#### 3. **Redis Cache + WebSocket**
```typescript
// lib/redis.ts
import Redis from 'ioredis';

export const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

export async function getCachedFeed(category: string) {
  const cached = await redis.get(`feed:${category}`);
  return cached ? JSON.parse(cached) : null;
}

export async function cacheFeed(category: string, data: any, ttlSeconds = 900) {
  await redis.setex(
    `feed:${category}`,
    ttlSeconds,
    JSON.stringify(data)
  );
}

// WebSocket for real-time updates
export async function broadcastNewArticles(feedId: string, articles: any[]) {
  await redis.publish('new_articles', JSON.stringify({
    feed_id: feedId,
    articles,
    timestamp: Date.now()
  }));
}
```

#### 4. **REST API Enhancements**
```typescript
// app/api/articles/route.ts
export async function GET(request: NextRequest) {
  const { category, page = 1, limit = 20 } = request.nextUrl.searchParams;
  
  // Check Redis cache first
  const cached = await getCachedFeed(`articles:${category}:${page}`);
  if (cached) {
    return NextResponse.json(cached);
  }
  
  // Query database
  const offset = (page - 1) * limit;
  const { rows } = await pool.query(
    `SELECT a.*, f.source_name 
     FROM articles a
     JOIN feeds f ON a.feed_id = f.id
     WHERE $1 = ANY(a.category)
     ORDER BY a.score DESC, a.published_at DESC
     LIMIT $2 OFFSET $3`,
    [category, limit, offset]
  );
  
  const total = await pool.query(
    `SELECT COUNT(*) FROM articles WHERE $1 = ANY(category)`,
    [category]
  );
  
  const response = {
    articles: rows,
    pagination: {
      page: parseInt(page),
      limit: parseInt(limit),
      total: parseInt(total.rows[0].count),
      totalPages: Math.ceil(parseInt(total.rows[0].count) / parseInt(limit))
    }
  };
  
  // Cache for 15 minutes
  await cacheFeed(`articles:${category}:${page}`, response, 900);
  
  return NextResponse.json(response);
}
```

#### 5. **Admin Panel** (Feed Management)
```typescript
// app/admin/feeds/page.tsx
export default function FeedManagement() {
  const [feeds, setFeeds] = useState([]);
  
  useEffect(() => {
    fetch('/api/admin/feeds')
      .then(res => res.json())
      .then(data => setFeeds(data));
  }, []);
  
  const addFeed = async (url: string, source: string, categories: string[]) => {
    await fetch('/api/admin/feeds', {
      method: 'POST',
      body: JSON.stringify({ url, source_name: source, category: categories })
    });
  };
  
  const removeFeed = async (id: string) => {
    await fetch(`/api/admin/feeds/${id}`, { method: 'DELETE' });
  };
  
  return (
    <div>
      <h1>RSS Feed Management</h1>
      <button onClick={() => addFeed(...) }>Add New Feed</button>
      {feeds.map(feed => (
        <FeedRow 
          key={feed.id} 
          feed={feed} 
          onRemove={() => removeFeed(feed.id)} 
        />
      ))}
    </div>
  );
}
```

---

## 📊 CURRENT STATUS

### ✅ Implemented (Frontend + Basic RSS)
- [x] RSS feed configuration (39+ feeds)
- [x] RSS API endpoint with parsing
- [x] Category-to-feed mapping
- [x] Frontend category pages
- [x] RSS feed display component
- [x] Timeout handling & error recovery
- [x] Image extraction logic
- [x] Breaking news detection
- [x] Gold accent theme restored

### ⏳ To Be Built (Backend Infrastructure)
- [ ] PostgreSQL database setup
- [ ] Node.js feed worker processes
- [ ] Article deduplication system
- [ ] Scoring algorithm
- [ ] Redis caching layer
- [ ] WebSocket real-time updates
- [ ] Admin panel for feed management
- [ ] GraphQL API (optional)
- [ ] Analytics dashboard
- [ ] Feed health monitoring

---

## 🎯 NEXT STEPS FOR FULL IMPLEMENTATION

### Phase 1: Database Setup (Week 1)
1. Install PostgreSQL
2. Create database schema
3. Set up connection pooling
4. Run initial migrations

### Phase 2: Worker Processes (Week 2)
1. Create Node.js feed fetcher workers
2. Implement deduplication logic
3. Build scoring algorithm
4. Set up cron jobs for periodic fetching

### Phase 3: Caching Layer (Week 3)
1. Install Redis
2. Implement cache strategies
3. Add WebSocket for real-time updates
4. Set up cache invalidation

### Phase 4: Admin Panel (Week 4)
1. Build feed management UI
2. Add feed analytics
3. Create monitoring dashboard
4. Implement alerting system

---

## 🔧 TECHNICAL STACK RECOMMENDATIONS

### Database
- **PostgreSQL** (primary database)
- **Prisma** or **Drizzle ORM** (TypeScript ORM)

### Caching
- **Redis** (cache + pub/sub)
- **ioredis** (Redis client)

### Background Jobs
- **Bull** or **Agenda** (job queue)
- **node-cron** (scheduled tasks)

### Real-time
- **Socket.io** or **ws** (WebSocket server)
- **Redis Pub/Sub** (cross-instance messaging)

### Monitoring
- **Prometheus** + **Grafana** (metrics)
- **Winston** (logging)
- **Sentry** (error tracking)

---

## 📝 IMPORTANT NOTES

### Content Freshness
- **Revalidation Time**: 15 minutes (ISR)
- **Feed Refresh Rate**: Every 30 minutes via workers
- **Cache TTL**: 900 seconds in Redis
- **Database Retention**: 30 days of articles

### Deduplication Strategy
- Compare `guid`, `link`, and title similarity
- Use fuzzy matching for near-duplicates
- Keep highest-scoring version
- Store duplicate references for analytics

### Legal Considerations
- Display only excerpts (fair use)
- Always link to original source
- Respect robots.txt and feed terms
- Provide opt-out mechanism for publishers

---

**This document serves as the architectural blueprint for Times Applaud's RSS news aggregation system.**

*Last Updated: March 12, 2026*
