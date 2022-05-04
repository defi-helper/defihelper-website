import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const header = style({
  marginBottom: 20
});

export const section = style({
  marginLeft: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 0
    }
  }
});
