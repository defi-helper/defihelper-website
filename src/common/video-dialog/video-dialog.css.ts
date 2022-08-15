import { style } from '@vanilla-extract/css';

export const root = style({
  maxWidth: 1104,
  width: '100%'
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
