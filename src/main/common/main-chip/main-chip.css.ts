import { style } from '@vanilla-extract/css';
import { theme } from 'src/common/theme';

export const root = style({
  display: 'flex',
  alignItems: 'center',
  borderRadius: 8,
  padding: 8,

  '@media': {
    [theme.mediaQueries.md()]: {
      borderRadius: 16,
      padding: 16
    }
  }
});

export const icon = style({
  marginRight: 8,
  width: 20,
  height: 20,

  '@media': {
    [theme.mediaQueries.md()]: {
      width: 40,
      height: 40
    }
  }
});
