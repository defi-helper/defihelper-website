import { useFormikContext } from 'formik';
import React, { useMemo, useCallback, useRef } from 'react';
import { useToggle, useHover, useUpdateEffect } from 'react-use';
import Tippy from '@tippyjs/react';
import clsx from 'clsx';

import { ReactComponent as HelpIcon } from 'src/assets/icons/help.svg';
import { ButtonBase } from '../button-base';
import { Typography } from '../typography';
import { Input } from '../input';
import { Modal, SmallModal } from '../modal';
import { FormModalSelect } from './form-modal-select';
import { Asset } from '../types';
import { useFormModalStyles } from './form-modal.styles';
import { BN, humanizeNumeral } from '../bignumber';
import { COIN_ICONS } from '../constants';

export type FormModalValues = {
  currency: string;
  payment: string;
  youGet: string;
};

export type FormModalProps = {
  open: boolean;
  onClose?: () => void;
  tokenName: string;
  tokens: Asset[];
  balance?: string;
  tokenCost: string;
  withReward?: boolean;
  reward?: {
    product: BN;
    rewardGov: BN;
    rewardPercent: BN;
  };
  button: React.ReactNode;
  onPaymentChange?: () => void;
  onYouGetChange?: () => void;
};

export const FormModal: React.VFC<FormModalProps> = (props) => {
  const classes = useFormModalStyles();

  const [select, toggleSelect] = useToggle(false);

  const formik = useFormikContext<FormModalValues>();

  const currentToken = useMemo(() => {
    return props.tokens.find(({ symbol }) => symbol === formik.values.currency);
  }, [formik.values.currency, props.tokens]);

  const youGetRef = useRef(false);
  const paymentRef = useRef(false);

  useUpdateEffect(() => {
    if (props.tokenCost === '0' || paymentRef.current || select) return;

    props.onPaymentChange?.();
  }, [formik.values.payment, props.tokenCost, props.onPaymentChange]);

  useUpdateEffect(() => {
    if (props.tokenCost === '0' || youGetRef.current || select) return;

    props.onYouGetChange?.();
  }, [formik.values.youGet, props.tokenCost, props.onYouGetChange]);

  const help = useCallback(
    (isHovering: boolean) => (
      <span>
        <Tippy
          visible={isHovering}
          content={`The given price is not exact, as the final price will be calculated based on the current ${props.tokenName} conversion rate on exchange`}
          maxWidth={280}
          offset={[140, 8]}
          animation={false}
          className={classes.tippy}
        >
          <ButtonBase className={classes.hintButton}>
            <HelpIcon />
          </ButtonBase>
        </Tippy>
      </span>
    ),
    [classes.tippy, classes.hintButton, props.tokenName]
  );

  const [helpHoverable] = useHover(help);

  const reward = useCallback(
    (isHovering: boolean) => (
      <span>
        <Tippy
          visible={isHovering}
          content={
            <>
              <Typography variant="body2">
                Buying USDap during sale you will get extra{' '}
                {props.reward?.rewardPercent.toFormat(1) || '0'}% of you
                investment in BAG as a reward.
              </Typography>
              <br />
              <Typography variant="body2">
                Current price: 1 BAG = ${props.tokenCost}
              </Typography>
            </>
          }
          animation={false}
          maxWidth={280}
          offset={[140, 8]}
          className={classes.tippy}
        >
          <Typography variant="body2" align="center" className={classes.reward}>
            + {humanizeNumeral(props.reward?.rewardGov)} BAG reward
          </Typography>
        </Tippy>
      </span>
    ),
    [classes.tippy, classes.reward, props.reward, props.tokenCost]
  );

  const [rewardHoverable] = useHover(reward);

  const TokenIcon = COIN_ICONS.get(props.tokenName);

  const CurrencyIcon = COIN_ICONS.get(formik.values.currency);

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      onBack={select ? toggleSelect : undefined}
    >
      <SmallModal>
        {select && (
          <FormModalSelect
            value={formik.values.currency}
            options={props.tokens}
            onChange={(value: string) => {
              formik.resetForm();
              formik.setFieldValue('currency', value);
              toggleSelect();
            }}
          />
        )}
        {!select && (
          <form
            onSubmit={formik.handleSubmit}
            className={classes.root}
            noValidate
          >
            <div className={classes.inputs}>
              <div className={classes.row}>
                <Input
                  name="payment"
                  label="You spent"
                  placeholder="0.0"
                  type="number"
                  disabled={formik.isSubmitting}
                  value={formik.values.payment}
                  className={classes.inputSizes}
                  onChange={formik.handleChange}
                  onFocus={() => {
                    youGetRef.current = true;
                  }}
                  onBlur={() => {
                    youGetRef.current = false;
                  }}
                />
                <div
                  className={clsx(classes.input, {
                    [classes.emptyBalance]: !props.balance
                  })}
                >
                  {currentToken?.balance && (
                    <Typography
                      variant="body1"
                      component="div"
                      className={classes.labelWithBalance}
                    >
                      Balance:{' '}
                      <ButtonBase
                        type="button"
                        className={classes.balanceButton}
                        disabled={formik.isSubmitting}
                        onClick={
                          currentToken?.balance
                            ? () =>
                                formik.setFieldValue(
                                  'payment',
                                  currentToken?.balance
                                )
                            : undefined
                        }
                      >
                        {humanizeNumeral(currentToken?.balance ?? '0')}
                      </ButtonBase>
                    </Typography>
                  )}
                  <ButtonBase
                    type="button"
                    disabled={formik.isSubmitting}
                    className={clsx(classes.selectButton, classes.inputSizes)}
                    onClick={toggleSelect}
                  >
                    {CurrencyIcon && <CurrencyIcon />}
                    <span className={classes.currency}>
                      {formik.values.currency}↓
                    </span>
                  </ButtonBase>
                </div>
              </div>
              <div className={classes.row}>
                <div className={classes.input}>
                  <Input
                    name="youGet"
                    label="You will get"
                    placeholder="0.0"
                    type="number"
                    disabled={formik.isSubmitting}
                    value={formik.values.youGet}
                    onChange={formik.handleChange}
                    className={classes.inputSizes}
                    onFocus={() => {
                      paymentRef.current = true;
                    }}
                    onBlur={() => {
                      paymentRef.current = false;
                    }}
                  />
                </div>
                {props.withReward && rewardHoverable}
                <div
                  className={clsx(classes.input, {
                    [classes.emptyBalance]: !props.balance
                  })}
                >
                  {props.balance && (
                    <Typography
                      variant="body1"
                      component="div"
                      className={classes.labelWithBalance}
                    >
                      Balance: {humanizeNumeral(props.balance)}
                    </Typography>
                  )}
                  <Typography
                    variant="inherit"
                    component="div"
                    className={clsx(classes.tokenWrap, classes.inputSizes)}
                  >
                    {TokenIcon && <TokenIcon />}
                    <span className={classes.currency}>{props.tokenName}</span>
                  </Typography>
                </div>
              </div>
            </div>
            {currentToken?.symbol !== 'USDC' && !new BN(props.tokenCost).eq(1) && (
              <Typography
                variant="body1"
                align="center"
                className={classes.hint}
              >
                {props.tokenCost} {formik.values.currency} per {props.tokenName}
                , estimated price
                {helpHoverable}
              </Typography>
            )}
            {props.button}
          </form>
        )}
      </SmallModal>
    </Modal>
  );
};
