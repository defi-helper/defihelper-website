import React, { useEffect, useState } from 'react';

import { Grid } from 'src/common/grid';
import { Link } from 'src/common/link';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { MainChartCard } from '../main-chart-card';
import { MainInputSlider } from '../main-input-slider';
import * as styles from './main-chart.css';

export type MainChartProps = {
  className?: string;
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

const getData = () => {
  const mathRandom = () => Math.floor(Math.random() * 1000);

  return [
    {
      restake: '0',
      hold: '0',
      autostaking: '0',
      date: new Date(2021, 10, 20)
    },
    {
      restake: mathRandom(),
      hold: mathRandom(),
      autostaking: mathRandom(),
      date: new Date(2022, 1, 20)
    },
    {
      restake: mathRandom(),
      hold: mathRandom(),
      autostaking: mathRandom(),
      date: new Date(2022, 3, 20)
    },
    {
      restake: mathRandom(),
      hold: mathRandom(),
      autostaking: mathRandom(),
      date: new Date(2022, 7, 20)
    },
    {
      restake: mathRandom(),
      hold: mathRandom(),
      autostaking: mathRandom(),
      date: new Date(2022, 10, 20)
    },
    {
      restake: mathRandom(),
      hold: mathRandom(),
      autostaking: mathRandom(),
      date: new Date(2023, 1, 20)
    },
    {
      restake: mathRandom(),
      hold: mathRandom(),
      autostaking: mathRandom(),
      date: new Date(2023, 3, 20)
    }
  ];
};

export const MainChart: React.VFC<MainChartProps> = (props) => {
  const [sum, setSum] = useState(10000);
  const [apy, setApy] = useState(100);

  const [data, setData] = useState(getData());

  const handleChangeSum = (value: number) => {
    setSum(value);
  };

  const handleChangeApy = (value: number) => {
    setApy(value);
  };

  useEffect(() => {
    setData(getData());
  }, [sum, apy]);

  return (
    <Grid.Container className={props.className}>
      <Paper className={styles.chart}>
        <div className={styles.header}>
          <Typography variant="h4">What can you earn with</Typography>
          <MainInputSlider
            max={100000}
            value={sum}
            onChange={handleChangeSum}
            rightSection="$"
            className={styles.slider}
          />
          <Typography variant="h4">in a year with</Typography>
          <MainInputSlider
            max={999}
            value={apy}
            onChange={handleChangeApy}
            rightSection="APY"
            className={styles.slider}
          />
          <Typography variant="h4">pool?</Typography>
        </div>
        <div className={styles.grid}>
          <MainChartCard
            title="Restake manualy"
            color="restake"
            apy={apy}
            sum={sum}
            description={
              <>
                Restaking manualy you will probably lose more value on
                transaction fees and price change then you will earn
              </>
            }
            dataFields={DATA_FIELDS}
            data={data}
            id="restake"
          />
          <MainChartCard
            title="Just hold"
            color="hold"
            apy={apy * 2}
            sum={sum * 2}
            description={
              <>
                By just holding your bag on contract you will lost possible
                compound interest
              </>
            }
            dataFields={DATA_FIELDS}
            data={data}
            id="hold"
          />
          <MainChartCard
            title="Use autostaking"
            color="autostaking"
            apy={apy * 3}
            sum={sum * 3}
            description={
              <>
                Autostaking feature increases your rewards by restaking your bag
                in right time when rewards is optimal over fees.{' '}
                <Link href="/" className={styles.howItWorks} underline="always">
                  How it works in details?
                </Link>
              </>
            }
            dataFields={DATA_FIELDS}
            data={data}
            id="autostaking"
          />
        </div>
      </Paper>
    </Grid.Container>
  );
};
