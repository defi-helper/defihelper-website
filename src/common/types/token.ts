import { development } from '@bondappetit/networks';

export type Asset = typeof development.assets[number] & { balance: string };

export type Token = {
  name: string;
  address: string;
  price: string;
  decimals: number;
};
