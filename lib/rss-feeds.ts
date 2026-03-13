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
  // 1E — BUSINESS CATEGORY (🔴 Critical for Markets)
  // ==========================================================================
  business: {
    // Hero + Markets (Critical)
    economicTimes: 'https://economictimes.indiatimes.com/rssfeedstopstories.cms',
    moneycontrol: 'https://www.moneycontrol.com/rss/latestnews.xml',
    cnbcTV18: 'https://www.cnbctv18.com/commonfeeds/v1/cne/rss/topstories.xml',
    
    // Business Spotlight (High)
    liveMint: 'https://www.livemint.com/rss/news',
    businessStandard: 'https://www.business-standard.com/rss/home_page_top_stories.rss',
    
    // Startup & Tech Business (Medium)
    inc42: 'https://inc42.com/feed/',
    yourStory: 'https://yourstory.com/feed',
  },

  // ==========================================================================
  // 1F — LIFESTYLE / FASHION CATEGORY
  // ==========================================================================
  lifestyle: {
    // Fashion (Normal Priority)
    vogueIndia: 'https://www.vogue.in/rss',
    elleIndia: 'https://elle.in/feed/',
    gqIndia: 'https://www.gqindia.com/rss',
    
    // Lifestyle & Design
    architecturalDigest: 'https://www.architecturaldigest.in/rss',
    
    // Food
    ndtvFood: 'https://feeds.feedburner.com/ndtvcooks-latest',
    
    // Travel Cross-post
    condeNastTraveller: 'https://www.cntraveller.in/rss',
    
    // Health & Fitness
    health: [
      'https://www.ndtv.com/health/rss',
      'https://timesofindia.indiatimes.com/life-style/health-fitness/rssfeeds/1708379.cms',
    ],
    fitness: [
      'https://www.healthshots.com/feed/',
    ],
  },

  // ==========================================================================
  // 1G — HEALTH CATEGORY
  // ==========================================================================
  health: {
    // Health Spotlight (Normal Priority)
    healthline: 'https://www.healthline.com/rss',
    webMD: 'https://rssfeeds.webmd.com/rss/rss.aspx?RSSFeed=RSS_Public',
    medicalNewsToday: 'https://www.medicalnewstoday.com/rss',
    
    // Indian Sources (Medium)
    ndtvHealth: 'https://feeds.feedburner.com/ndtvhealth-latest',
    timesOfIndiaHealth: 'https://timesofindia.indiatimes.com/rss/healthfeed.cms',
  },

  // ==========================================================================
  // 1H — TRAVEL CATEGORY
  // ==========================================================================
  travel: {
    // Travel Hero (Normal Priority)
    nationalGeographic: 'https://www.nationalgeographic.com/travel/rss',
    lonelyPlanet: 'https://www.lonelyplanet.com/news/feed',
    
    // Domestic & Adventure
    travelLeisureIndia: 'https://travelandleisureindia.in/feed/',
    ndtvTravel: 'https://feeds.feedburner.com/ndtvtravel',
    tripoto: 'https://www.tripoto.com/feed',
    
    // International
    condeNastTraveler: 'https://www.cntraveler.com/feed/rss',
    travelLeisure: 'https://www.travelandleisure.com/rss',
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
  health: [
    ...rssFeedUrls.health ? [
      rssFeedUrls.health.healthline,
      rssFeedUrls.health.webMD,
      rssFeedUrls.health.medicalNewsToday,
    ] : [],
    ...rssFeedUrls.lifestyle.health,
  ],
  
  // Fashion
  fashion: [
    rssFeedUrls.lifestyle.vogueIndia,
    rssFeedUrls.lifestyle.elleIndia,
  ],
  
  // Travel
  travel: [
    rssFeedUrls.travel.nationalGeographic,
    rssFeedUrls.travel.lonelyPlanet,
    rssFeedUrls.travel.condeNastTraveler,
    rssFeedUrls.travel.travelLeisure,
  ],
  
  // Business
  business: [
    rssFeedUrls.business.economicTimes,
    rssFeedUrls.business.moneycontrol,
    rssFeedUrls.business.cnbcTV18,
    rssFeedUrls.business.liveMint,
    rssFeedUrls.business.businessStandard,
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
  
  // Business feeds
  [rssFeedUrls.business.economicTimes]: { name: 'Economic Times', priority: 'critical', refreshInterval: 300 },
  [rssFeedUrls.business.moneycontrol]: { name: 'Moneycontrol', priority: 'critical', refreshInterval: 300 },
  [rssFeedUrls.business.cnbcTV18]: { name: 'CNBC TV18', priority: 'critical', refreshInterval: 300 },
  [rssFeedUrls.business.liveMint]: { name: 'LiveMint', priority: 'high', refreshInterval: 600 },
  [rssFeedUrls.business.businessStandard]: { name: 'Business Standard', priority: 'high', refreshInterval: 600 },
  
  // Lifestyle & Fashion feeds
  [rssFeedUrls.lifestyle.vogueIndia]: { name: 'Vogue India', priority: 'normal', refreshInterval: 1800 }, // 30 min
  [rssFeedUrls.lifestyle.elleIndia]: { name: 'Elle India', priority: 'normal', refreshInterval: 1800 },
  [rssFeedUrls.lifestyle.ndtvFood]: { name: 'NDTV Food', priority: 'normal', refreshInterval: 1800 },
  
  // Health feeds
  [rssFeedUrls.health.healthline]: { name: 'Healthline', priority: 'normal', refreshInterval: 1800 },
  [rssFeedUrls.health.webMD]: { name: 'WebMD', priority: 'normal', refreshInterval: 1800 },
  [rssFeedUrls.health.medicalNewsToday]: { name: 'Medical News Today', priority: 'normal', refreshInterval: 1800 },
  [rssFeedUrls.health.ndtvHealth]: { name: 'NDTV Health', priority: 'medium', refreshInterval: 900 }, // 15 min
  
  // Travel feeds
  [rssFeedUrls.travel.nationalGeographic]: { name: 'National Geographic Travel', priority: 'normal', refreshInterval: 3600 }, // 60 min
  [rssFeedUrls.travel.lonelyPlanet]: { name: 'Lonely Planet', priority: 'normal', refreshInterval: 3600 },
  [rssFeedUrls.travel.travelLeisureIndia]: { name: 'Travel + Leisure India', priority: 'normal', refreshInterval: 3600 },
};
