import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGaugeHigh,
  faBox,
  faHeart,
  faStar,
  faLocationDot,
  faCreditCard,
  faUserPen,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faUser as faUserRegular } from "@fortawesome/free-regular-svg-icons";
import { NavLink, Outlet, useNavigate } from "react-router";
import { AuthContext } from "../../context/Auth.context";
import { useContext } from "react";

export default function AccountLayout() {
  const { logout, user } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <section id="account-dashboard" className="py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <div id="account-sidebar" className="w-full md:w-1/4">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-primary-600 mr-4">
                    <FontAwesomeIcon icon={faUserRegular} className="text-xl" />
                  </div>
                  <div>
                    <h3 className="font-medium">{user?.name || "User"}</h3>
                    <p className="text-sm text-gray-500">
                      {user?.email || "user@example.com"}
                    </p>
                  </div>
                </div>
                <ul className="space-y-1">
                  <li>
                    <NavLink
                      to={`/account/dashboard`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faGaugeHigh}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Dashboard</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/orders`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon icon={faBox} className="w-5 mr-3" />
                      <span>Orders</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/wishlist`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faHeart}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Wishlist</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/favorites`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faStar}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Favorites</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/addresses`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faLocationDot}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Addresses</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/payment-methods`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faCreditCard}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Payment Methods</span>
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={`/account/account-details`}
                      className={({ isActive }) => {
                        return `${
                          isActive
                            ? "bg-primary-50 text-primary-600"
                            : "text-gray-700 hover:bg-gray-100"
                        } flex items-center px-4 py-3  rounded-md cursor-pointer`;
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faUserPen}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Account Details</span>
                    </NavLink>
                  </li>
                  <li>
                    <span
                      className="flex items-center px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-md cursor-pointer"
                      onClick={logout}
                    >
                      <FontAwesomeIcon
                        icon={faRightFromBracket}
                        className="w-5 mr-3 text-gray-500"
                      />
                      <span>Logout</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <div id="content" className="w-full md:w-3/4">
              <Outlet />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
