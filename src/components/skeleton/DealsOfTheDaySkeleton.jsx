import HomeProductCardSkeleton from './HomeProductCardSkeleton';

export default function DealsOfTheDaySkeleton() {
  return (
    <div className="container pb-10">
      <div className="flex justify-between items-center mb-8 animate-pulse">
        <div>
          <div className="h-8 bg-gray-300 rounded w-48 mb-2"></div>
          <div className="mt-2 flex gap-3 items-center">
            <div className="h-4 bg-gray-200 rounded w-24"></div>
            <div className="flex gap-2 items-center">
              <div className="bg-gray-200 text-white px-3 py-1 rounded-md text-sm font-medium w-12 h-8"></div>
              <div className="bg-gray-200 text-white px-3 py-1 rounded-md text-sm font-medium w-12 h-8"></div>
              <div className="bg-gray-200 text-white px-3 py-1 rounded-md text-sm font-medium w-12 h-8"></div>
            </div>
          </div>
        </div>
        <div className="h-10 w-24 bg-gray-300 rounded-lg"></div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {[...Array(5)].map((_, index) => (
          <HomeProductCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
