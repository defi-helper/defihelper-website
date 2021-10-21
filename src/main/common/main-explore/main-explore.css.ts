import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  position: 'relative'
});

export const title = style({
  maxWidth: 960,
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.lg()]: {
      marginBottom: 64
    }
  }
});

export const col = style({
  padding: '0 16px',
  width: '100%',
  marginBottom: 16,

  '@media': {
    [theme.mediaQueries.lg()]: {
      width: '33.33%',
      marginBottom: 0
    }
  }
});

export const colContent = style({
  minHeight: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  position: 'relative',
  padding: '40px 20px',

  '@media': {
    [theme.mediaQueries.lg()]: {
      padding: '64px 40px 40px'
    }
  }
});

export const logo = style({
  width: 80,
  height: 80,
  marginLeft: 'auto',
  marginTop: 'auto',
  marginBottom: 'auto',
  marginRight: 14
});

export const list = style({
  margin: 0,
  padding: 0,
  listStyle: 'none'
});

export const listItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 32
    }
  }
});

export const listItemTitle = style({
  opacity: 0.64
});

export const listItemDescription = style({
  opacity: 0.8,
  marginBottom: 'auto'
});

export const button = style({
  marginTop: 20
});
