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

export const list = style({
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  gap: 10
});

export const listItem = style({
  verticalAlign: 'middle',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const img = style({
  maxWidth: 150,
  width: '100%'
});

export const inactive = style({
  pointerEvents: 'none'
});
