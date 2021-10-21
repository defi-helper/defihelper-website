import { globalStyle, style } from '@vanilla-extract/css';
import { transitions } from 'polished';

import { theme } from 'src/common/theme';

export const root = style({
  borderTop: `solid 1px ${theme.palette.grey3}`,
  overflow: 'hidden',
  ...transitions('height 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms'),

  selectors: {
    '&:last-child': {
      borderBottom: `solid 1px ${theme.palette.grey3}`
    }
  }
});

export const hided = style({
  height: 0
});

export const summary = style({
  cursor: 'pointer',
  userSelect: 'none',
  padding: '16px 0 32px 0',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  outline: 'none',
  transition: 'opacity .3s ease-in-out',

  '@media': {
    [theme.mediaQueries.hover()]: {
      ':hover': {
        opacity: 0.64
      }
    }
  }
});

export const details = style({
  padding: '0 0 48px 0'
});

globalStyle(`${details} > *:last-child`, {
  marginBottom: 0
});

export const arrow = style({
  ...transitions('transform 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms')
});

export const arrowExpanded = style({
  transform: 'rotate(-45deg)'
});
