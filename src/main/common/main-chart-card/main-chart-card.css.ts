import { style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  width: '100%'
});

export const title = style({
  marginBottom: 8
});

export const subtitle = style({
  fontSize: 38,
  lineHeight: '46px',
  fontFamily: theme.fonts.mono,
  marginBottom: 48,
  width: '100%'
});

export const grey = style({
  color: theme.palette.grey1
});

export const color = styleVariants({
  restake: {
    color: theme.palette.red
  },

  hold: {
    color: theme.palette.brown1
  },

  autostaking: {
    color: theme.palette.green1
  }
});

export const chart = style({
  height: 184,
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: 240
    }
  }
});
