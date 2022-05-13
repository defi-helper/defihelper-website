import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const video = style({
  position: 'relative',
  overflow: 'hidden',
  width: '100%',
  paddingTop: '69.25%',
  zIndex: 0,
  margin: '0 auto'
});

export const videoInner = style({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  zIndex: -1
});
