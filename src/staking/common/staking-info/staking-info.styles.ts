import { createUseStyles } from 'react-jss';

type Theme = any;

export const useStakingInfoStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      display: 'grid',
      padding: '40px 24px',
      gridGap: 48,

      [theme.breakpoints.lg()]: {
        padding: '80px 120px',
        gridGap: 104,
        gridTemplateColumns: '1fr 1fr 1fr'
      }
    },

    card: {
      display: 'flex',
      flexDirection: 'column',

      [theme.breakpoints.lg()]: {
        minHeight: 224
      }
    },

    cardTitle: {
      fontSize: 40,
      lineHeight: '48px',

      [theme.breakpoints.md()]: {
        fontSize: 64,
        lineHeight: '72px'
      }
    },

    cardBody: {
      marginBottom: 16,

      [theme.breakpoints.lg()]: {
        marginBottom: 'auto'
      }
    },

    cardDate: {
      opacity: 0.64
    }
  }),
  {
    name: 'StakingInfo'
  }
);
