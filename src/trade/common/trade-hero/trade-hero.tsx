import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import tradeHero from 'src/assets/images/trade-hero.png';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import * as styles from './trade-hero.css';

export type TradeHeroProps = {
  className?: string;
};

export const TradeHero: React.VFC<TradeHeroProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <img src={tradeHero} alt="" className={styles.img} />
      <div className={styles.text}>
        <Typography
          transform="uppercase"
          family="mono"
          variant="h2"
          as="h1"
          className={styles.title}
        >
          TRADE ON DEX LIKE A PRO
        </Typography>
        <Typography className={styles.description}>
          Use trailing buy or stop-loss/take-profit features to trade like a
          professional trader
        </Typography>
        <div className={styles.actions}>
          <Button color="secondary" as="a" href={config.LAUNCH_APP_URL}>
            Trade
          </Button>
        </div>
      </div>
    </Grid.Container>
  );
};
