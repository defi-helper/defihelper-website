import clsx from 'clsx';
import React from 'react';
import { useMedia } from 'react-use';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { Carousel } from 'src/common/carousel';
import { Button } from 'src/common/button';
import vlad_komissarov from 'src/assets/images/team/vlad_komissarov.png';
import iurii_gugnin from 'src/assets/images/team/iurii_gugnin.png';
import artem_tolkachev from 'src/assets/images/team/artem_tolkachev.png';
import join_us from 'src/assets/images/team/join_us.png';
import ilya_munerman from 'src/assets/images/team/ilya_munerman.jpeg';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/social/twitter.svg';
import { ReactComponent as LinkedInIcon } from 'src/assets/icons/social/linkedin.svg';
import { ButtonBase } from 'src/common/button-base';
import { Link } from 'src/common/link';
import * as styles from './main-team.css';

export type MainTeamProps = {
  className?: string;
};

type Team = {
  photo: string;
  name: string;
  role: string;
  description: string;
  actions: JSX.Element[];
};

const TEAM: Array<Team> = [
  {
    photo: vlad_komissarov,
    name: 'Vladislav Komissarov',
    role: 'CEO and founder',
    description:
      'Vlad has over 17 years of experience in web development. He has launched and managed a number of major ICT products and services on the CIS market.',
    actions: [
      <ButtonBase
        as={Link}
        target="_blank"
        href="https://twitter.com/cryptoappetit"
      >
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase
        as={Link}
        href="https://linkedin.com/in/vkomissarov"
        target="_blank"
      >
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: artem_tolkachev,
    name: 'Artem Tolkachev',
    role: 'Co-founder',
    description:
      'Former head of the Blockchain Lab at Deloitte. For over seven years, Artem has been one of the key opinion leaders in the CIS region in blockchain and tokenization.',
    actions: [
      <ButtonBase
        as={Link}
        target="_blank"
        href="https://twitter.com/artemtolkachev"
      >
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase
        as={Link}
        href="https://linkedin.com/in/artemtolkachev/"
        target="_blank"
      >
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: iurii_gugnin,
    name: 'George Goognin',
    role: 'Business development',
    description:
      'George has consulted 5 governments on crypto regulation, has structured over $250m of business loans, and has raised over $11m in venture funding.',
    actions: [
      <ButtonBase
        as={Link}
        target="_blank"
        href="https://twitter.com/GeorgeGoognin"
      >
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase
        as={Link}
        href="https://linkedin.com/in/georgegoognin/"
        target="_blank"
      >
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: ilya_munerman,
    name: 'Ilya Munerman',
    role: 'Head of R&D',
    description:
      'Ilya is the author of our DFH mathematical model. He is the Head of Scoring and Analytics at Interfax, has a PhD in economics, and works as an Assistant Professor at New Economic School and HSE University.',
    actions: [
      <ButtonBase
        as={Link}
        href="https://www.linkedin.com/in/ilya-munerman-1936a027"
        target="_blank"
      >
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: join_us,
    name: 'Join Us',
    role: '?',
    description:
      'Join the team and help build the next generation investment tool',
    actions: [
      <Button
        as="a"
        variant="outlined"
        href="mailto:hello@defihelper.io"
        target="_blank"
      >
        Apply
      </Button>
    ]
  }
];

const Wrap: React.FC = (props) => {
  const isMobile = useMedia('(max-width: 959px)');

  const Component: React.ElementType = isMobile ? Carousel : 'div';

  return <Component className={styles.list}>{props.children}</Component>;
};

export const MainTeam: React.VFC<MainTeamProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        behind the scenes
      </Typography>
      <Wrap>
        {TEAM.map((teammate) => (
          <Paper className={styles.card} key={teammate.name}>
            <img src={teammate.photo} alt="" className={styles.cardPhoto} />
            <Typography
              family="mono"
              transform="uppercase"
              className={styles.cardName}
            >
              {teammate.name}
            </Typography>
            <div className={styles.cardSubtext}>
              <Typography
                family="mono"
                transform="uppercase"
                className={styles.cardRole}
              >
                {teammate.role}
              </Typography>
              <Typography variant="body2">{teammate.description}</Typography>
            </div>
            <div>
              {teammate.actions.map((action, index) => {
                const key = index;

                return React.cloneElement(action, {
                  key,
                  className: styles.cardAction
                });
              })}
            </div>
          </Paper>
        ))}
      </Wrap>
    </Grid.Container>
  );
};
