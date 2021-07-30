export const isEmail = (email: string) =>
  /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g.test(email);
