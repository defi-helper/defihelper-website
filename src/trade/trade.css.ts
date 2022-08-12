import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const header = style({
  marginBottom: 40
});

export const section = style({
  marginBottom: 100,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 204
    }
  }
});
