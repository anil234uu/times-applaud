// ============================================================================
// TIMES APPLAUD - MASTER RSS FEED REGISTRY
// ============================================================================
// Automated news aggregation from 50+ premium sources
// Categories: News, Entertainment, Sports, Technology, Lifestyle, Health, Fashion, Travel
// Refresh intervals: 2-30 minutes based on priority
// ============================================================================

export const rssFeedUrls = {
  // ==========================================================================
  // 1A — NEWS CATEGORY (🔴 Critical Priority)
  // ==========================================================================
  news: {
    // Hero + Latest News (Critical)
    ndtvTopStories: 'https://feeds.feedburner.com/ndtvnews-top-stories',
    timesOfIndia: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    hindustanTimes: 'https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml',
    indiaToday: 'https://www.indiatoday.in/rss/home',
    
    // Breaking + World (Critical)
    reutersIndia: 'https://www.reuters.com/rssFeed/INTopNews',
    bbcIndia: 'http://feeds.bbci.co.uk/news/world/asia/india/rss.xml',
    googleNewsIndia: 'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en',
    
    // News Spotlight (High)
    theHindu: 'https://www.thehindu.com/news/national/feeder/default.rss',
    indianExpress: 'https://indianexpress.com/section/india/feed/',
    zeeNews: 'https://zeenews.india.com/rss/india-national-news.xml',
    republicWorld: 'https://www.republicworld.com/rss/india-news.xml',
    
    // World News (Medium-High)
    ndtvWorld: 'https://feeds.feedburner.com/ndtvnews-world-news',
    alJazeera: 'https://www.aljazeera.com/xml/rss/all.xml',
    cnn: 'http://rss.cnn.com/rss/edition.rss',
    
    // Business + Deep Dives
    economicTimes: 'https://economictimes.indiatimes.com/rssfeedstopstories.cms',
    scrollIn: 'https://scroll.in/rss/feed',
    
    // Local News
    midDayMumbai: 'https://www.mid-day.com/mumbai-news/rss',
    ndtvCities: 'https://feeds.feedburner.com/ndtvnews-cities-news',
  },

  // ==========================================================================
  // 1B — ENTERTAINMENT CATEGORY
  // ==========================================================================
  entertainment: {
    // Bollywood (High Priority)
    bollywoodHungama: 'https://www.bollywoodhungama.com/rss/news.xml',
    pinkvilla: 'https://www.pinkvilla.com/rss.xml',
    ndtvMovies: 'https://feeds.feedburner.com/ndtvmovies-latest',
    koimoi: 'https://www.koimoi.com/feed/',
    peepingMoon: 'https://www.peepingmoon.com/rss',
    
    // General Entertainment (Medium)
    filmfare: 'https://www.filmfare.com/rss.xml',
    
    // Hollywood & OTT (Medium)
    screenRant: 'https://screenrant.com/feed/',
    theVergeEntertainment: 'https://www.theverge.com/rss/entertainment/index.xml',
    ottPlay: 'https://www.ottplay.com/rss',
    variety: 'https://variety.com/feed/',
    hollywoodReporter: 'https://www.hollywoodreporter.com/feed/',
    
    // Music (Normal)
    rollingStoneIndia: 'https://rollingstoneindia.com/feed/',
  },

  // ==========================================================================
  // 1C — SPORTS CATEGORY (🔴 Critical for Cricket)
  // ==========================================================================
  sports: {
    // Cricket (Critical - Live Scores)
    espnCricinfo: 'https://www.espncricinfo.com/ci/engine/rss/guide.html',
    cricBuzz: 'https://www.cricbuzz.com/rss/',
    
    // General Sports (Critical)
    ndtvSports: 'https://feeds.feedburner.com/ndtvsports-latest',
    sportstar: 'https://sportstar.thehindu.com/rss',
    espnIndia: 'https://www.espn.in/espn/rss/news',
    
    // Football (High)
    goalComIndia: 'https://www.goal.com/en-in/feeds/news',
    skySports: 'https://www.skysports.com/rss/12040',
    
    // Other Sports (Medium-Normal)
    olympics: 'https://olympics.com/en/rss',
    autosport: 'https://www.autosport.com/rss/feed/all',
    tennis365: 'https://www.tennis365.com/feed/',
  },

  // ==========================================================================
  // 1D — TECHNOLOGY CATEGORY
  // ==========================================================================
  technology: {
    // Tech Hero (High Priority)
    techCrunch: 'https://techcrunch.com/feed/',
    theVerge: 'https://www.theverge.com/rss/index.xml',
    indianExpressTech: 'https://indianexpress.com/section/technology/feed/',
    gadgets360: 'https://gadgets360.com/rss/news',
    
    // Gadgets & Apps (Medium)
    androidAuthority: 'https://www.androidauthority.com/feed/',
    nineToFiveGoogle: 'https://9to5google.com/feed/',
    nineToFiveMac: 'https://9to5mac.com/feed/',
    xdaDevelopers: 'https://www.xda-developers.com/feed/',
    
    // Deep Dives (Medium-Normal)
    wired: 'https://www.wired.com/feed/rss',
    arsTechnica: 'https://feeds.arstechnica.com/arstechnica/index',
    mitTechnologyReview: 'https://www.technologyreview.com/feed/',
    
    // Specialized (Normal)
    spaceCom: 'https://www.space.com/feeds/all',
    hackerNews: 'https://feeds.feedburner.com/TheHackersNews',
  },

  // ==========================================================================
  // LIFESTYLE & HEALTH CATEGORY
  // ==========================================================================
  lifestyle: {
    health: [
      'https://www.ndtv.com/health/rss',
      'https://timesofindia.indiatimes.com/life-style/health-fitness/rssfeeds/1708379.cms',
    ],
    fitness: [
      'https://www.healthshots.com/feed/',
    ],
  },

  // ==========================================================================
  // FASHION CATEGORY
  // ==========================================================================
  fashion: {
    vogueIndia: 'https://www.vogue.in/fashion/rss',
    elleIndia: 'https://www.elle.com/fashion/rss/',
  },

  // ==========================================================================
  // TRAVEL CATEGORY
  // ==========================================================================
  travel: {
    lonelyPlanet: 'https://www.lonelyplanet.com/rss',
    travelLeisure: 'https://www.travelandleisure.com/rss',
    condéNast: 'https://www.cntraveler.com/feed/rss',
  },

  // Legacy single-feed format for backward compatibility
  cricket: 'https://www.espncricinfo.com/ci/engine/rss/guide.html',
};

