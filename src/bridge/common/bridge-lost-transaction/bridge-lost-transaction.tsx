import { useFormik } from 'formik';
import React from 'react';

import { Button, Input } from 'src/common';
import { useBridgeLostTransactionStyles } from './bridge-lost-transaction.styles';

export type BridgeLostTransactionProps = {
  onSubmit: (formValues: { tx: string }) => Promise<void>;
  placeholder: 'bsc' | 'eth';
};

const placeholders: Record<BridgeLostTransactionProps['placeholder'], string> =
  {
    bsc: 'Please Input BSC Transaction Hash', // TODO: from bsc to eth
    eth: 'Please Input Ethereum Transaction Hash' // TODO: form eth to bsc
  };

export const BridgeLostTransaction: React.VFC<BridgeLostTransactionProps> = (
  props
) => {
  const classes = useBridgeLostTransactionStyles();

  const formik = useFormik({
    initialValues: {
      tx: ''
    },

    validateOnBlur: false,
    validateOnChange: false,

    validate: (formValues) => {
      const errors: Partial<typeof formValues> = {};

      if (!formValues.tx) {
        errors.tx = 'Transaction Hash is required';
      }

      return errors;
    },

    onSubmit: props.onSubmit
  });

  return (
    <form onSubmit={formik.handleSubmit} noValidate className={classes.root}>
      <Input
        placeholder={placeholders[props.placeholder]}
        name="tx"
        type="text"
        value={formik.values.tx}
        onChange={formik.handleChange}
        variant="small"
        className={classes.input}
      />
      <Button
        type="submit"
        disabled={formik.isSubmitting}
        loading={formik.isSubmitting}
      >
        {formik.errors.tx || 'Submit'}
      </Button>
    </form>
  );
};
