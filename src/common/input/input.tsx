import React from 'react';
import clsx from 'clsx';

import { useInputStyles } from './input.styles';

export type InputProps = React.HTMLProps<HTMLInputElement> & {
  label?: string;
  error?: boolean;
  htmlFor?: string;
  variant?: 'small' | 'normal';
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const classes = useInputStyles();

    const {
      className,
      onFocus,
      onBlur,
      error,
      variant = 'normal',
      ...restOfProps
    } = props;

    const classNamesWrapper = clsx(classes.root, className, {
      [classes.readOnly]: props.readOnly,
      [classes.disabled]: props.disabled,
      [classes.error]: error
    });

    const classNamesInput = clsx(classes.input, classes[variant], {
      [classes.readOnly]: props.readOnly,
      [classes.disabled]: props.disabled
    });

    const classNamesLabel = clsx(classes.label);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      onBlur?.(event);
    };

    return (
      <div className={classNamesWrapper}>
        <label htmlFor={props.htmlFor} className={classes.labelWrap}>
          <span className={classNamesLabel}>{props.label}</span>
          <input
            {...restOfProps}
            ref={ref}
            id={props.htmlFor}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className={classNamesInput}
          />
        </label>
      </div>
    );
  }
);

Input.displayName = 'Input';
