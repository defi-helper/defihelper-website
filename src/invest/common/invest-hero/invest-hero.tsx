import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import investHero from 'src/assets/images/invest-hero.png';
import { ButtonBase } from 'src/common/button-base';
import { ReactComponent as PlayIcon } from 'src/assets/icons/play.svg';
import { VideoDialog } from 'src/common/video-dialog';
import { useDialog } from 'src/common/dialog';
import { config } from 'src/config';
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
      <img alt="" src={investHero} className={styles.img} />
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
        <div className={styles.actions}>
          <Button color="secondary" as="a" href={config.LAUNCH_APP_URL}>
            Stake
          </Button>
          <ButtonBase
            className={styles.watchPromo}
            onClick={handleOpenVideoDialog}
          >
            <PlayIcon />
            watch video
          </ButtonBase>
        </div>
      </div>
    </Grid.Container>
  );
};