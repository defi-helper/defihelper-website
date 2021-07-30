import { style } from '@vanilla-extract/css';

export const root = style({
  marginLeft: -16,
  marginRight: -16
});

export const slide = style({
  padding: '1px 8px'
});

export const dots = style({
  listStyle: 'none',
  margin: [16, 0, 0],
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});

export const dot = style({
  width: 8,
  height: 8,
  borderRadius: '50%',
  border: `1px solid black`,
  margin: [0, 4],

  selectors: {
    [`${dots} .slick-active &`]: {}
  }
});
