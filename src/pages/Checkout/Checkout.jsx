import React, { useContext, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faMoneyBillWave,
  faInfoCircle,
  faCreditCard,
  faLock,
  faArrowRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { createOrder } from "../../services/payment-service";
import { CartContext } from "../../context/Cart.context";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import CheckoutSkeleton from "../../components/skeleton/CheckoutSkeleton";

const validationSchema = Yup.object({
  paymentMethod: Yup.string().required("Payment method is required"),
  shippingAddress: Yup.object({
    details: Yup.string().required("Address is required"),
    phone: Yup.string()
      .matches(
        /^01[0-2,5]{1}[0-9]{8}$/,
        "Please enter a valid Egyptian phone number"
      )
      .required("Phone number is required"),
    city: Yup.string().required("City is required"),
  }),
  sameAsDelivery: Yup.boolean(),
});

export default function Checkout() {
  const { cart, refreshCart, loading } = useContext(CartContext);
  const navigate = useNavigate();

  // Add step state management
  const [currentStep, setCurrentStep] = useState(3);

  // Check if cart is empty and redirect
  useEffect(() => {
    if (
      !loading &&
      (!cart?.data?.products || cart.data.products.length === 0)
    ) {
      toast.error("Your cart is empty. Please add items before checkout.");
      navigate("/cart");
      return;
    }
  }, [cart, loading, navigate]);

  async function handleCreatingOrder(values) {
    try {
      const response = await createOrder({
        paymentMethod: values.paymentMethod,
        shippingAddress: values.shippingAddress,
        cartId: cart.cartId,
      });
      if (response.success) {
        if (response.data.session) {
          toast.success(
            "Order created successfully! Redirecting to payment..."
          );
          // Redirect to payment gateway
          setTimeout(() => {
            window.location.href = response.data.session.url;
          }, 2000);
        } else {
          toast.success("Order created successfully!");
          refreshCart();
          if (currentStep < 4) {
            setCurrentStep(currentStep + 1);
          }
          setTimeout(() => {
            navigate("/account/orders");
          }, 2000);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  const formik = useFormik({
    initialValues: {
      paymentMethod: "online",
      shippingAddress: {
        details: "",
        phone: "",
        city: "",
      },
      sameAsDelivery: true,
    },
    validationSchema,
    onSubmit: handleCreatingOrder,
  });

  const handlePaymentChange = (value) => {
    formik.setFieldValue("paymentMethod", value);
  };



  const cartRef = useRef(cart);

  // Show loading skeleton while cart is loading
  if (loading) {
    return <CheckoutSkeleton />;
  }

  // Check if cart is empty or doesn't exist - add this safety check
  if (!cart?.data?.products || cart.data.products.length === 0) {
    return <CheckoutSkeleton />; // Will redirect via useEffect, but prevent render errors
  }

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

                <form onSubmit={formik.handleSubmit}>
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
                              formik.values.paymentMethod === "cod"
                                ? "border-primary-500 bg-primary-50"
                                : "border-gray-200 hover:border-primary-500"
                            }`}
                            onClick={() => handlePaymentChange("cod")}
                          >
                            <label className="flex items-start cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="cod"
                                checked={formik.values.paymentMethod === "cod"}
                                onChange={(e) =>
                                  handlePaymentChange(e.target.value)
                                }
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
                                {formik.values.paymentMethod === "cod" && (
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
                                )}
                              </div>
                            </label>
                          </div>

                          {/* Online Payment */}
                          <div
                            className={`border rounded-lg p-4 transition cursor-pointer ${
                              formik.values.paymentMethod === "online"
                                ? "border-primary-500 bg-primary-50"
                                : "border-gray-200 hover:border-primary-500"
                            }`}
                            onClick={() => handlePaymentChange("online")}
                          >
                            <label className="flex items-start cursor-pointer">
                              <input
                                type="radio"
                                name="paymentMethod"
                                value="online"
                                checked={
                                  formik.values.paymentMethod === "online"
                                }
                                onChange={(e) =>
                                  handlePaymentChange(e.target.value)
                                }
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
                                {formik.values.paymentMethod === "online" && (
                                  <div id="card-form" className="mt-4 pl-11">
                                    <div className="bg-blue-50 border border-blue-200 rounded-md p-3">
                                      <div className="flex items-center">
                                        <FontAwesomeIcon
                                          icon={faInfoCircle}
                                          className="text-blue-600 mr-2"
                                        />
                                        <span className="text-sm text-blue-700">
                                          You will be redirected to secure
                                          payment gateway to complete your
                                          transaction
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                )}
                              </div>
                            </label>
                          </div>
                        </div>
                        {formik.errors.paymentMethod &&
                          formik.touched.paymentMethod && (
                            <div className="text-red-500 text-sm mt-2">
                              {formik.errors.paymentMethod}
                            </div>
                          )}
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
                              value={formik.values.shippingAddress.details}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                formik.errors.shippingAddress?.details &&
                                formik.touched.shippingAddress?.details
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              rows="3"
                              placeholder="Enter your full address details"
                            />
                            {formik.errors.shippingAddress?.details &&
                              formik.touched.shippingAddress?.details && (
                                <div className="text-red-500 text-sm mt-1">
                                  {formik.errors.shippingAddress.details}
                                </div>
                              )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              Phone Number *
                            </label>
                            <input
                              type="tel"
                              name="shippingAddress.phone"
                              value={formik.values.shippingAddress.phone}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                formik.errors.shippingAddress?.phone &&
                                formik.touched.shippingAddress?.phone
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              placeholder="01010800921"
                            />
                            {formik.errors.shippingAddress?.phone &&
                              formik.touched.shippingAddress?.phone && (
                                <div className="text-red-500 text-sm mt-1">
                                  {formik.errors.shippingAddress.phone}
                                </div>
                              )}
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                              City *
                            </label>
                            <input
                              type="text"
                              name="shippingAddress.city"
                              value={formik.values.shippingAddress.city}
                              onChange={formik.handleChange}
                              onBlur={formik.handleBlur}
                              className={`w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                                formik.errors.shippingAddress?.city &&
                                formik.touched.shippingAddress?.city
                                  ? "border-red-500"
                                  : "border-gray-300"
                              }`}
                              placeholder="Cairo"
                            />
                            {formik.errors.shippingAddress?.city &&
                              formik.touched.shippingAddress?.city && (
                                <div className="text-red-500 text-sm mt-1">
                                  {formik.errors.shippingAddress.city}
                                </div>
                              )}
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
                          {cart?.data?.products?.map((product) => (
                            <div
                              key={product._id}
                              className="flex items-center space-x-3"
                            >
                              <img
                                src={product.product.imageCover}
                                alt={product.product.title}
                                className="w-12 h-12 rounded-md object-cover"
                              />
                              <div className="flex-grow">
                                <h4 className="text-sm font-medium line-clamp-1">
                                  {product.product.title}
                                </h4>
                                <p className="text-xs text-gray-500">
                                  Qty: {product.count}
                                </p>
                              </div>
                              <span className="text-sm font-medium">
                                {product.price} EGP
                              </span>
                            </div>
                          ))}
                        </div>

                        <div className="space-y-3 mb-6 border-t pt-4">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Subtotal</span>
                            <span className="font-medium">
                              {cart?.data?.totalCartPrice || 0} EGP
                            </span>
                          </div>

                          <div className="flex justify-between">
                            <span className="text-gray-600">Delivery</span>
                            <span className="font-medium">70 EGP</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Tax</span>
                            <span className="font-medium">
                              {Math.round((cart?.data?.totalCartPrice || 0) * 0.14)} EGP
                            </span>
                          </div>
                          <div className="border-t border-gray-200 pt-3 mt-3">
                            <div className="flex justify-between font-bold text-lg">
                              <span>Total</span>
                              <span>
                                {Math.round(
                                  (cart?.data?.totalCartPrice || 0) +
                                    (cart?.data?.totalCartPrice || 0) * 0.14 +
                                    70
                                )}{" "}
                                EGP
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-4">
                          <button
                            type="submit"
                            className="w-full bg-primary-600 text-white font-medium py-3 rounded-lg hover:bg-primary-700 transition flex items-center justify-center disabled:opacity-50"
                            disabled={
                              !formik.isValid ||
                              formik.isSubmitting ||
                              !formik.dirty
                            }
                          >
                            {currentStep === 4
                              ? "Complete Order"
                              : "Proceed to Payment"}
                            <FontAwesomeIcon
                              icon={faArrowRight}
                              className="ml-2"
                            />
                          </button>
                          <button
                            type="button"
                            className="w-full bg-white text-gray-700 font-medium py-3 rounded-lg border border-gray-300 hover:bg-gray-50 transition flex items-center justify-center"
                            onClick={() =>
                              setCurrentStep(Math.max(1, currentStep - 1))
                            }
                          >
                            <FontAwesomeIcon
                              icon={faChevronLeft}
                              className="mr-2"
                            />
                            {currentStep === 1
                              ? "Return to Cart"
                              : "Previous Step"}
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
