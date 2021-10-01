import { style } from '@vanilla-extract/css';

export const root = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  maxWidth: 400,
  width: '100%',
  padding: 25,
  height: 460
});

export const text = style({
  margin: 'auto',
  maxWidth: 400
});

export const button = style({
  width: '100%'
});
