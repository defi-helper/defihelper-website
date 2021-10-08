import { style } from '@vanilla-extract/css';

export const root = style({
  margin: '0 0 48px',
  padding: '0 0 0 30px'
});

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 15
    }
  }
});
