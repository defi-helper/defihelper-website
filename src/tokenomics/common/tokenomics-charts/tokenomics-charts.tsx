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
    'Development grants': '0',
    Marketing: '0',
    'Liquidity rewards': '0',
    'Community grants': '0',
    'Core contributors': '0',
    'Early investors': '0',
    'Early ecosystem reward': '0',
    'Core contributors Launch Bonus': '0',
    date: new Date(2021, 11, 1)
  },
  {
    'Development grants': '0',
    Marketing: '0',
    'Liquidity rewards': '0',
    'Community grants': '0',
    'Core contributors': '0',
    'Early investors': '0',
    'Early ecosystem reward': '0',
    'Core contributors Launch Bonus': '0',
    date: new Date(2021, 12, 1)
  },

  {
    'Development grants': '8333333.33333333',
    Marketing: '8333333.33333333',
    'Liquidity rewards': '8333333.33333333',
    'Community grants': '5833333.33333333',
    'Core contributors': '15833333.3333333',
    'Early investors': '0',
    'Early ecosystem reward': '13333333.3333333',
    'Core contributors Launch Bonus': '0',
    date: new Date(2022, 1, 1)
  },
  {
    'Development grants': '16666666.6666667',
    Marketing: '16666666.6666667',
    'Liquidity rewards': '16666666.6666667',
    'Community grants': '11666666.6666667',
    'Core contributors': '31666666.6666666',
    'Early investors': '150000000',
    'Early ecosystem reward': '26666666.6666666',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 2, 1)
  },
  {
    'Development grants': '25000000',
    Marketing: '25000000',
    'Liquidity rewards': '25000000',
    'Community grants': '17500000',
    'Core contributors': '47499999.9999999',
    'Early investors': '150000000',
    'Early ecosystem reward': '39999999.9999999',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 3, 1)
  },
  {
    'Development grants': '33333333.3333333',
    Marketing: '33333333.3333333',
    'Liquidity rewards': '33333333.3333333',
    'Community grants': '23333333.3333333',
    'Core contributors': '63333333.3333332',
    'Early investors': '150000000',
    'Early ecosystem reward': '53333333.3333332',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 4, 1)
  },
  {
    'Development grants': '41666666.6666666',
    Marketing: '41666666.6666666',
    'Liquidity rewards': '41666666.6666666',
    'Community grants': '29166666.6666666',
    'Core contributors': '79166666.6666665',
    'Early investors': '150000000',
    'Early ecosystem reward': '66666666.6666665',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 5, 1)
  },
  {
    'Development grants': '49999999.9999999',
    Marketing: '49999999.9999999',
    'Liquidity rewards': '49999999.9999999',
    'Community grants': '34999999.9999999',
    'Core contributors': '94999999.9999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 6, 1)
  },
  {
    'Development grants': '58333333.3333332',
    Marketing: '58333333.3333332',
    'Liquidity rewards': '58333333.3333332',
    'Community grants': '40833333.3333332',
    'Core contributors': '110833333.333333',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 7, 1)
  },
  {
    'Development grants': '66666666.6666665',
    Marketing: '66666666.6666665',
    'Liquidity rewards': '66666666.6666665',
    'Community grants': '46666666.6666665',
    'Core contributors': '126666666.666666',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 8, 1)
  },
  {
    'Development grants': '74999999.9999998',
    Marketing: '74999999.9999998',
    'Liquidity rewards': '74999999.9999998',
    'Community grants': '52499999.9999998',
    'Core contributors': '142499999.999999',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 9, 1)
  },
  {
    'Development grants': '83333333.3333331',
    Marketing: '83333333.3333331',
    'Liquidity rewards': '83333333.3333331',
    'Community grants': '58333333.3333331',
    'Core contributors': '158333333.333332',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 10, 1)
  },
  {
    'Development grants': '91666666.6666664',
    Marketing: '91666666.6666664',
    'Liquidity rewards': '91666666.6666664',
    'Community grants': '64166666.6666664',
    'Core contributors': '174166666.666665',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 11, 1)
  },
  {
    'Development grants': '99999999.9999997',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2022, 12, 1)
  },

  {
    'Development grants': '108333333.333333',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 1, 1)
  },
  {
    'Development grants': '116666666.666666',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 2, 1)
  },
  {
    'Development grants': '124999999.999999',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 3, 1)
  },
  {
    'Development grants': '133333333.333332',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 4, 1)
  },
  {
    'Development grants': '141666666.666665',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 5, 1)
  },
  {
    'Development grants': '149999999.999998',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 6, 1)
  },
  {
    'Development grants': '158333333.333331',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 7, 1)
  },
  {
    'Development grants': '166666666.666664',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 8, 1)
  },
  {
    'Development grants': '174999999.999997',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 9, 1)
  },
  {
    'Development grants': '183333333.33333',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 10, 1)
  },
  {
    'Development grants': '191666666.666663',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 11, 1)
  },
  {
    'Development grants': '199999999.999996',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2023, 12, 1)
  },

  {
    'Development grants': '208333333.333329',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 1, 1)
  },
  {
    'Development grants': '216666666.666662',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 2, 1)
  },
  {
    'Development grants': '224999999.999995',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 3, 1)
  },
  {
    'Development grants': '233333333.333328',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 4, 1)
  },
  {
    'Development grants': '241666666.666661',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 5, 1)
  },
  {
    'Development grants': '249999999.999994',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 6, 1)
  },
  {
    'Development grants': '258333333.333327',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 7, 1)
  },
  {
    'Development grants': '266666666.66666',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 8, 1)
  },
  {
    'Development grants': '274999999.999993',
    Marketing: '99999999.9999997',
    'Liquidity rewards': '99999999.9999997',
    'Community grants': '69999999.9999997',
    'Core contributors': '189999999.999998',
    'Early investors': '150000000',
    'Early ecosystem reward': '79999999.9999998',
    'Core contributors Launch Bonus': '10000000',
    date: new Date(2024, 9, 1)
  }
];

