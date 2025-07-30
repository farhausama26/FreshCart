import { toast } from "react-toastify";
import apiClient from "./api-client";

export async function sendDataToRegister(userData) {
  const options = {
    method: "POST",
    url: `/auth/signup`,
    data: userData,
  };
  const data = await apiClient.request(options);
  console.log(data);

  return data;
}

/**
 * Send the User Data to login endpoint
 * @param {Object} Credentials - the user Credentials
 * @param {String} Credentials.email - the User's email
 * @param {String} Credentials.password - the User's password
 * @return {Promise<Object>} - the response from the server
 */

export async function sendDataToLogin(credentials) {
  const options = {
    method: "POST",
    url: "/auth/signin",
    data: credentials,
  };

  const response = await apiClient.request(options);
  console.log(response);
  return response;
}

export function logout(setToken) {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  toast.success("Logged out successfully");
  setToken(null); 
}
