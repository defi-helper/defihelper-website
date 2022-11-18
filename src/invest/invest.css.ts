import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const hero = style({
  marginBottom: 80,
  overflow: 'hidden',
  paddingBottom: 73,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 100,
      paddingBottom: 0
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

export const security = style({
  marginBottom: 32,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 80
    }
  }
});
