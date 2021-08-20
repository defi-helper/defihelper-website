import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const grid = style({
  display: 'grid',
  gridRowGap: 44,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(560px, 1fr))',
      gridColumnGap: 192,
      gridRowGap: 88
    }
  }
});

export const opacity = style({
  opacity: 0.64
});

export const cardIcon = style({
  marginBottom: 24
});

export const cardTitle = style({
  marginBottom: 16
});

export const cardDescription = style({});
