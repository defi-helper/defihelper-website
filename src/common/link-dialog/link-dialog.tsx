import React from 'react';

import { ReactComponent as UniswapIcon } from 'src/assets/icons/protocols/uniswap.svg';
import { ReactComponent as WavesIcon } from 'src/assets/icons/protocols/waves.svg';
import { ReactComponent as CakeIcon } from 'src/assets/icons/protocols/cake.svg';
import { config } from 'src/config';
import { Button } from '../button';
import { Dialog } from '../dialog';
import * as styles from './link-dialog.css';
import { Typography } from '../typography';

export type LinkDialogProps = unknown;

export const LinkDialog: React.FC<LinkDialogProps> = () => {
  return (
    <Dialog className={styles.root}>
      {config.UNISWAP_URL && (
        <Button
          variant="outlined"
          className={styles.protocol}
          as="a"
          href={config.UNISWAP_URL}
          target="_blank"
        >
          <UniswapIcon className={styles.protocolLogo} /> UniSwap
        </Button>
      )}
      {config.WAVES_URL && (
        <Button
          variant="outlined"
          className={styles.protocol}
          as="a"
          href={config.WAVES_URL}
          target="_blank"
        >
          <WavesIcon className={styles.protocolLogo} />
          Waves
        </Button>
      )}
      {config.PANCAKESWAP_URL && (
        <Button
          variant="outlined"
          className={styles.protocol}
          as="a"
          href={config.PANCAKESWAP_URL}
          target="_blank"
        >
          <CakeIcon className={styles.protocolLogo} />
          PancakeSwap
        </Button>
      )}
      {[config.PANCAKESWAP_URL, config.UNISWAP_URL, config.WAVES_URL].some(
        (link) => link === undefined
      ) && (
        <Typography align="center" transform="uppercase" family="mono">
          The DFH token will be launched only after the protocol collects at
          least $10,000 in fees as proof of concept
        </Typography>
      )}
    </Dialog>
  );
};
