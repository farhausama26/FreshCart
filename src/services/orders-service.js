import apiClient from "./api-client";

/**
 * Get all orders for the logged-in user
 * @return {Promise<Object>} A promise that resolves to the user's orders
 * @throws {Error} If the API request fails
 */
export async function getUserOrders({id}) {
  try {
    const options = {
      method: "GET",
      url: `/orders/user/${id}`,
    };

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    console.error("Error fetching user orders:", error);
    throw error;
  }
}
