import clsx from 'clsx';
import React, { useState } from 'react';
import { useDebounce } from 'react-use';

import { Typography } from 'src/common/typography';
import { useTypewriterStyles } from './typewriter-effect.styles';

export interface TypewriterProps {
  children: string;
  delay?: number;
  className?: string;
  onEnd?: () => void;
}

export const Typewriter: React.VFC<TypewriterProps> = (props) => {
  const { children, delay = 200, className } = props;

  const classes = useTypewriterStyles();
  const [text, setText] = useState('');
  const [pointer, setPointer] = useState(0);

  useDebounce(
    () => {
      if (pointer < children.length) {
        setText(text + children[pointer]);
        setPointer(pointer + 1);
      }
    },
    delay,
    [pointer]
  );

  useDebounce(
    () => {
      if (pointer >= children.length) {
        setText('');
        setPointer(0);
        props.onEnd?.();
      }
    },
    3000,
    [pointer, children.length]
  );

  return (
    <Typography variant="inherit" className={clsx(classes.carret, className)}>
      {text}
    </Typography>
  );
};
