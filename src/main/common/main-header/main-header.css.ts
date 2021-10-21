import { composeStyles, style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  overflowX: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  minHeight: 'calc(100vh - 84px)',

  '@media': {
    [theme.mediaQueries.md()]: {
      minHeight: 'calc(100vh - 116px)'
    }
  }
});

export const col = style({
  padding: '0 16px'
});

export const hero = style({
  marginTop: 'auto',
  marginBottom: 'auto'
});

export const bottom = style({
  marginBottom: 20
});

export const subtitle = style({
  marginBottom: 24,
  color: theme.palette.grey1,
  fontSize: 34,
  lineHeight: '42px'
});

export const text = composeStyles(
  col,
  style({
    '@media': {
      [theme.mediaQueries.lg()]: {
        paddingTop: 64,
        paddingBottom: 80
      }
    }
  })
);

export const logo = style({
  maxWidth: '100%',
  marginBottom: 40
});
