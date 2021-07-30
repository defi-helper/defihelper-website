import { createUseStyles } from 'react-jss';

export const useDocsRendererMathStyles = createUseStyles(
  {
    root: {
      maxWidth: 'calc(100vw - 89px)',
      padding: '0 5px 0 0',
      margin: '0 -5px 0 0',
      overflow: 'hidden'
    },

    inlineBlock: {
      display: 'inline-block'
    }
  },
  {
    name: 'DocsRendererMath'
  }
);
