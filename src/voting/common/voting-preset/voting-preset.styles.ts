import { createUseStyles } from 'react-jss';

export const useVotingPresetStyles = createUseStyles(
  {
    root: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    },

    title: {
      marginBottom: 8
    },

    description: {
      marginBottom: 40
    },

    inputs: {
      overflowY: 'auto',
      marginBottom: 10,
      maxHeight: 392
    },

    action: {
      '&:not(:last-child)': {
        marginBottom: 32
      }
    },

    input: {
      display: 'block',

      '&:not(:last-child)': {
        marginBottom: 10
      }
    },

    button: {
      marginTop: 'auto'
    }
  },
  {
    name: 'VotingPreset'
  }
);
