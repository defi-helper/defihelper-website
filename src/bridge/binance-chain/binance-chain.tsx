import { useWeb3React } from '@web3-react/core';
import { FormikProvider, useFormik } from 'formik';
import React from 'react';
import { useAsyncRetry, useDebounce, useToggle } from 'react-use';

import {
  BN,
  Typography,
  useApprove,
  reset,
  approveAll,
  useBalance,
  useIntervalIfHasAccount,
  InfoCardSuccess,
  SmallModal,
  Modal
} from 'src/common';
import {
  BurgerSwapBridgeTransitTypeEnum,
  useAddBurgerSwapBridgeTransitMutation
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'src/graphql/_generated-hooks';
import {
  BridgeForm,
  useTransitContract,
  useBBagContract,
  burgerSwapApi,
  BurgerSwapPayback
} from '../common';

const GAS = 120000;

export type BinanceChainProps = {
  onBscPayback?: (transactionHash: string) => void;
  bscPayback?: null | string;
  onConfirm?: (payback: BurgerSwapPayback | null) => void;
  transactionsLength: number;
};

const payback: BurgerSwapPayback = {
  id: 0,
  payback_id: '',
  status: 3,
  createBlock: 0,
  amount: '',
  from: '',
  token: 'bBAG',
  sign: '',
  withdrawBlock: 0,
  version: 0,
  createTime: new Date().toISOString(),
  updateTime: new Date().toISOString()
};

export const BinanceChain: React.VFC<BinanceChainProps> = (props) => {
  const { account = null, chainId } = useWeb3React();

  const transitContract = useTransitContract();
  const bbagContract = useBBagContract();

  const [addBurgerSwapTransit] = useAddBurgerSwapBridgeTransitMutation();

  const [successOpen, toggleSuccess] = useToggle(false);

  const getBalance = useBalance(chainId);

  const [approve, approvalNeeded] = useApprove();

  const decimals = useAsyncRetry(bbagContract.methods.decimals().call, [
    bbagContract
  ]);

  const formik = useFormik({
    initialValues: {
      amount: ''
    },

    validate: async (formValues) => {
      const errors: Partial<typeof formValues> = {};

      const formValuesAmount = new BN(formValues.amount);

      if (formValuesAmount.isLessThanOrEqualTo(0)) {
        errors.amount = 'bBAG is required';
      }

      const balanceOfGovToken = await getBalance({
        tokenAddress: bbagContract.options.address
      });

      if (
        decimals.value &&
        balanceOfGovToken
          .div(new BN(10).pow(decimals.value))
          .isLessThan(formValues.amount)
      ) {
        errors.amount = 'Not enough bBAG';
      }

      return errors;
    },

    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (formValues, { resetForm }) => {
      if (!decimals.value) return;

      const amount = new BN(formValues.amount)
        .multipliedBy(new BN(10).pow(decimals.value))
        .toString(10);

      if (!account) return;

      const options = {
        token: bbagContract,
        owner: account,
        spender: transitContract.options.address,
        amount
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

      const paybackTransit = transitContract.methods.paybackTransit(
        bbagContract.options.address,
        amount
      );

      const newPayback: BurgerSwapPayback = {
        ...payback
      };

      await paybackTransit
        .send({
          from: account,
          gas: GAS,
          value: `5${'0'.repeat(16)}`
        })
        .on('transactionHash', async (transactionHash) => {
          props.onBscPayback?.(transactionHash);

          await addBurgerSwapTransit({
            variables: {
              input: {
                tx: transactionHash,
                owner: account,
                type: BurgerSwapBridgeTransitTypeEnum.BscWithdraw
              }
            }
          });

          newPayback.id = props.transactionsLength + 1;
          newPayback.payback_id = transactionHash;
          newPayback.amount = amount;

          props.onConfirm?.(newPayback);
        })
        .on('receipt', async (receipt) => {
          const response = await burgerSwapApi.bscPayback(
            receipt.transactionHash
          );

          props.onConfirm?.(response.data);
          toggleSuccess(true);
          resetForm();

          return Promise.resolve();
        });
    }
  });

  const balance = useAsyncRetry(async () => {
    if (!decimals.value) return;

    const bbagBalance = await getBalance({
      tokenAddress: bbagContract.options.address
    });

    return bbagBalance.div(new BN(10).pow(decimals.value));
  }, [bbagContract, decimals.value, chainId]);

  useIntervalIfHasAccount(balance.retry);

  useDebounce(
    async () => {
      if (!decimals.value || !account) return;

      const amount = new BN(formik.values.amount)
        .multipliedBy(new BN(10).pow(decimals.value))
        .toString(10);

      const options = {
        token: bbagContract,
        owner: account,
        spender: transitContract.options.address,
        amount
      };

      await approvalNeeded(options);
    },
    200,
    [approvalNeeded, account, formik.values.amount]
  );

  return (
    <div>
      <Typography variant="body1" align="center">
        Move your bBAG to Ethereum
      </Typography>
      <FormikProvider value={formik}>
        <BridgeForm
          balance={balance.value}
          approve={approve.value?.approve}
          reset={approve.value?.reset}
        />
      </FormikProvider>
      <Modal open={successOpen} onClose={toggleSuccess}>
        <SmallModal>
          <InfoCardSuccess
            token="bBAG"
            tokenName="bBAG"
            onClick={toggleSuccess}
            purchased={formik.values.amount}
          >
            You have successfully
            <br />
            transferred&nbsp;
            {formik.values.amount}&nbsp;bBAG
          </InfoCardSuccess>
        </SmallModal>
      </Modal>
    </div>
  );
};
