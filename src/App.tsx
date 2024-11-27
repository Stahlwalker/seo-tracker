import React, { useState } from 'react';
import { BarChart3, Search, Users, Globe } from 'lucide-react';
import { DashboardCard } from './components/DashboardCard';
import { KeywordTable } from './components/KeywordTable';
import { PagePerformance } from './components/PagePerformance';
import { URLAnalyzer } from './components/URLAnalyzer';
import { URLAnalysis } from './types/seo';

function App() {
  const [analysisData, setAnalysisData] = useState<URLAnalysis | null>(null);

  const handleAnalysisComplete = (data: URLAnalysis) => {
    setAnalysisData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <BarChart3 className="w-8 h-8 text-indigo-600" />
              <span className="ml-2 text-xl font-semibold">SEO Tracker</span>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <DashboardCard
            title="Total Keywords"
            value={analysisData?.totalKeywords || '-'}
            icon={<Search className="w-5 h-5" />}
            trend={{ value: 12, isPositive: true }}
          />
          <DashboardCard
            title="Organic Traffic"
            value={analysisData?.organicTraffic.toLocaleString() || '-'}
            icon={<Users className="w-5 h-5" />}
            trend={{ value: 8, isPositive: true }}
          />
          <DashboardCard
            title="Domain Rating"
            value={analysisData?.domainRating || '-'}
            icon={<Globe className="w-5 h-5" />}
            trend={{ value: 3, isPositive: true }}
          />
        </div>

        <URLAnalyzer onAnalysisComplete={handleAnalysisComplete} />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <KeywordTable keywords={analysisData?.keywords || []} />
          <PagePerformance pages={analysisData?.pages || []} />
        </div>
      </main>
    </div>
  );
}

export default App;