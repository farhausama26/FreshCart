import { useContext, useState, useEffect } from "react";
import { ProductsContext } from "../../context/Products.context";
import { DealsOfTheDaySkeleton } from "../skeleton";
import { HomeProductCard } from "../ProductCard";
import { calculateTimeLeft } from "../../utils/countdown-utils";

export default function DealsOfTheDay() {
  const { isLoading, products, isError } = useContext(ProductsContext);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const newTimeLeft = calculateTimeLeft();
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  if (isLoading || !products) {
    return <DealsOfTheDaySkeleton />;
  }

  if (isError) {
    return (
      <div className="container py-10 text-red-500">
        Error loading deals. Please try again later.
      </div>
    );
  }

  const deals = products
    .filter((product) => product.priceAfterDiscount > 0)
    .slice(0, 5);

  return (
    <>
      <div className="container pb-10">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-2xl font-bold">Deals of the Day</h2>
            <div className="mt-2 flex gap-3 items-center">
              <p>Offers ends in:</p>
              <div className="flex gap-2 items-center">
                <div className="bg-gray-900 flex items-center justify-center size-8 text-white rounded-md text-lg font-mono">
                  {String(timeLeft.hours).padStart(2, "0")}
                </div>
                <span>:</span>
                <div className="bg-gray-900 flex items-center justify-center size-8 text-white rounded-md text-lg font-mono">
                  {String(timeLeft.minutes).padStart(2, "0")}
                </div>
                <span>:</span>
                <div className="bg-gray-900 flex items-center justify-center size-8 text-white rounded-md text-lg font-mono">
                  {String(timeLeft.seconds).padStart(2, "0")}
                </div>
              </div>
            </div>
          </div>
          <span className="text-primary-600 hover:text-primary-700 font-medium flex items-center cursor-pointer">
            View All Deals <i className="fa-solid fa-arrow-right ml-2"></i>
          </span>
        </div>

        {deals.length > 0 ? (
          <div className="grid grid-cols-5 gap-4">
            {deals.map((product) => (
              <HomeProductCard key={product.id} productDetails={product} />
            ))}
          </div>
        ) : (
          <div>
            <p>No active deals at the moment. Check back soon!</p>
          </div>
        )}
      </div>
    </>
  );
}
