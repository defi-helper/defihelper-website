import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  gap: 13,
  justifyContent: 'center',
  flexDirection: 'column',

  '@media': {
    [theme.mediaQueries.md()]: {
      gap: 43,
      flexDirection: 'row'
    }
  }
});

export const paper = style({
  border: `2px solid ${theme.palette.green1}`,
  maxWidth: 550,
  width: '100%',
  padding: 28,

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '41px 80px 40px 71px'
    }
  }
});

export const paperTitle = style({
  color: theme.palette.green1,
  marginBottom: 40
});

export const list = style({
  margin: 0,
  paddingLeft: 14
});

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 20
    }
  }
});

export const scheme = style({
  width: '100%',
  maxWidth: 340,

  '@media': {
    [theme.mediaQueries.md()]: {
      maxWidth: 477
    }
  }
});
