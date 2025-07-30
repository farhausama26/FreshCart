import apiClient from "./api-client";

/**
 * Fetches all categories from the API
 * @return {Promise<Array>} A promise that resolves to an array of categories
 * @throws {Error} If the API request fails
 */

export async function getAllCategories() {
  try {
    const response = await apiClient.get("/categories");
    return response.data.data
  } catch (error) {
    console.error("Error fetching categories:", error);
    throw error;
  }
}
