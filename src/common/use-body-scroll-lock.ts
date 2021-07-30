import { useEffect } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

export const useBodyScrollLock = (
  locked: boolean,
  targetElement: HTMLElement | Element | null
) => {
  useEffect(() => {
    if (!targetElement) return;

    if (locked) {
      disableBodyScroll(targetElement);
    } else {
      enableBodyScroll(targetElement);
    }

    return () => enableBodyScroll(targetElement);
  }, [locked, targetElement]);
};
