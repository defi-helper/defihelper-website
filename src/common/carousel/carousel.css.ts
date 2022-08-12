import { style } from '@vanilla-extract/css';
import { theme } from '../theme';

export const root = style({
  marginLeft: -16,
  marginRight: -16
});

export const slide = style({
  padding: '1px 4px'
});

export const dots = style({
  listStyle: 'none',
  margin: '24px 0 0',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 18
});

export const dot = style({
  width: 10,
  height: 10,
  borderRadius: '50%',
  margin: [0, 4],
  background: theme.palette.grey6,

  selectors: {
    [`${dots} .slick-active &`]: {
      background: theme.palette.green1
    }
  }
});
