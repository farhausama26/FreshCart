import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAppleWhole,
  faEgg,
  faBreadSlice,
  faDrumstickBite,
  faHome,
  faSearch,
  faShoppingCart,
  faPhone,
  faEnvelope,
  faComment,
} from "@fortawesome/free-solid-svg-icons";
import { HomeCategories, NewsLetter } from "../../components";
import { Link } from "react-router";
import NotFoundImg from "../../assets/images/404.svg";
export default function NotFound() {
  return (
    <>
      <>
        <section id="not-found" className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center">
              {/* 404 Illustration */}
              <div className="mb-8 ">
                <img src={NotFoundImg} className="w-3/4 mx-auto my-12" alt="" />
              </div>
              {/* Error Message */}
              <div className="mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  Oops! Page Not Found
                </h1>
                <p className="text-lg text-gray-600 mb-2">
                  The page you're looking for seems to have gone shopping!
                </p>
                <p className="text-gray-500">
                  Don't worry, our fresh products are still available for you.
                </p>
              </div>
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-primary-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-700 transition flex items-center justify-center">
                  <Link to="/" className="flex items-center">
                    <FontAwesomeIcon icon={faHome} className="mr-2" />
                    Back to Home
                  </Link>
                </button>
                <button className="border border-primary-600 text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-primary-50 transition flex items-center justify-center">
                  <Link to="/search" className="flex items-center">
                    <FontAwesomeIcon icon={faSearch} className="mr-2" />
                    Search Products
                  </Link>
                </button>
              </div>

              {/* Help Section */}
              <div className="bg-primary-50 rounded-lg p-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Need Help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Our customer support team is here to assist you 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <div className="flex items-center text-gray-700">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-primary-600 mr-2"
                    />
                    <a href="tel:+1 (800) 123-4567">+1 (800) 123-4567</a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-primary-600 mr-2"
                    />
                    <a href="mailto:support@freshcart.com">
                      support@freshcart.com
                    </a>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <FontAwesomeIcon
                      icon={faComment}
                      className="text-primary-600 mr-2"
                    />
                    <span>Live Chat</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <NewsLetter />
      </>
    </>
  );
}
