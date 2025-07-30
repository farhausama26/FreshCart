import { faEye, faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowsRotate,
  faPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { calcDiscount } from "../../utils/discount-utils";
import { Rating } from "../Rating";
import { useNavigate } from "react-router";
import { useContext } from "react";
import { CartContext } from "../../context/Cart.context";

export default function HomeProductCard({ productDetails }) {
  const { addToCart } = useContext(CartContext);
  

  const {
    imageCover,
    title,
    price,
    priceAfterDiscount,
    category,
    ratingsQuantity,
    ratingsAverage,
    id,
    slug,
  } = productDetails;
  const isOnSale = priceAfterDiscount < price;
  const discount = isOnSale ? calcDiscount({ price, priceAfterDiscount }) : 0;
  const navigate = useNavigate();

  return (
    <>
      <div
        id="product-card"
        className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition"
      >
        <div className="relative">
          <img
            className="w-full h-60 object-contain bg-white"
            src={imageCover}
            alt={title}
          />
          {isOnSale && (
            <div className="absolute top-3 left-3">
              <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
                -{discount}%
              </span>
            </div>
          )}
          <div className="absolute top-3 right-3 flex flex-col space-y-2">
            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600">
              <FontAwesomeIcon icon={faHeart} />
            </button>
            <button className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600">
              <FontAwesomeIcon icon={faArrowsRotate} />
            </button>
            <button
              onClick={() => {
                navigate(`/product/${id}`);
              }}
              className="bg-white h-8 w-8 rounded-full flex items-center justify-center text-gray-600 hover:text-primary-600"
            >
              <FontAwesomeIcon icon={faEye} />
            </button>
          </div>
        </div>
        <div className="p-4">
          <div className="text-xs text-gray-500 mb-1">{category.name}</div>
          <h3
            className="font-medium mb-1 line-clamp-2 cursor-pointer "
            onClick={() => {
              navigate(`/product/${id}`);
            }}
          >
            {title}
          </h3>
          <div className="flex items-center mb-2">
            <div className="flex text-amber-400 mr-2">
              <Rating rating={ratingsAverage} />
            </div>
            <span className="text-xs text-gray-500">
              {ratingsAverage} ({ratingsQuantity})
            </span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              {isOnSale ? (
                <>
                  <span className="text-lg font-bold text-primary-600">
                    {priceAfterDiscount} EGP
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {price} EGP
                  </span>
                </>
              ) : (
                <span className="text-lg font-bold text-gray-800">
                  {price} EGP
                </span>
              )}
            </div>
            <button
              className="bg-primary-600 text-white h-10 w-10 rounded-full flex items-center justify-center hover:bg-primary-700 transition"
              onClick={() => {
                addToCart({ productId: id });
              }}
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
