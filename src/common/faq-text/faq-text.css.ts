import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});
