import { style, composeStyles } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: '24px 0',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '40px 0'
    }
  }
});

export const padding = style({
  padding: '0 16px'
});

export const logo = composeStyles(
  padding,
  style({
    width: 21,
    height: 16,

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: 31,
        height: 24
      }
    }
  })
);

export const menu = composeStyles(
  padding,
  style({
    marginLeft: 'auto'
  })
);

export const navLink = style({
  color: 'inherit',
  textTransform: 'uppercase',
  fontFamily: theme.fonts.mono,
  textDecoration: 'none',
  fontSize: 12,
  lineHeight: '16px',

  '@media': {
    [theme.mediaQueries.md()]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  },

  selectors: {
    '&:not(:last-child)': {
      marginRight: 32
    }
  }
});
