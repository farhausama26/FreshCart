export default function NavbarSkeleton() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo Skeleton */}
          <div className="h-8 w-32 bg-gray-200 rounded animate-pulse"></div>
          
          {/* Search Bar Skeleton */}
          <div className="hidden md:flex flex-1 max-w-lg mx-8">
            <div className="w-full h-10 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
          
          {/* Navigation Items Skeleton */}
          <div className="flex items-center space-x-6">
            {[...Array(4)].map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}