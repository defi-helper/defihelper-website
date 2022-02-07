import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

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
  listStyle: 'none'
});

export const listItem = style({
  display: 'inline-block',
  marginBottom: 16,
  verticalAlign: 'middle',

  selectors: {
    '&:not(:last-child)': {
      marginRight: 16
    }
  }
});
