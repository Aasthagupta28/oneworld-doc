import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Feature Not Found
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          The feature you're looking for doesn't exist.
        </p>
        <Link
          href="/features"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
        >
          Back to Features
        </Link>
      </div>
    </div>
  );
}
