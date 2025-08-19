// src/components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      const container = document.getElementById('app-scroll-container');

      if (container && container.scrollHeight > container.clientHeight) {
        // Scroll the container
        container.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      } else {
        // Scroll the window
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
      }
    }
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;