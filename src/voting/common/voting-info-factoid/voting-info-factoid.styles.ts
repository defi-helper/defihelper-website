import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingInfoFactoidStyles = createUseStyles(
  (theme: Theme) => ({
    plate: {
      padding: '48px 16px',
      marginBottom: 40,

      [theme.breakpoints.md()]: {
        padding: '120px 72px',
        marginBottom: 80
      }
    },

    factoid: {
      display: 'flex',
      flexDirection: 'column',
      listStyle: 'none',
      padding: 0,
      margin: 0
    },

    factoidText: {
      display: 'grid',
      gridGap: 40,

      [theme.breakpoints.md()]: {
        gridTemplateColumns: '1fr 260px',
        gridGap: 106
      },

      [theme.breakpoints.lg()]: {
        gridTemplateColumns: '1fr 360px'
      }
    },

    factoidItem: {
      width: '100%',

      '&:not(:last-child)': {
        marginBottom: 16,

        [theme.breakpoints.md()]: {
          marginBottom: 24
        }
      }
    },

    factoidItemContent: {
      display: 'flex',
      fontSize: 14,
      lineHeight: '20px',

      '& *:first-child': {
        marginRight: 8,
        width: 25,
        fontWeight: 400
      },

      '& *:last-child': {
        width: 'calc(100% - 25px)'
      },

      [theme.breakpoints.md()]: {
        display: 'block',
        fontSize: 16,
        lineHeight: '24px',

        '& *:first-child': {
          marginRight: 0,
          fontWeight: 600
        }
      }
    }
  }),
  {
    name: 'VotingInfoFactoid'
  }
);
