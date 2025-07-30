import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoneyBillWave,
  faInfoCircle,
  faCreditCard,
  faLock,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
  faCcVisa as faCcVisaBrand,
  faCcMastercard as faCcMastercardBrand,
  faCcAmex as faCcAmexBrand,
  faCcPaypal as faCcPaypalBrand,
  faCcApplePay as faCcApplePayBrand,
} from "@fortawesome/free-brands-svg-icons";

export default function Checkout() {
  return (
    <>
      <>
        {/* Checkout Process */}
        <section id="checkout-process" className={`py-8`}>
          <div className="container mx-auto px-4">
            <div className="flex justify-center mb-8">
              <div className="w-full max-w-6xl">
                <div className="flex items-center justify-between mb-6">
                  <h1 className="text-2xl font-bold">Checkout</h1>
                </div>

                <form>
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Payment Options */}
                    <div id="payment-section" className="lg:col-span-2">
                      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                        <h2 className="text-xl font-semibold mb-6">
                          Payment Method
                        </h2>
                        {/* Payment Options */}
                        <div className="space-y-4">
                          {/* Cash on Delivery */}
                          <div
                            className={`border rounded-lg p-4 transition cursor-pointer ${
                              true
                                ? "border-primary-500 bg-primary-50"
                                : "border-gray-200 hover:border-primary-500"
                            }`}
                          >
                            <label className="flex items-start cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500"
                              />
                              <div className="ml-4 flex-grow">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <FontAwesomeIcon
                                      icon={faMoneyBillWave}
                                      className="text-2xl text-primary-600 mr-3"
                                    />
                                    <div>
                                      <h3 className="font-semibold">
                                        Cash on Delivery
                                      </h3>
                                      <p className="text-sm text-gray-500">
                                        Pay when your order arrives
                                      </p>
                                    </div>
                                  </div>
                                  <span className="text-sm font-medium text-green-600">
                                    No extra charges
                                  </span>
                                </div>

                                <div className="mt-3 pl-11">
                                  <div className="bg-green-50 border border-green-200 rounded-md p-3">
                                    <div className="flex items-center">
                                      <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="text-green-600 mr-2"
                                      />
                                      <span className="text-sm text-green-700">
                                        Please keep exact change ready for
                                        hassle-free delivery
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>

                          {/* Online Payment */}
                          <div
                            className={`border rounded-lg p-4 transition cursor-pointer ${
                              false
                                ? "border-primary-500 bg-primary-50"
                                : "border-gray-200 hover:border-primary-500"
                            }`}
                          >
                            <label className="flex items-start cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="online"
                                className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500"
                              />
                              <div className="ml-4 flex-grow">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    <FontAwesomeIcon
                                      icon={faCreditCard}
                                      className="text-2xl text-primary-600 mr-3"
                                    />
                                    <div>
                                      <h3 className="font-semibold">
                                        Online Payment
                                      </h3>
                                      <p className="text-sm text-gray-500">
                                        Pay securely with card or digital wallet
                                      </p>
                                    </div>
                                  </div>
                                  <span className="text-sm font-medium text-primary-600">
                                    Recommended
                                  </span>
                                </div>

                                <div id="card-form" className="mt-4 pl-11">
                                  <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                                    <div className="flex items-center">
                                      <FontAwesomeIcon
                                        icon={faInfoCircle}
                                        className="text-blue-600 mr-2"
                                      />
                                      <span className="text-sm text-blue-700">
                                        You will be redirected to secure payment
                                        gateway to complete your transaction
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </label>
                          </div>
                        </div>
                      </div>

                      {/* Billing Address */}
                      <div
                        id="billing-address"
                        className="bg-white rounded-lg shadow-sm p-6 mb-6"
                      >
                        <h2 className="text-xl font-semibold mb-4">
                          Shipping Address
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Address Details *
                            </label>
                            <textarea
                              name="shippingAddress.details"
                              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                false ? "border-red-500" : "border-gray-300"
                              }`}
                              rows="3"
                              placeholder="Enter your full address details"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="shippingAddress.phone"
                              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                false ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="01010800921"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              name="shippingAddress.city"
                              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                false ? "border-red-500" : "border-gray-300"
                              }`}
                              placeholder="Cairo"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Order Summary */}
                    <div id="order-total" className="lg:col-span-1">
                      <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                        <h2 className="text-xl font-semibold mb-4">
                          Order Summary
                        </h2>
                        {/* Order Items - Fixed cart access */}
                        <div className="space-y-3 mb-4 max-h-48 overflow-y-auto">
                          <div className="flex items-center space-x-3">
                            <img
                              src={`https://ecommerce.routemisr.com/Route-Academy-products/1680402295928-cover.jpeg`}
                              className="w-12 h-12 rounded-md object-cover"
                            />
                            <div className="flex-grow">
                              <h4 className="text-sm font-medium line-clamp-1">
                                Lorem, ipsum dolor.
                              </h4>
                              <p className="text-xs text-gray-500">Qty: 5</p>
                            </div>
                            <span className="text-sm font-medium">250 EGP</span>
                          </div>
                        </div>

                        <div className="space-y-3 mb-6 border-t pt-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">300 EGP</span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-600">Delivery</span>
                            <span className="font-medium">70 EGP</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="font-medium">500 EGP</span>
                          </div>
                          <div className="border-t border-gray-200 pt-3 mt-3">
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total</span>
                              <span>400 EGP</span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <button
                            type="submit"
                            className="w-full bg-primary-600 text-white font-medium py-3 rounded-lg hover:bg-primary-700 transition flex items-center justify-center disabled:opacity-50"
                          >
                            Proceed to Payment
                          </button>
                          <button
                            type="button"
                            className="w-full bg-white text-gray-700 font-medium py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                          >
                            <FontAwesomeIcon
                              icon={faChevronLeft}
                              className="mr-2"
                            />
                            Return to Cart
                          </button>
                        </div>
                        <div className="mt-6">
                          <h3 className="font-medium mb-2">Secure Checkout</h3>
                          <div className="flex items-center text-sm text-gray-500">
                            <FontAwesomeIcon
                              icon={faLock}
                              className="mr-2 text-primary-600"
                            />
                            <span>Your payment information is secure</span>
                          </div>
                          <div className="flex items-center mt-4 space-x-2">
                            <FontAwesomeIcon
                              icon={faCcVisaBrand}
                              className="text-2xl text-blue-700"
                            />
                            <FontAwesomeIcon
                              icon={faCcMastercardBrand}
                              className="text-2xl text-red-500"
                            />
                            <FontAwesomeIcon
                              icon={faCcAmexBrand}
                              className="text-2xl text-blue-500"
                            />
                            <FontAwesomeIcon
                              icon={faCcPaypalBrand}
                              className="text-2xl text-blue-800"
                            />
                            <FontAwesomeIcon
                              icon={faCcApplePayBrand}
                              className="text-2xl text-gray-800"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </>
    </>
  );
}
