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
    icon: TresureIcon,
    description:
      'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. Aliquam, amet gravida blandit vitae id consequat risus. Faucibus amet, cum sit consequat ipsum velit aliquam non. Turpis faucibus dui nunc, non.'
  },

  {
    title: 'System upgrades',
    icon: SystemUpgradesIcon,
    description:
      'Aliquet turpis egestas neque pharetra nec a neque libero luctus. Diam sagittis volutpat dignissim suscipit. Orci, non lorem blandit pretium nulla id. Diam imperdiet sed at sem sed morbi.'
  },

  {
    title: 'Liquidity and bridges',
    icon: LiquidityIcon,
    description:
      'Elementum, pellentesque dui metus, lectus bibendum. Id cras netus egestas sit hendrerit in habitasse. Suspendisse donec porttitor ac dapibus egestas at fringilla scelerisque. Vitae sit suspendisse egestas venenatis, nunc vel sit.'
  },

  {
    title: 'Community and developer rewards',
    icon: CommunityIcon,
    description:
      'Morbi sem laoreet aliquet non. Elit cursus convallis ut eu cursus. Arcu risus pellentesque ultrices leo orci montes, tristique vel laoreet. Placerat quam eu, lacus, massa dignissim eget urna. Neque, tincidunt nibh et facilisis eget dui.'
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
        DFH Holders will govern
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
            <Typography className={styles.opacity}>
              {dataItem.description}
            </Typography>
          </div>
        ))}
      </div>
    </Grid.Container>
  );
};
