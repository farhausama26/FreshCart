import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faClock,
  faEnvelope,
  faEye,
  faEyeSlash,
  faLock,
  faShieldHalved,
  faStar,
  faTruck,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate, useLocation } from "react-router";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendDataToLogin } from "../../services/auth-service";
import { toast } from "react-toastify";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/Auth.context";
import { PageMetadata } from "../../components";
import { useSEO } from "../../hooks";

export default function Login() {
  const [inCorrectCredentials, setInCorrectCredentials] = useState(null);
  const [isShownPassword, setIsShownPassword] = useState(false);
  const { setToken, setIsAuthenticated, setUser } = useContext(AuthContext);
  const { generatePageTitle } = useSEO();
  
  const navigate = useNavigate();
  const location = useLocation();
  
  // Get the page user was trying to access, or default to home
  const from = location.state?.from || "/";

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),
  });

  async function handleLogin(values) {
    try {
      const response = await sendDataToLogin({
        email: values.email,
        password: values.password,
      });
      
      if (response.success) {
        // Store token based on remember me
        const token = response.data.token;
        setToken(token);
        setIsAuthenticated(true);
        setUser(response.data.user);
        
        if (formik.values.rememberMe) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          localStorage.setItem("token", token);
        } else {
          sessionStorage.setItem("user", JSON.stringify(response.data.user));
          sessionStorage.setItem("token", token);
        }
        
        
        toast.success("Login successful!");

        console.log(from);
        
        
        // Redirect to the page user was trying to access
        setTimeout(() => {
          navigate(from, { replace: true });
        }, 3000);
      }
    } catch (error) {
      console.log(error);
      
      setInCorrectCredentials(error.errorDetails?.message || "Login failed");
    }
  }

  function handleFieldChange(e) {
    if (inCorrectCredentials) {
      setInCorrectCredentials(null);
    }

    formik.handleChange(e);
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },

    validationSchema,

    onSubmit: handleLogin,
  });

  return (
    <>
      {/* <!-- Login Section --> */}
      <div className="container py-16 mx-auto px-4" id="login-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* <!-- Left Side - Image/Branding --> */}
          <div className="hidden lg:block">
            <div className="text-center space-y-6">
              <img
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                src="https://storage.googleapis.com/uxpilot-auth.appspot.com/2e5810ff3e-e750761ebcd4ae5907db.png"
                alt="fresh vegetables and fruits shopping cart illustration, modern clean style, green theme"
              />
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-gray-800">
                  FreshCart - Your One-Stop Shop for Fresh Products
                </h2>
                <p className="text-lg text-gray-600">
                  Join thousands of happy customers who trust FreshCart for
                  their daily grocery needs
                </p>
                <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faTruck}
                      className="text-primary-600 mr-2"
                    />
                    Free Delivery
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faShieldHalved}
                      className="text-primary-600 mr-2"
                    />
                    Secure Payment
                  </div>
                  <div className="flex items-center">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-primary-600 mr-2"
                    />
                    24/7 Support
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Right Side - Login Form --> */}
          <div className="w-full">
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              {/* <!-- Header --> */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-3xl font-bold text-primary-600">
                    Fresh<span className="text-gray-800">Cart</span>
                  </span>
                </div>
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  Welcome Back!
                </h1>
                <p className="text-gray-600">
                  Sign in to continue your fresh shopping experience
                </p>
                
                {/* Show redirect message if coming from protected route */}
                {location.state?.from && (
                  <p className="mt-2 text-primary-600 font-medium">
                    Please login to continue to your requested page
                  </p>
                )}
              </div>

              {/* <!-- Social Login --> */}
              <div className="space-y-3 mb-6">
                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-red-500 text-lg"
                  />
                  <span className="font-medium text-gray-700">
                    Continue with Google
                  </span>
                </button>
                <button className="w-full flex items-center justify-center gap-3 py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-primary-300 hover:bg-primary-50 transition-all duration-200">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    className="text-blue-600 text-lg"
                  />
                  <span className="font-medium text-gray-700">
                    Continue with Facebook
                  </span>
                </button>
              </div>

              {/* <!-- Divider --> */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">
                    OR CONTINUE WITH EMAIL
                  </span>
                </div>
              </div>

              {/* <!-- Login Form --> */}
              <form className="space-y-6" onSubmit={formik.handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      className="w-full px-4 py-3 pl-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="Enter your email"
                      id="email"
                      name="email"
                      values={formik.values.email}
                      onChange={handleFieldChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                  </div>

                  {formik.touched.email && formik.errors.email && (
                    <p className="error text-red-500 mt-1">
                      *{formik.errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="password"
                      className="block text-sm font-semibold text-gray-700"
                    >
                      Password
                    </label>
                    <Link
                      to={`forget-password`}
                      className="text-sm text-primary-600 hover:text-primary-700 cursor-pointer font-medium"
                    >
                      Forgot Password?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      type={isShownPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      className="w-full px-4 py-3 pl-12 pr-12 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-100 transition-all"
                      placeholder="Enter your password"
                      values={formik.values.password}
                      onChange={handleFieldChange}
                      onBlur={formik.handleBlur}
                      required
                    />
                    <FontAwesomeIcon
                      icon={faLock}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />
                    <button
                      type="button"
                      onClick={() => {
                        setIsShownPassword(!isShownPassword);
                      }}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      {isShownPassword ? (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-gray-400 hover:text-gray-600"
                        />
                      )}
                    </button>
                  </div>

                  {formik.touched.password && formik.errors.password && (
                    <p className="error text-red-500 mt-1">
                      *{formik.errors.password}
                    </p>
                  )}

                  {inCorrectCredentials && (
                    <p className="error text-red-500 mt-1">
                      *{inCorrectCredentials}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      name="rememberMe"
                      checked={formik.values.rememberMe}
                      onChange={formik.handleChange}
                      className="h-4 w-4 text-primary-600 accent-primary-600 border-2 border-gray-300 rounded focus:ring-primary-500"
                    />
                    <span className="ml-3 text-sm text-gray-700">
                      Keep me signed in
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary-600 to-primary-700 text-white py-3 px-4 rounded-xl hover:from-primary-700 hover:to-primary-800 transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl"
                >
                  Sign In
                </button>
              </form>

              {/* <!-- Footer --> */}
              <div className="text-center mt-8 pt-6 border-t border-gray-100">
                <p className="text-gray-600">
                  New to FreshCart?
                  <Link
                    to={`/signup`}
                    className="text-primary-600 hover:text-primary-700 ms-2 font-semibold cursor-pointer"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              {/* <!-- Trust Badges --> */}
              <div className="flex items-center justify-center space-x-6 mt-6 text-xs text-gray-500">
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faLock} className="mr-1" />
                  SSL Secured
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faUsers} className="mr-1" />
                  50K+ Users
                </div>
                <div className="flex items-center">
                  <FontAwesomeIcon icon={faStar} className="mr-1" />
                  4.9 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
