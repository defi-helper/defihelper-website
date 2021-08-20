import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflowX: 'hidden'
});

export const col = style({
  padding: '0 16px'
});

export const hero = style({
  marginBottom: 112,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 156
    }
  }
});

export const title = style({
  marginBottom: 16
});

export const subtitle = style({
  marginBottom: 24,
  color: theme.palette.grey1
});

export const text = composeStyles(
  col,
  style({
    '@media': {
      [theme.mediaQueries.lg()]: {
        width: '63%',
        paddingTop: 64,
        paddingBottom: 80
      }
    }
  })
);
