import { globalStyle, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  borderRadius: 8,
  width: '100%',
  height: 48,
  background: theme.palette.black1,
  margin: '0 12px',
  position: 'relative',
  display: 'flex',
  padding: '0 12px',
  alignItems: 'center'
});

export const input = style({
  backgroundColor: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'inherit',
  fontFamily: 'inherit',
  fontSize: 24,
  lineHeight: '32px',
  width: '100%'
});

export const slider = style({
  position: 'absolute',
  left: 8,
  right: 8,
  bottom: -5,
  width: 'auto'
});

export const rightSection = style({
  color: theme.palette.grey1
});

globalStyle(`${slider} .rc-slider-rail`, {
  borderRadius: 0,
  backgroundColor: 'transparent'
});

globalStyle(`${slider} .rc-slider-track`, {
  borderRadius: 0,
  backgroundColor: theme.palette.brown1
});

globalStyle(`${slider} .rc-slider-handle`, {
  backgroundColor: theme.palette.brown1,
  borderColor: theme.palette.brown1
});

globalStyle(`${slider} .rc-slider-handle:active`, {
  boxShadow: 'none'
});
