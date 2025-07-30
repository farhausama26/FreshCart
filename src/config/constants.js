// Application routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  CART: '/cart',
  WISHLIST: '/wishlist',
  PRODUCT_DETAILS: '/product/:id',
  CATEGORIES: '/categories',
  BRANDS: '/brands',
  CHECKOUT: '/checkout',
  ORDERS: '/orders',
  FORGET_PASSWORD: '/forget-password',
  VERIFY_EMAIL: '/verify-email',
};

// API endpoints
export const API_ENDPOINTS = {
  PRODUCTS: '/products',
  CATEGORIES: '/categories',
  CART: '/cart',
  AUTH: {
    LOGIN: '/auth/signin',
    SIGNUP: '/auth/signup',
    FORGET_PASSWORD: '/auth/forgotPasswords',
    VERIFY_EMAIL: '/auth/verify',
  },
};

// UI Constants
export const UI_CONSTANTS = {
  ITEMS_PER_PAGE: 12,
  TOAST_DURATION: 3000,
  SKELETON_CARDS: 8,
};
