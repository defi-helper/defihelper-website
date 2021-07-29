import React from 'react';
import clsx from 'clsx';

import { Typography } from 'src/common/typography';
import { Faq } from 'src/common/faq';
import { Grid } from 'src/common/grid';
import * as styles from './main-faq.css';

export type MainFaqProps = {
  className?: string;
};

const FAQ = [
  {
    title: 'What is the price stability mechanism?',
    body: `The price of DFH equals $1 at all times, while the token is issued only if the protocol has sufficient collateral. Information regarding the collateral can be checked through the blockchain at any time.

Price stability is connected to the protocol's assets, the price of which should always be close to the value of DFH in circulation.
    `
  },

  {
    title: 'Who controls the issuance of DFH?',
    body: 'text'
  },

  {
    title: 'Which assets are used as collateral of DFH?',
    body: `text`
  },

  {
    title: 'What is the leagal classification of DFH?',
    body: `text`
  }
];

export const MainFaq: React.FC<MainFaqProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        You May Ask
      </Typography>
      <Faq>{FAQ}</Faq>
    </Grid.Container>
  );
};
