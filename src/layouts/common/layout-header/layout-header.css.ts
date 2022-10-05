import { globalStyle, style } from '@vanilla-extract/css';

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

export const logo = style([
  padding,
  style({
    maxWidth: 21,
    width: '100%',
    height: '100%',

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: 31,
        height: 24
      }
    }
  })
]);

export const logoFull = style([
  padding,
  style({
    height: 24
  })
]);

globalStyle(`${logoFull} svg`, {
  width: '100%'
});

export const menuDesktop = style([
  padding,
  style({
    marginLeft: 'auto',
    display: 'flex'
  })
]);

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
  fontSize: 10,
  lineHeight: '16px',
  display: 'flex',
  padding: '2px 5px',
  alignItems: 'center',

  '@media': {
    [theme.mediaQueries.md()]: {
      fontSize: 16,
      lineHeight: '24px',
      padding: '8px 30px'
    },

    [theme.mediaQueries.hover()]: {
      ':hover': {
        color: theme.palette.green1
      }
    }
  }
});

export const coinPrice = style({
  display: 'flex',
  alignItems: 'center',
  gap: 4,
  marginRight: 5,
  marginLeft: 10,

  '@media': {
    [theme.mediaQueries.md()]: {
      gap: 10,
      marginRight: 24,
      marginLeft: 40
    },

    [theme.mediaQueries.hover()]: {
      ':hover': {
        color: theme.palette.green1
      }
    }
  }
});

export const activeClassName = style({
  color: theme.palette.green1
});

export const launchButton = style({
  '@media': {
    [theme.mediaQueries.down(411)]: {
      fontSize: 10,
      lineHeight: '15px',
      padding: '0 3px'
    }
  }
});
