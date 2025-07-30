export default function HomeProductCardSkeleton() {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition">
      <div className="relative">
        {/* Image Skeleton */}
        <div className="w-full h-48 bg-gray-200 animate-pulse"></div>
        
        {/* Sale Badge Skeleton */}
        <div className="absolute top-2 left-2">
          <div className="bg-gray-300 h-5 w-10 rounded animate-pulse"></div>
        </div>
        
        {/* Heart Icon Skeleton */}
        <div className="absolute top-2 right-2">
          <div className="bg-gray-200 h-6 w-6 rounded-full animate-pulse"></div>
        </div>
      </div>
      
      <div className="p-3">
        {/* Category Skeleton */}
        <div className="h-3 bg-gray-200 rounded w-16 mb-2 animate-pulse"></div>
        
        {/* Title Skeleton */}
        <div className="space-y-1 mb-2">
          <div className="h-4 bg-gray-300 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
        </div>
        
        {/* Rating Skeleton */}
        <div className="flex items-center space-x-1 mb-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-3 w-3 bg-gray-200 rounded animate-pulse"></div>
          ))}
          <div className="h-3 bg-gray-200 rounded w-8 ml-2 animate-pulse"></div>
        </div>
        
        {/* Price Skeleton */}
        <div className="flex items-center space-x-2 mb-3">
          <div className="h-5 bg-gray-300 rounded w-16 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
        </div>
        
        {/* Add to Cart Button Skeleton */}
        <div className="h-8 bg-gray-300 rounded w-full animate-pulse"></div>
      </div>
    </div>
  );
}
