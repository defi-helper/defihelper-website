import React from 'react';
import { analytics } from 'src/analytics';

import { useDialog } from 'src/common/dialog';
import { contactsApi } from 'src/contacts/common/contacts-api';
import { ContactAnnounce } from 'src/contacts/contact-announce';
import { ContactSuccess } from 'src/contacts/contact-success';
import { LayoutHeader, LayoutFooter, LayoutContainer } from '../common';
import * as styles from './landing-layout.css';

export const LandingLayout: React.FC = (props) => {
  const [openAnnouce] = useDialog(ContactAnnounce);
  const [openSuccess] = useDialog(ContactSuccess);

  const handleOpenAnnounce = async () => {
    analytics.send('footer_subscribe_click');
    try {
      const name = await openAnnouce();

      await openSuccess({ name });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  const handleSubscribe = async (formValues: {
    name: string;
    email: string;
  }) => {
    try {
      await contactsApi.sendForm('2', formValues);

      await openSuccess({ name: formValues.name });
    } catch (error) {
      if (error instanceof Error) {
        console.error(error.message);
      }
    }
  };

  return (
    <div className={styles.root}>
      <LayoutHeader />
      <LayoutContainer>{props.children}</LayoutContainer>
      <LayoutFooter
        onSubscribe={handleOpenAnnounce}
        onSubmit={handleSubscribe}
      />
    </div>
  );
};
