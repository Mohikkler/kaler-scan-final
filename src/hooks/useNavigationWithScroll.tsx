import { useNavigate } from 'react-router-dom';

export const useNavigationWithScroll = () => {
  const navigate = useNavigate();

  const navigateWithScroll = (to: string, options?: { replace?: boolean; state?: any }) => {
    // Navigate to the new route
    navigate(to, options);
    
    // Scroll to top after a small delay to ensure the new page has loaded
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
  };

  return { navigate, navigateWithScroll };
}; 