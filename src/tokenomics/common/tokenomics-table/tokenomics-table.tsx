import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from 'src/common/table';
import { Typography } from 'src/common/typography';
import * as styles from './tokenomics-table.css';

export type TokenomicsTableProps = {
  className?: string;
};

const HEAD = [
  'Reward Item',
  'Description',
  '%',
  'Destribution period',
  'DFH Amount'
];

const BODY = [
  [
    'Development grants',
    'Привлечение внешних разработчиков для развития функциональности ' +
    'протокола. Подключение новых протоколов, блокчейнов, разработка ' +
    'и доработка текущий сценариев автоматизации. Основная цель - ' +
    'привлечение новых пользователей с целью увеличения комиссий протокола.',
    '30%',
    '3 years',
    '300,000,000'
  ],
  [
    'Core contributors',
    'Разработка корневого функционала, управление протоколом в первый год.' +
    'Основная цель - обеспечить развитие и бесперебойное функционирование' +
    'протокола',
    '19%',
    '1-year vesting',
    '190,000,000'
  ],
  [
    'Early investors',
    'Вознаграждение инвесторам, которые спонсировали разработку и запуск ' +
    'протокола',
    '15%',
    '4 month moratorium on sale',
    '150,000,000'
  ],
  [
    'Marketing',
    'Выделение средств на маркетинговые активности с целью привлечения новых ' +
    'пользоватлей, роста узнаваемости продукта и партнерские проекты',
    '10%',
    '1 year',
    '100,000,000'
  ],
  [
    'Liquidity rewards',
    'Вознаграждение провайдерам ликвидности для обеспечения возможности ' +
    'обмена токена DFH. Основная цель - создать рынок для участников протокола',
    '10%',
    '1 year',
    '100,000,000'
  ],
  [
    'Early ecosystem reward',
    'Бонус ранним пользователям, которые воспользовались протоколом и ' +
    'порекменодвали наш продукт своим друзьям.',
    '8%',
    '3 month period with 6-month vesting',
    '80,000,000'
  ],
  [
    'Community grants',
    'Вознаграждение за обеспечение стабильного роста количества участников' +
    ' протокола',
    '7%',
    '1-year vesting',
    '70,000,000'
  ],
  [
    'Core contributors Launch Bonus',
    'Символический бонус корневой команде за запуск протокола',
    '1%',
    '1 month moratorium on sale',
    '10,000,000'
  ]
];

export const TokenomicsTable: React.VFC<TokenomicsTableProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <Typography
        variant="h2"
        transform="uppercase"
        family="mono"
        className={styles.title}
      >
        DFH INITIAL DISTRIBUTION
      </Typography>
      <Table>
        <TableHead className={styles.head}>
          <TableRow className={styles.row}>
            {HEAD.map((title) => (
              <TableCell key={title} className={styles.cell}>
                <Typography variant="body2" as="span">
                  {title}
                </Typography>
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {BODY.map((bodyItem, bodyItemIndex) => (
            <TableRow key={String(bodyItemIndex)} className={styles.row}>
              {bodyItem.map((value, index) => (
                <TableCell key={String(index)} className={styles.cell}>
                  <Typography variant="body2" as="span">
                    {value}
                  </Typography>
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Grid.Container>
  );
};
