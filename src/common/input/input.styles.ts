import { createUseStyles } from 'react-jss';

export const useInputStyles = createUseStyles(
  () => ({
    root: {
      position: 'relative',
      whiteSpace: 'nowrap',
      display: 'inline-flex',
      fontSize: 20,
      lineHeight: '24px',
      height: 24
    },

    error: {},

    input: {
      display: 'inherit',
      backgroundColor: 'transparent',
      border: 0,
      outline: 0,
      fontFamily: 'inherit',
      color: 'inherit',
      padding: 0,
      letterSpacing: '-0.02em',
      width: '100%',
      fontSize: 'inherit',
      lineHeight: 'inherit',
      textAlign: 'inherit',
      height: 'inherit',
      MozAppearance: 'textfield',

      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      },

      '&::placeholder': {
        color: 'inherit',
        opacity: 0.24
      },

      '&::-ms-input-placeholder': {
        color: 'inherit',
        opacity: 0.24
      }
    },

    normal: {},

    disabled: {
      pointerEvents: 'none',
      opacity: 0.6
    },

    readOnly: {
      pointerEvents: 'none'
    },

    labelWrap: {
      width: '100%',
      display: 'inherit',
      flexDirection: 'column'
    },

    label: {
      letterSpacing: '-0.02em',
      width: '100%',
      pointerEvents: 'none',
      height: 'inherit',
      fontSize: 16,
      lineHeight: '24px'
    },

    small: {
      height: 24,
      fontSize: 16,
      lineHeight: '24px'
    }
  }),
  {
    name: 'Input'
  }
);
