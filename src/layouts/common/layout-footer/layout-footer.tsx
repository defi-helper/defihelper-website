import clsx from 'clsx';
import React from 'react';

import { ReactComponent as LogoMini } from 'src/assets/icons/logo-mini.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/social/twitter.svg';
import { ReactComponent as GithubIcon } from 'src/assets/icons/social/github.svg';
import { ReactComponent as MediumIcon } from 'src/assets/icons/social/medium.svg';
import { ReactComponent as TelegramIcon } from 'src/assets/icons/social/telegram.svg';
import { ReactComponent as DiscordIcon } from 'src/assets/icons/social/discord.svg';
import { Typography } from 'src/common/typography';
import { Grid } from 'src/common/grid';
import { Button } from 'src/common/button';
import { Link } from 'src/common/link';
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
                <Link href="/" className={styles.grey}>
                  Governance
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={styles.grey}>
                  Carreers
                </Link>
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
                <Link href="/" className={clsx(styles.socialLink, styles.grey)}>
                  <MediumIcon className={styles.socialIcon} />
                  Medium
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={clsx(styles.socialLink, styles.grey)}>
                  <GithubIcon className={styles.socialIcon} />
                  Github
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={clsx(styles.socialLink, styles.grey)}>
                  <TwitterIcon className={styles.socialIcon} />
                  Twitter
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={clsx(styles.socialLink, styles.grey)}>
                  <TelegramIcon className={styles.socialIcon} />
                  Telegram
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link href="/" className={clsx(styles.socialLink, styles.grey)}>
                  <DiscordIcon className={styles.socialIcon} />
                  Discord
                </Link>
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
            <Typography
              variant="body2"
              className={clsx(styles.mb, styles.grey)}
            >
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
            <Typography
              variant="body2"
              className={clsx(styles.mb, styles.grey)}
            >
              Join the team and work on the future of DeFi automation with us.
            </Typography>
            <Button variant="outlined">Apply</Button>
          </div>
        </Grid.Row>
      </Grid.Container>
    </footer>
  );
};
