import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  marginBottom: 100,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 204
    }
  }
});

export const title = style({
  marginBottom: 30
});

export const head = style({
  color: theme.palette.grey1
});

export const row = style({
  borderBottom: `1px solid ${theme.palette.grey4}`
});

export const protcolName = style({
  display: 'flex',
  alignItems: 'center'
});

export const protocolIcon = style({
  width: 30,
  height: 30,
  marginRight: 12
});

export const placeholder = composeStyles(
  protocolIcon,
  style({
    background: theme.palette.grey1,
    borderRadius: '50%',
    display: 'block'
  })
);
