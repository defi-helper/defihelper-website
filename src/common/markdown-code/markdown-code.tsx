import React from 'react';
import { useCopyToClipboard } from 'react-use';

import { ButtonBase } from '../button-base';
import * as styles from './markdown-code.css';

export type MarkdownCodeProps = {
  value: string;
};

export const MarkdownCode: React.FC<MarkdownCodeProps> = (props) => {
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <pre className={styles.root}>
      <code>{props.value}</code>
      <ButtonBase
        className={styles.button}
        onClick={(e) => {
          e.preventDefault();
          copyToClipboard(props.value);
        }}
      >
        {state.value && <>copied</>}
        {!state.value && <>copy</>}
      </ButtonBase>
    </pre>
  );
};
