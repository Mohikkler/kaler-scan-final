import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollToTopProps {
  behavior?: ScrollBehavior;
  top?: number;
  left?: number;
}

export const ScrollToTop = ({ 
  behavior = 'smooth', 
  top = 0, 
  left = 0 
}: ScrollToTopProps = {}) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top,
      left,
      behavior
    });
  }, [pathname, behavior, top, left]);

  return null; // This component doesn't render anything
};

// Utility function to scroll to top programmatically
export const scrollToTop = (behavior: ScrollBehavior = 'smooth') => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior
  });
}; 