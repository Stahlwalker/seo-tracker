export interface SEOMetrics {
  pageViews: number;
  bounceRate: number;
  avgTimeOnPage: number;
  ranking: number;
}

export interface KeywordData {
  keyword: string;
  volume: number;
  position: number;
  change: number;
}

export interface PageMetrics {
  url: string;
  title: string;
  metrics: SEOMetrics;
}

export interface URLAnalysis {
  title: string;
  description: string;
  headings: {
    h1: number;
    h2: number;
    h3: number;
  };
  wordCount: number;
  loadTime: string;
  metaTags: boolean;
  responsive: boolean;
  keywords: KeywordData[];
  totalKeywords: number;
  organicTraffic: number;
  domainRating: number;
  pages: PageMetrics[];
}