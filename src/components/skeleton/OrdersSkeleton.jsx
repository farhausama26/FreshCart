export default function OrdersSkeleton() {
  return (
    <>
      <>
        {/* Account Dashboard Skeleton */}
        <section id="account-dashboard">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Main Content Skeleton */}
              <div id="orders-content" className="w-full">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <div className="flex justify-between items-center mb-6">
                    <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex space-x-3">
                      <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                      <div className="h-10 w-40 bg-gray-200 rounded-md animate-pulse"></div>
                    </div>
                  </div>

                  {/* Orders List Skeleton */}
                  <div id="orders-list" className="space-y-4">
                    {[1, 2, 3].map((order) => (
                      <div
                        key={order}
                        className="border border-gray-200 rounded-lg overflow-hidden"
                      >
                        {/* Order Header Skeleton */}
                        <div className="bg-gray-50 p-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200">
                          <div>
                            <div className="flex items-center mb-1">
                              <div className="h-5 w-24 bg-gray-200 rounded animate-pulse mr-2"></div>
                              <div className="h-6 w-16 bg-gray-200 rounded-full animate-pulse"></div>
                            </div>
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
                          </div>
                          <div className="flex space-x-3 mt-3 md:mt-0">
                            <div className="h-8 w-20 bg-gray-200 rounded animate-pulse"></div>
                            <div className="h-8 w-24 bg-gray-200 rounded animate-pulse"></div>
                          </div>
                        </div>

                        {/* Order Content Skeleton */}
                        <div className="p-4">
                          <div className="flex flex-col md:flex-row items-start">
                            {/* Product Images Skeleton */}
                            <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                              <div className="flex space-x-2">
                                {[1, 2, 3].map((img) => (
                                  <div
                                    key={img}
                                    className="w-16 h-16 bg-gray-200 rounded animate-pulse"
                                  ></div>
                                ))}
                                <div className="w-16 h-16 bg-gray-200 rounded animate-pulse"></div>
                              </div>
                            </div>

                            {/* Order Details Skeleton */}
                            <div className="flex-grow md:border-l md:border-r md:px-6">
                              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                                <div className="mb-2 md:mb-0">
                                  <div className="h-3 w-8 bg-gray-200 rounded animate-pulse mb-1"></div>
                                  <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div className="mb-2 md:mb-0">
                                  <div className="h-3 w-20 bg-gray-200 rounded animate-pulse mb-1"></div>
                                  <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                                <div>
                                  <div className="h-3 w-16 bg-gray-200 rounded animate-pulse mb-1"></div>
                                  <div className="h-5 w-20 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                              </div>
                            </div>

                            {/* Action Buttons Skeleton */}
                            <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4">
                              <div className="flex flex-col items-start md:items-end space-y-2">
                                <div className="h-10 w-32 bg-gray-200 rounded-md animate-pulse"></div>
                                <div className="h-10 w-28 bg-gray-200 rounded-md animate-pulse"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Pagination Skeleton */}
                  <div
                    id="pagination"
                    className="mt-8 flex justify-between items-center"
                  >
                    <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                    <div className="flex space-x-1">
                      <div className="w-9 h-9 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-9 h-9 bg-gray-200 rounded animate-pulse"></div>
                      <div className="w-9 h-9 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
