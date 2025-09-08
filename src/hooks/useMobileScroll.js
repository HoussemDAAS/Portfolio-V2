import { useEffect } from 'react';

/**
 * Custom hook to improve mobile scrolling experience
 * Adds CSS-based improvements for mobile scroll behavior
 */
const useMobileScroll = () => {
  useEffect(() => {
    const isMobile = window.innerWidth < 812;

    if (!isMobile) {
      return undefined;
    }

    // Add mobile-specific CSS improvements
    const style = document.createElement('style');
    style.textContent = `
      @media (max-width: 812px) {
        body {
          -webkit-overflow-scrolling: touch !important;
          overscroll-behavior: contain !important;
          touch-action: pan-y !important;
        }
        
        * {
          -webkit-tap-highlight-color: transparent;
        }
        
        /* Reduce momentum scrolling speed */
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
      }
    `;

    document.head.appendChild(style);

    return () => {
      if (document.head.contains(style)) {
        document.head.removeChild(style);
      }
    };
  }, []);
};

export default useMobileScroll;
