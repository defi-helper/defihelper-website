import { style, styleVariants } from '@vanilla-extract/css';
import { transitions } from 'polished';

export const root = style({
  display: 'inline-flex',
  cursor: 'pointer',
  outline: 0,
  fontFamily: 'inherit',
  letterSpacing: '-0.02em',
  fontWeight: 'normal',
  ...transitions('opacity 0.3s ease')
});

export const underlines = styleVariants({
  none: {
    textDecoration: 'none'
  },

  always: {
    textDecoration: 'underline'
  },

  hover: {
    textDecoration: 'none'
  }
});

export const colors = styleVariants({
  primary: {
    color: 'currentColor'
  },

  blue: {}
});
