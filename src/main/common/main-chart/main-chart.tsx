import React from 'react';

import chart from 'src/assets/images/chart.png';
import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import * as styles from './main-chart.css';

export type MainChartProps = {
  className?: string;
};

export const MainChart: React.VFC<MainChartProps> = (props) => {
  return (
    <Grid.Container className={props.className}>
      <Paper className={styles.chart}>
        <img src={chart} alt="" className={styles.chartImg} />
      </Paper>
    </Grid.Container>
  );
};
