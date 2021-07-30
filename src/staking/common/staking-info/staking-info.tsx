import React from 'react';

import { Plate, Typography } from 'src/common';
import { useStakingInfoStyles } from './staking-info.styles';

const STAKING_CARDS = [
  {
    title: 'All',
    body: 'BondAppétit governance tokens reserved for protocol’s usage will be distributed in 2 years.',
    date: '2021 — 2023'
  },
  {
    title: '5%',
    body: `of all governance tokens reserved for the protocol’s usage will be distributed as staking rewards in the first 3 months to Phase 1 investors only.`,
    date: 'investment period: 05 April 2021 — 30 May 2021'
  },
  {
    title: '95%',
    body: `of all governance tokens reserved for protocol usage will be distributed as rewards during Phase 2.`,
    date: '2 years after launch of RWA phase'
  }
];

export const StakingInfo: React.FC = () => {
  const classes = useStakingInfoStyles();

  return (
    <Plate withoutBorder color="grey" className={classes.root}>
      {STAKING_CARDS.map((card) => (
        <div className={classes.card} key={card.title}>
          <Typography variant="h1" as="h2" className={classes.cardTitle}>
            {card.title}
          </Typography>
          <Typography variant="h5" className={classes.cardBody}>
            {card.body}
          </Typography>
          <Typography variant="body1" className={classes.cardDate}>
            {card.date}
          </Typography>
        </div>
      ))}
    </Plate>
  );
};
