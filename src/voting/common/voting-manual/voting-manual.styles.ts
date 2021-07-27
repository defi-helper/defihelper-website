import { createUseStyles } from 'react-jss';

export const useVotingManualStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      height: '100%'
    },

    loader: {
      margin: 'auto'
    }
  },
  {
    name: 'VotingManual'
  }
);
