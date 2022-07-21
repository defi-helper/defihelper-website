import React from 'react';

import { bignumberUtils } from 'src/common/bignumber-utils';
import { Grid } from 'src/common/grid';
import { Link } from 'src/common/link';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import articleEN from 'src/assets/pdf/Math_Behind_DeFiHelper.pdf';
import { RestakeStrategyQuery } from 'src/graphql/_generated-hooks';
import { MainChartCard } from '../main-chart-card';
import { MainInputSlider } from '../main-input-slider';
import * as styles from './main-chart.css';

export type MainChartProps = {
  className?: string;
  onChangeSum: (value: number) => void;
  onChangeApy: (value: number) => void;
  apy: number;
  sum: number;
  data?: RestakeStrategyQuery['restakeStrategy'];
};

const DATA_FIELDS = [
  {
    valueY: 'restake',
    dateX: 'date'
  },
  {
    valueY: 'hold',
    dateX: 'date'
  },
  {
    valueY: 'autostaking',
    dateX: 'date'
  }
];

type ChartData = {
  hold: number;
  autostaking: number;
  date: number;
};

export const MainChart: React.VFC<MainChartProps> = (props) => {
  const data = props.data?.everyDay.reduce<ChartData[]>(
    (acc, everyDayItem, index) => {
      return [
        ...acc,
        {
          hold: props.data?.hold[index]?.v ?? 0,
          autostaking: props.data?.optimal[index]?.v ?? 0,
          date: everyDayItem.t
        }
      ];
    },
    []
  );

  const [lastHoldValue] = props.data?.hold.slice(-1) ?? [];
  const [lastAutostakingValue] = props.data?.optimal.slice(-1) ?? [];

  return (
    <Grid.Container className={props.className}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        Earn more with our auto-staking feature
      </Typography>
      <Paper className={styles.chart}>
        <div className={styles.header}>
          <Typography variant="h4">What can you earn with</Typography>
          <MainInputSlider
            max={9999999}
            value={props.sum}
            onChange={props.onChangeSum}
            rightSection="$"
            className={styles.slider}
          />
          <Typography variant="h4">in a year with</Typography>
          <MainInputSlider
            max={9999}
            value={props.apy}
            onChange={props.onChangeApy}
            rightSection="APY"
            className={styles.slider}
          />
          <Typography variant="h4">pool?</Typography>
        </div>
        <div className={styles.grid}>
          <MainChartCard
            title="Just hold"
            color="hold"
            apy={props.apy}
            sum={lastHoldValue?.v}
            description={
              <>
                By just holding your bag on contract you will lost possible
                compound interest
              </>
            }
            dataFields={DATA_FIELDS}
            data={data ?? []}
            id="hold"
          />
          <MainChartCard
            title="Use auto-staking"
            color="autostaking"
            apy={bignumberUtils.mul(
              bignumberUtils.div(
                bignumberUtils.minus(lastAutostakingValue?.v, props.sum),
                props.sum
              ),
              100
            )}
            sum={lastAutostakingValue?.v}
            description={
              <>
                Autostaking feature increases your rewards by restaking your bag
                in right time when rewards is optimal over fees.{' '}
                <Link
                  target="_blank"
                  href={articleEN}
                  className={styles.howItWorks}
                  underline="always"
                >
                  How it works in detail?
                </Link>
              </>
            }
            dataFields={DATA_FIELDS}
            data={data ?? []}
            id="autostaking"
          />
        </div>
      </Paper>
    </Grid.Container>
  );
};
