export default function ProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="relative">
        {/* Image Skeleton */}
        <div className="w-full h-60 bg-gray-200 animate-pulse"></div>
        
        {/* Sale Badge Skeleton */}
        <div className="absolute top-3 left-3">
          <div className="bg-gray-300 h-6 w-12 rounded animate-pulse"></div>
        </div>
        
        {/* Action Buttons Skeleton */}
        <div className="absolute top-3 right-3 flex flex-col space-y-2">
          <div className="bg-gray-200 h-8 w-8 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 h-8 w-8 rounded-full animate-pulse"></div>
          <div className="bg-gray-200 h-8 w-8 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="p-4">
        {/* Category Skeleton */}
        <div className="h-3 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
        
        {/* Title Skeleton */}
        <div className="space-y-1 mb-3">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>
        
        {/* Rating Skeleton */}
        <div className="flex items-center mb-3">
          <div className="flex space-x-1 mr-2">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="h-3 w-3 bg-gray-200 rounded animate-pulse"></div>
            ))}
          </div>
          <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
        </div>
        
        {/* Price and Add Button Section */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <div className="h-5 bg-gray-200 rounded w-16 animate-pulse"></div>
            <div className="h-3 bg-gray-200 rounded w-12 animate-pulse"></div>
          </div>
          <div className="bg-gray-200 h-10 w-10 rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
}
