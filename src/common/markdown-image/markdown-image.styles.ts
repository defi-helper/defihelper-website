import { createUseStyles } from 'react-jss';

export const useMarkdownImageStyles = createUseStyles(
  {
    root: {
      maxWidth: '100%',
      display: 'inline-block'
    }
  },
  {
    name: 'MarkdownImage'
  }
);
