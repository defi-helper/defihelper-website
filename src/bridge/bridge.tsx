import { useWeb3React } from '@web3-react/core';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState
} from 'react';
import {
  useAsyncFn,
  useAsyncRetry,
  useLocalStorage,
  useToggle
} from 'react-use';

import {
  BN,
  Button,
  ButtonBase,
  dateUtils,
  estimateGas,
  humanizeNumeral,
  Link,
  Modal,
  PageWrapper,
  Plate,
  SmallModal,
  Typography,
  useChangeNetworkModal,
  useIntervalIfHasAccount,
  useLibrary,
  setupBinance,
  Head
} from 'src/common';
import { LandingLayout } from 'src/layouts';
import { ReactComponent as EthIcon } from 'src/assets/icons/chains/ethereum.svg';
import { ReactComponent as BnbIcon } from 'src/assets/icons/chains/bsc.svg';
import { ReactComponent as BridgeArrowIcon } from 'src/assets/icons/bridge-arrow.svg';
import { ReactComponent as BurgerSwapLogoIcon } from 'src/assets/icons/burgerswap-logo.svg';
import { config } from 'src/config';
import { WalletButtonWithFallback } from 'src/wallets';
import { BinanceChain } from './binance-chain';
import { EthChain } from './ethereum-chain';
import * as BridgeReducer from './bridge.reducer';
import {
  BridgeBinanceBalance,
  BridgeLostTransaction,
  burgerSwapApi,
  BurgerSwapPayback,
  BurgerSwapTransit,
  useBinanceBalance,
  useBridgeContract,
  useTransitContract
} from './common';

const GAS = 120000;

const chains = [
  {
    title: 'Ethereum',
    icon: EthIcon,
    chainIds: config.CHAIN_IDS
  },
  {
    title: 'Binance',
    icon: BnbIcon,
    chainIds: config.CHAIN_BINANCE_IDS
  }
];

const isPayback = (
  item: BurgerSwapPayback | BurgerSwapTransit
): item is BurgerSwapPayback => {
  return 'payback_id' in item;
};

