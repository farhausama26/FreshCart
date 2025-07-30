/**
 * OfflineScreen Component - Beautiful offline UI design
 * Displays when user loses internet connection
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faWifi,
  faRefresh,
  faExclamationTriangle,
  faSignal,
  faGlobe
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const OfflineScreen = ({ onRetry, isRetrying = false }) => {
  const [retryAttempts, setRetryAttempts] = useState(0);
  const [lastChecked, setLastChecked] = useState(new Date());

  const handleRetry = () => {
    setRetryAttempts(prev => prev + 1);
    setLastChecked(new Date());
    onRetry?.();
  };

  // Auto-retry every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (navigator.onLine) {
        window.location.reload();
      }
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Animated WiFi Icon */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <div className="absolute inset-0 animate-ping">
              <FontAwesomeIcon 
                icon={faWifi} 
                className="text-red-400 text-6xl opacity-20" 
              />
            </div>
            <FontAwesomeIcon 
              icon={faWifi} 
              className="text-red-500 text-6xl relative z-10" 
            />
            <div className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs">
              <FontAwesomeIcon icon={faExclamationTriangle} />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-3">
            Connection Lost
          </h1>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Oops! It looks like you've lost your internet connection. 
            Don't worry, we'll help you get back online.
          </p>

          {/* Connection Status */}
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faSignal} className="text-gray-400" />
                <span className="text-gray-600">Network Status:</span>
              </div>
              <span className="text-red-500 font-medium">Offline</span>
            </div>
            
            <div className="flex items-center justify-between text-sm mt-2">
              <div className="flex items-center space-x-2">
                <FontAwesomeIcon icon={faGlobe} className="text-gray-400" />
                <span className="text-gray-600">Last Checked:</span>
              </div>
              <span className="text-gray-500">
                {lastChecked.toLocaleTimeString()}
              </span>
            </div>
          </div>

          {/* Retry Section */}
          <div className="space-y-4">
            <button
              onClick={handleRetry}
              disabled={isRetrying}
              className={`w-full flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-medium transition-all duration-200 ${
                isRetrying
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white transform hover:scale-105 active:scale-95'
              }`}
            >
              <FontAwesomeIcon 
                icon={faRefresh} 
                className={isRetrying ? 'animate-spin' : ''} 
              />
              <span>
                {isRetrying ? 'Checking Connection...' : 'Try Again'}
              </span>
            </button>

            {retryAttempts > 0 && (
              <p className="text-xs text-gray-500">
                Retry attempts: {retryAttempts}
              </p>
            )}
          </div>

          {/* Tips */}
          <div className="mt-8 pt-6 border-t border-gray-100">
            <h3 className="text-sm font-medium text-gray-700 mb-3">
              Quick Fixes:
            </h3>
            <ul className="text-xs text-gray-600 space-y-1">
              <li>• Check your WiFi connection</li>
              <li>• Try moving closer to your router</li>
              <li>• Restart your router or mobile data</li>
              <li>• Contact your internet provider if the issue persists</li>
            </ul>
          </div>
        </div>

        {/* Auto-retry indicator */}
        <div className="text-center mt-6">
          <p className="text-xs text-gray-500">
            <FontAwesomeIcon icon={faRefresh} className="animate-spin mr-1" />
            Auto-checking connection every 30 seconds
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfflineScreen;