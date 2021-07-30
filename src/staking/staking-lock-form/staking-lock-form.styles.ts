import { createUseStyles } from 'react-jss';
type Theme = any;

export const useStakingLockFormStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      textAlign: 'center'
    },

    max: {
      marginBottom: 8,

      [theme.breakpoints.md()]: {
        marginBottom: 0
      }
    },

    title: {},

    link: {
      color: theme.colors.blue2
    },

    uniswapLink: {
      marginBottom: 24,

      [theme.breakpoints.md()]: {
        marginBottom: 64
      }
    },

    tooltip: {
      backgroundColor: theme.colors.error,
      color: 'white',
      borderRadius: 8,
      padding: 8,
      fontSize: 14,
      lineHeight: '20px',
      transition: 'none'
    },

    input: {
      textAlign: 'center',
      margin: 0,
      fontSize: 24,
      lineHeight: '32px',

      [theme.breakpoints.md()]: {
        fontSize: 40,
        lineHeight: '48px'
      }
    },

    skeleton: {
      marginTop: 16,
      minHeight: 40
    },

    changeNetwork: {
      paddingLeft: 0,
      paddingRight: 0,
      width: '100%'
    }
  }),
  {
    name: 'StakingLockForm'
  }
);
