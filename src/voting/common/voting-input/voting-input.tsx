import React, { useState } from 'react';
import clsx from 'clsx';

import { useVotingInputStyles } from './voting-input.styles';

export type VotingInputProps = {
  component?: 'input' | 'textarea';
  label?: string;
  error?: boolean;
  htmlFor?: string;
  className?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  value?: string;
  name?: string;
  disabled?: boolean;
  onChange?: (
    event: React.FormEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => void;
};

export const VotingInput: React.FC<VotingInputProps> = (props) => {
  const classes = useVotingInputStyles();
  const [focus, setFocus] = useState(false);

  const {
    className,
    onFocus,
    onBlur,
    error,
    component = 'input',
    ...restOfProps
  } = props;

  const classNamesWrapper = clsx(classes.root, className, {
    [classes.disabled]: props.disabled
  });

  const classNamesVotingInput = clsx(classes.input, {
    [classes.focus]: restOfProps.value || focus
  });

  const classNamesLabel = clsx(classes.label, {
    [classes.error]: error
  });

  const handleFocus = () => {
    onFocus?.();
    setFocus(true);
  };

  const handleBlur = () => {
    onBlur?.();
    setFocus(false);
  };

  const Component = component;

  return (
    <div className={classNamesWrapper}>
      <label htmlFor={props.htmlFor} className={classes.labelWrap}>
        {!restOfProps.value && !focus && (
          <span className={classNamesLabel}>{props.label}</span>
        )}
        <Component
          {...restOfProps}
          id={props.htmlFor}
          onFocus={handleFocus}
          onBlur={handleBlur}
          className={classNamesVotingInput}
        />
      </label>
    </div>
  );
};
