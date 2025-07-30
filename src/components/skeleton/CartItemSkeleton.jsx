
const CartItemSkeleton = () => {
  return (
    <div className="p-6 flex items-center space-x-4 animate-pulse">
      {/* Image skeleton */}
      <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
      
      {/* Content skeleton */}
      <div className="flex-1 space-y-2">
        {/* Title skeleton */}
        <div className="h-5 bg-gray-300 rounded w-3/4"></div>
        {/* Category skeleton */}
        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
        {/* Rating skeleton */}
        <div className="flex items-center mt-2 space-x-2">
          <div className="flex space-x-1">
            {[...Array(5)].map((_, index) => (
              <div key={index} className="w-3 h-3 bg-gray-300 rounded"></div>
            ))}
          </div>
          <div className="h-3 bg-gray-200 rounded w-8"></div>
        </div>
      </div>
      
      {/* Actions skeleton */}
      <div className="flex items-center space-x-3">
        {/* Quantity controls skeleton */}
        <div className="flex items-center border border-gray-200 rounded-lg">
          <div className="w-8 h-8 bg-gray-200 rounded-l-lg"></div>
          <div className="w-12 h-8 bg-gray-100 border-x border-gray-200"></div>
          <div className="w-8 h-8 bg-gray-200 rounded-r-lg"></div>
        </div>
        {/* Price skeleton */}
        <div className="w-28 text-center">
          <div className="h-6 bg-gray-300 rounded w-full"></div>
        </div>
        {/* Delete button skeleton */}
        <div className="w-8 h-8 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default CartItemSkeleton;
