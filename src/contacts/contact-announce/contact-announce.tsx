import React from 'react';
import { useFormik } from 'formik';

import { Input } from 'src/common/input';
import { Button } from 'src/common/button';
import { isEmail } from 'src/common/is-email';
import { Dialog } from 'src/common/dialog';
import { contactsApi } from '../common/contacts-api';
import * as styles from './contact-announce.css';

export type ContactAnnounceProps = {
  open: boolean;
  onCancel: () => void;
  onConfirm: (name: string) => void;
};

const LIST_ID = '2';

export const ContactAnnounce: React.VFC<ContactAnnounceProps> = (props) => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: ''
    },

    validateOnBlur: false,
    validateOnChange: false,

    validate: (formValues) => {
      const errors: Partial<typeof formValues> = {};

      if (!formValues.email) {
        errors.email = 'Required';
      }

      if (!formValues.name) {
        errors.name = 'Required';
      }

      if (!isEmail(formValues.email)) {
        errors.email = 'invalid email';
      }

      return errors;
    },

    onSubmit: async (formValues) => {
      try {
        await contactsApi.sendForm(LIST_ID, formValues);

        props.onConfirm(formValues.name);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
        }
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
        >
          Notify me
        </Button>
      </form>
    </Dialog>
  );
};
