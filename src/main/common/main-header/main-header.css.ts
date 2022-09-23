import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 84px)',
  position: 'relative',

  '@media': {
    [theme.mediaQueries.md()]: {
      minHeight: 'calc(100vh - 116px)'
    }
  }
});

export const scrollIcon = style({
  position: 'absolute',
  bottom: '5%',
  left: 0,
  right: 0,
  margin: 'auto',
  display: 'none',

  '@media': {
    [theme.mediaQueries.md()]: {
      display: 'block'
    }
  }
});

export const col = style({
  padding: '0 16px'
});

export const hero = style({
  marginTop: 'auto',
  marginBottom: 'auto'
});

export const bottom = style({
  marginBottom: 20
});

export const subtitle = style({
  marginBottom: 40,
  color: theme.palette.grey1,
  fontSize: 18,
  lineHeight: '26px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      fontSize: 35,
      lineHeight: '42px'
    },

    [theme.mediaQueries.xl()]: {
      fontSize: 48,
      lineHeight: '42px'
    }
  }
});

export const actions = style({
  display: 'flex',
  gap: 32,
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.sm()]: {
      flexDirection: 'row'
    }
  }
});

export const watchPromo = style({
  color: theme.palette.blue,
  fontSize: 20,
  lineHeight: '28px',
  textTransform: 'uppercase',
  fontFamily: theme.fonts.mono,
  display: 'flex',
  gap: 8,
  alignItems: 'center',
  padding: '12px 14px'
});

export const text = style([
  col,
  style({
    display: 'flex',
    flexDirection: 'column',

    '@media': {
      [theme.mediaQueries.lg()]: {
        paddingTop: 64,
        paddingBottom: 80
      }
    }
  })
]);

export const logo = style({
  maxWidth: '100%',
  marginBottom: 40
});

export const counters = style({
  color: theme.palette.pink,
  display: 'flex',
  flexDirection: 'column',
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.up(760)]: {
      justifyContent: 'space-between',
      flexDirection: 'row'
    }
  }
});
