import React, { useEffect, useMemo } from 'react';
import { useFormik } from 'formik';
import { useWeb3React } from '@web3-react/core';
import IERC20Abi from '@bondappetit/networks/abi/IERC20.json';
import type { AbiItem } from 'web3-utils';
import { useDebounce, useToggle } from 'react-use';
import networks from '@bondappetit/networks';

import type { IERC20 } from 'src/generate/IERC20';
import {
  Input,
  useNetworkConfig,
  BN,
  useDynamicContract,
  estimateGas,
  Typography,
  ButtonBase,
  Link,
  Skeleton,
  useApprove,
  reset,
  approveAll,
  Button,
  useChangeNetworkModal,
  setupBinance
} from 'src/common';
import type { Staking } from 'src/generate/Staking';
import { WalletButtonWithFallback } from 'src/wallets';
import { analytics } from 'src/analytics';
import { config } from 'src/config';
import { StakingStatuses } from 'src/staking-config';
import { StakingAcquireModal, StakingAttentionModal } from '../common';
import { useStakingLockFormStyles } from './staking-lock-form.styles';

export type StakingLockFormProps = {
  account?: string | null;
  tokenKey: string;
  tokenName?: string;
  tokenAddress?: string;
  token?: string[];
  stakingContract?: Staking | null;
  tokenDecimals?: number;
  onSubmit?: () => void;
  unstakeStart?: string;
  balanceOfToken: BN;
  loading: boolean;
  unstakingStartBlock?: BN;
  lockable?: boolean;
  depositToken?: string;
  chainId?: number;
  status?: StakingStatuses;
  stakingEndBlock?: BN;
  stakingCant?: boolean;
};

const UNISWAP_URL = 'https://app.uniswap.org/#/add/v2/';
const PANCAKESWAP_URL = 'https://exchange.pancakeswap.finance/#/add/';

