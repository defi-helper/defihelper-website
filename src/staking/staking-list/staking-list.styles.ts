import { createUseStyles } from 'react-jss';

type Theme = any;

export const useStakingListStyles = createUseStyles(
  (theme: Theme) => ({
    header: {
      marginBottom: 24,

      [theme.breakpoints.lg()]: {
        marginBottom: 48
      }
    },

    title: {
      maxWidth: 1200,
      margin: '0 auto 80px'
    },

    info: {
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      padding: '24px 0',

      [theme.breakpoints.md()]: {
        flexDirection: 'row'
      }
    },

    bag: {
      [theme.breakpoints.md()]: {
        marginRight: 32
      }
    },

    staking: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: 24,
      marginBottom: 24,

      [theme.breakpoints.md()]: {
        gridTemplateColumns: '1fr 1fr'
      },

      [theme.breakpoints.lg()]: {
        gridGap: 48,
        marginBottom: 48
      }
    },

    skeleton: {
      minHeight: 360
    }
  }),
  {
    name: 'StakingList'
  }
);
