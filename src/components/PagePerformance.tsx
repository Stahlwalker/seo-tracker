import React from 'react';
import { PageMetrics } from '../types/seo';
import { Clock, Eye, MousePointerClick } from 'lucide-react';

interface PagePerformanceProps {
  pages: PageMetrics[];
}

export const PagePerformance: React.FC<PagePerformanceProps> = ({ pages }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-100">
        <h2 className="text-lg font-semibold">Page Performance</h2>
      </div>
      <div className="divide-y divide-gray-100">
        {pages.map((page, index) => (
          <div key={index} className="p-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{page.title}</h3>
              <span className="text-sm text-gray-500">Rank #{page.metrics.ranking}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{page.url}</p>
            <div className="grid grid-cols-3 gap-4">
              <div className="flex items-center">
                <Eye className="w-4 h-4 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Page Views</p>
                  <p className="font-medium">{page.metrics.pageViews}</p>
                </div>
              </div>
              <div className="flex items-center">
                <MousePointerClick className="w-4 h-4 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Bounce Rate</p>
                  <p className="font-medium">{page.metrics.bounceRate}%</p>
                </div>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 text-gray-400 mr-2" />
                <div>
                  <p className="text-sm text-gray-500">Avg. Time</p>
                  <p className="font-medium">{Math.round(page.metrics.avgTimeOnPage / 60)}m</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};