import React, { useState } from 'react';
import { Search, AlertCircle } from 'lucide-react';
import { URLAnalysis } from '../types/seo';
import { analyzeURL } from '../utils/urlAnalyzer';

interface URLAnalyzerProps {
  onAnalysisComplete: (analysis: URLAnalysis) => void;
}

export const URLAnalyzer: React.FC<URLAnalyzerProps> = ({ onAnalysisComplete }) => {
  const [url, setUrl] = useState('');
  const [analysis, setAnalysis] = useState<URLAnalysis | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalysis = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const result = await analyzeURL(url);
      setAnalysis(result);
      onAnalysisComplete(result);
    } catch (err) {
      setError('Failed to analyze URL. Please check the URL and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
      <h2 className="text-lg font-semibold mb-4">URL Analyzer</h2>
      
      <form onSubmit={handleAnalysis} className="mb-6">
        <div className="flex gap-4">
          <div className="flex-1">
            <input
              type="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              placeholder="Enter URL to analyze (e.g., https://example.com)"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50"
          >
            {loading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Analyzing...
              </span>
            ) : (
              <span className="flex items-center">
                <Search className="w-4 h-4 mr-2" />
                Analyze
              </span>
            )}
          </button>
        </div>
      </form>

      {error && (
        <div className="mb-6 p-4 bg-red-50 rounded-lg flex items-start">
          <AlertCircle className="w-5 h-5 text-red-500 mr-2 flex-shrink-0 mt-0.5" />
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {analysis && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Page Title</h3>
              <p className="text-gray-600">{analysis.title}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Meta Description</h3>
              <p className="text-gray-600">{analysis.description}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium text-gray-900 mb-2">Content Stats</h3>
              <ul className="text-gray-600">
                <li>Words: {analysis.wordCount}</li>
                <li>H1 Tags: {analysis.headings.h1}</li>
                <li>H2 Tags: {analysis.headings.h2}</li>
                <li>H3 Tags: {analysis.headings.h3}</li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-medium text-gray-900 mb-2">Load Time</h3>
              <p className="text-gray-600">{analysis.loadTime}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-medium text-gray-900 mb-2">Meta Tags</h3>
              <p className="text-gray-600">{analysis.metaTags ? '✓ Present' : '✗ Missing'}</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg text-center">
              <h3 className="font-medium text-gray-900 mb-2">Mobile Friendly</h3>
              <p className="text-gray-600">{analysis.responsive ? '✓ Yes' : '✗ No'}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};