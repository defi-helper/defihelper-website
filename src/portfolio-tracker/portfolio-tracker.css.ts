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
  maxWidth: 523,
  margin: '60px 0',

  '@media': {
    [theme.mediaQueries.md()]: {
      margin: '80px 0'
    }
  }
});

export const videoTitle = style({
  maxWidth: 768
});
