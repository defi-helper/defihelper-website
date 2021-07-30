import { createUseStyles } from 'react-jss';
import { rgba, transitions } from 'polished';

type Theme = any;

export const useWalletListStyles = createUseStyles(
  (theme: Theme) => ({
    wrap: {
      display: 'flex',
      flexDirection: 'column',
      padding: 2,
      margin: -2
    },

    title: {
      marginBottom: 48
    },

    wallet: {
      boxShadow: `0px 0px 0px 1px ${rgba(theme.colors.primary, 0.24)}`,
      borderRadius: 16,
      padding: 9,
      width: '100%',
      justifyContent: 'space-between',
      ...transitions('box-shadow 0.3s ease'),

      '&:not(:last-child)': {
        marginBottom: 16
      },

      [theme.mixins.hover()]: {
        '&:hover': {
          opacity: 1,
          boxShadow: `0px 0px 0px 2px ${theme.colors.primary}`
        }
      }
    },

    walletTitle: {
      paddingLeft: 8
    },

    walletLogo: {
      '& svg': {
        width: 32,
        height: 32,

        [theme.breakpoints.md()]: {
          width: 40,
          height: 40
        }
      }
    },

    errorMessage: {
      marginTop: 20
    }
  }),
  {
    name: 'WalletList'
  }
);
