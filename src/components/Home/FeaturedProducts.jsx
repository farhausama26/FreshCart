import { useContext, useEffect, useState } from "react";
import { getAllProducts } from "../../services/products-service";
import { FeaturedProductsSkeleton } from "../skeleton";
import { HomeProductCard } from "../ProductCard";
import { ProductsContext } from "../../context/Products.context";

export default function FeaturedProducts() {
  const { isLoading, isError, products } = useContext(ProductsContext);

  if (isLoading) {
    return <FeaturedProductsSkeleton />;
  }

  if (isError) {
    return (
      <div className="container py-10 text-red-500">
        Error loading featured products. Please try again later.
      </div>
    );
  }

  return (
    <div className="container py-8">
      <h2 className="text-2xl font-bold mb-5">Featured Products</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {products.map((product) => (
          <HomeProductCard key={product.id} productDetails={product} />
        ))}
      </div>
    </div>
  );
}
