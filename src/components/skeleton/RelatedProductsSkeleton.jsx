import HomeProductCardSkeleton from './HomeProductCardSkeleton';

export default function RelatedProductsSkeleton() {
  return (
    <section id="related-products" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-6 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-48"></div>
          <div className="flex space-x-2">
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
          </div>
        </div>

        {/* Product grid skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {[...Array(5)].map((_, index) => (
            <HomeProductCardSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}