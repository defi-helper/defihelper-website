import { createUseStyles } from 'react-jss';

export const useMarkdownHeadingStyles = createUseStyles(
  {
    root: {
      marginBottom: 16,

      '& *': {
        fontWeight: 400
      }
    }
  },
  {
    name: 'MarkdownHeading'
  }
);
