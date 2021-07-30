import { createUseStyles } from 'react-jss';

type Theme = any;

export const useWalletButtonStyles = createUseStyles(
  (theme: Theme) => ({
    wrap: {
      display: 'flex',
      alignItems: 'center',
      position: 'relative'
    },

    connected: {
      border: `1px solid ${theme.colors.primary}`,
      borderRadius: 16,
      padding: 1
    },

    chip: {
      display: 'none',
      textTransform: 'capitalize',

      [theme.breakpoints.lg()]: {
        display: 'block',
        marginRight: 19
      }
    },

    account: {
      padding: '2px 8px 2px 16px',
      display: 'flex',
      whiteSpace: 'nowrap',
      alignItems: 'center'
    },

    walletIcon: {
      marginRight: 12
    }
  }),
  {
    name: 'WalletButton'
  }
);
