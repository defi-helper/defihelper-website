import { style } from '@vanilla-extract/css';

export const root = style({
  margin: '0 0 48px',
  padding: '0 0 0 30px'
});

export const listItem = style({
  fontSize: 16,
  lineHeight: '20px',

  selectors: {
    '&:not(:last-child)': {
      marginBottom: 15
    }
  }
});
