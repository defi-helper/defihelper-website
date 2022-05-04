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
    'Development': '0',
    'Marketing': '0',
    'Liquidity rewards': '0',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '0',
    'Early ecosystem rewards': '0',
    'Early investors': '0',
    date: new Date(2022, 2, 1)
  },

  {
    'Development': '0',
    'Marketing': '9166667',
    'Liquidity rewards': '0',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '14300000',
    'Early ecosystem rewards': '0',
    'Early investors': '2000000',
    date: new Date(2022, 3, 1)
  },
  {
    'Development': '0',
    'Marketing': '18333333',
    'Liquidity rewards': '8333333',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '14300000',
    'Early ecosystem rewards': '6666667',
    'Early investors': '2000000',
    date: new Date(2022, 4, 1)
  },
  {
    'Development': '0',
    'Marketing': '27500000',
    'Liquidity rewards': '16666667',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '14300000',
    'Early ecosystem rewards': '13333333',
    'Early investors': '2000000',
    date: new Date(2022, 5, 1)
  },
  {
    'Development': '0',
    'Marketing': '36666667',
    'Liquidity rewards': '25000000',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '14300000',
    'Early ecosystem rewards': '20000000',
    'Early investors': '2000000',
    date: new Date(2022, 6, 1)
  },
  {
    'Development': '0',
    'Marketing': '45833333',
    'Liquidity rewards': '33333333',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '24175000',
    'Early ecosystem rewards': '26666667',
    'Early investors': '7000000',
    date: new Date(2022, 7, 1)
  },
  {
    'Development': '0',
    'Marketing': '55000000',
    'Liquidity rewards': '41666667',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '34050000',
    'Early ecosystem rewards': '33333333',
    'Early investors': '12000000',
    date: new Date(2022, 8, 1)
  },
  {
    'Development': '0',
    'Marketing': '64166667',
    'Liquidity rewards': '50000000',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '43925000',
    'Early ecosystem rewards': '40000000',
    'Early investors': '17000000',
    date: new Date(2022, 9, 1)
  },
  {
    'Development': '0',
    'Marketing': '73333333',
    'Liquidity rewards': '58333333',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '53800000',
    'Early ecosystem rewards': '46666667',
    'Early investors': '22000000',
    date: new Date(2022, 10, 1)
  },
  {
    'Development': '0',
    'Marketing': '82500000',
    'Liquidity rewards': '66666667',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '63675000',
    'Early ecosystem rewards': '53333333',
    'Early investors': '27000000',
    date: new Date(2022, 11, 1)
  },
  {
    'Development': '0',
    'Marketing': '91666667',
    'Liquidity rewards': '75000000',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '73550000',
    'Early ecosystem rewards': '60000000',
    'Early investors': '32000000',
    date: new Date(2022, 12, 1)
  },
  {
    'Development': '0',
    'Marketing': '100833333',
    'Liquidity rewards': '83333333',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '83425000',
    'Early ecosystem rewards': '66666667',
    'Early investors': '37000000',
    date: new Date(2023, 1, 1)
  },
  {
    'Development': '0',
    'Marketing': '110000000',
    'Liquidity rewards': '91666667',
    'Advisors': '0',
    'Team': '0',
    'Token sale': '93300000',
    'Early ecosystem rewards': '73333333',
    'Early investors': '42000000',
    date: new Date(2023, 2, 1)
  },

  {
    'Development': '6944444',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '5833333',
    'Team': '4992000',
    'Token sale': '103175000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '47000000',
    date: new Date(2023, 3, 1)
  },
  {
    'Development': '13888889',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '11666667',
    'Team': '9984000',
    'Token sale': '113050000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '52000000',
    date: new Date(2023, 4, 1)
  },
  {
    'Development': '20833333',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '17500000',
    'Team': '14976000',
    'Token sale': '122925000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '57000000',
    date: new Date(2023, 5, 1)
  },
  {
    'Development': '27777778',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '23333333',
    'Team': '19968000',
    'Token sale': '132800000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '62000000',
    date: new Date(2023, 6, 1)
  },
  {
    'Development': '34722222',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '29166667',
    'Team': '24960000',
    'Token sale': '142475000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '67000000',
    date: new Date(2023, 7, 1)
  },
  {
    'Development': '41666667',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '35000000',
    'Team': '29952000',
    'Token sale': '149350000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '72000000',
    date: new Date(2023, 8, 1)
  },
  {
    'Development': '48611111',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '40833333',
    'Team': '34944000',
    'Token sale': '156225000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '77000000',
    date: new Date(2023, 9, 1)
  },
  {
    'Development': '55555556',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '46666667',
    'Team': '39936000',
    'Token sale': '161000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '82000000',
    date: new Date(2023, 10, 1)
  },
  {
    'Development': '62500000',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '52500000',
    'Team': '44928000',
    'Token sale': '163500000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '87000000',
    date: new Date(2023, 11, 1)
  },
  {
    'Development': '69444445',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '58333333',
    'Team': '49920000',
    'Token sale': '166000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '92000000',
    date: new Date(2023, 12, 1)
  },
  {
    'Development': '76388889',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '64166667',
    'Team': '54912000',
    'Token sale': '168500000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '97000000',
    date: new Date(2024, 1, 1)
  },
  {
    'Development': '83333333',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '59904000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 2, 1)
  },

  {
    'Development': '90277778',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '64896000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 3, 1)
  },
  {
    'Development': '97222222',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '69888000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 4, 1)
  },
  {
    'Development': '104166667',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '74880000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 5, 1)
  },
  {
    'Development': '111111111',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '79872000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 6, 1)
  },
  {
    'Development': '118055556',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '84864000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 7, 1)
  },
  {
    'Development': '125000000',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '89856000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 8, 1)
  },
  {
    'Development': '131944445',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '94848000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 9, 1)
  },
  {
    'Development': '138888889',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '99840000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 10, 1)
  },
  {
    'Development': '145833333',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '104832000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 11, 1)
  },
  {
    'Development': '152777778',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '109824000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2024, 12, 1)
  },
  {
    'Development': '159722222',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '114816000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 1, 1)
  },
  {
    'Development': '166666667',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '119808000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 2, 1)
  },
  {
    'Development': '173611111',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 3, 1)
  },
  {
    'Development': '180555556',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 4, 1)
  },
  {
    'Development': '187500000',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 5, 1)
  },
  {
    'Development': '194444445',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 6, 1)
  },
  {
    'Development': '201388889',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 7, 1)
  },
  {
    'Development': '208333334',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 8, 1)
  },
  {
    'Development': '215277778',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 9, 1)
  },
  {
    'Development': '222222222',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 10, 1)
  },
  {
    'Development': '229166667',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 11, 1)
  },
  {
    'Development': '236111111',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2025, 12, 1)
  },
  {
    'Development': '243055556',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2026, 1, 1)
  },
  {
    'Development': '250000000',
    'Marketing': '110000000',
    'Liquidity rewards': '100000000',
    'Advisors': '70000000',
    'Team': '120000000',
    'Token sale': '170000000',
    'Early ecosystem rewards': '80000000',
    'Early investors': '100000000',
    date: new Date(2026, 2, 1)
  }
];

