import { style, composeStyles } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: '24px 0',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '48px 0'
    }
  }
});

export const attention = style({
  backgroundColor: theme.color.attention,
  color: theme.palette.black1,
  width: '100%',
  padding: '8px 0'
});

export const padding = style({
  padding: '0 16px'
});

export const logo = composeStyles(padding, style({}));

export const actions = composeStyles(
  padding,
  style({
    marginLeft: 'auto'
  })
);

export const btn = style({
  marginRight: 16
});
