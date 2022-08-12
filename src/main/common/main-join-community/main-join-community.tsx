import React from 'react';
import clsx from 'clsx';

import { Typography } from 'src/common/typography';
import { Grid } from 'src/common/grid';
import { Button } from 'src/common/button';
import { useContactForm } from 'src/contacts/common/contact-form';
import { Input } from 'src/common/input';
import { analytics } from 'src/analytics';
import { Paper } from 'src/common/paper';
import { SOCIAL } from 'src/common/constants';
import { Link } from 'src/common/link';
import * as styles from './main-join-community.css';

export type MainJoinCommunityProps = {
  onSubmit: (formValues: { name: string; email: string }) => Promise<void>;
  className?: string;
};

export const MainJoinCommunity: React.FC<MainJoinCommunityProps> = (props) => {
  const formik = useContactForm(props.onSubmit);

  return (
    <Grid.Container className={props.className}>
      <Paper radius={8} className={styles.root}>
        <Typography
          transform="uppercase"
          family="mono"
          variant="h2"
          as="div"
          className={styles.title}
        >
          join our community
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
        <form className={styles.feedback} onSubmit={formik.handleSubmit}>
          <Typography variant="h4" className={styles.feedbackText}>
            Subscribe to receive more news
          </Typography>
          <div className={styles.feedbackCol}>
            <Input
              name="email"
              placeholder="e.g. hello@defihelper.io"
              value={formik.values.email}
              disabled={formik.isSubmitting}
              onChange={formik.handleChange}
              className={styles.input}
              error={Boolean(formik.errors.email)}
            />
          </div>
          <div className={styles.feedbackCol}>
            <Input
              name="name"
              placeholder="name"
              disabled={formik.isSubmitting}
              value={formik.values.name}
              onChange={formik.handleChange}
              className={styles.input}
              error={Boolean(formik.errors.name)}
            />
          </div>
          <div className={styles.feedbackButton}>
            <Button
              color="secondary"
              type="submit"
              loading={formik.isSubmitting}
              onClick={() => analytics.send('footer_join_mailing_list_click')}
            >
              Join
            </Button>
          </div>
        </form>
      </Paper>
    </Grid.Container>
  );
};
