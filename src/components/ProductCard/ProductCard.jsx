import {
  faHeart,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-regular-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProductCard({ product }) {
  // Add null check to handle cases when product is undefined
  if (!product) {
    return null;
  }

  return (
    <>
      <div
        id={`product-card-${product._id}`}
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
      >
        <div className="relative">
          <img
            className="w-full h-48 object-contain"
            src={product.imageCover}
            alt={product.title}
          />
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600">
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">
            {product.category?.name || "Category"}
          </div>
          <h3 className="font-medium mb-1">{product.title}</h3>{" "}
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStarHalfStroke} />
            </div>
            <span className="text-xs text-gray-500">
              {product.ratingsAverage} ({product.ratingsQuantity})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-lg font-bold">${product.price}</span>
              {product.discount > 0 && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                </span>
              )}
            </div>
            <button className="bg-primary-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-700 transition">
              <FontAwesomeIcon icon={faPlus} />
              <span className="sr-only">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
