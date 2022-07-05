import React from 'react';

import { Input } from 'src/common/input';
import { Button } from 'src/common/button';
import { Dialog } from 'src/common/dialog';
import { contactsApi } from '../common/contacts-api';
import * as styles from './contact-announce.css';
import { useContactForm } from '../common/contact-form';
import { analytics } from 'src/analytics';

export type ContactAnnounceProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: (name: string) => void;
};

const LIST_ID = '2';

export const ContactAnnounce: React.VFC<ContactAnnounceProps> = (props) => {
  const formik = useContactForm(async (formValues) => {
    try {
      await contactsApi.sendForm(LIST_ID, formValues);

      props.onConfirm(formValues.name);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  });

  return (
    <Dialog className={styles.root}>
      <form className={styles.form} onSubmit={formik.handleSubmit} noValidate>
        <div className={styles.inputs}>
          <Input
            name="email"
            placeholder="Enter address"
            disabled={formik.isSubmitting}
            onChange={formik.handleChange}
            className={styles.input}
            error={Boolean(formik.errors.email)}
          />
          <Input
            name="name"
            placeholder="Name"
            disabled={formik.isSubmitting}
            onChange={formik.handleChange}
            className={styles.input}
            error={Boolean(formik.errors.name)}
          />
        </div>
        <Button
          className={styles.button}
          type="submit"
          loading={formik.isSubmitting}
          onClick={() => analytics.send('footer_pop_up_notify_me_click')}
        >
          Notify me
        </Button>
      </form>
    </Dialog>
  );
};
