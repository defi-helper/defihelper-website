import { createUseStyles } from 'react-jss';

type Theme = any;

export const useVotingActionParametersStyles = createUseStyles(
  (theme: Theme) => ({
    title: {
      marginBottom: 40
    },

    button: {
      marginTop: 'auto'
    },

    inputs: {
      overflowY: 'auto',
      marginBottom: 10,
      maxHeight: 392,
      height: '100%'
    },

    inputWrap: {
      position: 'relative',

      '&:not(:last-child)': {
        marginBottom: 32
      }
    },

    input: {
      display: 'block',
      height: 'auto'
    },

    addPow: {
      position: 'absolute',
      right: 0,
      top: 0,
      bottom: 0,
      fontSize: 29,
      zIndex: 100
    },

    option: {
      margin: '0 -16px',
      justifyContent: 'flex-start',
      padding: '10px 16px',

      [theme.mixins.hover()]: {
        '&:hover': {
          opacity: 1,
          borderRadius: 8,
          background: theme.colors.grey1,
          color: theme.colors.black
        }
      }
    },

    customInput: {
      marginTop: 26
    }
  }),
  {
    name: 'VotingActionParameters'
  }
);
