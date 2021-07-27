import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingProposalsStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      display: 'grid',
      gridGap: 16,
      width: '100%'
    },

    proposal: {
      width: '100%',
      backgroundColor: theme.colors.proposalPlate,
      flexWrap: 'wrap',
      borderRadius: 16,
      padding: 16,

      [theme.breakpoints.md()]: {
        padding: 32,
        justifyContent: 'space-between',
        borderRadius: 24,
        alignItems: 'center'
      }
    },

    proposalTransparent: {
      backgroundColor: 'transparent',
      border: `1px solid ${theme.colors.primary}`
    },

    proposalSkeleton: {
      height: 88,
      width: '100%'
    },

    proposalTitle: {
      width: '100%',

      [theme.breakpoints.md()]: {
        width: 'calc(100% - 200px)'
      }
    }
  }),
  {
    name: 'VotingProposals'
  }
);
