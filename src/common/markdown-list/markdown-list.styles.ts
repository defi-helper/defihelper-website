import { createUseStyles } from 'react-jss';

export const useMarkdownListStyles = createUseStyles(
  () => ({
    root: {
      margin: '0 0 48px',
      padding: '0 0 0 30px'
    },

    listItem: {
      fontSize: 16,
      lineHeight: '20px',

      '& *': {
        margin: '0 !important'
      },

      '&:not(:last-child)': {
        marginBottom: 15
      }
    }
  }),
  {
    name: 'MarkdownList'
  }
);
