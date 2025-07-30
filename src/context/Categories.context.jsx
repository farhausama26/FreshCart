import { createContext, useContext, useEffect, useState } from "react";
import { getAllCategories } from "../services/categories-service";
import { useQuery } from "@tanstack/react-query";
export const CategoriesContext = createContext();

export function CategoriesProvider({ children }) {
  const {
    data: categories,
    isLoading,
    isError,
    error,
    refetch: refreshCategories,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: getAllCategories,
  });

  return (
    <CategoriesContext.Provider
      value={{
        categories,
        isLoading,
        isError,
        error,
        refreshCategories,
      }}
    >
      {children}
    </CategoriesContext.Provider>
  );
}
