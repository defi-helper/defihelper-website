import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash.length) {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash.length]);

  return null;
};
