import { composeStyles, style } from '@vanilla-extract/css';

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
  padding: 0,
  margin: 0,
  listStyle: 'none',
  rowGap: 32

  // '@media': {
  //   [theme.mediaQueries.md()]: {
  //     gridTemplateRows: '1fr 1fr 1fr',
  //     gridTemplateColumns: 'calc(45% - 50px) 55%',
  //     columnGap: 50
  //   },

  //   [theme.mediaQueries.lg()]: {
  //     gridTemplateColumns: 'calc(45% - 112px) 55%',
  //     columnGap: 112
  //   }
  // }
});

export const gridItem = style({
  selectors: {
    '&:first-child': {
      gridRowStart: 1,
      gridRowEnd: 4
    }
  }
});

export const card = style({
  display: 'flex',
  flexDirection: 'column',
  maxWidth: '100%'
});

export const mb16 = style({
  marginBottom: 16
});

export const cardDate = composeStyles(mb16, style({}));

export const cardImg = composeStyles(
  mb16,
  style({
    maxWidth: '100%'
  })
);

export const cardTitle = style({
  marginBottom: 8
});

export const cardText = style({
  color: theme.palette.grey1
});
