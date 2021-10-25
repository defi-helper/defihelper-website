import { styleVariants, style } from '@vanilla-extract/css';

import { theme } from '../theme';

export const root = style({
  borderRadius: 8,
  textTransform: 'uppercase',
  fontFamily: theme.fonts.mono,
  padding: '8px 16px'
});

export const colors = styleVariants({
  primary: {
    background: theme.color.primary,
    border: `1px solid ${theme.color.primary}`,
    color: theme.palette.black1
  },

  secondary: {
    background: theme.color.secondary,
    color: theme.palette.black1,
    border: `1px solid ${theme.color.secondary}`
  },

  pink: {
    background: theme.palette.pink,
    color: theme.palette.black1,
    border: `1px solid ${theme.palette.pink}`
  }
});

export const varinats = styleVariants({
  contained: {},

  outlined: {
    backgroundColor: 'transparent',

    selectors: {
      [`&.${colors.primary}`]: {
        color: theme.color.textColor
      },

      [`&.${colors.secondary}`]: {
        color: theme.color.secondary
      }
    }
  }
});

export const sizes = styleVariants({
  small: {
    fontSize: 14,
    lineHeight: '20px',
    padding: '6px 12px'
  },

  medium: {
    fontSize: 16,
    lineHeight: '24px',
    padding: '8px 16px'
  },

  large: {
    fontSize: 20,
    lineHeight: '28px',
    padding: '12px 20px'
  }
});
