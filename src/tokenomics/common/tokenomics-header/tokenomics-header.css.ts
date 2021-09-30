import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflowX: 'hidden'
});

export const col = style({});

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

export const grid = style({
  display: 'grid',
  padding: '24px 32px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '48px 63px',
      gridTemplateColumns: `repeat(auto-fit, minmax(264px, 1fr))`
    }
  }
});

export const factoidTitle = style({
  color: theme.palette.grey1
});

export const factoidSubtitle = style({
  whiteSpace: 'nowrap'
});

export const progress = style({
  padding: '0 16px'
});

export const progressContainer = style({
  marginBottom: 12
});
