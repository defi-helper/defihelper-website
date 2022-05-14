import { style } from '@vanilla-extract/css';
import { theme } from 'src/common/theme';

export const root = style({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 91,

  '@media': {
    [theme.mediaQueries.lg()]: {
      paddingTop: 122
    }
  }
});
