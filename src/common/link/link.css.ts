import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from '../theme';

export const root = style({
  display: 'inline-flex',
  cursor: 'pointer',
  outline: 0,
  fontFamily: 'inherit',
  fontWeight: 'normal',
  textUnderlineOffset: 3,
  textDecorationColor: theme.palette.grey2,
  transition: 'opacity .3s ease-in-out',

  '@media': {
    [theme.mediaQueries.hover()]: {
      ':hover': {
        opacity: 0.75
      }
    }
  }
});

export const underlines = styleVariants({
  none: {
    textDecorationLine: 'none'
  },

  always: {
    textDecorationLine: 'underline'
  },

  hover: {
    textDecorationLine: 'none'
  }
});

export const colors = styleVariants({
  primary: {
    color: 'currentColor'
  },

  blue: {
    color: theme.palette.blue
  }
});
