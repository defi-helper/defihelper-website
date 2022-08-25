import { ReactComponent as TwitterIcon } from 'src/assets/icons/social/twitter.svg';
import { ReactComponent as GithubIcon } from 'src/assets/icons/social/github.svg';
import { ReactComponent as MediumIcon } from 'src/assets/icons/social/medium.svg';
import { ReactComponent as TelegramIcon } from 'src/assets/icons/social/telegram.svg';
import { ReactComponent as DiscordIcon } from 'src/assets/icons/social/discord.svg';

export const SOCIAL = [
  {
    title: 'News channel',
    icon: TelegramIcon,
    link: 'https://t.me/defihelper_news',
    target: '_blank'
  },
  {
    title: 'Community chat',
    icon: TelegramIcon,
    link: 'https://t.me/defihelper_chat',
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
  }
];
