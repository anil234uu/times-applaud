// ============================================================================
// TIMES APPLAUD - ADAPTIVE REFRESH PRIORITY ENGINE
// ============================================================================
// Intelligent feed refresh scheduling based on:
// - Tier priority (Critical/High/Medium/Normal)
// - Content frequency analysis
// - Time of day (Indian Standard Time)
// - Feed health & error rates
// - Breaking news detection
// - Special events (sports, elections, markets)
// ============================================================================

export interface FeedStats {
  avgPostsPerHour: number;
  lastNewArticleAt: number;
  failedFetchesLast24h: number;
  totalFetchesLast24h: number;
  lastSuccessfulFetch: number;
  consecutiveFailures: number;
}

export interface FeedConfig {
  id: string;
  url: string;
  category: string;
  tier: 'critical' | 'high' | 'medium' | 'normal';
  baseInterval: number; // in milliseconds
  stats: FeedStats;
}

// ============================================================================
// 2A — REFRESH TIER SYSTEM
// ============================================================================

export const REFRESH_TIERS = {
  critical: {
    name: '🔴 CRITICAL',
    baseInterval: 3 * 60 * 1000, // 3 minutes
    minInterval: 1 * 60 * 1000,  // 1 minute
    maxInterval: 10 * 60 * 1000, // 10 minutes
    description: 'Breaking news, wire services, live scores',
  },
  high: {
    name: '🟠 HIGH',
    baseInterval: 7 * 60 * 1000, // 7 minutes
    minInterval: 3 * 60 * 1000,  // 3 minutes
    maxInterval: 15 * 60 * 1000, // 15 minutes
    description: 'Major publications, top sources',
  },
  medium: {
    name: '🟡 MEDIUM',
    baseInterval: 12 * 60 * 1000, // 12 minutes
    minInterval: 5 * 60 * 1000,   // 5 minutes
    maxInterval: 30 * 60 * 1000,  // 30 minutes
    description: 'Secondary sources, regional publications',
  },
  normal: {
    name: '🟢 NORMAL',
    baseInterval: 30 * 60 * 1000, // 30 minutes
    minInterval: 10 * 60 * 1000,  // 10 minutes
    maxInterval: 60 * 60 * 1000,  // 60 minutes
    description: 'Lifestyle, fashion, long-form content',
  },
};

// ============================================================================
// 2B — ADAPTIVE REFRESH ALGORITHM
// ============================================================================

/**
 * Calculate adaptive refresh interval for a feed
 * Based on content frequency, freshness, error rate, and time factors
 */
