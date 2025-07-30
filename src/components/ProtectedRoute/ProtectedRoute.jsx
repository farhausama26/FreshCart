import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../../context/Auth.context';
import { AuthSkeleton } from '../skeleton';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, isLoading } = useContext(AuthContext);
  const location = useLocation();

  // Show loading while checking authentication
  if (isLoading) {
    return <AuthSkeleton />;
  }

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    // Save the location user was trying to access
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  // Render children if authenticated
  return children;
}
