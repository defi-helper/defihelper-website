import { RefObject, useEffect, useState } from 'react';
import { throttle } from './throttle';

export const useUpButton = (ref: RefObject<HTMLElement | null>) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleUp = throttle(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 200);

    const button = ref.current;

    button?.addEventListener('click', handleUp);

    return () => {
      button?.removeEventListener('click', handleUp);
    };
  });

  return visible;
};
