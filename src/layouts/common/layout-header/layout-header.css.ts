import { style, composeStyles, globalStyle } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: '24px 0',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '48px 0'
    }
  }
});

export const padding = style({
  padding: '0 16px'
});

export const logo = composeStyles(
  padding,
  style({
    width: 216,
    height: 16,

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: 308,
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

  selectors: {
    '&:not(:last-child)': {
      marginRight: 32
    }
  }
});

export const burger = style({
  width: 30,
  height: 30,
  marginLeft: 'auto',
  marginRight: 16
});

export const mobileMenu = style({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  top: 78,
  display: 'flex',
  flexDirection: 'column',
  background: theme.color.background,
  zIndex: 100,
  padding: 16
});

globalStyle(`${mobileMenu} > *:not(:last-child)`, {
  marginBottom: 32
});

export const launchButtonMobile = style({
  marginTop: 'auto'
});