// Category to Feed mapping (prioritized order)
export const categoryToFeed: Record<string, string[]> = {
  // News: Critical sources first
  news: [
    rssFeedUrls.news.ndtvTopStories,
    rssFeedUrls.news.timesOfIndia,
    rssFeedUrls.news.reutersIndia,
    rssFeedUrls.news.googleNewsIndia,
    rssFeedUrls.news.bbcIndia,
    rssFeedUrls.news.hindustanTimes,
    rssFeedUrls.news.indiaToday,
  ],
  
  // Entertainment: Bollywood priority
  entertainment: [
    rssFeedUrls.entertainment.bollywoodHungama,
    rssFeedUrls.entertainment.pinkvilla,
    rssFeedUrls.entertainment.ndtvMovies,
    rssFeedUrls.entertainment.screenRant,
    rssFeedUrls.entertainment.variety,
  ],
  
  // Sports: Cricket is king
  sports: [
    rssFeedUrls.sports.espnCricinfo,
    rssFeedUrls.sports.cricBuzz,
    rssFeedUrls.sports.ndtvSports,
    rssFeedUrls.sports.goalComIndia,
    rssFeedUrls.sports.espnIndia,
  ],
  
  // Technology: Major publications first
  technology: [
    rssFeedUrls.technology.techCrunch,
    rssFeedUrls.technology.theVerge,
    rssFeedUrls.technology.gadgets360,
    rssFeedUrls.technology.indianExpressTech,
    rssFeedUrls.technology.androidAuthority,
  ],
  
  // Lifestyle & Health
  lifestyle: [
    ...rssFeedUrls.lifestyle.health,
    ...rssFeedUrls.lifestyle.fitness,
  ],
  
  // Health (dedicated category)
  health: rssFeedUrls.lifestyle.health,
  
  // Fashion
  fashion: [
    rssFeedUrls.fashion.vogueIndia,
    rssFeedUrls.fashion.elleIndia,
  ],
  
  // Travel
  travel: [
    rssFeedUrls.travel.lonelyPlanet,
    rssFeedUrls.travel.condéNast,
    rssFeedUrls.travel.travelLeisure,
  ],
  
  // Business (uses news feeds)
  business: [
    rssFeedUrls.news.economicTimes,
    rssFeedUrls.news.ndtvTopStories,
  ],
  
  // World News
  world: [
    rssFeedUrls.news.ndtvWorld,
    rssFeedUrls.news.alJazeera,
    rssFeedUrls.news.cnn,
    rssFeedUrls.news.reutersIndia,
  ],
};

// Feed metadata for admin dashboard
export const feedMetadata: Record<string, { name: string; priority: 'critical' | 'high' | 'medium' | 'normal'; refreshInterval: number }> = {
  // News feeds
  [rssFeedUrls.news.ndtvTopStories]: { name: 'NDTV Top Stories', priority: 'critical', refreshInterval: 300 }, // 5 min
  [rssFeedUrls.news.timesOfIndia]: { name: 'Times of India', priority: 'critical', refreshInterval: 300 },
  [rssFeedUrls.news.reutersIndia]: { name: 'Reuters India', priority: 'critical', refreshInterval: 300 },
  [rssFeedUrls.news.googleNewsIndia]: { name: 'Google News India', priority: 'critical', refreshInterval: 180 }, // 3 min
  [rssFeedUrls.news.bbcIndia]: { name: 'BBC India', priority: 'high', refreshInterval: 600 }, // 10 min
  [rssFeedUrls.news.hindustanTimes]: { name: 'Hindustan Times', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.news.indiaToday]: { name: 'India Today', priority: 'high', refreshInterval: 300 },
  [rssFeedUrls.news.theHindu]: { name: 'The Hindu', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.news.indianExpress]: { name: 'Indian Express', priority: 'high', refreshInterval: 600 },
  
  // Entertainment feeds
  [rssFeedUrls.entertainment.bollywoodHungama]: { name: 'Bollywood Hungama', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.entertainment.pinkvilla]: { name: 'Pinkvilla', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.entertainment.variety]: { name: 'Variety', priority: 'normal', refreshInterval: 1200 }, // 20 min
  
  // Sports feeds
  [rssFeedUrls.sports.espnCricinfo]: { name: 'ESPNcricinfo', priority: 'critical', refreshInterval: 180 }, // 3 min
  [rssFeedUrls.sports.cricBuzz]: { name: 'CricBuzz', priority: 'critical', refreshInterval: 180 },
  [rssFeedUrls.sports.ndtvSports]: { name: 'NDTV Sports', priority: 'critical', refreshInterval: 300 },
  
  // Technology feeds
  [rssFeedUrls.technology.techCrunch]: { name: 'TechCrunch', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.technology.theVerge]: { name: 'The Verge', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.technology.gadgets360]: { name: 'Gadgets 360', priority: 'high', refreshInterval: 600 },
};