export function getAdaptiveInterval(feed: FeedConfig): number {
  const baseInterval = feed.stats?.lastNewArticleAt 
    ? REFRESH_TIERS[feed.tier].baseInterval 
    : feed.baseInterval || REFRESH_TIERS[feed.tier].baseInterval;
  
  const avgPostsPerHour = feed.stats?.avgPostsPerHour || 0;
  const lastNewContentAge = Date.now() - (feed.stats?.lastNewArticleAt || 0);
  const totalFetches = feed.stats?.totalFetchesLast24h || 1; // Avoid division by zero
  const errorRate = (feed.stats?.failedFetchesLast24h || 0) / totalFetches;
  
  const currentHour = new Date().getHours();
  const isIndianPeakHours = currentHour >= 6 && currentHour <= 23; // IST 6 AM - 11 PM
  const isWeekend = [0, 6].includes(new Date().getDay()); // Sunday = 0, Saturday = 6
  
  let multiplier = 1.0;

  // ──────────────────────────────────────────────────────────────────────────
  // HIGH-FREQUENCY SOURCE → Check more often
  // ──────────────────────────────────────────────────────────────────────────
  if (avgPostsPerHour > 5) {
    multiplier *= 0.5; // Double frequency for very active sources
  } else if (avgPostsPerHour > 2) {
    multiplier *= 0.75; // 25% faster for moderately active
  }

  // ──────────────────────────────────────────────────────────────────────────
  // STALE SOURCE → Check less often
  // ──────────────────────────────────────────────────────────────────────────
  const sixHoursMs = 6 * 60 * 60 * 1000;
  const twentyFourHoursMs = 24 * 60 * 60 * 1000;
  
  if (lastNewContentAge > twentyFourHoursMs) {
    multiplier *= 3.0; // Triple interval for 24h+ stale feeds
  } else if (lastNewContentAge > sixHoursMs) {
    multiplier *= 2.0; // Double interval for 6h+ stale feeds
  }

  // ──────────────────────────────────────────────────────────────────────────
  // ERROR-PRONE SOURCE → Back off exponentially
  // ──────────────────────────────────────────────────────────────────────────
  if (errorRate > 0.5) {
    multiplier *= 4.0; // Quadruple interval for 50%+ failure rate
  } else if (errorRate > 0.3) {
    multiplier *= 2.0; // Double interval for 30%+ failure rate
  } else if (errorRate > 0.1) {
    multiplier *= 1.5; // 50% longer for 10%+ failure rate
  }

  // ──────────────────────────────────────────────────────────────────────────
  // OFF-PEAK HOURS → Reduce frequency (midnight to 6 AM)
  // ──────────────────────────────────────────────────────────────────────────
  if (!isIndianPeakHours) {
    multiplier *= 2.0; // Half frequency during night hours
  }

  // ──────────────────────────────────────────────────────────────────────────
  // WEEKENDS → Adjust for business feeds
  // ──────────────────────────────────────────────────────────────────────────
  if (isWeekend && feed.category === 'business') {
    multiplier *= 1.5; // Slower for business on weekends
  }

  // ──────────────────────────────────────────────────────────────────────────
  // BREAKING NEWS MODE → Override everything (4x faster)
  // ──────────────────────────────────────────────────────────────────────────
  if (global.breakingNewsMode) {
    multiplier *= 0.25; // Quarter the interval during breaking news
  }

  // ──────────────────────────────────────────────────────────────────────────
  // EVENT-TRIGGERED BOOSTS
  // ──────────────────────────────────────────────────────────────────────────
  const eventMultiplier = getEventBasedMultiplier(feed);
  multiplier *= eventMultiplier;

  // Calculate final interval
  const interval = baseInterval * multiplier;
  
  // Clamp between tier's min and max
  const tierMin = REFRESH_TIERS[feed.tier].minInterval;
  const tierMax = REFRESH_TIERS[feed.tier].maxInterval;
  
  return Math.max(tierMin, Math.min(interval, tierMax));
}

/**
 * Get multiplier based on special events
 */
