export default function BrandsSkeleton() {
  return (
    <main id="brands-main" className="py-8">
      <div className="container mx-auto px-4">
        {/* Header Skeleton */}
        <div className="text-center mb-8 animate-pulse">
          <div className="h-10 bg-gray-300 rounded w-48 mx-auto mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
        </div>

        {/* Brands Grid Skeleton */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {[...Array(12)].map((_, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition animate-pulse"
            >
              <div className="aspect-square bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-5 bg-gray-200 rounded w-3/4 mx-auto"></div>
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