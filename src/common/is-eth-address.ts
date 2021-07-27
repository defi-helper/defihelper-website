export const isEthAddress = (address: string) =>
  /^0x[a-fA-F0-9]{40}$/g.test(address);
