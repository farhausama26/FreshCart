import {
  faTruckFast,
  faStar,
  faStarHalfStroke,
  faStar as faStarRegular,
  faMinus,
  faPlus,
  faTrash,
  faTag,
  faShieldHalved,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CartItem, PageMetadata } from "../../components";
import { useContext, useEffect } from "react";
import { CartContext } from "../../context/Cart.context";
import { Link } from "react-router";
import { CartSkeleton } from "../../components/skeleton";
import { useSEO } from "../../hooks";

export default function Cart() {
  const { cart, isLoading, refreshCart } = useContext(CartContext);
  const { generatePageTitle, generatePageDescription } = useSEO();

  if (isLoading) {
    return <CartSkeleton />;
  }

  return (
    <>
      <PageMetadata
        title={generatePageTitle("Shopping Cart")}
        description={generatePageDescription('cart')}
        keywords="shopping cart, checkout, grocery cart, fresh cart items"
        robots="noindex, nofollow"
      />
      <main id="cart-main" className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div id="cart-items" className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="p-6 border-b border-gray-200">
                  <h1 className="text-2xl font-bold">Shopping Cart</h1>
                  <p className="text-gray-600 mt-1">
                    {cart.numOfCartItems} items in your cart
                  </p>
                </div>
                {cart.data.products.length > 0 ? (
                  cart.data.products.map((item) => (
                    <CartItem key={item._id} cartItemDetails={item} />
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-600">
                    Your cart is empty.{" "}
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <br />
                    you can start shopping{" "}
                    <Link to="/" className="text-primary-600 hover:underline">
                      here
                    </Link>
                  </div>
                )}
              </div>
            </div>
            {/* Order Summary */}
            <div id="order-summary" className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 sticky top-24">
                <h3 className="font-bold text-xl mb-6">Order Summary</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">
                      Subtotal ({cart.numOfCartItems} items)
                    </span>
                    <span className="font-medium">
                      {cart.data.totalCartPrice} EGP
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Shipping</span>
                    <span className="font-medium text-primary-600">
                      {cart.data.totalCartPrice > 0 ? (
                        <span>70 EGP</span>
                      ) : (
                        <span>0 EGP</span>
                      )}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Tax</span>
                    <span className="font-medium">
                      {Math.round(cart.data.totalCartPrice * 0.14)} EGP
                    </span>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total</span>
                    <span>
                      {cart.data.totalCartPrice +
                        (cart.data.totalCartPrice > 0 ? 70 : 0) +
                        Math.round(cart.data.totalCartPrice * 0.14)}{" "}
                      EGP
                    </span>
                  </div>
                </div>
                <div className="space-y-3">
                  <Link
                    to="/checkout"
                    className="w-full text-center bg-primary-600 text-white py-3 rounded-lg font-medium hover:bg-primary-700 transition"
                  >
                    Proceed to Checkout
                  </Link>
                  <Link
                    to="/"
                    className="w-full text-center border border-gray-300 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-50 transition"
                  >
                    Continue Shopping
                  </Link>
                </div>
                <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faTruckFast}
                      className="text-primary-600 mr-2"
                    />
                    <span className="text-sm font-medium">Free Delivery</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Your order qualifies for free delivery. Estimated delivery:
                    2-3 business days
                  </p>
                </div>
                <div className="mt-4 p-4 bg-primary-50 rounded-lg border border-primary-200">
                  <div className="flex items-center mb-2">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-primary-600 mr-2"
                    />
                    <span className="text-sm font-medium">Secure Checkout</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Your payment information is protected with 256-bit SSL
                    encryption
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
