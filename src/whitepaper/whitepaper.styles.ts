import { createUseStyles } from 'react-jss';
type Theme = any;

export const useWhitepaperStyles = createUseStyles(
  (theme: Theme) => ({
    header: {
      padding: '32px 16px 0',

      [theme.breakpoints.md()]: {
        padding: '80px 16px 0'
      }
    },

    title: {
      marginBottom: 24,

      [theme.breakpoints.lg()]: {
        fontSize: 64,
        lineHeight: '72px'
      }
    },

    link: {
      fontSize: 24,
      lineHeight: '32px',

      '&:not(:last-child)': {
        marginRight: 40
      }
    },

    upButton: {
      position: 'fixed',
      bottom: 30,
      right: 30,
      width: 50,
      height: 50,
      opacity: 0,
      transition: 'opacity .3s ease-out',
      visibility: 'hidden'
    },

    upButtonVisible: {
      opacity: 1,
      visibility: 'visible'
    }
  }),
  {
    name: 'Whitepaper'
  }
);
