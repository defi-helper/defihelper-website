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
import { config } from 'src/config';
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
        title:
          'The DFH token will be launched only after the protocol collects at least $10,000 in fees as proof of concept.',
        subtitle: '',
        action: [
          config.UNISWAP_URL ? (
            <Button
              variant="outlined"
              className={styles.protocol}
              as="a"
              href={config.UNISWAP_URL}
              target="_blank"
            >
              <UniswapIcon className={styles.protocolLogo} /> UniSwap
            </Button>
          ) : (
            <div />
          ),
          config.WAVES_URL ? (
            <Button
              variant="outlined"
              className={styles.protocol}
              as="a"
              href={config.WAVES_URL}
              target="_blank"
            >
              <WavesIcon className={styles.protocolLogo} />
              Waves
            </Button>
          ) : (
            <div />
          ),
          config.PANCAKESWAP_URL ? (
            <Button
              variant="outlined"
              className={styles.protocol}
              as="a"
              href={config.PANCAKESWAP_URL}
              target="_blank"
            >
              <CakeIcon className={styles.protocolLogo} />
              PancakeSwap
            </Button>
          ) : (
            <div />
          )
        ]
      }
    ]
  },
  {
    title: 'Liquidity rewards',
    subtitle: ['rewardsDays', 'rewardsTokens'],
    description: [
      {
        title: 'Get DFH for free by staking tokens in liquidity pools',
        subtitle: '10% of total supply',
        action: []
      }
    ]
  },
  {
    title: 'Development grants',
    subtitle: ['developersYears', 'developersTokens'],
    description: [
      {
        title: 'Build new features and earn ample rewards in DFH',
        subtitle: '30% of total supply',
        action: [
          <Button
            as="a"
            variant="outlined"
            href="mailto:hello@defiheper.io"
            target="_blank"
          >
            Become a developer
          </Button>
        ]
      }
    ]
  },
  {
    title: 'Community grants',
    subtitle: ['communityDays', 'communityTokens'],
    description: [
      {
        title: 'Spread the word about DFH and get paid in DFH tokens',
        subtitle: '7% of total supply',
        action: [
          <Button
            variant="outlined"
            as="a"
            href="https://t.me/kbandito"
            target="_blank"
          >
            Influence DFH
          </Button>
        ]
      }
    ]
  },
  {
    title: 'Early ecosystem rewards',
    subtitle: ['earlyEcosistemDays', 'earlyEcosistemTokens'],
    description: [
      {
        title: 'Earn rewards by using autostaking',
        subtitle: '3% of total supply',
        action: [<Button variant="outlined">Use autostaking</Button>]
      },
      {
        title: 'Earn rewards by creating scripts',
        subtitle: '2% of total supply',
        action: [<Button variant="outlined">Automate</Button>]
      },
      {
        title: 'Earn rewards by inviting friends',
        subtitle: '1% of total supply',
        action: [<Button variant="outlined">Invite a friend</Button>]
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
            {/* <div className={clsx(styles.cardSubtitle, styles.green)}>
              {dataItem.subtitle.map((subtitleItem) => (
                <Typography key={subtitleItem} variant="body2">
                  {data[subtitleItem]}
                </Typography>
              ))}
            </div> */}
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
