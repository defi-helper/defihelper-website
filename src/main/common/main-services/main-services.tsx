import clsx from 'clsx';
import React from 'react';

import { ReactComponent as crossChainTracking } from 'src/assets/icons/cross-chain-tracking.svg';
import { ReactComponent as help } from 'src/assets/icons/help.svg';
import { ReactComponent as security } from 'src/assets/icons/security.svg';
import { ReactComponent as automation } from 'src/assets/icons/automation.svg';
import { ReactComponent as scenarios } from 'src/assets/icons/scenarios.svg';
import { ReactComponent as bucket } from 'src/assets/icons/bucket.svg';
import { ReactComponent as hand } from 'src/assets/icons/hand.svg';
import { ReactComponent as haveanidea } from 'src/assets/icons/haveanidea.svg';
import { Grid } from 'src/common/grid';
import { Button } from 'src/common/button';
import { Typography } from 'src/common/typography';
import { config } from 'src/config';
import * as styles from './main-services.css';

export type MainServicesProps = {
  className?: string;
};

const SERVICES = [
  {
    image: crossChainTracking,
    title: 'cross-chain Tracking',
    description:
      'Track your portfolio in the ETH, Binance Smart Chain, Polygon, Avalanche and Waves blockchains. More chains coming soon.'
  },
  {
    image: help,
    title: 'smart notifications',
    description:
      'See how whales move, be instantly aware when big changes happen. Create custom notifications, use your imagination.'
  },
  {
    image: security,
    title: 'Security',
    description:
      "DFH doesn't have access to your private keys. The app performs only the actions that you authorize via a special contract that is always under your control."
  },
  {
    image: automation,
    title: 'Automation in a click',
    description:
      'Automate your DeFi strategy and earn higher rewards with autostaking and other no-code tools.'
  },
  {
    image: scenarios,
    className: styles.scenarios,
    title: 'scenarios Setup',
    description:
      'Combine various automation scenarios. You are limited only by your needs and imagination.'
  },
  {
    image: bucket,
    title: 'scenarios Marketplace',
    description: 'Use proven strategies and share your own for rewards.',
    action: (
      <Typography as="span" className={styles.comingSoon}>
        Coming soon
      </Typography>
    )
  },
  {
    image: hand,
    title: 'Designed For Everyone',
    description:
      'Create automation strategies for your portfolio in a few clicks or turn on existing tested strategies to earn more.'
  },
  {
    image: haveanidea,
    title: 'Have an idea?',
    description:
      'Just create a proposal,  vote for it and we will implement this feature for you.',
    action: (
      <Button
        variant="outlined"
        className={styles.request}
        as="a"
        href={`${config.LAUNCH_APP_URL}proposals`}
      >
        Request feature
      </Button>
    )
  }
];

export const MainServices: React.VFC<MainServicesProps> = (props) => {
  return (
    <div className={clsx(props.className)}>
      <Grid.Container>
        <Typography
          family="mono"
          transform="uppercase"
          variant="h2"
          className={styles.title}
        >
          Track and automate your portfolio from a single interface
        </Typography>
      </Grid.Container>
      <Grid.Container>
        <ul className={styles.grid}>
          {SERVICES.map((service) => (
            <li key={service.title} className={styles.card}>
              <service.image
                className={clsx(styles.cardImage, service.className)}
              />
              <Typography
                transform="uppercase"
                family="mono"
                variant="h4"
                className={styles.cardTitle}
              >
                {service.title}
              </Typography>
              <Typography className={styles.cardDescription}>
                {service.description}
              </Typography>
              {service.action}
            </li>
          ))}
        </ul>
      </Grid.Container>
    </div>
  );
};
