import { createUseStyles } from 'react-jss';

export const useDocsRendererImageStyles = createUseStyles(
  {
    root: {
      borderRadius: 32,
      overflow: 'hidden',
      margin: '56px 0',
      display: 'block'
    }
  },
  {
    name: 'DocsRendererImage'
  }
);
