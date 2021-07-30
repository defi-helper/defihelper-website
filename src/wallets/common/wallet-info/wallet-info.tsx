import React from 'react';
import Jazzicon, { jsNumberForAddress } from 'react-jazzicon';

import {
  ButtonBase,
  Typography,
  cutAccount,
  Link,
  useNetworkConfig
} from 'src/common';
import { useWalletInfoStyles } from './wallet-info.styles';

export type WalletInfoProps = {
  account?: string | null;
  onChange: () => void;
  errorMessage?: string;
};

export const WalletInfo: React.FC<WalletInfoProps> = (props) => {
  const classes = useWalletInfoStyles();
  const networkConfig = useNetworkConfig();

  return (
    <div className={classes.wrap}>
      <div className={classes.accountLogo}>
        {props.account && (
          <Jazzicon diameter={32} seed={jsNumberForAddress(props.account)} />
        )}
      </div>
      <div className={classes.content}>
        <Typography variant="h2" align="center" className={classes.account}>
          {cutAccount(props.account)}
        </Typography>
        <Typography variant="body1" align="center" className={classes.link}>
          <Link
            target="_blank"
            href={`${networkConfig.networkEtherscan}/address/${props.account}`}
          >
            View on Etherscan ↗
          </Link>
        </Typography>
      </div>
      <ButtonBase className={classes.button} onClick={props.onChange}>
        Change
      </ButtonBase>
      {props.errorMessage && (
        <Typography
          variant="body1"
          align="center"
          className={classes.errorMessage}
        >
          {props.errorMessage}
        </Typography>
      )}
    </div>
  );
};
