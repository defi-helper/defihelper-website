import { style, globalStyle } from '@vanilla-extract/css';
import { theme } from 'src/common/theme';

export const root = style({});

export const title = style({
  marginBottom: 32,
  color: theme.palette.grey1,
  padding: '0 24px',

  '@media': {
    [theme.mediaQueries.md()]: {
      padding: 0
    }
  }
});

export const chart = style({
  width: '100%',
  height: 533
});

export const flex = style({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const percent = style({
  pointerEvents: 'none',
  fontSize: 12
});

export const date = style({});

globalStyle(`${root} ${percent} text`, {
  fontFamily: theme.fonts.square,
  fill: theme.palette.grey1
});

globalStyle(`${root} ${date} *`, {
  fontFamily: theme.fonts.mono,
  textTransform: 'uppercase',
  fill: theme.palette.grey1
});
