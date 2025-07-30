import apiClient from "./api-client";

export async function createOrder({ shippingAddress, paymentMethod, cartId }) {
  try {
    const options = {
      method: "POST",
      data: {
        shippingAddress,
      },
    };

    if (paymentMethod === "cod") {
      options.url = `orders/${cartId}`;
    } else if (paymentMethod === "online") {
      options.url = `orders/checkout-session/${cartId}?url=http://localhost:5173`;
    }

    const response = await apiClient.request(options);
    return response;
  } catch (error) {
    console.error("Error creating order:", error);
    throw error;
  }
}
