import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { TokenomicsReleaseChart } from '../tokenomics-release-chart';
import { TokenomicsUnlockChart } from '../tokenomics-unlock-chart';
import * as styles from './tokenomics-charts.css';

export type TokenomicsChartsProps = {
  className?: string;
};

const UNLOCK_DATA = [
  {
    'Legend Item 1': '0',
    'Legend Item 2': '0',
    'Legend Item 3': '0',
    'Legend Item 4': '0',
    'Legend Item 5': '0',
    'Legend Item 6': '0',
    'Legend Item 7': '0',
    'Legend Item 8': '0',
    date: new Date(2021, 10, 20)
  },
  {
    'Legend Item 1': '12',
    'Legend Item 2': '13',
    'Legend Item 3': '14',
    'Legend Item 4': '15',
    'Legend Item 5': '16',
    'Legend Item 6': '17',
    'Legend Item 7': '18',
    'Legend Item 8': '19',
    date: new Date(2022, 1, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2022, 3, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2022, 7, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2022, 10, 20)
  },

  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2023, 10, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2023, 1, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2023, 3, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2023, 7, 20)
  },
  {
    'Legend Item 1': '10',
    'Legend Item 2': '20',
    'Legend Item 3': '30',
    'Legend Item 4': '40',
    'Legend Item 5': '50',
    'Legend Item 6': '60',
    'Legend Item 7': '70',
    'Legend Item 8': '80',
    date: new Date(2023, 10, 20)
  }
];

const UNLOCK_DATA_FIELDS = [
  {
    valueY: 'Legend Item 1',
    dateX: 'date',
    color: '#39C077'
  },
  {
    valueY: 'Legend Item 2',
    dateX: 'date',
    color: '#977854'
  },
  {
    valueY: 'Legend Item 3',
    dateX: 'date',
    color: '#CCFF3C'
  },
  {
    valueY: 'Legend Item 4',
    dateX: 'date',
    color: '#EBD8BC'
  },
  {
    valueY: 'Legend Item 5',
    dateX: 'date',
    color: '#4463EE'
  },
  {
    valueY: 'Legend Item 6',
    dateX: 'date',
    color: '#E9CC67'
  },
  {
    valueY: 'Legend Item 7',
    dateX: 'date',
    color: '#F08BA9'
  },
  {
    valueY: 'Legend Item 8',
    dateX: 'date',
    color: '#E35137'
  }
];

const RELEASE_DATA = [
  {
    'Legend Item 1': '100',
    'Legend Item 2': '200',
    date: new Date(2021, 10, 20)
  },
  {
    'Legend Item 1': '300',
    'Legend Item 2': '400',
    date: new Date(2022, 1, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2022, 3, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2022, 7, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2022, 10, 20)
  },

  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2023, 10, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2023, 1, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2023, 3, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2023, 7, 20)
  },
  {
    'Legend Item 1': '400',
    'Legend Item 2': '500',
    date: new Date(2023, 10, 20)
  }
];

const RELEASE_DATA_FIELDS = [
  {
    valueY: 'Legend Item 1',
    dateX: 'date',
    color: '#CCFF3C'
  },
  {
    valueY: 'Legend Item 2',
    dateX: 'date',
    color: '#4463EE'
  }
];

export const TokenomicsCharts: React.VFC<TokenomicsChartsProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Paper className={styles.grid}>
        <div>
          <TokenomicsUnlockChart
            dataFields={UNLOCK_DATA_FIELDS}
            data={UNLOCK_DATA}
          />
        </div>
        <div>
          <TokenomicsReleaseChart
            dataFields={RELEASE_DATA_FIELDS}
            data={RELEASE_DATA}
          />
        </div>
      </Paper>
    </Grid.Container>
  );
};
