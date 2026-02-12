import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <main className="flex min-h-screen w-full max-w-4xl flex-col items-center justify-center py-16 px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            ONE WORLD 3D
          </h1>
          <p className="text-2xl text-gray-600 dark:text-gray-300 mb-2">
            Feature Implementation Guide
          </p>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Your comprehensive roadmap to building the future of AI-powered 3D production
          </p>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-8 shadow-lg border border-gray-200 dark:border-gray-700 w-full max-w-2xl">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                🎯 What's Inside
              </h2>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                <li className="flex items-start">
                  <span className="mr-2">✅</span>
                  <span>40+ features organized by category and status</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📋</span>
                  <span>Detailed implementation steps for each feature</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🔧</span>
                  <span>API endpoints, database models, and frontend requirements</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">📊</span>
                  <span>Priority levels and phase assignments</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">🎨</span>
                  <span>Clean, simple, and easy-to-navigate interface</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 border-t border-gray-200 dark:border-gray-700">
              <Link
                href="/features"
                className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200"
              >
                View All Features →
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-2xl">
          <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">40+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Total Features</div>
          </div>
          <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 shadow-sm border border-green-200 dark:border-green-800 text-center">
            <div className="text-3xl font-bold text-green-900 dark:text-green-300 mb-1">2</div>
            <div className="text-sm text-green-700 dark:text-green-400">Implemented</div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700 text-center">
            <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">38</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">To Implement</div>
          </div>
        </div>
      </main>
    </div>
  );
}
