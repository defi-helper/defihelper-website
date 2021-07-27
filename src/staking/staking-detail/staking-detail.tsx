import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import clsx from 'clsx';
import { useToggle, useAsyncFn, useAsyncRetry } from 'react-use';

import { MainLayout } from 'src/layouts';
import {
  Plate,
  Typography,
  PageWrapper,
  useBalance,
  Head,
  BN,
  humanizeNumeral,
  Skeleton
} from 'src/common';
import {
  StakingHeader,
  useStakingUnlock,
  useCanUnStaking,
  useStakingListData,
  StakingEmpty,
  useStakingContracts,
  useStakingUnstakeAttentionModal,
  useCanStaking
} from 'src/staking/common';
import { useStakingConfig } from 'src/staking-config';
import { WalletButtonWithFallback } from 'src/wallets';
import { StakingLockForm } from '../staking-lock-form';
import { useStakingDetailStyles } from './staking-detail.styles';

export const StakingDetail: React.FC = () => {
  const classes = useStakingDetailStyles();
  const params = useParams<{ tokenId: string }>();
  const { account = null, chainId } = useWeb3React<Web3>();
  const [canUnstake, toggleCanUnstake] = useToggle(false);

  const { stakingConfig } = useStakingConfig();

  const currentStakingToken = stakingConfig[params.tokenId.toLowerCase()];

  const { stakingList, rewardSum, stakingAddresses } = useStakingListData(
    params.tokenId
  );

  const stakingItem = useMemo(() => stakingList?.[0], [stakingList]);

  const getBalance = useBalance(stakingItem?.chainId);

  const getStakingContract = useStakingContracts(stakingItem?.chainId);

  const stakingContract = useMemo(
    () =>
      typeof stakingItem?.chainId === 'number'
        ? getStakingContract(stakingItem.contractName, stakingItem.chainId)
        : null,
    [getStakingContract, stakingItem]
  );

  const unlock = useStakingUnlock(stakingContract);

  const unstake = useCanUnStaking(stakingContract);

  const staking = useCanStaking(stakingContract);

  const stakingBalanceIsEmpty = useMemo(
    () => Boolean(stakingItem?.amount.isZero()),
    [stakingItem]
  );

  const [unstakeState, handleUnstake] = useAsyncFn(async () => {
    if (stakingBalanceIsEmpty) return;

    await unlock();

    stakingAddresses.retry();
  }, [unlock, stakingAddresses.retry, stakingBalanceIsEmpty]);

  const [claimState, handleClaim] = useAsyncFn(async () => {
    if (stakingBalanceIsEmpty) return;

    await unlock(false);

    stakingAddresses.retry();
  }, [unlock, stakingBalanceIsEmpty]);

  const balanceOfToken = useAsyncRetry(async () => {
    if (!stakingItem) return;

    const balanceOfTokenResult = await getBalance({
      tokenAddress: stakingItem.tokenAddress
    });

    const balance = balanceOfTokenResult.div(
      new BN(10).pow(stakingItem.decimals)
    );

    return balance.isNaN() ? new BN(0) : balance;
  }, [getBalance, stakingItem]);

  const { tokenName } = currentStakingToken ?? {};

  const poolShare = new BN(stakingItem?.amount ?? '0')
    .div(stakingItem?.totalSupplyFloat ?? '1')
    .multipliedBy(100);

  const loading = !stakingItem;

  const depositToken = useMemo(
    () => stakingItem?.token?.join('_'),
    [stakingItem]
  );

  const showUnstakeButton =
    unstake.value?.unstakingStartBlock.eq(0) ||
    unstake.value?.currentBlockNumber.isGreaterThan(
      unstake.value?.unstakingStartBlock
    );

  const [openUnstake] = useStakingUnstakeAttentionModal(handleUnstake);

  const handleOpenUnstake = () => {
    if (stakingBalanceIsEmpty) return;

    if (!unstake.value?.can && stakingItem?.lockable) {
      toggleCanUnstake(true);

      return;
    }
    toggleCanUnstake(false);

    openUnstake();
  };

  return (
    <>
      <Head title={`Staking ${tokenName}`} />
      <MainLayout>
        <PageWrapper className={classes.staking}>
          <StakingHeader
            depositToken={depositToken}
            lockable={stakingItem?.lockable}
            tokenKey={params.tokenId}
            token={stakingItem?.token}
            APY={stakingItem?.apy}
            totalValueLocked={stakingItem?.totalValueLocked}
            className={classes.header}
            poolRate={stakingItem?.poolRate}
            loading={loading}
            earnToken={stakingItem?.earnToken}
            status={stakingItem?.status}
          />
          <div className={classes.row}>
            <Plate className={classes.card}>
              <StakingLockForm
                account={account}
                token={stakingItem?.token}
                tokenName={tokenName}
                tokenKey={params.tokenId}
                tokenAddress={stakingItem?.tokenAddress}
                stakingContract={stakingContract}
                tokenDecimals={stakingItem?.decimals}
                unstakeStart={unstake.value?.date}
                unstakingStartBlock={unstake.value?.unstakingStartBlock}
                lockable={stakingItem?.lockable}
                onSubmit={stakingAddresses.retry}
                balanceOfToken={balanceOfToken.value ?? new BN(0)}
                loading={loading}
                depositToken={depositToken}
                chainId={stakingItem?.chainId}
                status={stakingItem?.status}
                stakingEndBlock={staking.value?.stakingEndBlock}
                stakingCant={staking.value?.cant}
              />
            </Plate>
            <Plate className={clsx(classes.card, classes.cardFlex)}>
              <div className={classes.stakingBalance}>
                <div className={classes.unstakeAndClaim}>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.cardTitle}
                  >
                    You staked {loading ? '...' : <>{tokenName}</>}
                  </Typography>
                  <Typography variant="h2" align="center">
                    {humanizeNumeral(stakingItem?.amount, 5)}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.usd}
                  >
                    {loading ? (
                      '...'
                    ) : (
                      <>{humanizeNumeral(poolShare)}% Pool share</>
                    )}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={clsx(classes.usd, classes.marginBottom)}
                  >
                    {loading ? (
                      '...'
                    ) : (
                      <>${humanizeNumeral(stakingItem?.amountInUSDC)}</>
                    )}
                  </Typography>
                  {loading ? (
                    <Skeleton className={classes.attention} />
                  ) : (
                    <>
                      {!showUnstakeButton &&
                        account &&
                        stakingItem?.chainId === chainId &&
                        unstake.value && (
                          <Typography
                            variant="body2"
                            align="center"
                            className={classes.attention}
                          >
                            Unstaking will start at{' '}
                            {unstake.value?.unstakingStartBlock.toString(10)}{' '}
                            block
                            <br />({unstake.value?.date})
                          </Typography>
                        )}
                      {stakingItem?.chainId === chainId ? (
                        <>
                          {showUnstakeButton && account && (
                            <WalletButtonWithFallback
                              onClick={handleOpenUnstake}
                              className={classes.unlock}
                              loading={unstakeState.loading}
                              disabled={unstakeState.loading}
                            >
                              {canUnstake ? 'Unstaking not started' : 'Unstake'}
                            </WalletButtonWithFallback>
                          )}
                        </>
                      ) : (
                        <StakingEmpty className={classes.empty} />
                      )}
                    </>
                  )}
                </div>
                <div className={classes.unstakeAndClaim}>
                  <Typography
                    variant="body1"
                    align="center"
                    className={classes.cardTitle}
                  >
                    You earned {stakingItem?.earnToken}
                  </Typography>
                  <Typography variant="h2" align="center">
                    {loading ? '...' : humanizeNumeral(rewardSum?.reward)}
                  </Typography>
                  <Typography
                    variant="body1"
                    align="center"
                    className={clsx(classes.usd, classes.marginBottom2)}
                  >
                    {loading ? (
                      '...'
                    ) : (
                      <>${humanizeNumeral(rewardSum?.rewardInUSDC)}</>
                    )}
                  </Typography>
                  {loading ? (
                    <Skeleton className={classes.attention} />
                  ) : (
                    <>
                      {account && stakingItem?.chainId === chainId ? (
                        <WalletButtonWithFallback
                          onClick={handleClaim}
                          className={classes.unlock}
                          loading={claimState.loading}
                          disabled={claimState.loading}
                        >
                          Claim
                        </WalletButtonWithFallback>
                      ) : (
                        <StakingEmpty className={classes.empty} />
                      )}
                    </>
                  )}
                </div>
              </div>
            </Plate>
          </div>
        </PageWrapper>
      </MainLayout>
    </>
  );
};
