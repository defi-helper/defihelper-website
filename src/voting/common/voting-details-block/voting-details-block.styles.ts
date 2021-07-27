import { createUseStyles } from 'react-jss';
type Theme = any;

export const useVotingDetailsBlockStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      marginBottom: 40
    },

    details: {
      padding: 32
    },

    line: {
      wordBreak: 'break-all',
      display: 'flex',

      '&:not(:last-child)': {
        marginBottom: 16
      }
    },

    lineId: {
      marginRight: 32
    },

    link: {
      color: theme.colors.blue2
    }
  }),
  {
    name: 'VotingDetailsBlock'
  }
);
