import { style } from '@vanilla-extract/css';

import { theme } from 'src/common/theme';

export const root = style({
  position: 'relative'
});

export const title = style({
  maxWidth: 960,
  marginBottom: 40,

  '@media': {
    [theme.mediaQueries.md()]: {
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
  padding: 24,

  '@media': {
    [theme.mediaQueries.md()]: {
      padding: '64px 40px 40px'
    }
  }
});

export const logo = style({
  width: 80,
  height: 80,
  marginRight: 23,
  marginLeft: 'auto',
  marginTop: -50,
  marginBottom: 'auto',
  position: 'relative',
  zIndex: 5,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginRight: 14,
      marginTop: 'auto'
    }
  }
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

export const listTitle = style({
  fontSize: 24,
  lineHeight: '32px',

  '@media': {
    [theme.mediaQueries.md()]: {
      fontSize: 40,
      lineHeight: '48px'
    }
  }
});

export const button = style({
  marginTop: 20,
  width: '100%',

  '@media': {
    [theme.mediaQueries.md()]: {
      width: 'auto'
    }
  }
});

export const explore = style({
  marginTop: 51,

  '@media': {
    [theme.mediaQueries.md()]: {
      marginTop: 20
    }
  }
});

export const tokenUtilityTitle = style({
  marginBottom: 20
});

export const tokenUtilityList = style({
  paddingLeft: 20,
  margin: 0
});

export const tokenUtilityListItem = style({
  selectors: {
    '&:not(:last-child)': {
      marginBottom: 20
    }
  }
});
