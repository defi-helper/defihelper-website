import { createUseStyles } from 'react-jss';

export const useMarkdownCodeStyles = createUseStyles(
  () => ({
    root: {
      borderRadius: 8,
      padding: '10px 8px',
      width: '100%',
      overflowX: 'auto',
      position: 'relative',
      wordWrap: 'break-word',
      whiteSpace: 'pre-wrap'
    },

    button: {
      position: 'absolute',
      right: 8,
      top: 8,
      padding: '2px 8px',
      borderRadius: 5
    }
  }),
  {
    name: 'MarkdownCode'
  }
);
