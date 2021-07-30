import { createUseStyles } from 'react-jss';

export const useBridgeFormStyles = createUseStyles(
  (theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },

    input: {
      textAlign: 'center',
      marginBottom: 4
    },

    max: {
      marginBottom: 6
    },

    feeWrap: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
    },

    fee: {},

    approve: {
      marginRight: 16
    },

    tippy: {
      padding: 16,
      borderRadius: 16,
      maxWidth: 200
    }
  }),
  {
    name: 'BridgeForm'
  }
);
