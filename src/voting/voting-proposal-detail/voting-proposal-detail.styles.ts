import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingProposalDetailStyles = createUseStyles(
  (theme: Theme) => ({
    voting: {
      padding: '48px 16px 0',
      maxWidth: 800,
      width: '100%',
      margin: '0 auto',

      [theme.breakpoints.md()]: {
        padding: '64px 0 0'
      }
    },

    title: {
      marginBottom: 16
    },

    subtitle: {
      marginBottom: 84
    },

    skeletonTitle: {
      margin: '0 auto 8px'
    },

    backLink: {
      display: 'flex',
      alignItems: 'center'
    },

    backLinkIcon: {
      width: 40,
      height: 40
    },

    backLinkText: {
      display: 'none',

      [theme.breakpoints.md()]: {
        display: 'inline'
      }
    },

    date: {
      marginLeft: 12
    },

    getVotes: {
      marginBottom: 12
    }
  }),
  {
    name: 'VotingProposalDetail'
  }
);
