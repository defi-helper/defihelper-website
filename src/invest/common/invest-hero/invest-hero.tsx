import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import investHero from 'src/assets/images/invest-hero.png';
import investHeroBg from 'src/assets/images/invest-hero-bg.png';
import { ReactComponent as PlayIcon } from 'src/assets/icons/play.svg';
import { VideoDialog } from 'src/common/video-dialog';
import { useDialog } from 'src/common/dialog';
import { config } from 'src/config';
import { ScrollIcon } from 'src/common/scroll-icon';
import * as styles from './invest-hero.css';

export type InvestHeroProps = {
  className?: string;
};

export const InvestHero: React.VFC<InvestHeroProps> = (props) => {
  const [openVideoDialog] = useDialog(VideoDialog);

  const handleOpenVideoDialog = () => {
    openVideoDialog({
      videoId: 'pVTxnp0qujw'
    }).catch(console.error);
  };

  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <div className={styles.video}>
        <img alt="" src={investHeroBg} className={styles.videoBg} />
        <div
          className={styles.videoInner}
          style={{ backgroundImage: `url(${investHero})` }}
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
            WATCH VIDEO HOW TO INVEST
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
          DeFi Yield Aggregator & Yield Optimizer
        </Typography>
        <Typography className={styles.description}>
          Find a pool to invest in, use auto compounding to boost your APY,
          protect your investment with &apos;stop-loss&apos;
        </Typography>
        <div className={styles.actions}>
          <Button
            color="secondary"
            as="a"
            href={`${config.LAUNCH_APP_URL}invest`}
            target="_blank"
          >
            Invest
          </Button>
        </div>
      </div>
      <ScrollIcon className={styles.scrollIcon} />
    </Grid.Container>
  );
};
