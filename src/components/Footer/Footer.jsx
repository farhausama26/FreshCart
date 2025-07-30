import { Link } from "react-router";
import lightLogo from "../../assets/images/freshcart-logo.svg";
import miniLogo from "../../assets/images/mini-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faPinterestP,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer id="footer" className="bg-white border-t border-gray-200 pt-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <Link to={`/`} className="mb-6">
                <img src={lightLogo} alt="FreshCart Logo" />
              </Link>

              <p className="text-gray-600 mb-4">
                FreshCart is a versatile e-commerce platform offering a wide
                range of products, from clothing to electronics. It provides a
                user-friendly experience for seamless shopping across diverse
                categories.
              </p>
              <div className="flex space-x-4">
                <span className="text-gray-500 hover:text-primary-600 cursor-pointer">
                  <FontAwesomeIcon icon={faFacebookF} />
                </span>
                <span className="text-gray-500 hover:text-primary-600 cursor-pointer">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
                <span className="text-gray-500 hover:text-primary-600 cursor-pointer">
                  <FontAwesomeIcon icon={faInstagram} />
                </span>
                <span className="text-gray-500 hover:text-primary-600 cursor-pointer">
                  <FontAwesomeIcon icon={faPinterestP} />
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Men's Fashion
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Women's Fashion
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Baby &amp; Toys
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Beauty &amp; Health
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Electronics
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Contact Us
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Privacy Policy
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Terms of Service
                  </span>
                </li>
                <li>
                  <span className="text-gray-600 hover:text-primary-600 cursor-pointer">
                    Shipping Policy
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-4">Customer Service</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    to="/account"
                    className="text-gray-600 hover:text-primary-600 cursor-pointer"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    to="/orders"
                    className="text-gray-600 hover:text-primary-600 cursor-pointer"
                  >
                    My Orders
                  </Link>
                </li>
                <li>
                  <Link
                    to="/wishlist"
                    className="text-gray-600 hover:text-primary-600 cursor-pointer"
                  >
                    Wishlist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/returns"
                    className="text-gray-600 hover:text-primary-600 cursor-pointer"
                  >
                    Returns &amp; Refunds
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help"
                    className="text-gray-600 hover:text-primary-600 cursor-pointer"
                  >
                    Help Center
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-200 mt-10 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 mb-4 md:mb-0">
                © {new Date().getFullYear()} FreshCart. All rights reserved.
              </p>
              <div className="flex items-center space-x-4">
                <img src={miniLogo} alt="FreshCart Mini Logo" className="h-6" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
