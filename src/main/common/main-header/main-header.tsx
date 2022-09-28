import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import logo from 'src/assets/images/logo.png';
import { Button } from 'src/common/button';
import { config } from 'src/config';
import { ButtonBase } from 'src/common/button-base';
import { ReactComponent as PlayIcon } from 'src/assets/icons/play.svg';
import { useDialog } from 'src/common/dialog';
import { VideoDialog } from 'src/common/video-dialog';
import { ScrollIcon } from 'src/common/scroll-icon';
import * as styles from './main-header.css';

export type MainHeaderProps = {
  className?: string;
  portfoliosCount: number;
  walletsCount: number;
  protocolsCount: number;
  contractsCount: number;
};

export const MainHeader: React.VFC<MainHeaderProps> = (props) => {
  const [openVideoDialog] = useDialog(VideoDialog);

  const handleOpenVideoDialog = () => {
    openVideoDialog({
      videoId: 'DkIH_DMhgcs'
    }).catch(console.error);
  };

  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container className={styles.hero}>
        <Grid.Row>
          <div className={styles.text}>
            <img src={logo} alt="" className={styles.logo} />
            <Typography variant="h1" className={styles.subtitle} align="center">
              Earn more with our smart tools
            </Typography>
            <Typography
              family="mono"
              transform="uppercase"
              as="div"
              className={styles.counters}
            >
              <div>{props.portfoliosCount} portfolios</div>
              <div>{props.walletsCount} wallets</div>
              <div>{props.contractsCount} staking contracts</div>
              <div>{props.protocolsCount} protocols connected</div>
            </Typography>
            <div className={styles.actions}>
              {config.DEMO_LINK && (
                <Button
                  variant="outlined"
                  color="secondary"
                  as="a"
                  href={config.DEMO_LINK}
                  size="large"
                >
                  Demo account
                </Button>
              )}
              <ButtonBase
                className={styles.watchPromo}
                onClick={handleOpenVideoDialog}
              >
                <PlayIcon />
                watch this video to see how
              </ButtonBase>
            </div>
          </div>
        </Grid.Row>
      </Grid.Container>
      <ScrollIcon className={styles.scrollIcon} />
    </div>
  );
};
