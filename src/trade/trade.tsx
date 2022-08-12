import React from 'react';

import { useDialog } from 'src/common/dialog';
import { FaqText } from 'src/common/faq-text';
import { Head } from 'src/common/head';
import { contactsApi } from 'src/contacts/common/contacts-api';
import { ContactSuccess } from 'src/contacts/contact-success';
import { useProtocolsQuery } from 'src/graphql/_generated-hooks';
import { LandingLayout } from 'src/layouts';
import {
  MainBlockchains,
  MainJoinCommunity,
  MainProtocols
} from 'src/main/common';
import { TradeHero } from './common/trade-hero';
import { TradeHowWorks } from './common/trade-how-works';
import { TradeSmart } from './common/trade-smart';
import { TradeWhat } from './common/trade-what';
import * as styles from './trade.css';

export type TradeProps = unknown;

export const Trade: React.VFC<TradeProps> = () => {
  const [{ data: protocolsData }] = useProtocolsQuery();

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

  return (
    <LandingLayout>
      <Head title="Trade on dex like a pro" />
      <TradeHero className={styles.section} />
      <TradeSmart className={styles.section} />
      <TradeWhat className={styles.section} />
      <TradeHowWorks className={styles.section} />
      <MainBlockchains className={styles.section} />
      <MainProtocols
        className={styles.section}
        protocols={protocolsData?.protocols.list}
      />
      <FaqText className={styles.section} />
      <MainJoinCommunity
        className={styles.section}
        onSubmit={handleSubscribe}
      />
    </LandingLayout>
  );
};
