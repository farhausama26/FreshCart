import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faShieldHalved,
  faTruckFast,
  faUserPlus,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router";
import reviewAuthorImg from "../../assets/images/review-author.png";
import { useFormik } from "formik";
import * as yup from "yup";
import { sendDataToRegister } from "../../services/auth-service";
import { toast } from "react-toastify";
import { useState } from "react";
import { calcPasswordStrength } from "../../utils/password-utils";

export default function Signup() {
  const [existingUserError, setExistingUserError] = useState(null);

  const passwordRegex =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;

  const phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

  const validationSchema = yup.object({
    name: yup.string().required("Name is required"),
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .required("Password is required")
      .matches(
        passwordRegex,
        "Password must be at least 8 characters long, contain at least one uppercase letter, one lowercase letter, one number, and one special character"
      ),

    rePassword: yup
      .string()
      .required("Confirm Password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),

    phone: yup
      .string()
      .required("Phone Number is required")
      .matches(phoneRegex, "Phone Number is not valid"),
    terms: yup
      .boolean()
      .oneOf([true], "You must accept the terms and conditions"),
  });

  const navigate = useNavigate();

  async function handleSignUp(values) {
    try {
      console.log("TRYING TO SIGN UP");

      const response = await sendDataToRegister(values);
      if (response.success) {
        toast.success("Account created successfully!");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      console.log("Error during sign up:", error);

      if (error.errorDetails?.message) {
        setExistingUserError(error.errorDetails.message);
      }
    }
  }

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
      terms: false,
    },

    validationSchema,

    onSubmit: handleSignUp,
  });

  const strength = calcPasswordStrength(formik.values.password);

  return (
    <>
      <main className="py-10">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">
          <div>
            <h1 className="text-4xl font-bold">
              Welcome to <span className="text-primary-600">FreshCart</span>
            </h1>
            <p className="text-xl mt-2 mb-4">
              Join thousands of happy customers who enjoy fresh groceries
              delivered right to their doorstep.
            </p>
            <ul className="*:flex *:items-start *:gap-4 space-y-6 my-8">
              <li>
                <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Premium Quality</h2>
                  <p className="text-gray-600">
                    Premium quality products sourced from trusted suppliers.
                  </p>
                </div>
              </li>

              <li>
                <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faTruckFast} />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Fast Delivery</h2>
                  <p className="text-gray-600">
                    Same-day delivery available in most areas
                  </p>
                </div>
              </li>

              <li>
                <div className="icon size-12 text-lg bg-primary-200 text-primary-600 rounded-full flex justify-center items-center">
                  <FontAwesomeIcon icon={faShieldHalved} />
                </div>
                <div className="content">
                  <h2 className="text-lg font-semibold">Secure Shopping</h2>
                  <p className="text-gray-600">
                    Your data and payments are completely secure
                  </p>
                </div>
              </li>
            </ul>

            <div className="review bg-white shadow-sm p-4 rounded-md">
              <div className="author flex items-center gap-4 mb-4">
                <img
                  src={reviewAuthorImg}
                  alt=""
                  className="size-12 rounded-full"
                />
                <div>
                  <h3>Sarah Johnson</h3>
                  <div className="rating *:text-yellow-300">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                  </div>
                </div>
              </div>
              <blockquote>
                <p className="italic text-gray-600">
                  "FreshCart has transformed my shopping experience. The quality
                  of the products is outstanding, and the delivery is always on
                  time. Highly recommend!"
                </p>
              </blockquote>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg px-6 py-10">
            <h2 className="text-center text-3xl font-semibold mb-2">
              Create Your Account
            </h2>
            <p className="text-center">
              Start your fresh journey with us today
            </p>

            <div className="register-options flex gap-2 *:grow-1 my-10">
              <button className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faGoogle}
                  className="me-2 text-red-600"
                />
                <span>Google</span>
              </button>
              <button className="btn bg-transparent border border-gray-300 hover:bg-gray-100 flex justify-center items-center">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="me-2 text-blue-600"
                />
                <span>Facebook</span>
              </button>
            </div>

            <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['or'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4  ">
              <span className="sr-only">or</span>
            </div>

            <form className="space-y-7" onSubmit={formik.handleSubmit}>
              <div className="flex flex-col gap-2">
                <label htmlFor="name">Name*</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ali"
                  id="name"
                  name="name"
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />

                {formik.touched.name && formik.errors.name && (
                  <p className="error text-red-500 mt-1">
                    *{formik.errors.name}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email">Email*</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="ali@example.com"
                  id="email"
                  name="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="error text-red-500 mt-1">
                    *{formik.errors.email}
                  </p>
                )}

                {existingUserError && (
                  <p className="error text-red-500 mt-1">
                    *{existingUserError}
                  </p>
                )}
              </div>

              <div className="flex bg-light flex-col gap-2">
                <label htmlFor="password">Password*</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="create a strong password"
                  autoComplete="off"
                  id="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />

                <div className="password-requirements">
                  <div className="flex items-center gap-2">
                    <div className="bar grow-1 h-1 bg-gray-200 rounded-md overflow-hidden">
                      <div
                        className={`progress ${strength.style} ${strength.width} h-full`}
                      ></div>
                    </div>
                    <span>{strength.text}</span>
                  </div>
                </div>

                {formik.touched.password && formik.errors.password ? (
                  <p className="error text-red-500 -mt-1">
                    *{formik.errors.password}
                  </p>
                ) : (
                  <p className="text-gray-500 -mt-2 text-xs">
                    Must be at least 8 characters with numbers and symbols
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="rePassword">Confirm Password*</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="confirm your password"
                  autoComplete="off"
                  id="rePassword"
                  name="rePassword"
                  value={formik.values.rePassword}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.rePassword && formik.errors.rePassword && (
                  <p className="error text-red-500 mt-1">
                    *{formik.errors.rePassword}
                  </p>
                )}{" "}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="phone">Phone Number*</label>
                <input
                  type="tel"
                  className="form-control"
                  placeholder="+1 234 567 8900"
                  id="phone"
                  name="phone"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  required
                />
                {formik.touched.phone && formik.errors.phone && (
                  <p className="error text-red-500 mt-1">
                    *{formik.errors.phone}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="terms"
                    className="size-4 accent-primary-600"
                    value={formik.values.terms}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                  <label htmlFor="terms" className="ms-2">
                    I agree to the{" "}
                    <Link to={`/terms`} className="text-primary-600">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link to={`/privacy-policy`} className="text-primary-600">
                      Privacy Policy
                    </Link>{" "}
                    *
                  </label>
                </div>
                {formik.touched.terms && formik.errors.terms && (
                  <p className="error text-red-500 mt-1">
                    *{formik.errors.terms}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="btn bg-primary-600 text-white hover:bg-primary-700 w-full"
              >
                <FontAwesomeIcon icon={faUserPlus} className="me-2" />
                <span>Create My Account</span>
              </button>
            </form>

            <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
              Already have an account?{" "}
              <Link to={`/login`} className="text-primary-600">
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </main>
    </>
  );
}
