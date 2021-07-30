import { createUseStyles } from 'react-jss';
import { rgba } from 'polished';

type Theme = any;

export const useVotingMediumEditorStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      width: '100%',
      overflowY: 'auto',
      border: `1px solid ${rgba(theme.colors.primary, 0.16)}`,
      borderRadius: 24,
      position: 'relative',
      fontSize: 16,
      lineHeight: '24px',

      '& *': {
        outline: 0,
        margin: 0
      },

      '& * a': {
        color: theme.colors.blue2
      },

      [theme.mixins.hover()]: {
        '&:hover': {
          borderColor: theme.colors.primary,
          boxShadow: `0px 0px 0px 1px ${theme.colors.primary}`
        }
      }
    },

    input: {
      height: 'inherit',
      width: 'inherit',
      padding: '40px 120px',
      fontSize: 16,
      lineHeight: '24px',

      '&:after': {
        pointerEvents: 'none',
        fontStyle: 'normal',
        fontSize: 16,
        lineHeight: '24px',
        opacity: 0,
        color: rgba(theme.colors.primary, 0.24)
      }
    },

    focus: {
      borderColor: 'transparent',
      boxShadow: 'none',

      '& $input:after': {
        opacity: 1
      },

      [theme.mixins.hover()]: {
        '&:hover': {
          borderColor: 'transparent',
          boxShadow: 'none'
        }
      }
    },

    disabled: {
      pointerEvents: 'none',
      opacity: 0.7
    },

    label: {
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)'
    },

    error: {}
  }),
  {
    name: 'VotingMediumEditor'
  }
);
