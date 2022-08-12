import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  marginBottom: 24
});

export const table = style({
  '@media': {
    [theme.mediaQueries.md()]: {
      background: theme.color.paper,
      borderRadius: 8
    }
  }
});

export const button = style({
  margin: '0 auto'
});
