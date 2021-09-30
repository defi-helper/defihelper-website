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
import { config } from 'src/config';
import { URLS } from 'src/router/urls';
import * as styles from './layout-footer.css';

export type LayoutFooterProps = {
  onSubscribe?: () => void;
  className?: string;
};

const PROTOCOL = [
  {
    title: 'Launch app',
    link: config.LAUNCH_APP_URL ?? '/',
    target: ''
  },
  {
    title: 'Governance',
    link: `${config.LAUNCH_APP_URL}governance`,
    target: ''
  },
  {
    title: 'Tokenomics',
    link: URLS.tokenomics,
    target: ''
  },
  {
    title: 'Litepaper',
    link: URLS.whitepaper,
    target: ''
  },
  {
    title: 'Math behind DFH',
    link: '/',
    target: ''
  },
  {
    title: 'Contracts',
    link: '/',
    target: ''
  }
];

const SOCIAL = [
  {
    title: 'News channel',
    icon: TelegramIcon,
    link: '/',
    target: ''
  },
  {
    title: 'Community chat',
    icon: TelegramIcon,
    link: '/',
    target: ''
  },
  {
    title: 'Twitter',
    icon: TwitterIcon,
    link: '/',
    target: ''
  },
  {
    title: 'Discord',
    icon: DiscordIcon,
    link: '/',
    target: ''
  },
  {
    title: 'Medium',
    icon: MediumIcon,
    link: '/',
    target: ''
  },
  {
    title: 'Github',
    icon: GithubIcon,
    link: '/',
    target: ''
  },
  {
    title: 'Email',
    icon: TelegramIcon,
    link: '/',
    target: ''
  }
];

export const LayoutFooter: React.VFC<LayoutFooterProps> = (props) => {
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
              Protocol
            </Typography>
            <ul className={styles.list}>
              {PROTOCOL.map((protocolItem) => (
                <li className={styles.listItem} key={protocolItem.title}>
                  <Link
                    href={protocolItem.link}
                    target={protocolItem.target}
                    className={styles.grey}
                  >
                    {protocolItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className={clsx(styles.col, styles.mb56mobile)}>
            <Typography
              transform="uppercase"
              family="mono"
              variant="body2"
              className={styles.mb}
            >
              Social
            </Typography>
            <ul className={styles.list}>
              {SOCIAL.map((socialItem) => (
                <li className={styles.listItem} key={socialItem.title}>
                  <Link
                    href={socialItem.link}
                    className={clsx(styles.socialLink, styles.grey)}
                    target={socialItem.target}
                  >
                    <socialItem.icon className={styles.socialIcon} />
                    {socialItem.title}
                  </Link>
                </li>
              ))}
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
              Be the first one to learn about updates and new features
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
              Join the team and work on the future of DeFi automation with us
            </Typography>
            <Button variant="outlined">Apply</Button>
          </div>
        </Grid.Row>
      </Grid.Container>
    </footer>
  );
};
