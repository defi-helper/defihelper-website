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

export const attentionText = style({
  fontSize: 12,
  lineHeight: '16px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      fontSize: 16,
      lineHeight: '24px'
    }
  }
});

export const padding = style({
  padding: '0 16px'
});

export const logo = composeStyles(
  padding,
  style({
    width: 216,
    height: 16,

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: 308,
        height: 24
      }
    }
  })
);

export const actions = composeStyles(
  padding,
  style({
    marginLeft: 'auto',
    display: 'none',

    '@media': {
      [theme.mediaQueries.lg()]: {
        display: 'block'
      }
    }
  })
);

export const btn = style({
  marginRight: 16
});
