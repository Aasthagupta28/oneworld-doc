import { notFound } from 'next/navigation';
import Link from 'next/link';
import { getFeatureById, getStatusLabel, getStatusColor, getCategoryLabel, features } from '@/lib/features';
import { getFeatureDetails } from '@/lib/featureDetails';

export async function generateStaticParams() {
  return features.map((feature) => ({
    id: feature.id,
  }));
}

export default async function FeatureDetailPage({ 
  params 
}: { 
  params: Promise<{ id: string }>
}) {
  // In Next.js 16, params is always a Promise - await it first
  const paramsResolved = await params;
  const id = paramsResolved.id;
  
  const feature = getFeatureById(id);
  
  if (!feature) {
    notFound();
  }
  
  const details = getFeatureDetails(id);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Back Button */}
        <Link
          href="/features"
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 mb-6 transition-colors"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Features
        </Link>

        {/* Header Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-3">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(feature.status)}`}>
                  {getStatusLabel(feature.status)}
                </span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {getCategoryLabel(feature.category)}
                </span>
                {feature.phase && (
                  <span className="bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2 py-1 rounded text-xs">
                    {feature.phase}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        </div>

        {/* What It Does */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            What It Does
          </h2>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {feature.whatItDoes}
          </p>
        </div>

        {/* Implementation Steps */}
        {details?.implementationSteps && details.implementationSteps.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Implementation Steps
            </h2>
            <div className="space-y-6">
              {details.implementationSteps.map((step, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    Step {index + 1}: {step.step}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    {step.description}
                  </p>
                  {step.code && (
                    <pre className="bg-gray-100 dark:bg-gray-900 rounded-lg p-4 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto mb-3">
                      <code>{step.code}</code>
                    </pre>
                  )}
                  {step.checklist && step.checklist.length > 0 && (
                    <div className="mt-3">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Checklist:
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                        {step.checklist.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Database Models */}
        {details?.databaseModels && details.databaseModels.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Database Models
            </h2>
            <div className="space-y-4">
              {details.databaseModels.map((model, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    {model.name}
                  </h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    {model.fields.map((field, idx) => (
                      <li key={idx}>{field}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* API Endpoints */}
        {details?.apiEndpoints && details.apiEndpoints.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              API Endpoints
            </h2>
            <div className="space-y-3">
              {details.apiEndpoints.map((endpoint, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-2 py-1 rounded text-xs font-mono font-semibold ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                      endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300' :
                      'bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300'
                    }`}>
                      {endpoint.method}
                    </span>
                    <code className="text-sm font-mono text-gray-800 dark:text-gray-200">
                      {endpoint.path}
                    </code>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {endpoint.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Frontend Pages */}
        {details?.frontendPages && details.frontendPages.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Frontend Pages
            </h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
              {details.frontendPages.map((page, index) => (
                <li key={index}>{page}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Notes */}
        {details?.notes && details.notes.length > 0 && (
          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 shadow-sm border border-blue-200 dark:border-blue-800 mb-6">
            <h2 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-4">
              Important Notes
            </h2>
            <ul className="list-disc list-inside space-y-2 text-blue-800 dark:text-blue-200">
              {details.notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Priority & Phase Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {feature.priority && (
              <div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Priority:</span>
                <span className="ml-2 text-gray-900 dark:text-white font-semibold">#{feature.priority}</span>
              </div>
            )}
            {feature.phase && (
              <div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">Phase:</span>
                <span className="ml-2 text-gray-900 dark:text-white font-semibold">{feature.phase}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
