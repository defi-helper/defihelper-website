import { style } from '@vanilla-extract/css';
import { theme } from 'src/common/theme';

export const header = style({
  marginBottom: 80,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 120
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
