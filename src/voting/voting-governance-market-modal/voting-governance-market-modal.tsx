import { useFormik, FormikContext } from 'formik';
import React, { useCallback, useState } from 'react';
import { useDebounce, useToggle } from 'react-use';
import type { IERC20 } from 'src/generate/IERC20';
import IERC20Abi from '@bondappetit/networks/abi/IERC20.json';
import type { AbiItem } from 'web3-utils';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';

import { WalletButtonWithFallback } from 'src/wallets';
import {
  useNetworkConfig,
  useBalance,
  useDynamicContract,
  FormModal,
  Modal,
  SmallModal,
  InfoCardFailure,
  InfoCardLoader,
  InfoCardSuccess,
  useMarketContract,
  useApprove,
  estimateGas,
  BN,
  approveAll,
  reset,
  useIntervalIfHasAccount
} from 'src/common';
import { useGovernanceCost } from 'src/staking';
import { useGovernanceTokens } from './use-governance-tokens';

export type VotingGovernanceMarketModalProps = {
  open: boolean;
  onClose: () => void;
  tokenName: string;
};

export const VotingGovernanceMarketModal: React.FC<VotingGovernanceMarketModalProps> =
  (props) => {
    const [balance, setBalance] = useState('0');
    const [result, setResult] = useState<BN>(new BN(0));
    const tokens = useGovernanceTokens();
    const { account = null } = useWeb3React<Web3>();
    const marketContract = useMarketContract();
    const network = useNetworkConfig();
    const getBalance = useBalance();
    const getContract = useDynamicContract<IERC20>({
      abi: IERC20Abi.abi as AbiItem[]
    });

    const [successOpen, successToggle] = useToggle(false);
    const [failureOpen, failureToggle] = useToggle(false);
    const [transactionOpen, transactionToggle] = useToggle(false);

    const governanceInUSDC = useGovernanceCost();

    const [approve, approvalNeeded] = useApprove();

    const formik = useFormik({
      initialValues: {
        currency: 'USDC',
        amount: '',
        payment: ''
      },

      validateOnBlur: false,
      validateOnChange: false,

      validate: async (formValues) => {
        const error: Partial<typeof formValues> = {};

        if (!formValues.currency) {
          error.currency = 'Required';
          return error;
        }

        if (Number(formValues.amount) <= 0) {
          error.amount = 'Required';
          return error;
        }

        const balanceOfToken = new BN(balance);

        if (balanceOfToken.isLessThan(formValues.amount)) {
          error.amount = `Not enough ${formValues.currency}`;
        }

        return error;
      },

      onSubmit: async (formValues) => {
        const currentToken = network.assets[formValues.currency];

        if (!currentToken || !account || !marketContract) return;

        const currentContract = getContract(currentToken.address);

        const formInvest = new BN(formValues.amount)
          .multipliedBy(new BN(10).pow(currentToken.decimals))
          .toString(10);

        try {
          if (currentToken.name === 'ETH') {
            const buyFromETH = marketContract.methods.buyFromETH();

            await buyFromETH.send({
              from: account,
              value: formInvest,
              gas: await estimateGas(buyFromETH, {
                from: account,
                value: formInvest
              })
            });
          } else {
            if (!currentContract) return;

            const options = {
              token: currentContract,
              owner: account,
              spender: marketContract.options.address,
              amount: formInvest
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
            window.onbeforeunload = () => 'wait please transaction in progress';

            const buy = marketContract.methods.buy(
              currentContract.options.address,
              formInvest
            );

            await buy.send({
              from: account,
              gas: await estimateGas(buy, { from: account })
            });

            failureToggle(false);
            successToggle(true);
          }
        } catch {
          failureToggle(true);
        } finally {
          window.onbeforeunload = () => null;
          transactionToggle(false);
        }
      }
    });

    useDebounce(
      () => {
        if (!formik.values.amount) {
          setResult(new BN(0));
          return;
        }

        setResult(new BN(formik.values.amount));
      },
      100,
      [formik.values.amount, formik.values.currency, tokens]
    );

    useIntervalIfHasAccount(async () => {
      const balanceOfToken = await getBalance({
        tokenAddress: network.assets.Governance.address,
        tokenName: network.assets.Governance.name
      });

      setBalance(
        balanceOfToken
          .div(new BN(10).pow(network.assets.Governance.decimals))
          .toString(10)
      );
    });

    const handleSuccessClose = useCallback(() => {
      successToggle(false);
      formik.resetForm();
      setResult(new BN(0));
    }, [successToggle, formik]);

    const handleClose = useCallback(() => {
      props.onClose?.();
      formik.resetForm();
    }, [formik, props]);

    useDebounce(
      () => {
        const currentToken = network.assets[formik.values.currency];

        if (
          !currentToken ||
          !account ||
          !marketContract ||
          currentToken.symbol === 'ETH'
        )
          return;

        const currentContract = getContract(currentToken.address);

        const formInvest = new BN(formik.values.amount)
          .multipliedBy(new BN(10).pow(currentToken.decimals))
          .toString(10);

        if (!currentContract) return;

        const handler = async () => {
          await approvalNeeded({
            token: currentContract,
            owner: account,
            spender: marketContract.options.address,
            amount: formInvest
          });
        };

        handler();
      },
      200,
      [
        account,
        formik.values.amount,
        formik.values.currency,
        getContract,
        approvalNeeded,
        network.assets,
        marketContract
      ]
    );

    return (
      <>
        <FormikContext.Provider value={formik}>
          <FormModal
            onClose={handleClose}
            open={props.open}
            tokenName={props.tokenName}
            tokens={tokens}
            balance={account ? balance : undefined}
            tokenCost={governanceInUSDC ?? '0'}
            button={
              <WalletButtonWithFallback
                disabled={
                  Boolean(formik.errors.payment || formik.errors.currency) ||
                  formik.isSubmitting
                }
                loading={formik.isSubmitting}
              >
                {(!approve.value?.approve && !approve.value?.reset) ||
                new BN(formik.values.payment || '0').isLessThanOrEqualTo(0) ||
                formik.values.currency === 'ETH'
                  ? formik.errors.payment || formik.errors.currency || 'Buy'
                  : 'Approve'}
              </WalletButtonWithFallback>
            }
          />
        </FormikContext.Provider>
        <Modal open={successOpen} onClose={handleSuccessClose}>
          <SmallModal>
            <InfoCardSuccess
              token="Governance"
              tokenName={props.tokenName}
              onClick={handleSuccessClose}
              purchased={result.toString(10)}
            />
          </SmallModal>
        </Modal>
        <Modal open={failureOpen} onClose={failureToggle}>
          <SmallModal>
            <InfoCardFailure onClick={formik.submitForm} />
          </SmallModal>
        </Modal>
        <Modal open={transactionOpen}>
          <SmallModal>
            <InfoCardLoader />
          </SmallModal>
        </Modal>
      </>
    );
  };
