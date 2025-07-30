import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState(
    localStorage.getItem("token") || sessionStorage.getItem("token")
  );
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user")) ||
      JSON.parse(sessionStorage.getItem("user"))
  );

  // Check if user is logged in when component mounts
  useEffect(() => {
    const checkAuth = async () => {
      try {
        if (!token) {
          setIsAuthenticated(false);
          setIsLoading(false);

          return;
        }

        const decodedtoken = jwtDecode(token);

        const newUser = { ...user, ...decodedtoken };
        setUser(newUser);
        console.log(decodedtoken);

        localStorage.setItem("user", JSON.stringify(newUser));

        setIsAuthenticated(true);
        console.log({ token, user, isAuthenticated });

        setIsLoading(false);
      } catch (error) {
        console.error("Auth check failed:", error);
        setIsAuthenticated(false);
        setIsLoading(false);
      }
    };

    checkAuth();
  }, [token]);

  // Logout function
  const logout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setToken(null);
    setIsAuthenticated(false);
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        isLoading,
        user,
        setUser,
        token,
        setToken,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
