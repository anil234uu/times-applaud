// RSS Feed URLs for different categories from Google News and other sources

export const rssFeedUrls = {
  // Google News RSS Feeds (India)
  google: {
    topStories: 'https://news.google.com/rss?hl=en-IN&gl=IN&ceid=IN:en',
    india: 'https://news.google.com/rss/search?q=india&hl=en-IN&gl=IN&ceid=IN:en',
    world: 'https://news.google.com/rss/search?q=world+news&hl=en-IN&gl=IN&ceid=IN:en',
    business: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFZ4ZDNRU0FtVnVHZ0pWVXlnQVAB?hl=en-IN&gl=IN&ceid=IN:en',
    technology: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFp0Y1RjU0FtVnVHZ0pWVXlnQVAB?hl=en-IN&gl=IN&ceid=IN:en',
    entertainment: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRE5zYXk0U0FtVnVHZ0pWVXlnQVAB?hl=en-IN&gl=IN&ceid=IN:en',
    sports: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRFQzTWFvU0FtVnVHZ0pWVXlnQVAB?hl=en-IN&gl=IN&ceid=IN:en',
    science: 'https://news.google.com/rss/topics/CAAqJggKIiBDQkFTRWdvSUwyMHZNRE56YkdZU0FtVnVHZ0pWVXlnQVAB?hl=en-IN&gl=IN&ceid=IN:en',
    health: 'https://news.google.com/rss/search?q=health+news&hl=en-IN&gl=IN&ceid=IN:en',
  },

  // Times of India RSS
  timesOfIndia: {
    topStories: 'https://timesofindia.indiatimes.com/rssfeedstopstories.cms',
    india: 'https://timesofindia.indiatimes.com/rssfeeds/1221656.cms',
    business: 'https://timesofindia.indiatimes.com/rssfeeds/1898055.cms',
    sports: 'https://timesofindia.indiatimes.com/rssfeeds/4719148.cms',
    entertainment: 'https://timesofindia.indiatimes.com/rssfeeds/1081479906.cms',
    technology: 'https://timesofindia.indiatimes.com/rssfeeds/66949542.cms',
    world: 'https://timesofindia.indiatimes.com/rssfeeds/1483612.cms',
  },

  // Hindustan Times RSS
  hindustanTimes: {
    topStories: 'https://www.hindustantimes.com/feeds/rss/top-news/rssfeed.xml',
    india: 'https://www.hindustantimes.com/feeds/rss/india-news/rssfeed.xml',
    world: 'https://www.hindustantimes.com/feeds/rss/world-news/rssfeed.xml',
    sports: 'https://www.hindustantimes.com/feeds/rss/sports/rssfeed.xml',
    entertainment: 'https://www.hindustantimes.com/feeds/rss/entertainment/rssfeed.xml',
    technology: 'https://www.hindustantimes.com/feeds/rss/technology/rssfeed.xml',
  },

  // Indian Express RSS
  indianExpress: {
    topStories: 'https://indianexpress.com/feed/',
    india: 'https://indianexpress.com/section/india/feed/',
    world: 'https://indianexpress.com/section/world/feed/',
    sports: 'https://indianexpress.com/section/sports/feed/',
    entertainment: 'https://indianexpress.com/section/entertainment/feed/',
    technology: 'https://indianexpress.com/section/technology/feed/',
  },

  // ESPN Cricinfo (Cricket)
  cricket: 'https://www.espncricinfo.com/ci/engine/rss/guide.html',

  // NDTV RSS
  ndtv: {
    topStories: 'https://profit.ndtv.com/news/rss',
    india: 'https://www.ndtv.com/rss/india',
    world: 'https://www.ndtv.com/rss/world',
    sports: 'https://sports.ndtv.com/rss',
    entertainment: 'https://movies.ndtv.com/rss',
  },
};

// Category to Feed mapping
export const categoryToFeed: Record<string, string[]> = {
  news: [rssFeedUrls.google.topStories, rssFeedUrls.timesOfIndia.india],
  entertainment: [rssFeedUrls.google.entertainment, rssFeedUrls.timesOfIndia.entertainment],
  sports: [rssFeedUrls.google.sports, rssFeedUrls.timesOfIndia.sports, rssFeedUrls.cricket],
  technology: [rssFeedUrls.google.technology, rssFeedUrls.timesOfIndia.technology],
  travel: [rssFeedUrls.google.topStories], // Limited travel-specific RSS
  lifestyle: [rssFeedUrls.google.health, rssFeedUrls.google.entertainment],
  health: [rssFeedUrls.google.health],
  fashion: [rssFeedUrls.google.entertainment],
  business: [rssFeedUrls.google.business, rssFeedUrls.timesOfIndia.business],
  world: [rssFeedUrls.google.world, rssFeedUrls.timesOfIndia.world],
};
