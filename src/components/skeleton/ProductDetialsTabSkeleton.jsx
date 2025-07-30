export default function ProductDetailsTabSkeleton() {
  return (
    <div id="product-description" className="animate-pulse">
      {/* Title skeleton */}
      <div className="h-6 bg-gray-300 rounded w-48 mb-4"></div>

      {/* Description skeleton */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Benefits section skeleton */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-20 mb-2"></div>
          <div className="pl-5 space-y-1">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="flex items-center">
                <div className="w-2 h-2 bg-gray-300 rounded-full mr-3"></div>
                <div className="h-3 bg-gray-200 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details section skeleton */}
        <div>
          <div className="h-5 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="space-y-2">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex">
                <div className="w-32 h-4 bg-gray-300 rounded mr-2"></div>
                <div className="h-4 bg-gray-200 rounded flex-1"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How to Store section skeleton */}
      <div className="h-5 bg-gray-300 rounded w-28 mb-3"></div>
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-4/5"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>

      {/* Certifications section skeleton */}
      <div className="h-5 bg-gray-300 rounded w-28 mb-3"></div>
      <div className="flex space-x-4 mb-4">
        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="flex items-center p-2 border border-gray-200 rounded"
          >
            <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
            <div className="h-4 bg-gray-200 rounded w-20"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
