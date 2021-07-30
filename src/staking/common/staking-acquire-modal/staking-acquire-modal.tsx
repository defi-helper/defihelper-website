import React from 'react';

import {
  Button,
  Link,
  SmallModal,
  Typography,
  Modal,
  COIN_ICONS,
  COIN_LINKS
} from 'src/common';
import { useStakingAcquireModalStyles } from './staking-acquire-modal.styles';

export type StakingAcquireModalProps = {
  open: boolean;
  onClose: () => void;
  tokenName?: string;
  depositToken?: string;
  token?: string[];
  tokenAddresses?: string;
};

export const StakingAcquireModal: React.VFC<StakingAcquireModalProps> = (
  props
) => {
  const classes = useStakingAcquireModalStyles();

  const poolName = props.tokenAddresses?.includes('uniswap')
    ? 'uniswap'
    : 'pancakeswap';

  return (
    <Modal open={props.open} onClose={props.onClose} className={classes.root}>
      <SmallModal>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Typography variant="h5">To acquire {props.tokenName}.</Typography>
            {props.token?.map((token, index) => {
              const Icon = COIN_ICONS.get(token);

              return (
                <Typography variant="h5" key={token}>
                  {index + 1}.{' '}
                  <Link
                    href={COIN_LINKS.get(token)}
                    target="_blank"
                    color="blue"
                  >
                    Buy
                  </Link>{' '}
                  {Icon && <Icon width="1em" height="1em" />} {token}
                </Typography>
              );
            })}
            <Typography variant="h5">
              3. Stake your {props.depositToken} to{' '}
              <Link href={props.tokenAddresses} target="_blank" color="blue">
                {poolName} liquidity pool
              </Link>
            </Typography>
            <Typography variant="h5">
              4. You will get LP tokens from {poolName} automatically right
              after stake
            </Typography>
            <Typography variant="h5">
              5. Then stake LP tokens and earn BAG
            </Typography>
          </div>
          <Button className={classes.button} as="a">
            Go to Liquidity Pool
          </Button>
        </div>
      </SmallModal>
    </Modal>
  );
};
