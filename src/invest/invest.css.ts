import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

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
