import clsx from 'clsx';
import React from 'react';

import { ReactComponent as TresureIcon } from 'src/assets/icons/tresure.svg';
import { ReactComponent as SystemUpgradesIcon } from 'src/assets/icons/system-upgrades.svg';
import { ReactComponent as LiquidityIcon } from 'src/assets/icons/liquidity.svg';
import { ReactComponent as CommunityIcon } from 'src/assets/icons/community.svg';
import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-holders.css';

export type TokenomicsHoldersProps = {
  className?: string;
};

const DATA = [
  {
    title: 'Fees and treasure management',
    icon: TresureIcon
  },

  {
    title: 'Protocol upgrades',
    icon: SystemUpgradesIcon
  },

  {
    title: 'Liquidity and bridges',
    icon: LiquidityIcon
  },

  {
    title: 'Community and development rewards',
    icon: CommunityIcon
  }
];

export const TokenomicsHolders: React.VFC<TokenomicsHoldersProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        DFH will govern
      </Typography>
      <div className={styles.grid}>
        {DATA.map((dataItem) => (
          <div key={dataItem.title}>
            <dataItem.icon className={clsx(styles.opacity, styles.cardIcon)} />
            <Typography
              variant="h4"
              family="mono"
              transform="uppercase"
              className={styles.cardTitle}
            >
              {dataItem.title}
            </Typography>
          </div>
        ))}
      </div>
    </Grid.Container>
  );
};
