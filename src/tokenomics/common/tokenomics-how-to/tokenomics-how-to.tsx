import clsx from 'clsx';
import React from 'react';

import { Button } from 'src/common/button';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as UniswapIcon } from 'src/assets/icons/protocols/uniswap.svg';
import { ReactComponent as WavesIcon } from 'src/assets/icons/protocols/waves.svg';
import { ReactComponent as CakeIcon } from 'src/assets/icons/protocols/cake.svg';
import { GovTokenCirculationType } from 'src/graphql/_generated-hooks';
import { bignumberUtils } from 'src/common/bignumber-utils';
import * as styles from './tokenomics-how-to.css';

export type TokenomicsHowToProps = {
  className?: string;
  marketCap?: string;
  circulatingSupply?: string;
  circulation?: GovTokenCirculationType;
};

const DATA = [
  {
    title: 'Buy from the market',
    subtitle: ['marketCap', 'circulatingSupply'],
    description: [
      {
        title: 'Buy DFH on the top exchange markets and protocols',
        subtitle: '',
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
    subtitle: ['rewardsDays', 'rewardsTokens'],
    description: [
      {
        title:
          'Integer sagittis euismod vitae penatibus libero, facilisi. Nulla elit suspendisse mauris fringilla turpis posuere. ',
        subtitle: '',
        action: [<Button variant="outlined">Earn by staking</Button>]
      }
    ]
  },
  {
    title: 'Developers grants',
    subtitle: ['developersYears', 'developersTokens'],
    description: [
      {
        title: 'Help build new features and earn DFH tokens as a reward',
        subtitle: '',
        action: [<Button variant="outlined">Become a Developer</Button>]
      }
    ]
  },
  {
    title: 'Community grants',
    subtitle: ['communityDays', 'communityTokens'],
    description: [
      {
        title:
          'Aliquet turpis egestas neque pharetra nec a neque libero luctus. Diam sagittis volutpat dignissim suscipit.',
        subtitle: '',
        action: [<Button variant="outlined">Influence DFH</Button>]
      }
    ]
  },
  {
    title: 'Early ecosystem rewards',
    subtitle: ['earlyEcosistemDays', 'earlyEcosistemTokens'],
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
] as const;

export const TokenomicsHowTo: React.VFC<TokenomicsHowToProps> = (props) => {
  const { circulation } = props;

  const rewards = circulation?.rewards;
  const developers = circulation?.developers;
  const community = circulation?.community;
  const earlyEcosistem = circulation?.earlyEcosistem;

  const data = {
    marketCap: `$${bignumberUtils.format(props.marketCap)} Market Cap`,
    circulatingSupply: `${bignumberUtils.format(
      props.circulatingSupply
    )} DFH Circulating Supply`,
    rewardsDays: `${rewards?.timeLeft || 0} / ${
      rewards?.timeTotal || 0
    } days left`,
    rewardsTokens: `${bignumberUtils.format(
      rewards?.tokenLeft
    )} / ${bignumberUtils.format(rewards?.tokenTotal)} DHF left `,
    developersYears: `${developers?.timeLeft || 0} / ${
      developers?.timeTotal || 0
    } years left`,
    developersTokens: `${bignumberUtils.format(
      developers?.tokenLeft
    )} / ${bignumberUtils.format(developers?.tokenTotal)} DHF left `,
    communityDays: `${community?.timeLeft || 0} / ${
      community?.timeTotal || 0
    } days left`,
    communityTokens: `${bignumberUtils.format(
      community?.tokenLeft
    )} / ${bignumberUtils.format(community?.tokenTotal)} DHF left `,
    earlyEcosistemDays: `${earlyEcosistem?.timeLeft || 0} / ${
      earlyEcosistem?.timeTotal || 0
    } days left`,
    earlyEcosistemTokens: `${bignumberUtils.format(
      earlyEcosistem?.tokenLeft
    )} / ${bignumberUtils.format(earlyEcosistem?.tokenTotal)} DHF left `
  };

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
                  {data[subtitleItem]}
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
