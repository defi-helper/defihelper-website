import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  padding: '40px 0',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '40px 0 114px 0'
    }
  }
});

export const logo = style({
  order: 5,
  marginTop: 56,

  '@media': {
    [theme.mediaQueries.lg()]: {
      order: 'unset',
      marginTop: 0
    }
  }
});

export const mb56mobile = style({
  marginBottom: 56,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 0
    }
  }
});

export const padding = style({
  padding: '0 16px'
});

export const col = style([
  padding,
  style({
    width: '50%',

    '@media': {
      [theme.mediaQueries.lg()]: {
        width: '20%'
      }
    }
  })
]);

export const mb = style({
  marginBottom: 12,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 16
    }
  }
});

export const list = style({
  listStyle: 'none',
  padding: 0,
  margin: 0
});

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 8
    }
  }
});

export const socialLink = style({
  verticalAlign: 'middle',
  display: 'inline-flex',
  alignItems: 'center'
});

export const socialIcon = style({
  marginRight: 4
});

export const grey = style({
  color: theme.palette.grey1
});
