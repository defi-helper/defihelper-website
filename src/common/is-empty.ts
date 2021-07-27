const isString = (obj: unknown): obj is string => {
  return typeof obj === 'string';
};

// eslint-disable-next-line @typescript-eslint/ban-types
const isObject = (obj: unknown): obj is object => {
  return typeof obj === 'object' && obj !== null;
};

export const isEmpty = (obj: unknown): boolean => {
  const isNullOrUndefined = obj === null || obj === undefined;

  return (
    isNullOrUndefined ||
    ((isString(obj) || Array.isArray(obj)) && obj.length === 0) ||
    (isObject(obj) && Object.keys(obj).length === 0)
  );
};
