import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingInfoDecisionStyles = createUseStyles(
  (theme: Theme) => ({
    decision: {
      display: 'grid',
      padding: '48px 16px',
      gridGap: 48,

      [theme.breakpoints.lg()]: {
        gridGap: 130,
        padding: '64px 80px',
        gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))'
      }
    },

    decisionCard: {
      border: 'none'
    },

    decisionCardList: {
      margin: 0,
      listStyleType: 'none',
      padding: 0
    },

    decisionCardListItem: {
      display: 'flex',

      '&:before': {
        content: '"- "',
        marginRight: 8,

        [theme.breakpoints.lg()]: {
          marginRight: 4,
          marginLeft: -12
        }
      }
    },

    decisionCardTitle: {
      marginBottom: 8,

      [theme.breakpoints.lg()]: {
        marginBottom: 24
      }
    }
  }),
  {
    name: 'VotingInfoDecision'
  }
);
