/**
 * OfflineGuard - HOC component that detects offline status
 * Shows OfflineScreen when user is offline, otherwise shows children
 */
import { useOnlineStatus } from '../../hooks';
import OfflineScreen from './OfflineScreen';
import { useState } from 'react';

const OfflineGuard = ({ children }) => {
  const isOnline = useOnlineStatus();
  const [isRetrying, setIsRetrying] = useState(false);

  const handleRetry = async () => {
    setIsRetrying(true);
    
    // Simulate checking connection
    setTimeout(() => {
      setIsRetrying(false);
      
      // Force a page reload if we detect we're back online
      if (navigator.onLine) {
        window.location.reload();
      }
    }, 2000);
  };

  if (!isOnline) {
    return (
      <OfflineScreen 
        onRetry={handleRetry} 
        isRetrying={isRetrying}
      />
    );
  }

  return children;
};

export default OfflineGuard;
