import { BREAKPOINTS } from './breakpoints';
import { useEffect, useState } from 'react';

export const useMediaQuery = () => {
  const [state, setState] = useState({
    windowWidth: 0,
    isMobile: false,
    isTablet: false,
    isLaptop: false,
    isLaptopLarge: false,
    isDesktop: false,
  });

  const resizeHandler = () => {
    const currentWindowWidth = window.screen.width || window.innerWidth;

    setState({...state, windowWidth: currentWindowWidth});

    setState({
      ...state,
      windowWidth: currentWindowWidth,
      isMobile: currentWindowWidth < BREAKPOINTS.tablet,
      isTablet:
        currentWindowWidth >= BREAKPOINTS.tablet &&
        currentWindowWidth < BREAKPOINTS.laptop,
      isLaptop:
        currentWindowWidth >= BREAKPOINTS.laptop &&
        currentWindowWidth < BREAKPOINTS.laptopLarge,
      isLaptopLarge:
        currentWindowWidth >= BREAKPOINTS.laptopLarge &&
        currentWindowWidth < BREAKPOINTS.desktop,
      isDesktop: currentWindowWidth >= BREAKPOINTS.desktop,
    });
  };

  useEffect(() => {
    resizeHandler();
    window.addEventListener('resize', resizeHandler);
    return () => window.removeEventListener('resize', resizeHandler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return state;
};