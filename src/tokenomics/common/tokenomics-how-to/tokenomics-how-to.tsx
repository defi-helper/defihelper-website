import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as UniswapIcon } from 'src/assets/icons/protocols/uniswap.svg';
import { ReactComponent as WavesIcon } from 'src/assets/icons/protocols/waves.svg';
import { ReactComponent as CakeIcon } from 'src/assets/icons/protocols/cake.svg';
import * as styles from './tokenomics-how-to.css';

export type TokenomicsHowToProps = {
  className?: string;
};

type DataItem = {
  title: string;
  subtitle: string[];
  description: {
    title: string;
    subtitle?: string;
    action: JSX.Element[];
  }[];
};

const DATA: DataItem[] = [
  {
    title: 'Buy from the market',
    subtitle: ['$289,156,773 Market Cap', '316,007,280 DFH Circulating Supply'],
    description: [
      {
        title: 'Buy DFH on the top exchange markets and protocols',
        action: [
          <Button variant="outlined" className={styles.protocol}>
            <UniswapIcon className={styles.protocolLogo} /> UniSwap
          </Button>,
          <Button variant="outlined" className={styles.protocol}>
            <WavesIcon className={styles.protocolLogo} />
            Waves
          </Button>,
          <Button variant="outlined" className={styles.protocol}>
            <CakeIcon className={styles.protocolLogo} />
            PancakeSwap
          </Button>
        ]
      }
    ]
  },
  {
    title: 'Liquidity rewards',
    subtitle: ['245 / 365 days left', '92,856,245 / 100,000,000 DFH left'],
    description: [
      {
        title:
          'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. ',
        action: [<Button variant="outlined">Earn by staking</Button>]
      }
    ]
  },
  {
    title: 'Developers grants',
    subtitle: ['2.4 / 3 years left', '292,856,245 / 300,000,000 DHF left'],
    description: [
      {
        title: 'Help build new features and earn DFH tokens as a reward',
        action: [<Button variant="outlined">Become a Developer</Button>]
      }
    ]
  },
  {
    title: 'Community grants',
    subtitle: ['245 / 365 days left', '64,272,884 / 70,000,000 DFH left'],
    description: [
      {
        title:
          'Aliquet turpis egestas neque pharetra nec a neque libero luctus. Diam sagittis volutpat dignissim suscipit.',
        action: [<Button variant="outlined">Influence DFH</Button>]
      }
    ]
  },
  {
    title: 'Early ecosystem rewards',
    subtitle: ['24 / 31 days left', '72,645,926 / 80,000,000 DFH left'],
    description: [
      {
        title:
          'Provide fees for the protocol and earn rewards for providing fees for protocol',
        subtitle: '3% total',
        action: [<Button variant="outlined">Provide Fees</Button>]
      },
      {
        title:
          'Buy packages for automation features and smartnotifications and earn rewards',
        subtitle: '2% total',
        action: [<Button variant="outlined">Buy packages</Button>]
      },
      {
        title:
          'Grow community invite friends and help DeFiHelper grow and earn rewards',
        subtitle: '1% total',
        action: [<Button variant="outlined">Invite Friend</Button>]
      }
    ]
  }
];

export const TokenomicsHowTo: React.FC<TokenomicsHowToProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        family="mono"
        transform="uppercase"
        variant="h2"
        className={styles.title}
      >
        How to GET DFH
      </Typography>
      <div className={styles.grid}>
        {DATA.map((dataItem) => (
          <Paper key={dataItem.title} className={styles.card}>
            <Typography
              className={styles.cardTitle}
              variant="h4"
              transform="uppercase"
              family="mono"
            >
              {dataItem.title}
            </Typography>
            <div className={clsx(styles.cardSubtitle, styles.green)}>
              {dataItem.subtitle.map((subtitleItem) => (
                <Typography key={subtitleItem} variant="body2">
                  {subtitleItem}
                </Typography>
              ))}
            </div>
            <div className={styles.cardDescription}>
              {dataItem.description.map((descriptionItem) => (
                <div
                  key={descriptionItem.title}
                  className={styles.cardDescriptionItem}
                >
                  <Typography
                    className={styles.cardDescriptionItemTitle}
                    variant="body2"
                  >
                    {descriptionItem.title}
                  </Typography>
                  {descriptionItem.subtitle && (
                    <Typography variant="body2" className={styles.green}>
                      {descriptionItem.subtitle}
                    </Typography>
                  )}
                  <div className={styles.cardDescriptionItemActions}>
                    {descriptionItem.action.map((actionItem, index) =>
                      React.cloneElement(actionItem, {
                        className: clsx(
                          styles.cardDescriptionItemActionsItem,
                          actionItem.props.className
                        ),
                        key: String(index)
                      })
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Paper>
        ))}
      </div>
    </Grid.Container>
  );
};
