import { createUseStyles } from 'react-jss';

export const useVotingDelegateStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    },

    input: {
      marginTop: 'auto'
    },

    button: {
      marginTop: 'auto'
    }
  },
  {
    name: 'VotingDelegate'
  }
);
