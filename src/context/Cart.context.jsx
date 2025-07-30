import { createContext, useContext } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import {
  addProductToCart,
  deleteProductFromCart,
  getCartItems,
  updateProductQuantity,
} from "../services/cart-service";
import { AuthContext } from "./Auth.context";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const { token } = useContext(AuthContext);
  const queryClient = useQueryClient();

  // Get cart data with React Query
  const {
    data: cart,
    isLoading,
    error,
    refetch: refreshCart,
  } = useQuery({
    queryKey: ["cart"],
    queryFn: getCartItems,
    enabled: !!token, // Only run if user is logged in
    select: (response) => response.data,
    staleTime: 1 * 60 * 1000, // 1 minute
  });

  // Add to cart mutation
  const addToCartMutation = useMutation({
    mutationFn: ({ productId }) => addProductToCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Product added to cart!");
    },
    onError: (error) => {
      toast.error(
        error.response?.data?.message || "Failed to add product to cart"
      );
    },
  });

  // Update quantity mutation
  const updateQuantityMutation = useMutation({
    mutationFn: ({ productId, count }) =>
      updateProductQuantity(productId, count),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
    onError: (error) => {
      toast.error("Failed to update quantity");
    },
  });

  const removeFromCartMutation = useMutation({
    mutationFn: (productId) => deleteProductFromCart(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      toast.success("Product removed from cart");
    },
    onError: (error) => {
      // ✅ Fixed: Don't show error for user cancellation
      if (error.message !== "Deletion cancelled by user") {
        toast.error("Failed to remove product");
      }
    },
  });

  const addToCart = async (productId) => {
    return addToCartMutation.mutateAsync({ productId });
  };

  const updateQuantity = async (productId, count) => {
    return updateQuantityMutation.mutateAsync({ productId, count });
  };

  const deleteProduct = async (productId) => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "This will remove the item from your cart.",
      icon: "warning",
      iconColor: "#C5172E",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it!",
      cancelButtonText: "No, keep it",
      confirmButtonColor: "#C5172E",
    });

    if (result.isConfirmed) {
      return removeFromCartMutation.mutateAsync(productId);
    }
    // If cancelled, just return - no mutation called
    return Promise.resolve();
  };

  return (
    <CartContext.Provider
      value={{
        cart: cart || { data: { products: [], totalCartPrice: 0 } },
        isLoading,
        error: error?.message,
        addToCart,
        updateQuantity,
        deleteProduct,
        refreshCart,
        
        isUpdating:
          updateQuantityMutation.isPending || removeFromCartMutation.isPending,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
