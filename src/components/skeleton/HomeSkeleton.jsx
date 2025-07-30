import HomeProductCardSkeleton from './HomeProductCardSkeleton';

export default function HomeSkeleton() {
  return (
    <main id="home-main">
      {/* Hero Section Skeleton */}
      <section id="hero" className="bg-gradient-to-r from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 animate-pulse">
              <div className="h-12 bg-gray-300 rounded w-3/4 mb-6"></div>
              <div className="space-y-3 mb-8">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/5"></div>
              </div>
              <div className="flex space-x-4">
                <div className="h-12 w-32 bg-gray-300 rounded-lg"></div>
                <div className="h-12 w-28 bg-gray-200 rounded-lg"></div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="h-96 bg-gray-200 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories Skeleton */}
      <section id="featured-categories" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-pulse">
            <div className="h-8 bg-gray-300 rounded w-64 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="text-center animate-pulse">
                <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-16 mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Skeleton */}
      <section id="featured-products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-300 rounded w-48 mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-32"></div>
            </div>
            <div className="h-10 w-24 bg-gray-200 rounded animate-pulse"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {[...Array(10)].map((_, index) => (
              <HomeProductCardSkeleton key={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}