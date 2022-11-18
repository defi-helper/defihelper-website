import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import { ScrollIcon } from 'src/common/scroll-icon';
import { ReactComponent as PlayIcon } from 'src/assets/icons/play-bttn.svg';
import tradeHero from 'src/assets/images/trade-hero.jpg';
import tradeHeroBg from 'src/assets/images/trade-hero-bg.png';
import { VideoDialog } from 'src/common/video-dialog';
import { useDialog } from 'src/common/dialog';
import * as styles from './trade-hero.css';

export type TradeHeroProps = {
  className?: string;
};

export const TradeHero: React.VFC<TradeHeroProps> = (props) => {
  const [openVideoDialog] = useDialog(VideoDialog);

  const handleOpenVideoDialog = () => {
    openVideoDialog({
      videoId: 'pVTxnp0qujw'
    }).catch(console.error);
  };

  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <div className={styles.video}>
        <img alt="" src={tradeHeroBg} className={styles.videoBg} />
        <div
          className={styles.videoInner}
          style={{ backgroundImage: `url(${tradeHero})` }}
          role="button"
          tabIndex={0}
          onClick={handleOpenVideoDialog}
          onKeyDown={handleOpenVideoDialog}
        >
          <PlayIcon />
          <Typography
            as="div"
            transform="uppercase"
            family="mono"
            variant="body2"
          >
            WATCH VIDEO HOW TO trade
          </Typography>
        </div>
      </div>
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
