import { DependencyList, useCallback, useEffect, useRef } from 'react';
import { useAsyncRetry } from 'react-use';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { DocumentNode } from 'urql';

type Body = {
  query: string | DocumentNode;
  init?: {
    // eslint-disable-next-line @typescript-eslint/ban-types
    headers: object;
  };
  variables?: unknown;
};

export const useQuery = <T = unknown>(
  url: string,
  body: Body,
  deps: DependencyList = []
) => {
  const state = useAsyncRetry(async () => {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
        ...(body.init?.headers ?? {})
      }
    });

    const result = await response.json();

    return result as T;
  }, deps);

  return state;
};

export const useLazyQuery = <T = unknown>(url: string, body: Body) => {
  const bodyRef = useRef(body);

  useEffect(() => {
    bodyRef.current = body;
  }, [body]);

  const get = useCallback(
    async (variables: unknown, options?: Omit<Body, 'query'>) => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify({ ...bodyRef.current, variables }),
        headers: {
          ...options?.init?.headers,
          'Content-Type': 'application/json'
        }
      });

      const result = await response.json();

      return result as T;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [url]
  );

  return get;
};
