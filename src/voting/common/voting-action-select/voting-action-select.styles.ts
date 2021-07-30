import { createUseStyles } from 'react-jss';
type Theme = any;

export const useVotingActionSelectStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      marginBottom: 24
    },

    optionsWrap: {
      margin: '0 -16px',
      overflowY: 'auto',
      maxHeight: 392
    },

    options: {
      display: 'flex',
      flexDirection: 'column'
    },

    option: {
      justifyContent: 'flex-start',
      padding: '10px 16px',

      [theme.mixins.hover()]: {
        '&:hover': {
          opacity: 1,
          borderRadius: 8,
          background: theme.colors.grey1,
          color: theme.colors.black
        }
      }
    }
  }),
  {
    name: 'VotingActionSelect'
  }
);
