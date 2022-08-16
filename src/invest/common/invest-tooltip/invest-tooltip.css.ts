import { globalStyle, style, styleVariants } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'inline-flex',
  position: 'relative'
});

export const dropdown = style({
  position: 'absolute',
  top: '100%',
  paddingTop: 8,
  right: 0,
  display: 'none',
  zIndex: 100
});

export const directions = styleVariants({
  left: {
    left: 0
  },

  right: {
    right: 0
  }
});

export const dropdownInner = style({
  flexDirection: 'column',
  padding: 16,
  border: `1px solid ${theme.palette.grey8}`,
  boxShadow: '0px 8px 24px rgba(10, 18, 19, 0.4)',
  minWidth: 300,
  textAlign: 'left'
});

globalStyle(`${root}:hover ${dropdown}`, {
  display: 'flex'
});
