import { style } from '@vanilla-extract/css';

export const root = style({
  maxWidth: 400,
  width: '100%',
  padding: 25,
  height: 460
});

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: '100%'
});

export const inputs = style({
  margin: 'auto'
});

export const input = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 10
    }
  }
});

export const button = style({
  width: '100%'
});
