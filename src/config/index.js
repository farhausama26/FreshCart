export const API_CONFIG = {
  API_URL: `${import.meta.env.VITE_API_BASE_URL || ""}/api/${"v1"}`,
  TIMEOUT: parseInt(import.meta.env.VITE_API_TIMEOUT || "30000", 10),
};

// Re-export constants for easier importing
export * from './constants';
