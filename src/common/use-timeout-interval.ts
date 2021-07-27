/* eslint-disable @typescript-eslint/ban-types */
import { useEffect, useRef } from 'react';

export const useTimeoutInterval = <T>(
  callback: Function,
  delay?: number,
  deps?: T
) => {
  const ref = useRef<number>();
  const savedCallback = useRef<Function>(() => {});

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    const handler = () => {
      savedCallback.current();

      ref.current = setTimeout(handler, delay);
    };

    handler();

    return () => {
      clearTimeout(ref.current);
    };
  }, [delay, deps]);
};
