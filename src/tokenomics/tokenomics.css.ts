import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const header = style({
  marginBottom: 32
});

export const section = style({
  marginBottom: 160,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 264
    }
  }
});

export const progress = style({
  padding: '0 16px'
});
