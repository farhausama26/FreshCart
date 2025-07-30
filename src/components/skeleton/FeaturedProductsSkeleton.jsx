import HomeProductCardSkeleton from './HomeProductCardSkeleton';

export default function FeaturedProductsSkeleton() {
  return (
    <div className="container py-8">
      <div className="animate-pulse mb-5">
        <div className="h-8 bg-gray-300 rounded w-56"></div>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(10)].map((_, index) => (
          <HomeProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
