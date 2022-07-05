/* eslint-disable */

/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly PUBLIC_URL: string;
  }
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
  const src: string;
  export default src;
}
declare module '*.pdf' {
  const src: string;
  export default src;
}

declare module '*.md' {
  const src: string;
  export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & { title?: string }
  >;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module 'react-jazzicon' {
  import * as React from 'react';

  type Props = {
    diameter?: number;
    paperStyles?: object;
    seed?: number;
    svgStyles?: object;
  };

  const Jazzicon: React.FunctionComponent<Props>;

  export function jsNumberForAddress(address: string): number;

  export default Jazzicon;
}

type EthereumEventMap = {
  connect: unknown;
  chainChanged: string | number;
  accountsChanged: string[];
  networkChanged: string | number;
};
interface Window {
  ethereum?: {
    isMetaMask?: true;
    isTrust?: true;
    on?: <K extends keyof EthereumEventMap>(
      type: K,
      listener: (ev: EthereumEventMap[K]) => void
    ) => void;
    removeListener?: <K extends keyof EthereumEventMap>(
      type: K,
      listener: (ev: EthereumEventMap[K]) => void
    ) => void;
    request?: (arg: object) => Promise<void>;
  };
  dataLayer?: string[];
  amplitude?: { logEvent: (name: string, params: Object) => void };
  ym?: (id: number, type: string, event: string) => void;
}
