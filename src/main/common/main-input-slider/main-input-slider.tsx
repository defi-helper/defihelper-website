import React, { useEffect, useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import clsx from 'clsx';

import { Typography } from 'src/common/typography';
import { bignumberUtils } from 'src/common/bignumber-utils';
import * as styles from './main-input-slider.css';

export type MainInputSliderProps = {
  className?: string;
  max: number;
  value: string | number;
  onChange: (value: number) => void;
  rightSection: React.ReactNode;
};

const REGEX = /[.*+?^${}()|[\]\\]/g;

export const escapeRegex = (string: string) => string.replace(REGEX, '\\$&');

const INPUT_REGEX = RegExp(`^\\d*(?:\\\\[.])?\\d*$`); // match escaped "." characters via in a non-capturing group

export const MainInputSlider: React.VFC<MainInputSliderProps> = (props) => {
  const [value, setValue] = useState(props.value as string);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const eventValue = event.target.value.replace(/,/g, '.');
    const valuePassed =
      eventValue === '' || INPUT_REGEX.test(escapeRegex(eventValue));

    if (!valuePassed || bignumberUtils.gt(eventValue, props.max)) return;

    // eslint-disable-next-line no-param-reassign
    event.target.value = eventValue;
    // eslint-disable-next-line no-param-reassign
    event.currentTarget.value = eventValue;

    props.onChange?.(Number(event.target.value));

    setValue(eventValue);
  };

  useEffect(() => {
    setValue(props.value as string);
  }, [props.value]);

  return (
    <div className={clsx(styles.root, props.className)}>
      <input className={styles.input} onChange={handleChange} value={value} />
      <Typography variant="h4" className={styles.rightSection}>
        {props.rightSection}
      </Typography>
      <Slider
        className={styles.slider}
        min={0}
        value={Number(props.value)}
        max={props.max}
        onChange={props.onChange}
        defaultValue={3}
      />
    </div>
  );
};
