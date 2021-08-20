import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const section = style({
  marginBottom: 160,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 264
    }
  }
});
