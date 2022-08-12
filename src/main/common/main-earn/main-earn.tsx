import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import earnmore1 from 'src/assets/images/earnmore1.png';
import earnmore2 from 'src/assets/images/earnmore2.png';
import { Button } from 'src/common/button';
import * as styles from './main-earn.css';

export type MainEarnProps = {
  className?: string;
};

export const MainEarn: React.VFC<MainEarnProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Earn more with our smart tools
      </Typography>
      <div className={styles.earnMore1}>
        <div className={styles.earnMore1Text}>
          <Typography
            variant="h4"
            family="mono"
            transform="uppercase"
            className={styles.earnMore1TextTitle}
          >
            trade on dex like on cex with smart trading
          </Typography>
          <Typography className={styles.earnMore1TextDescription}>
            Integer sagittis euismod vitae penatibus libero, facilisi. Nulla
            elit suspendisse mauris fringilla turpis posuere. Aliquam, amet
            gravida blandit vitae id consequat risus. Faucibus amet, cum sit
            conse
          </Typography>
          <Button color="secondary">trade</Button>
        </div>
        <img src={earnmore1} alt="" className={styles.earnMore1Img} />
      </div>
      <div className={styles.earnMore2}>
        <img src={earnmore2} alt="" className={styles.earnMore2Img} />
        <div className={styles.earnMore2Text}>
          <Typography
            variant="h4"
            family="mono"
            transform="uppercase"
            className={styles.earnMore2TextTitle}
          >
            invest and Earn more with auto-staking feauture
          </Typography>
          <Typography className={styles.earnMore2TextDescription}>
            Integer sagittis euismod vitae penatibus libero, facilisi. Nulla
            elit suspendisse mauris fringilla turpis posuere. Aliquam, amet
            gravida blandit vitae id consequat risus. Faucibus amet, cum sit
            conse
          </Typography>
          <Button color="secondary">invest</Button>
        </div>
      </div>
    </Grid.Container>
  );
};
