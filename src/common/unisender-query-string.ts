export const unisenderQueryString = <T>(params: T) => {
  return Object.entries(params)
    .flatMap(([key, value]) => {
      return `fields[${key}]=${value}`;
    })
    .join('&');
};
