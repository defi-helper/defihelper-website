import clsx from 'clsx';
import React from 'react';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { ReactComponent as LogoHashexIcon } from 'src/assets/icons/logo_hashex.svg';
import { Button } from 'src/common/button';
import { Link } from 'src/common/link';
import * as styles from './main-security.css';

export type MainSecurityProps = {
  className?: string;
};

export const MainSecurity: React.VFC<MainSecurityProps> = (props) => {
  return (
    <Grid.Container className={clsx(styles.root, props.className)}>
      <div>
        <Typography
          variant="h2"
          family="mono"
          transform="uppercase"
          className={styles.title}
        >
          security
        </Typography>
        <div className={styles.grid}>
          <Paper radius={8} className={styles.audits}>
            <Typography
              variant="h4"
              family="mono"
              transform="uppercase"
              className={styles.auditsTitle}
            >
              Security audits
            </Typography>
            <LogoHashexIcon />
            <div className={styles.auditsButton}>
              <Button
                className={styles.auditsButtonInner}
                as={Link}
                href="https://github.com/HashEx/public_audits/blob/master/defi-helper/Defi-Helper_audit-report.pdf"
                target="_blank"
              >
                Documents
              </Button>
            </div>
          </Paper>
          <Paper radius={8} className={styles.yourMoney}>
            <Typography
              variant="h4"
              family="mono"
              transform="uppercase"
              className={styles.yourMoneyTitle}
            >
              Your money is only your money
            </Typography>
            <Typography className={styles.yourMoneyText}>
              Security is at the forefront of DeFiHelper. Each automation is
              represented by a special contract, which the user has to 'copy'
              and transfer money to, rather than buying some tokens and
              investing in 'special' pools. All of our source code is open, and
              audited by major players in the crypto market.
            </Typography>
          </Paper>
        </div>
      </div>
    </Grid.Container>
  );
};
