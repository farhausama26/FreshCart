import {
  faEnvelope,
  faHeart,
  faIdCard,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import {
  faBabyCarriage,
  faBars,
  faBolt,
  faChevronDown,
  faEllipsis,
  faPerson,
  faPersonDress,
  faPhone,
  faSearch,
  faShoppingCart,
  faSignOutAlt,
  faSpinner,
  faSuitcaseMedical,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";
import logo from "../../assets/images/freshcart-logo.svg";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/Cart.context";
import { AuthContext } from "../../context/Auth.context";
import { NetworkStatusIndicator } from "../NetworkStatus";

export default function Navbar() {




  
  const { cart, isLoading } = useContext(CartContext);
  const { token, logout } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header>
        <div className="container">
          {/* Top Navbar */}
          <div className="hidden lg:flex border-b text-sm border-gray-500/10 py-2  justify-between items-center *:flex *:gap-6">
            <ul className="*:flex *:gap-2 *:items-center">
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <a href="tel:+18001234567">+1 (800) 123-4567</a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href="mailto:support@freshcart.com">support@freshcart.com</a>
              </li>
              {/* Network Status Indicator for testing */}
              <li>
                <NetworkStatusIndicator />
              </li>
            </ul>

            <ul>
              <li>
                <Link to={`/track-order`}>Track Order</Link>
              </li>
              <li>
                <Link to={`/about`}>About</Link>
              </li>
              <li>
                <Link to={`/contact`}>Contact</Link>
              </li>
              <li>
                <select>
                  <option>EGP</option>
                  <option>SAR</option>
                  <option>AED</option>
                </select>
              </li>
              <li>
                <select>
                  <option>العربية</option>
                  <option>English</option>
                </select>
              </li>
            </ul>
          </div>
          {/* Main Navigation */}
          <nav className="py-4 flex justify-between items-center">
            <h1>
              <Link to={`/`}>
                <img src={logo} alt="" />
              </Link>
            </h1>

            <search className="relative hidden lg:flex">
              <input
                type="text"
                className="form-control w-96"
                placeholder="Search for products ..."
              />
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute right-2 top-1/2 -translate-1/2"
              />
            </search>

            <button
              onClick={toggleMenu}
              className="lg:hidden btn size-10 flex justify-center items-center bg-primary-600 text-white"
            >
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>

            <menu className="hidden lg:flex gap-6 *:hover:text-primary-500 *:transition-colors *:duration-200">
              <li>
                <NavLink
                  to={`/wishlist`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2`;
                  }}
                >
                  <FontAwesomeIcon icon={faHeart} className="text-xl" />
                  <span className="text-sm">Wishlist</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/cart`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2`;
                  }}
                >
                  <div className="relative">
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="text-xl"
                    />
                    <span className="absolute -top-0 right-0 -translate-y-1/2 size-5 rounded-full bg-primary-600 text-white text-xs flex justify-center items-center">
                      {isLoading ? (
                        <FontAwesomeIcon icon={faSpinner} spin />
                      ) : cart.numOfCartItems > 0 ? (
                        cart.numOfCartItems
                      ) : (
                        "0"
                      )}
                    </span>
                  </div>
                  <span className="text-sm">Cart</span>
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={`/account`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } flex flex-col gap-2`;
                  }}
                >
                  <FontAwesomeIcon icon={faUser} className="text-xl" />
                  <span className="text-sm">Account</span>
                </NavLink>
              </li>

              {!token ? (
                <>
                  <li>
                    <NavLink
                      to={`/signup`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        } flex flex-col gap-2`;
                      }}
                    >
                      <FontAwesomeIcon icon={faUserPlus} className="text-xl" />
                      <span className="text-sm">Signup</span>
                    </NavLink>
                  </li>

                  <li>
                    <NavLink
                      to={`/login`}
                      className={({ isActive }) => {
                        return `${
                          isActive ? "text-primary-600" : ""
                        } flex flex-col gap-2`;
                      }}
                    >
                      <FontAwesomeIcon icon={faIdCard} className="text-xl" />
                      <span className="text-sm">Login</span>
                    </NavLink>
                  </li>
                </>
              ) : (
                <li
                  className="flex flex-col gap-2 cursor-pointer"
                  onClick={logout}
                >
                  <FontAwesomeIcon icon={faSignOutAlt} className="text-xl" />
                  <span className="text-sm">Logout</span>
                </li>
              )}
            </menu>
          </nav>
        </div>
        {/* Category Navigation */}
        <nav className="hidden lg:block bg-gray-100 py-4">
          <div className="container flex gap-6 items-center">
            <div className="group/categories relative">
              <button className="btn bg-primary-600 text-white flex gap-2 items-center">
                <FontAwesomeIcon icon={faBars} />
                <span>All Categories</span>
                <FontAwesomeIcon icon={faChevronDown} />
              </button>

              <ul className="hidden divide-y-2 divide-gray-300/20 shadow-xl group-hover/categories:flex flex-col absolute z-50 top-10 left-0 rounded-md bg-white w-60 *:bg-white *:hover:bg-gray-100 *:transition-colors *:duration-200">
                <li>
                  <Link
                    to={`/category/6439d5b90049ad0b52b90048`}
                    className="p-3 flex gap-3 items-center"
                  >
                    <FontAwesomeIcon
                      icon={faPerson}
                      className="text-primary-600"
                    />
                    <span>Men's Fashion</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/category/6439d58a0049ad0b52b9003f`}
                    className="p-3 flex gap-3 items-center"
                  >
                    <FontAwesomeIcon
                      icon={faPersonDress}
                      className="text-primary-600"
                    />
                    <span>Women's Fashion</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/category/6439d40367d9aa4ca97064cc`}
                    className="p-3 flex gap-3 items-center"
                  >
                    <FontAwesomeIcon
                      icon={faBabyCarriage}
                      className="text-primary-600"
                    />
                    <span>Baby & Toys</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/category/6439d30b67d9aa4ca97064b1`}
                    className="p-3 flex gap-3 items-center"
                  >
                    <FontAwesomeIcon
                      icon={faSuitcaseMedical}
                      className="text-primary-600"
                    />
                    <span>Beauty & Health</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/category/6439d2d167d9aa4ca970649f`}
                    className="p-3 flex gap-3 items-center"
                  >
                    <FontAwesomeIcon
                      icon={faBolt}
                      className="text-primary-600"
                    />
                    <span>Electronics</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to={`/categories`}
                    className="p-3 flex gap-3 items-center"
                  >
                    <FontAwesomeIcon
                      icon={faEllipsis}
                      className="text-primary-600"
                    />
                    <span>View All Categories</span>
                  </Link>
                </li>
              </ul>
            </div>

            <menu className="flex gap-4">
              <li>
                <NavLink
                  to={`/`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } hover:text-primary-600 transition-colors duration-200 font-medium`;
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/recently-added`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } hover:text-primary-600 transition-colors duration-200 font-medium`;
                  }}
                >
                  Recently Added
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/featured`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } hover:text-primary-600 transition-colors duration-200 font-medium`;
                  }}
                >
                  Featured Products
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/offers`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } hover:text-primary-600 transition-colors duration-200 font-medium`;
                  }}
                >
                  Offers
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/brands`}
                  className={({ isActive }) => {
                    return `${
                      isActive ? "text-primary-600" : ""
                    } hover:text-primary-600 transition-colors duration-200 font-medium`;
                  }}
                >
                  Brands
                </NavLink>
              </li>
            </menu>
          </div>
        </nav>

        {/* Responsive Menu */}
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div
              className="fixed inset-0 bg-black/50 z-40"
              onClick={toggleMenu}
            ></div>

            <div
              className={`offcanvas p-5 fixed w-80 top-0 bottom-0 left-0 bg-white shadow-xl z-50 overflow-y-auto flex flex-col ${
                isMenuOpen ? "animate-slide-in" : "animate-slide-out"
              }`}
            >
              {/* Header with logo and close button */}
              <div className="flex justify-between items-center border-b border-gray-200 pb-4">
                <div className="logo">
                  <img src={logo} alt="FreshCart" className="h-10" />
                </div>
                <button
                  onClick={toggleMenu}
                  className="btn p-2 rounded-full hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <FontAwesomeIcon icon={faXmark} className="text-xl" />
                </button>
              </div>
              {/* Search */}
              <div className="relative my-4">
                <input
                  type="text"
                  className="form-control w-full border-2 py-2 pl-3 pr-10 rounded-lg"
                  placeholder="Search for products ..."
                />
                <FontAwesomeIcon
                  icon={faSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                />
              </div>
              {/* Main navigation */}
              <h2 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
                Main Menu
              </h2>
              <ul className="space-y-3 border-b border-gray-200 pb-4">
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-2 rounded-lg ${
                        isActive
                          ? "text-primary-600 bg-primary-50"
                          : "hover:bg-gray-100"
                      }`
                    }
                    to={`/wishlist`}
                  >
                    <FontAwesomeIcon icon={faHeart} className="text-lg" />
                    <span className="font-medium">Wishlist</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-2 rounded-lg ${
                        isActive
                          ? "text-primary-600 bg-primary-50"
                          : "hover:bg-gray-100"
                      }`
                    }
                    to={`/cart`}
                  >
                    <div className="relative">
                      <FontAwesomeIcon
                        icon={faShoppingCart}
                        className="text-lg"
                      />
                      <span className="absolute -top-1 -right-1 size-4 rounded-full bg-primary-600 text-white text-xs flex justify-center items-center">
                        {isLoading ? (
                          <FontAwesomeIcon icon={faSpinner} spin />
                        ) : cart.numOfCartItems > 0 ? (
                          cart.numOfCartItems
                        ) : (
                          "0"
                        )}
                      </span>
                    </div>
                    <span className="font-medium">Cart</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    className={({ isActive }) =>
                      `flex items-center gap-3 p-2 rounded-lg ${
                        isActive
                          ? "text-primary-600 bg-primary-50"
                          : "hover:bg-gray-100"
                      }`
                    }
                    to={`/account`}
                  >
                    <FontAwesomeIcon icon={faUser} className="text-lg" />
                    <span className="font-medium">Account</span>
                  </NavLink>
                </li>
              </ul>
              {/* Account actions */}
              <h2 className="text-lg font-semibold mt-4 mb-2 text-gray-800">
                Account
              </h2>
              <ul className="space-y-3">
                {token ? (
                  <li>
                    <button
                      className="flex w-full items-center gap-3 p-2 rounded-lg hover:bg-gray-100 text-left"
                      onClick={logout}
                    >
                      <FontAwesomeIcon
                        icon={faSignOutAlt}
                        className="text-lg"
                      />
                      <span className="font-medium">Logout</span>
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <NavLink
                        to={`/signup`}
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-2 rounded-lg ${
                            isActive
                              ? "text-primary-600 bg-primary-50"
                              : "hover:bg-gray-100"
                          }`
                        }
                      >
                        <FontAwesomeIcon
                          icon={faUserPlus}
                          className="text-lg"
                        />
                        <span className="font-medium">Signup</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to={`/login`}
                        className={({ isActive }) =>
                          `flex items-center gap-3 p-2 rounded-lg ${
                            isActive
                              ? "text-primary-600 bg-primary-50"
                              : "hover:bg-gray-100"
                          }`
                        }
                      >
                        <FontAwesomeIcon icon={faIdCard} className="text-lg" />
                        <span className="font-medium">Login</span>
                      </NavLink>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </>
        )}
      </header>
    </>
  );
}
