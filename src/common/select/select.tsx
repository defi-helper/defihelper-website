import clsx from 'clsx';
import React, { useCallback, useRef, useState } from 'react';
import { useClickAway, useUpdateEffect } from 'react-use';

import { Option, SelectContext } from './select.context';
import { useSelectStyles } from './select.styles';

export type SelectProps = {
  onChange?: (value?: string | number) => void;
  children: React.ReactNode;
  value?: string | number;
  label?: string;
  className?: string;
};

export const Select: React.FC<SelectProps> = (props) => {
  const classes = useSelectStyles();
  const dropdownRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<
    Record<string | number | symbol, Option>
  >({});
  const [currentOption, setCurrentOption] = useState<Option>({
    label: '',
    value: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useClickAway(dropdownRef, handleClose);

  const handleAddOption = useCallback((option: Option) => {
    setOptions((prevOptions) => {
      if (!option.value) return prevOptions;

      return {
        ...prevOptions,
        [option.value]: option
      };
    });
  }, []);
  const { onChange } = props;

  const handleSetOption = useCallback(
    (option: Option) => {
      setCurrentOption(option);

      handleClose();

      onChange?.(option.value);
    },
    [onChange]
  );

  const handleClick = () => {
    handleOpen();
  };

  useUpdateEffect(() => {
    if (!props.value && typeof props.value !== 'number') {
      setCurrentOption({});
    }
  }, [props.value]);

  useUpdateEffect(() => {
    if (props?.value && options[props.value]) {
      setCurrentOption(options[props.value]);
    }
  }, [props.value, options]);

  return (
    <SelectContext.Provider value={{ handleAddOption, handleSetOption }}>
      <div className={clsx(classes.wrap, props.className)} ref={dropdownRef}>
        <span className={classes.label}>{props.label}</span>
        <div
          className={classes.select}
          tabIndex={0}
          onClick={handleClick}
          onKeyPress={handleClick}
          role="button"
        >
          {currentOption?.label}{' '}
          <span
            className={clsx({
              [classes.open]: open
            })}
          >
            ↓
          </span>
        </div>
        <div
          className={clsx(classes.dropdown, {
            [classes.dropdownOpen]: open
          })}
        >
          {props.children}
        </div>
      </div>
    </SelectContext.Provider>
  );
};
