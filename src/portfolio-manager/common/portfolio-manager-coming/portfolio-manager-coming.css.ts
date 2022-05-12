import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  maxWidth: 739,
  marginBottom: 34,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 68
    }
  }
});

export const grid = style({
  display: 'grid',
  gridRowGap: 20,

  '@media': {
    [theme.mediaQueries.md()]: {
      gridColumnGap: 110,
      gridRowGap: 76,
      gridTemplateColumns: '1.2fr 1fr'
    }
  }
});

export const cardTitle = style({
  marginBottom: 16
});

export const cardText = style({
  color: theme.palette.grey1
});
