import { style, composeStyles } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: '24px 0',
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  background: theme.color.background,
  zIndex: 100,

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

export const menuDesktop = composeStyles(
  padding,
  style({
    marginLeft: 'auto',
    display: 'none',

    '@media': {
      [theme.mediaQueries.lg()]: {
        display: 'block'
      }
    }
  })
);

export const menuMobile = style({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
  position: 'relative',
  gap: 15,

  '@media': {
    [theme.mediaQueries.lg()]: {
      display: 'none'
    }
  }
});

export const menuMobileInner = style({
  position: 'absolute',
  right: 0,
  top: '100%',
  padding: '28px 20px 18px',
  minWidth: 258,
  zIndex: 100
});

export const menuMobileItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 15
    }
  }
});

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
