import HomeProductCardSkeleton from './HomeProductCardSkeleton';

export default function HomeCategoriesSkeleton() {
  return (
    <section id="categories" className="py-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8 animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-48"></div>
          <div className="flex items-center">
            <div className="h-4 bg-gray-200 rounded w-32 mr-2"></div>
            <div className="h-4 w-4 bg-gray-200 rounded"></div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[...Array(6)].map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-4 text-center shadow-sm animate-pulse"
            >
              <div className="h-20 w-20 bg-gray-200 rounded-full mx-auto mb-3"></div>
              <div className="h-4 bg-gray-300 rounded w-16 mx-auto mb-1"></div>
              <div className="h-3 bg-gray-200 rounded w-12 mx-auto"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
