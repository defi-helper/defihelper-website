import { FormikProvider } from 'formik';
import React, { useCallback, useState } from 'react';
import { useAsyncRetry } from 'react-use';
import { useWeb3React } from '@web3-react/core';

import {
  BN,
  FormModal,
  InfoCardFailure,
  InfoCardLoader,
  InfoCardSuccess,
  Modal,
  SmallModal,
  useBalance,
  useIntervalIfHasAccount,
  useInvestmentContract,
  useModal,
  useNetworkConfig
} from 'src/common';
import { WalletButtonWithFallback } from 'src/wallets';
import { useInvestingTokens } from './use-investing-tokens';
import { useInvestingForm } from './use-investing-form';

export type VotingInvestingFormProps = {
  open: boolean;
  onClose?: () => void;
  onSuccess?: () => void;
};

export const VotingInvestingForm: React.VFC<VotingInvestingFormProps> = (
  props
) => {
  const tokens = useInvestingTokens();

  const { account = null } = useWeb3React();

  const {
    formik,
    successOpen,
    failureToggle,
    failureOpen,
    transactionOpen,
    successToggle,
    approve
  } = useInvestingForm(tokens.retry);

  const network = useNetworkConfig();

  const investmentContract = useInvestmentContract();

  const [balance, setBalance] = useState('');

  const getBalance = useBalance();

  useIntervalIfHasAccount(async () => {
    const balanceOfToken = await getBalance({
      tokenAddress: network.assets.Governance.address,
      tokenName: network.assets.Governance.symbol
    });

    setBalance(
      balanceOfToken
        .div(new BN(10).pow(network.assets.Governance.decimals))
        .toString(10)
    );
  });

  const tokenPrices = useAsyncRetry(async () => {
    const currentToken = Object.values(network.assets).find(
      ({ symbol }) => symbol === formik.values.currency
    );

    if (!currentToken || !investmentContract) return;

    const priceOfToken = await investmentContract.methods
      .price(
        currentToken.address,
        new BN(10).pow(currentToken.decimals).toString(10)
      )
      .call();

    const priceBN = new BN(priceOfToken);

    const div = new BN(10).pow(network.assets.Governance.decimals);

    return {
      price: priceBN.div(div).toString(10),
      convertPrice: div.div(priceBN).toFormat(5)
    };
  }, [formik.values.currency, network.assets]);

  const { onSuccess } = props;

  const handleSuccessClose = useCallback(() => {
    successToggle(false);
    formik.resetForm();
    onSuccess?.();
  }, [successToggle, formik, onSuccess]);

  const { setFieldValue } = formik;

  const handlePaymentChange = useCallback(() => {
    const youGet = new BN(formik.values.payment).multipliedBy(
      tokenPrices.value?.price ?? ''
    );

    setFieldValue('youGet', !youGet.isFinite() ? '0' : youGet.toString(10));
  }, [formik.values.payment, tokenPrices.value, setFieldValue]);

  const handleYouGetChange = useCallback(() => {
    const payment = new BN(formik.values.youGet).div(
      tokenPrices.value?.price ?? ''
    );

    setFieldValue('payment', !payment.isFinite() ? '0' : payment.toString(10));
  }, [formik.values.youGet, tokenPrices.value, setFieldValue]);

  const handleClose = () => {
    props.onClose?.();
    formik.resetForm();
  };

  return (
    <>
      <FormikProvider value={formik}>
        <FormModal
          open={props.open}
          onClose={handleClose}
          tokenName="BAG"
          balance={account ? balance : undefined}
          tokenCost={tokenPrices.value?.convertPrice ?? '0'}
          tokens={tokens.value ?? []}
          onPaymentChange={handlePaymentChange}
          onYouGetChange={handleYouGetChange}
          button={
            <WalletButtonWithFallback
              disabled={
                Boolean(formik.errors.payment || formik.errors.currency) ||
                formik.isSubmitting
              }
              loading={formik.isSubmitting}
            >
              {(!approve?.approve && !approve?.reset) ||
              new BN(formik.values.payment || '0').isLessThanOrEqualTo(0) ||
              formik.values.currency === 'ETH'
                ? formik.errors.payment || formik.errors.currency || 'Buy'
                : 'Approve'}
            </WalletButtonWithFallback>
          }
        />
      </FormikProvider>
      <Modal open={successOpen} onClose={handleSuccessClose}>
        <SmallModal>
          <InfoCardSuccess
            token="Governance"
            tokenName="BAG"
            onClick={handleSuccessClose}
            purchased={formik.values.youGet}
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

export const useVotingInvestingForm = () =>
  useModal(<VotingInvestingForm open />);
