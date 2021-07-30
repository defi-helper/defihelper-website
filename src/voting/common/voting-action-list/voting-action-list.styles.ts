import { createUseStyles } from 'react-jss';
type Theme = any;

export const useVotingActionListStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      padding: 32
    },

    list: {
      marginBottom: 32
    },

    action: {
      display: 'flex',

      '&:not(:last-child)': {
        paddingBottom: 24
      }
    },

    actionTitle: {
      marginBottom: 4
    },

    link: {
      color: theme.colors.blue2
    },

    editAction: {
      opacity: 0.64,
      marginRight: 8
    },

    number: {
      marginRight: 32
    },

    anotherAction: {
      fontSize: 20,
      lineHeight: '24px',
      borderRadius: 8,
      padding: '4px 12px'
    }
  }),
  {
    name: 'VotingActionList'
  }
);
