export function throttle<T extends (...args: unknown[]) => void>(
  callback: T,
  wait: number,
  immediate = false
) {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let initialCall = true;

  return (...args: unknown[]) => {
    const callNow = immediate && initialCall;
    const next = () => {
      callback(...args);
      timeout = null;
    };

    if (callNow) {
      initialCall = false;
      next();
    }

    if (!timeout) {
      timeout = setTimeout(next, wait);
    }
  };
}
