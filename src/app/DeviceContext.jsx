import { createContext, useContext, useEffect, useState } from 'react';

const DeviceContext = createContext({ isMobile: false });

export function DeviceProvider({ children }) {
  function checkIsMobile() {
    const isMobile = /Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    const isSmallScreen = window.innerWidth < 600;
    // console.log('isMobile:', isMobile );
    // console.log('isSmallScreen:', isSmallScreen );
    return isMobile || isSmallScreen;
  }

  const [isMobile, setIsMobile] = useState(checkIsMobile());

  useEffect(() => {
    const handleResize = () => setIsMobile(checkIsMobile());
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <DeviceContext.Provider value={{ isMobile }}>
      {children}
    </DeviceContext.Provider>
  );
}

export function useDevice() {
  return useContext(DeviceContext);
}
