import React from 'react';
import { useMedia } from 'react-use';
import clsx from 'clsx';

import { Grid } from 'src/common/grid';
import { Typography } from 'src/common/typography';
import step1 from 'src/assets/images/trade-step-1.png';
import step2 from 'src/assets/images/trade-step-4.png';
import step3 from 'src/assets/images/trade-step-3.png';
import { Paper } from 'src/common/paper';
import { Button } from 'src/common/button';
import { Carousel } from 'src/common/carousel';
import * as styles from './invest-how-works.css';

export type InvestHowWorksProps = {
  className?: string;
};

const STEPS = [
  {
    title: 'step 1',
    img: step1,
    className: styles.stepsItemImg1,
    text: (
      <>
        connect your <br className={styles.stepsItemBr} />
        wallet
      </>
    )
  },
  {
    title: 'step 2',
    img: step2,
    className: styles.stepsItemImg2,
    text: (
      <>
        set up <br className={styles.stepsItemBr} />
        order
      </>
    )
  },
  {
    title: 'step 3',
    img: step3,
    className: styles.stepsItemImg3,
    text: (
      <>
        get <br className={styles.stepsItemBr} />
        profit
      </>
    )
  }
];

const Steps = (props: { children: React.ReactElement[] }) => {
  const isDesktop = useMedia('(min-width: 960px)');

  return isDesktop ? (
    <div className={styles.steps}>{props.children}</div>
  ) : (
    <Carousel className={styles.steps}>{props.children}</Carousel>
  );
};

export const InvestHowWorks: React.VFC<InvestHowWorksProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        transform="uppercase"
        family="mono"
        variant="h2"
        className={styles.title}
      >
        how it works
      </Typography>
      <Steps>
        {STEPS.map((step) => (
          <Paper radius={8} className={styles.stepsItem} key={step.title}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="h4"
              className={styles.stepsItemTitle}
            >
              {step.title}
            </Typography>
            <img src={step.img} alt="" className={step.className} />
            <Typography
              transform="uppercase"
              family="mono"
              variant="h4"
              className={styles.stepsItemText}
            >
              {step.text}
            </Typography>
          </Paper>
        ))}
      </Steps>
      <Button color="secondary" className={styles.connectWallet}>
        connect wallet
      </Button>
    </Grid.Container>
  );
};
