import clsx from 'clsx';
import React from 'react';

import { ReactComponent as LogoMini } from 'src/assets/icons/logo-mini.svg';
import { Typography } from 'src/common/typography';
import { Grid } from 'src/common/grid';
import { Button, Link } from 'src/common';
import * as styles from './layout-footer.css';

export type LayoutFooterProps = {
  onSubscribe?: () => void;
  className?: string;
};

export const LayoutFooter: React.FC<LayoutFooterProps> = (props) => {
  return (
    <footer className={clsx(styles.root, props.className)}>
      <Grid.Container>
        <Grid.Row>
          <div className={clsx(styles.col, styles.logo)}>
            <LogoMini />
          </div>
          <div className={clsx(styles.col, styles.mb56mobile)}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="body2"
              className={styles.mb}
            >
              Project
            </Typography>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/">Governance</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/">Carreers</Link>
              </li>
            </ul>
          </div>
          <div className={clsx(styles.col, styles.mb56mobile)}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="body2"
              className={styles.mb}
            >
              Resources
            </Typography>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <Link href="/">Medium</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/">Github</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/">Twitter</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/">Telegram</Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/">Discord</Link>
              </li>
            </ul>
          </div>
          <div className={styles.col}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="body2"
              className={styles.mb}
            >
              Subscribtion
            </Typography>
            <Typography variant="body2" className={styles.mb}>
              Be the first one to know about updates and new features
            </Typography>
            <Button variant="outlined">Subscribe</Button>
          </div>
          <div className={styles.col}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="body2"
              className={styles.mb}
            >
              Join Us
            </Typography>
            <Typography variant="body2" className={styles.mb}>
              Join the team and work on the future of DeFi automation with us.
            </Typography>
            <Button variant="outlined">Apply</Button>
          </div>
        </Grid.Row>
      </Grid.Container>
    </footer>
  );
};
