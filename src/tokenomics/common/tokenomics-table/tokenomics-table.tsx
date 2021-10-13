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
  '%',
  'Destribution period',
  'DFH Amount',
  'Description',
];

const BODY = [
  [
    'Development grants',
    '30%',
    '3 years (on demand)',
    '300,000,000',
    'Привлечение внешних разработчиков для развития функциональности ' +
    'протокола. Подключение новых протоколов, блокчейнов, разработка ' +
    'и доработка текущий сценариев автоматизации. Основная цель - ' +
    'привлечение новых пользователей с целью увеличения комиссий протокола.',
  ],
  [
    'Core contributors',
    '19%',
    '1-year vesting',
    '190,000,000',
    'Разработка корневого функционала, управление протоколом в первый год.' +
    'Основная цель - обеспечить развитие и бесперебойное функционирование' +
    'протокола',
  ],
  [
    'Early investors',
    '15%',
    '4 month moratorium on sale',
    '150,000,000',
    'Вознаграждение инвесторам, которые спонсировали разработку и запуск ' +
    'протокола',
  ],
  [
    'Marketing',
    '10%',
    '1 year (on demand)',
    '100,000,000',
    'Выделение средств на маркетинговые активности с целью привлечения новых ' +
    'пользоватлей, роста узнаваемости продукта и партнерские проекты',
  ],
  [
    'Liquidity rewards',
    '10%',
    '1 year (on demand)',
    '100,000,000',
    'Вознаграждение провайдерам ликвидности для обеспечения возможности ' +
    'обмена токена DFH. Основная цель - создать рынок для участников протокола',
  ],
  [
    'Early ecosystem reward',
    '8%',
    '6 month vesting',
    '80,000,000',
    'Бонус ранним пользователям, которые воспользовались протоколом и ' +
    'порекменодвали наш продукт своим друзьям.',
  ],
  [
    'Community grants',
    '7%',
    '1-year (on demand)',
    '70,000,000',
    'Вознаграждение за обеспечение стабильного роста количества участников' +
    ' протокола',
  ],
  [
    'Core contributors Launch Bonus',
    '1%',
    '1 month moratorium on sale',
    '10,000,000',
    'Символический бонус корневой команде за запуск протокола',
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
