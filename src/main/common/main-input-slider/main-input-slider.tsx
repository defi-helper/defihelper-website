import React from 'react';
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

export const MainInputSlider: React.FC<MainInputSliderProps> = (props) => {
  return (
    <div className={clsx(styles.root, props.className)}>
      <input
        className={styles.input}
        value={bignumberUtils.format(props.value)}
        readOnly
      />
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
