import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronRight,
  faUser,
  faGaugeHigh,
  faBox,
  faHeart,
  faStar,
  faLocationDot,
  faCreditCard,
  faUserPen,
  faRightFromBracket,
  faChevronDown,
  faSearch,
  faRotateRight,
  faEye,
  faChevronLeft,
  faCheck,
  faTruck,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import { useNavigate } from "react-router";
import { getUserOrders } from "../../services/orders-service";
import { jwtDecode } from "jwt-decode";
import { AuthContext } from "../../context/Auth.context";
import OrdersSkeleton from "../../components/skeleton/OrdersSkeleton";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterStatus, setFilterStatus] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { logout, token } = useContext(AuthContext);
  const navigate = useNavigate();

  const decodeToken = jwtDecode(token);

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      setLoading(true);
      const response = await getUserOrders({ id: decodeToken.id });
      if (response.success) {
        console.log(response);
        setOrders(response.data || []);
      }
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  // Get order status based on isPaid and isDelivered flags
  const getOrderStatus = (order) => {
    if (order.isDelivered) {
      return "delivered";
    } else if (order.isPaid) {
      return "processing";
    } else {
      return "pending";
    }
  };

  const getStatusBadge = (order) => {
    const status = getOrderStatus(order);
    const statusConfig = {
      delivered: {
        class: "bg-green-100 text-green-800",
        text: "Delivered",
      },
      processing: {
        class: "bg-blue-100 text-blue-800",
        text: "Processing",
      },
      pending: {
        class: "bg-yellow-100 text-yellow-800",
        text: "Pending",
      },
    };

    const config = statusConfig[status];

    return (
      <span className={`text-xs px-2 py-1 rounded-full ${config.class}`}>
        {config.text}
      </span>
    );
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatPrice = (price) => {
    return `${price} EGP`;
  };

  const filteredOrders = orders.filter((order) => {
    const orderStatus = getOrderStatus(order);
    const matchesStatus = filterStatus === "all" || orderStatus === filterStatus;
    const matchesSearch =
      order._id?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.cartItems?.some((item) =>
        item.product?.title?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesStatus && matchesSearch;
  });

  if (loading) {
    return <OrdersSkeleton />;
  }

  return (
    <>
      {/* Main Content */}
      <div id="orders-content" className="w-full">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">My Orders</h2>
            <div className="flex space-x-3">
              <div className="relative">
                <select
                  className="appearance-none bg-gray-100 text-gray-700 py-2 pl-4 pr-10 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Orders</option>
                  <option value="pending">Pending</option>
                  <option value="processing">Processing</option>
                  <option value="delivered">Delivered</option>
                </select>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-xs"
                />
              </div>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search orders..."
                  className="bg-gray-100 text-gray-700 py-2 pl-4 pr-10 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 text-sm"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>
          </div>

          {/* Orders List */}
          <div id="orders-list" className="space-y-4">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <FontAwesomeIcon
                  icon={faBox}
                  className="text-6xl text-gray-300 mb-4"
                />
                <h3 className="text-lg font-medium text-gray-500 mb-2">
                  No orders found
                </h3>
                <p className="text-gray-400">You haven't placed any orders yet.</p>
                <button
                  className="mt-4 bg-primary-600 text-white px-6 py-2 rounded-md hover:bg-primary-700 transition"
                  onClick={() => navigate("/")}
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              filteredOrders.map((order) => {
                const orderStatus = getOrderStatus(order);

                return (
                  <div
                    key={order._id}
                    className="border border-gray-200 rounded-lg overflow-hidden"
                  >
                    <div className="bg-gray-50 p-4 flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-200">
                      <div>
                        <div className="flex items-center mb-1">
                          <span className="font-medium mr-2">
                            Order #{order._id?.slice(-6) || "N/A"}
                          </span>
                          {getStatusBadge(order)}
                          {/* Payment status indicator */}
                          {order.isPaid && (
                            <span className="ml-2 text-xs px-2 py-1 bg-green-50 text-green-700 rounded-full">
                              <FontAwesomeIcon icon={faCheck} className="mr-1" />
                              Paid
                            </span>
                          )}
                          {!order.isPaid && (
                            <span className="ml-2 text-xs px-2 py-1 bg-red-50 text-red-700 rounded-full">
                              <FontAwesomeIcon icon={faClock} className="mr-1" />
                              Unpaid
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-500">
                          Placed on {formatDate(order.createdAt)}
                        </p>
                      </div>
                      <div className="flex space-x-3 mt-3 md:mt-0">
                        <button className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center">
                          <FontAwesomeIcon
                            icon={faRotateRight}
                            className="mr-1"
                          />
                          Reorder
                        </button>
                        <button
                          className="text-gray-700 hover:text-gray-800 text-sm font-medium flex items-center"
                          onClick={() => navigate(`/orders/${order._id}`)}
                        >
                          <FontAwesomeIcon icon={faEye} className="mr-1" />
                          View Details
                        </button>
                      </div>
                    </div>

                    <div className="p-4">
                      <div className="flex flex-col md:flex-row items-start">
                        <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-4">
                          <div className="flex space-x-2">
                            {order.cartItems?.slice(0, 3).map((item, index) => (
                              <div
                                key={index}
                                className="relative w-16 h-16 bg-gray-100 rounded overflow-hidden"
                              >
                                <img
                                  src={
                                    item.product?.imageCover ||
                                    "/placeholder-image.jpg"
                                  }
                                  alt={item.product?.title || "Product"}
                                  className="w-full h-full object-cover"
                                />
                                <div className="absolute top-0 right-0 bg-gray-800 text-white text-xs w-5 h-5 flex items-center justify-center rounded-bl">
                                  {item.count}
                                </div>
                              </div>
                            ))}
                            {order.cartItems?.length > 3 && (
                              <div className="w-16 h-16 bg-gray-100 rounded flex items-center justify-center">
                                <span className="text-xs text-gray-500">
                                  +{order.cartItems.length - 3}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="flex-grow md:border-l md:border-r md:px-6">
                          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                            <div className="mb-2 md:mb-0">
                              <span className="text-sm text-gray-500">Items</span>
                              <p className="font-medium">
                                {order.cartItems?.reduce(
                                  (total, item) => total + item.count,
                                  0
                                ) || 0}{" "}
                                items
                              </p>
                            </div>
                            <div className="mb-2 md:mb-0">
                              <span className="text-sm text-gray-500">
                                Total Amount
                              </span>
                              <p className="font-medium">
                                {formatPrice(order.totalOrderPrice)}
                              </p>
                            </div>
                            <div>
                              <span className="text-sm text-gray-500">
                                {order.isDelivered
                                  ? "Delivered to"
                                  : "Delivering to"}
                              </span>
                              <p className="font-medium font-cairo">
                                {order.shippingAddress?.city || "Address"}
                              </p>
                              {order.isDelivered && order.deliveredAt && (
                                <p className="text-xs text-green-600">
                                  on {formatDate(order.deliveredAt)}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>

                        <div className="w-full md:w-auto mt-4 md:mt-0 md:ml-4">
                          <div className="flex flex-col items-start md:items-end">
                            {/* Action buttons based on order status */}
                            {orderStatus === "delivered" && (
                              <>
                                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto mb-2">
                                  <FontAwesomeIcon icon={faCheck} className="mr-1" />
                                  Order Complete
                                </button>
                                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto">
                                  Write Review
                                </button>
                              </>
                            )}
                            {orderStatus === "processing" && (
                              <>
                                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto mb-2">
                                  <FontAwesomeIcon icon={faTruck} className="mr-1" />
                                  Track Order
                                </button>
                                <button className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto">
                                  Cancel Order
                                </button>
                              </>
                            )}
                            {orderStatus === "pending" && (
                              <>
                                <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto mb-2">
                                  <FontAwesomeIcon icon={faCreditCard} className="mr-1" />
                                  Complete Payment
                                </button>
                                <button className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium w-full md:w-auto">
                                  Reorder Items
                                </button>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Pagination */}
          {filteredOrders.length > 0 && (
            <div
              id="pagination"
              className="mt-8 flex justify-between items-center"
            >
              <div className="text-sm text-gray-600">
                Showing{" "}
                {Math.min((currentPage - 1) * 10 + 1, filteredOrders.length)}-
                {Math.min(currentPage * 10, filteredOrders.length)} of{" "}
                {filteredOrders.length} orders
              </div>
              <div className="flex space-x-1">
                <button
                  className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200 disabled:opacity-50"
                  disabled={currentPage === 1}
                  onClick={() =>
                    setCurrentPage((prev) => Math.max(1, prev - 1))
                  }
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button className="w-9 h-9 bg-primary-600 rounded flex items-center justify-center text-white">
                  {currentPage}
                </button>
                <button
                  className="w-9 h-9 bg-gray-100 rounded flex items-center justify-center text-gray-500 hover:bg-gray-200"
                  onClick={() => setCurrentPage((prev) => prev + 1)}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
