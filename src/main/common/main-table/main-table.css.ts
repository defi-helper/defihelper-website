import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 72
    }
  }
});

export const head = style({
  color: theme.palette.grey1
});

export const row = style({
  borderBottom: `1px solid ${theme.palette.grey4}`
});

export const cell = style({
  verticalAlign: 'middle',
  whiteSpace: 'nowrap',

  selectors: {
    '&:not(:first-child)': {
      textAlign: 'center'
    }
  }
});
