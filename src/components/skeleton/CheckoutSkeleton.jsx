export default function CheckoutSkeleton() {
  return (
    <>
      <section id="checkout-process" className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <div className="w-full max-w-6xl">
              <div className="flex items-center justify-between mb-6">
                <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
                <div className="flex items-center text-sm space-x-6">
                  {[1, 2, 3, 4].map((step) => (
                    <div key={step} className="flex items-center">
                      <div className="h-6 w-6 bg-gray-200 rounded-full animate-pulse mr-2"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Payment Section Skeleton */}
                <div id="payment-section" className="lg:col-span-2">
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mb-6"></div>
                    
                    {/* Payment Options Skeleton */}
                    <div className="space-y-4">
                      {/* Payment Option 1 */}
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse mt-1"></div>
                          <div className="ml-4 flex-grow">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse mr-3"></div>
                                <div>
                                  <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                                  <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                              </div>
                              <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Payment Option 2 */}
                      <div className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-start">
                          <div className="h-4 w-4 bg-gray-200 rounded-full animate-pulse mt-1"></div>
                          <div className="ml-4 flex-grow">
                            <div className="flex items-center justify-between">
                              <div className="flex items-center">
                                <div className="h-8 w-8 bg-gray-200 rounded animate-pulse mr-3"></div>
                                <div>
                                  <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-2"></div>
                                  <div className="h-4 w-52 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                              </div>
                              <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                            </div>
                            <div className="mt-4 pl-11">
                              <div className="bg-gray-50 border border-gray-200 rounded-md p-3">
                                <div className="flex items-center">
                                  <div className="h-4 w-4 bg-gray-200 rounded animate-pulse mr-2"></div>
                                  <div className="h-4 w-64 bg-gray-200 rounded animate-pulse"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address Skeleton */}
                  <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                    <div className="h-6 w-36 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-20 w-full bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div>
                        <div className="h-4 w-28 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div>
                        <div className="h-4 w-16 bg-gray-200 rounded animate-pulse mb-2"></div>
                        <div className="h-12 w-full bg-gray-200 rounded animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Order Summary Skeleton */}
                <div id="order-total" className="lg:col-span-1">
                  <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                    <div className="h-6 w-32 bg-gray-200 rounded animate-pulse mb-4"></div>
                    
                    {/* Order Items Skeleton */}
                    <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-md animate-pulse"></div>
                          <div className="flex-grow">
                            <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-1"></div>
                            <div className="h-3 w-16 bg-gray-200 rounded animate-pulse"></div>
                          </div>
                          <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      ))}
                    </div>

                    {/* Order Totals Skeleton */}
                    <div className="space-y-3 mb-6 border-t pt-4">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex justify-between">
                          <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      ))}
                      <div className="border-t border-gray-200 pt-3 mt-3">
                        <div className="flex justify-between">
                          <div className="h-5 w-12 bg-gray-200 rounded animate-pulse"></div>
                          <div className="h-5 w-16 bg-gray-200 rounded animate-pulse"></div>
                        </div>
                      </div>
                    </div>

                    {/* Buttons Skeleton */}
                    <div className="space-y-4">
                      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                      <div className="w-full h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                    </div>

                    {/* Security Info Skeleton */}
                    <div className="mt-6">
                      <div className="h-5 w-28 bg-gray-200 rounded animate-pulse mb-2"></div>
                      <div className="flex items-center mb-4">
                        <div className="h-4 w-4 bg-gray-200 rounded animate-pulse mr-2"></div>
                        <div className="h-4 w-48 bg-gray-200 rounded animate-pulse"></div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {[1, 2, 3, 4, 5].map((icon) => (
                          <div key={icon} className="h-8 w-8 bg-gray-200 rounded animate-pulse"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
