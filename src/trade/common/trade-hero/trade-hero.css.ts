import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  gap: 29,

  '@media': {
    [theme.mediaQueries.lg()]: {
      flexDirection: 'row-reverse',
      alignItems: 'center'
    }
  }
});

export const img = style({
  maxWidth: 319,
  width: '100%',
  margin: '0 auto',

  '@media': {
    [theme.mediaQueries.lg()]: {
      maxWidth: 769,
      marginLeft: 'auto'
    }
  }
});

export const text = style({
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  marginBottom: 8,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 24
    }
  }
});

export const description = style({
  opacity: 0.64,
  marginBottom: 31,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 56
    }
  }
});

export const actions = style({
  margin: 'auto',

  '@media': {
    [theme.mediaQueries.lg()]: {
      margin: 0
    }
  }
});
