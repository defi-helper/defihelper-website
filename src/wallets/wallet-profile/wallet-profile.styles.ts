import { rgba, transitions } from 'polished';
import { createUseStyles } from 'react-jss';

type Theme = any;

export const useWalletProfileStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      '--stroke-circle': theme.colors.primary,
      '--stroke-hat': theme.colors.primary,
      '--fill-circle': theme.colors.secondary,
      '--fill-hat': 'transparent',
      ...transitions('fill 300ms ease-out', 'stroke 300ms ease-out'),

      [theme.mixins.hover()]: {
        '&:hover': {
          '--stroke-circle': 'transparent',
          '--stroke-hat': 'transparent',
          '--fill-circle': theme.colors.yellow,
          '--fill-hat': theme.colors.black
        }
      }
    },

    dropdown: {
      position: 'absolute',
      right: 0,
      top: '89%',
      paddingTop: 16,
      zIndex: 10
    },

    plate: {
      width: 512,
      height: 248,
      padding: 24,
      flexDirection: 'column'
    },

    header: {
      justifyContent: 'space-between',
      borderBottom: `1px solid ${rgba(theme.colors.primary, 0.08)}`,
      paddingBottom: 16,
      marginBottom: 16
    },

    buy: {
      color: theme.colors.blue2
    },

    row: {
      display: 'flex',

      [theme.breakpoints.down(600)]: {
        '& p': {
          fontSize: 14,
          lineHeight: '20px'
        }
      }
    },

    col: {
      overflow: 'hidden',
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis'
    },

    col35: {
      width: '35%'
    },

    col30: {
      width: '30%'
    },

    mb8: {
      marginBottom: 8
    },

    footer: {
      borderTop: `1px solid ${rgba(theme.colors.primary, 0.08)}`,
      paddingTop: 16,
      marginTop: 16,
      marginBottom: 16
    },

    button: {
      marginTop: 'auto',
      marginBottom: 16
    }
  }),
  {
    name: 'WalletProfile'
  }
);
