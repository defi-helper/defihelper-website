import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import tradeHero from 'src/assets/images/trade-hero.png';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import { ScrollIcon } from 'src/common/scroll-icon';
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
          The Best DeFi Trading Platform
        </Typography>
        <Typography className={styles.description}>
          Use our &apos;Trailing Buy&apos;, or &apos;Stop-loss/Take-profit&apos;
          features to trade like a pro on DEXs
        </Typography>
        <div className={styles.actions}>
          <Button
            color="secondary"
            as="a"
            href={`${config.LAUNCH_APP_URL}trade`}
            target="_blank"
          >
            Trade
          </Button>
        </div>
      </div>
      <ScrollIcon className={styles.scrollIcon} />
    </Grid.Container>
  );
};
