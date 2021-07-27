import React from 'react';
import { cutAccount } from '../cut-account';
import { isEthAddress } from '../is-eth-address';

import { Link } from '../link';
import { useNetworkConfig } from '../use-network-config';

export type LinkIfAccountProps = {
  children: string;
  title?: string;
};

export const LinkIfAccount: React.VFC<LinkIfAccountProps> = (props) => {
  const networkConfig = useNetworkConfig();

  return isEthAddress(props.children) ? (
    <Link
      target="_blank"
      color="blue"
      href={`${networkConfig.networkEtherscan}/address/${props.children}`}
    >
      {props.title ?? cutAccount(props.children)}
    </Link>
  ) : (
    <>{props.children}</>
  );
};
