import { useWeb3React } from '@web3-react/core';
import clsx from 'clsx';
import React, { forwardRef, useMemo } from 'react';

import {
  Button,
  ButtonBase,
  dateUtils,
  humanizeNumeral,
  Plate,
  Typography
} from 'src/common';
import { useStakingListData } from 'src/staking';
import { useWalletInfo } from './use-wallet-info';
import { WalletProfileRow } from './wallet-profile-row';
import { useWalletProfileStyles } from './wallet-profile.styles';

export type WalletProfileDropdownProps = {
  className?: string;
  onBuy?: () => void;
  onConnect?: () => void;
};

export const WalletProfileDropdown = forwardRef<
  HTMLDivElement,
  WalletProfileDropdownProps
>((props, ref) => {
  const { state: walletInfo, governanceInUSDC } = useWalletInfo();

  const classes = useWalletProfileStyles();

  const { account = null } = useWeb3React();

  const { rewardSum } = useStakingListData();

  const loading = !rewardSum || walletInfo.loading;

  const totalInBag = useMemo(() => {
    if (!rewardSum?.reward || !walletInfo.value) return '0';

    return rewardSum.reward
      .plus(walletInfo.value.unstaked.inBAG)
      .plus(walletInfo.value.locked.inBAG);
  }, [rewardSum, walletInfo.value]);

  const totalInUSDC = useMemo(() => {
    if (!rewardSum?.rewardInUSDC || !walletInfo.value) return '0';

    return rewardSum.rewardInUSDC
      .plus(walletInfo.value.unstaked.inUSDC)
      .plus(walletInfo.value.locked.inUSDC);
  }, [rewardSum, walletInfo.value]);

  return (
    <Plate
      className={clsx(classes.plate, classes.row, props.className)}
      ref={ref}
    >
      <div className={clsx(classes.header, classes.row)}>
        <Typography variant="body1">
          {loading ? '...' : `1 BAG = $${humanizeNumeral(governanceInUSDC)}`}
        </Typography>

        <Typography variant="body1">
          {loading ? (
            '...'
          ) : (
            <ButtonBase className={classes.buy} onClick={props.onBuy}>
              Buy
            </ButtonBase>
          )}
        </Typography>
      </div>
      {(account || loading) && (
        <>
          <WalletProfileRow
            className={clsx(classes.row, classes.mb8)}
            title="Claimable"
            valueInBag={humanizeNumeral(rewardSum?.reward)}
            valueInUSD={humanizeNumeral(rewardSum?.rewardInUSDC)}
            loading={loading}
          />
          <WalletProfileRow
            className={clsx(classes.row, classes.mb8)}
            title="Unstacked"
            valueInBag={humanizeNumeral(walletInfo.value?.unstaked.inBAG)}
            valueInUSD={humanizeNumeral(walletInfo.value?.unstaked.inUSDC)}
            loading={loading}
          />
          {dateUtils.isAfterNow(
            dateUtils.formatUnix(
              walletInfo.value?.locked.date ?? '',
              'YYYY-MM-DD'
            )
          ) && (
            <WalletProfileRow
              className={classes.row}
              title={`Locked till ${dateUtils.formatUnix(
                walletInfo.value?.locked.date ?? '',
                'DD.MM.YYYY'
              )}`}
              valueInBag={humanizeNumeral(walletInfo.value?.locked.inBAG)}
              valueInUSD={humanizeNumeral(walletInfo.value?.locked.inUSDC)}
              loading={loading}
            />
          )}

          <WalletProfileRow
            className={clsx(classes.row, classes.footer)}
            title="Total"
            valueInBag={humanizeNumeral(totalInBag)}
            valueInUSD={humanizeNumeral(totalInUSDC)}
            loading={loading}
          />
        </>
      )}
      {!account && !loading && (
        <>
          <Typography variant="body1">
            Connect your wallet to see the stats
          </Typography>
          <Button className={classes.button} onClick={props.onConnect}>
            Connect wallet
          </Button>
        </>
      )}
    </Plate>
  );
});

WalletProfileDropdown.displayName = 'WalletProfileDropdown';
