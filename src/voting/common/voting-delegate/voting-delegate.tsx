import React from 'react';
import { useFormik } from 'formik';

import { Input, Button } from 'src/common';
import { useVotingDelegateStyles } from './voting-delegate.styles';

export type VotingDelegateProps = {
  onDelegate: (address: string) => void;
};

export const VotingDelegate: React.FC<VotingDelegateProps> = (props) => {
  const classes = useVotingDelegateStyles();

  const formik = useFormik({
    initialValues: {
      address: ''
    },

    onSubmit: ({ address }) => props.onDelegate(address)
  });

  return (
    <form className={classes.root} onSubmit={formik.handleSubmit} noValidate>
      <Input
        name="address"
        label="Deligant address"
        value={formik.values.address}
        variant="small"
        placeholder="Enter address..."
        onChange={formik.handleChange}
        className={classes.input}
        disabled={formik.isSubmitting}
      />
      <Button
        className={classes.button}
        type="submit"
        disabled={formik.isSubmitting}
        loading={formik.isSubmitting}
      >
        Delegate
      </Button>
    </form>
  );
};
