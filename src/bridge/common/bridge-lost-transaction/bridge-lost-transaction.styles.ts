import { createUseStyles } from 'react-jss';

export const useBridgeLostTransactionStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },

    input: {
      margin: 'auto 0'
    }
  },
  {
    name: 'BridgeLostTransaction'
  }
);
