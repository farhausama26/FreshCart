import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { Layout, ProtectedRoute, OfflineGuard } from "./components";
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import ForgetPassword from "./pages/ForgetPassword/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail/VerifyEmail";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import NotFound from "./pages/NotFound/NotFound";
import { ToastContainer } from "react-toastify";
import AuthProvider from "./context/Auth.context";
import CartProvider from "./context/Cart.context";
import { CategoriesProvider } from "./context/Categories.context";
import { ProductsProvider } from "./context/Products.context";
import Checkout from "./pages/Checkout/Checkout";
import Orders from "./pages/Orders/Orders";
import AccountDetails from "./pages/AccountDetails/AccountDetails";
import AccountLayout from "./components/AccountLayout/AccountLayout";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/signup",
          element: <Signup />,
        },
        {
          path: "/forget-password",
          element: <ForgetPassword />,
        },
        {
          path: "/verify-email",
          element: <VerifyEmail />,
        },
        {
          path: "/product/:id",
          element: <ProductDetails />,
        },

        {
          path: "/checkout",
          element: (
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          ),
        },
        {
          path: "/cart",
          element: (
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          ),
        },

        {
          path: "/account",
          element: (
            <ProtectedRoute>
              <AccountLayout />
            </ProtectedRoute>
          ),
          children: [
            {
              index: true,
              element: <Navigate to="dashboard" replace />,
            },
            {
              path: "dashboard",
              element: (
                <h2 className="text-center text-2xl font-semibold">
                  Account Dashboard
                </h2>
              ),
            },

            {
              path: "orders",
              element: <Orders />,
            },
            {
              path: "wishlist",
              element: <Wishlist />,
            },

            {
              path: "favorites",
              element: (
                <h2 className="text-center text-2xl font-semibold">
                  Favorites
                </h2>
              ),
            },

            {
              path: "addresses",
              element: (
                <h2 className="text-center text-2xl font-semibold">
                  Addresses
                </h2>
              ),
            },

            {
              path: "payment-methods",
              element: (
                <h2 className="text-center text-2xl font-semibold">
                  Payment Methods
                </h2>
              ),
            },

            {
              path: "account-details",
              element: <AccountDetails />,
            },
          ],
        },

        {
          path: "/allorders",
          element: <Navigate to="/account/orders" replace />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  const client = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000,
        retry: 2,
        refetchOnWindowFocus: false,
      },
      mutations: {
        retry: 1,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={client}>
        <AuthProvider>
          <CartProvider>
            <ProductsProvider>
              <CategoriesProvider>
                <OfflineGuard>
                  <RouterProvider router={router} />
                </OfflineGuard>
              </CategoriesProvider>
            </ProductsProvider>
          </CartProvider>
        </AuthProvider>
        <ReactQueryDevtools position="right" />
      </QueryClientProvider>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover={true}
      />
    </>
  );
}

export default App;
