import React from 'react';
import clsx from 'clsx';

import { Typography } from 'src/common/typography';
import { Faq } from 'src/common/faq';
import { Grid } from 'src/common/grid';
import * as styles from './tokenomics-faq.css';

export type TokenomicsFaqProps = {
  className?: string;
};

const FAQ = [
  {
    title: 'DeFiHelper Governance Token',
    body: `The price of DFH equals $1 at all times, while the token is issued only if the protocol has sufficient collateral. Information regarding the collateral can be checked through the blockchain at any time.

Price stability is connected to the protocol's assets, the price of which should always be close to the value of DFH in circulation.
    `
  },

  {
    title: 'How can I acquire DHF tokens?',
    body: 'text'
  },

  {
    title:
      'What is the circulating supply / total supply / max supply of the DHF token?',
    body: `text`
  },

  {
    title: 'How will the tokens be allocated? Under what vesting schedule?',
    body: `text`
  },

  {
    title: 'What are the contract addresses of DeFiHelper?',
    body: `text`
  }
];

export const TokenomicsFaq: React.VFC<TokenomicsFaqProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        FAQ
      </Typography>
      <Faq>{FAQ}</Faq>
    </Grid.Container>
  );
};
