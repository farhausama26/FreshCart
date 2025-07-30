import apiClient from "./api-client";

export async function addProductToCart({productId, quantity}) {
  try {
    const options = {
      url: "/cart",
      method: "POST",
      data: {
        productId,
        count: quantity || 1 
      }
    };

    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function getCartItems() {
  try {
    const options = {
      url: "/cart",
      method: "GET",
    };

    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function updateProductQuantity({productId, count}) {
  try {
    const options = {
      url: `/cart/${productId}`,
      method: "PUT",
      data: {
        count
      }
    };

    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}

export async function deleteProductFromCart({productId}) {
  try {
    const options = {
      url: `/cart/${productId}`,
      method: "DELETE",
    };

    const response = await apiClient(options);
    return response;
  } catch (error) {
    throw error;
  }
}


