export default function AuthSkeleton() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center animate-pulse">
        <div className="h-16 w-16 bg-gray-300 rounded-full mx-auto mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-32 mx-auto mb-2"></div>
        <div className="h-3 bg-gray-200 rounded w-24 mx-auto"></div>
      </div>
    </div>
  );
}
