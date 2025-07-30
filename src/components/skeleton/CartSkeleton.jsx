import CartItemSkeleton from './CartItemSkeleton';

export default function CartSkeleton() {
  return (
    <>
      <main id="cart-main" className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items Skeleton */}
            <div id="cart-items" className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200 animate-pulse">
                  <div className="h-8 bg-gray-300 rounded w-48 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-32"></div>
                </div>
                {/* Multiple cart item skeletons */}
                {[...Array(3)].map((_, index) => (
                  <CartItemSkeleton key={index} />
                ))}
              </div>
            </div>
            
            {/* Order Summary Skeleton */}
            <div id="order-summary" className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24 animate-pulse">
                {/* Title skeleton */}
                <div className="h-6 bg-gray-300 rounded w-32 mb-6"></div>
                
                {/* Summary items skeleton */}
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-24"></div>
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-16"></div>
                    <div className="h-4 bg-gray-200 rounded w-12"></div>
                  </div>
                  <div className="flex justify-between">
                    <div className="h-4 bg-gray-200 rounded w-8"></div>
                    <div className="h-4 bg-gray-200 rounded w-14"></div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between">
                    <div className="h-5 bg-gray-300 rounded w-12"></div>
                    <div className="h-5 bg-gray-300 rounded w-20"></div>
                  </div>
                </div>
                
                {/* Buttons skeleton */}
                <div className="space-y-3">
                  <div className="w-full h-12 bg-gray-300 rounded-lg"></div>
                  <div className="w-full h-12 bg-gray-200 rounded-lg"></div>
                </div>
                
                {/* Feature boxes skeleton */}
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-24"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                </div>
                
                <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gray-300 rounded mr-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-28"></div>
                  </div>
                  <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                  <div className="h-3 bg-gray-200 rounded w-4/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
