import { createUseStyles } from 'react-jss';

export const useStakingAttentionModalStyles = createUseStyles(
  (theme: any) => ({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100%'
    },

    content: {
      margin: '0 0 auto',

      '& > *:not(:last-child)': {
        marginBottom: 16
      }
    },

    title: {
      marginBottom: 16
    },

    button: {
      marginTop: 'auto',
      fontSize: 24,
      lineHeight: '32px',

      [theme.breakpoints.md()]: {
        fontSize: 32,
        lineHeight: '40px'
      }
    },

    attention: {
      color: theme.colors.red
    }
  }),
  {
    name: 'StakingAttentionModal'
  }
);
