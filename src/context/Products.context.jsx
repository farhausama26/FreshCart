import { createContext, useEffect, useState } from "react";
import { getAllProducts } from "../services/products-service";
import { useQuery } from "@tanstack/react-query";

export const ProductsContext = createContext(null);

export function ProductsProvider({ children }) {
  const {
    isLoading,
    isError,
    error,
    refetch: refreshProducts,
    data: products,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
    select: (response) => {
      return response.data.data;
    },
  });

  return (
    <ProductsContext.Provider
      value={{ products, isLoading, isError, error, refreshProducts }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
