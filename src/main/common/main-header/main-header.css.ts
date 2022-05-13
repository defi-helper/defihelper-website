import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 84px)',

  '@media': {
    [theme.mediaQueries.md()]: {
      minHeight: 'calc(100vh - 116px)'
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
      fontSize: 32,
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
  gap: 10
});

export const text = composeStyles(
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
);

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