const UNLOCK_DATA_FIELDS = [
  {
    valueY: 'Development',
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
    valueY: 'Advisors',
    dateX: 'date',
    color: '#EBD8BC'
  },
  {
    valueY: 'Team',
    dateX: 'date',
    color: '#4463EE'
  },
  {
    valueY: 'Token sale',
    dateX: 'date',
    color: '#E9CC67'
  },
  {
    valueY: 'Early ecosystem rewards',
    dateX: 'date',
    color: '#F08BA9'
  },
  {
    valueY: 'Early investors',
    dateX: 'date',
    color: '#E35137'
  }
];

const RELEASE_DATA = [
  {
    Modeled: '0',
    date: new Date(2022, 2, 1)
  },
  {
    Modeled: '25466667',
    date: new Date(2022, 3, 1)
  },
  {
    Modeled: '49633334',
    date: new Date(2022, 4, 1)
  },
  {
    Modeled: '73800001',
    date: new Date(2022, 5, 1)
  },
  {
    Modeled: '97966668',
    date: new Date(2022, 6, 1)
  },
  {
    Modeled: '136133334',
    date: new Date(2022, 7, 1)
  },
  {
    Modeled: '174300001',
    date: new Date(2022, 8, 1)
  },
  {
    Modeled: '212466668',
    date: new Date(2022, 9, 1)
  },
  {
    Modeled: '250633334',
    date: new Date(2022, 10, 1)
  },
  {
    Modeled: '288800001',
    date: new Date(2022, 11, 1)
  },
  {
    Modeled: '326966668',
    date: new Date(2022, 12, 1)
  },
  {
    Modeled: '365133334',
    date: new Date(2023, 1, 1)
  },
  {
    Modeled: '403300001',
    date: new Date(2023, 2, 1)
  },

  {
    Modeled: '450069779',
    date: new Date(2023, 3, 1)
  },
  {
    Modeled: '481839557',
    date: new Date(2023, 4, 1)
  },
  {
    Modeled: '513609334',
    date: new Date(2023, 5, 1)
  },
  {
    Modeled: '545379112',
    date: new Date(2023, 6, 1)
  },
  {
    Modeled: '576948890',
    date: new Date(2023, 7, 1)
  },
  {
    Modeled: '605718668',
    date: new Date(2023, 8, 1)
  },
  {
    Modeled: '630988445',
    date: new Date(2023, 9, 1)
  },
  {
    Modeled: '656258223',
    date: new Date(2023, 10, 1)
  },
  {
    Modeled: '681528001',
    date: new Date(2023, 11, 1)
  },
  {
    Modeled: '706797779',
    date: new Date(2023, 12, 1)
  },
  {
    Modeled: '732067557',
    date: new Date(2024, 1, 1)
  },
  {
    Modeled: '755337334',
    date: new Date(2024, 2, 1)
  },

  {
    Modeled: '769773779',
    date: new Date(2024, 3, 1)
  },
  {
    Modeled: '784210223',
    date: new Date(2024, 4, 1)
  },
  {
    Modeled: '798646668',
    date: new Date(2024, 5, 1)
  },
  {
    Modeled: '813083112',
    date: new Date(2024, 6, 1)
  },
  {
    Modeled: '827519557',
    date: new Date(2024, 7, 1)
  },
  {
    Modeled: '841956001',
    date: new Date(2024, 8, 1)
  },
  {
    Modeled: '856392446',
    date: new Date(2024, 9, 1)
  },
  {
    Modeled: '868728890',
    date: new Date(2024, 10, 1)
  },
  {
    Modeled: '880665334',
    date: new Date(2024, 11, 1)
  },
  {
    Modeled: '892601779',
    date: new Date(2024, 12, 1)
  },
  {
    Modeled: '904538223',
    date: new Date(2025, 1, 1)
  },
  {
    Modeled: '916474668',
    date: new Date(2025, 2, 1)
  },
  {
    Modeled: '923611112',
    date: new Date(2025, 3, 1)
  },
  {
    Modeled: '930555557',
    date: new Date(2025, 4, 1)
  },
  {
    Modeled: '937500001',
    date: new Date(2025, 5, 1)
  },
  {
    Modeled: '944444446',
    date: new Date(2025, 6, 1)
  },
  {
    Modeled: '951388890',
    date: new Date(2025, 7, 1)
  },
  {
    Modeled: '958333335',
    date: new Date(2025, 8, 1)
  },
  {
    Modeled: '965277779',
    date: new Date(2025, 9, 1)
  },
  {
    Modeled: '972222223',
    date: new Date(2025, 10, 1)
  },
  {
    Modeled: '979166668',
    date: new Date(2025, 11, 1)
  },
  {
    Modeled: '986111112',
    date: new Date(2025, 12, 1)
  },
  {
    Modeled: '993055557',
    date: new Date(2026, 1, 1)
  },
  {
    Modeled: '1000000000',
    date: new Date(2026, 2, 1)
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
