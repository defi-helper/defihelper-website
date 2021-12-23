import clsx from 'clsx';
import React from 'react';

import { ReactComponent as LogoMini } from 'src/assets/icons/logo-mini.svg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/social/twitter.svg';
import { ReactComponent as GithubIcon } from 'src/assets/icons/social/github.svg';
import { ReactComponent as MediumIcon } from 'src/assets/icons/social/medium.svg';
import { ReactComponent as TelegramIcon } from 'src/assets/icons/social/telegram.svg';
import { ReactComponent as DiscordIcon } from 'src/assets/icons/social/discord.svg';
import articleEN from 'src/assets/pdf/Math_Behind_DeFiHelper.pdf';
import articleRU from 'src/assets/pdf/Как_устроен_алгоритм_автостейкинга_DeFiHelper.pdf';
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
    link: URLS.litepaper,
    target: '_blank'
  },
  {
    title: 'Math behind DFH (EN)',
    link: articleEN,
    target: '_blank'
  },
  {
    title: 'Math behind DFH (RU)',
    link: articleRU,
    target: '_blank'
  },
  {
    title: 'Contracts',
    link: URLS.contracts,
    target: ''
  },
  {
    title: 'Coingecko',
    link: 'https://www.coingecko.com/en/coins/defihelper-governance-token',
    target: '_blank'
  },
  {
    title: 'Etherscan',
    link: 'https://etherscan.io/token/0x5f2080542ab6ae7e0b06778f0b2d263006297840',
    target: '_blank'
  },
  {
    title: 'Audit by HashEx',
    link: 'https://github.com/HashEx/public_audits/blob/master/defi-helper/Defi-Helper_audit-report.pdf',
    target: '_blank'
  },
  {
    title: 'Roadmap',
    link: 'https://bitter-drain-b3e.notion.site/fd2f13ff00a344579890d56906a160c8?v=7e9ba5539e2a4fe4ae216b1da21bf057',
    target: '_blank'
  }
];

const SOCIAL = [
  {
    title: 'News channel (EN)',
    icon: TelegramIcon,
    link: 'https://t.me/defihelper_news',
    target: '_blank'
  },
  {
    title: 'News channel (RU)',
    icon: TelegramIcon,
    link: 'https://t.me/defihelper_news_ru',
    target: '_blank'
  },
  {
    title: 'Community chat (EN)',
    icon: TelegramIcon,
    link: 'https://t.me/defihelper_chat',
    target: '_blank'
  },
  {
    title: 'Community chat (RU)',
    icon: TelegramIcon,
    link: 'https://t.me/defihelper_chat_ru',
    target: '_blank'
  },
  {
    title: 'Twitter',
    icon: TwitterIcon,
    link: 'https://twitter.com/defihelper',
    target: '_blank'
  },
  {
    title: 'Discord',
    icon: DiscordIcon,
    link: 'https://discord.gg/2sT3bmjPhf',
    target: '_blank'
  },
  {
    title: 'Medium',
    icon: MediumIcon,
    link: 'https://defihelper.medium.com\n',
    target: '_blank'
  },
  {
    title: 'Github',
    icon: GithubIcon,
    link: 'https://github.com/defi-helper',
    target: '_blank'
  },
  {
    title: 'Email',
    icon: TelegramIcon,
    link: 'mailto:hello@defihelper.io',
    target: '_blank'
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
            <Button variant="outlined" onClick={props.onSubscribe}>
              Subscribe
            </Button>
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
            <Button
              variant="outlined"
              as="a"
              href="mailto:hello@defiheper.io"
              target="_blank"
            >
              Apply
            </Button>
          </div>
        </Grid.Row>
      </Grid.Container>
    </footer>
  );
};
