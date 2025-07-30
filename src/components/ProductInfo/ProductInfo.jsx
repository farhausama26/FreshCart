import { useContext, useReducer, useRef, useState } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

import { Rating } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faCartShopping,
  faMinus,
  faPlus,
  faShareNodes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { calcDiscount } from "../../utils/discount-utils";
import { CartContext } from "../../context/Cart.context";


export default function ProductInfo({ productDetails }) {
  const { addToCart, cart, deleteProduct } = useContext(CartContext);
  const [count, setCount] = useState(1);


  const {
    id,
    title,
    description,
    price,
    priceAfterDiscount,
    images,
    quantity,
    ratingsAverage,
    ratingsQuantity,
  } = productDetails;

  const isProductInCart =
    cart?.data?.products?.some((item) => item.product._id === id) || false;

  return (
    <>
      <section id="product-detail" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Product Images */}
            <div id="product-images" className="lg:w-80">
              <div className="">
                <ReactImageGallery
                  items={images.map((image) => {
                    return {
                      original: image,
                      thumbnail: image,
                    };
                  })}
                  showFullscreenButton={false}
                  showNav={false}
                  showPlayButton={false}
                />
              </div>
            </div>
            {/* Product Info */}
            <div id="product-info" className="lg:grow-1">
              <div className="bg-white rounded-lg p-6">
                <div className="flex justify-between mb-4">
                  <span
                    className={` ${
                      quantity > 0
                        ? "bg-primary-100 text-primary-700"
                        : "bg-red-100 text-red-700"
                    } text-xs px-2 py-1 rounded`}
                  >
                    {quantity > 0 ? "In Stock" : "Out of Stock"}
                  </span>
                  <div className="flex space-x-2">
                    <button className="text-gray-500 hover:text-primary-600">
                      <FontAwesomeIcon icon={faShareNodes} />
                    </button>
                    <button
                      id="wishlist-button"
                      className="text-gray-500 hover:text-primary-600"
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>
                  </div>
                </div>
                <h1 className="text-2xl font-bold mb-2">{title}</h1>
                <div className="flex items-center mb-4 gap-3">
                  <Rating rating={ratingsAverage} />
                  <span className="text-sm text-gray-600">
                    {ratingsAverage} ({ratingsQuantity} reviews)
                  </span>
                </div>
                <div className="flex items-center mb-6">
                  {priceAfterDiscount ? (
                    <span className="text-3xl font-bold text-gray-900 mr-3">
                      {priceAfterDiscount} EGP
                    </span>
                  ) : (
                    <span className="text-3xl font-bold text-gray-900 mr-3">
                      {price} EGP
                    </span>
                  )}
                  {priceAfterDiscount && (
                    <>
                      <span className="text-lg text-gray-500 line-through">
                        {price} EGP
                      </span>

                      <span className="ml-3 bg-red-100 text-red-700 text-sm px-2 py-1 rounded">
                        save {calcDiscount({ price, priceAfterDiscount })}%
                      </span>
                    </>
                  )}
                </div>
                <div className="border-t border-gray-200 pt-6 mb-6">
                  <p className="text-gray-700 mb-6">{description}</p>

                  <div className="mb-6">
                    <div className="flex items-center mb-2">
                      <div className="w-24 text-gray-700 font-medium">
                        Quantity:
                      </div>
                      <div className="flex items-center border border-gray-300 rounded">
                        <button
                          id="decrease-qty"
                          className="px-3 py-2 text-gray-600 hover:text-primary-600"
                          onClick={() => {
                            setCount((prevCount) => Math.max(prevCount - 1, 1));
                          }}
                        >
                          <FontAwesomeIcon icon={faMinus} />
                          <span className="sr-only">Decrease quantity</span>
                        </button>
                        <input
                          type="number"
                          min={1}
                          className="w-12 text-center border-0 focus:ring-0 focus:outline-none"
                          id="quantity"
                          value={count}
                          onChange={(e) => setCount(e.target.value)}
                        />
                        <button
                          id="increase-qty"
                          className="px-3 py-2 text-gray-600 hover:text-primary-600"
                          onClick={() => {
                            setCount((prevCount)=> Math.min(prevCount + 1, quantity));
                          }}
                        >
                          <FontAwesomeIcon icon={faPlus} />
                          <span className="sr-only">Increase quantity</span>
                        </button>
                      </div>
                      <div className="ml-4 text-sm text-gray-600">
                        <span className="font-medium">
                          Only {quantity} items
                        </span>{" "}
                        left in stock
                      </div>
                    </div>
                  </div>
                  <div className="flex space-x-4 mb-6">
                    {!isProductInCart ? (
                      <button
                        id="add-to-cart"
                        className="flex-1 bg-primary-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-primary-700 transition flex items-center justify-center"
                        onClick={() => addToCart({ productId: id, quantity: count }) }
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="mr-2"
                        />
                        Add to Cart
                      </button>
                    ) : (
                      <button
                        id="remove-from-cart"
                        className="flex-1 bg-red-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-red-400 transition flex items-center justify-center"
                        onClick={() => deleteProduct({ productId: id })}
                      >
                        <FontAwesomeIcon
                          icon={faCartShopping}
                          className="mr-2"
                        />
                        Remove From cart
                      </button>
                    )}
                    <button
                      id="buy-now"
                      className="flex-1 border border-gray-300 bg-white text-gray-800 py-3 px-6 rounded-lg font-medium hover:bg-gray-50 transition"
                    >
                      Buy Now
                    </button>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faTruckFast} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          Free Delivery
                        </h4>
                        <p className="text-sm text-gray-600">
                          Free shipping on orders over $50
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="h-10 w-10 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mr-3">
                        <FontAwesomeIcon icon={faArrowRotateLeft} />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">
                          30 Days Return
                        </h4>
                        <p className="text-sm text-gray-600">
                          Satisfaction guaranteed or money back
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
