import clsx from 'clsx';
import React from 'react';
import { useMedia } from 'react-use';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import dfh3d from 'src/assets/images/dfh3d.png';
import * as styles from './main-explore.css';

export type MainExploreProps = {
  className?: string;
};

export const MainExplore: React.FC<MainExploreProps> = (props) => {
  const isDesktop = useMedia('(min-width: 1440px)');

  return (
    <div className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Grid.Row items="center">
          <div className={styles.col}>
            <Typography
              variant="h1"
              as="h2"
              transform="uppercase"
              family="mono"
              className={styles.title}
            >
              DeFiHelper token
            </Typography>
            {isDesktop && <Button variant="outlined">Explore DFH</Button>}
          </div>
          <img className={styles.img} src={dfh3d} alt="" />
          <div className={styles.col}>
            <Typography className={clsx(styles.description)}>
              The DFH token is used for governance and for covering the
              protocol&apos;s fees. DFH holders can influence the future of the
              protocol by backing the features they need most.
            </Typography>
            {!isDesktop && <Button variant="outlined">Explore DFH</Button>}
          </div>
        </Grid.Row>
      </Grid.Container>
    </div>
  );
};