function getEventBasedMultiplier(feed: FeedConfig): number {
  const now = new Date();
  const hour = now.getHours();
  const day = now.getDay();
  
  // ──────────────────────────────────────────────────────────────────────────
  // MARKET HOURS (Mon-Fri, 9:15 AM - 3:30 PM IST)
  // Business feeds → 3 min refresh
  // ──────────────────────────────────────────────────────────────────────────
  if (feed.category === 'business' && 
      day >= 1 && day <= 5 && // Monday-Friday
      ((hour === 9 && now.getMinutes() >= 15) || hour > 9) && 
      (hour < 15 || (hour === 15 && now.getMinutes() <= 30))) {
    return 0.43; // ~3 min from 7 min base
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // LIVE SPORTS MODE
  // Cricket/Sports feeds during matches → 2 min refresh
  // ──────────────────────────────────────────────────────────────────────────
  if ((feed.category === 'sports' || feed.id.includes('cric')) && 
      global.liveSportsMode) {
    return 0.29; // ~2 min from 7 min base
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // ELECTION MODE
  // News/Politics feeds → 2 min refresh for 24h
  // ──────────────────────────────────────────────────────────────────────────
  if ((feed.category === 'news' || feed.category === 'politics') && 
      global.electionMode) {
    return 0.2; // ~1-2 min depending on base
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // AWARD SHOW MODE
  // Entertainment feeds → 5 min refresh
  // ──────────────────────────────────────────────────────────────────────────
  if (feed.category === 'entertainment' && global.awardShowMode) {
    return 0.5; // Half interval during award shows
  }
  
  return 1.0; // No event boost
}

// ============================================================================
// 2C — TIME-BASED REFRESH SCHEDULE
// ============================================================================

/**
 * Get time-based behavior modifier
 * Returns recommended behavior for current IST time window
 */
export function getTimeBasedBehavior(): {
  behavior: string;
  description: string;
  globalMultiplier: number;
  reason: string;
} {
  const now = new Date();
  const istHour = (now.getUTCHours() + 5.5) % 24; // Convert to IST
  const istFloor = Math.floor(istHour);
  
  // ──────────────────────────────────────────────────────────────────────────
  // MORNING RUSH (6 AM - 9 AM IST)
  // Maximum frequency - readers checking phones
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 6 && istFloor < 9) {
    return {
      behavior: '🔴 MAXIMUM FREQUENCY',
      description: 'Morning news rush',
      globalMultiplier: 0.7, // 30% faster across all tiers
      reason: 'Peak morning readership, highest engagement',
    };
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // WORK HOURS (9 AM - 12 PM IST)
  // High frequency - steady consumption
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 9 && istFloor < 12) {
    return {
      behavior: '🟠 HIGH FREQUENCY',
      description: 'Work hours browsing',
      globalMultiplier: 0.85, // 15% faster
      reason: 'Steady consumption during work hours',
    };
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // LUNCH BREAK SURGE (12 PM - 2 PM IST)
  // High frequency - lunch break spike
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 12 && istFloor < 14) {
    return {
      behavior: '🟠 HIGH FREQUENCY',
      description: 'Lunch break surge',
      globalMultiplier: 0.75, // 25% faster
      reason: 'Lunch break browsing spike',
    };
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // AFTERNOON LULL (2 PM - 5 PM IST)
  // Medium frequency - reduced activity
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 14 && istFloor < 17) {
    return {
      behavior: '🟡 MEDIUM FREQUENCY',
      description: 'Afternoon lull',
      globalMultiplier: 1.2, // 20% slower
      reason: 'Afternoon productivity peak, lower news consumption',
    };
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // EVENING PEAK (5 PM - 9 PM IST)
  // Maximum frequency - post-work consumption
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 17 && istFloor < 21) {
    return {
      behavior: '🔴 MAXIMUM FREQUENCY',
      description: 'Evening peak hours',
      globalMultiplier: 0.65, // 35% faster
      reason: 'Post-work reading, entertainment peak, highest traffic',
    };
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // NIGHT READING (9 PM - 12 AM IST)
  // Medium frequency - winding down
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 21 && istFloor < 24) {
    return {
      behavior: '🟡 MEDIUM FREQUENCY',
      description: 'Night reading',
      globalMultiplier: 1.3, // 30% slower
      reason: 'Winding down, reduced publishing',
    };
  }
  
  // ──────────────────────────────────────────────────────────────────────────
  // GRAVEYARD SHIFT (12 AM - 6 AM IST)
  // Low frequency - minimal activity
  // ──────────────────────────────────────────────────────────────────────────
  if (istFloor >= 0 && istFloor < 6) {
    return {
      behavior: '🟢 LOW FREQUENCY',
      description: 'Graveyard shift',
      globalMultiplier: 2.5, // 2.5x slower
      reason: 'Minimal readership, minimal publishing, cost optimization',
    };
  }
  
  // Default fallback
  return {
    behavior: '🟡 STANDARD FREQUENCY',
    description: 'Normal operation',
    globalMultiplier: 1.0,
    reason: 'Default behavior',
  };
}

// ============================================================================
// 2D — EVENT-TRIGGERED REFRESH MODES
// ============================================================================

/**
 * Global event modes that override normal refresh behavior
 */
export interface EventMode {
  breakingNewsMode: boolean;
  liveSportsMode: boolean;
  electionMode: boolean;
  awardShowMode: boolean;
  marketHoursMode: boolean;
  viralSpikeMode: boolean;
}

// Global state for event modes
declare global {
  var breakingNewsMode: boolean;
  var liveSportsMode: boolean;
  var electionMode: boolean;
  var awardShowMode: boolean;
  var marketHoursMode: boolean;
  var viralSpikeMode: boolean;
}

// Initialize global modes (default: all false)
global.breakingNewsMode = false;
global.liveSportsMode = false;
global.electionMode = false;
global.awardShowMode = false;
global.marketHoursMode = false;
global.viralSpikeMode = false;

/**
 * Activate breaking news mode
 * All Tier 1 feeds → 1 min refresh for 30 minutes
 */
export function activateBreakingNewsMode(durationMinutes = 30): void {
  global.breakingNewsMode = true;
  
  console.log(`🚨 BREAKING NEWS MODE ACTIVATED for ${durationMinutes} minutes`);
  
  setTimeout(() => {
    global.breakingNewsMode = false;
    console.log('✅ Breaking news mode deactivated');
  }, durationMinutes * 60 * 1000);
}

/**
 * Activate live sports mode
 * Sports feeds → 2 min refresh for match duration
 */
export function activateLiveSportsMode(durationHours = 3): void {
  global.liveSportsMode = true;
  
  console.log(`⚽ LIVE SPORTS MODE ACTIVATED for ${durationHours} hours`);
  
  setTimeout(() => {
    global.liveSportsMode = false;
    console.log('✅ Live sports mode deactivated');
  }, durationHours * 60 * 60 * 1000);
}

/**
 * Activate election mode
 * Politics feeds → 2 min refresh for 24 hours
 */
export function activateElectionMode(durationHours = 24): void {
  global.electionMode = true;
  
  console.log(`🗳️ ELECTION MODE ACTIVATED for ${durationHours} hours`);
  
  setTimeout(() => {
    global.electionMode = false;
    console.log('✅ Election mode deactivated');
  }, durationHours * 60 * 60 * 1000);
}

/**
 * Activate award show mode
 * Entertainment feeds → 5 min refresh
 */
export function activateAwardShowMode(durationHours = 4): void {
  global.awardShowMode = true;
  
  console.log(`🏆 AWARD SHOW MODE ACTIVATED for ${durationHours} hours`);
  
  setTimeout(() => {
    global.awardShowMode = false;
    console.log('✅ Award show mode deactivated');
  }, durationHours * 60 * 60 * 1000);
}

/**
 * Activate market hours mode (auto-managed)
 * Business feeds → 3 min refresh during market hours
 */
export function activateMarketHoursMode(): void {
  global.marketHoursMode = true;
  console.log('📈 MARKET HOURS MODE ACTIVATED');
}

export function deactivateMarketHoursMode(): void {
  global.marketHoursMode = false;
  console.log('✅ Market hours mode deactivated');
}

/**
 * Activate viral spike mode
 * Specific feed source → 3 min refresh
 */
export function activateViralSpikeMode(feedId: string, durationMinutes = 60): void {
  global.viralSpikeMode = true;
  
  console.log(`🔥 VIRAL SPIKE MODE ACTIVATED for feed: ${feedId}`);
  
  setTimeout(() => {
    global.viralSpikeMode = false;
    console.log('✅ Viral spike mode deactivated');
  }, durationMinutes * 60 * 1000);
}

// ============================================================================
// EXPORTED UTILITIES
// ============================================================================

/**
 * Get next refresh time for a feed
 */
export function getNextRefreshTime(feed: FeedConfig): Date {
  const interval = getAdaptiveInterval(feed);
  return new Date(Date.now() + interval);
}

/**
 * Get refresh schedule summary for dashboard
 */
export function getRefreshScheduleSummary(feeds: FeedConfig[]): {
  totalFeeds: number;
  byTier: Record<string, number>;
  nextRefreshes: Array<{ feedId: string; nextRefresh: Date }>;
  currentTimeBehavior: ReturnType<typeof getTimeBasedBehavior>;
} {
  const byTier = {
    critical: 0,
    high: 0,
    medium: 0,
    normal: 0,
  };
  
  const nextRefreshes: Array<{ feedId: string; nextRefresh: Date }> = [];
  
  feeds.forEach(feed => {
    byTier[feed.tier]++;
    nextRefreshes.push({
      feedId: feed.id,
      nextRefresh: getNextRefreshTime(feed),
    });
  });
  
  // Sort by next refresh time
  nextRefreshes.sort((a, b) => a.nextRefresh.getTime() - b.nextRefresh.getTime());
  
  return {
    totalFeeds: feeds.length,
    byTier,
    nextRefreshes: nextRefreshes.slice(0, 10), // Next 10 refreshes
    currentTimeBehavior: getTimeBasedBehavior(),
  };
}

/**
 * Export for use in feed worker
 */
export default {
  REFRESH_TIERS,
  getAdaptiveInterval,
  getTimeBasedBehavior,
  getNextRefreshTime,
  getRefreshScheduleSummary,
  activateBreakingNewsMode,
  activateLiveSportsMode,
  activateElectionMode,
  activateAwardShowMode,
  activateMarketHoursMode,
  deactivateMarketHoursMode,
  activateViralSpikeMode,
};
