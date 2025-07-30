export default function ProductInfoSkeleton() {
  return (
    <section id="product-detail" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Product Images Skeleton */}
          <div id="product-images" className="lg:w-80 animate-pulse">
            <div className="space-y-4">
              {/* Main image skeleton */}
              <div className="w-full h-80 bg-gray-300 rounded-lg"></div>
              {/* Thumbnail images skeleton */}
              <div className="flex space-x-2">
                {[...Array(4)].map((_, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 bg-gray-200 rounded"
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info Skeleton */}
          <div id="product-info" className="lg:flex-1">
            <div className="bg-white rounded-lg p-6 animate-pulse">
              {/* Stock status and actions skeleton */}
              <div className="flex justify-between mb-4">
                <div className="h-6 bg-gray-200 rounded w-20"></div>
                <div className="flex space-x-2">
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                </div>
              </div>

              {/* Title skeleton */}
              <div className="h-8 bg-gray-300 rounded w-3/4 mb-2"></div>

              {/* Rating skeleton */}
              <div className="flex items-center mb-4 gap-3">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, index) => (
                    <div
                      key={index}
                      className="w-4 h-4 bg-gray-200 rounded"
                    ></div>
                  ))}
                </div>
                <div className="h-4 bg-gray-200 rounded w-24"></div>
              </div>

              {/* Price skeleton */}
              <div className="flex items-center mb-6">
                <div className="h-9 bg-gray-300 rounded w-24 mr-3"></div>
                <div className="h-6 bg-gray-200 rounded w-16 mr-3"></div>
                <div className="h-6 bg-red-100 rounded w-20"></div>
              </div>

              {/* Description skeleton */}
              <div className="border-t border-gray-200 pt-6 mb-6">
                <div className="space-y-2 mb-6">
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>

              {/* Quantity selector skeleton */}
              <div className="mb-6">
                <div className="flex items-center mb-2">
                  <div className="w-24 h-4 bg-gray-200 rounded mr-4"></div>
                  <div className="flex items-center border border-gray-300 rounded">
                    <div className="w-10 h-10 bg-gray-200"></div>
                    <div className="w-12 h-10 bg-gray-100 border-x border-gray-300"></div>
                    <div className="w-10 h-10 bg-gray-200"></div>
                  </div>
                  <div className="ml-4 h-4 bg-gray-200 rounded w-32"></div>
                </div>
              </div>

              {/* Action buttons skeleton */}
              <div className="flex space-x-4 mb-6">
                <div className="flex-1 h-12 bg-gray-300 rounded-lg"></div>
                <div className="flex-1 h-12 bg-gray-200 rounded-lg"></div>
              </div>

              {/* Features skeleton */}
              <div className="border-t border-gray-200 pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[...Array(2)].map((_, index) => (
                    <div key={index} className="flex items-start">
                      <div className="h-10 w-10 bg-gray-200 rounded-full mr-3"></div>
                      <div className="flex-1">
                        <div className="h-5 bg-gray-200 rounded w-24 mb-1"></div>
                        <div className="h-4 bg-gray-100 rounded w-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}