const UNLOCK_DATA_FIELDS = [
  {
    valueY: 'Development grants',
    dateX: 'date',
    color: '#39C077'
  },
  {
    valueY: 'Marketing',
    dateX: 'date',
    color: '#977854'
  },
  {
    valueY: 'Liquidity rewards',
    dateX: 'date',
    color: '#CCFF3C'
  },
  {
    valueY: 'Community grants',
    dateX: 'date',
    color: '#EBD8BC'
  },
  {
    valueY: 'Core contributors',
    dateX: 'date',
    color: '#4463EE'
  },
  {
    valueY: 'Early investors',
    dateX: 'date',
    color: '#E9CC67'
  },
  {
    valueY: 'Early ecosystem reward',
    dateX: 'date',
    color: '#F08BA9'
  },
  {
    valueY: 'Core contributors Launch Bonus',
    dateX: 'date',
    color: '#E35137'
  }
];

const RELEASE_DATA = [
  {
    Modeled: '0',
    date: new Date(2021, 11, 1)
  },
  {
    Modeled: '0',
    date: new Date(2021, 12, 1)
  },

  {
    Modeled: '59999999.9999999',
    date: new Date(2022, 1, 1)
  },
  {
    Modeled: '280000000',
    date: new Date(2022, 2, 1)
  },
  {
    Modeled: '340000000',
    date: new Date(2022, 3, 1)
  },
  {
    Modeled: '400000000',
    date: new Date(2022, 4, 1)
  },
  {
    Modeled: '460000000',
    date: new Date(2022, 5, 1)
  },
  {
    Modeled: '520000000',
    date: new Date(2022, 6, 1)
  },
  {
    Modeled: '566666666.666667',
    date: new Date(2022, 7, 1)
  },
  {
    Modeled: '613333333.333334',
    date: new Date(2022, 8, 1)
  },
  {
    Modeled: '660000000.000001',
    date: new Date(2022, 9, 1)
  },
  {
    Modeled: '706666666.666668',
    date: new Date(2022, 10, 1)
  },
  {
    Modeled: '753333333.333335',
    date: new Date(2022, 11, 1)
  },
  {
    Modeled: '800000000.000002',
    date: new Date(2022, 12, 1)
  },

  {
    Modeled: '808333333.333335',
    date: new Date(2023, 1, 1)
  },
  {
    Modeled: '816666666.666668',
    date: new Date(2023, 2, 1)
  },
  {
    Modeled: '825000000.000001',
    date: new Date(2023, 3, 1)
  },
  {
    Modeled: '833333333.333334',
    date: new Date(2023, 4, 1)
  },
  {
    Modeled: '841666666.666667',
    date: new Date(2023, 5, 1)
  },
  {
    Modeled: '850000000',
    date: new Date(2023, 6, 1)
  },
  {
    Modeled: '858333333.333333',
    date: new Date(2023, 7, 1)
  },
  {
    Modeled: '866666666.666666',
    date: new Date(2023, 8, 1)
  },
  {
    Modeled: '874999999.999999',
    date: new Date(2023, 9, 1)
  },
  {
    Modeled: '883333333.333332',
    date: new Date(2023, 10, 1)
  },
  {
    Modeled: '891666666.666665',
    date: new Date(2023, 11, 1)
  },
  {
    Modeled: '899999999.999998',
    date: new Date(2023, 12, 1)
  },

  {
    Modeled: '908333333.333331',
    date: new Date(2024, 1, 1)
  },
  {
    Modeled: '916666666.666664',
    date: new Date(2024, 2, 1)
  },
  {
    Modeled: '924999999.999997',
    date: new Date(2024, 3, 1)
  },
  {
    Modeled: '933333333.33333',
    date: new Date(2024, 4, 1)
  },
  {
    Modeled: '941666666.666663',
    date: new Date(2024, 5, 1)
  },
  {
    Modeled: '949999999.999996',
    date: new Date(2024, 6, 1)
  },
  {
    Modeled: '958333333.333329',
    date: new Date(2024, 7, 1)
  },
  {
    Modeled: '966666666.666662',
    date: new Date(2024, 8, 1)
  },
  {
    Modeled: '974999999.999995',
    date: new Date(2024, 9, 1)
  }
];

const RELEASE_DATA_FIELDS = [
  {
    valueY: 'Modeled',
    dateX: 'date',
    color: '#4463EE'
  }
  // {
  //   valueY: 'Real',
  //   dateX: 'date',
  //   color: '#CCFF3C'
  // }
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
