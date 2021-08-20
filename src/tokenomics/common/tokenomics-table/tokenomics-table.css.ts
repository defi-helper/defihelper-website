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
  paddingBottom: 32,

  selectors: {
    '&:first-child': {
      color: theme.palette.grey1,
      width: '15%'
    },
    '&:nth-child(2)': {
      width: '20%'
    },
    '&:nth-child(3)': {
      color: theme.palette.grey1,
      width: '25%'
    },
    '&:nth-child(4)': {
      color: theme.palette.grey1,
      width: '20%'
    },
    '&:nth-child(5)': {
      color: theme.palette.grey1,
      width: '20%',
      textAlign: 'right'
    }
  }
});
