import axios from "axios";
import { API_CONFIG } from "../config";

const apiClient = axios.create({
  baseURL: API_CONFIG.API_URL,
  timeout: API_CONFIG.TIMEOUT,
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  if (token) {
    config.headers.token = token;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return Promise.resolve({
      success: true,
      data: response.data,
      status: response.status,
      statusText: response.statusText,
    });
  },
  (error) => {
    return Promise.reject({
      success: false,
      data: null,
      error: error.message || "An error occurred",
      errorDetails: error.response?.data || null,
      status: error.response?.status,
      statusText: error.response?.statusText,
    });
  }
);

export default apiClient;
