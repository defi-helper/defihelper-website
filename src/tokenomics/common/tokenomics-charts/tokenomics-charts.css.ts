import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const grid = style({
  display: 'grid',
  padding: '24px 0',
  gridGap: 58,

  '@media': {
    [theme.mediaQueries.lg()]: {
      gridTemplateColumns: '1fr 1fr',
      padding: '48px 64px',
      gridGap: 116
    }
  }
});
