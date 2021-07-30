import { createUseStyles } from 'react-jss';

export const useNotFoundStyles = createUseStyles(
  {
    root: {
      padding: '64px 16px',
      maxWidth: 312,
      margin: 'auto'
    },

    title: {
      fontSize: 80,
      lineHeight: '88px'
    },

    subtitle: {
      marginBottom: 8
    }
  },
  {
    name: 'NotFound'
  }
);