export const Bridge: React.VFC = () => {
  const [state, dispatch] = useReducer(
    BridgeReducer.bridgeReducer,
    BridgeReducer.initialState
  );

  const { chainId, account = null } = useWeb3React();
  const library = useLibrary();

  const [lostTransactionOpen, toggleLostTransaction] = useToggle(false);

  const [ethereumTransit, setEthereumTransit] =
    useState<BurgerSwapTransit | null>(null);
  const [binancePayback, setBinancePayback] =
    useState<BurgerSwapPayback | null>(null);

  const [transactionToRecieve, setTransactionToRecieve] =
    useState<string | null>(null);

  const [ethTransit, setEthTransit] = useLocalStorage<string | null>(
    'ethTransit',
    null
  );
  const [ethWithdraw, setEthWithdraw] = useLocalStorage<string | null>(
    'ethWithdraw',
    null
  );
  const [bscWithdraw, setBscWithdraw] = useLocalStorage<string | null>(
    'bscWithdraw',
    null
  );
  const [bscPayback, setBscPayback] = useLocalStorage<string | null>(
    'bscPayback',
    null
  );

  const handleLoadTransactions = useCallback(async () => {
    if (!account) return;

    dispatch(
      BridgeReducer.setPaybackList(await burgerSwapApi.getPaybackList(account))
    );
    dispatch(
      BridgeReducer.setTransitList(await burgerSwapApi.getTransitList(account))
    );
  }, [account]);

  useEffect(() => {
    dispatch(BridgeReducer.setLoading(true));

    handleLoadTransactions().then(() =>
      dispatch(BridgeReducer.setLoading(false))
    );
  }, [handleLoadTransactions]);

  const bridgeContract = useBridgeContract();
  const transitContract = useTransitContract();

  const [withdrawfromBscState, handleWithdrawFromBSC] = useAsyncFn(
    async (payback: BurgerSwapPayback) => {
      if (!account) return;

      const withdrawFromBSC = bridgeContract.methods.withdrawFromBSC(
        payback.sign,
        payback.payback_id,
        payback.token,
        payback.amount
      );

      await withdrawFromBSC
        .send({
          from: account,
          gas: await estimateGas(withdrawFromBSC, { from: account })
        })
        .on('transactionHash', setEthWithdraw)
        .on('receipt', async (receipt) => {
          await burgerSwapApi.ethWithdraw(receipt.transactionHash);

          setTransactionToRecieve(null);
          handleLoadTransactions();

          return Promise.resolve();
        });
    },
    [account, setEthWithdraw]
  );

  const [withDrawState, handleWithDraw] = useAsyncFn(
    async (transit: BurgerSwapTransit) => {
      if (!account) return;

      const withdrawTransitToken = transitContract.methods.withdrawTransitToken(
        transit.sign,
        transit.transit_id,
        transit.amount,
        transit.token,
        transit.name,
        transit.symbol,
        transit.decimals
      );

      await withdrawTransitToken
        .send({
          from: account,
          gas: GAS,
          value: `5${'0'.repeat(16)}`
        })
        .on('transactionHash', setBscWithdraw)
        .on('receipt', async (receipt) => {
          await burgerSwapApi.bscWithdraw(receipt.transactionHash);

          setTransactionToRecieve(null);
          handleLoadTransactions();

          return Promise.resolve();
        });
    },
    [account, setBscWithdraw]
  );

  const latestEthTransit = useAsyncRetry(async () => {
    if (!ethTransit) return;

    const receipt = await library.eth.getTransactionReceipt(ethTransit);

    if (receipt.status) {
      const reponse = await burgerSwapApi.ethTransit(ethTransit);

      return reponse.data;
    }
  }, [ethTransit, library]);

  const latestEthWithdraw = useAsyncRetry(async () => {
    if (!ethWithdraw) return;

    const receipt = await library.eth.getTransactionReceipt(ethWithdraw);

    if (receipt.status) {
      return burgerSwapApi.ethWithdraw(ethWithdraw);
    }
  }, [ethWithdraw, library]);

  const latestBscPayback = useAsyncRetry(async () => {
    if (!bscPayback) return;

    const receipt = await library.eth.getTransactionReceipt(bscPayback);

    if (receipt.status) {
      const reponse = await burgerSwapApi.bscPayback(bscPayback);

      return reponse.data;
    }
  }, [bscPayback, library]);

  const latestBscWithdraw = useAsyncRetry(async () => {
    if (!bscWithdraw) return;

    const receipt = await library.eth.getTransactionReceipt(bscWithdraw);

    if (receipt.status) {
      return burgerSwapApi.bscWithdraw(bscWithdraw);
    }
  }, [bscWithdraw, library]);

  const transactions = useMemo(() => {
    const seen = new Set();

    const pendingTransactions = [ethereumTransit, binancePayback].filter(
      (transaction): transaction is BurgerSwapPayback | BurgerSwapTransit =>
        transaction !== null
    );

    return [...pendingTransactions, ...state.paybackList, ...state.transitList]
      .filter((transaction) => {
        const duplicate = isPayback(transaction)
          ? seen.has(transaction.payback_id)
          : seen.has(transaction.transit_id);

        if (isPayback(transaction)) {
          seen.add(transaction.payback_id);
        } else {
          seen.add(transaction.transit_id);
        }

        return !duplicate;
      })
      .sort((a, b) => (dateUtils.after(a.updateTime, b.updateTime) ? -1 : 1));
  }, [state.paybackList, state.transitList, ethereumTransit, binancePayback]);

  const currentChainId = Number(chainId ?? config.DEFAULT_CHAIN_ID);

  useIntervalIfHasAccount(() => {
    handleLoadTransactions();

    if (
      config.CHAIN_IDS.includes(currentChainId) &&
      !latestEthTransit.value?.status &&
      !latestEthWithdraw.value?.status
    ) {
      latestEthWithdraw.retry();
      latestEthTransit.retry();
    }

    if (
      config.CHAIN_BINANCE_IDS.includes(currentChainId) &&
      !latestBscPayback.value?.status &&
      !latestBscWithdraw.value?.status
    ) {
      latestBscPayback.retry();
      latestBscWithdraw.retry();
    }
  });

  const { loading } = state;

  const [openChangeNetwork, closeChangeNetwork] = useChangeNetworkModal();

  const handleRecieve = useCallback(
    async (transaction: BurgerSwapTransit | BurgerSwapPayback) => {
      if (isPayback(transaction)) handleWithdrawFromBSC(transaction);
      else handleWithDraw(transaction);

      setTransactionToRecieve(transaction.sign);
    },
    [handleWithDraw, handleWithdrawFromBSC]
  );

  const handleLostTransaction = async (formValues: { tx: string }) => {
    const sendTx = config.CHAIN_BINANCE_IDS.includes(currentChainId)
      ? burgerSwapApi.ethTx
      : burgerSwapApi.bscTx;

    await sendTx(formValues.tx);

    handleLoadTransactions();
    toggleLostTransaction(false);
  };

  useEffect(() => {
    if (config.CHAIN_IDS.includes(currentChainId)) {
      closeChangeNetwork();
    }
  }, [currentChainId, closeChangeNetwork]);

  const bnbBalance = useBinanceBalance();

  return (
    <>
      <Head
        title="Transfer BAG between the Ethereum and the Binance Smart Chain"
        ogUrl="https://bondappetit.io"
      />
      <LandingLayout>
        <PageWrapper>
          <div>
            <div>
              <div>
                {chains.map((chain) => (
                  <ButtonBase
                    key={chain.title}
                    onClick={
                      chains[0] === chain ? openChangeNetwork : setupBinance
                    }
                  >
                    <chain.icon />
                    <div>
                      <Typography variant="body1">
                        {chain.chainIds.includes(currentChainId)
                          ? 'Active Network'
                          : 'Transfer to'}
                      </Typography>
                      <Typography variant="h3">{chain.title}</Typography>
                    </div>
                  </ButtonBase>
                ))}
              </div>
            </div>
            <Plate>
              {bnbBalance && account && (
                <BridgeBinanceBalance>{account}</BridgeBinanceBalance>
              )}
              {!bnbBalance && (
                <>
                  {!account ? (
                    <WalletButtonWithFallback />
                  ) : (
                    <>
                      {loading ? (
                        <Typography variant="body1">Loading...</Typography>
                      ) : (
                        <>
                          {chainId &&
                            config.CHAIN_BINANCE_IDS.includes(chainId) && (
                              <BinanceChain
                                onBscPayback={setBscPayback}
                                bscPayback={bscPayback}
                                transactionsLength={transactions.length}
                                onConfirm={setBinancePayback}
                              />
                            )}
                          {chainId && config.CHAIN_IDS.includes(chainId) && (
                            <EthChain
                              onEthTransit={setEthTransit}
                              ethTransit={ethTransit}
                              transactionsLength={transactions.length}
                              onConfirm={setEthereumTransit}
                            />
                          )}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </Plate>
            <div>
              {loading && account && (
                <Plate color="grey" withoutBorder>
                  <Typography variant="h3" align="center">
                    Loading...
                  </Typography>
                </Plate>
              )}
              {(!account || (!transactions.length && !loading)) && (
                <Plate color="grey" withoutBorder>
                  <Typography variant="h3">No transactions yet...</Typography>
                </Plate>
              )}
              {!loading &&
                transactions.map((transaction, index) => {
                  const key = `${transaction.id}-${index}`;

                  return (
                    <Plate color="grey" withoutBorder key={key}>
                      <div>
                        {isPayback(transaction) ? <BnbIcon /> : <EthIcon />}
                        <BridgeArrowIcon />
                        {isPayback(transaction) ? <EthIcon /> : <BnbIcon />}
                      </div>
                      <Typography variant="h3">
                        {humanizeNumeral(
                          new BN(transaction.amount).div(new BN(10).pow(18))
                        )}{' '}
                        {isPayback(transaction) ? 'BAG' : 'bBAG'}
                      </Typography>
                      <div>
                        {transaction.status === 0 && (
                          <>
                            {isPayback(transaction) ? (
                              <Button
                                variant="outlined"
                                disabled={
                                  withdrawfromBscState.loading ||
                                  withDrawState.loading
                                }
                                loading={
                                  (withdrawfromBscState.loading ||
                                    withDrawState.loading) &&
                                  transactionToRecieve === transaction.sign
                                }
                                onClick={() =>
                                  !config.CHAIN_IDS.includes(currentChainId)
                                    ? openChangeNetwork()
                                    : handleRecieve(transaction)
                                }
                              >
                                {!config.CHAIN_IDS.includes(currentChainId)
                                  ? 'Change Network'
                                  : 'Recieve'}
                              </Button>
                            ) : (
                              <Button
                                variant="outlined"
                                disabled={
                                  withdrawfromBscState.loading ||
                                  withDrawState.loading
                                }
                                loading={
                                  (withdrawfromBscState.loading ||
                                    withDrawState.loading) &&
                                  transactionToRecieve === transaction.sign
                                }
                                onClick={() =>
                                  !config.CHAIN_BINANCE_IDS.includes(
                                    currentChainId
                                  )
                                    ? setupBinance()
                                    : handleRecieve(transaction)
                                }
                              >
                                {!config.CHAIN_BINANCE_IDS.includes(
                                  currentChainId
                                )
                                  ? 'Change Network'
                                  : 'Recieve'}
                              </Button>
                            )}
                          </>
                        )}
                        {transaction.status === 1 && (
                          <Typography variant="body1">Received</Typography>
                        )}
                        {transaction.status === 3 && (
                          <Typography variant="body1">Pending</Typography>
                        )}
                      </div>
                    </Plate>
                  );
                })}
            </div>
            <div>
              <Typography variant="body2" align="center">
                We use <BurgerSwapLogoIcon /> BurgerSwap.{' '}
                <Link
                  target="_blank"
                  color="blue"
                  href="https://burgerswap.org/transit"
                >
                  {' '}
                  Learn more
                </Link>
              </Typography>
              <Typography variant="body2" align="center">
                <ButtonBase onClick={toggleLostTransaction}>
                  Lost transaction?
                </ButtonBase>
              </Typography>
            </div>
          </div>
          <Modal open={lostTransactionOpen} onClose={toggleLostTransaction}>
            <SmallModal>
              <BridgeLostTransaction
                placeholder={
                  config.CHAIN_BINANCE_IDS.includes(currentChainId)
                    ? 'eth'
                    : 'bsc'
                }
                onSubmit={handleLostTransaction}
              />
            </SmallModal>
          </Modal>
        </PageWrapper>
      </LandingLayout>
    </>
  );
};
