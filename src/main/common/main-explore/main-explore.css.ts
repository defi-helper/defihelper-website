import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  position: 'relative',

  '@media': {
    [theme.mediaQueries.lg()]: {
      paddingBottom: 264
    }
  }
});

export const title = style({
  fontSize: 48,
  lineHeight: '56px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      fontSize: 144,
      lineHeight: '160px'
    }
  }
});

export const img = style({
  width: 262,
  height: 230,
  padding: '0 16px',
  order: -1,

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: 554,
      height: 554,
      position: 'absolute',
      top: 92,
      left: 0,
      right: 0,
      padding: 0,
      margin: 'auto',
      order: 'unset'
    }
  }
});

export const description = style({
  color: theme.palette.grey1,
  marginBottom: 16,

  '@media': {
    [theme.mediaQueries.lg()]: {
      maxWidth: 320,
      marginLeft: 'auto',
      marginBottom: 0
    }
  }
});

export const col = style({
  padding: '0 16px',
  width: '100%',

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: '50%'
    }
  }
});
