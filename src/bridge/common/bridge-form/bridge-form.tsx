import { useFormikContext } from 'formik';
import React from 'react';
import Tippy from '@tippyjs/react';

import { BN, Button, ButtonBase, Input, Typography } from 'src/common';
import { ReactComponent as QuestionIcon } from 'src/assets/icons/question.svg';
import { useBridgeFormStyles } from './bridge-form.styles';

export type BridgeFormProps = {
  balance?: BN;
  approve?: boolean;
  reset?: boolean;
};

export const BridgeForm: React.VFC<BridgeFormProps> = (props) => {
  const formik = useFormikContext<{ amount: string }>();

  const classes = useBridgeFormStyles();

  const balance = props.balance?.toString(10) ?? '0';

  return (
    <form className={classes.root} noValidate onSubmit={formik.handleSubmit}>
      <div>
        <Input
          placeholder="0"
          name="amount"
          type="number"
          className={classes.input}
          value={formik.values.amount}
          onChange={formik.handleChange}
        />
      </div>
      <ButtonBase
        type="button"
        className={classes.max}
        onClick={() => formik.setFieldValue('amount', balance)}
      >
        {balance} max
      </ButtonBase>
      <div className={classes.feeWrap}>
        <Typography variant="body1" className={classes.fee}>
          BurgerSwap fee: 0.05 BNB + Gas fee
        </Typography>
        <Tippy
          content={
            <>
              Gas refers to the fee, or pricing value, required to successfully
              conduct a transaction or execute a contract on the blockchain
            </>
          }
          className={classes.tippy}
          animation={false}
        >
          <div>
            <QuestionIcon />
          </div>
        </Tippy>
      </div>
      <div>
        <Button
          disabled={formik.isSubmitting}
          loading={formik.isSubmitting}
          type="submit"
        >
          {(!props.approve && !props.reset) ||
          new BN(formik.values.amount || '0').isLessThanOrEqualTo(0)
            ? formik.errors.amount || 'Transfer'
            : 'Approve'}
        </Button>
      </div>
    </form>
  );
};