export const StakingLockForm: React.FC<StakingLockFormProps> = (props) => {
  const classes = useStakingLockFormStyles();

  const { chainId } = useWeb3React();

  const [openChangeNetwork, closeChangeNetwork] = useChangeNetworkModal();

  useEffect(() => {
    if (config.CHAIN_IDS.includes(Number(chainId))) {
      closeChangeNetwork();
    }
  }, [chainId, closeChangeNetwork]);

  const [aquireOpen, aquireToggle] = useToggle(false);
  const [stakingAttentionOpen, toggleStakingAttention] = useToggle(false);

  const networkConfig = useNetworkConfig();

  const [approve, approvalNeeded] = useApprove();

  const currentChainId = Number(chainId ?? config.DEFAULT_CHAIN_ID);

  const getIERC20Contract = useDynamicContract<IERC20>(
    {
      abi: IERC20Abi.abi as AbiItem[]
    },
    props.chainId
  );

  const {
    account = null,
    tokenAddress,
    stakingContract,
    tokenDecimals
  } = props;

  const formik = useFormik({
    initialValues: {
      amount: ''
    },
    validateOnBlur: false,
    validateOnChange: false,

    validate: (formValues) => {
      const error: Partial<typeof formValues> = {};

      if (Number(formValues.amount) <= 0) {
        error.amount = 'Required';
      }

      if (props.stakingCant) {
        error.amount = 'Staking has ended';
      }

      if (new BN(props.balanceOfToken).isLessThan(formValues.amount)) {
        error.amount = `Looks like you don't have enough ${props.tokenName}, please check your wallet`;
      }

      return error;
    },

    onSubmit: async (formValues, { resetForm }) => {
      if (
        !account ||
        !stakingContract ||
        !tokenDecimals ||
        (props.stakingCant && props.lockable)
      )
        return;

      analytics.send('staking_click');

      const currentAssetContract = getIERC20Contract(tokenAddress, undefined);

      const formAmount = new BN(formValues.amount)
        .multipliedBy(new BN(10).pow(tokenDecimals))
        .toString(10);

      const options = {
        token: currentAssetContract,
        owner: account,
        spender: stakingContract.options.address,
        amount: formAmount
      };

      const approved = await approvalNeeded(options);

      if (approved.reset) {
        await reset(options);
      }
      if (approved.approve) {
        await approveAll(options);

        await approvalNeeded(options);
        return;
      }

      const stake = stakingContract.methods.stake(formAmount);
      await stake.send({
        from: account,
        gas: await estimateGas(stake, { from: account })
      });
      resetForm();
      analytics.send('staking_success');
      props.onSubmit?.();
    }
  });

  const tokenAddresses = useMemo(() => {
    const addresses = Object.values(
      config.CHAIN_BINANCE_IDS.includes(Number(props.chainId))
        ? networks.mainBSC.assets
        : networkConfig.assets
    )
      .filter(
        (asset) =>
          props.token?.includes(asset.symbol) ||
          asset.symbol === networks.mainBSC.assets.BNB.symbol
      )
      .map(({ address }) => {
        if (address === networks.mainBSC.assets.BNB.address) {
          return 'BNB';
        }

        return address;
      })
      .join('/');

    return `${
      config.CHAIN_BINANCE_IDS.includes(Number(props.chainId))
        ? PANCAKESWAP_URL
        : UNISWAP_URL
    }${addresses}`;
  }, [props.token, props.chainId, networkConfig.assets]);

  useDebounce(
    async () => {
      if (!account || !stakingContract || !tokenDecimals) return;

      const currentAssetContract = getIERC20Contract(tokenAddress, undefined);

      const formAmount = new BN(formik.values.amount)
        .multipliedBy(new BN(10).pow(tokenDecimals))
        .toString(10);

      await approvalNeeded({
        token: currentAssetContract,
        owner: account,
        spender: stakingContract.options.address,
        amount: formAmount
      });
    },
    200,
    [
      account,
      approvalNeeded,
      formik.values.amount,
      getIERC20Contract,
      stakingContract,
      tokenAddress,
      tokenDecimals,
      props.chainId
    ]
  );

  const addLiquidity = props.balanceOfToken.isLessThanOrEqualTo(0)
    ? aquireToggle
    : undefined;

  const buttonTitle =
    formik.errors.amount ||
    (props.balanceOfToken.isGreaterThan(0) ? (
      <>
        {(!approve.value?.approve && !approve.value?.reset) ||
        new BN(formik.values.amount || '0').isLessThanOrEqualTo(0)
          ? 'Stake'
          : 'Approve'}
      </>
    ) : (
      'Add liquidity'
    ));

  return (
    <>
      <form onSubmit={formik.handleSubmit} className={classes.root} noValidate>
        <div>
          <Typography variant="body1" align="center" className={classes.title}>
            Stake your{' '}
            <Link href={tokenAddresses} target="_blank" color="blue">
              {props.loading ? '...' : props.tokenName}
            </Link>
          </Typography>
          <Input
            type="number"
            value={formik.values.amount}
            name="amount"
            placeholder="0"
            disabled={formik.isSubmitting}
            key={approve.value?.allowance.toString(10)}
            onChange={formik.handleChange}
            error={Boolean(formik.errors.amount)}
            className={classes.input}
          />
          <Typography
            variant="body1"
            align="center"
            className={classes.max}
            component="div"
          >
            <ButtonBase
              className={classes.link}
              type="button"
              disabled={formik.isSubmitting}
              key={approve.value?.allowance.toString(10)}
              onClick={() =>
                formik.setFieldValue(
                  'amount',
                  props.balanceOfToken.toString(10)
                )
              }
            >
              {props.loading ? '...' : props.balanceOfToken.toString(10)} max
            </ButtonBase>
          </Typography>
          <Typography
            variant="body1"
            align="center"
            className={classes.uniswapLink}
          >
            How to{' '}
            <ButtonBase
              type="button"
              color="blue"
              onClick={aquireToggle}
              className={classes.link}
            >
              acquire
            </ButtonBase>
          </Typography>
        </div>
        {props.loading ? (
          <Skeleton className={classes.skeleton} />
        ) : (
          <>
            {account && props.chainId !== currentChainId && (
              <Button
                type="button"
                onClick={
                  chainId && config.CHAIN_IDS.includes(currentChainId)
                    ? setupBinance
                    : openChangeNetwork
                }
                className={classes.changeNetwork}
              >
                Change Network
              </Button>
            )}
            {props.unstakingStartBlock?.isGreaterThan(0) &&
              props.lockable &&
              props.chainId === currentChainId && (
                <>
                  {props.stakingCant ? (
                    <Typography variant="body2" align="center">
                      Staking has ended
                    </Typography>
                  ) : (
                    <WalletButtonWithFallback
                      type="button"
                      disabled={
                        formik.isSubmitting ||
                        props.status === StakingStatuses.archived
                      }
                      loading={formik.isSubmitting}
                      key={approve.value?.allowance.toString(10)}
                      onClick={
                        new BN(formik.values.amount || '0').isGreaterThan(0) &&
                        props.balanceOfToken.isGreaterThan(0)
                          ? toggleStakingAttention
                          : addLiquidity
                      }
                    >
                      {buttonTitle}
                    </WalletButtonWithFallback>
                  )}
                </>
              )}
            {((props.unstakingStartBlock?.isLessThanOrEqualTo(0) &&
              props.chainId === currentChainId) ||
              !account) &&
              !props.lockable && (
                <WalletButtonWithFallback
                  type={
                    new BN(formik.values.amount || '0').isGreaterThan(0) &&
                    props.balanceOfToken.isGreaterThan(0)
                      ? 'submit'
                      : 'button'
                  }
                  disabled={
                    formik.isSubmitting ||
                    props.status === StakingStatuses.archived
                  }
                  loading={formik.isSubmitting}
                  key={approve.value?.allowance.toString(10)}
                  onClick={
                    new BN(formik.values.amount || '0').isGreaterThan(0) &&
                    props.balanceOfToken.isGreaterThan(0)
                      ? undefined
                      : addLiquidity
                  }
                >
                  {buttonTitle}
                </WalletButtonWithFallback>
              )}
          </>
        )}
      </form>
      <StakingAcquireModal
        open={aquireOpen}
        onClose={aquireToggle}
        tokenName={
          config.CHAIN_BINANCE_IDS.includes(Number(props.chainId))
            ? 'Cake-LP'
            : props.tokenName
        }
        depositToken={props.depositToken}
        token={props.token}
        tokenAddresses={tokenAddresses}
      />
      <StakingAttentionModal
        date={props.unstakeStart}
        blockNumber={props.stakingEndBlock?.toString(10) ?? ''}
        open={stakingAttentionOpen}
        onClose={toggleStakingAttention}
        onStake={() => {
          toggleStakingAttention(false);
          formik.handleSubmit();
        }}
      />
    </>
  );
};
