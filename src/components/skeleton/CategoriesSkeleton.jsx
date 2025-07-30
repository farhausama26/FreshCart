export default function CategoriesSkeleton() {
  return (
    <main id="categories-main" className="py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-8 animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>

        {/* Categories Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(9)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition animate-pulse"
            >
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Skeleton */}
        <div className="flex justify-center mt-12">
          <div className="flex space-x-2">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-10 h-10 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}