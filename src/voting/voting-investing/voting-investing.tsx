import { useWeb3React } from '@web3-react/core';
import React, { useCallback, useEffect } from 'react';
import { useToggle } from 'react-use';

import {
  humanizeNumeral,
  useChangeNetworkModal,
  useNetworkConfig
} from 'src/common';
import { config } from 'src/config';
import { VotingInfoCard } from '../common';
import { VotingInvestingAttention } from '../voting-investing-attention';
import { VotingInvestingForm } from '../voting-investing-form';
import { useInvestingTotal } from './use-investing-total';
import { useVotingInvestingStyles } from './voting-investing.styles';

const UNISWAP_URL = 'https://uniswap.exchange/swap';

export const VotingInvesting: React.VFC = () => {
  const [investFormIsOpen, toggleInvestForm] = useToggle(false);
  const [attentionIsOpen, toggleAttention] = useToggle(false);

  const networkConfig = useNetworkConfig();

  const classes = useVotingInvestingStyles();

  const handleOpenInvestForm = useCallback(() => {
    toggleAttention(false);
    toggleInvestForm(true);
  }, [toggleAttention, toggleInvestForm]);

  const investingTotal = useInvestingTotal();

  const totalTokens = humanizeNumeral(investingTotal.value?.totalTokens);

  const leftTokens = humanizeNumeral(investingTotal.value?.balance);

  const percent =
    investingTotal.value?.percent?.integerValue().toString(10) ?? '0';

  const handleToUniswap = useCallback(() => {
    window.open(
      `${UNISWAP_URL}?inputCurrency=${networkConfig.assets.WETH.address}&outputCurrency=${networkConfig.assets.Governance.address}`
    );
  }, [networkConfig.assets]);

  const { chainId } = useWeb3React();

  const [openChangeNetwork, closeChangeNetwork] = useChangeNetworkModal();

  useEffect(() => {
    if (config.CHAIN_IDS.includes(Number(chainId))) {
      closeChangeNetwork();
    }
  }, [chainId, closeChangeNetwork]);

  const handleInvest = config.IS_INVEST ? toggleAttention : handleToUniswap;

  return (
    <>
      <VotingInfoCard
        loading={investingTotal.loading}
        className={classes.root}
        title={
          config.IS_INVEST ? 'Buy with a fixed price' : 'Buy BAG on Uniswap'
        }
        subtitle={
          config.IS_INVEST
            ? `${leftTokens} of ${totalTokens} BAG left`
            : `${leftTokens} remained to buy`
        }
        percent={config.IS_INVEST ? percent : undefined}
        buttonTitle="Buy BAG"
        onClick={
          config.CHAIN_BINANCE_IDS.includes(Number(chainId))
            ? openChangeNetwork
            : handleInvest
        }
        description={
          config.IS_INVEST
            ? `Special offer for early investors only: buy the initial emission of (${totalTokens} BAGs)` +
              ' at a fixed price of $2.5 per token, subject to moratorium on sales until 01 October 2021.'
            : ''
        }
      />
      {investFormIsOpen && (
        <VotingInvestingForm
          open={investFormIsOpen}
          onClose={toggleInvestForm}
          onSuccess={investingTotal.retry}
        />
      )}
      <VotingInvestingAttention
        open={attentionIsOpen}
        onClose={toggleAttention}
        onBuy={handleOpenInvestForm}
      />
    </>
  );
};
