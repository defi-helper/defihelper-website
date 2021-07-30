import { createUseStyles } from 'react-jss';
import { transitions } from 'polished';

export const useStakingCardStyles = createUseStyles(
  (theme: any) => ({
    stakingCard: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: 24,
      minHeight: 400,
      position: 'relative',
      boxShadow: `0px 0px 0px 1px ${theme.colors.primary}`,
      ...transitions('box-shadow .3s ease-in-out'),

      [theme.mixins.hover()]: {
        '&:hover': {
          boxShadow: `0px 0px 0px 2px ${theme.colors.primary}`,
          opacity: 1
        }
      }
    },

    loading: {
      pointerEvents: 'none'
    },

    title: {
      display: 'flex',
      fontSize: 24,
      lineHeight: '32px',

      [theme.breakpoints.md()]: {
        fontSize: 32,
        lineHeight: '40px'
      }
    },

    apy: {
      marginBottom: 30,
      fontSize: 24,
      lineHeight: '32px',

      [theme.breakpoints.md()]: {
        fontSize: 32,
        lineHeight: '40px'
      }
    },

    deposit: {
      marginBottom: 4
    },

    stacked: {
      position: 'absolute',
      top: 16,
      left: 16
    },

    icon: {
      width: 28,
      height: 28,
      marginRight: 4,

      [theme.breakpoints.md()]: {
        width: 32,
        height: 32
      }
    },

    plus: {
      margin: '0 8px'
    },

    status: {
      fontSize: 32,
      lineHeight: '40px',
      marginBottom: 40
    }
  }),
  {
    name: 'StakingCard'
  }
);
