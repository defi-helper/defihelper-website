import React from 'react';

import { Button } from 'src/common/button';
import { Dialog } from 'src/common/dialog';
import { Typography } from 'src/common/typography';
import * as styles from './contact-success.css';

export type ContactSuccessProps = {
  name: string;
  onConfirm: () => void;
};

export const ContactSuccess: React.VFC<ContactSuccessProps> = (props) => {
  return (
    <Dialog className={styles.root}>
      <Typography variant="h5" align="center" as="div" className={styles.text}>
        Thank you, {props.name}!<br />
        We will notify you about our updates.
      </Typography>
      <Button onClick={props.onConfirm} className={styles.button}>
        Got It
      </Button>
    </Dialog>
  );
};
