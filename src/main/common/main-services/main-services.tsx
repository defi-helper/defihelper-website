import clsx from 'clsx';
import React from 'react';

import { ButtonBase } from 'src/common/button-base';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import * as styles from './main-services.css';

export type MainServicesProps = {
  className?: string;
};

const SERVICES = [
  {
    image: '',
    title: 'cross-chain Tracking',
    description:
      'Track your portfolio in ETH, BSC and WAVES blockchains. More chains coming soon'
  },
  {
    image: '',
    title: 'smart notifications',
    description:
      'See how whales move, be instantly aware when big changes happen. Create custom notifications'
  },
  {
    image: '',
    title: 'Security',
    description: 'All your money only under your control, secure and safe'
  },
  {
    image: '',
    title: 'Automation in a click',
    description:
      'Automate your DeFi strategy and earn more rewards with autostaking and more no-code tools'
  },
  {
    image: '',
    title: 'scenarios Setup',
    description:
      'Combine various automation scenarios depends on your needs or your fantasy'
  },
  {
    image: '',
    title: 'scenarios Marketplace',
    description:
      'Use tested strategies of other users and share your own for a reward.'
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
          Boost Your portfolio with Powerful no-code Features
        </Typography>
      </Grid.Container>
      <Grid.Container>
        <ul className={styles.grid}>
          {SERVICES.map((service) => (
            <li key={service.title}>
              <Paper className={styles.card}>
                <div
                  className={styles.cardImage}
                  style={{ backgroundImage: `url(${service.image})` }}
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
              </Paper>
            </li>
          ))}
        </ul>
      </Grid.Container>
      <Grid.Container>
        <Paper className={styles.scenario}>
          <div className={styles.card}>
            <div
              className={styles.cardImage}
              style={{ backgroundImage: `url(${''})` }}
            />
            <Typography
              transform="uppercase"
              family="mono"
              variant="h4"
              className={styles.cardTitle}
            >
              Designed For Everyone
            </Typography>
            <Typography className={styles.cardDescription}>
              Create automation strategies for your portfolio in a few clicks or
              turn on existing tested strategies to earn more.
            </Typography>
          </div>
          <div className={styles.separator} />
          <div className={styles.script}>
            <div className={styles.scriptRow}>
              <div className={clsx(styles.scriptItem, styles.green)}>if</div>
              <div className={clsx(styles.scriptItem, styles.grey)}>PRICE</div>
              <div className={clsx(styles.scriptItem, styles.orange)}>↓</div>
              <div className={clsx(styles.scriptItem, styles.grey)}>24%</div>
            </div>
            <div className={styles.scriptRow}>
              <div className={clsx(styles.scriptItem, styles.green)}>then</div>
              <div className={clsx(styles.scriptItem, styles.grey)}>UNI</div>
              <div className={clsx(styles.scriptItem, styles.brown)}>→</div>
              <div className={clsx(styles.scriptItem, styles.grey)}>USDT</div>
            </div>
            <div className={styles.scriptRow}>
              <ButtonBase
                className={clsx(styles.scriptItem, styles.scriptButton)}
              >
                + Scenario
              </ButtonBase>
            </div>
          </div>
        </Paper>
      </Grid.Container>
    </div>
  );
};
