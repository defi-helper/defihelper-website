import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const hero = style({
  marginBottom: 80,
  maxWidth: '100%',
  overflowX: 'hidden',
  overflowY: 'visible',

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 100
    }
  }
});

export const section = style({
  marginBottom: 100,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 204
    }
  }
});
