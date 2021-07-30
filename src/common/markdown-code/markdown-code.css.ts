import { style } from '@vanilla-extract/css';

export const root = style({
  borderRadius: 8,
  padding: '10px 8px',
  width: '100%',
  overflowX: 'auto',
  position: 'relative',
  wordWrap: 'break-word',
  whiteSpace: 'pre-wrap'
});

export const button = style({
  position: 'absolute',
  right: 8,
  top: 8,
  padding: '2px 8px',
  borderRadius: 5
});
