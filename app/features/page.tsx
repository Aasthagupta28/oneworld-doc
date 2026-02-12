'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { features, getCategoryLabel, getStatusLabel, getStatusColor, FeatureStatus, FeatureCategory } from '@/lib/features';

export default function FeaturesPage() {
  const [statusFilter, setStatusFilter] = useState<FeatureStatus | 'all'>('all');
  const [categoryFilter, setCategoryFilter] = useState<FeatureCategory | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFeatures = useMemo(() => {
    return features.filter(feature => {
      const matchesStatus = statusFilter === 'all' || feature.status === statusFilter;
      const matchesCategory = categoryFilter === 'all' || feature.category === categoryFilter;
      const matchesSearch = searchQuery === '' || 
        feature.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feature.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesStatus && matchesCategory && matchesSearch;
    });
  }, [statusFilter, categoryFilter, searchQuery]);

  const statusCounts = useMemo(() => {
    const counts = { completed: 0, in_progress: 0, to_implement: 0 };
    features.forEach(f => {
      counts[f.status]++;
    });
    return counts;
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            ONE WORLD 3D
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">
            Feature Implementation Guide
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Features</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{features.length}</div>
            </div>
            <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 shadow-sm border border-green-200 dark:border-green-800">
              <div className="text-sm text-green-700 dark:text-green-400">✅ Implemented</div>
              <div className="text-2xl font-bold text-green-900 dark:text-green-300">{statusCounts.completed}</div>
            </div>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
              <div className="text-sm text-gray-600 dark:text-gray-400">📋 To Implement</div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">{statusCounts.to_implement}</div>
            </div>
          </div>

          {/* Filters */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Search */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Search
                </label>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search features..."
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value as FeatureStatus | 'all')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Status</option>
                  <option value="completed">✅ Implemented</option>
                  <option value="in_progress">🔄 In Progress</option>
                  <option value="to_implement">📋 To Implement</option>
                </select>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Category
                </label>
                <select
                  value={categoryFilter}
                  onChange={(e) => setCategoryFilter(e.target.value as FeatureCategory | 'all')}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="all">All Categories</option>
                  <option value="core">Core Features</option>
                  <option value="strategic_ai_machines">Strategic AI Machines</option>
                  <option value="platform">Platform Features</option>
                  <option value="additional_ai_machines">Additional AI Machines</option>
                  <option value="business_strategy">Business & Strategy</option>
                  <option value="enhanced_platform">Enhanced Platform</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFeatures.map((feature) => (
            <Link
              key={feature.id}
              href={`/features/${feature.id}`}
              className="block"
            >
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-200 h-full flex flex-col">
                {/* Status Badge */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(feature.status)}`}>
                    {getStatusLabel(feature.status)}
                  </span>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                  {feature.title}
                </h2>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {feature.description}
                </p>

                {/* Footer */}
                <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                    <span>{getCategoryLabel(feature.category)}</span>
                    {feature.phase && (
                      <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded">
                        {feature.phase}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredFeatures.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400 text-lg">
              No features found matching your filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
