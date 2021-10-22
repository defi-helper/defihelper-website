import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  width: '100%',
  color: theme.palette.blue
});

export const top = style({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  textAlign: 'center',

  '@media': {
    [theme.mediaQueries.md()]: {
      textAlign: 'left',
      display: 'block'
    }
  }
});

export const progress = style({
  display: 'flex',
  justifyContent: 'space-between',
  width: 'inherit',
  height: 'inherit'
});

export const item = style({
  height: 'inherit',
  border: `1px solid currentColor`,
  margin: '0 3px',
  width: '100%',

  selectors: {
    '&:first-child': {
      marginLeft: 0
    },

    '&:last-child': {
      marginRight: 0
    }
  }
});

export const filledItem = style({
  backgroundColor: 'currentColor'
});

export const topTitle = style({
  marginBottom: 10,
  display: 'flex'
});

export const link = style({
  color: theme.palette.white,
  textTransform: 'uppercase',
  marginTop: 8,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginTop: 0,
      marginLeft: 'auto'
    }
  }
});

export const bottomTitle = style({
  margin: '16px 0'
});

export const description = style({
  marginTop: 10,
  color: theme.palette.grey1,

  '@media': {
    [theme.mediaQueries.down(959)]: {
      textAlign: 'center'
    }
  }
});

export const big = style({
  width: 8,
  height: 24,

  '@media': {
    [theme.mediaQueries.md()]: {
      width: 12,
      height: 24
    }
  }
});

export const small = style({
  width: 34,
  height: 80
});
