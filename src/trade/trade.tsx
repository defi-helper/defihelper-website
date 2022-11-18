import React, { useEffect, useState } from 'react';

import { useDialog } from 'src/common/dialog';
import { Head } from 'src/common/head';
import { contactsApi } from 'src/contacts/common/contacts-api';
import { ContactSuccess } from 'src/contacts/contact-success';
import { LandingLayout } from 'src/layouts';
import { MainBlockchains, MainJoinCommunity } from 'src/main/common';
import opengraph from 'src/assets/images/trade.jpg';
import { TradeExchanges } from './common/trade-exchanges';
import { TradeHero } from './common/trade-hero';
import { TradeHowWorks } from './common/trade-how-works';
import { TradeSmart } from './common/trade-smart';
import { TradeWhat } from './common/trade-what';
import { tradeApi } from './common/trade.api';
import * as styles from './trade.css';

export type TradeProps = unknown;

export const Trade: React.VFC<TradeProps> = () => {
  const [exchanges, setExchanges] = useState<
    Array<{
      Icon: string;
      Name: string;
    }>
  >([]);

  const [openSuccess] = useDialog(ContactSuccess);

  const handleSubscribe = async (formValues: {
    name: string;
    email: string;
  }) => {
    try {
      await contactsApi.sendForm('2', formValues);

      await openSuccess({ name: formValues.name });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  useEffect(() => {
    tradeApi
      .exchanges()
      .then(({ data }) => setExchanges(data))
      .catch(console.error);
  }, []);

  return (
    <LandingLayout>
      <Head
        title="DeFi Trading Platform"
        description="The Best DeFi trading platform - Use our 'Trailing Buy', or 'Stop-loss/Take-profit' features to trade like a pro on DEXs"
        keywords={[
          'defi exchange',
          'the best defi exchange',
          'trade defi',
          'defi trading platform',
          'defi exchange platform',
          'the best defi trading platform',
          'defi crypto trading'
        ]}
        ogImage={opengraph}
      />
      <div className={styles.hero}>
        <TradeHero />
      </div>
      <TradeSmart className={styles.section} />
      <TradeWhat className={styles.section} />
      <TradeHowWorks className={styles.section} />
      <MainBlockchains className={styles.section} />
      <TradeExchanges className={styles.section} exchanges={exchanges} />
      <MainJoinCommunity
        className={styles.section}
        onSubmit={handleSubscribe}
      />
    </LandingLayout>
  );
};
