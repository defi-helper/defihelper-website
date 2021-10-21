import { style } from '@vanilla-extract/css';
import { theme } from 'src/common/theme';

export const header = style({
  marginBottom: 80,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 180
    }
  }
});

export const section = style({
  marginBottom: 160,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 264
    }
  }
});
