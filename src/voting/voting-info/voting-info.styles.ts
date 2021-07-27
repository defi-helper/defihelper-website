import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingInfoStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      padding: '64px 16px 104px',

      [theme.breakpoints.md()]: {
        padding: '104px 40px 200px'
      }
    },

    block: {
      maxWidth: 1280,
      margin: 'auto'
    },

    titleWrap: {
      margin: '0 auto 64px',

      [theme.breakpoints.md()]: {
        margin: '0 auto 104px'
      }
    },

    title: {
      marginBottom: 24
    },

    link: {
      display: 'none',

      [theme.breakpoints.md()]: {
        display: 'block'
      }
    },

    investing: {
      marginBottom: 48,
      display: 'grid',
      gridGap: 32,
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))'
    },

    factoid: {
      margin: '0 auto 160px',

      [theme.breakpoints.md()]: {
        margin: '0 auto 200px'
      }
    },

    proposals: {
      margin: '0 auto 64px',

      [theme.breakpoints.md()]: {
        margin: '0 auto 48px'
      }
    },

    decision: {
      marginBottom: 14,

      [theme.breakpoints.md()]: {
        margin: 'auto'
      }
    }
  }),
  {
    name: 'VotingInfo'
  }
);
