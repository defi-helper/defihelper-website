import { createUseStyles } from 'react-jss';
import { rgba } from 'polished';

type Theme = any;

export const useVotingCreateProposalStyles = createUseStyles(
  (theme: Theme) => ({
    form: {
      margin: '0 auto',
      padding: '64px 16px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.md()]: {
        maxWidth: 800,
        padding: '64px 0'
      }
    },

    button: {
      border: `1px solid ${rgba(theme.colors.primary, 0.16)}`,
      height: 104,
      borderRadius: 24,
      width: '100%',

      [theme.mixins.hover()]: {
        '&:hover': {
          opacity: 1,
          borderColor: theme.colors.primary,
          boxShadow: `0px 0px 0px 1px ${theme.colors.primary}`
        }
      }
    },

    inputs: {
      display: 'grid',
      gridGap: 16,
      marginBottom: 32
    },

    submit: {
      margin: 'auto'
    }
  }),
  {
    name: 'VotingCreateProposal'
  }
);
