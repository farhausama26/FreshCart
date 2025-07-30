import apiClient from "./api-client";

export async function getAllProducts(
  { page, keyword, priceGreaterThan, priceLessThan, category, brand } = {
    page: 1,
    keyword: "",
    priceGreaterThan: null,
    priceLessThan: null,
    category: null,
    brand: "",
  }
) {
  const options = {
    method: "GET",
    url: `/products?${page ? `page=${page}` : ""}${
      keyword ? `&keyword=${keyword}` : ""
    }${priceGreaterThan ? `&price[gte]=${priceGreaterThan}` : ""}${
      priceLessThan ? `&price[lte]=${priceLessThan}` : ""
    }${category ? `&category[in]=${category}` : ""}${
      brand ? `&brand=${brand}` : ""
    }`,
  };

  const response = await apiClient.request(options);
  return response;
}

export async function getProductById(id) {
  try {
    const options = {
      method: "GET",
      url: `/products/${id}`,
    };

    const response = await apiClient.request(options);    
    return response;
  } catch (error) {
    throw error;
  }
}
