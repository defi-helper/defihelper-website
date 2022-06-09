import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gridGap: 30,

  '@media': {
    [theme.mediaQueries.md()]: {
      gridTemplateColumns: '1fr 1fr 1fr',
      gridColumnGap: 90,
      gridRowGap: 77
    }
  }
});

export const title = style({
  marginBottom: 16
});

export const description = style({
  color: theme.palette.grey1
});

export const icon = style({
  marginBottom: 25
});
