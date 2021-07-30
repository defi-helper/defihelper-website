import { useEffect, useRef } from 'react';

export const useScrollIntoView = (target: string) => {
  const targetElement = useRef<Element | null>(null);

  useEffect(() => {
    targetElement.current = document.querySelector(target);
  }, [target]);

  const handleScrollIntoView = () => {
    targetElement.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return handleScrollIntoView;
};
