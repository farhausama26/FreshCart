/**
 * NetworkStatusIndicator - Small component to show current network status
 * Can be placed in the header/footer for development/testing
 */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi } from '@fortawesome/free-solid-svg-icons';
import { useOnlineStatus } from '../../hooks';

const NetworkStatusIndicator = ({ className = '' }) => {
  const isOnline = useOnlineStatus();

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      <FontAwesomeIcon 
        icon={isOnline ? faWifi : faWifiSlash} 
        className={`text-sm ${isOnline ? 'text-green-500' : 'text-red-500'}`}
      />
      <span className={`text-xs font-medium ${isOnline ? 'text-green-600' : 'text-red-600'}`}>
        {isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
};

export default NetworkStatusIndicator;
