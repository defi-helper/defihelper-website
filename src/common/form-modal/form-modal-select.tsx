import React from 'react';
import clsx from 'clsx';

import { ButtonBase } from '../button-base';
import { useFormModalStyles } from './form-modal.styles';
import { Asset } from '../types';
import { humanizeNumeral } from '../bignumber';
import { COIN_ICONS } from '../constants';

export type FormModalSelectProps = {
  onChange: (value: string, balance: string) => void;
  options: Asset[];
  value: string;
};

export const FormModalSelect: React.FC<FormModalSelectProps> = (props) => {
  const classes = useFormModalStyles();

  return (
    <div className={classes.select}>
      {props.options.map((option) => {
        const Icon = COIN_ICONS.get(option.symbol);

        return (
          <ButtonBase
            type="button"
            key={option.symbol}
            className={clsx(classes.selectOption, {
              [classes.selectOptionActive]: option.symbol === props.value
            })}
            onClick={() => props.onChange(option.symbol, option.balance)}
          >
            {Icon && <Icon />}
            <span className={classes.currency}>{option.symbol}</span>
            <span className={clsx(classes.currency, classes.selectBalance)}>
              {humanizeNumeral(option.balance)}
            </span>
          </ButtonBase>
        );
      })}
    </div>
  );
};
