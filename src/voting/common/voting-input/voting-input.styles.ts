import { createUseStyles } from 'react-jss';
import { rgba } from 'polished';

type Theme = any;

export const useVotingInputStyles = createUseStyles(
  (theme: Theme) => ({
    root: {
      position: 'relative',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      fontSize: 18,
      lineHeight: '20px',

      [theme.breakpoints.md()]: {
        fontSize: 32,
        lineHeight: '40px'
      }
    },

    input: {
      resize: 'none',
      display: 'inherit',
      backgroundColor: 'transparent',
      outline: 0,
      fontFamily: 'inherit',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      color: theme.colors.primary,
      padding: 0,
      letterSpacing: '-0.02em',
      width: '100%',
      textOverflow: 'inherit',
      height: 104,
      border: `1px solid ${rgba(theme.colors.primary, 0.16)}`,
      boxSizing: 'border-box',
      borderRadius: 24,
      textAlign: 'center',

      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },

      [theme.mixins.hover()]: {
        '&:hover': {
          borderColor: theme.colors.primary,
          boxShadow: `0px 0px 0px 1px ${theme.colors.primary}`
        }
      }
    },

    focus: {
      borderColor: 'transparent',
      boxShadow: 'none',

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

    readOnly: {},

    labelWrap: {},

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
    name: 'Input'
  }
);
