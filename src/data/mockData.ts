import { KeywordData, PageMetrics } from '../types/seo';
import { subDays } from 'date-fns';

export const keywordData: KeywordData[] = [
  { keyword: "SEO optimization", volume: 12500, position: 3, change: 2 },
  { keyword: "digital marketing", volume: 33000, position: 5, change: -1 },
  { keyword: "content strategy", volume: 8800, position: 2, change: 1 },
  { keyword: "website analytics", volume: 15000, position: 4, change: 3 },
  { keyword: "backlink checker", volume: 6200, position: 1, change: 0 },
];

export const pageMetrics: PageMetrics[] = [
  {
    url: "/blog/seo-guide",
    title: "Complete SEO Guide 2024",
    metrics: {
      pageViews: 2500,
      bounceRate: 35,
      avgTimeOnPage: 245,
      ranking: 1
    }
  },
  {
    url: "/services",
    title: "Our Services",
    metrics: {
      pageViews: 1800,
      bounceRate: 42,
      avgTimeOnPage: 180,
      ranking: 3
    }
  },
  {
    url: "/case-studies",
    title: "Success Stories",
    metrics: {
      pageViews: 1200,
      bounceRate: 38,
      avgTimeOnPage: 320,
      ranking: 2
    }
  }
];