import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const mb = style({
  marginBottom: 50,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginBottom: 266
    }
  }
});

export const header = style({
  minHeight: 'calc(100vh - 116px)',
  display: 'flex',
  flexDirection: 'column'
});

export const title = style({
  margin: '60px 0',
  maxWidth: 523,

  '@media': {
    [theme.mediaQueries.md()]: {
      margin: '180px 0'
    }
  }
});

export const videoTitle = style({
  maxWidth: 1037
});
