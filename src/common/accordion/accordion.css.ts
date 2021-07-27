import { style } from '@vanilla-extract/css';
import { transitions } from 'polished';

export const root = style({
  borderTop: `solid 1px black`,
  overflow: 'hidden',
  ...transitions('height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'),

  selectors: {
    '&:last-child': {
      borderBottom: `solid 1px black`
    }
  }
});

export const hided = style({
  height: 0
});

export const summary = style({
  cursor: 'pointer',
  userSelect: 'none',
  padding: '16px 0 40px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  outline: 'none',

  selectors: {
    // '& *:first-child': {
    //   flexBasis: '95%'
    // }
  }
});

export const details = style({
  padding: '0 0 64px 0',

  selectors: {
    // '& p:not(:last-child)': {
    //   marginBottom: 30
    // }
  }
});

export const arrow = style({
  ...transitions('transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms')
});

export const arrowExpanded = style({
  transform: 'rotate(-45deg)'
});
