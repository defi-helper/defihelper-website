import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 92,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 96
    }
  }
});

export const grid = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 29,

  '@media': {
    [theme.mediaQueries.md()]: {
      flexDirection: 'row-reverse',
      alignItems: 'center'
    }
  }
});

export const gridImg = style({
  maxWidth: 234,
  width: '100%',
  margin: 'auto',

  '@media': {
    [theme.mediaQueries.md()]: {
      maxWidth: 543,
      margin: '0'
    }
  }
});

export const gridText = style({
  maxWidth: 'none',

  '@media': {
    [theme.mediaQueries.md()]: {
      maxWidth: 415,
      marginRight: 'auto'
    }
  }
});

export const gridTitle = style({
  marginBottom: 8,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 19
    }
  }
});

export const gridDescription = style({
  opacity: 0.64
});
