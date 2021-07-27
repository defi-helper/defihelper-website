import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from '../theme';

export const container = style({
  margin: '0 auto',
  padding: '0 16px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: '1344px'
    }
  }
});

export const row = style({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 -16px'
});

export const items = styleVariants({
  initial: {
    alignItems: 'initial'
  },

  flexStart: {
    alignItems: 'flex-start'
  },

  center: {
    alignItems: 'center'
  },

  flexEnd: {
    alignItems: 'flex-end'
  },

  spaceBetween: {
    alignItems: 'fle'
  }
});

export const justify = styleVariants({
  initial: {
    justifyContent: 'initial'
  },

  flexStart: {
    justifyContent: 'flex-start'
  },

  center: {
    justifyContent: 'center'
  },

  flexEnd: {
    justifyContent: 'flex-end'
  },

  spaceBetween: {
    justifyContent: 'space-between'
  }
});
