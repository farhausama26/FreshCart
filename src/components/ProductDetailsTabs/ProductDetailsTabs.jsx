import { ProductDetailsTab } from "../../components/ProductDetails/ProductDetailsTab";
import ProductDetailsSkeleton from "../../components/skeleton/ProductDetailsSkeleton";
import { ReviewsTab } from "../../components/ProductDetails/ReviewsTab";
import { ShippingTab } from "../../components/ProductDetails/ShippingTab";
import { useState } from "react";

export default function ProductDetailsTabs({ productInfo }) {
  const [activeTab, setActiveTab] = useState("details");

  const renderTabContent = () => {
    switch (activeTab) {
      case "details":
        return <ProductDetailsTab productDetails={productInfo} />;
      case "reviews":
        return <ReviewsTab />;
      case "shipping":
        return <ShippingTab />;
      default:
        return <ProductDetailsTab />;
    }
  };

  return (
    <>
      <section id="product-details-tabs" className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-6 py-4 font-medium ${
                    activeTab === "details"
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  Product Details
                </button>

                <button
                  onClick={() => setActiveTab("reviews")}
                  className={`px-6 py-4 font-medium ${
                    activeTab === "reviews"
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  Reviews ({productInfo.ratingsQuantity})
                </button>
                <button
                  onClick={() => setActiveTab("shipping")}
                  className={`px-6 py-4 font-medium ${
                    activeTab === "shipping"
                      ? "text-primary-600 border-b-2 border-primary-600"
                      : "text-gray-600 hover:text-primary-600"
                  }`}
                >
                  Shipping & Returns
                </button>
              </div>
            </div>
            <div className="p-6">{renderTabContent()}</div>
          </div>
        </div>
      </section>
    </>
  );
}
