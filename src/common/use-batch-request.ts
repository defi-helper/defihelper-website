import { Extension } from 'web3-core';
import { useMemo } from 'react';
import Web3 from 'web3';

import { NonPayableTx } from 'src/generate/types';
import { useLibrary } from './use-library';

const isCallable = (
  call: unknown
): call is {
  (): Promise<unknown>;
  request: (...args: unknown[]) => Extension['methods'][number];
} => {
  return typeof call === 'function' && call !== null && 'request' in call;
};

type Batch<T> = T extends (tx?: NonPayableTx | undefined) => Promise<infer R>
  ? R
  : T;

const makeBatchRequest =
  (library: Web3) =>
  <T extends ((tx?: NonPayableTx | undefined) => Promise<unknown>) | unknown>(
    calls: T[],
    callFrom?: string | null
  ): Promise<Batch<T>[]> => {
    if (window.ethereum?.isTrust) {
      return Promise.all(
        calls.map((call) => (isCallable(call) ? call() : Promise.resolve(call)))
      ) as Promise<Batch<T>[]>;
    }

    const batch = new library.BatchRequest();

    const promises = calls.map((call) => {
      if (!isCallable(call)) return Promise.resolve(call);

      return new Promise((resolve, reject) => {
        const request = call.request(
          { from: callFrom },
          (error: Error, data: unknown) => {
            if (error) {
              reject(error);
            } else {
              resolve(data);
            }
          }
        );
        batch.add(request);
      });
    });

    batch.execute();

    return Promise.all(promises) as Promise<Batch<T>[]>;
  };

export const useBatchRequest = () => {
  const library = useLibrary();

  return useMemo(() => makeBatchRequest(library), [library]);
};
