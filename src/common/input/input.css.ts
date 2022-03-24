import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  display: 'inline-flex',
  flexDirection: 'column',
  width: '100%',
  fontFamily: theme.fonts.square,
  position: 'relative',
  backgroundColor: theme.color.background,
  borderRadius: 8,
  fontSize: 16,
  lineHeight: '24px'
});

export const input = style({
  display: 'block',
  width: 'inherit',
  height: 'inherit',
  outline: 'none',
  border: 'none',
  fontSize: 'inherit',
  lineHeight: 'inherit',
  textTransform: 'inherit',
  fontFamily: 'inherit',
  background: 'transparent',
  padding: '8px 16px',
  color: 'currentcolor',

  '::placeholder': {
    color: theme.palette.grey1
  }
});

export const error = style({});
