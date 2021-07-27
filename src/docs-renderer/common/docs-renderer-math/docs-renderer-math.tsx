import React from 'react';
import Tex from '@matejmazur/react-katex';
import 'katex/dist/katex.min.css';
import clsx from 'clsx';

import { useDocsRendererMathStyles } from './docs-renderer-math.styles';

export interface DocsRendererMathProps {
  value: string;
  block?: boolean;
}

export const DocsRendererMath: React.FC<DocsRendererMathProps> = (props) => {
  const classes = useDocsRendererMathStyles();

  return (
    <Tex
      math={props.value}
      block={props.block}
      className={clsx(classes.root, { [classes.inlineBlock]: !props.block })}
    />
  );
};
