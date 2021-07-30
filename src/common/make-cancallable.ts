const canceledPromise = new Error('Canceled');

export const makeCancelable = <T>(promise: Promise<T>) => {
  let hasCanceled = false;

  // eslint-disable-next-line no-new
  new Promise<T>((resolve, reject) => {
    promise.then(
      (val) => (hasCanceled ? reject(canceledPromise) : resolve(val)),
      (error) => (hasCanceled ? reject(canceledPromise) : reject(error))
    );
  });

  return () => {
    hasCanceled = true;
  };
};
