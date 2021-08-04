import { useWeb3React } from '@web3-react/core';
import { FormikProvider, useFormik } from 'formik';
import React from 'react';
import { useAsyncRetry, useDebounce, useToggle } from 'react-use';

import {
  approveAll,
  BN,
  estimateGas,
  InfoCardSuccess,
  Modal,
  reset,
  SmallModal,
  Typography,
  useApprove,
  useBalance,
  useGovernanceTokenContract,
  useIntervalIfHasAccount,
  useNetworkConfig
} from 'src/common';
import {
  BurgerSwapBridgeTransitTypeEnum,
  useAddBurgerSwapBridgeTransitMutation
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
} from 'src/graphql/_generated-hooks';
import {
  BridgeForm,
  useBridgeContract,
  burgerSwapApi,
  BurgerSwapTransit
} from '../common';

export type EthChainProps = {
  onEthTransit?: (transactionHash: string) => void;
  ethTransit?: string | null;
  onConfirm?: (transit: BurgerSwapTransit | null) => void;
  transactionsLength: number;
};

const transit: BurgerSwapTransit = {
  id: 0,
  transit_id: '',
  status: 3,
  createBlock: 0,
  amount: 'string',
  symbol: 'string',
  decimals: 18,
  name: 'string',
  from: 'string',
  token: 'BAG',
  sign: 'string',
  withdrawBlock: 0,
  version: 0,
  createTime: new Date().toISOString(),
  updateTime: new Date().toISOString()
};

export const EthChain: React.VFC<EthChainProps> = (props) => {
  const networkConfig = useNetworkConfig();

  const [successOpen, toggleSuccess] = useToggle(false);

  const { account = null } = useWeb3React();

  const [approve, approvalNeeded] = useApprove();

  const [addBurgerSwapTransit] = useAddBurgerSwapBridgeTransitMutation();

  const bridgeContract = useBridgeContract();
  const governanceContract = useGovernanceTokenContract();

  const getBalance = useBalance();

  const formik = useFormik({
    initialValues: {
      amount: ''
    },

    validate: async (formValues) => {
      const errors: Partial<typeof formValues> = {};

      const formValuesAmount = new BN(formValues.amount);

      if (formValuesAmount.isLessThanOrEqualTo(0)) {
        errors.amount = 'BAG is required';
      }

      const balanceOfGovToken = governanceContract
        ? await getBalance({
            tokenAddress: governanceContract.options.address
          })
        : null;

      if (
        balanceOfGovToken
          ?.div(new BN(10).pow(networkConfig.assets.Governance.decimals))
          .isLessThan(formValues.amount)
      ) {
        errors.amount = 'Not enough BAG';
      }

      return errors;
    },

    validateOnBlur: false,
    validateOnChange: false,

    onSubmit: async (formValues, { resetForm }) => {
      const amount = new BN(formValues.amount)
        .multipliedBy(new BN(10).pow(networkConfig.assets.Governance.decimals))
        .toString(10);

      if (!governanceContract || !account) return;

      const options = {
        token: governanceContract,
        owner: account,
        spender: bridgeContract.options.address,
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

      const transitForBSC = bridgeContract.methods.transitForBSC(
        governanceContract.options.address,
        amount
      );

      const newtransit: BurgerSwapTransit = {
        ...transit
      };

      await transitForBSC
        .send({
          from: account,
          gas: await estimateGas(transitForBSC, { from: account })
        })
        .on('transactionHash', async (transactionHash) => {
          props.onEthTransit?.(transactionHash);

          await addBurgerSwapTransit({
            variables: {
              input: {
                tx: transactionHash,
                owner: account,
                type: BurgerSwapBridgeTransitTypeEnum.EthTransit
              }
            }
          });

          newtransit.id = props.transactionsLength + 1;
          newtransit.transit_id = transactionHash;
          newtransit.amount = amount;

          props.onConfirm?.(newtransit);
        })
        .on('receipt', async (receipt) => {
          const response = await burgerSwapApi.ethTransit(
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
    if (!governanceContract) return;

    const bbagBalance = await getBalance({
      tokenAddress: governanceContract.options.address
    });

    return bbagBalance.div(
      new BN(10).pow(networkConfig.assets.Governance.decimals)
    );
  }, [governanceContract, networkConfig]);

  useDebounce(
    async () => {
      if (!account || !governanceContract) return;

      const amount = new BN(formik.values.amount)
        .multipliedBy(new BN(10).pow(networkConfig.assets.Governance.decimals))
        .toString(10);

      const options = {
        token: governanceContract,
        owner: account,
        spender: bridgeContract.options.address,
        amount
      };

      await approvalNeeded(options);
    },
    200,
    [
      approvalNeeded,
      networkConfig,
      account,
      formik.values.amount,
      governanceContract
    ]
  );

  useIntervalIfHasAccount(balance.retry);

  return (
    <div>
      <Typography variant="body1" align="center">
        Move your BAG to BSC
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
            token="Governance"
            tokenName="BAG"
            onClick={toggleSuccess}
            purchased={formik.values.amount}
          >
            You have successfully
            <br />
            transferred&nbsp;
            {formik.values.amount}&nbsp;BAG
          </InfoCardSuccess>
        </SmallModal>
      </Modal>
    </div>
  );
};
